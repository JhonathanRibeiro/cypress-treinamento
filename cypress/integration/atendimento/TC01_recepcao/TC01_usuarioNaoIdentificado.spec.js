/// <reference types="cypress" />
import Recepcao from '../../../support/views/Recepcao/TC01';
import LoginPage from "../../../support/views/Logon";

describe('Recepção - usuário não identificado', () => {
    it('Deve repecionar usuário por meio do registro de usuário não identificado', () => {
        // let login = new LoginPage();

        // cy.fixture('loginUsuarioAdmin').then((user) => {
        //     login.acessar(user.username, user.password);
        // });

        Recepcao.listagemDeRegistros();
        Recepcao.incluirNovoRegistro();
        Recepcao.cadastroDadosDoUsuario();
        Recepcao.cadastroDadosDoAtendimento();
        Recepcao.cancelaRecepcao();
    });
});