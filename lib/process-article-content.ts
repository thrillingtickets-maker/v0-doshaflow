/**
 * Processes article HTML content to detect and convert inline section titles
 * to semantic H3 headings. Targets patterns like:
 * - "Vata Skin: Dry, Sensitive, Aging"
 * - "Pitta Skin: Inflamed, Reactive, Acne-Prone"
 * - "Kapha Skin: Heavy, Oily, Congested"
 */
export function processArticleContent(html: string): string {
  // Pattern to detect section title lines that should be H3s
  // Matches paragraphs that start with a dosha name (Vata/Pitta/Kapha) or similar patterns
  // and contain a colon followed by descriptive text
  const sectionTitlePattern = /<p>([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*:\s*[^<]+)<\/p>/g

  return html.replace(sectionTitlePattern, (match, content) => {
    // Check if this looks like a section title (has colon and capitalized start)
    // and is relatively short (not a full paragraph)
    const lines = content.trim().split('\n')
    
    if (lines.length === 1 && content.includes(':') && content.length < 120) {
      // This looks like a section title, convert to H3
      return `<h3>${content}</h3>`
    }
    
    // Otherwise keep as paragraph
    return match
  })
}
