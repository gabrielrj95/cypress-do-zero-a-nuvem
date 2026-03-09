describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })  

  it('Preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('Teste AA BB CC DD', 10)
    
    cy.get('#firstName').as('nome')
      .should('be.visible')
      .type('Gabriel Teste AA BB CC DD')
    cy.get('@nome').should('have.value', 'Gabriel Teste AA BB CC DD')

    cy.get('#lastName').as('sobrenome')
      .should('be.visible')
      .type('Justin')
    cy.get('@sobrenome').should('have.value', 'Justin')

    cy.get('#email')
      .first()
      .as('email')
      .should('be.visible')
      .type('gabrielrjustin95@teste.com')
    cy.get('@email').should('have.value', 'gabrielrjustin95@teste.com')

    cy.get('#open-text-area')
      .as('mensagem')
      .should('be.visible')
      .type(longText, { delay: 10 })

    cy.get('button[type="submit"]')
      .should('have.text', 'Enviar')
      .click()
    
    cy.contains('.success', 'Mensagem enviada com sucesso.')
      .should('be.visible') 
  })
  
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    const longText = Cypress._.repeat('Teste AA BB CC DD', 10)

    cy.get('#firstName').as('nome')
      .should('be.visible')
      .type('Gabriel Teste AA BB CC DD')
    cy.get('@nome').should('have.value', 'Gabriel Teste AA BB CC DD')

    cy.get('#lastName').as('sobrenome')
      .should('be.visible')
      .type('Justin')
    cy.get('@sobrenome').should('have.value', 'Justin')

    cy.get('#email')
      .first()
      .as('email')
      .should('be.visible')
      .type('gabrielrjustin95@teste,com')
    cy.get('@email').should('have.value', 'gabrielrjustin95@teste,com')

    cy.get('#open-text-area')
      .as('mensagem')
      .should('be.visible')
      .type(longText, { delay: 10 })

    cy.get('button[type="submit"]')
      .should('have.text', 'Enviar')
      .click()

    cy.contains('.error', 'Valide os campos obrigatórios!')
      .should('be.visible') 


    })

})