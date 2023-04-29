const faker = require('faker-br');
const elementos = require ('../../../../support/elements/cadastroElements').ELEMENTS

var nome = faker.name.firstName();
var telefone = faker.phone.phoneNumber();
var email = faker.internet.email();

function cadastro () {


cy.get(elementos.botaoRegistrar).click()
cy.get(elementos.campoNome).type(nome)
cy.get(elementos.campoTelefone).type(telefone)
cy.get(elementos.campoEmail).type(email)
cy.get(elementos.campoSenha).type('123456')
cy.get(elementos.botaoCadastrar).click()
}


describe('teste de cadastro',()=>{

    it('teste de cadastro caminho feliz',()=>{

        cy.urlBase ();
        cadastro ();

        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Bem vindo à plataforma!')

})
});