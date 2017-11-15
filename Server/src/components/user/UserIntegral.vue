<template>
  <section>
    <el-table :data="tableData" v-loading="listLoading" stripe fit>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="typeName" label="积分途径"></el-table-column>
      <el-table-column prop="singleDesc" label="增量">
        <template scope="scope">
          <el-tag type="danger" class="integral" >+{{scope.row.totalScore}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="timeFormat" label="时间"></el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
  </section>

</template>

<script>
    import {getIntegralList} from '../../api/api'
    export default{
      props:{
        userid:{
          type:Number,
        },
        show:{
          type:Boolean,
          default:false
        }
      },
      data(){
        return {
          listLoading: false,
          tableData: [],
          total: 0,
          page: 1,
          pagesize: 10,
        }
      },
      mounted(){
        this.getData();
      },
      methods:{
        handlePageChange(val){
          this.page = val;
          this.getData();
        },
        getData(){
          this.listLoading = true;
          var self = this;
          getIntegralList({page: this.page, rows: this.pagesize,user_id:this.userid}).then(function (res) {
            self.listLoading = false;
            self.searchLoading=false;
            if (res.data&&res.data.code==1) {
              self.total = res.data.total;
              self.tableData = res.data.rows;
            }
          })
        }
      },
      watch:{
        show(a,b){
          if(a){
            this.page=1;
            this.total=0;
            this.getData();
          }
        }
      }
    }
</script>
