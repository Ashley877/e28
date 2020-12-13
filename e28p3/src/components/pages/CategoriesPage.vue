<template>
    <div class='category'>
        <h2>Categories</h2>
        <ul class='cleanList'>
            <li data-test="category-name" v-for='(category, id) in categories' :key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script >

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