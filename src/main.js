import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import myHeader from './components/header'


Vue.config.productionTip = false

Vue.component('my-header',myHeader)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
