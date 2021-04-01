import data from '../../../src/constants/data.json';

describe('Main', () => {
  before(() => {
    cy.visit('');
  });

  it('should have correct title', () => {
    cy.title().should('eq', 'Horned Beasts');
  });

  it('should have correct number of cards', () => {
    cy.get('.card-body').should('have.length', data.length);
  });

  // TODO: Implement like count update with out opening modal
  it.skip('should be able to increment like count', () => {
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

describe('Modal', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should open modal on click', () => {
    cy.get('.card-body').first().click();
    cy.get('.modal').should('be.visible');
    cy.get('[data-testid=modal-title]').should('contain.text', 'UniWhal');
    cy.get('[data-testid=modal-img]').should('have.attr', 'src', data[0].image_url.toString());
  });

  it('should be able to close the modal with the top button', () => {
    cy.get('.card-body').first().click();
    cy.get('.modal').should('be.visible');
    cy.get('.close').click();
    cy.get('.modal').should('not.exist');
  });

  it('should be able to close the modal with the bottom button', () => {
    cy.get('.card-body').first().click();
    cy.get('.modal').should('be.visible');
    cy.get('[data-testid=modal-footer-close]').click();
    cy.get('.modal').should('not.exist');
  });
});

describe('Audits', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should pass lighthouse audit (desktop)', () => {
    cy.lighthouse(
      {
        accessibility: 100,
        'best-practices': 87
      },
      {
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,
          disabled: false,
        },
      }
    );
  });

  it('should pass lighthouse audit (mobile)', () => {
    cy.lighthouse(
      {
        accessibility: 100,
        'best-practices': 87
      }
    );
  });

  it.skip('should pa11y audit', () => {
    cy.pa11y();
  });
});
