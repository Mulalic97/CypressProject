import {userRegister} from "../../support/commands";
import {emailGenerator, passwordGenerator} from "../../support/helper";

const Base = Cypress.env('BASE_URL')
const email = emailGenerator()
const password = passwordGenerator();

it('User Registers', () => {

    cy.visit(`${Base}account/register`)
    userRegister("Mustafa", "Mulalic", "242525", email, password)

    if(cy.get('#MainContent_createInbox').should('not.exist')){

        cy.get("a[href='/account/dashboard']").should("be.visible")

    }
    else{
        cy.get('#MainContent_createInbox').should('be.visible')
    }
})



