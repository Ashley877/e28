<template>
  <div id="app">
    <img alt="recipe logo" id="logo" src="@/assets/images/logo.jpg" />
    <nav>
      <ul>
          <li>
              <router-link
                  v-for="link in links"
                  v-bind:key="link"
                  v-bind:to="paths[link]"
                  exact
                  >{{ link }}</router-link
              >
          </li>
      </ul>
    </nav>
    <router-view v-bind:recipes='recipes' v-on:update-recipes='updateRecipes'></router-view>
    
    
  </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
  name: 'App',
  data() {
    return{
      recipes: [],
      links: ['recipes', 'favorites', 'categories', 'shopping', 'add new recipe'],

      /* Map links to the appropriate component */
      paths: {
          recipes: '/',
          favorites: '/favorites',
          categories: '/categories',
          shopping:'/shopping',
          'add new recipe': '/recipe/new',
      },
    }
  },
  methods: {
    updateRecipes(){
      axios.get('recipe').then((response) => {
        response.data.recipe.forEach((recipe) => {
            recipe.favorite = Boolean(Number(recipe.favorite));
        });
        this.recipes = response.data.recipe;
    });
},  
    
    },
  mounted() {
    this.updateRecipes();
  }, 
};

</script>

<style lang='scss'>
@import '@/assets/scss/recipe_book.scss';
</style>
