describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/About')
  })

  it('Shows the Page Heading', () => {
    cy.get('.about-text')
      .should('be.visible')
      .within(() => {
        cy.get('h1')
          .should('contain', 'About Us')
      })
  })

  it('Shows the Blurb Text', () => {
    cy.get('.blurb')
      .should('be.visible')
      .within(() => {
        cy.get('p')
          .should('contain', 'Founded in 2009 by Mary Fitniss, our gym is dedicated to helping casual gym-goers achieve their fitness goals in a relaxed and welcoming environment')
      })
  })

  it('Title is Project Fitness', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Project Fitness')
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
})