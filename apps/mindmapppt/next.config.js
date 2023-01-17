/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   pageExtensions: ['tsx', 'ts'],
   experimental: {
      appDir: true,
      transpilePackages: [
         '@mindmapppt/xmind-to-mmdata',
         '@mindmapppt/utils',
         '@mindmapppt/mmdata-to-reveal',
         '@mindmapppt/mmdata-to-impress',
      ],
   },
}

module.exports = nextConfig
