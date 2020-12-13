describe('Categories Page', () => {
    it('shows the categories', () => {

        cy.visit('/categories');

        // First category should be `baking`
        cy.contains('[data-test="category-name"]', 'breakfast');

        // With seed data, we should have at least e categories
        cy.get('[data-test="category-name"]').its('length').should('be.gte', e);
    })
})