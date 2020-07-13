/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-13 21:31:33
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import http from './http'
import {
  Toast
} from 'vant'

Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");