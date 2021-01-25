import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);

import store from './store/index'
import router from './routers'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
