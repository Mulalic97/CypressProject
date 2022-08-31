import {userLogIn} from "../support/commands";
const path = require("path");
it('User Downloads Billing PDF', () => {

  userLogIn()
  cy.get('#settings').click()
  cy.get('[data-testid="billingHistoryLeftBarLnk"]').click()
  cy.get('#ctl00_MainContent_GridBilling_ctl00_ctl04_downloadLnk').trigger(('click'))

  const downloadsFolder = Cypress.config("downloadsFolder");
  cy.readFile(path.join(downloadsFolder, "Invoice-FCDE3928-0001.pdf"),{timeout:5000}).should("exist")

})

