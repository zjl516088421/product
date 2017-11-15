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
      <el-col :span="24" class="toolbar text-center" >
        <el-badge :value="typeCountsObj.firstCount" class="item">
          <el-button size="small">优</el-button>
        </el-badge>
        <el-badge :value="typeCountsObj.secondCount" class="item">
          <el-button size="small">良</el-button>
        </el-badge>
        <el-badge :value="typeCountsObj.thirdCount" class="item">
          <el-button size="small">中</el-button>
        </el-badge>
        <el-badge :value="typeCountsObj.fourthCount" class="item">
          <el-button size="small">差</el-button>
        </el-badge>
      </el-col>

    </div>
    <div>
      <el-table :data="tableData" v-loading="listLoading"  stripe fit
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username" label="评议人" show-overflow-tooltip min-width="100">
      </el-table-column>
        <el-table-column prop="branchName" label="党支部" show-overflow-tooltip min-width="100">
      </el-table-column>

      <el-table-column  label="评分" >
        <template scope="scope">
          <el-tag type="success" v-if="scope.row.type==0">
           优
          </el-tag>
          <el-tag type="warning" v-if="scope.row.type==1">
            良
          </el-tag>
          <el-tag type="warning" v-if="scope.row.type==2">
            中
          </el-tag>
          <el-tag type="danger" v-if="scope.row.type==3">
            差
        </el-tag>
        </template>
      </el-table-column>

      </el-table>
      <el-col :span="24" class="toolbar">
        <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                       style="float:right;">
        </el-pagination>
      </el-col>
    </div>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {getReportList,checkReport,getCommentDetail} from '../../api/api'
  export default{
    props:{
      typeCountObj:{
        type:Object
      },
      summary_id:{
        type:String,
      }

    },
    data(){
      return {
        state:"1",
        reason:"",
        swiperOption: {
          pagination: '.swiper-pagination',
        },
        total:0,
        pagesize:10,
        page:1,
        picList:[],
        summaryId:"",
        tableData:[],
        typeCountsObj:{},
        listLoading:false,
      }
    },
    watch:{
      summary_id(curVal,oldVal){
        this.summaryId=curVal;
        this.typeCountsObj=this.typeCountObj;
        this.getData();
      }
    },
    mounted(){
      this.summaryId=this.summary_id;
      this.typeCountsObj=this.typeCountObj;
      this.getData();
    },
    methods:{
      handlePageChange(page){
        this.page=page;
        this.getData();
      },
      getData(){
        var self=this;
        self.listLoading=true;
        getCommentDetail({
          page:this.page,
          rows:this.pagesize,
          summary_id:this.summaryId
        }).then(function (res) {
          self.listLoading=false;
          self.picList=res.data.picList;
          self.tableData=res.data.rows;
          self.total=res.data.total;
        })
      }

    },
    created(){
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
  .item{
    margin:0 10px;
  }
</style>
