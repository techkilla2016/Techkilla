/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
module: {
  rules: [
    {
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/videos/'
          }
        }
      ]
    }
  ]
}
