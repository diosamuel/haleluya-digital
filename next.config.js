const withPWA = require("next-pwa");

module.exports = withPWA({
  // Target must be serverless
  target: "serverless",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});
