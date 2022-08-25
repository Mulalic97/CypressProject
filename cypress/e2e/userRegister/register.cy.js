import {userRegister} from "../../support/commands";
import {emailGenerator, passwordGenerator} from "../../support/helper";

it('User Inputs Fields', () => {

    cy.visit("https://dev.parserr.com/account/register")

   userRegister("Mustafa", "Mulalic", "242525", emailGenerator(), passwordGenerator())


})