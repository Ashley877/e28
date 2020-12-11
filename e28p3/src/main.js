import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import router from '@/common/router.js';
import store from '@/common/store.js';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false

Vue.use(VueRouter);



new Vue({
    router: router, store, // <-- NEW
    render: h => h(App),
}).$mount('#app')
