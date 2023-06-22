const elHeader = require('./elements').ELEMENTS
const elMyAccount = require('../MyAccount/elements').ELEMENTS

class CrossPage{

    clickBtnLogin() {
        cy.wait(2500)
        cy.get(elHeader.buttonLogin)
        .should('be.visible')
        .click({force: true})
    }
    
    clickBtnLoginWithEmailPassword() {
        cy.wait(6000)
        cy.get(elHeader.buttonLoginWithEmailPassword)
          .should('exist')
          .click()
      }
    
      typeEmail(validEmail) {
        cy.get(elHeader.inputEmail)
          .should('exist')
          .type(validEmail)
      }
    
      typePassword(validPassword) {
        cy.get(elHeader.inputPassword)
          .should('exist')
          .type(validPassword)
      }
    
      clickBtnEnter() {
        cy.get(elHeader.btnEnter)
          .should('be.visible')
          .click({ force: true })
        cy.wait(2500)
      }
    
      validateMsgLogin(msg) {
        cy.get(elHeader.labelMsgInvalidLogin)
          .should('be.visible')
          .and('have.text', msg)
      }
    
      validateUserLogged(status, cookieAuth) {
        switch (status) {
          case 'logged':
            cy.get(elHeader.buttonLoggedUser).should('be.visible')
            cy.getCookie(cookieAuth).should('exist')
            break
          case 'not logged':
            cy.getCookie(cookieAuth).should('not.exist')
        }
      }
    
      clickBtnLoggedUser() {
        cy.wait(6000)
          cy.get(elHeader.buttonLoggedUser)
          .first()
          .should('be.visible')
          .click()
      }
    
      clickBtnLogoff() {
        cy.wait(5000)
        cy.get(elHeader.buttonLogoff)
          .should('be.visible')
          .click()
      }
    
}

export default new CrossPage()