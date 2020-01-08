const {ta} = require('trueautomation-helper');

describe('TrueAutomation.IO WebdirverIO example', () => {
    it('Test example', () => {

        browser.url('https://trueautomation.io');

        $(ta('oneTest:loginStartButton', "//a[.//span[text()='Login']]")).click();
        browser.pause(2000);

        $(ta('oneTest:emailInput', '//input[@name=\'username\']')).setValue("igor@trueautomation.io");
        $(ta('oneTest:PasswordInput', '//input[@name=\'password\']')).setValue("Test1111");
        browser.pause(2000);

        $(ta('oneTest:loginButton', "//button[text()='Login']")).click();
        browser.pause(5000);
    });
});
