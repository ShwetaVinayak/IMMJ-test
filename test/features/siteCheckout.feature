Feature: Test Computer database site
    As a tester
    I want to be able to test the site is up

   Scenario: Verify that Computer database application is launching
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"