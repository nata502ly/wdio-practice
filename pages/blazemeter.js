class BlazeMeter {
    get parentElement() {
        return $('ul.list-nav-links')
    }

    get childElement() {
        return this.parentElement.$$('li')
    }

    get textForLi() {
        return this.childElement.filter(element => {
            console.log(element.getText())
        })
    }

    get useCases() {
        return $$('div#main_b_footer_second_block>ul>li');
    }

    get useCasesText() {
        return this.useCases.filter(element=>
            console.log(element.getText())
        )
    }
}

module.exports = new BlazeMeter();
