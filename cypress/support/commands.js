import LoginPage from "./views/Logon";

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

before(() => {
    var login = new LoginPage();

    cy.fixture('loginUsuarioAdmin').then((user) => {
        login.acessar(user.username, user.password);
    });
})

beforeEach(() => {
    cy.restoreLocalStorage();
});

afterEach(() => {
    cy.saveLocalStorage();
});