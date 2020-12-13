describe('Shopping Page', () => {

    // Test recipe
    let recipe = {
        name: 'Vannilla Scones',
        ingredients: '2½ cups all-purpose flour, ½ teaspoon salt, 1 tablespoon baking powder, ⅓ cup granulated sugar, 1 egg, ½ cup milk, 1 tablespoons pure vanilla extract (I used vanilla bean paste), ¾ cup cold unsalted butter cubed, 1½ cups confectioners sugar, 2 tablespoons water (may need more), 2 tablespoons unsalted butter melted, 2 teaspoons pure vanilla extract (I used vanilla bean paste)',
        id: 1
    }
    let user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('adds and removes from cart', () => {
        cy.visit('/account');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);
        // Add to cart from recipe page
        cy.visit('/recipes/' + recipe.id);
        cy.get('[data-test="add-to-shopping-button"]').click();

        // Confirm cart shows recipe
        cy.visit('/shopping');
        cy.contains('[data-test="cart-contents"]', recipe.ingredients);

        // Remove from cart 
        cy.get('[data-test="remove-from-cart-button"]').click();
        cy.contains('No items');
    })
})