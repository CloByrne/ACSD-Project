describe('Navbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
  
    it('displays the logo image', () => {
        cy.get('.nav')
            .within(() => {
                cy.get('img')
                    .should('have.attr', 'alt', 'Project Fitness logo')
                    .and('have.attr', 'width', '150')
            })
    })
  
    it('displays the Fitness link and navigates to the correct page', () => {
        cy.get('.nav')
            .within(() => {
                cy.get('a[href="/Fitness"]')
                .should('contain', 'Fitness')
                .click()
            })
                cy.url().should('include', '/Fitness')
    })
  
    it('displays the Recipes link', () => {
        cy.get('.nav')
            .within(() => {
            cy.get('a[href="/Recipes"]')
                .should('contain', 'Recipes')
                .click()
            })
            cy.url().should('include', '/Recipes')
    })
  
    it('displays the About link', () => {
        cy.get('.nav')
            .within(() => {
            cy.get('a[href="/About"]')
                .should('contain', 'About')
                .click()
            })
            cy.url().should('include', '/About')
    })
  
    it('displays the Contact us link', () => {
        cy.get('.nav')
            .within(() => {
            cy.get('a[href="/Contact"]')
                .should('contain', 'Contact us')
                .click()
            })
            cy.url().should('include', '/Contact')
    })
})
  