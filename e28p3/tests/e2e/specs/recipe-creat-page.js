describe('Recipe Create Page', () => {

    // Test recipe
    let recipe = {
        name: 'My New Recipe',
        // Append a Unix timestamp to the end of the slug, ensuring it's a unique value
        ingredients: 'my-new-recipe-' + Date.now(),
        directions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pulvinar libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        category: 10,
    }

    it('adds a new recipe', () => {

        // First we have to login, because only auth'd users can add recipes
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.get('[data-test="add a recipe-link"]').click();
        cy.get('[data-test=recipe-name-input]').clear().type(recipe.name);
        cy.get('[data-test=recipe-ingredients-input]').clear().type(recipe.ingredients);
        cy.get('[data-test=recipe-directions-input]').clear().type(recipe.diretions);
        cy.get('[data-test=recipe-category-input]').clear().type(recipe.category);
        cy.get('[data-test=add-recipe-button]').click();
        cy.get('[data-test="recipe-added-confirmation"]').should('exist');

        // Go to the recipes page and confirm our new recipe is visible there
        cy.get('[data-test="recipes-link"]').click();
        cy.contains(recipe.name);
    });

    it('shows error messages if new recipe data is invalid', () => {

        cy.login();

        cy.get('[data-test="add a recipe-link"]').click();

      
    });
})