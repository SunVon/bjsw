<template>
 <div class="login">
<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">

  <h1 class="title">
      <i class="el-icon-setting"></i>
    用户登录
  </h1>
  <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginForm.password" autocomplete="off"  @keyup.enter.native="submitForm('loginForm')"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
  name: 'login',
  data() {
   
      return {
        loginForm: {
          username: '',
          password: '',
         
        },
        rules: {
         username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5到 18 个字符', trigger: 'blur' }
         ],
         password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5到 18 个字符', trigger: 'blur' }
         ],
        }
      };
    },
    methods: {
      submitForm(formName) {
       
        this.$refs[formName].validate((valid) => {
          if (valid) {

            let _this=this;
            _this.$router.push('/index');
           
            // this.axios.post('/api/checklogin',{
            //     username:_this.loginForm.username,
            //     password:_this.loginForm.password
              
            // }).then(response=>{
            //   console.log(response.data);
          
            //   if(response.data.length){
              // localStorage.setItem('userinfo',JSON.stringify(response.data[0]));
              // let userinfo=JSON.parse(localStorage.getItem("userinfo"));
            //  _this.$store.commit('SaveUserInfo',response.data[0]);

            //     _this.$message({
            //       message:'登录成功',
            //       type:'success'
            //     });
            //     _this.router.push('/home');

            //   }else{
            //     _this.$message.error("登录失败")
            //   }
            // });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

html,body{
  margin:0;
  padding:0;

}

html,body,#app,.login{
  height:100%;
}

.login{
  display: flex;
  justify-content:center;
  align-items: center;
  background-image: url('../../../static/img/bjsw_login.jpg');
  background-size:100%;
}

.el-form{
  width:25rem;
  border:1px solid #efeeee;
  border-radius:4px;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 1px #efeeee, 0px -1px 1px #efeeee, 1px 0px 1px #efeeee, -1px 0px 1px #efeeee;
  padding:0.125rem 2.8125rem 0.625rem 0.625rem;
  margin-top: -3.125rem
}
.title{
  text-align: center;
  padding: 15px;
  font-size:26px;
  font-weight: bold;
}
</style>
