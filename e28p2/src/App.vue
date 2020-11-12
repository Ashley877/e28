<template>
    <div id="app">
        <img
            alt="recipe logo"
            id="logo"
            src="@/assets/images/logo.jpg"
        />

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

        <router-view
            v-bind:recipes="recipes"
            v-on:update-recipes="updateRecipes()"
        ></router-view>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    name: 'App',
    data() {
        return {
            products: [],
            /* Store links in an array to maintain order */
            links: ['home', 'recipes', 'favorites', 'shopping', 'categories', 'add a recipe'],

            /* Map links to the appropriate component */
            paths: {
                home: '/',
                recipes: '/recipes',
                favorites: '/favorites',
                shopping: '/shopping',
                categories: '/categories',
                'add a recipe': '/recipes/new',
            },
        };
    },
    methods: {
        updateRecipes() {
            axios.get('recipe').then((response) => {
                this.recipes = response.data.recipe;
            });
        },
    },
    mounted() {
        this.updateRecipes();
    },
};
</script>

<style lang='scss'>
@import '@/assets/scss/recipe_book.scss';
</style>
