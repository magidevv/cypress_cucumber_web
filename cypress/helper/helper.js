const { faker } = require("@faker-js/faker");

class Helper {
  static generateRandomValidUsername() {
    return faker.internet.userName();
  }

  static generateRandomValidEmail() {
    return faker.internet.email();
  }

  static generateRandomValidPassword() {
    return faker.internet.password();
  }

  static generateRandomValidFirstName() {
    return faker.person.firstName();
  }

  static generateRandomValidLastName() {
    return faker.person.lastName();
  }

  static generateRandomInvalidUsername() {
    return faker.string.numeric(5);
  }

  static generateRandomInvalidEmail() {
    return faker.person.lastName() + "@" + faker.internet.domainSuffix();
  }

  static generateRandomInvalidPassword() {
    return faker.string.numeric(5);
  }
}

export default Helper;
