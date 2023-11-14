const { Page } = require("./page");

const firstNameField = 'input[data-test="firstName"]';
const lastNameField = 'input[data-test="lastName"]';
const postalCodeField = 'input[data-test="postalCode"]';
const continueBtn = '[data-test="continue"]';
const infoErrorMsgs = '[data-test="error"]';

class CheckoutYourInfoPage extends Page {
  static invalidFirstName_error = "Error: First Name is invalid";
  static invalidLastName_error = "Error: Last Name is invalid";
  static invalidPostalCode_error = "Error: Zip/Postal Code is invalid";

  fillFirstNameField(firstName) {
    this.fillElement(firstNameField, firstName);
  }

  fillLastNameField(lastName) {
    this.fillElement(lastNameField, lastName);
  }

  fillPostalCodeField(postalCode) {
    this.fillElement(postalCodeField, postalCode);
  }

  clickContinueBtn() {
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
