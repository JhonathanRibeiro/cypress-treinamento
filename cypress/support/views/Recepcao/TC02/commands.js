export const ELEMENTS = {
    menuUpa: '//ul//li//span[starts-with(text(), "UPA")]',
    submenu_recepcao: '//li//a//span[starts-with(text(), "Recepção")]',
    btnNovoUsuario: '//div//button//span[starts-with(text(), "Novo usuário")]',
    btnNovoRegistro: '//div//button[@title="Incluir novo"]',

    btnUsuarioNaoIdentificado: '//button//span[contains(text(), "Novo usuário não identificado")]',
    //Identificação
    cpf: '//div//input[@formcontrolname="cpf"]',
    cns: '//div//input[@formcontrolname="cns"]',
    nomeCompleto: '//div//input[@formcontrolname="nome"]',
    sexo: '//f17-select-tab[@rotulo="Sexo"]//input',
    dataNascimento: '',
    nomeMae: '',
    nomePai: '',
    //Endereço
    logradouro:'',
    numero:'',
    bairroDestrito:''
}