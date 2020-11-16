<template>
    <div id="recipes">
        <h2>Recipes</h2>
        <router-link
            v-for="recipe in recipes"
            :key="recipe.id"
            :to="'/recipes/'+ recipe.id" 
            exact
        >
            <show-recipe :recipe="recipe"></show-recipe>
        </router-link>
    </div>
</template>


<script >
import ShowRecipe from '@/components/ShowRecipe.vue';
//import { axios } from '@/app.js';
export default {
    name: '',
    components:{
        'show-recipe' : ShowRecipe,
    },
    props: ['recipes'],
    data: function () {
        return{
        };
    },
    //mounted() {
     //   axios.get('recipe').then((response) => {
    //        this.recipes = response.data.recipe;
    //        console.log(response.data);
    //    });  
    //}, 
};
</script>

<style scoped>
</style>