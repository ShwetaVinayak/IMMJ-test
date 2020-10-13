Feature: Test that user can edit computer details
    As a tester
    I want to test that I can navigate to computer details page and edit

   Scenario: Verify that user can update ccomputer name
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I click on any of the computer name link listed on home page
        Then I should navigate to computer details page
        And I edit "computer name"
        And I submit "edited" computer details
        Then I should see computer successfully "updated" alert message on home page


    Scenario: Verify that user can update computer introduced date
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I click on any of the computer name link listed on home page
        Then I should navigate to computer details page
        And I edit "introduced date"
        And I submit "edited" computer details
        Then I should see computer successfully "updated" alert message on home page


    Scenario: Verify that user can update computer company name
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I click on any of the computer name link listed on home page
        Then I should navigate to computer details page
        And I edit "company"
        And I submit "edited" computer details
        Then I should see computer successfully "updated" alert message on home page
