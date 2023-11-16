import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login.page.js";

const loginPage = new LoginPage();

Given("the user is on the Login Page", () => {
  loginPage.openLoginUrl();
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
