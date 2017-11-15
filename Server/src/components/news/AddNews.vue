<template>
  <el-row>
    <el-col :span="24">
  <el-form ref="form"  label-width="80px">
    <el-form-item label="新闻标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="新闻作者">
      <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="新闻描述">
      <el-input type="textarea" v-model="form.titleDesc"></el-input>
    </el-form-item>
    <el-form-item label="新闻类型">
      <el-select placeholder="请选择类型" v-model="form.type">
        <el-option
          v-for="item in newsType"
          :key="item.type"
          :label="item.text"
          :value="item.type">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="新闻图片">
        <crop v-model="form.pic"></crop>
    </el-form-item>
    <el-form-item label="新闻内容">
       <editor ref="myTextEditor" :fileName="'myFile'" :uploadUrl="uploadUrl" v-model="form.content"></editor>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="handleSubmit" :loading="loading">立即创建</el-button>

    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import Editor from '../common/Editor.vue'
  import {saveNews, baseUrl, allNewsType} from '../../api/api'
  import Crop from '../common/CropUpload.vue'
  import config from '../../api/config'
  function T(){
     return {
       type:'',
       title:'',
       author:'',
       titleDesc:'',
       pic:'',
       content:''
     }
  }
    export default{
      data(){
        return{
          /*提交的数据*/
           form:T(),
           loading:false,
           newsType:[],
           uploadUrl:config.uploadImage,
           rules:{
           },
        }
      },
      components: {
        editor:Editor,
        crop:Crop
      },
      mounted(){
        this.newsType=allNewsType;
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
          saveNews(data).then(function (res) {
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

      }
    }
</script>

<style>
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
</style>
