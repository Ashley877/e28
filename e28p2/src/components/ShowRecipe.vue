<template>
    <div class="recipe">
        <div class="recipe-name">{{ recipe.name }}</div>
        <img
            class="recipe-thumb"
            :src="imageSource"
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
    },   
    computed: {
        imageSource() {
            try {
                return require('@/assets/images/recipes/' + this.recipe.id + '.jpg');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        }
    },
};
</script>

<style scoped>
</style>