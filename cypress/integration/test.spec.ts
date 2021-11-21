describe('My First Test Component', () => {
  it('Visits the initial project page', () => {
    const count = 2;
    cy.visit('/');
    cy.get('button').first().click();
    cy.get('button').first().click();
    cy.get('#count').first().contains('2');

  })
});
