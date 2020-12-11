<template>
    <div>
        <h2>Categories</h2>
        <ul class='cleanList'>
            <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script >
//import { recipes } from '@/recipes.js';
//import { axios } from '@/app.js';
export default {
    name: '',
    props: ['recipes'],
    data: function(){
        return{
            //recipes: recipes,
        };
    } ,
    computed:{
        categories() {
            let categories = this.recipes.map(recipe => recipe.categories.split(','));
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
    },  
};
</script>

<style scoped>
</style>