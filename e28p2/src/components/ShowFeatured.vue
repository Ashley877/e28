<!-- src/components/ShowFeatured.vue -->
<template>
    <div id="featured">
        <h2>Featured Recipes</h2>
        <ul class="cleanList">
            <li v-for="recipe in featuredRecipes" :key="recipe.id">
                {{ recipe.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { recipes } from '@/recipes.js'
export default {
    name: 'show-featured',
    props: ['category'],
    data: function() {
        return { 
            recipes: recipes,
        };
    },
    computed: {
       featuredRecipes() {
            return this.recipes.filter((recipe) => {
                return recipe.categories.includes(this.category);
            }, this.category);
},
    }
     
};
</script>

<style scoped>
</style>