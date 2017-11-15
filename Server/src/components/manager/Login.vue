<template>
  <el-form :model="user" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <header class="header">
      <img src="../../assets/logo.png" alt="">
    </header>
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="user.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkcode">
      <el-col :span="16">
        <el-input type="text" v-model="user.checkcode" auto-complete="off" placeholder="验证码"></el-input>
      </el-col>
      <el-col :span="8" class="text-right">
        <img @click="changeImg" :src="codeUrl" alt="">
      </el-col>
    </el-form-item>
   <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <el-form-item >
      <el-button type="primary"  @click="handleSubmit" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {checkCodeUrl,login} from '../../api/api'
  export default {
    data() {
      return {
        logining: false,
        user: {
          username: '',
          password: '',
          checkcode:''
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          checkcode:[
            {required:true,message:'请输入验证码',trigger:'blur'}
          ],
        },
        codeUrl:checkCodeUrl,
        checked: true
      };
    },
    methods: {
      handleSubmit(ev) {
        var _this = this;
        this.$refs.loginForm.validate(function(valid){
          if (valid) {
            _this.logining = true;
            login(_this.user).then(function (res) {
              _this.logining=false;
              if(res.data&&res.data.code==1){
                _this.$store.commit('login',true);
                _this.$router.push('/explain')
              }else{
                _this.$message(
                  {message: res.data.msg,
                    type: 'error'});
              }

            }).catch(function () {
              _this.logining=false;
              _this.$message(
                {message: '登录失败',
                type: 'error'});
            })
          }else{
            _this.$message(
              {message: '验证失败',
                type: 'error'});
            return false;
          }
      });
      },
      changeImg(){
        this.codeUrl=checkCodeUrl+'?'+Date.now();
      }
    }
  }

</script>
<style lang="less">
  @import "../../style/login.less";
</style>
