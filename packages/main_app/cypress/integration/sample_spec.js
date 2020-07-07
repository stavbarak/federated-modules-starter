describe('Testable button', () => {
  it('should have a button in page 1', () => {
    cy.visit('http://localhost:9000/page1')
    cy.get('button')
  })
})