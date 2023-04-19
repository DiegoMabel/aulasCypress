const bb = require ('../../../support/elements/elementosBugBank/elements').ELEMENTS
function cadastro( email, nome , senha , confirmarSenha ){
    cy.get(bb.registrar).click()
    cy.get(bb.email).type(email, {force:true})
    cy.get(bb.nome).type(nome, {force:true})
    cy.get(bb.senha).type(senha, {force:true})
    cy.get(bb.confirmarSenha).type(confirmarSenha, {force:true})
    cy.get(bb.botaoSaldo).click({force:true})
    cy.get(bb.cadastrar).click({force:true})
}


describe('Teste na tela cadastro', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    });

    it('teste de email com formto invalido', () => {
        cadastro('email12.com', 'diego', '123', '123');
        cy.contains ('Formato inválido') .should('have.text','Formato inválido')
    });
    it('teste de cadastro com sucesso', () => {
        cadastro('email@12.com', 'diego', '123', '123');
        cy.get(bb.validacaoDaContaCriada).invoke('text').then((text)=>{
            const numeroConta = text.match(/\d+-\d+/)[0];
            cy.get(bb.fechar).click()
            cy.get(bb.emailLogin).type('email@12.com')
            cy.get(bb.senhaLogin).type('123')
            cy.get(bb.acessar).click()
            cy.contains(numeroConta).should('be.visible')
            });
    });
    it ('teste de campo nome vazio', () => {
        cadastro('email@12.com', '{insert}', '123', '123');
        cy.contains ('Nome não pode ser vazio.') .should('have.text','Nome não pode ser vazio.\n')
    });
    it ('teste de campo senha vazio', () => {
        cadastro('email@12.com', 'diego', '{insert}', '123');
        cy.contains ('É campo obrigatório') .should('have.text','É campo obrigatório')
    });
    it ('teste de campo confirmar senha vazio', () => {
        cadastro('email@12.com', 'diego', '123', '{insert}');
        cy.contains ('É campo obrigatório') .should('have.text','É campo obrigatório')
    });
    it ('teste de senhas diferentes', () => {
        cadastro('email@12.com', 'diego', '123', '124');
        cy.contains ('As senhas não são iguais.') .should('have.text','As senhas não são iguais.\n')
    });
    
});