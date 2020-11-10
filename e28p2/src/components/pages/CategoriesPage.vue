<template>
    <div>
        <h1>Categories</h1>
        <ul class="cleanList">
            <li v-for="(category, id) in categories" :key="id">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    props: ['recipes'],
    data: function () {
        return {};
    },
    computed: {
        categories() {
            let categories = this.recipes.map((recipe) =>
                recipe.categories.split(',')
            );
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
    },
};
</script>

<style scoped>
</style>