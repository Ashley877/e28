<template>
    <div class="recipe">
        <div class="recipe-name">{{ recipe.name }}</div>
        <img
            class="recipe-thumb"
            :src="require('@/assets/images/recipes/' + recipe.id + '.jpg')"
        />
        <div v-if="includeDetails"> 
            <p class="recipe-ingredients">{{ recipe.ingredients }}</p>
            <p class="recipe-directions">{{ recipe.directions }}</p>
        </div>
    </div>
</template>


<script >
export default {
    name: 'show-recipe',
    props: ['recipe', 'includeDetails'],
    data: function(){
        return{};
    }   
};
</script>

<style scoped>
</style>