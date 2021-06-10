/// <reference types="cypress" />
import Recepcao from '../../../support/views/Recepcao/TC02';
import LoginPage from "../../../support/views/Logon";

describe.skip('Recepção - usuário registrado no sistema', () => {
    it('Deve realizar o login acessar a tela de recepção - novo registro', () => {
        Recepcao.listagemDeRegistros();
        Recepcao.incluirNovoRegistro();
    });

    it('Deve registrar um novo usuário por meio do cadastro simplificado', () => {
        Recepcao.cadastraNovoUsuario();
    });
});