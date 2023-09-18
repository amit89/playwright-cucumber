Feature: User Authentication tests

  # Background: 
  #   Given User navigates to the application
  #   And User click on the login link

  # Scenario: Login should be success
  # Given User navigates to the application
  #   And User click on the login link
  #   And User enter the username as "johndoe7071@gmail.com"
  #   And User enter the password
  #   When User click on the login button
  #   Then Login should be success

  Scenario: Call the appi
  And User call the token generation api
  And USer fetch the token from the response
  And user call the get api to fetch the user list