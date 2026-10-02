import type { ArticleSource } from "@/components/sources-evidence"

/**
 * Verified sources per article slug. Add an entry only after checking it
 * against the original publication (title, journal, year, PubMed/DOI link).
 * Articles without an entry show "Sources are currently being reviewed".
 */
export const ARTICLE_SOURCES: Record<string, ArticleSource[]> = {}

export function getArticleSources(slug: string): ArticleSource[] {
  return ARTICLE_SOURCES[slug] ?? []
}
