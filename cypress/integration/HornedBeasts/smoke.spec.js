import data from '../../../src/constants/data.json';

describe('Actions', () => {
  before(() => {
    cy.visit('');
  });

  it('should have correct title', () => {
    cy.title().should('eq', 'Horned Beasts');
  });

  it('should have correct number of cards', () => {
    cy.get('.card-body').should('have.length', data.length);
  });

  it('should be able to increment like count', () => {
    cy.get('.card-body').first().click();
    cy.get('[data-testid=vote-count]').first().invoke('text').then((text) => {
      expect(+text.split(' ')[1]).to.equal(1);
    });
  });

  data.forEach((item, index) => {
    it(`should have correct card content for ${item.title}`, () => {
      cy.get(`:nth-child(${index+1}) > .card-body > .card-title`).should('contain.text', `${item.title}`);
      cy.get(`:nth-child(${index+1}) > .card-body > .card-text`).should('contain.text', `${item.description}`);
    });
  });

  it('should have correct footer', () => {
    cy.get('footer').should('contain.text', 'Tom McGuire');
  });
});
