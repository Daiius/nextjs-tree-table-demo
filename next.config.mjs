/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: "asset",
      }
    );
    return config;
  },
};

export default nextConfig;
