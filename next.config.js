/** @type {import('next').NextConfig} */

let assetPrefix = ''
let basePath = '/'
if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/sms/`
  basePath = `/sms`
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  assetPrefix: assetPrefix,
  basePath:  basePath,
}

module.exports = nextConfig
