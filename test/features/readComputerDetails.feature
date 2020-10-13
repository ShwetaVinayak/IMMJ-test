Feature: Test adding new computer to computer database site
    As a tester
    I want to test that I can navigate to computer details page

   Scenario: Verify that user can navigate to computer details page
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I click on any of the computer name link listed on home page
        Then I should navigate to computer details page

    Scenario Outline: Verify that user can navigate to computer details page from filter result
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I search for valid <computerName>
        Then I verify search result on filtered page <computerName>
        Then I click on any of the computer name link listed on home page
        And I should navigate to computer details page
         Examples:
        |computerName|
        |"IBM"|
        