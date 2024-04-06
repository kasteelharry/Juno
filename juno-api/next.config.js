/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/madeira',
        destination: 'https://share.garmin.com/joriskuiper',
        permanent: false,
        basePath: false
      },
      {
        source: '/hardangervidda',
        destination: 'https://share.garmin.com/JorisHardangervidda',
        permanent: false,
        basePath: false
      },
      {
        source: '/norway',
        destination: 'https://share.garmin.com/JorisHardangervidda',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
