export default class Cart {

    /**
     * 
     */
    constructor() {
        // Extract JSON cart string from local storage
        let cart = localStorage.getItem('cart');

        // Parse JSON cart String to `items` object
        this.items = (cart) ? JSON.parse(cart) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the cart
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates cart in localstorage
     */
    update() {
        localStorage.setItem('cart', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given id
     */
    add(id, quantity = 1) {

        // First see if recipe is already present
        let item = this.getItem(id)

        if (item) {
            // recipe is in cart already; increment quantity by 1
            item.quantity += quantity;

        } else {
            // recipe not in cart, add as new item
            this.items.push({
                id: id,
                quantity: quantity
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via id
     */
    remove(id) {
        let item = this.getItem(id);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via id
     * Returns null if recipe does not exist in items
     */
    getItem(recipeId) {
        return this.items.find(({ id }) => id === recipeId) || null;
    }
}