// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const elementos = require('../support/elements/cadastroElements').ELEMENTS
Cypress.Commands.add('urlBase',  () => {
    cy.visit('https://jgsl-systemcalling.netlify.app')
    
    
    
})
Cypress.Commands.add('login',  (email, senha) => {
    cy.contains('Sign in').click()
    cy.get(elementos.campoEmail).type(email)
    cy.get(elementos.campoSenha).type(senha)
    cy.contains('Log In').click()
    
    
})