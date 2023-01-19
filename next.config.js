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
  trailingSlash: true,
  // dica quentissima de segurança https://www.youtube.com/watch?v=76eEzmx3irs&t=185s&ab_channel=MarioSouto-DevSoutinho
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
