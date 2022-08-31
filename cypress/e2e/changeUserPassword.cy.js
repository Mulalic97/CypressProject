const RandExp = require("randexp");
import {userLogIn} from "../support/commands";

let currentPassword = new passwordHandler()

const passwordHandler = () => {

    return new RandExp(/^[a-zA-Z0-9_/!@#$%^&*()+={}><.,~`?"':;]{16}$/gi).gen()
}

it('User Changes Password', () => {

userLogIn()
    cy.get('#settings').click()
    cy.get('#MainContent_CurrentPassword').clear().type(passwordHandler())
    console.log(currentPassword);

})