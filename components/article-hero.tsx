interface ArticleHeroProps {
  title: string
  category: string
  date: string
  author?: string
  highlightWord?: string
  heroImage?: string
  heroImageAlt?: string
}

import { getCategoryColor } from "@/lib/article-colors"

export function ArticleHero({
  title,
  category,
  date,
  author = "Alex",
  highlightWord,
  heroImage,
  heroImageAlt,
}: ArticleHeroProps) {
  const accentColor = getCategoryColor(category)
  
  // Split title to highlight specific word
  let titleNodes = [title]
  if (highlightWord) {
    const regex = new RegExp(`\\b(${highlightWord})\\b`, "gi")
    if (regex.test(title)) {
      titleNodes = title.split(new RegExp(`(${highlightWord})`, "i"))
    }
  }

  return (
    <header className="px-6 py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto">
        {/* Optional editorial hero illustration */}
        {heroImage && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border">
            <img
              src={heroImage || "/placeholder.svg"}
              alt={heroImageAlt || ""}
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
        )}

        {/* Category pill */}
        <div className="mb-6">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium capitalize"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            {category}
          </span>
        </div>

        {/* Title with potential highlighting */}
        <h1 className="text-2xl md:text-5xl font-serif font-bold leading-tight mb-6 text-foreground text-balance">
          {highlightWord && titleNodes.length > 1 ? (
            titleNodes.map((node, i) =>
              node.toLowerCase() === highlightWord.toLowerCase() ? (
                <span key={i} style={{ color: accentColor }}>
                  {node}
                </span>
              ) : (
                <span key={i}>{node}</span>
              )
            )
          ) : (
            title
          )}
        </h1>

        {/* Metadata */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
          <span>{author}</span>
          <span className="hidden md:inline">·</span>
          <span>{date}</span>
        </div>
      </div>
    </header>
  )
}
