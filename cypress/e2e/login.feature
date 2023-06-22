Feature: Login tests
    As a customer, I want to test the login functionalities

    Background:
        Given I'm on the home page

    Scenario: Login with valid e-mail and password
        When I do login using correct email and password
        Then I must be logged on the site

    Scenario: Login with incorrect password
        When I do login using incorrect password
        Then Must be informed that the data access are wrong