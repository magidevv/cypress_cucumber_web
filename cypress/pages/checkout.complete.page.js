const { Page } = require("./page");

const completeMsg = ".complete-text";

class CheckoutCompletePage extends Page {
  checkCompleteMsg(msg) {
    this.getElement(completeMsg).should("contain.text", msg);
  }
}

export default CheckoutCompletePage;
