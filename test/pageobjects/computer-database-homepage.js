
import Page from './page';
import { expect } from 'chai';

class HomePage extends Page {
  /**
  * define elements
  */
  get searchInput() { return $('#yschsp'); };
  get searchButton() { return $('.mag-glass'); };
  get resultsList() { return $('#results'); };
  get addComputerBtn() { return $('#add'); };
  get alertMessage() { return $('.alert-message'); };
  get computerNameLink() { return $$('//td/a') };
  get searchBox() { return $('#searchbox') };
  get filterByName() { return $('#searchsubmit') };
  get nothingToDiaplay() { return $('//em[contains(text(),"Nothing to display")]') }
  get nextBtn() { return $('*=Next') }
  get previousBtn() { return $('*=Previous') }
  get currentPageComputers() { return $('//a[contains(text(),"Display")]') }

  /**
   * define or overwrite page methods
   */

  open() {
    super.open('http://computer-database.herokuapp.com/computers')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
    browser.pause(1000);
  }

  enterText(item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  search() {
    this.searchButton.click();
  }
  isSearched() {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }

  assertHomePageURL({ url }) {
    expect(browser.getUrl()).equal(url);
  }

  clickOnAddComputerBtn() {
    this.addComputerBtn.click()

  }

  assertNewComputerAddition(operation) {
    this.alertMessage.waitForDisplayed(60000);
    (operation == "added") ? expect(this.alertMessage.getText()).to.contain('has been created') :
      (operation == "updated") ? expect(this.alertMessage.getText()).to.contain('has been updated') :
        expect(this.alertMessage.getText()).to.contain('has been deleted')
  }

  clickOnComputerName() {
    var randomComputer = Math.floor((Math.random() * 9) + 1);
    this.computerNameLink[randomComputer].click();
    browser.pause(5000)

  }

  searchComputer(compName) {
    this.searchBox.setValue(compName);
    this.filterByName.click();
  }

  assertSearchResult(searchKey) {
    var filteredResult = [];
    var computerCountListedOnSignlePage = this.computerNameLink.length;
    let computerName;

    if (computerCountListedOnSignlePage <= 0) {
      assert.isTrue(this.nothingToDiaplay.isDisplayed());
    } else {
      for (var i = 0; i < computerCountListedOnSignlePage; i++) {
        computerName = this.computerNameLink[i].getText();
        filteredResult.push(computerName)
      }
      for (var i = 0; i < computerCountListedOnSignlePage; i++) {
        assert.isTrue(filteredResult[i].includes(searchKey));
      }
    }

  }

  navigateToPage(direction) {
    let computerCount = this.currentPageComputers.getText().split("to ")[1].split(" ")[0];
    if (direction === 'Next') {
      assert.isTrue(this.nextBtn.isEnabled());
      this.nextBtn.click();

    }

    if (direction === 'Previous') {
      assert.isTrue(this.previousBtn.isEnabled());
      this.previousBtn.click();

    }
    return computerCount;
  }

  assertPageNavigation(direction, pageCount) {
    let count2 = this.currentPageComputers.getText().split("to ")[1].split(" ")[0];
    if (direction === "Next") {
      assert.equal(pageCount, (count2 - 10));
    }
    else if (direction === "Previous") {
      assert.equal((pageCount-10), (count2));
    }
  }

}

export default new HomePage();
