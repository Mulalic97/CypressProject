import {userRegister} from "../../support/commands";
import {emailGenerator, passwordGenerator} from "../../support/helper";

const Base = Cypress.env('BASE_URL')
const email = emailGenerator()
const password = passwordGenerator();

it('User Inputs Fields', () => {

    cy.visit(`${Base}account/register`)
    userRegister("Mustafa", "Mulalic", "242525", email, password)
})

it('Check User is Created', () => {

    cy.request('POST', 'account/login', { email:email, password:password })
        .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('email', email)
        })
})



