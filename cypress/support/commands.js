// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export function userRegister(name, lastName, number, email, password){

    cy.get('#MainContent_firstName')
        .type(name)

    cy.get('#MainContent_lastName')
        .type(lastName)

    cy.get('#MainContent_telephoneNumber')
        .type(number)

    cy.get('#MainContent_Email')
        .type(email)

    cy.get('#MainContent_Password')
        .type(password)

    cy.get('#MainContent_ConfirmPassword')
        .type(password)

    cy.get('#CheckPolicies')
        .check()

    cy.get('#MainContent_RegisterButton')
        .click()
}