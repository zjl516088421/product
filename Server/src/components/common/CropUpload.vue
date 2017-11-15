<template>

     <div class="avatar-uploader" >
       <div v-if="imageUrl" @click="toggleShow"  class="el-upload el-upload--text">
         <img :src="imageUrl" class="avatar">
       </div>
       <div v-if="!imageUrl" @click="toggleShow" class="el-upload el-upload--picture-card">
         <i class="el-icon-plus"></i>
       </div>

     <my-upload field="myFile"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                v-model="show"
                :width="width"
                :height="height"
                :url="uploadUrl"
                img-format="png"></my-upload>
   </div>

</template>

<script>
  import myUpload from 'vue-image-crop-upload/upload-2.vue';
  import config from '../../api/config'
    export default{
      props:{
        value:{
          type:String
        },
        width:{
          type:Number,
          default:200
        },
        height:{
          type:Number,
          default:200
        }
      },
      data(){
        return {
          imageUrl:'',
          show: false,
          name:'myFile',
          uploadUrl:config.uploadImage,
        }
      },
      mounted(){
        if(this.value){
          this.imageUrl=this.value;
        }
      },
      components: {
        'my-upload': myUpload
      },
      methods:{
        toggleShow() {
          this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field){
          this.imageUrl=imgDataUrl;
        },
        cropUploadSuccess(res, field){
          if(res){
            this.$emit('input', res.url);

          }
        },
        cropUploadFail(status, field){
        }
      },
      watch:{
        value(newv,oldv){
           this.imageUrl=newv;
        }
      }
    }
</script>

<style>
</style>
