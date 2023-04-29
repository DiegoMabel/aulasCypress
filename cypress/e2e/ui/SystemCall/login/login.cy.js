const elementos = require ('../../../../support/elements/cadastroElements').ELEMENTS
import usuariosValidos from '../../../../fixtures/usuariosValidos.json'

describe('teste de login',()=>{
    it('teste de login valido',()=>{
    cy.urlBase();
    cy.login(usuariosValidos.email,usuariosValidos.senha);
    cy.contains('Bem vindo de volta').should('have.text','Bem vindo de volta!')
    });
    it('teste de login invalido',()=>{
        cy.urlBase();
        cy.login('hfhfhfhf@hfhf.com',usuariosValidos.senha);
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Ops, algo deu errado!')
        });

})