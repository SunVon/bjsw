<template>
   <div class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <router-link to="/index" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">水务</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b style="font-weight:bold">北京水务局</b></span>
    </router-link>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" style="line-height: 1;padding:0px">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

       <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li >
            <a href="#">
              <span class="hidden-xs" style="padding-right:10px">admin</span>
            </a>
          
          </li>
          <!-- Control Sidebar Toggle Button -->
          <!-- <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li> -->
        </ul>
      </div>

    </nav>
  </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel -->
      <!-- <div class="user-panel" style="height:60px">
        <div class="pull-left image">
          <img src="" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>北京水务</p>
          <a href="#"><i class="fa fa-circle text-success"></i> 管理员</a>
        </div>
      </div> -->
     
    
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree">
        <!-- <li class="header">导航栏</li> -->
         <li class="active">
          <router-link to="/index">
            <i class="fa fa-dashboard"></i> <span>数据首页</span>
            <!-- <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span> -->
          </router-link>
        </li>
           <li class="">
          <router-link to="/bim">
            <i class="fa fa-circle-o"></i> <span>BIM展示</span>
            <!-- <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span> -->
          </router-link>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-circle-o"></i> <span>数据分析</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a >
          <ul class="treeview-menu">
            <li ><router-link to="/wateruse"><i class="fa fa-circle-o"></i>分类用水统计</router-link></li>
            <li ><router-link to="/watermeter"><i class="fa fa-circle-o"></i>水表关系图</router-link></li>
            <li ><router-link to="/watermonitor"><i class="fa fa-circle-o"></i>用水指标监控</router-link></li>
          </ul>
        </li>
        
         <li class="treeview">
          <a href="#">
            <i class="fa fa-circle-o"></i> <span>文档管理</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li ><router-link to="/docview"><i class="fa fa-circle-o"></i>文档发布</router-link></li>
            <li ><router-link to="/docupload"><i class="fa fa-circle-o"></i>文档上传</router-link></li>
          </ul>
        </li>
       
      </ul>
    </section>
    <!-- /.sidebar -->

  </aside>

  <!-- Content Wrapper. Contains page content -->
 <div class="content-wrapper" style="min-height: 901px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        {{$store.getters.navigateCurrent}}
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{$store.getters.navigateTitle}}</a></li>
        <li class="active" v-show='$store.getters.navigateCurrent' >{{$store.getters.navigateCurrent}}</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      
      <keep-alive exclude="home">
        <router-view />
      </keep-alive>
    

    </section>
    <!-- /.content -->
  </div>
   
    </div>

</template>
<script>
// import '../../static/js/adminlte.js'
export default {
     
     created(){
      
     },
     beforeMount(){
   
     },
     mounted(){

        // $.getScript("../static/js/jquery.js");
        // $.getScript("../../static/js/adminlte.js",function(){  //加载test.js,成功后，并执行回调函数
        //   console.log("加载js文件");
        // });
       require( '../../static/js/adminlte.js');
     },

     activated(){

     },
     
     deactivated(){

     },
     beforeRouteLeave(){
      //  this.$route.path
     }

}

</script>
<style  scoped>

</style>