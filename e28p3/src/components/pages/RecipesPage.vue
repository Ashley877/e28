<template>
    <div id="recipes">
        <h2>Recipes</h2>
        <router-link
            v-for="recipe in recipes"
            :key="recipe.id"
            :to="'/recipes/'+ recipe.id" 
            exact>
            <show-recipe :recipe="recipe"></show-recipe>
        </router-link>
    </div>
</template>


<script >
import ShowRecipe from '@/components/ShowRecipe.vue';
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
};
</script>

<style scoped>
</style>