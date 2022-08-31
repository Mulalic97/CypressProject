const RandExp = require('randexp');
const {userLogIn} = require("../support/commands");
const value = new RandExp(/^[0-9,A-Z]{4}$/).gen();

it('User Adds and Edits New Inbox', () => {

 userLogIn()
 cy.get('#settings').should("be.visible")
 cy.get('#MainContent_listOfInboxes_emailPanel_0 > .alert > .fa-cog').click()

 cy.get('#MainContent_InboxName').clear().type(value);
 cy.get('#MainContent_createNewInbox').click();
 cy.contains('.emailAddressOption', value).click()

})



