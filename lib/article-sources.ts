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

const ALAMMAR_2019: ArticleSource = {
  title:
    "The impact of peppermint oil on the irritable bowel syndrome: a meta-analysis of the pooled clinical data",
  journal: "BMC Complementary and Alternative Medicine",
  year: 2019,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/30654773/",
  doiUrl: "https://doi.org/10.1186/s12906-018-2409-0",
  evidenceNote:
    "Meta-analysis of 12 randomized trials with 835 adults with irritable bowel syndrome. Peppermint oil capsules improved abdominal pain and overall symptoms versus placebo. Studied concentrated oil capsules, not tea.",
}

const WU_2008: ArticleSource = {
  title: "Effects of ginger on gastric emptying and motility in healthy humans",
  journal: "European Journal of Gastroenterology and Hepatology",
  year: 2008,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/18403946/",
  evidenceNote:
    "Randomized, double-blind crossover study in 24 healthy volunteers. 1.2 g of ginger in capsules sped up stomach emptying compared with placebo. Small study in healthy people, using capsules rather than tea.",
}

const VILJOEN_2014: ArticleSource = {
  title:
    "A systematic review and meta-analysis of the effect and safety of ginger in the treatment of pregnancy-associated nausea and vomiting",
  journal: "Nutrition Journal",
  year: 2014,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/24642205/",
  doiUrl: "https://doi.org/10.1186/1475-2891-13-20",
  evidenceNote:
    "Systematic review of randomized trials. Ginger improved nausea symptoms compared with placebo, without a significant effect on vomiting. The authors rated the overall quality of evidence as low.",
}

const KONGKEAW_2014: ArticleSource = {
  title: "Meta-analysis of randomized controlled trials on cognitive effects of Bacopa monnieri extract",
  journal: "Journal of Ethnopharmacology",
  year: 2014,
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/24252493/",
  evidenceNote:
    "Meta-analysis of randomized trials (437 participants) of brahmi extract taken for 12 weeks or more. Found modest improvements in speed of attention; the authors called for larger trials before drawing firm conclusions.",
}

export const ARTICLE_SOURCES: Record<string, ArticleSource[]> = {
  "ashwagandha-benefits": [CHANDRASEKHAR_2012, SALVE_2019, BJORNSSON_2020],
  "adrenal-fatigue-ayurveda": [CADEGIANI_KATER_2016, CHANDRASEKHAR_2012, SALVE_2019],
  "how-to-reduce-cortisol-naturally": [CHANDRASEKHAR_2012, SALVE_2019, BJORNSSON_2020],
  "best-ayurvedic-tea-anxiety": [AMSTERDAM_2009, JAMSHIDI_COHEN_2017, CHANDRASEKHAR_2012, BJORNSSON_2020],
  "tulsi-benefits": [JAMSHIDI_COHEN_2017],
  "best-tea-for-bloating": [ALAMMAR_2019, WU_2008, VILJOEN_2014],
  "best-tea-for-vata": [VILJOEN_2014, WU_2008, JAMSHIDI_COHEN_2017, AMSTERDAM_2009, CHANDRASEKHAR_2012],
  "ashwagandha-vs-brahmi": [CHANDRASEKHAR_2012, SALVE_2019, KONGKEAW_2014],
  "how-to-take-ashwagandha": [CHANDRASEKHAR_2012, SALVE_2019],
}

export function getArticleSources(slug: string): ArticleSource[] {
  return ARTICLE_SOURCES[slug] ?? []
}
