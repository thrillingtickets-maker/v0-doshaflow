export const NOINDEX_SLUGS: ReadonlySet<string> = new Set([
  "ayurveda-for-pcos",
  "ayurveda-for-endometriosis",
  "ayurveda-for-depression",
  "ayurveda-for-fertility",
  "ayurveda-for-arthritis",
  "ayurveda-for-heart-health",
  "ayurveda-blood-sugar",
  "ayurveda-for-ibs",
  "ayurveda-for-menopause",
  "perimenopause-ayurveda",
  "ayurveda-liver-health",
  "leaky-gut-ayurveda",
  "ayurveda-for-libido",
  "ayurveda-and-sex",
  "ayurveda-depression-anxiety",
  "ayurveda-for-eczema",
  "thyroid-metabolism",
  "chronic-pain-management",
])

export function isNoindexSlug(slug: string): boolean {
  return NOINDEX_SLUGS.has(slug)
}
