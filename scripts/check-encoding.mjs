#!/usr/bin/env node
// Encoding guard for lib/posts.ts (and any other content files listed below).
//
// RULE: the file must be pure ASCII. Every character must have a code point
// <= 0x7F. Non-ASCII punctuation (em dash, en dash, curly quotes, bullet,
// arrow, middle dot, accented letters, ...) MUST be written as \uXXXX escapes,
// which JavaScript resolves at parse time so the rendered output is identical.
//
// Why ASCII-only: a chunk-boundary bug in a file-transfer path was splitting
// multi-byte UTF-8 characters and leaving U+FFFD behind (274 chars corrupted
// across 59 posts in one incident, then recurring in smaller bursts). An
// ASCII-only source has no multi-byte characters to split, so the failure mode
// cannot occur. This check is strictly stronger than the old U+FFFD-only scan:
// a corrupted multi-byte char and every mojibake variant are non-ASCII too, so
// they all fail here.
//
// Zero dependencies: Node built-ins only.

import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const REPLACEMENT_CHAR = "\uFFFD"
const __dirname = dirname(fileURLToPath(import.meta.url))
const FILES = [resolve(__dirname, "..", "lib", "posts.ts")]

let totalBad = 0

for (const file of FILES) {
  // Explicit UTF-8 read: mirrors the contract that any rewrite must honor.
  const source = readFileSync(file, { encoding: "utf8" })

  // Collect every non-ASCII code point (> 0x7F). Iterate by code point so an
  // astral character counts once rather than as two surrogate halves.
  const occurrences = []
  let offset = 0
  for (const ch of source) {
    const cp = ch.codePointAt(0)
    if (cp > 0x7f) occurrences.push({ offset, cp, ch })
    offset += ch.length // advance by UTF-16 units so line mapping stays correct
  }
  if (occurrences.length === 0) continue

  totalBad += occurrences.length

  // Map each occurrence to the nearest preceding `slug: "..."` so the report
  // points at the offending post, plus a one-line context window.
  const slugPositions = []
  const slugRe = /slug:\s*"([^"]+)"/g
  let m
  while ((m = slugRe.exec(source)) !== null) {
    slugPositions.push({ slug: m[1], index: m.index })
  }
  const slugAt = (off) => {
    let lo = 0
    let hi = slugPositions.length - 1
    let found = "(before first slug)"
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (slugPositions[mid].index <= off) {
        found = slugPositions[mid].slug
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
    return found
  }

  console.error(`\n[check-encoding] Found ${occurrences.length} non-ASCII character(s) in ${file}:`)
  for (const { offset: off, cp, ch } of occurrences) {
    let line = 1
    let col = 1
    for (let i = 0; i < off; i++) {
      if (source[i] === "\n") {
        line++
        col = 1
      } else {
        col++
      }
    }
    const code = "U+" + cp.toString(16).toUpperCase().padStart(4, "0")
    // Special-case U+FFFD: it means a multi-byte char was already destroyed,
    // so keep the historical, unmistakable label for that failure.
    const label = ch === REPLACEMENT_CHAR ? `<U+FFFD REPLACEMENT CHARACTER>` : `<${code}>`
    const context = source
      .slice(Math.max(0, off - 40), off + 41)
      .replace(/\s+/g, " ")
      .replaceAll(ch, label)
    console.error(`  - [${slugAt(off)}] line ${line}, col ${col}: ${code} ...${context}...`)
  }
}

if (totalBad > 0) {
  console.error(
    `\n[check-encoding] FAILED: ${totalBad} non-ASCII character(s) detected. ` +
      "lib/posts.ts must be pure ASCII: write non-ASCII characters as \\uXXXX " +
      "escapes (e.g. \\u2014 for an em dash). A raw U+FFFD means a multi-byte " +
      "character was already corrupted and must be restored to its real value.\n",
  )
  process.exit(1)
}

console.log("[check-encoding] OK: lib/posts.ts is pure ASCII (no characters above U+007F).")
