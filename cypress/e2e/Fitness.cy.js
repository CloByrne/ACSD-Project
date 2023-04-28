describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Fitness')
  })

  it('Check title is Project Fitness', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Project Fitness')
  })

  it('Shows the Page Heading', () => {
    cy.get('.fitness-container')
      .should('be.visible')
      .within(() => {
        cy.get('h1')
          .should('contain', 'Fitness')
      })
  })

  it('Change Viewport, view Responsive Design changes ', () => {
    // https://on.cypress.io/viewport
    
    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999)
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)

  })

  it('Shows the Map', () => {
    cy.get('#map')
      .should('be.visible')
  })

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.exercise-btn').click()
  })

})