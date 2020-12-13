describe('Recipe Page', () => {

    // Test recipe
    let recipe = {
        name: 'Vanilla Scones',
        id: 1
    }

    it('shows a recipe', () => {
        cy.visit('/recipes/' + recipe.id);
        cy.contains('[data-test="recipe-name"]', recipe.name);
    })

})