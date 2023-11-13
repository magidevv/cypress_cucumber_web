const { Page } = require("./page");

const completeMsg = ".complete-text";

class CheckoutCompletePage extends Page {
  static complete_msg =
    "Your order has been dispatched, and will arrive just as fast as the pony can get there!";

  checkCompleteMsg(msg) {
    this.getElement(completeMsg).should("eq", msg);
  }
}

export default CheckoutCompletePage;
