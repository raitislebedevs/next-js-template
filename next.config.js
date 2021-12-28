const path = require("path");

module.exports = {
  reactStrictMode: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    API_SUFFIX: process.env.API_SUFFIX,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  },
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  saassLoaderOptions: {
    outputStyle: "compressed",
  },
  webpack: (config) => {
    return config;
  },
};
