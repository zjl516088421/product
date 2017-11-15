<template>
  <el-row>
    <el-col :span="24">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="描述">
          <el-input v-model="comment.titleDesc"></el-input>
        </el-form-item>

        <el-form-item label="内容">

          <editor ref="myTextEditor" :fileName="'myFile'" :uploadUrl="uploadUrl" v-model="comment.content"></editor>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="handleSubmit" :loading="loading">保存</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import Editor from '../common/Editor.vue'
  import {updateComment} from '../../api/api'
  import config from '../../api/config'
  export default{
    props:{
      comment:{
        type:Object
      }
    },
    data(){
      return{
        name:'myFile',
        uploadUrl:config.uploadImage,
        loading:false,
        rules:{
        },
      }
    },
    components: {
      editor:Editor
    },
    methods:{
      /*数据提交*/
      handleSubmit(){
        this.loading=true;
        var self=this;
        var data=new FormData();
        for(var p in this.comment){
          data.append(p,this.comment[p]);
        }
        updateComment(data).then(function (res) {
          self.loading=false;
          if(res.data&&res.data.code==1){
            self.$message({
              message: '修改成功',
              type: 'success'
            });
            self.$emit('updated')
          }
          else{
            self.$message({
              message: res.data.msg,
              type: 'error'
            });
          }
        }).catch(function () {
          self.loading=false;
          self.$message({
            message: '修改失败',
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
