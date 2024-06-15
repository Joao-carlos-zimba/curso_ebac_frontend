/// <reference types="cypress" />

describe("Testes para a página de candidatura", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve deletar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})
