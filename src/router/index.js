import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// //引入组件
// import login from '@/components/login'
// import home from '@/components/home'
import {CHANGETITLE} from '@/common/const'
//异步加载
const login=()=>import('@/views/login/login');
const index=()=>import('@/views/index');
const home=()=>import('@/views/home/home');
const watermeter=()=>import('@/views/dataAnalysis/watermeter');
const watermonitor=()=>import('@/views/dataAnalysis/watermonitor');
const wateruse=()=>import('@/views/dataAnalysis/wateruse');
const bim=()=>import('@/views/BIM/bim');
const docview=()=>import('@/views/document/docview');
const docupload=()=>import('@/views/document/docupload');


Vue.use(Router)

const routes=[
  {
    path:"/",
    redirect:'/index'
  },
  {
    path: '*',   // 错误路由
    redirect: '/index'   //重定向
  },
  {
    path: '/login',
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
        component:home,
        meta:{
          catalog:'首页',
          title:''
        }
        // beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'首页',navigateCurrent:''});
         
        //   next();
        // }
      },
      {
        path :'/bim',
        name:'bim',
        component:bim,
        meta:{
          catalog:'BIM',
          title:''
        }
        // //路由独享守卫
        // beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'BIM',navigateCurrent:''});
        //   next();
        // }
      },
      {
        path :'/docview',
        name:'docview',
        component:docview,
        meta:{
          catalog:'文档管理',
          title:'文档发布'
        }
        //  //路由独享守卫
        //  beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'文档管理',navigateCurrent:'文档发布'});
        //   next();
        // }
      },
      {
        path :'/docupload',
        name:'docupload',
        component:docupload,
        meta:{
          catalog:'文档管理',
          title:'文档上传'
        }
        // beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'文档管理',navigateCurrent:'文档上传'});
      
        //   next();
        // }

      },
      {
        path :'/wateruse',
        name:'wateruse',
        component:wateruse,
        meta:{
          catalog:'文档管理',
          title:'分类用水统计'
        }

        // beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'数据分析',navigateCurrent:'分类用水统计'});

        //   next();
        // }
      },
      {
        path :'/watermeter',
        name:'watermeter',
        component:watermeter,
        meta:{
          catalog:'数据分析',
          title:'水表关系图'
        }
        // beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'数据分析',navigateCurrent:'水表关系图'});

        //   next();
        // }
      },
      {
        path :'/watermonitor',
        name:'watermonitor',
        component:watermonitor,
        meta:{
          catalog:'数据分析',
          title:'用水指标监控'
        }
        // beforeEnter:(to,from,next)=>{
        //   store.commit(CHANGETITLE,{navigateTitle:'数据分析',navigateCurrent:'用水指标监控'});
        
        //   next();
        // }
      }
    ]
  }
]
const router= new Router({
  routes,
  mode:'history'
})

//全局路由守卫
router.beforeEach((to,from,next)=>{
console.log(to)
  store.commit(CHANGETITLE,
    {navigateTitle:to.meta.catalog,
      navigateCurrent:to.meta.title});
        

  let isLogin=true;
  if(to.name==="login")
  {
    if(isLogin)
      router.push({name:'index'});
  }
  if(!isLogin)
  {
    router.push({name:'login'});
    // next('/login');
  }
  next();
});

export default router;