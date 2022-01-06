module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
