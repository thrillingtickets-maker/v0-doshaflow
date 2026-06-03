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
    ]
  },
}

module.exports = nextConfig
