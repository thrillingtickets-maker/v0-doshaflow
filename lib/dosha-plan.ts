export type DoshaKey = "V" | "P" | "K"

export const DOSHA_NAMES: Record<DoshaKey, string> = { V: "Vata", P: "Pitta", K: "Kapha" }

export const DOSHA_PATTERN: Record<DoshaKey, string> = {
  V: "Vata dominance is traditionally associated with variable energy, lighter sleep, dryness, and irregular digestion.",
  P: "Pitta dominance is traditionally associated with heat, intensity, strong appetite, and sensitivity to excess stimulation.",
  K: "Kapha dominance is traditionally associated with steadiness, heavier energy, slower digestion, and a love of routine.",
}

export interface DoshaPlan {
  morning: string[]
  sleep: string[]
  stress: string[]
  thisWeek: string[]
}

export const DOSHA_PLAN: Record<DoshaKey, DoshaPlan> = {
  V: {
    morning: [
      "Wake at the same time each day, including weekends",
      "Start with a cup of warm water or herbal tea",
      "Five minutes of warm sesame-oil self-massage before showering",
      "A warm, cooked breakfast such as oats or stewed fruit",
    ],
    sleep: [
      "Aim for a consistent bedtime, ideally before 10:30pm",
      "Dim lights and put screens away an hour before bed",
      "Keep your bedroom warm and your feet covered",
    ],
    stress: [
      "Slow breathing with a longer exhale for a few minutes",
      "Keep a simple daily rhythm so the day feels predictable",
      "Short walks outdoors rather than more stimulation",
    ],
    thisWeek: [
      "Eat lunch at the same time every day",
      "Swap one cold or raw meal for a warm, cooked one each day",
      "Set a screens-off time and keep it for five nights",
    ],
  },
  P: {
    morning: [
      "Get outside early, before the heat of the day",
      "Start with room-temperature water rather than coffee first thing",
      "Plan the day with deliberate breaks built in",
      "A substantial breakfast so you don't run on empty",
    ],
    sleep: [
      "Stop work at a set time in the evening",
      "Keep your bedroom cool and well ventilated",
      "Wind down with something non-competitive, like reading or a walk",
    ],
    stress: [
      "Notice when intensity turns into irritability and pause",
      "Cooling breath practices and time near water or green space",
      "Say no to one non-essential commitment",
    ],
    thisWeek: [
      "Never skip lunch, and make it your largest meal",
      "Replace one intense workout with a moderate one",
      "Take one evening fully off work",
    ],
  },
  K: {
    morning: [
      "Wake a little earlier, ideally before 7am",
      "Move within the first hour, even a brisk ten-minute walk",
      "Try warm water with fresh ginger",
      "Keep breakfast light, or wait until you are genuinely hungry",
    ],
    sleep: [
      "Keep a consistent wake time and avoid long lie-ins",
      "Avoid heavy meals late in the evening",
      "Limit daytime naps if they leave you groggy",
    ],
    stress: [
      "Use movement to shift heavy or flat moods",
      "Plan something new or social each week",
      "Break bigger changes into small, scheduled steps",
    ],
    thisWeek: [
      "Take a brisk walk every morning before breakfast",
      "Add warming spices like ginger or black pepper to one meal a day",
      "Try one new form of movement or activity",
    ],
  },
}
