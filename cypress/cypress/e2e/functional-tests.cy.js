/// <reference types="cypress" />

var home = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
var login = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
var username = 'Admin'
var password = 'admin123'

describe('Access a - Orange HRM', () => {

  beforeEach(() => {
    cy.login()
  })

  it('CT - Include - Admin', () => {
    cy.visit(home)
    
    cy.get('.oxd-main-menu-item').contains('Admin').click()
    cy.url().should('include', '/admin/viewSystemUsers')

    cy.get('.orangehrm-header-container').contains('Add').click()    
    cy.url().should('include', '/admin/saveSystemUser')

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    

    cy.pause()


   // cy.clearCookies()
   // cy.clearLocalStorage()
    
  })



})
