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
            ><span v-if="link == 'cart'">({{ cartCount }})</span>
            {{ link }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view
      v-bind:recipes="recipes"
      v-on:update-recipes="updateRecipes"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import { cart } from "@/common/app.js";
export default {
  name: "App",
  data() {
    return {
      recipes: [],
      links: [
        "recipes",
        "favorites",
        "categories",
        "add new recipe",
        "shopping",
        "account",
      ],

      /* Map links to the appropriate component */
      paths: {
        recipes: "/",
        favorites: "/favorites",
        categories: "/categories",
        "add new recipe": "/recipe/new",
        shopping: "/shopping",
        account: "/account",
      },
    };
  },
  methods: {
    updateRecipes() {
      axios.get("recipe").then((response) => {
        response.data.recipe.forEach((recipe) => {
          recipe.favorite = Boolean(Number(recipe.favorite));
        });
        this.recipes = response.data.recipe;
      });
    },
  },
  mounted() {
    this.updateRecipes();
    this.$store.dispatch("fetchRecipes");
    this.$store.commit("setCartCount", cart.count());
    this.$store.dispatch("authUser");
  },
  computed: {
    cartCount() {
      return this.$store.state.cartCount;
    },
    //recipes() {
    //  return this.$store.state.recipes;
    //},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/recipe_book.scss";
</style>
