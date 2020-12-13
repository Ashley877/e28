describe('Categories Page', () => {
    it('shows the categories', () => {

        cy.visit('/categories');


        // With seed data, we should have at least 2 categories
        cy.get('[data-test="category-name"]').its('length').should('be.gte', 2);
    })
})