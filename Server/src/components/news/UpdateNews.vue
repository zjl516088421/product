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
      <el-button type="primary" @click="handleSubmit" :loading="loading">立即修改</el-button>
    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import Crop from '../common/CropUpload.vue'
  import Editor from '../common/Editor.vue'
  import {updateNews,getNewsInfo,  allNewsType} from '../../api/api'
  import config from '../../api/config'
    export default{
      props:{
        id: {
          type: Number,
          default: -1,
        },
      },
      data(){
        return{
          /*提交的数据*/
           form:{
             type:'',
             title:'',
             author:'',
             titleDesc:'',
             pic:'',
             content:''
           },
           loading:false,
           newsType:[],
          name:'myFile',
          uploadUrl:config.uploadImage,
        }
      },
      components: {
        editor:Editor,
        crop:Crop
      },
      mounted(){
        this.newsType=allNewsType;
      },
      computed: {
        editor() {
          return this.$refs.myTextEditor.quillEditor;
        }
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
          updateNews(data).then(function (res) {
            self.loading=false;
             if(res.data){
               self.$message({
                 message: '修改成功',
                 type: 'success'
               });
               self.$emit('updated');
             }
          }).catch(function () {
            self.loading=false;
            self.$message({
              message: '修改失败',
              type: 'error'
            });
          })
        },
        handleAvatarSuccess(res,file,fileList){
            if(res){
              this.form.pic=res.url;
            }
        },
        show(){
          var self=this;
          getNewsInfo({newsId:this.id}).then(function (res) {
             if(res.data){
               var d=res.data.data;
               self.form.title=d.title;
               self.form.author=d.author;
               self.form.titleDesc=d.titleDesc;
               self.form.pic=d.pic;
               self.form.content=d.content;
               self.form.type=d.type;
               self.form.newsId=d.newsId;
             }
          })
        }
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
