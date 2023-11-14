Feature: Product Filtering

  Background: 
    Given the user is logged in
    And the user is on the Inventory Page

  Scenario: Product filtering by its name (A to Z)
    When the user checks the display of the "Name (A to Z)" selector
    And clicks the "Name (A to Z)" selector
    Then the inventory items are displayed "in alphabetical order by name from A to Z"

  Scenario: Product filtering by its name (Z to A)
    When the user clicks the "Name (A to Z)" selector
    And checks the display of the "Name (Z to A)" item list
    And clicks the "Name (Z to A)" item list
    Then the inventory items are displayed "in alphabetical order by name from Z to A"

  Scenario: Product filtering by its price (low to high)
    When the user clicks the "Name (A to Z)" selector
    And checks the display of the "Price (low to high)" item list
    And clicks the "Price (low to high)" item list
    Then the inventory items are displayed "by price from low to high"

  Scenario: Product filtering by its price (high to low)
    When the user clicks the "Name (A to Z)" selector
    And checks the display of the "Price (high to low)" item list
    And clicks the "Price (high to low)" item list
    Then the inventory items are displayed "by price from high to low"
