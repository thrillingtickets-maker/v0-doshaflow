import type { ArticleSource } from "@/components/sources-evidence"

/**
 * Verified sources per article slug. Add an entry only after checking it
 * against the original publication (title, journal, year, PubMed/DOI link).
 * Articles without an entry show "Sources are currently being reviewed".
 */
const CHANDRASEKHAR_2012: ArticleSource = {
  title:
    "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root in reducing stress and anxiety in adults",
  journal: "Indian Journal of Psychological Medicine",
  year: 2012,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/23439798/",
  evidenceNote:
    "Randomized controlled trial, 64 stressed adults, 60 days of 600 mg/day root extract. Reported a 27.9% reduction in serum cortisol and lower stress scores versus placebo. Single centre; extract supplied by the manufacturer.",
}

const SALVE_2019: ArticleSource = {
  title:
    "Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract in Healthy Adults: A Double-blind, Randomized, Placebo-controlled Clinical Study",
  journal: "Cureus",
  year: 2019,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32021735/",
  doiUrl: "https://doi.org/10.7759/cureus.6466",
  evidenceNote:
    "Randomized controlled trial, 60 stressed adults, 8 weeks at 250 or 600 mg/day. Serum cortisol and anxiety scores fell versus placebo at both doses. Small sample.",
}

const AMSTERDAM_2009: ArticleSource = {
  title:
    "A randomized, double-blind, placebo-controlled trial of oral Matricaria recutita (chamomile) extract therapy for generalized anxiety disorder",
  journal: "Journal of Clinical Psychopharmacology",
  year: 2009,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/19593179/",
  evidenceNote:
    "Randomized controlled trial, 57 adults with mild to moderate generalized anxiety disorder, 8 weeks of chamomile extract capsules. Modest reduction in anxiety scores versus placebo. Used concentrated extract, not tea.",
}

const JAMSHIDI_COHEN_2017: ArticleSource = {
  title: "The Clinical Efficacy and Safety of Tulsi in Humans: A Systematic Review of the Literature",
  journal: "Evidence-Based Complementary and Alternative Medicine",
  year: 2017,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/28400848/",
  doiUrl: "https://doi.org/10.1155/2017/9217567",
  evidenceNote:
    "Systematic review of 24 human studies. Reported favourable effects on stress, mood and metabolic markers with no significant adverse events, but most studies were small and few were high quality.",
}

const CADEGIANI_KATER_2016: ArticleSource = {
  title: "Adrenal fatigue does not exist: a systematic review",
  journal: "BMC Endocrine Disorders",
  year: 2016,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27557747/",
  doiUrl: "https://doi.org/10.1186/s12902-016-0128-4",
  evidenceNote:
    "Systematic review of 58 studies comparing cortisol profiles with fatigue. Found no consistent evidence that fatigue symptoms are caused by adrenal glands underproducing cortisol.",
}

const BJORNSSON_2020: ArticleSource = {
  title:
    "Ashwagandha-induced liver injury: A case series from Iceland and the US Drug-Induced Liver Injury Network",
  journal: "Liver International",
  year: 2020,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/31991029/",
  doiUrl: "https://doi.org/10.1111/liv.14393",
  evidenceNote:
    "Case series of five people with liver injury linked to ashwagandha supplements. Injury was rare and resolved within 1 to 5 months after stopping in most cases. Shows the risk exists; does not show how common it is.",
}

export const ARTICLE_SOURCES: Record<string, ArticleSource[]> = {
  "ashwagandha-benefits": [CHANDRASEKHAR_2012, SALVE_2019, BJORNSSON_2020],
  "adrenal-fatigue-ayurveda": [CADEGIANI_KATER_2016, CHANDRASEKHAR_2012, SALVE_2019],
  "how-to-reduce-cortisol-naturally": [CHANDRASEKHAR_2012, SALVE_2019, BJORNSSON_2020],
  "best-ayurvedic-tea-anxiety": [AMSTERDAM_2009, JAMSHIDI_COHEN_2017, CHANDRASEKHAR_2012, BJORNSSON_2020],
  "tulsi-benefits": [JAMSHIDI_COHEN_2017],
}

export function getArticleSources(slug: string): ArticleSource[] {
  return ARTICLE_SOURCES[slug] ?? []
}
