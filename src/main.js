// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './vuex/store';

Vue.use(ElementUI);

// axios.defaults.headers.common["token"]="";
// axios.defaults.headers.post["Content-type"]="application/json";

Vue.prototype.$axios=axios;

Vue.config.productionTip = false

// store.dispatch("GetUserList").then(()=>{
  
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})