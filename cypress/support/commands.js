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
const Base = Cypress.env('BASE_URL')
const User = Cypress.env('USER_CREDENTIALS')

export function userRegister(name, lastName, number, email, password){

    cy.visit(`${Base}account/register`)

    cy.get('.cc-btn').click();

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

    cy.get('#MainContent_createInbox').should('be.visible').click()
    }


export function userLogIn() {
    cy.visit(`${Base}/account/login`)
    cy.get('.cc-btn').click();
    cy.get('#MainContent_Email').type(User.email)
    cy.get('#MainContent_Password').type(User.password)
    cy.get('#MainContent_LoginButton').click()
    if (cy.get('#MainContent_createInbox').should('not.exist')) {
        cy.get("a[href='/account/dashboard']").should("be.visible")
    } else {
        cy.get('#MainContent_createInbox').should('be.visible').click()
    }
}