/// <reference types="cypress" />

var home = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
var login = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
var username = 'Admin'
var password = 'admin123'

const { faker } = require('@faker-js/faker')
var generatedPassword = faker.internet.password(8, true, /[A-Za-z0-9]/)

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
    cy.get('.oxd-select-option').contains('Admin').click()

    cy.get('.oxd-autocomplete-text-input > input').type('ranga')
    cy.wait(1000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').contains('Enabled').click()

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(faker.internet.username())
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(generatedPassword)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(generatedPassword)
  
    cy.get('.oxd-form-actions').contains('Save').click()
    cy.get('.oxd-toast').should('contain', 'Successfully Saved')

    cy.screenshot('Admin - Add User')
   // cy.clearCookies()
   // cy.clearLocalStorage()
    
  }),

  it('CT - Create PIM - Employee', () => {
    cy.visit(home)
    
    cy.get('.oxd-main-menu-item').contains('PIM').click()
    cy.url().should('include', '/pim/viewEmployeeList')

    cy.get('.orangehrm-header-container').contains('Add').click()    
    cy.url().should('include', '/pim/addEmployee')

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(faker.name.firstName())
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(faker.name.middleName())
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(faker.name.lastName())
  
    cy.get('.oxd-form-actions').contains('Save').click()
    cy.get('.oxd-toast').should('contain', 'Successfully Saved')

    cy.screenshot('PIM - Add Employee')
   
  }),

  it('CT - Create Recruitment - Candidate', () => {
    cy.visit(home)

    cy.get('.oxd-main-menu-item').contains('Recruitment').click()
    cy.url().should('include', '/recruitment/viewCandidates')

    cy.get('.orangehrm-header-container').contains('Add').click()
    cy.url().should('include', '/recruitment/addCandidate')

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(faker.name.firstName())
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(faker.name.middleName())
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(faker.name.lastName())

    cy.get('.oxd-select-text').click()
    cy.get('.oxd-select-option').contains('Software Engineer').click()
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type(faker.internet.email())
    
    cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type(faker.string.sample(10))
 
    cy.get('.oxd-form-actions').contains('Save').click()
    cy.get('.oxd-toast').should('contain', 'Successfully Saved')
    cy.screenshot('Recruitment - Add Candidate')

  })
})
