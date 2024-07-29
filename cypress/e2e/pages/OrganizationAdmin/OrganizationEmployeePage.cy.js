export class OrganizationEmployeePage {
    employeeNameEnglish = '#\:r4\:'
    employeeNameBangla = '#\:r5\:'
    email = '#\:r6\:'
    phone = '#\:r7\:'
    clearAll_btn = '.MuiButton-outlinedError'
    add_btn = '.submitBtnBox > .MuiButton-outlinedPrimary'
    edit_btn = ':nth-child(2) > .css-jky7cf > .MuiButtonBase-root'
    emp_name_eng_search = '#\:ra\:'
    emp_name_bng_search = '#\:rb\:'
    email_search = '#\:rc\:'
    phone_search = '#\:rd\:'
    filter_clear_btn = ':nth-child(1) > .css-jky7cf > .MuiButtonBase-root'


    enter_employeeNameEnglish() {
        cy.get(this.employeeNameEnglish).type()
    }
    enter_employeeNameBangla() {
        cy.get(this.employeeNameBangla).type()
    }
    enter_email() {
        cy.get(this.email).type()
    }
    enter_phone() {
        cy.get(this.phone).type()
    }
    click_add_btn() {
        cy.get(this.add_btn).click()
    }
    click_clearAll_btn() {
        cy.get(this.clearAll_btn).click()
    }
    click_edit_btn() {
        cy.get(this.edit_btn).click()
    }
}