<template>
    <div id="favorite">
        <router-link
            v-for="recipe in recipes"
            :key="recipe.id"
            :to="'/recipes/'+ recipe.id" 
            exact
        >
            <show-recipe :recipe="recipe"></show-recipe>
        </router-link>
        <ul class="cleanList">
            <li v-for="recipe in favoriterecipes" :key="recipe.id">
                {{ recipe.favorite }} 
            
            </li>
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