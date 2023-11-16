import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/cart.page.js";
import CheckoutYourInfoPage from "../../pages/checkout.your.info.page.js";
import CheckoutCompletePage from "../../pages/checkout.complete.page.js";

const cartPage = new CartPage();
const checkoutYourInfoPage = new CheckoutYourInfoPage();
const checkoutCompletePage = new CheckoutCompletePage();

Given("opens the Cart Page", () => {
  cartPage.openCartUrl();
});

Then("the {string} message is displayed", (msg) => {
  checkoutCompletePage.checkCompleteMsg(msg);
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
  checkoutYourInfoPage.checkInfoErrorMsgs().should((element) => {
    const text = element.text();
    expect(text).to.include(errorMsg1, errorMsg2, errorMsg3);
  });
});
