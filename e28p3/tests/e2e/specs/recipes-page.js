// https://docs.cypress.io/api/introduction/api.html

describe('Recipes Page', () => {

    // Define a recipe we can use throughout our tests
    let recipe = {
        name: 'Vanilla Scones',
        id: 1
    }

    it('shows all the recipes', () => {

        cy.visit('/')
        cy.contains('h2', 'Recipes')

        // Confirm we see at least 2 recipe (that's how many recipe seeds we have)
        cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 2)

        // Confirm we see a our test reicpe
        cy.contains('[data-test="recipe-name"]', recipe.name)

        // Confirm we can click on a recipe and get to its individual page
        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();

        // Confirm the test recipe page loads
        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.url().should('include', recipe.id)

    })

    it('shows the correct recipe images', () => {

        cy.visit('/')

        cy.get('[data-test=recipe-image-' + recipe.id + ']')
            .should('have.attr', 'src')
            .should('include', recipe.id)
    })

})