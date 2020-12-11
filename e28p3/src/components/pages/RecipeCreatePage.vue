<template>
    <div>
        <h2>Add a Recipe</h2>
        <!-- input fields -->
        <div id="inputs">
            <label for="name">Name</label><br><br>
            <input type="textarea" v-model="recipe.name" id="name" />
            <small class="form-help">Min: 3, Max:100</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>
            <br>
            <br>
            <label for="ingredients">Ingredients (seperate by comma):</label><br><br>
            <input type="textarea" v-model="recipe.ingredients" id="ingredients" />
            <small class="form-help">Min: 3</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>
            <br>
            <br>
            <label for="directions">Directions (seperate by comma):</label> <br><br>
            <input type="textarea" v-model="recipe.directions" id="directions" />
            <small class="form-help">Min: 3</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>
            <br>
            <br>      
            <label for="categories">Categories:</label><br><br>
            <input type="textarea" v-model="recipe.categories" id="categories" /> 
            <small class="form-help">Min: 3</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>     
        <br>      
        <br>
        <br>
        </div>
        <!-- submit new recipe -->
        <button @click="addRecipe">Add Recipe</button>
            <transition name="fade">
            <div
                data-test="recipe-added-confirmation"
                class="alert"
                v-if="showConfirmationMessage"
            >
                Your Recipe <em>{{ addedName }}</em> was added!
            </div>
        </transition>

        <div class="form-feedback-error" v-if="errors">
            Please correct the above errors
        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
import ErrorField from '@/components/ErrorField.vue';

export default {
    components:{
          'error-field': ErrorField,
    },
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
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$store.dispatch('fetchRecipes');

                    this.showConfirmationMessage = true;
                    this.addedName = this.recipe.name;

                    setTimeout(
                        () => (this.showConfirmationMessage = false),
                        3000
                    );

                    this.recipe = {
                        name: '',
                        ingredients: '',
                        directions: '',
                        categories: '',
                        favorite: '0'
                    };
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