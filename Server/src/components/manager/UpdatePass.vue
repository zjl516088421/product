<template>
  <el-form :model="user" :rules="rules" ref="loginForm" label-position="left" label-width="0px" >
    <el-form-item prop="oldPwd">
      <el-input type="password" v-model="user.oldPwd" auto-complete="off" placeholder="旧密码"></el-input>
    </el-form-item>
    <el-form-item prop="newPwd">
      <el-input type="password" id="newPwd" v-model="user.newPwd" auto-complete="off" placeholder="新密码"></el-input>
    </el-form-item>
    <el-form-item prop="reNewPwd">
      <el-input type="password" v-model="user.reNewPwd" auto-complete="off" placeholder="新密码确认"></el-input>
    </el-form-item>
    <el-form-item >
      <el-button type="primary"  @click="handleSubmit" :loading="logining">修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {updatePwd} from '../../api/api'
  export default {
    data() {
      return {
        logining: false,
        user:{
          oldPwd:'',
          newPwd:'',
          reNewPwd:'',
        },

        rules: {
          oldPwd: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
          ],
          newPwd: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],
          reNewPwd:[
            {required:true,message:'请输入确认密码',trigger:'blur'},
            {validator:function(rule, value, callback, source, options){
              var errors=[];
              if(value!=document.querySelector('#newPwd>input').value){
                errors.push('确认密码错误');
                callback(errors);
              }else{
                callback(errors)
              }
            }}
          ],
        },
      };
    },
    methods: {
      handleSubmit(ev) {
        var _this = this;
        this.$refs.loginForm.validate(function(valid){
          if (valid) {
            _this.logining = true;
            updatePwd({oldPwd:_this.user.oldPwd,newPwd:_this.user.newPwd}).then(function (res) {
              _this.logining=false;
              if(res.data&&res.data.code==1){
                _this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else{
                _this.$message({
                  message: '修改失败',
                  type: 'error'
                });
              }
            }).catch(function () {
              _this.logining=false;
              _this.$message(
                {message: '接口错误',
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
