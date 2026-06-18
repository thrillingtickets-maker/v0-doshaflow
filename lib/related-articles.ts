// Contextual article relationships for internal linking
export const relatedArticleMap: Record<string, { title: string; href: string }[]> = {
  // Anxiety/Stress cluster
  "anxiety": [
    { title: "Stress and the Nervous System", href: "/blog/ayurveda-for-stress" },
    { title: "Burnout vs Depression: A Dosha Perspective", href: "/blog/nervous-system-burnout" },
    { title: "Sleep Recovery After Burnout", href: "/blog/ayurveda-for-insomnia" },
    { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
    { title: "Vata Dosha Guide", href: "/vata" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  "stress": [
    { title: "Anxiety and Overstimulation", href: "/blog/ayurveda-for-anxiety" },
    { title: "Nervous System Dysregulation", href: "/blog/ayurveda-for-anxiety" },
    { title: "Best Ayurvedic Tea for Sleep", href: "/blog/best-ayurvedic-tea-sleep" },
    { title: "Pitta Dosha Guide", href: "/pitta" },
    { title: "Discover Your Dosha", href: "/quiz" },
  ],
  "nervous-system-burnout": [
    { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
    { title: "Alcohol and Sleep", href: "/blog/alcohol-ayurveda" },
    { title: "Sleep Recovery", href: "/blog/ayurveda-for-insomnia" },
    { title: "Why I'm Building DoshaFlow", href: "/blog/why-im-building-doshaflow" },
    { title: "Retreat Journal: Day 10", href: "/blog/retreat-day-10" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Sleep cluster
  "sleep": [
    { title: "Best Ayurvedic Tea for Sleep", href: "/blog/best-ayurvedic-tea-sleep" },
    { title: "Stress and Nervous System Recovery", href: "/blog/ayurveda-for-stress" },
    { title: "Why Alcohol Ruins Sleep", href: "/blog/alcohol-ayurveda" },
    { title: "Vata Dosha Guide", href: "/vata" },
    { title: "Discover Your Dosha", href: "/quiz" },
  ],
  "tired": [
    { title: "Sleep Recovery Protocols", href: "/blog/ayurveda-for-insomnia" },
    { title: "Kapha Imbalance and Lethargy", href: "/kapha" },
    { title: "Burnout vs Depression", href: "/blog/nervous-system-burnout" },
    { title: "Chronic Exhaustion", href: "/blog/ayurveda-burnout" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Digestive cluster
  "digest": [
    { title: "Why Am I Always Bloated", href: "/blog/why-am-i-always-bloated" },
    { title: "Ice Water and Digestion", href: "/blog/ayurveda-ice-water" },
    { title: "Best Herbs for Digestion", href: "/blog/best-ayurvedic-tea-digestion" },
    { title: "Pitta Dosha Guide", href: "/pitta" },
    { title: "Discover Your Dosha", href: "/quiz" },
  ],
  "bloat": [
    { title: "Digestion and Vata", href: "/blog/ayurveda-for-ibs" },
    { title: "Ice Water Destroys Digestion", href: "/blog/ayurveda-ice-water" },
    { title: "Tea for Digestive Health", href: "/blog/best-ayurvedic-tea-digestion" },
    { title: "Kapha Dosha Guide", href: "/kapha" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Alcohol cluster
  "alcohol": [
    { title: "Sleep Recovery", href: "/blog/ayurveda-for-insomnia" },
    { title: "Burnout and Nervous System", href: "/blog/nervous-system-burnout" },
    { title: "Honest Beginner's Guide to Ayurveda", href: "/blog/ayurveda-beginners-guide" },
    { title: "Retreat Journal: Sobriety", href: "/blog/retreat-day-11" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Tea articles
  "tea": [
    { title: "Best Herbs for Sleep", href: "/blog/best-ayurvedic-tea-sleep" },
    { title: "Stress and Digestion", href: "/blog/ayurveda-for-stress" },
    { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
    { title: "Vata, Pitta, Kapha Guides", href: "/start-here" },
    { title: "Discover Your Dosha", href: "/quiz" },
  ],
  
  // Herb articles
  "herb": [
    { title: "Ashwagandha Benefits", href: "/blog/ashwagandha-benefits" },
    { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
    { title: "Dosha-Specific Herbs", href: "/start-here" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Dosha articles
  "vata": [
    { title: "Pitta Dosha Guide", href: "/pitta" },
    { title: "Kapha Dosha Guide", href: "/kapha" },
    { title: "Anxiety and Vata", href: "/blog/vata-anxiety-guide" },
    { title: "Sleep for Vata Types", href: "/blog/best-ayurvedic-tea-sleep" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  "pitta": [
    { title: "Vata Dosha Guide", href: "/vata" },
    { title: "Kapha Dosha Guide", href: "/kapha" },
    { title: "Burnout and Pitta", href: "/blog/nervous-system-burnout" },
    { title: "Cooling Herbs for Pitta", href: "/blog/best-herbs-for-anxiety" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  "kapha": [
    { title: "Vata Dosha Guide", href: "/vata" },
    { title: "Pitta Dosha Guide", href: "/pitta" },
    { title: "Weight Loss and Kapha", href: "/blog/kapha-weight-loss-guide" },
    { title: "Movement for Kapha", href: "/blog/ayurveda-exercise" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Chronic pain/healing
  "chronic-pain": [
    { title: "Sleep and Recovery", href: "/blog/ayurveda-for-insomnia" },
    { title: "Stress Causes Pain", href: "/blog/ayurveda-for-stress" },
    { title: "Nervous System and Chronic Pain", href: "/blog/ayurveda-for-anxiety" },
    { title: "Retreat Experience", href: "/journal" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  
  // Retreat journal
  "retreat-day": [
    { title: "Alcohol and Sleep", href: "/blog/alcohol-ayurveda" },
    { title: "Sleep and Healing", href: "/blog/ayurveda-for-insomnia" },
    { title: "Chronic Pain and Rest", href: "/blog/chronic-pain-management" },
    { title: "Why I'm Building DoshaFlow", href: "/blog/why-im-building-doshaflow" },
    { title: "Read More Retreat Entries", href: "/journal" },
  ],
  
  // Editorial/founder
  "honest-beginners-guide": [
    { title: "Why I'm Building DoshaFlow", href: "/blog/why-im-building-doshaflow" },
    { title: "Is Ayurveda Safe?", href: "/transparency" },
    { title: "Ayurveda for Men", href: "/blog/ayurveda-for-men" },
    { title: "Retreat Journal", href: "/journal" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  "why-building": [
    { title: "Honest Beginner's Guide", href: "/blog/ayurveda-beginners-guide" },
    { title: "Chronic Pain Changed My Perspective", href: "/blog/ayurveda-burnout" },
    { title: "Retreat Journal", href: "/journal" },
    { title: "Ayurveda for Men", href: "/blog/ayurveda-for-men" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
  "is-ayurveda-safe": [
    { title: "Honest Beginner's Guide", href: "/blog/ayurveda-beginners-guide" },
    { title: "Why I'm Building DoshaFlow", href: "/blog/why-im-building-doshaflow" },
    { title: "Traveling the Ayurvedic Way", href: "/blog/ayurveda-for-travel" },
    { title: "About DoshaFlow", href: "/about" },
    { title: "Take the Dosha Quiz", href: "/quiz" },
  ],
};

export function getRelatedArticles(slug: string): { title: string; href: string }[] {
  // Check exact match first
  if (relatedArticleMap[slug]) {
    return relatedArticleMap[slug];
  }
  
  // Check partial matches
  for (const [key, articles] of Object.entries(relatedArticleMap)) {
    if (slug.includes(key)) {
      return articles;
    }
  }
  
  // Default fallback
  return [
    { title: "Vata Dosha Guide", href: "/vata" },
    { title: "Pitta Dosha Guide", href: "/pitta" },
    { title: "Kapha Dosha Guide", href: "/kapha" },
    { title: "Retreat Journal", href: "/journal" },
    { title: "Discover Your Dosha", href: "/quiz" },
  ];
}
