<template>
  <el-row class="user-container">
    <el-col :span="8">
      <div class="user-header" :style="{'background-image':'url('+user.header+')'}">
        <b class="name">{{user.username}}</b>
      </div>
      <p><i class="iconfont icon-dianhua"></i>{{user.phone}}</p>
      <p><i class="iconfont icon-weixin"></i>{{user.wxNum}}</p>
      <p><i class="iconfont icon-qq"></i>{{user.qqNum}}</p>
    </el-col>
    <el-col :span="16" class="user-detail">
        <p><span>民族</span>{{user.nation}}</p>
        <p><span>年龄</span>{{user.age}}</p>
        <p><span>性别</span>{{user.sex==1?'男':'女'}}</p>
        <p><span>党支部</span>{{user.branchName}}</p>
        <p><span>专业</span>{{user.special}}</p>
        <p><span>学历</span>{{user.education}}</p>
        <p><span>职称</span>{{user.jobRank}}</p>
        <p><span>入党时间</span>{{user.joinPartyTime}}</p>
        <p><span>当前积分</span>
          <el-tag type="gray">{{user.totalScore}}</el-tag>
         </p>
        <p><span>状态</span>{{user.disabled==0?'正常':'禁用'}}</p>

    </el-col>
  </el-row>

</template>

<script>
    export default{
       props:{
         user:{
           type:Object,

         }
       }
    }
</script>
<style lang="less" scoped>
  .user-container{
    padding: 20px;
  }
  .user-detail p{
    position: relative;
    padding-left:100px;
    min-height: 1em;
  }
  .user-detail span:first-child{
     display: inline-block;
     width: 100px;
     position: absolute;
     left:0
  }
  .user-detail span:first-child:after{
    content:'：';

  }
  .name{
    position: absolute;
    width: 100%;
    text-align: center;
    display: block;
    top: 100%;
    margin-top: 5px;
  }
    .user-header{
       width: 100px;
       height: 100px;
      border-radius: 100%;
      border:1px solid #eee;
      background: no-repeat center;
      background-size: cover;
      position: relative;
      margin-bottom: 60px;
    }
</style>

