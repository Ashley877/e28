import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import RecipesPage from '@/components/pages/RecipesPage';
import FavoritesPage from '@/components/pages/FavoritesPage.vue';
import ShoppingPage from '@/components/pages/ShoppingPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);

const router=new VueRouter({
  mode: 'history',
  routes:[
      { path:'/', component: HomePage },
      { path:'/recipes', component: RecipesPage },
      { path:'/favorites', component: FavoritesPage },
      { path:'/shopping', component: ShoppingPage },
      { path:'/categories', component: CategoriesPage },
      { path:'/recipes/:id', component: RecipePage, props: true },

  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
