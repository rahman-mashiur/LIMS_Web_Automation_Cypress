export class DashboardPage {
    org_mangmnt = '.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root'
    org_profile = '[href="/organization/organization-management/organization-profile"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root'

    click_org_profile(){
        cy.get(this.org_mangmnt).click()
        cy.get(this.org_profile).click()
    }
}