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
    ]
  },
}

module.exports = nextConfig
