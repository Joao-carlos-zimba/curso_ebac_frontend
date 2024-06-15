/// <reference types="cypress" />

describe("Testes para a página de candidatura", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve alterar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Gian Souza Batista')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('giansouza@ebac.com.br')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(11) 912345678')
        cy.get('.alterar').click()
    })
})
