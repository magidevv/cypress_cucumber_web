const { Page } = require("./page");

const usernameField = 'input[data-test="username"]';
const passwordField = 'input[data-test="password"]';
const loginBtn = 'button[type="submit"]';
const loginErrorMsgs = '[data-test="error"]';

class LoginPage extends Page {
  static invalidCredentials_error =
    "Epic sadface: Username and password do not match any user in this service";
  static blankUsername_error = "Epic sadface: Username is required";
  static blankPassword_error = "Epic sadface: Password is required";

  openLoginUrl() {
    this.openUrl("/");
  }

  fillLoginForm(username, password) {
    this.fillElement(usernameField, username);
    this.fillElement(passwordField, password);
    this.clickElement(loginBtn);
  }

  checkLoginErrorMsgs(errorMsgs) {
    this.getElement(loginErrorMsgs).should("have.length", errorMsgs.length);

    errorMsgs.forEach((msg, index) => {
      this.getElement(loginErrorMsgs).eq(index).should("contain.text", msg);
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

  clickLoginBtn() {
    this.clickElement(loginBtn);
  }
}

export default LoginPage;
