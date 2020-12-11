<template>
  <div id="favorites">
        <strong>Your Favorites</strong>
        <p v-if="favorites && favorites.length == 0">
          No favorites yet.
        </p>
        <li v-for="(favorite, key) in favorites" v-bind:key="key">
          {{ favorite.name }}
        </li>
      </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28-api/seeds/user.json
  
      errors: null,
      favorites: [],
    };
  },
  computed:{
   user() {
      return this.$store.state.user;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    loadFavorites() {
      if (this.user) {
        // Because favorite is a auth-protected resource, this will
        // only return favorites belonging to the authenticated user
        axios.get("favorite").then((response) => {
          this.favorites = response.data.favorite.map((favorite) => {
            return this.$store.getters.getRecipeById(favorite.recipe_id);
          });
        });
      }
    },
},
  watch: {
      user() {
        this.loadFavorites();
      },
    },
    mounted() {
      this.loadFavorites();
    },
};


</script>

<style lang='scss'>

</style>
