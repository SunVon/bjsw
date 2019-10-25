// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from './network/axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import jQuery from 'jquery';
import store from './store';
import router from './router'
Vue.use(ElementUI);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'font-awesome/css/font-awesome.min.css'

// import '../static/js/demo.js'
// axios.defaults.headers.common["token"]="";
// axios.defaults.headers.post["Content-type"]="application/json";

Vue.prototype.$axios=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  store,
  router,
  components: { App },
  template: '<App/>'
})
