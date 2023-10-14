describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the header text', () => {
    cy.get('h1')
    .contains('Team Auction');
  })
  it('renders the Logo image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
