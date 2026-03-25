/// <reference types="cypress" />

var home = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
var login = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
var username = 'Admin'
var password = 'admin123'

describe('Access a - Orange HRM', () => {

  beforeEach(() => {
    cy.login()
  })

  it('CT 001 - Login', () => {
    cy.visit(home)
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get('.oxd-dropdown-menu').contains('Logout').click()
    cy.url().should('include', '/auth/login')
    cy.screenshot('Login - Successful')
    cy.clearCookies()
    cy.clearLocalStorage()
    
  })

  it('CT 002 - Navigation on System', () => {
    cy.visit(login)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-form').contains('Login').click()
    cy.url().should('include', '/dashboard/index')

    cy.get('.oxd-main-menu-item').contains('Admin').click()
    cy.url().should('include', '/admin/viewSystemUsers')

    cy.get('.oxd-main-menu-item').contains('PIM').click()
    cy.url().should('include', 'pim/viewEmployeeList')

    cy.get('.oxd-main-menu-item').contains('Leave').click()
    cy.url().should('include', '/leave/viewLeaveList')

    cy.get('.oxd-main-menu-item').contains('Time').click()
    cy.url().should('include', '/time/viewEmployeeTimesheet')

    cy.get('.oxd-main-menu-item').contains('Recruitment').click()
    cy.url().should('include', '/recruitment/viewCandidates')

    cy.get('.oxd-main-menu-item').contains('My Info').click()
    cy.url().should('include', 'pim/viewPersonalDetails/empNumber/')

    cy.get('.oxd-main-menu-item').contains('Performance').click()
    cy.url().should('include', 'performance/searchEvaluatePerformanceReview')

    cy.get('.oxd-main-menu-item').contains('Dashboard').click()
    cy.url().should('include', '/dashboard/index')

    cy.get('.oxd-main-menu-item').contains('Directory').click()
    cy.url().should('include', '/directory/viewDirectory')

    cy.get('.oxd-main-menu-item').contains('Maintenance').click()
    cy.url().should('include', '/maintenance/purgeEmployee')
    cy.get('.orangehrm-card-container').contains('Cancel').click()

    cy.get('.oxd-main-menu-item').contains('Claim').click()
    cy.url().should('include', '/claim/viewAssignClaim')

    cy.get('.oxd-main-menu-item').contains('Buzz').click()
    cy.url().should('include', '/buzz/viewBuzz')

    cy.get('.oxd-userdropdown-tab').click()
    cy.get('.oxd-dropdown-menu').contains('Logout').click()
    cy.url().should('include', '/auth/login')

    cy.clearCookies()
    cy.clearLocalStorage()

  })

  it('CT 003 - Credentials Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234') //Senha inválida
    cy.get('.oxd-form').contains('Login').click()
    cy.get('.oxd-alert').contains('Invalid credentials')
    cy.screenshot('Login - Credentials Invalid')
  })

  it('CT 004 - Password Reset', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-userdropdown-tab').click()
    cy.get('.oxd-dropdown-menu').contains('Change Password').click()
    cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('admin123')
    cy.get('.user-password-cell > .oxd-input-group').type('admin123')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('admin123')
    cy.get('.oxd-button--secondary').contains('Save').click()
    cy.wait(2000)
    cy.get('.oxd-toast').contains('Successfully Saved') 
    cy.screenshot('Login - Password Reset')
  })

})
