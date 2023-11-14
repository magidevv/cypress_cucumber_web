const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env` });

const { USER_LOGIN, USER_PASSWORD } = process.env;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: `${process.env.ENV}`,
    env: {
      USER_LOGIN,
      USER_PASSWORD
    },
    chromeWebSecurity: false,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const preprocessor = esbuildPlugin.default || esbuildPlugin;
      on(
        "file:preprocessor",
        createBundler({
          plugins: [preprocessor(config)],
        })
      );
      return config;
    },
  },
});
