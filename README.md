# Computer-Database Tests

[Computer-Database](http://computer-database.herokuapp.com/computers) Automation test cases

## Computer-Database automation testing using WebdriverIO with Cucumber

Follow these instructions to run this project in your local environment

### Prerequisites

Below are the list of prerequisites required to run this project

* [Node.js](https://nodejs.org/en/)  > 12 

* [Chrome browser](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en) version 86

* `git clone` the repository


## Getting Started 

To run tests execute below commands in CLI

* Open CLI
* Navigate to downloaded location i.e IMMJ-test folder (Project parent folder)
Ex:
```
cd C:\test\IMMJ-test
```
* Execute below command to install dependencies
```
npm install
```
Wait for successful installation of all dependencies packages.

Once installation completed proceed for running tests.

### Running tests

* Next, execute below command to start executing  atomated tests

```
npm run test-immj 
```
* **NOTE**: `test-immj` is a `script tag` present in package.json

### Output

Observe the output printed in console.

### Report - Allure 

Allure reporting capabilities are integrated with this automation suite for anlaysing execution test results.

To view and run allure report use below command

```
npm run allure-report 
```
This will open allure report in the browser. 

### Manual test cases

Manual test cases can be found at location - https://github.com/ShwetaVinayak/IMMJ-test/tree/master/manual_tests
