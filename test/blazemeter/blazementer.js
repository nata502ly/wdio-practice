const blazePage = require('../../pages/blazemeter');

describe('Blazemeneter tests', ()=>{
    it('get text of all main links', ()=> {
        browser.url('https://www.blazemeter.com/');
        blazePage.useCasesText;
    })
});
