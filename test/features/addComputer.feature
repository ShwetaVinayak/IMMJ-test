Feature: Test adding new computer to computer database site
    As a tester
    I want to test adding new computer

   Scenario Outline: Verify that new computer can be added
        Given I open the computer databse site
        Then  I click on the button add computer
        And I should land on add computer page "/computers/new"
        Then I Enter new <entryType> computer details for <computerName> <introdducedDate> <disccontinuedDate> and <companyName>
        And I submit "new" computer details
        Then I should see computer successfully "added" alert message on home page
         Examples:
        |entryType||computerName| |introdducedDate| |disccontinuedDate| |companyName|
        |"valid"||"required"    | |"required" |      | "required"| |"required" |


    Scenario: Verify add compupter page can be cancled
        Given I open the computer databse site
        Then  I click on the button add computer
        And I should land on add computer page "/computers/new"
        When  I click on the button cancel
        Then  I expect to be on home page with url "http://computer-database.herokuapp.com/computers"

    Scenario Outline: Verify that new computer can not be added without computer name
        Given I open the computer databse site
        Then  I click on the button add computer
        And I should land on add computer page "/computers/new"
        Then I Enter new <entryType> computer details for <computerName> <introdducedDate> <disccontinuedDate> and <companyName>
        And I submit "new" computer details
        Then I should see required validation message for "computer name"
         Examples:
        |entryType||computerName| |introdducedDate| |disccontinuedDate| |companyName|
        |"valid"| |""    | |"" |        | ""| |"" |

    Scenario Outline: Verify that new computer can not be added with invalid introduced date
        Given I open the computer databse site
        Then  I click on the button add computer
        And I should land on add computer page "/computers/new"
        Then I Enter new <entryType> computer details for <computerName> <introdducedDate> <disccontinuedDate> and <companyName>
        And I submit "new" computer details
        Then I should see required validation message for "dates"
         Examples:
        |entryType||computerName| |introdducedDate| |disccontinuedDate| |companyName|
        |"invalid"||"required"  | |"required" |     |"required"|        |"" |