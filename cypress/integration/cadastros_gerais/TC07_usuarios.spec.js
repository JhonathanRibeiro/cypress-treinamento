/// <reference types="cypress-xpath" />
import LoginPage from '../../support/views/Logon';
import cadastro from '../../support/views/Usuarios';

describe.skip('Cadastro de usuário - modo simplificado', () => {
    it('Acessa a tela de listagem de registros', () => {
        let login = new LoginPage();

        cy.fixture('loginUsuarioAdmin').then((user) => {
            login.acessar(user.username, user.password);
        });
        cadastro.paginaPesquisaDeRegistros();
    });
});