export const ELEMENTS = {
    menuUPA: '//ul//li//span[starts-with(text(), "UPA")]',
    submenuTriagem: '//li//a//span[starts-with(text(), "Triagem")]',

    btnAcessaTriagem: '//*//div//div//app-painel-acao[@acao="EDITAR"]//div//button[@title="Editar"]',
    btnIniciaTriagem: '//*[@id="ui-panel-11-content"]/div/div/div/p-splitbutton/div/button[1]',
    ausencia_de_dor: '//*[@id="ui-panel-14-content"]/div/div/div/f17-input-container/div/div/app-avaliacao-dor[1]/div/div[2]/div',
    abertura_ocular_espontanea: '//*//div//div//p-radiobutton[@formcontrolname="escalaGlasgowAberturaOcular"]//div//div//input[@value="ESPONTANEA"]',
    reposta_verbal_confusa: '//*//div//div//p-radiobutton[@formcontrolname="escalaGlasgowRespostaVerbal"]//div//div//input[@value="CONFUSA"]',
    reposta_motora_extensao: '//*//div//div//p-radiobutton[@formcontrolname="respostaMotora"]//div//div//input[@value="EXTENSAO"]',
    desfecho_avaliacao_medica: '//*//div//div//p-radiobutton[@formcontrolname="desfecho"]//div//div//input[@value="AVALIACAO_MEDICA"]',
    btn_finalizar_atendimento: '//*//app-timer//button//div//div[@class="finalizar"]',

    tituloRota: '//*//div//div[@class="p-col action-bar-titulo"]//span[contains(text(), "Triagem")]'
}