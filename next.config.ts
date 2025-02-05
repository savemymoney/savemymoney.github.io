import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/savemymoney.github.io/' : '',
  basePath: isProd ? '/savemymoney.github.io' : '',
  output: 'export',
}

export default nextConfig
