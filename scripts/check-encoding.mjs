#!/usr/bin/env node
// Encoding guard for lib/posts.ts (and any other content files listed below).
//
// Fails the build/lint if the file contains U+FFFD (the Unicode REPLACEMENT
// CHARACTER). U+FFFD is what a botched encoding round-trip leaves behind when
// a multi-byte character (em dash, curly quote, bullet, arrow, ...) is decoded
// with the wrong charset and re-saved. A single such round-trip once corrupted
// 274 characters across 59 posts, so this runs on every push to make a
// corrupting round-trip fail loudly instead of shipping silently to readers.
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

  const occurrences = []
  for (let i = 0; i < source.length; i++) {
    if (source[i] === REPLACEMENT_CHAR) occurrences.push(i)
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
  const slugAt = (offset) => {
    let lo = 0
    let hi = slugPositions.length - 1
    let found = "(before first slug)"
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (slugPositions[mid].index <= offset) {
        found = slugPositions[mid].slug
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
    return found
  }

  console.error(
    `\n[check-encoding] Found ${occurrences.length} U+FFFD character(s) in ${file}:`,
  )
  for (const offset of occurrences) {
    let line = 1
    for (let i = 0; i < offset; i++) if (source[i] === "\n") line++
    const context = source
      .slice(Math.max(0, offset - 40), offset + 41)
      .replace(/\s+/g, " ")
      .replace(new RegExp(REPLACEMENT_CHAR, "g"), "<U+FFFD>")
    console.error(`  - [${slugAt(offset)}] line ${line}: ...${context}...`)
  }
}

if (totalBad > 0) {
  console.error(
    `\n[check-encoding] FAILED: ${totalBad} U+FFFD character(s) detected. ` +
      "This usually means a script rewrote the file with the wrong encoding. " +
      "Read and write the file as UTF-8 and restore the corrupted characters.\n",
  )
  process.exit(1)
}

console.log("[check-encoding] OK: no U+FFFD characters found.")
