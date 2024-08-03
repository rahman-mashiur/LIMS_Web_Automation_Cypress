export class OrganizationProfilePage {
    activeInactive_btn = '.MuiButton-containedError'
    edit_btn = '.profile-details-common-header > .MuiButton-containedPrimary'
    orgName_bng = '#\:rh\:'
    orgOwnerName_eng = '#\:ri\:'
    orgOwnerName_bng = '#\:rj\:'
    orgOwnerMobile = '#\:rk\:'
    orgOwnerEmail = '#\:rl\:'
    orgWebsite = '#\:rm\:'
    orgEstablishDate = '#simple-tabpanel-COMPANY_INFORMATION > div > div > div > div > form > div > div:nth-child(4) > div.MuiBox-root.css-1840zz > div.MuiBox-root.css-0 > div > div > div > button > svg'
    industrialSector = '#mui-component-select-organizationSectorId'
    orgEmployeeNumers = '#mui-component-select-factoryEmployeeNumbers'
    tradeLicenseNo = '#\:r16\:'
    removeCompanyLogo_btn = '#\:r16\:'
    attachCompanyLogo = '#simple-tabpanel-COMPANY_INFORMATION > div > div > div > div > form > div > div:nth-child(6) > div.MuiBox-root.css-r85p5r > div > div > div > div.MuiBox-root.css-8atqhb > div > div.fileNameContainer.MuiBox-root.css-8atqhb > label'
    tinNumber = '#\:ri\:'
    binNumber = '#\:rj\:'
    fireLicenseNumber = '#\:rh\:'
    difeLicenseNo = '#\:rk\:'
    industryAssociation = '#mui-component-select-industryAssociationIds'
    govtOrg_checkBox = '#simple-tabpanel-COMPANY_INFORMATION > div > div > div > div > form > div > div:nth-child(12) > div > div > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.css-1orzqds > input'
    companyProfileDetails = '#\:rn\:'
    addressDetails = '#\:rs\:'
    contactPersonName = '#\:rt\:'
    contactPersonDesignation = '#\:ru\:'
    contactPersonEmail = '#\:rv\:'
    termsPrivacyCheckbox = '#simple-tabpanel-COMPANY_INFORMATION > div > div > div > div > form > div > div:nth-child(21) > div > div > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.css-1orzqds > input'
    updateCancel_btn = '#simple-tabpanel-COMPANY_INFORMATION > div > div > div > div > form > div > div.formRow.button-section.MuiBox-root.css-0 > div > button:nth-child(1)'
    updateSubmit_btn = '#simple-tabpanel-COMPANY_INFORMATION > div > div > div > div > form > div > div.formRow.button-section.MuiBox-root.css-0 > div > button:nth-child(2)'

    activeOrg() {
        cy.get(this.activeInactive_btn).click()
    }
    inactiveOrg() {
        cy.get(this.activeInactive_btn).click()
    }
    click_edit_btn() {
        cy.get(this.edit_btn).click()
    }
    enter_orgOwnerName_eng() {
        cy.get(this.orgOwnerName_eng).clear().type('Md. Rafikul Islam')
    }
    enter_orgOwnerName_bng() {
        cy.get(this.orgOwnerName_bng).clear().type('মোঃ রফিকুল ইসলাম')
    }
    enter_orgName_bng() {
        cy.get(this.orgName_bng).clear().type('সিমেক ট্যানারি লিমিটেড')
    }
    enter_orgOwnerMobile() {
        cy.get(this.orgOwnerMobile).clear().type('01918963014')
    }
    enter_orgOwnerEmail() {
        cy.get(this.enter_orgOwnerEmail).clear().type('rafik@simectannery.com')
    }
    enter_orgWebsite() {
        cy.get(this.orgWebsite).clear().type('')
    }
    enter_tinNumber() {
        cy.get(this.tinNumber).clear().type('234322776899')
    }
    enter_binNumber(){
        cy.get(this.binNumber).clear().type('234321876')
    }
    enter_fireLicenseNumber(){
        cy.get(this.fireLicenseNumber).clear().type('')
    }
    enter_difeLicenseNo(){
        cy.get(this.difeLicenseNo).clear().type()
    }
    click_govtOrg_checkBox(){
        cy.get(this.govtOrg_checkBox).click()
    }
    enter_companyProfileDetails(){
        cy.get(this.companyProfileDetails).clear().type('')
    }
    enter_contactPersonName(){
        cy.get(this.contactPersonName).clear().type('Md. Rafikul Islam')
    }
    enter_contactPersonDesignation(){
        cy.get(this.contactPersonDesignation).clear().type('Proprietor')
    }
    enter_contactPersonEmail(){
        cy.get(this.contactPersonEmail).clear().type('rafik@simectannery.com')
    }
    click_termsPrivacyCheckbox(){
        cy.get(this.termsPrivacyCheckbox).click()
    }
    click_updateCancel_btn(){
        cy.get(this.updateCancel_btn).click()
    }
    click_updateSubmit_btn(){
        cy.get(this.updateSubmit_btn).click()
    }
}