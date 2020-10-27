describe.skip('get header', () => {
    it('get header value', () => {
        browser.url('https://www.shopify.com//');
        const header = $('h1');
        const text = header.getValue();
    });
});
