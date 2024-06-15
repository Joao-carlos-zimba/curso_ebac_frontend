/// <reference types="cypress" />

describe("Testes para a página de candidatura", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve incluir um contato na agenda', () => {
        cy.get('[type="text"]').type('João Carlos Borges')
        cy.get('[type="email"]').type('teste@hotmail.com')
        cy.get('[type="tel"]').type('(48) 991268854')
        cy.get('.adicionar').click()
    })
})
