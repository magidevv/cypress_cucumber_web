const { Page } = require("./page");

const usernameField = 'input[data-test="username"]';
const passwordField = 'input[data-test="password"]';
const loginBtn = '[data-test="login-button"]';
const loginErrorMsgs = '[data-test="error"]';

class LoginPage extends Page {
  openLoginUrl() {
    this.openUrl("/");
  }

  fillUsernameField(username) {
    this.fillElement(usernameField, username);
  }

  fillPasswordField(password) {
    this.fillElement(passwordField, password);
  }

  clickLoginBtn() {
    this.clickElement(loginBtn);
  }

  getLoginErrorMsgs() {
    return this.getElement(loginErrorMsgs);
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

export default LoginPage;
