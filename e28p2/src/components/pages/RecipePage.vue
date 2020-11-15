<template>
    <div id="recipes">
        <h2>Recipe {{id}} </h2>
    </div>
</template>


<script >
import { recipes } from '@/recipes.js'
export default {
    name: '',
    props:['id'],
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