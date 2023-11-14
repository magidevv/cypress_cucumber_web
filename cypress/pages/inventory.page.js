const { Page } = require("./page");

const inventoryItemsList = ".inventory_list .inventory_item";
const addToCartBtn = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
const shoppingCartBadge = ".shopping_cart_badge";
const shoppingCartLink = ".shopping_cart_link";
const removeBtn = 'button[data-test="remove-sauce-labs-backpack"]';
const azSortSelector = ".active_option";
const zaSortSelector = 'option[value="za"]';
const lohiSortSelector = 'option[value="lohi"]';
const hiloSortSelector = 'option[value="hilo"]';
const itemNamesList = ".inventory_list .inventory_item .inventory_item_name";
const sortSelector = 'select[data-test="product_sort_container"]';
const itemPricesList = ".inventory_list .inventory_item .inventory_item_price";

class InventoryPage extends Page {
  openInventoryUrl() {
    this.openUrl("/inventory.html");
  }

  checkInventoryItems() {
    this.getElement(inventoryItemsList).should("have.length", 6);
  }

  clickFirstInventoryItem() {
    this.getElement(inventoryItemsList)
      .eq(0)
      .should("contain.text", "Sauce Labs Backpack")
      .click();
  }

  clickAddToCartBtn() {
    this.clickElement(addToCartBtn);
  }

  checkAddToCartBadge() {
    this.getElement(shoppingCartBadge).should("contain.text", "1");
  }

  clickShoppingCartLink() {
    this.clickElement(shoppingCartLink);
  }

  clickRemoveBtn() {
    this.clickElement(removeBtn);
  }

  checkRemoveFromCartBadge() {
    this.getElement(shoppingCartBadge).should("not.exist");
  }

  checkAZsortSelector() {
    this.getElement(azSortSelector).should("contain.text", "Name (A to Z)");
  }

  checkAZitemOrder() {
    this.getElement(itemNamesList)
      .invoke("text")
      .then((itemNamesText) => {
        const expectedString =
          "Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-ShirtSauce Labs Fleece JacketSauce Labs OnesieTest.allTheThings() T-Shirt (Red)";
        const trimmedActualString = itemNamesText.trim();
        expect(trimmedActualString).to.eq(expectedString);
      });
  }

  clickSortSelector() {
    this.selectElement(sortSelector, "az");
  }

  checkZAsortSelector() {
    this.getElement(zaSortSelector).should("contain.text", "Name (Z to A)");
  }

  clickZAsortSelector() {
    this.selectElement(sortSelector, "za");
  }

  checkZAitemOrder() {
    this.getElement(itemNamesList)
      .invoke("text")
      .then((itemNames) => {
        const trimmedActualString = itemNames.trim();
        const expectedString =
          "Test.allTheThings() T-Shirt (Red)Sauce Labs OnesieSauce Labs Fleece JacketSauce Labs Bolt T-ShirtSauce Labs Bike LightSauce Labs Backpack";
        expect(trimmedActualString).to.eq(expectedString);
      });
  }

  checkLoHiSortSelector() {
    this.getElement(lohiSortSelector).should(
      "contain.text",
      "Price (low to high)"
    );
  }

  clickLoHiSortSelector() {
    this.selectElement(sortSelector, "lohi");
  }

  checkLoHiItemOrder() {
    this.getElement(itemPricesList)
      .invoke("text")
      .then((itemPrices) => {
        const numericPrices = itemPrices
          .split(" ")
          .map((price) => parseFloat(price.replace("$", "")))
          .sort((a, b) => a - b);
        expect(numericPrices).to.deep.equal(
          numericPrices.slice().sort((a, b) => a - b)
        );
      });
  }

  checkHiLoSortSelector() {
    this.getElement(hiloSortSelector).should(
      "contain.text",
      "Price (high to low)"
    );
  }

  clickHiLoSortSelector() {
    this.selectElement(sortSelector, "hilo");
  }

  checkHiLoItemOrder() {
    this.getElement(itemPricesList)
      .invoke("text")
      .then((itemPrices) => {
        const numericPrices = itemPrices
          .split(" ")
          .map((price) => parseFloat(price.replace("$", "")))
          .sort((a, b) => b - a);
        expect(numericPrices).to.deep.equal(
          numericPrices.slice().sort((a, b) => b - a)
        );
      });
  }
}

export default InventoryPage;
