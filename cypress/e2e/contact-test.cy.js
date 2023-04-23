describe('Contact form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/contact');
    });
  
    it('handles form submission success', () => {
      cy.intercept('POST', 'http://localhost:5000/api/contact', (req) => {
        req.reply({
          statusCode: 200,
          body: 'success',
        });
      });
      
      cy.get('#name').type('John Doe');
      cy.get('#email').type('johndoe@example.com');
      cy.get('#message').type('This is a test message');
      cy.get('.submit-button').click();
  
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Your message was sent successfully!');
      });
  
      cy.url().should('eq', 'http://localhost:3000/contact');
    });
  
    it('handles form submission error', () => {
      cy.intercept('POST', 'http://localhost:5000/api/contact', (req) => {
        req.reply({
          statusCode: 500,
          body: 'error',
        });
      });
      
      cy.get('#name').type('John Doe');
      cy.get('#email').type('johndoe@example.com');
      cy.get('#message').type('This is a test message');
      cy.get('.submit-button').click();
  
      cy.on('window:alert', (str) => {
        expect(str).to.equal(undefined);
      });
  
      cy.url().should('eq', 'http://localhost:3000/contact');
    });
  });
  