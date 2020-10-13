Feature: Test that user can ddelete computer
    As a tester
    I want to test that I can navigate to computer details page and delete it

   Scenario: Verify that user can delete computer
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I click on any of the computer name link listed on home page
        Then I should navigate to computer details page
        And I click on delete this computer
        Then I should see computer successfully "deleted" alert message on home page


  Scenario Outline: Verify that user can delete computer from filter result
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I search for valid <computerName>
        Then I verify search result on filtered page <computerName>
        Then I click on any of the computer name link listed on home page
        And I should navigate to computer details page
        And I click on delete this computer
        Then I should see computer successfully "deleted" alert message on home page
        Examples:
        |computerName|
        |"IBM"|