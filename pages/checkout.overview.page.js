const { Page } = require("./page");


class CheckoutOverviewPage extends Page {
  openSettingsUrl() {
    this.openUrl("#/settings");
  }
}

export default CheckoutOverviewPage;
