describe('Recipe Create Page', () => {

    // Test recipe
    let recipe = {
        name: 'pizza',
        ingredients: '1 crust, 1 sauce, 2 cheese' ,
        directions: 'mix and bake',
        category: 'dinner',
    }
    let user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('adds a new recipe', () => {

        // First we have to login, because only auth'd users can add recipes
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.visit('/account');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);
        cy.visit('/recipe/new')
        cy.get('[data-test=recipe-name-input]').clear().type(recipe.name);
        cy.get('[data-test=recipe-name-ingredients]').clear().type(recipe.ingredients);
        cy.get('[data-test=recipe-name-directions]').clear().type(recipe.directions);
        cy.get('[data-test=recipe-name-category]').clear().type(recipe.category);
        cy.get('[data-test=add-recipe-button]').click();
        cy.get('[data-test="recipe-added-confirmation"]').should('exist');

    });

  
})