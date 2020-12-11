<template>
  <div id="favorites">
    <h2>Favorite Recipes</h2>

    <div>
      <ul v-for="recipe in isfav" :key="recipe.id">
        <div v-if="recipe">
        {{ recipe.name }} is a favorite
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components:{

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
  },
};

</script>

<style lang='scss'>

</style>
