<template>
  <div>
    <p>Add a Recipe to the book or mark your favorites!</p>
    <show-favorites :category="'dinner'"></show-favorites>
   

  </div>
</template>

<script>
import ShowFavorites from '@/components/ShowFavorites.vue';


export default {
  name: 'App',
  components: {
    'show-favorites' : ShowFavorites,
  },
  
};

</script>

<style lang='scss'>

</style>
