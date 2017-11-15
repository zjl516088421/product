<template>
  <div class="report">
    <!--<div v-for="item in picList">
      {{item.picUrl}}
    </div>-->
    <swiper :options="swiperOption">
      <swiper-slide class="text-center" style="position: relative " v-for="item in picList" :key="item.id" >
        <img :src="item.picUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div>
      <el-col :span="24" class="toolbar text-center" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-radio-group v-model="state">
              <el-radio label="1">通过</el-radio>
              <el-radio label="0" >不通过</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-input  autosize  placeholder="请输入理由" type="textarea" v-model="reason"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="submit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>

    </div>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {checkImpress } from '../../api/api'
  export default{
    props:{
      picListObj:{
        type:Object,
      },
      picList:{
        type:Array,
      },
      reportId:{
        type:String,
      }

    },
    data(){
      return {
        state:"1",
        reason:"",
        swiperOption: {
          pagination: '.swiper-pagination',
        }
      }
    },
    methods:{
      submit(){
        var self=this;
        checkImpress({
          arr:[this.reportId],
          accept:this.state,
          reason:this.reason
        }).then(function (res) {
          if(res.data.code){
            self.$message({
              message: res.data.msg,
              type: 'success'
            });
            self.$emit("updateList")
          }else{
            self.$message({
              message: res.data.msg,
              type: 'error'
            });
          }
          self.reason="";
        })

      }

    },
    created(){
      console.log(this.picListObj);
    },
    components:{
      swiper,swiperSlide
    },

  }

</script>
<style scoped>
  .text-center{
    text-align: center;
  }
</style>
