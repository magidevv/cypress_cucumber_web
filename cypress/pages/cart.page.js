const { Page } = require("./page");

const cartItems = ".cart_item";
const cartQTY = ".cart_quantity";
const itemName = ".inventory_item_name";
const itemDesc = ".inventory_item_desc";
const itemPrice = ".inventory_item_price";
const removeBtn = 'button[data-test="remove-sauce-labs-backpack"]';
const shoppingCartBadge = ".shopping_cart_badge";
const checkoutBtn = 'button[data-test="checkout"]';

class CartPage extends Page {
  openCartUrl() {
    this.openUrl("/cart.html");
  }

  checkAddToCartItems() {
    this.getElement(cartItems).should("be.visible");
  }

  checkCartQTY() {
    this.getElement(cartQTY).should("contain.text", "1");
  }

  checkRemoveFromCartItems() {
    this.getElement(cartItems).should("not.exist");
  }

  checkItemName() {
    this.getElement(itemName).should("contain.text", "Sauce Labs Backpack");
  }

  checkItemDesc() {
    this.getElement(itemDesc).should("contain.text", "carry.allTheThings()");
  }

  checkItemPrice() {
    this.getElement(itemPrice).should("contain.text", "29.99");
  }

  clickRemoveBtn() {
    this.clickElement(removeBtn);
  }

  checkRemoveFromCartBadge() {
    this.getElement(shoppingCartBadge).should("not.exist");
  }

  clickCheckoutBtn() {
    this.clickElement(checkoutBtn);
  }

  
}

export default CartPage;
