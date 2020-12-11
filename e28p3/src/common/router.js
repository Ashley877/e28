import VueRouter from 'vue-router';
import store from '@/common/store';

// Define all the routes of our application
const routes = [
    
    {
        path: '/favorites',
        component: () => import('@/components/pages/FavoritesPage.vue'),
    },
    {
        path: '/recipes',
        component: () => import('@/components/pages/RecipesPage.vue'),
    },
    {
        path: '/categories',
        component: () => import('@/components/pages/CategoriesPage.vue'),
    },
    {
        path: '/recipes/new',
        component: () => import('@/components/pages/RecipeCreatePage.vue'),
        // Note the addition of this meta attribute:
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/recipes/:id',
        component: () => import('@/components/pages/RecipePage.vue'),
        props: true,
    },
    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
    },
    {
        path: '/shopping',
        component: () => import('@/components/pages/ShoppingPage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        // This is a route we can direct the user to if they try to access a part of the site they don't have privileges for
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = () => {
        if (requiresAuth && !store.state.user) {
            next('/denied');
        }
        else {
            next();
        }
    }

    // If we don't have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }

});


export default router;