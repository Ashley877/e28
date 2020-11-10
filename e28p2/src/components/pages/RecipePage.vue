<template>
    <div id="recipe-page">
        <div v-if="recipe">
            <show-recipe
                :recipe="recipe"
                :includeDetails="true"
            ></show-recipe>
        </div>

        <div v-if="recipeNotFound">
            <p>Recipe {{ id }} not found.</p>

            <router-link v-bind:to="'/recipes'"
                >Go to all recipes
            </router-link>
        </div>
    </div>
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue';
//import { recipes } from '@/recipes.js';

export default {
    name: '',
    props: ['id', 'recipes'],
    components: {
        'show-recipe': ShowRecipe,
    },
    data() {
        return {};
    },
    computed: {
        recipe() {
            return this.recipes.filter((recipe) => {
                return recipe.id == this.id;
            }, this.id)[0];
        },
        recipeNotFound() {
            return this.recipe == null;
        },
    },
};
</script>
