import { cardNovoRegistro } from '../../../../plugins/Recepcao/dadosdousuario';

const el = require('./commands').ELEMENTS;

class Recepcao {
    listagemDeRegistros() {
        //expande o menu UPA
        cy.xpath(el.menuUpa).click()
        //clica no submenu Recepção e acessa a tela inicial
        cy.xpath(el.submenu_recepcao).click();
    }

    incluirNovoRegistro() {
        //clica no botao - novo registro
        cy.xpath(el.btnNovoRegistro).click({ timeout: 1000 });
        //clica no botao - Novo usuário não identificado
        cy.xpath(el.btnUsuarioNaoIdentificado).click();
    }

    cadastroDadosDoUsuario() {
        //valida o cabeçalho e o card dados do usuário
        cy.fixture('dadosUsuarioFeminino').then((data) => {
            cy.xpath(el.input_descricao).type(data.nome);

            cy.xpath(el.input_sexo)
                .click({ timeout: 1000 });

            cy.xpath(el.select_sexo_option)
                .contains(data.sexo)
                .should('be.visible')
                .click({ timeout: 3000 });

            cy.xpath(el.input_idade).type(data.idade);
            cy.xpath(el.input_cordocabelo).click();
            cy.xpath(el.select_cabelocastanho).click();
            cy.xpath(el.input_cordosolhos).click();

            cy.xpath(el.select_olhosazuis).click();
            cy.xpath(el.input_racaoucor).click();
            cy.xpath(el.select_racaparda).click();
            (async function () {
                await cardNovoRegistro();
            })();
            cy.xpath(el.btnsalvar).click();
        })
    }

    cadastroDadosDoAtendimento() {
        //seleciona o setor de atendimento
        cy.xpath(el.input_setoratendimento).click();
        cy.get(el.select_setoratendimento)
            .should('be.visible')
            .click({ timeout: 1000 });

        cy.xpath(el.btnsalvaratendimento).click({ force: true });
        //retorna para a listagem de registros
        cy.xpath(el.listaDeRegistros).click();
        cy.get('.titulo-rota')
        // .contains('Recepção')
        // .should('be.visible').then(() => {
        //     location.reload();
        // })
    }

    cancelaRecepcao() {
        cy.get('.ui-table-tbody')
            .find('tr')
            .its('length')
            .then($el => {
                for (let i = $el; i > 2; i--) {
                    cy.log(`Contagem em: ${i}`)
                    //btn tres pontos
                    cy.get(':nth-child(1) > :nth-child(8) > .row-end > app-menu-acao > :nth-child(1) > :nth-child(2) > .ui-button > .ui-button-icon-left')
                        .click();
                    //opção cancelar
                    cy.get(':nth-child(2) > .ui-menuitem-link > .ui-menuitem-text').click();
                    //expande menu motivo cancelamento
                    cy.get('.ng-invalid > .select-tab > .autocomplete-container > .auto-complete-select > .ui-autocomplete > .ui-autocomplete-dropdown').click();
                    //seleciona o primeiro motivo de cancelamento
                    cy.get('#p-highlighted-option > :nth-child(1) > .ng-star-inserted')
                        .should('be.visible').click()
                    //grava o cancelamento
                    cy.get('.ui-button-text-icon-left > .ui-button-text').should('be.visible').click();
                }
            });
    }
}

export default new Recepcao();