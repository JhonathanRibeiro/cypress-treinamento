import './commands'
import '@shelex/cypress-allure-plugin';

require('cypress-xpath')
require('@shelex/cypress-allure-plugin');

Cypress.on('uncaught:exception', (err, runnable, promise) => {
    if (err.message.includes('list not defined')) {
        return false
    }
    if (promise) {
        return false
    }
})