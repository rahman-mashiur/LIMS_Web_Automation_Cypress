export class LandingPage {

    signin_btn = '.button-section > :nth-child(1)'

    navigate(url) {
        cy.visit(url)
        cy.viewport(1700, 800)
    }
    click_signin_btn() {
        cy.get(this.signin_btn).click()
    }
    locate_signin_btn() {
        var button = cy.get(this.signin_btn)
        return button
    }

}