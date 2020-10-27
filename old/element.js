describe.skip('interaction with elements', () => {

    it('enter value in the field', () => {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Macbook');
        browser.pause(5000);
    });

    it('get text value', () => {
        browser.url('/');
        const text = $('#glow-toaster-body');
        text.getText();
        console.log(text);
    });

    it('click on the field', () => {
        browser.url('/');
        const icon = $('input.nav-input');
        icon.click();
    });
});
