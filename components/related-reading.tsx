import Link from "next/link"
import { getRelatedPosts } from "@/lib/related-articles"

const CATEGORY_LABELS: Record<string, string> = {
  article: "Article",
  journal: "Journal",
  editorial: "Editorial",
  founder: "Founder Note",
}

export function RelatedReading({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPosts(currentSlug)

  if (related.length < 1) return null

  return (
    <section
      aria-labelledby="keep-reading-heading"
      style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid #e8d9c5" }}
    >
      <style>{`
        .keep-reading-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .keep-reading-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }
        .keep-reading-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 24px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e8d9c5;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .keep-reading-card:hover {
          transform: translateY(-3px);
          border-color: #d8c3a6;
          box-shadow: 0 14px 32px -18px rgba(110, 78, 38, 0.45);
        }
        .keep-reading-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b5763a;
          margin-bottom: 12px;
        }
        .keep-reading-card-title {
          font-family: 'Lora', Georgia, serif;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.35;
          color: #2c1a0e;
          letter-spacing: -0.2px;
          margin: 0 0 10px 0;
        }
        .keep-reading-card:hover .keep-reading-card-title {
          color: #8a5a23;
        }
        .keep-reading-excerpt {
          font-size: 14px;
          line-height: 1.65;
          color: #5a5048;
          margin: 0 0 18px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .keep-reading-more {
          margin-top: auto;
          font-size: 13px;
          font-weight: 600;
          color: #b5763a;
        }
      `}</style>

      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#b5763a",
            marginBottom: "8px",
          }}
        >
          More from DoshaFlow
        </div>
        <h2
          id="keep-reading-heading"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "26px",
            fontWeight: 600,
            color: "#2c1a0e",
            margin: 0,
            letterSpacing: "-0.4px",
          }}
        >
          Keep Reading
        </h2>
      </div>

      <div className="keep-reading-grid">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="keep-reading-card">
            <span className="keep-reading-eyebrow">{CATEGORY_LABELS[post.category] ?? "Article"}</span>
            <h3 className="keep-reading-card-title">{post.title}</h3>
            <p className="keep-reading-excerpt">{post.excerpt}</p>
            <span className="keep-reading-more">Read article →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
