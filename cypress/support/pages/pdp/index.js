const elPdpPage = require('./elements').ELEMENTS

class PdpPage {
  urlPDP(productLink, siteTitle) {
    cy.wait(2500)
    cy.visit(productLink)
    cy.title().should('contain', siteTitle)
  }

  validatePrice() {
    cy.wait(5000)
    cy.get(elPdpPage.labelProductPrice).first().should('be.visible')
  }

  validateImgPdpMainProductImage() {
    cy.get(elPdpPage.imageSourceProduct).should('be.visible')
  }

}
export default new PdpPage()
