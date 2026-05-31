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
  "best-herbs-for-anxiety": "Anxiety",
  "best-ayurvedic-tea-anxiety": "Anxiety",
  "best-ayurvedic-tea-sleep": "Sleep",
  "im-burned-out": "Burnout",
  "why-men-burn-out": "Burnout",
  "ayurvedic-morning-routine": "Morning",
  "ayurvedic-tea-guide": "Tea",
  "how-to-improve-digestion-naturally": "Digestion",
  "vata-anxiety-guide": "Anxiety",
  "pitta-diet-plan": "Diet",
  "kapha-diet-plan": "Diet",
  "mens-guide-to-ashwagandha": "Ashwagandha",
  "retreat-day-1": "Day",
  "retreat-day-2": "Day",
  "retreat-day-3": "Day",
  "retreat-day-4": "Day",
  "retreat-day-5": "Day",
  "retreat-day-6": "Day",
  "brahmi-benefits": "Brahmi",
  "triphala-benefits": "Triphala",
  "pitta-foods-to-avoid": "Foods",
  "ayurveda-aging": "Aging",
  "ayurveda-beginners-guide": "Ayurveda",
  "ayurveda-gut-health": "Healing",
  "ayurvedic-sleep-hygiene": "Sleep",
  "ayurveda-energy": "Energy",
  "ayurveda-cortisol-stress": "Stress",
}
