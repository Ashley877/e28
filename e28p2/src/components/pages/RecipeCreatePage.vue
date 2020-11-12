<template>
    <div>
        <h2>Add a Recipe</h2>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="recipe.name" id="name" />
<br>
<br>
            <label for="ingredients">Ingredients:</label>
            <input type="textarea" v-model="recipe.ingredients" id="ingredients" />
<br>
<br>
            <label for="directions">Directions:</label> 
            <input type="textarea" v-model="recipe.directions" id="directions" />
<br>
<br>       <div class="ingredient">
            <label class="ingredients">Ingredients</label>
              <ul class="ingredients_list">
                <li v-for="(item,index) in recipeModel.metadata.ingredients" :key="index">
                   {{item.ingredient}}
                <v-btn fab dark small error @click="removeIngrediant(index)" class="btn_remove_ingredient">
                <v-icon dark>remove</v-icon>
                </v-btn>
                </li>
            </ul>
            </div>
            <label for="perishable" class="form-checkbox-label">
                <input
                    type="checkbox"
                    v-model="recipe.perishable"
                    id="perishable"
                />
                Perishable?
            </label>
        </div>

        <button @click="addRecipe">Add Recipe</button>

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
                //perishable: true,
            },
        };
    },
    methods: {
        addRecipe() {
            axios.post('/recipe', this.recipe).then((response) => {
                if (response.data.errors) {
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