<template>
    <div class="recipe">
        <div class="recipe-name">{{ recipe.name }}</div>
        <img
            class="recipe-thumb"
            :src="require('@/assets/images/recipes/' + recipe.id + '.jpg')"
        />
        <p class="recipe-description">{{ recipe.description }}</p>
        <div class="recipe-price">${{ recipe.price }}</div>
    </div>
</template>


<script >
export default {
    name: 'show-recipe',
    props: ['recipe'],
    data: function(){
        return{};
    }   
};
</script>

<style scoped>
</style>