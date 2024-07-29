/// <reference types="cypress" />

import { LandingPage } from "../pages/LandingPage.cy";
import { LoginPage } from "../pages/LoginPage.cy";

const lndP = new LandingPage()
const loginP = new LoginPage()

var url = '/'
var uname = '01918963015'
var password = 'Simec#123'


it('LIMS Test', () => {

    lndP.navigate(url)
    lndP.click_signin_btn()

    loginP.enteruname(uname)
    loginP.enterPassword(password)
    loginP.click_signin_btn()

})

