import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './registerServiceWorker'

Vue.use(Toast);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
