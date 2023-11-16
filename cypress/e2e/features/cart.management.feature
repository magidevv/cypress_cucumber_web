Feature: Cart Management

  Background: 
    Given the user is logged in
    And the user is on the Inventory Page

  Scenario: Adding product to the cart at the Inventory Item Page
    When the user clicks an inventory item
    And clicks the "Add to cart" button
    Then the QTY of items in the cart is increased to 1
    And the user clicks the cart icon
    Then the Cart Page is displayed
    And the cart items are displayed
    And the QTY of items is displayed as 1
    And the item "name" is displayed correctly
    And the item "description" is displayed correctly
    And the item "price" is displayed correctly

  Scenario: Adding product to the cart at the Inventory Page
    When the user clicks the "Add to cart" button
    Then the QTY of items in the cart is increased to 1
    And the user clicks the cart icon
    Then the Cart Page is displayed
    And the cart items are displayed
    And the QTY of items is displayed as 1
    And the item "name" is displayed correctly
    And the item "description" is displayed correctly
    And the item "price" is displayed correctly

  Scenario: Removing product from the cart at the Inventory Item Page
    And the user is on the Inventory Item Page
    When the user clicks the "Add to cart" button
    Then the user clicks the "Remove" button
    Then the "QTY of items" is not displayed
    And the user clicks the cart icon
    Then the Cart Page is displayed
    And the "item" is not displayed

  Scenario: Removing product from the cart at the Inventory Page
    When the user clicks the "Add to cart" button
    Then the user clicks the "Remove" button
    Then the "QTY of items" is not displayed
    And the user clicks the cart icon
    Then the Cart Page is displayed
    And the "item" is not displayed

  Scenario: Removing product from the cart at the Cart Page
    When the user clicks the "Add to cart" button
    And the user clicks the cart icon
    Then the user clicks the "Remove" button
    Then the "QTY of items" is not displayed
    And the "item" is not displayed
