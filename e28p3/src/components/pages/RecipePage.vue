<template>
  <div id="recipe-page">
    <div v-if="recipe">
      <show-recipe :recipe="recipe" :includeDetails="true"></show-recipe>
      <button v-on:click="addToShopping">Add To Shopping List</button>
      <transition name="fade">
        <div class="alert" v-if="addAlert">
          Your list has been updated!
        </div>
      </transition>
     <div v-if="user">
                <button v-if="isFavorite" @click="removeFromFavorites()">Remove from favorites</button>
                <button v-else @click="addToFavorites()">❤ Add to favorites</button>
      </div>
    </div>
    <div v-if="recipeNotFound">
      <p>Recipe {{ id }} not found.</p>
      <router-link v-bind:to="'/'">Go to all recipes </router-link>
    </div>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
import { axios } from "@/common/app.js";
import { cart } from "@/common/app.js";
import useFavorite from '@/features/useFavorite.js';

export default {
  setup(props) {
        const { isFavorite, addToFavorites, removeFromFavorites } = useFavorite(
            props.id
        );

        return { isFavorite, addToFavorites, removeFromFavorites };
    },
  name: "",
  props: ["id", "recipes", "favorite"],
  components: {
    "show-recipe": ShowRecipe,
  },
  data: function() {
    return {
      addAlert: false,
    };
  },
  computed: {
    recipe() {
      return this.recipes.filter((recipe) => {
        return recipe.id == this.id;
      }, this.id)[0];
    },
    recipeNotFound() {
      return this.recipe == null;
    },
    ingredients() {
      let ingredients = this.recipes.map((recipe) =>
        recipe.ingredients.split(",")
      );
      let mergedIngredients = [].concat.apply([], ingredients);

      // Return unique, sorted categories
      return [...new Set(mergedIngredients)].sort();
    },
    recipesStore() {
      return this.$store.state.recipes;
    },
    user() {
            return this.$store.state.user;
        },
  },
  methods: {
    addFavorite() {
      axios.put("/recipe/" + this.recipe.id, this.recipe).then((response) => {
        if (response.data.errors != null) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
        }
      });
    },
    addToShopping() {
      cart.add(this.recipe.id, 1);
      this.$store.commit("setCartCount", cart.count());
      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 2000);
    },
  },
};
</script>

<style scoped></style>
