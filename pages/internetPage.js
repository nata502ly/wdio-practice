class InternetPage {
    getHeadingLink(index) {
        return $(`ul li:nth-child(${index}) a`).click();
    }

    async clickUnselectedCheckbox() {
        await $$('input[type="checkbox"]').filter(element=>{
            if(element.isSelected() === false) {
                element.click()
            }
        })
    }

    getCheckboxElements() {
       return $$('input[type="checkbox"]')
    }
}

module.exports = new InternetPage();


