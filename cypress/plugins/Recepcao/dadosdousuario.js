const el = require('./elements').ELEMENTS;

export const cardNovoRegistro = () => {
    try {
        //verifica se o nome da rota(tela) é Recepção
        cy.get('f17-form-crud > .action-bar > .p-grid > .action-bar-titulo > .titulo-rota')
            .invoke('text').then((value) => {
                expect(value.trim()).to.eq('Recepção');
            });
        //verifica se o título do painel é Dados do usuário
        cy.get('.ui-panel-title').invoke('text').then((value) => {
            expect(value.trim()).to.eq('Dados do usuário');
        });
        //verifica se o título do select é Pesquise um usuário
        cy.get(':nth-child(1) > f17-select-tab.ng-untouched > f17-rotulo.ng-star-inserted > .rotulo').invoke('text').then((value) => {
            expect(value.trim()).to.eq('Pesquise um usuário');
        });
        //verifica se o nome do botao e Novo usuário não identificado
        cy.get('.nao-identificado > .ui-button-text').invoke('text').then((value) => {
            expect(value.trim()).to.eq('Novo usuário não identificado');
        });
        //verifica se a label do input é Descrição
        cy.xpath(el.input_descricao).invoke('text').then((value) => {
            expect(value.trim()).to.eq('Descrição');
        });
        //verifica se a label do input é igual a Sexo
        cy.xpath(el.input_sexo).invoke('text').then((value) => {
            expect(value.trim()).to.eq('Sexo');
        });
        //verifica se a label do input é igual a Idade aparente
        cy.xpath(el.input_idade).invoke('text').then((value) => {
            expect(value.trim()).to.eq('Idade aparente');
        });
        //verifica se a label do input é igual a Cor do cabelo
        cy.xpath(el.input_cordocabelo).invoke('text').then((value) => {
            expect(value.trim()).to.eq('Cor do cabelo');
        });
        //verifica se a label do input é igual a Cor dos olhos
        cy.xpath(el.input_cordosolhos).invoke('text').then((value) => {
            expect(value.trim()).to.eq('Cor dos olhos');
        });

    } catch (err) {
        cy.log(err.message);
        console.error(err.message);
    }
}