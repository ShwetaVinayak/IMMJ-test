import { Given} from 'cucumber';
import homePge from '../pageobjects/computer-database-homepage';

Given(/^I open the computer databse site$/, function () {
  homePge.open();
  browser.getTitle().should.equal('Computers database');
});