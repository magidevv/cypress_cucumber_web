const { Page } = require("./page");

const addToCartBtn = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
const shoppingCartBadge = '.shopping_cart_badge';
const shoppingCartLink = '.shopping_cart_link';
const removeBtn = 'button[data-test="remove-sauce-labs-backpack"]';

class InventoryItemPage extends Page {
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
}

export default InventoryItemPage;
