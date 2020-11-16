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
            <h4>Category</h4>
             <input type="checkbox" name="category" value="snacks">Snacks<br>      
             <input type="checkbox" name="category" value="sides">Side<br>      
             <input type="checkbox" name="category" value="soup">Soup<br>    
             <input type="checkbox" name="category" value="breakfast">Breakfast<br>      
             <input type="checkbox" name="category" value="lunch">Lunch<br>      
             <input type="checkbox" name="category" value="dinner">Dinner<br>     
             <input type="checkbox" name="category" value="dessert">Dessert<br>     

        <br>      
        <br>
        <br>
        </div>

        <button @click="addRecipe">Add Recipe</button>

        {{ errors }}
    </div>
</template>

<script>
//import { axios } from '@/app.js';

export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            recipe: {
                name: '',
                ingredients: '',
                directions: '',
                categories:''
            },
        };
    },
    //methods: {
     //   addRecipe() {
      //      axios.post('/recipe', this.recipe).then((response) => {
       //         if (response.data.errors) {
        //            this.errors = response.data.errors;
         //       } else {
          //          this.$emit('update-recipes');
           //         this.showConfirmationMessage = true;
            //    }
            //});
        //},
        
    //},
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>