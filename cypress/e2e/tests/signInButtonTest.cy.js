/// <reference types='cypress' />

import { LandingPage } from "../pages/LandingPage.cy";

let lndP = new LandingPage()

var url = '/'

it('signInButtonNameTest', () => {
    lndP.navigate(url)
    lndP.locate_signin_btn()
        .should('be.enabled')
        .should('be.visible')
        .and('have.text', 'সাইন ইন')
})