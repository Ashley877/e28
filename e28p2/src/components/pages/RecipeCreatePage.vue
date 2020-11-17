<template>
    <div>
        <h2>Add a Recipe</h2>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="textarea" v-model="recipe.name" id="name" />
            <br>
            <br>
            <label for="ingredients">Ingredients:</label>
            <input type="textarea" v-model="recipe.ingredients" id="ingredients" />
            <br>
            <br>
            <label for="directions">Directions:</label> 
            <input type="textarea" v-model="recipe.directions" id="directions" />
            <br>
            <br>      
            <label for="categories">Categories:</label>
            <input type="textarea" v-model="recipe.categories" id="categories" />       
        <br>      
        <br>
        <br>
        </div>

        <button @click="addRecipe">Add Recipe</button>
        <div class="success" v-if="showConfirmationMessage">New Recipe Created!</div>
        {{ errors }}
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            recipe: {
                name: '',
                ingredients: '',
                directions: '',
                categories:'',
                favorite:'0'
            },
        };
    },
    methods: {
        addRecipe() {
            axios.post('/recipe', this.recipe).then((response) => {
                if (response.data.errors != null) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-recipes');
                    this.showConfirmationMessage = true;
                }
            });
        },        
    },
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>