import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ODUI from '@/../package/index';
import './styles/index.scss';
Vue.config.productionTip = false

Vue.use(ODUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
