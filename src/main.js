import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import router from './router'

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueLoading from 'vuejs-loading-plugin'

Vue.use(ElementUI);

Vue.component('vue-phone-number-input', VuePhoneNumberInput);

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
window.axios=axios;

axios.defaults.baseURL="https://api.urukstage.hibridmena.com/api/"
axios.defaults.headers.common["Access-Control-Allow-Origin"]="*"
axios.defaults.headers.withCredentials=true;

import Loader from './components/Loader.vue'
Vue.use(VueLoading)

// overwrite defaults
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Ladataan', // default 'Loading'
  loading: true, // default false
  customLoader: Loader, // replaces the spinner and text with your own
  background: 'rgb(255,255,255)', // set custom background
  classes: ['myclass'] // array, object or string
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


