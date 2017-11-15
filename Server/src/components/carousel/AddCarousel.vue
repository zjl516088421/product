<template>
  <el-row>
    <el-col :span="24">
  <el-form ref="form"  label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="跳转链接">
      <el-input v-model="form.url"></el-input>
      <span class="opreate-tip">可填写页面地址，也可填写新闻id(新闻列表里)</span>
    </el-form-item>
    <el-form-item label="优先级">
      <el-input type="number" v-model="form.priority"></el-input>
      <span class="opreate-tip">值越大越,图片显示的顺序越靠前</span>
    </el-form-item>
   <!-- <el-form-item label="类型">
      <el-input  v-model="form.type"></el-input>
      <span class="opreate-tip">轮播图所在页面</span>
    </el-form-item>-->
    <el-form-item label="图片">
      <crop v-model="form.imgUrl" :width="500" :height="300"></crop>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="handleSubmit" :loading="loading">立即创建</el-button>

    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import Crop from '../common/CropUpload.vue'
  import {addCarousel} from '../../api/api'
  import config from '../../api/config'
  function T(){
     return {
       type:'0',
       title:'',
       imgUrl:'',
       url:'',
       priority:0,
     }
  }
    export default{
      data(){
        return{
          /*提交的数据*/
           form:T(),
           dataUrl:'',
           loading:false,
           name:'myFile',
           uploadUrl:config.uploadImage,
           rules:{
           },
        }
      },
      props:{
        value:{
          type:Object,
          default:null
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
          var data=new FormData();
          for(var p in this.form){
            data.append(p,this.form[p]);
          }
          addCarousel(data).then(function (res) {
            self.loading=false;
             if(res.data&&res.data.code==1){
               self.$message({
                 message: '创建成功',
                 type: 'success'
               });
               self.form=T();
             }else{
               self.$message({
                 message: res.data.msg,
                 type: 'error'
               });
             }
          }).catch(function () {
            self.loading=false;
            self.$message({
              message: '创建失败',
              type: 'error'
            });
          })
        },
      },
      mounted(){
        if(this.value){
          this.form.title=this.value.title;
          this.form.url=this.value.url;
        }
      },
      watch:{
        value(n,o){
            if(n){
              this.form.title=n.title;
              this.form.url=n.url;
            }
          }
      }
    }
</script>

<style scoped>
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
  .opreate-tip{
    color: #f7ba2a;
  }
</style>
