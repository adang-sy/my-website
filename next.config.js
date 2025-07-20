/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // 支持静态导出，便于部署到各种平台
  output: 'export',
  trailingSlash: true,
  // 禁用图片优化以支持静态导出
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

