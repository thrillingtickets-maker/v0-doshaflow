/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/heart-health-circulation',
        destination: '/blog/ayurveda-for-heart-health',
        permanent: true,
      },
      {
        source: '/blog/liver-detoxification',
        destination: '/blog/ayurveda-liver-health',
        permanent: true,
      },
      {
        source: '/blog/abhyanga-daily-oil-massage',
        destination: '/blog/abhyanga-benefits',
        permanent: true,
      },
      {
        source: '/blog/day-3-my-body-is-detoxing',
        destination: '/blog/retreat-day-3',
        permanent: true,
      },
      {
        source: '/blog/day-3-detox-mood-steps',
        destination: '/blog/retreat-day-3',
        permanent: true,
      },
      {
        source: '/blog/i-have-no-energy',
        destination: '/blog/why-am-i-always-exhausted',
        permanent: true,
      },
      // Redirect /doshas/* to the correct route (e.g., /doshas/vata -> /vata)
      {
        source: '/doshas/vata',
        destination: '/vata',
        permanent: true,
      },
      {
        source: '/doshas/pitta',
        destination: '/pitta',
        permanent: true,
      },
      {
        source: '/doshas/kapha',
        destination: '/kapha',
        permanent: true,
      },
      {
        source: '/blog/alcohol-and-ayurveda',
        destination: '/blog/ayurveda-alcohol',
        permanent: true,
      },
      {
        source: '/blog/alcohol-ayurveda',
        destination: '/blog/ayurveda-alcohol',
        permanent: true,
      },
      {
        source: '/for-men',
        destination: '/ayurveda-for-men',
        permanent: true,
      },
      {
        source: '/for-women',
        destination: '/ayurveda-for-women',
        permanent: true,
      },
      {
        source: '/blog/traveling-the-ayurvedic-way',
        destination: '/blog/traveling-ayurvedic-way',
        permanent: true,
      },
      {
        source: '/blog/best-ayurvedic-tea',
        destination: '/blog/ayurvedic-tea-guide',
        permanent: true,
      },
      {
        source: '/blog/best-ayurvedic-tea-for-sleep',
        destination: '/blog/best-ayurvedic-tea-sleep',
        permanent: true,
      },
      {
        source: '/blog/can-stress-cause-hair-loss',
        destination: '/blog/stress-hair-loss-ayurveda',
        permanent: true,
      },
      {
        source: '/blog/why-do-i-wake-up-at-3am',
        destination: '/blog/why-you-wake-up-at-3am',
        permanent: true,
      },
      {
        source: '/blog/dopamine-exhaustion-ayurveda',
        destination: '/blog/modern-wellness-rest',
        permanent: true,
      },
      {
        source: '/blog/honest-beginners-guide-ayurveda-2026',
        destination: '/blog/ayurveda-beginners-guide',
        permanent: true,
      },
      {
        source: '/blog/alcohol-and-sleep',
        destination: '/blog/ayurveda-alcohol',
        permanent: true,
      },
      {
        source: '/blog/not-losing-weight-calorie-deficit',
        destination: '/blog/kapha-weight-loss-guide',
        permanent: true,
      },
      {
        source: '/blog/is-ayurveda-safe-heavy-metals',
        destination: '/blog/ayurvedic-herb-safety',
        permanent: true,
      },
      {
        source: '/blog/brahmi-benefits',
        destination: '/blog/ashwagandha-vs-brahmi',
        permanent: true,
      },
      {
        source: '/blog/ashwagandha-burnout',
        destination: '/blog/ashwagandha-benefits',
        permanent: true,
      },
      {
        source: '/blog/ayurveda-hormonal-balance',
        destination: '/blog/ayurveda-hormones-symptoms',
        permanent: true,
      },
      {
        source: '/blog/ayurveda-burnout',
        destination: '/blog/nervous-system-burnout',
        permanent: true,
      },
      {
        source: '/blog/ayurveda-nervous-system-burnout',
        destination: '/blog/nervous-system-burnout',
        permanent: true,
      },
      {
        source: '/blog/nervous-system-healing',
        destination: '/blog/nervous-system-regulation-ayurveda',
        permanent: true,
      },
      {
        source: '/blog/pitta-cooling-protocol',
        destination: '/blog/signs-of-pitta-imbalance',
        permanent: true,
      },
      {
        source: '/blog/kapha-spring-detox',
        destination: '/blog/ayurvedic-spring-cleanse',
        permanent: true,
      },
      {
        source: '/blog/vata-winter-grounding',
        destination: '/blog/vata-pacifying-foods',
        permanent: true,
      },
      {
        source: '/blog/ayurvedic-blood-cleansing',
        destination: '/blog/ayurveda-liver-health',
        permanent: true,
      },
      {
        source: '/blog/bone-broth-ayurveda',
        destination: '/blog/ayurveda-meat-fish',
        permanent: true,
      },
      {
        source: '/blog/ayurvedic-fasting-protocols',
        destination: '/blog/ayurveda-intermittent-fasting',
        permanent: true,
      },
      {
        source: '/blog/digestive-agni-fire',
        destination: '/blog/how-to-improve-digestion-naturally',
        permanent: true,
      },
      {
        source: '/blog/triphala-complete-guide',
        destination: '/blog/triphala-benefits',
        permanent: true,
      },
      {
        source: '/blog/nadi-shodhana-pranayama',
        destination: '/blog/pranayama-for-anxiety',
        permanent: true,
      },
      {
        source: '/blog/ayurvedic-face-reading',
        destination: '/blog/vata-pitta-kapha-explained',
        permanent: true,
      },
      {
        source: '/blog/energy-work-chakras',
        destination: '/blog/ayurveda-beginners-guide',
        permanent: true,
      },
      {
        source: '/blog/water-types-hydration',
        destination: '/blog/ayurveda-ice-water',
        permanent: true,
      },
      {
        source: '/blog/morning-routine-ritual',
        destination: '/blog/ayurvedic-morning-routine',
        permanent: true,
      },
      {
        source: '/blog/evening-wind-down',
        destination: '/blog/how-to-fix-sleep-schedule',
        permanent: true,
      },
      {
        source: '/blog/meditation-types-dosha',
        destination: '/blog/ayurveda-for-stress',
        permanent: true,
      },
      {
        source: '/blog/stress-response-system',
        destination: '/blog/how-to-calm-your-nervous-system',
        permanent: true,
      },
      {
        source: '/blog/ama-accumulation-prevention',
        destination: '/blog/ayurvedic-gut-health',
        permanent: true,
      },
      {
        source: '/blog/herbal-cooking-spices',
        destination: '/blog/best-spices-for-digestion',
        permanent: true,
      },
      {
        source: '/blog/protein-sources-doshas',
        destination: '/blog/eating-for-your-dosha',
        permanent: true,
      },
      {
        source: '/blog/fat-soluble-vitamins',
        destination: '/blog/ghee-benefits-ayurveda',
        permanent: true,
      },
      {
        source: '/blog/mineral-deficiencies-signs',
        destination: '/blog/why-am-i-always-tired',
        permanent: true,
      },
      {
        source: '/blog/sugar-metabolism-doshas',
        destination: '/blog/ayurveda-blood-sugar',
        permanent: true,
      },
      {
        source: '/blog/gut-microbiome-ayurveda',
        destination: '/blog/ayurveda-gut-health',
        permanent: true,
      },
      {
        source: '/blog/leaky-gut-recovery',
        destination: '/blog/leaky-gut-ayurveda',
        permanent: true,
      },
      {
        source: '/blog/food-sensitivities-ama',
        destination: '/blog/food-combining-principles',
        permanent: true,
      },
      {
        source: '/blog/skin-health-digestion',
        destination: '/blog/ayurvedic-skin-guide',
        permanent: true,
      },
      {
        source: '/blog/acne-root-causes',
        destination: '/blog/ayurvedic-skin-guide',
        permanent: true,
      },
      {
        source: '/blog/eczema-psoriasis-protocol',
        destination: '/blog/ayurveda-for-eczema',
        permanent: true,
      },
      {
        source: '/blog/hair-health-vitality',
        destination: '/blog/ayurveda-for-hair-loss',
        permanent: true,
      },
      {
        source: '/blog/nail-health-diagnosis',
        destination: '/blog/vata-pitta-kapha-explained',
        permanent: true,
      },
      {
        source: '/blog/eye-health-vision',
        destination: '/blog/signs-of-pitta-imbalance',
        permanent: true,
      },
      {
        source: '/blog/joint-mobility-aging',
        destination: '/blog/ayurveda-for-arthritis',
        permanent: true,
      },
      {
        source: '/blog/muscle-building-nourishment',
        destination: '/blog/ayurveda-for-athletes',
        permanent: true,
      },
      {
        source: '/blog/bone-density-osteoporosis',
        destination: '/blog/ayurveda-aging',
        permanent: true,
      },
      {
        source: '/blog/lung-respiratory-health',
        destination: '/blog/ayurveda-for-immunity',
        permanent: true,
      },
      {
        source: '/blog/kidney-bladder-water',
        destination: '/blog/ayurveda-ice-water',
        permanent: true,
      },
      {
        source: '/blog/lymphatic-drainage',
        destination: '/blog/ayurveda-for-immunity',
        permanent: true,
      },
      {
        source: '/blog/hormone-balance-fertility',
        destination: '/blog/ayurveda-for-fertility',
        permanent: true,
      },
      {
        source: '/blog/mens-sexual-vitality',
        destination: '/blog/ayurveda-for-libido',
        permanent: true,
      },
      {
        source: '/blog/female-cycle-support',
        destination: '/blog/ayurveda-pms',
        permanent: true,
      },
      {
        source: '/blog/birth-recovery-postpartum',
        destination: '/ayurveda-for-women',
        permanent: true,
      },
      {
        source: '/blog/menopause-transition',
        destination: '/blog/ayurveda-for-menopause',
        permanent: true,
      },
      {
        source: '/blog/vata-dosha-guide',
        destination: '/vata',
        permanent: true,
      },
      {
        source: '/blog/pitta-dosha-guide',
        destination: '/pitta',
        permanent: true,
      },
      {
        source: '/blog/kapha-dosha-guide',
        destination: '/kapha',
        permanent: true,
      },
      {
        source: '/blog/ayurveda-for-men',
        destination: '/ayurveda-for-men',
        permanent: true,
      },
      {
        source: '/blog/ayurveda-for-women',
        destination: '/ayurveda-for-women',
        permanent: true,
      },
      {
        source: '/journal/retreat-day-:day',
        destination: '/blog/retreat-day-:day',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
