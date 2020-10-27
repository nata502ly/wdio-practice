const internetPage = require('../../pages/internetPage');

describe('internet page interactions', ()=> {
    it('interact with checkboxes', () => {
        browser.url('https://the-internet.herokuapp.com/');
        internetPage.getHeadingLink(6);
        internetPage.clickUnselectedCheckbox();
        browser.pause(5000);

        console.log("!!!!!!!!!!!!!!!!!!"+internetPage.getCheckboxElements());

        internetPage.getCheckboxElements().filter(el=>{
            expect(el.isSelected()).equal(true)})

        // expect(internetPage.getCheckboxElements())
    })
});
