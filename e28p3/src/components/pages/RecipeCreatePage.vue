<template>
    <div>
        <h2>Add a Recipe</h2>
        <!-- input fields -->
        <div id="inputs">
            <label for="name">Name</label><br><br>
            <input type="textarea" v-model="recipe.name" id="name" v-on:blur="validate()"/>
            <small class="form-help">Min: 3, Max:100</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>
            <br>
            <br>
            <label for="ingredients">Ingredients (seperate by comma):</label><br><br>
            <input type="textarea" v-model="recipe.ingredients" id="ingredients" v-on:blur="validate()"/>
            <small class="form-help">Min: 3</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>
            <br>
            <br>
            <label for="directions">Directions (seperate by comma):</label> <br><br>
            <input type="textarea" v-model="recipe.directions" id="directions" v-on:blur="validate()"/>
            <small class="form-help">Min: 3</small>
            <error-field
                v-if="errors && 'name' in errors"
                :errors="errors.name"
            ></error-field>
            <br>
            <br>      
            <label for="categories">Categories:</label><br><br>
            <input type="textarea" v-model="recipe.categories" id="categories" v-on:blur="validate()"/> 
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
import Validator from 'validatorjs'

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
     validate() {
            let validator = new Validator(this.recipe, {
                name: 'required|between:3,100',
                ingredients: 'required|min:3',
                directions: 'required|min:3',
                description: 'required|min:3',
                categories: 'required|min:3',
            });

            this.errors = validator.errors.all();

            return validator.passes();
        },
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