<template>
  <section>
    <!--<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch" :loading="searchLoading">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>-->
    <el-table :data="tableData" v-loading="listLoading" @selection-change="handleSelectionChange" stripe fit
              style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username" label="用户名" >
      </el-table-column>
      <!--<el-table-column prop="content" label="内容" show-overflow-tooltip min-width="100">-->
      <!--</el-table-column>-->
      <el-table-column prop="status" label="状态">
        <template scope="scope">
          <el-tag
            :type="scope.row.type==0?'gray':(scope.row.type==1?'success':'danger')"
            close-transition>{{scope.row.type==0?"未审核":(scope.row.type==1?"通过":"未通过")}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="currentTime" label="时间">
      </el-table-column>
      <el-table-column prop="reason" label="理由">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button  type="info" size="small" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <!--<el-button type="danger" :disabled="this.sels.length===0" @click.native="handleBatchRemove">批量删除</el-button>-->
      <el-button type="danger" :disabled="this.sels.length===0" @click.native="batchAuditModelOpen">批量审核</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog title="审核" size="large" v-model="editFormVisible" :close-on-click-modal="false">
      <ImpressReview @updateList="updateList" :reportId="reportId" :picList="picList" ></ImpressReview>
    </el-dialog>
    <el-dialog title="批量审核" size="large"  v-model="batchAuditModel" :close-on-click-modal="false">
      <el-col :span="24" >
        <el-form >

          <el-form-item>
            <el-radio-group v-model="allState">
              <el-radio label="1">通过</el-radio>
              <el-radio label="0" >不通过</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :span="20">
            <el-input  autosize  placeholder="请输入理由" type="textarea" v-model="allReason"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click.native="handleBatchAudit ">批量审核</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-dialog>
  </section>
</template>

<script>
  import {getImpressList ,checkImpress} from '../../api/api'
  import ImpressReview from './ImpressReview.vue'
  export default{
    data(){
      return {
        listLoading: false,
        searchLoading:false,
        tableData: [],
        total: 0,
        sels: [],
        page: 1,
        pagesize: 10,
        editFormVisible:false,
        batchAuditModel:false,
        updateId:0,
        type:1,
        cates:0,
        allState:"1",
        allReportId:[],
        allReason:"",
        picList:[],
        reportId:"",

      }
    },
    mounted(){
      this.getData();
    },
    components:{
      ImpressReview

    },

    methods: {
      batchAuditModelOpen(){
        this.batchAuditModel=true;
      },
      updateList(){
        this.editFormVisible=false;
        this.getData();
      },
      handleBatchAudit(){
        var ids=[]
        this.sels.map(function (item) {
          ids.push(item.id);
        })
        this.checkReport(ids,this.allState,this.allReason);
      },
      submit(){
        this.checkReport([this.reportId],this.state,this.reason);
      },
      checkReport(arr,state,reason){
        var self=this;
        checkImpress({
          arr:arr,
          accept:state,
          reason:reason
        }).then(function (res) {
          if(res.data&&res.data.code==1){
            self.$message({
              message: res.data.msg,
              type: 'success'
            });
            self.batchAuditModel=false;
            self.allReason="";
            self.getData();
          }else{
            self.$message({
              message: res.data.msg,
              type: 'error'
            });
          }
          self.reason="";
        })

      },
      handleAdd(){
      },
      handleSearch(){
        this.page = 1;
        this.searchLoading=true;
        this.getData();
      },
      handleEdit(index,row){
        this.editFormVisible = true;
        var self=this;
        self.reportId=row.id;
        self.picListObj={};
        self.picListObj=row;
        self.picList=row.picList;

      },
      handleDelete(index, row){

      },
      handleBatchRemove(){

      },
      handleSelectionChange: function (sels) {
        this.sels = sels;

      },
      handlePageChange(val){
        this.page = val;
        this.getData();
      },
      handleUpdatedNews(){
        //this.getData();
      },
      getData(){
        this.listLoading = true;
        var self = this;
        self.tableData=[];
        getImpressList({page: this.page, rows: this.pagesize,type:this.type,cates:this.cates})
          .then(function (res) {
            self.listLoading = false;
            self.searchLoading=false;
            if (res.data) {
              self.total = res.data.total;
              self.tableData = res.data.rows;
            }
          })
      },
      deleteData(ids){

      },
    }
  }
</script>

<style scoped>
  .text-center{
    text-align: center;
  }
</style>
