<template>
    <div id="favorite">
        <router-link
            v-for="recipe in recipes"
            :key="recipe.name"
            :to="'/recipes/'+ recipe.id" 
            exact
        >
            <show-recipe :recipe="recipe"></show-recipe>
        </router-link>
        <ul class="cleanList">
            <router-link
             v-for="recipe in favoriterecipes" 
             :key="recipe.name" 
             :to="'/recipes/'+ recipe.id"
             exact>
                {{ recipe.favorite }} 
            </router-link>
        </ul>   
    <div class="favorite"> 
    </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import ShowRecipe from '@/components/ShowRecipe.vue';

export default {
    name: 'show-favorite',
    props: ['recipes', 'favorite'],
    components:{
        'show-recipe': ShowRecipe
        
    },
    data: function () {
        return {
        };
    },
    methonds:{
         favoriterecipes() {
            axios.get('/recipe/query?favorite=1').then(response => {
                console.log(response.data);
            });
        }
    },  
};
</script>