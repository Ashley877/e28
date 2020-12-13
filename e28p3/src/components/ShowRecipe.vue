<template>
  <div class="recipe">
    <h1 class="recipe-name" data-test="recipe-name" >{{ recipe.name }}</h1>
    <img class="recipe-thumb" :data-test="'recipe-image-' + recipe.id" :src="imageSource" />
    <div v-if="includeDetails">
      <p class="recipe-favorite">{{ recipe.favortie }}</p>
      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="directions">
        <h2>Directions</h2>
        <ol>
          <li v-for="directions in directions" :key="directions">
            {{ directions }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-recipe",
  props: ["recipe", "includeDetails", "favorite"],
  data: function() {
    return {};
  },
  computed: {
    imageSource() {
      try {
        return require("@/assets/images/recipes/" + this.recipe.id + ".jpg");
      } catch (e) {
        return require("@/assets/images/recipes/image-not-available.jpg");
      }
    },
    ingredients() {
      let ingredients = this.recipe.ingredients.split(",");
      return ingredients;
    },
    directions() {
      let directions = this.recipe.directions.split(",");
      return directions;
    },
  },
};
</script>

<style scoped></style>
