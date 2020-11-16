<template>
    <div id="recipe-page">
        <div v-if="recipe">
            <h2>Recipe {{id}} </h2>
            <show-recipe
                :recipe="recipe"
                :includeDetails="true"
            ></show-recipe>
        </div>
        <div v-if="recipeNotFound">
            <p> Recipe {{ id }} not found. </p>

            <router-link v-bind:to="'/'"
                >Go to all recipes
            </router-link>
        </div>
    </div>
</template>


<script >
import ShowRecipe from '@/components/ShowRecipe.vue';
import { recipes } from '@/recipes.js';
export default {
    name: '',
    props:['id'],
    components: {
        'show-recipe': ShowRecipe,
    },
    data: function () {
        return{
          recipe: null,
          recipes: recipes,
          recipeNotFound:false,
        };
    } , 
    mounted() {
        this.recipe = this.recipes.filter((recipe) => {
            return recipe.id == this.id;
        },  this.id)[0];
        if (this.recipe == null) {
            this.recipeNotFound = true;
        }

        
    } 
};
</script>

<style scoped>
</style>