import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import FavoritesPage from '@/components/pages/FavoritesPage.vue';
import RecipesPage from '@/components/pages/RecipesPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import RecipeCreatePage from '@/components/pages/RecipeCreatePage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',  
  routes: [
        { path: '/', component: RecipesPage },
        { path: '/favorites', component: FavoritesPage },
        { path: '/categories', component: CategoriesPage },
        { path: '/recipe/new', component: RecipeCreatePage},
        { path: '/recipes/:id', component: RecipePage, props:true },
    ],
    
})

new Vue({
    router: router, // <-- NEW
    render: h => h(App),
}).$mount('#app')
