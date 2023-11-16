const baseConfig = require("./cypress.config");

module.exports = {
  ...baseConfig,
  viewportWidth: 375,
  viewportHeight: 667,
  device: "iphone-x",
};
