const {ta} = require('trueautomation-helper');

describe('TrueAutomation.IO WebdirverIO example', () => {
    it('Test example', () => {

        browser.url('https://learn.letskodeit.com/p/practice');

        $(ta('twoTest:BMWRadioButton', "//input[@id='bmwradio']")).click();

        $(ta('twoTest:HondaCheckBox', '//input[@id=\'hondacheck\']')).click();

        $(ta('twoTest:SingUpButton', '//a[@id=\'header-sign-up-btn\']')).click();
        browser.pause(2000);
    });
});
