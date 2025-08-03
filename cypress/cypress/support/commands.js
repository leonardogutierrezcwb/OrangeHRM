Cypress.Commands.add('login', () => {
  cy.session('Admin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-form').contains('Login').click()
    cy.wait(2000) 
    cy.url().should('include', '/dashboard/index')
  })
})


//Cypress.Commands.add('clearSessionData', () => {
//  cy.clearCookies()
//  cy.clearLocalStorage()
//  cy.window().then((win) => win.sessionStorage.clear())
//})

