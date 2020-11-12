<template>
    <div class="recipe">
        <div class="recipe-name">{{ recipe.name }}</div>
        <img class="recipe-thumb" v-bind:src="require('@/assets/images/recipes/' + recipe.id + '.jpg')" />
    <div class="details" v-if="includeDetails">
        <p class="ingredients">{{ recipe.ingredients }}</p>
        <p class="directions">{{ recipe.directions }}</p>
    </div>
    </div>
</template>

<script>
//import { axios } from '@/app.js';
export default {
    name: 'show-recipe',
    props: ['recipe', 'includeDetails'],
    data: function () {
        return {};
    },
    computed: {
        imageSource() {
            try {
                return require('@/assets/images/recipes/' +
                    this.recipe.id +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        },
    },
    
};
</script>