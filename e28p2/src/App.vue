<template>
  <div id="app">
    <img alt="My Recipes logo" id="logo" src="@/assets/images/zipfoods-logo.png">
    <!-- Added to the App.vue template -->
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

    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
  data() {
    return {
      
      links: ['home', 'recipes', 'favorites', 'shopping', 'categories'],

      /* Map links to the appropriate component */
      paths: {
          home: '/',
          recipes: '/recipes',
          favorites: '/favorites',
          shopping: '/shopping',
          categories: '/categories'
      },
    };
  },

};
</script>

<style lang='scss'>
@import '@/assets/scss/recipes.scss';
</style>
