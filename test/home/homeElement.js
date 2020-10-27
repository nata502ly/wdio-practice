const homePage = require('../../pages/homePage');


describe('home page elements handle', () => {
    it('verify home page lements', () => {
        browser.url('https://www.shopify.com/');
        let text = homePage.pageHeader.getText();
        console.log('!!!!!!!!!!!!!!!!!!!!' + text);
        browser.pause(10000);
        console.log(homePage.subHeading.getText());
        homePage.getLoginLink.click();
        browser.pause(10000);
    });
});

