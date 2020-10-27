class HomePage {
    get pageHeader() {return $('h1')};
    get subHeading() { return $('.marketing-form__fallback-cta') };
    get getLoginLink() { return $('.marketing-nav__item.marketing-nav__item--primary')}
}

module.exports = new HomePage();
