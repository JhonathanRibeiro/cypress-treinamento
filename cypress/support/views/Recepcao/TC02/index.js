const el = require('./commands').ELEMENTS;

class Recepcao {
     listagemDeRegistros() {
        //expande o menu UPA
        cy.xpath(el.menuUpa).click();
            //clica no submenu Recepção e acessa a tela inicial
        cy.xpath(el.submenu_recepcao).click();
    }

    incluirNovoRegistro() {
        //clica no botao - novo registro
        cy.xpath(el.btnNovoRegistro).click({ timeout: 1000 });
        cy.xpath(el.btnNovoUsuario)
        .first()
        .click({force:true})
        .click({force:true});
    }

    cadastraNovoUsuario() {
        //valida o cabeçalho e o card dados do usuário
        cy.fixture('dadosUsuarioFeminino').then((data) => {
            cy.xpath(el.cpf).type(data.cpf);
            cy.xpath(el.cns).type(data.cns);
            cy.xpath(el.nomeCompleto).type(data.nome);
            cy.xpath(el.sexo).type(data.sexo);
            cy.xpath(el.dataNascimento).type(data.data_nasc);
            
            cy.xpath(el.btnsalvar).click();
        })
    }

}

export default new Recepcao();
