describe('search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"').should('exist')
  })

  it('should be able to visit search page without a search query', () => {
    // dessa forma eu estou dizendo que eu não quero fazer nada com um erro não tratado
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')
    cy.location('pathname').should('equal', '/')
  })
})
