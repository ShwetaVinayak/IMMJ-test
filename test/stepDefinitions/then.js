import { Then } from 'cucumber';
import addComputerPage from '../pageobjects/add-computer.page';
import homePge from '../pageobjects/computer-database-homepage';

Then(/^I expect to be on home page with url "([^"]*)"$/, function (message) {
  homePge.assertHomePageURL({ url: message });
});

Then(/^I click on the button add computer$/, function () {
  homePge.clickOnAddComputerBtn();
});

Then(/^I Enter new "([^"]*)" computer details for "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, function (detailsType,comptrName, intDate, disDate, compName) {
  addComputerPage.addNewComputerDetails({ details: detailsType,computer: comptrName, introduced: intDate, discontinued: disDate, company: compName });
});

Then(/^I should see computer successfully "([^"]*)" alert message on home page$/, function (operation) {
  homePge.assertNewComputerAddition(operation);
});

Then(/^I should see required validation message for "([^"]*)"$/, function (validationFor) {
  addComputerPage.assertMandatoryField(validationFor);
});

Then(/^I should navigate to computer details page$/, function () {
  addComputerPage.assertComputerDetailsPage();
});

Then(/^I verify search result on filtered page "([^"]*)"$/, function (searchKey) {
  homePge.assertSearchResult(searchKey);
});