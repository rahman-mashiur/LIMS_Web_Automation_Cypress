export class LoginPage {

    uname = '#username'
    pass = '#password'
    signIn_btn = 'button'

    enteruname(username) {
        cy.get(this.uname).clear().type(username)
    }
    enterPassword(password) {
        cy.get(this.pass).clear().type(password)
    }
    click_signin_btn() {
        cy.get(this.signIn_btn).click()
    }
}