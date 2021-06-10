const el = require('./elements').ELEMENTS;

export const cardNovoRegistro = () => {
    //verifica se o nome da rota(tela) é Usuários
    cy.xpath(el.tituloRota)
        .invoke('text').then((value) => {
            expect(value.trim()).to.eq('Usuários');
        });
}