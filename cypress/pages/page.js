class Page {

  openUrl(url) {
    cy.visit(url || "/", { failOnStatusCode: false });
  }

  getElement(element) {
    return cy.get(element);
  }

  clickElement(element) {
    this.getElement(element).click();
  }

  selectElement(element, option) {
    this.getElement(element).select(option);
  }

  fillElement(element, data) {
    this.getElement(element).type(data);
  }
}

module.exports = { Page };
