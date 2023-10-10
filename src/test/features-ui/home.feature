Feature: Home Page Test Cases

  Scenario: User with valid credenatials should able to login
    Given User provide the username and password
    And User click on login button
    Then User should able to login successfully

  Scenario: Run the lighthouse to generate the UI performance report
    Given Navigate to the application
    Then Run the lighthouse test
