const el = require('./commands');

class Delete {
    deletarRecepcao() {
        cy.get(':nth-child(2) > a.ng-tns-c24-37').should('exist').click();
        cy.get(':nth-child(1) > .ng-star-inserted > span.ng-tns-c24-39').click({ timeout: 1000 });
        cy.get(':nth-child(2) > :nth-child(8) > .row-end > app-menu-acao > :nth-child(1) > :nth-child(2) > .ui-button > .ui-button-icon-left').click({ timeout: 1000 });

        cy.get(':nth-child(2) > .ui-menuitem-link').click({ timeout: 1000 });

        cy.get('.ui-autocomplete-dropdown > .ui-button-icon-left').click();
        cy.get('#p-highlighted-option > :nth-child(1) > .ng-star-inserted').click();
        cy.get('.ui-button-text-icon-left > .ui-button-text').click();
    }
}

export default new Delete();