import Vue from 'vue'
import Router from 'vue-router'

// //引入组件
// import login from '@/components/login'
// import home from '@/components/home'

//异步加载
const login=()=>import('@/components/login');
const index=()=>import('@/components/index');
const home=()=>import('@/components/home');
const userlist=()=>import('@/components/userlist');
const useradd=()=>import('@/components/useradd');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path :'',
          name:'home',
          component:home
        },
        {
          path :'/userlist',
          name:'userlist',
          component:userlist
        },
        {
          path :'/useradd',
          name:'useradd',
          component:useradd
        },
      ]
    }
  ]
})
