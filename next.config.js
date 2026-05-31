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
    ]
  },
}

module.exports = nextConfig
