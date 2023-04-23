describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays the welcome message', () => {
    cy.get('.home-container')
      .should('be.visible')
      .within(() => {
        cy.get('h1')
          .should('contain', 'Welcome to Project Fitness')
      })
  })

  it('displays the subtext message', () => {
    cy.get('.home-container')
      .should('be.visible')
      .within(() => {
        cy.get('.home-sub-text p')
          .should('contain', 'We offer a variety of resources and information to help you achieve your health and fitness goals')
      })
  })

  it('displays the fitness tab link', () => {
    cy.get('.home-body')
      .should('be.visible')
      .within(() => {
        cy.get('a[href="/Fitness"]')
          .should('contain', 'Fitness')
          .click({ force: true })
      })

    cy.url().should('include', '/Fitness')
    cy.get('h1').should('contain', 'Fitness')
  })

  it('displays the recipes tab link', () => {
    cy.get('.home-body')
      .should('be.visible')
      .within(() => {
        cy.get('a[href="/Recipes"]')
          .should('contain', 'Recipes')
          .click({ force: true })
      })

    cy.url().should('include', '/Recipes')
    cy.get('h1').should('contain', 'Recipes')
  })

  it('displays the contact form link', () => {
    cy.get('.home-body')
      .should('be.visible')
      .within(() => {
        cy.get('a[href="/Contact"]')
          .should('contain', 'Contact')
          .click({ force: true })
      })

    cy.url().should('include', '/Contact')
    cy.get('h1').should('contain', 'Contact')
  })

  it('displays the carousel component', () => {
    cy.get('.carousel')
      .should('be.visible')
  })
})
