const {Given, When, Then} = require('cucumber');

Given('I am on the page', () => {
    const path = 'e2e-app #wrapper';
    
    browser.url('/');
    browser.waitForVisible(path, 10000);
});

Then('I should see form', () => {
    const path = 'e2e-app child-component';
    browser.waitForVisible(path, 10000);
});

