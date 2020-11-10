<template>
    <div class="recipe">
        <div class="recipe-name">{{ recipe.name }}</div>
        <img class="recipe-thumb" v-bind:src="require('@/assets/images/recipes/' + recipe.id + '.jpg')" />

        <p class="description" v-if="includeDetails">
            {{ recipe.description }}
        </p>
        <p class="price" v-if="includeDetails">${{ recipe.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'show-recipe',
    props: ['recipe', 'includeDetails'],
    data: function () {
        return {};
    },
    
};
</script>