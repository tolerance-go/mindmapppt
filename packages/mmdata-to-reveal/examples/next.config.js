/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   pageExtensions: ['tsx', 'ts'],
   experimental: {
      appDir: true,
      transpilePackages: ['@mindmapppt/mm-data', '@mindmapppt/utils'],
   },
}

module.exports = nextConfig
