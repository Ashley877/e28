<template>
    <div id="recipe-page">
        <div v-if="recipe">
            <h2>Recipe {{id}} </h2>
            <show-recipe
                :recipe="recipe"
                :includeDetails="true"
            ></show-recipe>
            <button v-on:click="togglefav" ><i v-bind:class="[is_fav ?  'icon-heart' : 'icon-heart-empty', 'fa']" aria-hidden="true"></i></button>

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
//import { axios } from '@/app.js'
//import { recipes } from '@/recipes.js';
export default {
    name: '',
    props:['id','recipes'],
    components: {
        'show-recipe': ShowRecipe,
    },
    data: function () {
        return{
          //recipe: null,
          //recipes: [],
          //recipeNotFound:false,
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
        }
    },

    methods:{
      togglefav:function(){
        this.$emit('togglefav',!this.is_fav);
      },
    },
    
};
</script>

<style scoped>
</style>