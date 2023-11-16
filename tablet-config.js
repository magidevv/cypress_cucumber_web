const baseConfig = require("./cypress.config");

module.exports = {
  ...baseConfig,
  viewportWidth: 768,
  viewportHeight: 1024,
  device: "ipad-2",
};
