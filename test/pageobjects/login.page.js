"use strict";

class Login {
  // Reusable selector getters that will help us to avoid selector duplicates
  get usernameTxt() {
    return $('[name="username"]');
  }
  get passwordTxt() {
    return $('[name="password"]');
  }
  get loginLnk() {
    return $("div=Log In");
  }
  get loginErrorLbl() {
    return $("#slfErrorAlert");
  }

  // Helper method to avoid code duplication
  login(username, password) {
    this.usernameTxt.setValue(username);
    this.passwordTxt.setValue(password);
    this.loginLnk.click();
  }
}
module.exports = new Login();

const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
