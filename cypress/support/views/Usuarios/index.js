/// <reference types="cypress-xpath" />

import { cardNovoRegistro } from '../../../plugins/Cadastros/pagRegistroUsuarios';

const el = require('./commands').ELEMENTS;

class CadastroDeUsuarios {
    paginaPesquisaDeRegistros() {
        //expande o menu cadastros gerais
        cy.xpath(el.menuCadastrosGerais).click();
        //clica no submenu usuarios para acessar a tela de listagem de registros de usuarios
        cy.xpath(el.submenuUsuarios).click();
        //invoca o plugin que irá verificar os dados da tela de pesquisa de registros
        cardNovoRegistro();
    }
    
    cadastroSimplificado(){
        cy.xpath(el.btnNovoRegistro).click()
    }
    
    cadastroCompleto(){

    }
}

export default new CadastroDeUsuarios();
