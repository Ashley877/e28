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
    <router-view></router-view>
    
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      links: ['recipes', 'favorites', 'categories'],

      /* Map links to the appropriate component */
      paths: {
          recipes: '/',
          favorites: '/favorites',
          categories: '/categories',
      },
    }
  },
};

</script>

<style lang='scss'>
@import '@/assets/scss/recipe_book.scss';
</style>
