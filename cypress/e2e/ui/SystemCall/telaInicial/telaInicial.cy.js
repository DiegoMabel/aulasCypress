const elementos = require ('../../../../support/elements/cadastroElements').ELEMENTS
import usuariosValidos from '../../../../fixtures/usuariosValidos.json'
const faker=require ('faker-br')
var usuario =faker.internet.userName();
var cpf =faker.br.cpf();
var endereco=faker.address.streetName();
var usuarioCadastrado=('//*[@data-label="Nome" and contains(text(), "'+usuario+'")]')
function cadastroDeClientes(user,cp,adress){
    cy.get(elementos.clientes).click()
    cy.get(elementos.nomeCliente).type(user)
    cy.get(elementos.cpfCliente).type(cp)
    cy.get(elementos.enderecoCliente).type(adress)
    cy.get(elementos.botaoCadastrarCliente).click()
    cy.wait(5000)
    cy.get(elementos.botaoVerClientes).click()

}

describe('teste de login',()=>{
    beforeEach(()=>{
    cy.urlBase();
    cy.login(usuariosValidos.email,usuariosValidos.senha);
    })
    it('teste de login valido',()=>{
  cadastroDeClientes(usuario,cpf,endereco);
    cy.xpath (usuarioCadastrado).should('have.text',usuario)

    });
    

})