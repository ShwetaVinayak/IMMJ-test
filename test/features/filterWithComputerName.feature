Feature: Test computer can be filtered by name
    As a tester
    I want to test that I can filter computers with name

    Scenario Outline: Verify that user can filter computers by name
        Given I open the computer databse site
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"
        And I search for valid <computerName>
        Then I verify search result on filtered page <computerName>
        Examples:
        |computerName|
        |"IBM"|
        |"111111"|
