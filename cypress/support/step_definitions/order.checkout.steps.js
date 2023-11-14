import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventory.page.js";
import CartPage from "../../pages/cart.page.js";
import CheckoutYourInfoPage from "../../pages/checkout.your.info.page.js";
import CheckoutOverviewPage from "../../pages/checkout.overview.page.js";
import CheckoutCompletePage from "../../pages/checkout.complete.page.js";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutYourInfoPage = new CheckoutYourInfoPage();
const checkoutOverviewPage = new CheckoutOverviewPage();
const checkoutCompletePage = new CheckoutCompletePage();



Given("opens the Cart Page", () => {
  cartPage.openCartUrl();
});

Then("the Checkout: Overview Page is displayed", () => {
    cy.url().should("include", "checkout-step-two");
});

Then(
  "the {string}, {string}, {string} fields are highlighted in red",
  (field1, field2, field3) => {
    checkoutYourInfoPage.checkRedHighlightFields([
      field1,
      field2,
      field3
    ]);
  }
);

Then("the {string} or {string} or {string} error is displayed", (errorMsg1, errorMsg2, errorMsg3) => {
  loginPage.getLoginErrorMsgs().should((element) => {
    const text = element.text();
    expect(text).to.include(errorMsg1, errorMsg2, errorMsg3);
  });
});
