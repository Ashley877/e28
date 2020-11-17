<template>
    <div>
        <h2>Shopping List</h2>
        <ul class='cleanList'>
            <li v-for='(ingredient, id) in ingredients' :key='id'>{{ ingredient }}</li>
        </ul>
    </div>
</template>

<script >
export default {
    name: '',
    props: ['recipes'],
    data: function(){
        return{
        };
    } ,
    computed:{
        ingredients() {
            let ingredients = this.recipes.map(recipe => recipe.ingredients.split(','));
            let mergedIngredients = [].concat.apply([], ingredients);

            // Return unique, sorted categories
            return [...new Set(mergedIngredients)].sort();
        },
    },  
};
</script>

<style scoped>
</style>