<template>
  <div id="favorites">
    <h2>Favorite Recipes</h2>

    <div>
      <ul v-for="recipe in isfav" :key="recipe.id">
        <div v-if="recipe">
        {{ recipe.name }} is a favorite
          <input type="checkbox" id="favorite" true-value="1" false-value="0" v-model="recipe.favorite"/>{{ recipe.favortie }}
          <button @click="removefav">Remove</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from '@/app.js';
//import ShowFavorite from '@/components/ShowFavorites.vue'
//import ShowRecipe from '@/components/ShowRecipe.vue'
export default {
  name: '',
  components:{
    //'show-favorite' : ShowFavorite,
   // 'show-recipe': ShowRecipe
  },
  props: ['recipes', 'id', 'favorite'],

  data: function () {
    return{
    };
  },
  computed:{
    isfav() {
            return this.recipes.filter((recipe) => {
                return recipe.favorite == 1;
            }, this.id);
    },
    recipe() {
            return this.recipes.filter((recipe) => {
                return recipe.id == this.id;
            }, this.id);
    },
  },
  methods:{
    removefav() {
        axios.put('/recipe/'+this.id, this.recipe).then((response) => {
            if (response.data.errors != null) {
                this.errors = response.data.errors;
            } else {
                this.$emit('update-recipes')
            }
        });
    },   
  }
};

</script>

<style lang='scss'>

</style>
