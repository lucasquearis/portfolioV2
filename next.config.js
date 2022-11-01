/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(pdf)$/,
        use: "file-loader?name=[path][name].[ext]",
      }
    );

    return config;
  },
};

module.exports = nextConfig;
