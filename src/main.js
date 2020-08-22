import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import myHeader from './components/header'
import myFooter from './components/footer'


Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.component('my-header',myHeader)
Vue.component('my-footer',myFooter)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
