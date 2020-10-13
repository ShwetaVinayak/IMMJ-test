Feature: Test page navigation
    As a tester
    I want to test that I can navigate to next and previous page

    Scenario: Verify that user can navigate next and previous page
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        When I click on "Next" button   
        Then I should navigate to "Next" page
        When I click on "Previous" button
        Then I should navigate to "Previous" page
        