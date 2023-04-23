describe('Recipes page', () => {
  it('displays the health and recipe containers', () => {
    cy.visit('http://localhost:3000/recipes');
    cy.get('.health-container').should('be.visible');
    cy.get('.recipe-container').should('be.visible');
  });

  it('displays the welcome message', () => {
    cy.visit('http://localhost:3000/recipes');
    cy.get('.health-text h1').should('have.text', 'Welcome to the Recipes page');
  });

  it('allows searching for recipes', () => {
    cy.visit('http://localhost:3000/recipes');
    cy.get('.recipe-search-input input').type('chicken');
    cy.get('.recipe-search-input button').click();
    cy.get('.recipe-search-results').should('be.visible');
    cy.get('.recipe-search-results li').should('have.length.gt', 0);
  });

  it('allows selecting a recipe', () => {
    cy.visit('http://localhost:3000/recipes');
    cy.get('.recipe-search-input input').type('chicken');
    cy.get('.recipe-search-input button').click();
    cy.get('.recipe-search-results li:first-child .recipe-search-result-header').click();
    cy.get('.recipe-search-results li:first-child .recipe-search-result-body').should('be.visible');
  });

  it('displays the recipe details', () => {
    cy.visit('http://localhost:3000/recipes');
    cy.get('.recipe-search-input input').type('chicken');
    cy.get('.recipe-search-input button').click();
    cy.get('.recipe-search-results li:first-child .recipe-search-result-header').click();
    cy.get('.recipe-search-results li:first-child .recipe-search-result-body p:first-child a').should('have.attr', 'target', '_blank');
    cy.get('.recipe-search-results li:first-child .recipe-search-result-body h4').should('have.text', 'Ingredients');
    cy.get('.recipe-search-results li:first-child .recipe-search-result-body ul li').should('have.length.gt', 0);
    cy.get('.recipe-search-results li:first-child .recipe-search-result-body p:last-child strong').should('have.text', 'Cautions:');
  });
});
