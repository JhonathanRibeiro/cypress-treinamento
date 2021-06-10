/// <reference types="cypress-xpath" />
const el = require('./commands').ELEMENTS;

class Triagem {
    acessaTriagem() {
        //expande o menu UPA
        cy.xpath(el.menuUPA).click({ force: true });
        //clica no submenu triagem
        cy.xpath(el.submenuTriagem)
            // .should('be.visible')
            .click({ force: true });
    }

    triandoUsuario() {
        //botao editar - inicia a triagem do usuário
        cy.xpath(el.tituloRota).should('be.visible')

        cy.xpath(el.btnAcessaTriagem)
            .first()
            .click({ force: true });
        //botao iniciar triagem
        cy.xpath(el.btnIniciaTriagem).click({ force: true });
        //avaliação de dor - ausência de dor
        cy.xpath(el.ausencia_de_dor).click();
        //escala de glasglow - abertura ocular - espontânea
        cy.xpath(el.abertura_ocular_espontanea).click({ force: true });
        //escala de glasglow - reposta verbal - confusa
        cy.xpath(el.reposta_verbal_confusa).click({ force: true });
        //escala de glasglow - melhor resposta motora - extensao
        cy.xpath(el.reposta_motora_extensao).click({ force: true });
        //desfecho da triagem - avaliacao medica
        cy.xpath(el.desfecho_avaliacao_medica).click({ force: true });
        //botao finalizar atendimento
        cy.xpath(el.btn_finalizar_atendimento).click();
    }
}
export default new Triagem();