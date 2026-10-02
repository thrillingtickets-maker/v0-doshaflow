export interface ArticleSource {
  title: string
  journal?: string
  year?: number
  pubmedUrl?: string
  doiUrl?: string
  evidenceNote?: string
}

/**
 * "Sources & Evidence" block for articles. Only add entries that have been
 * checked against the original publication; never add unverified citations.
 * With no sources, it states that sources are under review.
 */
export function SourcesEvidence({ sources = [] }: { sources?: ArticleSource[] }) {
  return (
    <section aria-labelledby="sources-evidence-heading" className="sources-evidence">
      <h2 id="sources-evidence-heading" className="sources-evidence__title">
        Sources &amp; Evidence
      </h2>
      {sources.length === 0 ? (
        <p className="sources-evidence__empty">Sources are currently being reviewed for this article.</p>
      ) : (
        <ol className="sources-evidence__list">
          {sources.map((source) => (
            <li key={source.title}>
              <p className="sources-evidence__study">{source.title}</p>
              {(source.journal || source.year) && (
                <p className="sources-evidence__meta">
                  {[source.journal, source.year].filter(Boolean).join(", ")}
                </p>
              )}
              {(source.pubmedUrl || source.doiUrl) && (
                <p className="sources-evidence__links">
                  {source.pubmedUrl && (
                    <a href={source.pubmedUrl} target="_blank" rel="noopener noreferrer">
                      PubMed
                    </a>
                  )}
                  {source.doiUrl && (
                    <a href={source.doiUrl} target="_blank" rel="noopener noreferrer">
                      DOI
                    </a>
                  )}
                </p>
              )}
              {source.evidenceNote && <p className="sources-evidence__note">{source.evidenceNote}</p>}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
