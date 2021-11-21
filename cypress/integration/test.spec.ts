describe('My First Test Component', () => {
  it('Visits the initial project page',  () => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4200/assets/some.json',
    }).as('apiCheck');

    cy.visit('/');

    cy.wait('@apiCheck')
      .get('#data')
      .first()
      .should('exist')
      .contains('some text')
  });

  it('Visits the click project page', () => {
    const count = 2;
    cy.visit('/');
    cy.get('button').first().click();
    cy.get('button').first().click();
    cy.get('#count').first().contains(count.toString());

  });
});
