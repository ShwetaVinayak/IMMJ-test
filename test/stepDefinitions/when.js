import {When} from 'cucumber';
import addComputerPage from '../pageobjects/add-computer.page';
import homePge from '../pageobjects/computer-database-homepage';

When(/^I should land on add computer page "([^"]*)"$/, function (path) {
    addComputerPage.assertaddComputerPageURL({addConputerPath: path})
});

When(/^I submit "([^"]*)" computer details$/, function (action) {
    addComputerPage.submitComputerDetails(action);
});

When(/^I click on the button cancel$/, function () {
    addComputerPage.cancelAddComputerPage();
});

When(/^I click on any of the computer name link listed on home page$/, function () {
    homePge.clickOnComputerName();
  });

  When(/^I search for valid "([^"]*)"$/, function (compName) {
    homePge.searchComputer(compName);
  });

  When(/^I edit "([^"]*)"$/, function (editField) {
    addComputerPage.editComputerDetails(editField);
  });

  When(/^I click on delete this computer$/, function () {
    addComputerPage.deleteComputer();
});

let pageCount;
When(/^I click on "([^"]*)" button$/, function (direction) {
    pageCount = homePge.navigateToPage(direction);
});

When(/^I should navigate to "([^"]*)" page$/, function (direction) {
    homePge.assertPageNavigation(direction,pageCount);
});

