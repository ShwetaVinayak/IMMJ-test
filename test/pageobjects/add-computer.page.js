import { expect } from 'chai';
import Page from './page';

class AddComputerPage extends Page {
    /**
    * define elements
    */
    get computerName() { return $('#name'); }
    // introducedDate() { return $('#introduced'); }

    setDateField(filed) {
        const element = {
            introduced: $('#introduced'),
            discontinued: $('#discontinued'),
        };
        return element[filed];
    }

    // get discontinuedDate() { return $('#discontinued'); }
    get company() { return $('//select[@name="company"]'); }
    selectCompany(companyNum) { return $(`//option[@value="${companyNum}"]`) }
    get createThisComputerBtn() { return $('input[value="Create this computer"]') };
    get saveEditedDetailsBtn() { return $('input[value="Save this computer"]') }
    get numberOfCompany() {
        return $$('//select[@id="company"]/option');
    }
    get cancelBtn() { return $('//a[contains(text(),"Cancel")]') };
    get computerRequired() { return $('//div[@class="clearfix error"]//label[contains(text(),"Computer name")]') };
    get invalidIntroducedDateError() { return $('//div[@class="clearfix error"]//label[contains(text(),"Introduced date")]') };
    get invalidDiscontinuedDateError() { return $('//div[@class="clearfix error"]//label[contains(text(),"Discontinued date")]') }
    get editComputerDetailHeader() { return $('//h1[contains(text(),"Edit computer")]') };
    get addComputerDetailHeader() { return $('//h1[contains(text(),"Add a computer")]') };
    get deleteThisComputerBtn() { return $('//input[@value="Delete this computer"]')}
    /**
     * define or overwrite page methods
     */

    assertaddComputerPageURL({ addConputerPath }) {
        expect(browser.getUrl()).contains(addConputerPath);
    }

    selectCompanyName(company) {
        if (company !== null) {
            this.company.click();
            let noOfCompany = this.numberOfCompany.length;
            var randomCompany = Math.floor((Math.random() * (noOfCompany - 1)) + 2);
            this.selectCompany(randomCompany).click();
        }
    }

    setDate(details, setdate, dateIs, field) {
        if (setdate !== null) {
            let dateToBeSet
            if (details === "valid") {
                dateToBeSet = dateIs.toISOString().split("T")[0];
                this.setDateField(field).clearValue();
                this.setDateField(field).setValue(dateToBeSet);
                assert.equal(this.setDateField(field).getAttribute('value'), dateToBeSet);
            } else if (details === "invalid") {
                dateToBeSet = dateIs;
                this.setDateField(field).clearValue();
                browser.pause(2000)
                this.setDateField(field).setValue(dateToBeSet);
            }
        }
    }

    setComputerName(computer,computerNameIs) {
        if (computer !== null) {
            this.computerName.clearValue();
            this.computerName.setValue(computerNameIs);
            assert.equal(this.computerName.getAttribute('value'), computerNameIs);
        }

    }
    addNewComputerDetails({ details, computer, introduced, discontinued, company }) {
        const computerData = require('../../utilities/generate')();
        this.setComputerName(computer,computerData.details.newComputerData().firstName)
        this.setDate(details, introduced, computerData.details.newComputerData().introducedDate, "introduced")
        this.setDate(details, discontinued, computerData.details.newComputerData().discontinuedDate, "discontinued")
        this.selectCompanyName(company);
    }

    submitComputerDetails(action) {
        (action === "new") ? this.createThisComputerBtn.click() : this.saveEditedDetailsBtn.click();
    }

    cancelAddComputerPage() {
        this.cancelBtn.waitForDisplayed(60000);
        this.cancelBtn.click();
    }

    assertMandatoryField(validationFor) {
        if (validationFor === "computer name") {
            this.computerRequired.waitForDisplayed(10000);
            assert.isTrue(this.computerRequired.isDisplayed());
        }
        else if (validationFor === "dates") {
            this.invalidIntroducedDateError.waitForDisplayed(60000);
            this.invalidDiscontinuedDateError.waitForDisplayed(60000);
            assert.isTrue(this.invalidIntroducedDateError.isDisplayed());
            assert.isTrue(this.invalidDiscontinuedDateError.isDisplayed());
        }


    }

    assertComputerDetailsPage() {
        assert.isTrue(this.editComputerDetailHeader.isDisplayed());
    }

    editComputerDetails(editField) {
        const computerData = require('../../utilities/generate')();
        (editField === "computer name") ? this.setComputerName("required",computerData.details.newComputerData().firstName) :
            (editField === "introduced date") ? this.setDate("valid", "required", computerData.details.newComputerData().introducedDate, "introduced") :
                this.selectCompanyName("required");
    }

    deleteComputer() {
        this.deleteThisComputerBtn.waitForDisplayed(3000);
        this.deleteThisComputerBtn.click();
    }
}

export default new AddComputerPage();
