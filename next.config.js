/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/day-3-my-body-is-detoxing',
        destination: '/blog/what-happens-ayurvedic-retreat-day-3',
        permanent: true,
      },
      {
        source: '/blog/day-3-detox-mood-steps',
        destination: '/blog/what-happens-ayurvedic-retreat-day-3',
        permanent: true,
      },
      {
        source: '/blog/i-have-no-energy',
        destination: '/blog/why-am-i-always-tired',
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
        source: '/blog/dopamine-exhaustion-ayurveda',
        destination: '/blog/dopamine-detox-vs-ayurveda',
        permanent: true,
      },
      {
        source: '/blog/honest-beginners-guide-ayurveda-2026',
        destination: '/blog/ayurveda-beginners-guide',
        permanent: true,
      },
      {
        source: '/blog/alcohol-and-sleep',
        destination: '/blog/alcohol-ayurveda',
        permanent: true,
      },
      {
        source: '/blog/not-losing-weight-calorie-deficit',
        destination: '/blog/kapha-weight-loss-guide',
        permanent: true,
      },
      {
        source: '/blog/is-ayurveda-safe-heavy-metals',
        destination: '/transparency',
        permanent: true,
      },
      {
        source: '/blog/brahmi-benefits',
        destination: '/blog/ashwagandha-vs-brahmi',
        permanent: true,
      },
      {
        source: '/blog/triphala-benefits',
        destination: '/blog/ayurvedic-herbs-guide',
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
    ]
  },
}

module.exports = nextConfig
