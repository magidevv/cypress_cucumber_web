const { Page } = require("./page");

const cartItems = ".cart_item";
const cartQTY = ".cart_quantity";
const itemName = ".inventory_item_name";
const itemDesc = ".inventory_item_desc";
const finishBtn = 'button[data-test="finish"]';

class CheckoutOverviewPage extends Page {
  checkAddToCartItems() {
    this.getElement(cartItems).should("be.visible");
  }

  checkCartQTY() {
    this.getElement(cartQTY).should("eq", "1");
  }

  checkItemName() {
    this.getElement(itemName).should("eq", "Sauce Labs Backpack");
  }

  checkItemDesc() {
    this.getElement(itemDesc).should("contain.text", "carry.allTheThings()");
  }

  checkItemPrice() {
    this.getElement(itemPrice).should("contain.text", "$29.99");
  }

  clickFinishBtn() {
    this.clickElement(finishBtn);
  }
}

export default CheckoutOverviewPage;
