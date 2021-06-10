const el = require('./commands').ELEMENTS;

export default class LoginPage {
    getLoginPage() {
        return cy.visit('/');
    }

    getCampoNomeDeAcesso(operador) {
        var iptnome = el.input_nome_de_acesso;
        cy.get(iptnome).clear();
        return cy.get(iptnome).type(operador);
    }
    getCampoSenha(senha) {
        var iptsenha = el.input_senha
        cy.get(iptsenha).clear();
        return cy.get(iptsenha).type(senha);
    }
    getBotaoAcessar() {
        return cy.get(el.ui_button_access).click();
    }

    getBotaoDropdownUnidades() {
        cy.get(el.ui_autocomplete_dropdown).click();
        var uns = '.auto-complete-select > .ui-autocomplete > .ui-inputtext';
        cy.get(uns).clear();

        cy.get(uns)
            .should('be.visible')
            .type('1034')
        return cy.get(el.primary_uns)
            .should('be.visible')
            .click({ timeout: 1000 });
    }

    getBotaoConfirmarAcesso() {
        return cy.get(el.ui_button_only_access).click();
    }

    acessar(op, pass) {
        try {
            this.getLoginPage();
            this.getCampoNomeDeAcesso(op);
            this.getCampoSenha(pass);
            this.getBotaoAcessar();
            this.getBotaoDropdownUnidades();
            this.getBotaoConfirmarAcesso();
        } catch (err) {
            cy.log(err.message);
        }
    }
}