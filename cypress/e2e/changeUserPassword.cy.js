import {emailGenerator, passwordGenerator} from "../support/helper";

const RandExp = require("randexp");
import {userRegister} from "../support/commands";

const email = emailGenerator()
const currentPassword = passwordGenerator();
const newPassword = passwordGenerator();

it('User Changes Password', () => {

    userRegister("Mustafa", "Mulalic", "242525", email, currentPassword)
   // cy.get('#settings').click()
    //cy.get('#MainContent_CurrentPassword').clear().type(currentPassword)
    //cy.get('#MainContent_NewPassword').clear().type(newPassword)


})