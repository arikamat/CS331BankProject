/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    salt: "$2b$10$q5Zi1rdDX2LUGaE7fPbnRO"
  }
}

module.exports = nextConfig
