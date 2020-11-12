<!-- src/components/ShowProducts.vue -->
<template>
    <div id="recipes">
        <h2>Recipes</h2>

        <router-link
            v-for="recipe in recipes"
            :key="recipe.id"
            v-bind:to="'/recipes/' + recipe.id"
            :includeDetails="true"
            exact>
            <show-recipe :recipe="recipe"></show-recipe>
        </router-link>
    </div>
</template>

<script>

import ShowRecipe from '@/components/ShowRecipe.vue';
//import { recipes } from '@/recipes.js';
//import { axios } from '@/app.js';


export default {
    name: '',
    components:{
        'show-recipe': ShowRecipe,
    },
    props:['recipes', 'includeDetails'],
    data: function() {
        return {};
    },

};
</script>

<style scoped>
</style>