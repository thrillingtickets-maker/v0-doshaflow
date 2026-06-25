// Category-based accent colors for article heroes
// These colors align with DoshaFlow's color system and article categories

export function getCategoryColor(category: string): string {
  const colorMap: Record<string, string> = {
    // Dosha guides
    vata: "#C97F3D", // Ochre/rust
    pitta: "#C97F3D", // Terracotta
    kapha: "#8B9D6F", // Olive
    
    // Wellness topics
    journal: "#C97F3D", // Retreat journal - ochre
    sleep: "#8B9D6F", // Sleep - calm olive
    digestion: "#8B9D6F", // Digestion - earthy
    stress: "#C97F3D", // Stress/anxiety - warming ochre
    "men's health": "#C97F3D", // Warm earth tone
    "women's health": "#C97F3D", // Warm earth tone
    hormones: "#C97F3D", // Hormonal - warm
    
    // Default fallback
    default: "#C97F3D",
  }

  const normalized = category.toLowerCase()
  
  // Check for direct match
  if (colorMap[normalized]) {
    return colorMap[normalized]
  }
  
  // Check for partial matches
  for (const [key, color] of Object.entries(colorMap)) {
    if (key !== "default" && normalized.includes(key)) {
      return color
    }
  }
  
  // Fallback
  return colorMap.default
}

// Map of articles with their highlight words
export const highlightMap: Record<string, string> = {
  "aging-gracefully": "Aging",
  "ashwagandha-benefits": "Ashwagandha",
  "ayurveda-30-days": "Ayurveda",
  "ayurveda-aging": "Aging",
  "ayurveda-alcohol": "Alcohol",
  "ayurveda-alcohol-recovery": "Recovery",
  "ayurveda-beginners-guide": "Ayurveda",
  "ayurveda-burnout": "Burnout",
  "ayurveda-coffee": "Coffee",
  "ayurveda-cold-smoothies": "Smoothies",
  "ayurveda-cortisol-stress": "Cortisol",
  "ayurveda-energy": "Energy",
  "ayurveda-exercise": "Exercise",
  "ayurveda-for-ibs": "Gut",
  "ayurveda-gut-health": "Gut",
  "ayurveda-hormonal-balance": "Women",
  "ayurveda-hormones-women": "Hormones",
  "ayurveda-ice-water": "Water",
  "ayurveda-meat-fish": "Diet",
  "ayurveda-sex": "Sex",
  "ayurvedic-herbs-guide": "Herbs",
  "ayurvedic-morning-routine": "Morning",
  "ayurvedic-skin-guide": "Skin",
  "ayurvedic-sleep-hygiene": "Sleep",
  "ayurvedic-tea-guide": "Tea",
  "ayurvedic-weight-loss": "Weight",
  "best-ayurvedic-tea-anxiety": "Anxiety",
  "best-ayurvedic-tea-digestion": "Tea",
  "best-ayurvedic-tea-sleep": "Sleep",
  "best-herbs-for-anxiety": "Anxiety",
  "best-spices-for-digestion": "Digestion",
  "best-tea-for-bloating": "Bloating",
  "best-tea-for-digestion": "Tea",
  "best-tea-for-kapha": "Kapha",
  "best-tea-for-pitta": "Pitta",
  "best-tea-for-sleep": "Sleep",
  "best-tea-for-stress": "Tea",
  "best-tea-for-vata": "Vata",
  "brahmi-benefits": "Benefits",
  "chronic-pain-management": "Healing",
  "dopamine-detox-vs-ayurveda": "Ayurveda",
  "eating-for-your-dosha": "Dosha",
  "healing-after-chronic-stress": "Healing",
  "how-to-improve-digestion-naturally": "Digestion",
  "modern-wellness-rest": "Rest",
  "nervous-system-regulation-ayurveda": "Safe",
  "post-vacation-fatigue": "Vacation",
  "quiet-health-habits": "Quiet",
  "i-cant-lose-weight": "Weight",
  "i-have-no-energy": "Energy",
  "im-burned-out": "Burnout",
  "kapha-diet-plan": "Kapha",
  "kapha-dosha-guide": "Kapha",
  "kapha-foods-to-avoid": "Kapha",
  "kapha-morning-routine": "Morning",
  "leaky-gut-ayurveda": "Gut",
  "mens-guide-to-ashwagandha": "Men",
  "mens-sleep-guide-ayurveda": "Sleep",
  "nervous-system-burnout": "Burnout",
  "perimenopause-ayurveda": "Aging",
  "pitta-diet-plan": "Pitta",
  "pitta-dosha-guide": "Pitta",
  "pitta-foods-to-avoid": "Pitta",
  "pitta-morning-routine": "Morning",
  "retreat-day-1": "Day",
  "retreat-day-2": "Day",
  "retreat-day-3": "Day",
  "retreat-day-4": "Day",
  "retreat-day-5": "Day",
  "retreat-day-6": "Day",
  "signs-of-high-cortisol": "Cortisol",
  "stress-hair-loss-ayurveda": "Hair",
  "triphala-benefits": "Herbs",
  "vata-anxiety-guide": "Anxiety",
  "vata-diet-plan": "Vata",
  "vata-dosha-guide": "Vata",
  "vata-foods-to-avoid": "Vata",
  "vata-morning-routine": "Morning",
  "why-am-i-always-bloated": "Bloating",
  "why-am-i-always-tired": "Tired",
  "why-men-burn-out": "Vata",
  "why-im-building-doshaflow": "Safety",
}

