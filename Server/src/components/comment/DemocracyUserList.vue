<template>
  <section>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-select @change="change" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.branch"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table  :data="tableData" v-loading="listLoading" @selection-change="handleSelectionChange" stripe fit
               style="width: 100%">
   <!--   <el-table-column type="selection" width="60">
      </el-table-column>-->
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username"  label="用户名" >
      </el-table-column>
      <!--<el-table-column prop="content" label="内容" show-overflow-tooltip min-width="100">-->
      <!--</el-table-column>-->

      <el-table-column prop="branchName" label="党支部名称">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button  type="info"  size="small" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <!--<el-button type="danger" :disabled="this.sels.length===0" @click.native="handleBatchRemove">批量删除</el-button>-->
      <!--<el-button type="danger" :disabled="this.sels.length===0" @click.native="batchAuditModelOpen">批量审核</el-button>-->
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog  title="个人总结及评论详情"  size="large" v-model="editFormVisible" :close-on-click-modal="false">
      <reportReview @updateList="updateList" :typeCountObj="typeCountObj" :summary_id="summary_id"  ></reportReview>
    </el-dialog>
  </section>
</template>

<script>
  import {getReportList,checkReport ,getBranchList,getDemocracyUserList } from '../../api/api'
  import reportReview from './CommentDetail.vue'
  export default{
    props:{
      comment:{
        type:Object,
      }
    },
    watch:{
      comment(curVal){
     this.comment_id=curVal.id;
        this.getData();
      }
    },
    data(){
      return {
        typeCountObj:{},
        summary_id:"",
        comment_id:"",
        value:"",
        batchAuditLoading:false,
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
        allState:"0",
        allReason:"",
        picList:[],
        reportId:"",
        options:[],
        branchId:"",
      }
    },
    created(){
      var self=this;
      getBranchList({}).then(function (res) {
        if(res.data&&res.data.code==1){
          self.options=res.data.rows;
          self.options.unshift({
            id:"",
            branch:"全部",
          })
        }
      })
      self.getData(self.branchId);
    },
    mounted(){
      this.comment_id=this.$route.params.commentId;
      this.getData();
    },
    components:{
      reportReview
    },

    methods: {
      change(item){
        var self = this;
        self.branchId=item;
        this.page=1;
        this.getData(item);
      },

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
      },
      submit(){
      },
      checkReport(arr,state,reason){

      },
      handleAdd(){

      },
      handleSearch(){
        this.page = 1;
        this.searchLoading=true;
        this.getData(this.brach);
      },
      handleEdit(index,row){
        this.editFormVisible = true;
        var self=this;
        self.summary_id=row.id;
        self.typeCountObj=row;
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
      getData(item){
        var self = this;
        this.listLoading = true;
        self.tableData=[];
        getDemocracyUserList({
          comment_id:self.comment_id,
          branch_id:item,
          page:self.page,
          rows:self.pagesize
        }).then(function (res) {
          self.tableData=res.data.rows;
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
