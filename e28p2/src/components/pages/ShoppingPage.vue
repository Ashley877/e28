<template>
    <div>
        <h2>Shopping List</h2>
        
    </div>
</template>

<script>
import { recipes } from '@/recipes.js';

export default {
    name: 'shopping-page',
    
    data: function() {
        return {
            recipes: recipes,
        };
    },
    computed: {
         categories() {
            let categories = this.recipes.map(recipe => recipe.categories);
            let mergedCategories = [].concat.apply([], categories);

    // Return unique, sorted categories
    return [...new Set(mergedCategories)].sort();
}
    }
};
</script>

<style scoped>
</style>