Feature: Order Checkout

  Background: 
    Given the user is logged in
    And the user is on the Inventory Page
    And clicks the "Add to cart" button
    And opens the Cart Page

  Scenario: Order checkout with valid credentials
    When the user clicks the "Checkout" button
    And enters "valid" "First Name" into the "First Name" field
    And enters "valid" "Last Name" into the "Last Name" field
    And enters "valid" "Zip/Postal Code" into the "Zip/Postal Code" field
    And clicks the "Continue" button
    Then the "Checkout: Overview" Page is displayed
    And the cart items are displayed
    And the QTY of items is displayed as 1
    And the item "name" is displayed correctly
    And the item "description" is displayed correctly
    And the item "price" is displayed correctly
    And the user clicks the "Finish" button
    Then the "Checkout: Complete" Page is displayed
    And the "Your order has been dispatched, and will arrive just as fast as the pony can get there!" message is displayed

  Scenario: Order checkout with invalid credentials
    And clicks the "Checkout" button
    When the user enters "invalid" "First Name" into the "First Name" field
    And enters "invalid" "Last Name" into the "Last Name" field
    And enters "invalid" "Zip/Postal Code" into the "Zip/Postal Code" field
    And clicks the "Continue" button
    Then the "First Name is invalid" or "Last Name is invalid" or "Zip/Postal Code is invalid" error is displayed
    And the "firstName", "lastName", "postalCode" fields are highlighted in red
