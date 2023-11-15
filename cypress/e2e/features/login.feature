Feature: User Authentication

  Scenario: Correct login with valid credentials
    Given the user is on the Login Page
    When the user enters "valid" "<username>" into the "Username" field
    And the user enters "valid" "<password>" into the "Password" field
    And clicks the "Login" button
    Then the user is logined and redirected to the Inventory Page

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  Scenario: Login with an invalid username
    Given the user is on the Login Page
    When the user enters "invalid" "<username>" into the "Username" field
    And the user enters "valid" "<password>" into the "Password" field
    And clicks the "Login" button
    Then the "Epic sadface: Username and password do not match any user in this service" error is displayed
    And the "Username" and "Password" fields are highlighted in red

    Examples: 
      | password     |
      | secret_sauce |

  Scenario: Login with an invalid password
    Given the user is on the Login Page
    When the user enters "valid" "<username>" into the "Username" field
    And enters "invalid" "<password>" into the "Password" field
    And clicks the "Login" button
    Then the "Epic sadface: Username and password do not match any user in this service" error is displayed
    And the "Username" and "Password" fields are highlighted in red

    Examples: 
      | username      |
      | standard_user |

  Scenario: Login with empty required fields
    Given the user is on the Login Page
    When the user clicks the "Login" button
    Then the "Username is required" or "Password is required" error is displayed
    And the "Username" and "Password" fields are highlighted in red
