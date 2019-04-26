// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// ---------------- 引入 Element-Ui -----------------------

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// ---------------- 引入 axios ---------------------------

import axios from "axios"
Vue.prototype.axios=axios;

// --------------- 引入 Vuex store -----------------------

import store from './veux/store'


// store.dispatch('GET_USERLIST').then(() =>{
//   console.log('用户数据11', store.state.userlist)
// })


Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
