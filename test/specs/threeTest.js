const {ta} = require('trueautomation-helper');

describe('TrueAutomation.IO WebdirverIO example', () => {
    it('Test example', () => {

        browser.url('https://www.staff-clothes.com/');

        $(ta('threeTest:hamburgerButton', "//button[@class='hamburger hamburger--slider ']")).click();

        $(ta('threeTest:newsButton', '(//span[text()=\'Новости и отзывы\'])[2]')).click();
        browser.pause(2000);

        //$(ta('threeTest:forBoysButton', '(//span[text()=\'Для парней\'])[1]')).click();
        //browser.pause(2000);

        $(ta('threeTest:logo', "//div[@class='header__logo']")).click();
        browser.pause(2000);

        $(ta('threeTest:language', "(//div[@class='select__selected'])[1]")).click();

        $(ta('threeTest:languageUA', "//div[@data-value='ua']")).click();
        browser.pause(5000);
    });
});
