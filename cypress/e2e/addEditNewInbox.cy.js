const Base = Cypress.env('BASE_URL')
const User = Cypress.env('USER_CREDENTIALS')
const RandExp = require('randexp');
const value = new RandExp(/^[0-9,A-Z]{4}$/).gen();

it("User Logs In", () => {
 cy.visit(`${Base}/account/login`)
 cy.get('.cc-btn').click();
 cy.get('#MainContent_Email').type(User.email)
 cy.get('#MainContent_Password').type(User.password)
 cy.get('#MainContent_LoginButton').click()

 if(cy.get('#MainContent_createInbox').should('not.exist')){
  cy.get("a[href='/account/dashboard']").should("be.visible")
 }

else{
  cy.get('#MainContent_createInbox').should('be.visible').click()
 }

  cy.get('#settings').should("be.visible")
  cy.get('#MainContent_listOfInboxes_emailPanel_0 > .alert > .fa-cog').click()

 cy.get('#MainContent_InboxName').clear().type(value);
 cy.get('#MainContent_createNewInbox').click();
 cy.contains ('.emailAddressOption', value).click()

})


