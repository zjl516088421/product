<template>
  <section>
    <el-row type="flex">
      <el-col :span="10" class="logo">
        <img src="../../assets/logo.png" alt="">
      </el-col>
      <el-col :span="10"></el-col>
      <el-col :span="4" style="text-align: right">
        <el-dropdown>
      <span class="el-dropdown-link">
        <img src="../../../static/image/icon.png" class="user-header" alt="">
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleUpdate">密码修改</el-dropdown-item>
            <el-dropdown-item @click.native="handleOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-dialog title="修改密码" type="small" v-model="dialogVisible">
      <updatepass></updatepass>
    </el-dialog>
  </section>
</template>

<script>
  import {logout} from '../../api/api'
  import UpdatePass from '../manager/UpdatePass.vue'
  export default{
    methods:{
      handleUpdate(){
        console.log('111')
        this.dialogVisible=true;
      },
      handleOut(){
        var self=this;
        logout().then(function (res) {
          if(res.data&&res.data.code==1){
            self.$store.commit('logout');
            self.$router.push('/login')
          }
        })
      }
    },
    components:{
      updatepass:UpdatePass
    },
    data(){
      return {
        dialogVisible:false,
      }
    }
  }
</script>
