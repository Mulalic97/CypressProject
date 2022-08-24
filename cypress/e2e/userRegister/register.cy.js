import {userRegister} from "../../support/commands";


it('User Inputs Fields', () => {

    cy.visit("https://dev.parserr.com/account/register")

   userRegister("Mustafa", "Mulalic", "242525", "random@mailinato.com", "testuser")


})