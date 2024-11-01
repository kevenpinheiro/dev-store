describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"').first().click()

    cy.location('pathname').should('includes', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicate products on cart', () => {
    cy.get('a[href^="/product"').first().click()

    cy.location('pathname').should('includes', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"').first().click()
    cy.location('pathname').should('includes', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
