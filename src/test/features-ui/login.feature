Feature: Home Page Test Cases

  Scenario: User with valid credenatials should able to login
    //Given User provide the username and password

    And This is dummy test
    Then User name should get printed

  @smoke
  Scenario Outline: Verify user information
    Given a user with name "<username>", age "<accountNumber>", and country "<accountName>"
    And This is dummy test
    Then User name should get printed

    Examples: 
      | username   | accountNumber   | accountName   |
      | <username> | <accountNumber> | <accountName> |
