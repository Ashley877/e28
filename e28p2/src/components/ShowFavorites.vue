<template>
    <div id="favorites">
        <h2>Favorite Recipes</h2>
        <ul class="cleanList">
            <li v-for="recipe in favoriteRecipes" :key="recipe.id">
                {{ recipe.name }}    
                <button v-on:click="togglefav" ><i v-bind:class="[is_fav ?  'icon-heart' : 'icon-heart-empty']" aria-hidden="true"></i>unFavorite</button>

            </li>
        </ul>
    </div>
</template>


<script>
import { recipes } from '@/recipes.js';
export default {
    name: 'show-favorites',
    props: ['category'],
    data: function(){
        return {
            recipes: recipes,
        };
    },
    computed:{
        favoriteRecipes() {
            return this.recipes.filter((recipe) => {
                return recipe.categories.includes(this.category);
            }, this.category);
        },
    },   
};
</script>

<style scoped>
</style>