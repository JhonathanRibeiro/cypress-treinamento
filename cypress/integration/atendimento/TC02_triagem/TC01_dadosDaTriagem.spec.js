/// <reference types="cypress-xpath" />
import LoginPage from "../../../support/views/Logon";
import Triagem from "../../../support/views/Triagem/TC01";

describe('Triagem - usuário não identificado', () => {
    it('Deve realizar a triagem do usuário', () => {
        // let login = new LoginPage();

        // cy.fixture('loginUsuarioAdmin').then((user) => {
        //     login.acessar(user.username, user.password);
        // });

        Triagem.acessaTriagem();
        Triagem.triandoUsuario();
    });
});