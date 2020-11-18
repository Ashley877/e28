<template>
    <div id="recipe-page">
        <div v-if="recipe">
            <show-recipe
                :recipe="recipe"
                :includeDetails="true"
            ></show-recipe>
            <input type="checkbox" id="favorite" v-model="recipe.favorite"/>{{ recipe.favortie }}
            <button true-value="1" false-value="0" @click="addFavorite">Add/Remove Favorite</button>
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
import { axios } from '@/app.js'
export default {
    name: '',
    props:['id','recipes', 'favorite'],
    components: {
        'show-recipe': ShowRecipe,
    },
    data: function () {
        return{
        };
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
        ingredients() {
            let ingredients = this.recipes.map(recipe => recipe.ingredients.split(','));
            let mergedIngredients = [].concat.apply([], ingredients);

            // Return unique, sorted categories
            return [...new Set(mergedIngredients)].sort();
        },
    },
    methods:{
        addFavorite() {
            axios.put('/recipe/'+this.recipe.id, this.recipe).then((response) => {
                if (response.data.errors != null) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-recipes')
                }
            });
        },
        
    },
    
};
</script>

<style scoped>
</style>