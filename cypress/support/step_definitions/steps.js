import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login.page.js";
import InventoryItemPage from "../../pages/inventory.item.page.js";
import CheckoutYourInfoPage from "../../pages/checkout.your.info.page.js";
import CartPage from "../../pages/cart.page.js";
import Helper from "../../helper/helper.js";

const invalidRandomUsername = Helper.generateRandomInvalidUsername();
const invalidRandomPassword = Helper.generateRandomInvalidPassword();

const validRandomFirstName = Helper.generateRandomValidUsername();
const validRandomLastName = Helper.generateRandomValidUsername();
const validRandomPostalCode = Helper.generateRandomValidPassword();
const invalidRandomFirstName = Helper.generateRandomInvalidUsername();
const invalidRandomLastName = Helper.generateRandomInvalidUsername();
const invalidRandomPostalCode = Helper.generateRandomInvalidPassword();

const validUsername = Cypress.env("USER_LOGIN");
const validPassword = Cypress.env("USER_PASSWORD");

const loginPage = new LoginPage();
const inventoryItemPage = new InventoryItemPage();
const checkoutYourInfoPage = new CheckoutYourInfoPage();
const cartPage = new CartPage();

Given("the user is logged in", () => {
  loginPage.openLoginUrl();
  loginPage.fillUsernameField(validUsername);
  loginPage.fillPasswordField(validPassword);
  loginPage.clickLoginBtn();
});

Given("the user is on the Inventory Page", () => {
  cy.url().should("include", "inventory");
});

When(/^(?:the user )?clicks the "([^"]*)" button$/, (button) => {
  if (button === "Login") {
    loginPage.clickLoginBtn();
  } else if (button === "Add to cart") {
    inventoryItemPage.clickAddToCartBtn();
  } else if (button === "Remove") {
    inventoryItemPage.clickRemoveBtn();
  } else if (button === "Continue") {
    checkoutYourInfoPage.clickContinueBtn();
  } else if (button === "Checkout") {
    cartPage.clickCheckoutBtn();
  }
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
      if (field === "First Name") {
        checkoutYourInfoPage.fillFirstNameField(validRandomFirstName);
      } else if (field === "Last Name") {
        checkoutYourInfoPage.fillLastNameField(validRandomLastName);
      } else if (field === "Zip/Postal Code") {
        checkoutYourInfoPage.fillPostalCodeField(validRandomPostalCode);
      }
    } else if (isValid === "invalid") {
      if (field.toLowerCase() === "username") {
        loginPage.fillUsernameField(invalidRandomUsername);
      } else if (field.toLowerCase() === "password") {
        loginPage.fillPasswordField(invalidRandomPassword);
      }
      if (field === "First Name") {
        checkoutYourInfoPage.fillFirstNameField(invalidRandomFirstName);
      } else if (field === "Last Name") {
        checkoutYourInfoPage.fillLastNameField(invalidRandomLastName);
      } else if (field === "Zip/Postal Code") {
        checkoutYourInfoPage.fillPostalCodeField(invalidRandomPostalCode);
      }
    }
  }
);
