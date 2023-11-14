import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login.page.js";
import InventoryItemPage from "../../pages/inventory.item.page.js";
import InventoryPage from "../../pages/inventory.page.js";
import CartPage from "../../pages/cart.page.js";

const validUsername = Cypress.env("USER_LOGIN");
const validPassword = Cypress.env("USER_PASSWORD");

const loginPage = new LoginPage();
const inventoryItemPage = new InventoryItemPage();
const inventoryPage = new InventoryPage();
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

Given("the user is on the Inventory Item Page", () => {
  inventoryPage.clickFirstInventoryItem();
  cy.url().should("include", "inventory-item");
});

When("the user clicks an inventory item", () => {
  inventoryPage.clickFirstInventoryItem();
});

Then("the QTY of items in the cart is increased to 1", () => {
  inventoryItemPage.checkAddToCartBadge();
});

Then("the user clicks the cart icon", () => {
  inventoryItemPage.clickShoppingCartLink();
});

Then("the Cart Page is displayed", () => {
  cy.url().should("include", "cart");
});

Then("the cart items are displayed", () => {
  cartPage.checkAddToCartItems();
});

Then("the QTY of items is displayed as 1", () => {
  cartPage.checkCartQTY();
});

Then("the item {string} is displayed correctly", (field) => {
  if (field === "name") {
    cartPage.checkItemName();
  } else if (field === "description") {
    cartPage.checkItemDesc();
  } else if (field === "price") {
    cartPage.checkItemPrice();
  }
});

Then("the {string} is not displayed", (element) => {
  if (element === "QTY of items") {
    inventoryItemPage.checkRemoveFromCartBadge();
  } else if (element === "item") {
    cartPage.checkRemoveFromCartItems();
  }
});
