const { Page } = require("./page");

const inventoryItemsList = ".inventory_list .inventory_item";
const addToCartBtn = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
const shoppingCartBadge = ".shopping_cart_badge";
const shoppingCartLink = ".shopping_cart_link";
const removeBtn = 'button[data-test="remove-sauce-labs-backpack"]';
const azSortSelector = ".active_option";
const zaSortSelector = 'option[value="za"]';
const lohiSortSelector = 'option[value="lohi"]';
const hiloSortSelector = 'option[value="hiloa"]';
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
      .should("eq", "Sauce Labs Backpack")
      .click();
  }

  clickAddToCartBtn() {
    this.clickElement(addToCartBtn);
  }

  checkAddToCartBadge() {
    this.getElement(shoppingCartBadge).should("eq", "1");
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
    this.getElement(azSortSelector).should("eq", "Name (A to Z)");
  }

  checkAZitemOrder() {
    this.getElement(itemNamesList)
      .invoke("text")
      .then((itemNames) => {
        const sortedItemNames = [...itemNames].sort((a, b) =>
          a.localeCompare(b)
        );

        expect(itemNames).to.deep.equal(sortedItemNames);
      });
  }

  clickSortSelector() {
    this.clickElement(sortSelector);
  }

  checkZAsortSelector() {
    this.getElement(zaSortSelector).should("eq", "Name (Z to A)");
  }

  clickZAsortSelector() {
    this.clickElement(zaSortSelector);
  }

  checkZAitemOrder() {
    this.getElement(itemNamesList)
      .invoke("text")
      .then((itemNames) => {
        const sortedItemNames = [...itemNames].sort((a, b) =>
          b.localeCompare(a)
        );

        expect(itemNames).to.deep.equal(sortedItemNames);
      });
  }

  checkLoHiSortSelector() {
    this.getElement(lohiSortSelector).should("eq", "Price (low to high)");
  }

  clickLoHiSortSelector() {
    this.clickElement(lohiSortSelector);
  }

  checkLoHiItemOrder() {
    this.getElement(itemPricesList)
      .invoke("text")
      .then((itemPrices) => {
        const numericPrices = itemPrices.map((price) =>
          parseFloat(price.replace("$", ""))
        );
        const sortedPrices = [...numericPrices].sort((a, b) => a - b);
        expect(numericPrices).to.deep.equal(sortedPrices);
      });
  }

  checkHiLoSortSelector() {
    this.getElement(hiloSortSelector).should("eq", "Price (high to low)");
  }

  clickHiLoSortSelector() {
    this.clickElement(hiloSortSelector);
  }

  checkHiLoItemOrder() {
    this.getElement(itemPricesList)
      .invoke("text")
      .then((itemPrices) => {
        const numericPrices = itemPrices.map((price) =>
          parseFloat(price.replace("$", ""))
        );
        const sortedPrices = [...numericPrices].sort((a, b) => b - a);
        expect(numericPrices).to.deep.equal(sortedPrices);
      });
  }
}

export default InventoryPage;
