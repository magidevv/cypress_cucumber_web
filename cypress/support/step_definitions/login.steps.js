import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login.page.js";
import Helper from "../../helper/helper.js";
const { faker } = require("@faker-js/faker");

const invalidRandomUsername = Helper.generateRandomInvalidUsername();
const invalidRandomPassword = Helper.generateRandomInvalidPassword();

const loginPage = new LoginPage();

Given("the user is on the Login Page", () => {
  loginPage.openLoginUrl();
});

When(
  /^(?:the user )?enters "(valid|invalid)" "([^"]*)" into the "([^"]*)" field$/,
  (isValid, value, field) => {
    if (isValid === "valid") {
      if (field.toLowerCase() === "username") {
        loginPage.fillUsernameField(value);
      } else if (field.toLowerCase() === "password") {
        loginPage.fillPasswordField(value);
      }
    } else if (isValid === "invalid") {
      if (field.toLowerCase() === "username") {
        loginPage.fillUsernameField(invalidRandomUsername);
      } else if (field.toLowerCase() === "password") {
        loginPage.fillPasswordField(invalidRandomPassword);
      }
    }
  }
);

When(/^(?:the user )?clicks the "([^"]*)" button$/, (button) => {
  if (button === "Login") {
    loginPage.clickLoginBtn();
  }
});

Then("the user is logined and redirected to the Inventory Page", () => {
  cy.url().should("include", "inventory");
});

Then("the {string} error is displayed", (errorMsg) => {
  loginPage.getLoginErrorMsgs().should("contain", errorMsg);
});

Then(
  "the {string} and {string} fields are highlighted in red",
  (field1, field2) => {
    loginPage.checkRedHighlightFields([
      field1.toLowerCase(),
      field2.toLowerCase(),
    ]);
  }
);

Then("the {string} or {string} error is displayed", (errorMsg1, errorMsg2) => {
  loginPage.getLoginErrorMsgs().should((element) => {
    const text = element.text();
    expect(text).to.include(errorMsg1, errorMsg2);
  });
});
