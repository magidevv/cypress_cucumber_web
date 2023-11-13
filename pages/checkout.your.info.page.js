const { Page } = require("./page");

const firstNameField = 'input[data-test="firstName"]';
const lastNameField = 'input[data-test="lastName"]';
const postalCodeField = 'input[data-test="postalCode"]';
const continueBtn = 'button[data-test="continue"]';
const infoErrorMsgs = '[data-test="error"]';

class CheckoutYourInfoPage extends Page {
  static invalidFirstName_error = "Error: First Name is invalid";
  static invalidLastName_error = "Error: Last Name is invalid";
  static invalidPostalCode_error = "Error: Zip/Postal Code is invalid";

  fillCheckoutForm(firstName, lastName, postalCode) {
    this.fillElement(firstNameField, firstName);
    this.fillElement(lastNameField, lastName);
    this.fillElement(postalCodeField, postalCode);
    this.clickElement(continueBtn);
  }

  checkInfoErrorMsgs(errorMsgs) {
    this.getElement(infoErrorMsgs).should("have.length", errorMsgs.length);

    errorMsgs.forEach((msg, index) => {
      this.getElement(infoErrorMsgs).eq(index).should("contain.text", msg);
    });
  }

  checkRedHighlightFields(fields) {
    for (const field of fields) {
      const selector = `input[data-test="${field}"]`;
      const redHighlightField = this.getElement(selector);
      redHighlightField.should(
        "have.css",
        "border-bottom-color",
        "rgb(226, 35, 26)"
      );
    }
  }
}

export default CheckoutYourInfoPage;
