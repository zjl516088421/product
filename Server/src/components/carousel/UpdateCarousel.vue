<template>
  <el-row>
    <el-col :span="24">
  <el-form ref="form"  label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="跳转链接">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <el-form-item label="优先级">
      <el-input type="number" v-model="form.priority"></el-input>
    </el-form-item>
   <!-- <el-form-item label="类型">
      <el-input  v-model="form.type"></el-input>
    </el-form-item>-->
    <el-form-item label="状态">
      <el-switch
        v-model="form.status"
        on-color="#13ce66"
        off-color="#ff4949"
        on-value="0"
        off-value="1">
      </el-switch>
    </el-form-item>
    <el-form-item label="图片">
      <crop v-model="form.imgUrl" :width="500" :height="300"></crop>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="handleSubmit" :loading="loading">立即修改</el-button>

    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import {updateCarousel} from '../../api/api'
  import config from '../../api/config'
  import Crop from '../common/CropUpload.vue'
    export default{
      props:{
        form:{
          type:Object
        },
      },
      data(){
        return{
           loading:false,
           name:'myFile',
           uploadUrl:config.uploadImage,
           status:'0',
           rules:{
           },
        }
      },
      components:{
        crop:Crop
      },
      methods:{
        /*数据提交*/
        handleSubmit(){
          this.loading=true;
          var self=this;
          updateCarousel(this.form).then(function (res) {
            self.loading=false;
             if(res.data&&res.data.code==1){
               self.$message({
                 message: '修改成功',
                 type: 'success'
               });
               self.$emit('updated')
             }
          }).catch(function () {
            self.loading=false;
            self.$message({
              message: '修改失败',
              type: 'error'
            });
          })
        },
      },
    }
</script>

<style>
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
</style>
