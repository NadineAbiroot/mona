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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


