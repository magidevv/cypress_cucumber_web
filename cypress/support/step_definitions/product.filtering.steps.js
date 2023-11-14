import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventory.page.js";

const inventoryPage = new InventoryPage();

When("the user checks the display of the {string} selector", (selector) => {
  if (selector === "Name (A to Z)") {
    inventoryPage.checkAZsortSelector();
  }
});

When(/^(?:the user )?clicks the "([^"]*)" selector$/, (selector) => {
  if (selector === "Name (A to Z)") {
    inventoryPage.clickSortSelector();
  }
});

When("checks the display of the {string} item list", (itemList) => {
  if (itemList === "Name (Z to A)") {
    inventoryPage.checkZAsortSelector();
  } else if (itemList === "Price (low to high)") {
    inventoryPage.checkLoHiSortSelector();
  } else if (itemList === "Price (high to low)") {
    inventoryPage.checkHiLoSortSelector();
  }
});

When("clicks the {string} item list", (itemList) => {
  if (itemList === "Name (Z to A)") {
    inventoryPage.clickZAsortSelector();
  } else if (itemList === "Price (low to high)") {
    inventoryPage.clickLoHiSortSelector();
  } else if (itemList === "Price (high to low)") {
    inventoryPage.clickHiLoSortSelector();
  }
});

Then("the inventory items are displayed {string}", (order) => {
  if (order === "in alphabetical order by name from A to Z") {
    inventoryPage.checkAZitemOrder();
  } else if (order === "in alphabetical order by name from Z to A") {
    inventoryPage.checkZAitemOrder();
  } else if (order === "by price from low to high") {
    inventoryPage.checkLoHiItemOrder();
  } else if (order === "by price from high to low") {
    inventoryPage.checkHiLoItemOrder();
  }
});
