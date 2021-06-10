export const ELEMENTS = {
        menuUpa: '//ul//li//span[starts-with(text(), "UPA")]',
        submenu_recepcao: '//li//a//span[starts-with(text(), "Recepção")]',
        btnNovoRegistro: '//div//button[@title="Incluir novo"]',
        btnUsuarioNaoIdentificado: '//button//span[contains(text(), "Novo usuário não identificado")]',

        input_descricao: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[1]/f17-input-container/div/input',
        input_sexo: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[2]/f17-select-tab/div/div[1]/p-autocomplete/span/button',
        select_sexo_option: '//div//p-autocomplete//span//div//ul',
        input_idade: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[3]/f17-input-container/div/input',
        input_cordocabelo: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[5]/f17-input-container/div/p-dropdown/div',
        select_cabelocastanho: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[5]/f17-input-container/div/p-dropdown/div/div[5]/div/ul/p-dropdownitem[2]/li',
        input_cordosolhos: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[6]/f17-input-container/div/p-dropdown/div',
        select_olhosazuis: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[6]/f17-input-container/div/p-dropdown/div/div[5]/div/ul/p-dropdownitem[1]/li',
        input_racaoucor: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[7]/f17-select-tab/div/div[1]/p-autocomplete/span/button',
        select_racaparda: '//*[@id="ui-panel-3-content"]/div/form/div[1]/div[2]/div[7]/f17-select-tab/div/div[1]/p-autocomplete/span/div/ul/li[3]',
        btnsalvar: '//*[@id="ui-panel-3-content"]/div/form/div[2]/button[2]',

        input_setoratendimento: '//*[@id="ui-panel-5-content"]/div/div/div/form/div[1]/app-recepcao-setor/div/f17-select-tab/div/div[1]/p-autocomplete/span/button',
        select_setoratendimento: '.ui-autocomplete-items > :nth-child(1) > :nth-child(1) > .ng-star-inserted',
        btnsalvaratendimento: '/html/body/app-root/f17-aplicacao/div/div[2]/f17-container-rota/div/div[2]/app-recepcao/f17-view-stack-crud/div/div/f17-form-crud/button',
        listaDeRegistros: '/html/body/app-root/f17-aplicacao/div/div[2]/f17-container-rota/div/div[2]/app-recepcao/f17-view-stack-crud/div/div/f17-form-crud/div[2]/div[1]/div[1]/a'
    } //p-radiobutton//label[contains(.,'Espontânea')]