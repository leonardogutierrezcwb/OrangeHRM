/// <reference types="cypress" />

//const SuperFakerBrasil = require('faker-brasil')

describe('Access a - Orange HRM', () => {
  //const fakerBrasil = new SuperFakerBrasil()
  it('CT - 001 - Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') 
    cy.get('.oxd-form').contains('Login').click() 
    cy.url().should('include', '/dashboard/index') 
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click() 
    cy.get('.oxd-dropdown-menu').contains('Logout').click() 
    cy.url().should('include', '/auth/login')    
    cy.screenshot('Login - Realizado com sucesso') 
    
    
  }),

  it('CT - 002 - Credencials Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1231') 
    cy.get('.oxd-form').contains('Login').click() 
    cy.get('.oxd-alert').contains('Invalid credentials')
    cy.screenshot('Login - Credencial inválida')
  
  }),

  it('CT - 003 - Password Reset', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-slot').contains('Forgot your password?')
      .click()
    cy.url().should('include', '/auth/requestPasswordResetCode')
    cy.get('.orangehrm-card-container').should('contain', 'Reset Password')
    cy.get('.orangehrm-card-container').should('contain', 'Username')
    cy.get('.oxd-input').type('Admin')
    cy.get('.oxd-button').contains('Reset Password').click()
    cy.url().should('include', '/auth/sendPasswordReset')
    cy.get('.orangehrm-card-container').should('contain', 'Reset Password link sent successfully')

  })

})