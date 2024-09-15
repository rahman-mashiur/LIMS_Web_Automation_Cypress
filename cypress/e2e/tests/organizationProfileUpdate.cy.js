/// <reference types='cypress' />

import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { OrganizationProfilePage } from "../pages/OrganizationAdmin/OrganizatioProfilePage";

const lndP = new LandingPage()
const loginP = new LoginPage()
const opp = new OrganizationProfilePage()
const dp = new DashboardPage()

var url = '/'
var uname = '01918963015'
var password = 'Simec#123'


it('LIMS Login Test', () => {

    lndP.navigate(url)
    lndP.click_signin_btn()

    loginP.enteruname(uname)
    loginP.enterPassword(password)
    loginP.click_signin_btn()
    cy.wait(3000)

    dp.click_org_profile()
    cy.wait(2000)
    opp.click_edit_btn()
    opp.select_orgEstablishDate()

})