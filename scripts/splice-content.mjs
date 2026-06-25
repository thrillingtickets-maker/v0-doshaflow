import { readFileSync, writeFileSync, readdirSync } from "fs"
import { join } from "path"

// Replaces the `content: ` + "`...`" template-literal value for a given slug
// with the raw HTML read from scripts/expanded/<slug>.html
// Relies on the fact that article HTML never contains a backtick character.

const POSTS = "lib/posts.ts"
const DIR = "scripts/expanded"

function escapeForTemplate(html) {
  // Escape backslashes, backticks, and ${ for safe inclusion in a template literal.
  return html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")
}

let src = readFileSync(POSTS, "utf8")
const files = readdirSync(DIR).filter((f) => f.endsWith(".html"))
const results = []

for (const file of files) {
  const slug = file.replace(/\.html$/, "")
  const html = readFileSync(join(DIR, file), "utf8").trim()
  if (html.includes("`")) {
    results.push(`SKIP ${slug}: html contains a backtick`)
    continue
  }
  // Find the entry: `slug: "<slug>"`
  const slugRe = new RegExp(`slug:\\s*"${slug.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}"`)
  const sm = slugRe.exec(src)
  if (!sm) {
    results.push(`SKIP ${slug}: entry not found`)
    continue
  }
  // From the slug position, find `content: ` followed by a backtick
  const after = src.slice(sm.index)
  const cm = after.indexOf("content: `")
  if (cm < 0) {
    results.push(`SKIP ${slug}: content field not found`)
    continue
  }
  const openIdx = sm.index + cm + "content: `".length
  // content has no backticks, so the next backtick is the closing one
  const closeIdx = src.indexOf("`", openIdx)
  if (closeIdx < 0) {
    results.push(`SKIP ${slug}: closing backtick not found`)
    continue
  }
  const before = src.slice(0, openIdx)
  const rest = src.slice(closeIdx)
  src = before + escapeForTemplate(html) + rest
  const words = html.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length
  results.push(`OK   ${slug}: ${words} words`)
}

writeFileSync(POSTS, src)
console.log(results.join("\n"))
