/**
 * Calculate estimated reading time from HTML content
 * Assumes ~200 words per minute for average reading speed
 */
export function calculateReadingTime(htmlContent: string): number {
  // Strip HTML tags
  const plainText = htmlContent.replace(/<[^>]*>/g, '')
  
  // Count words (split on whitespace)
  const wordCount = plainText.trim().split(/\s+/).length
  
  // Calculate reading time: 200 words per minute
  const readingTimeMinutes = Math.ceil(wordCount / 200)
  
  return Math.max(1, readingTimeMinutes)
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`
}
