<template>
  <section>
   <!-- <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch" :loading="searchLoading">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>-->
    <el-table :data="tableData" v-loading="listLoading"  stripe fit
               style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="titleDesc" label="描述" show-overflow-tooltip min-width="100">
         <template scope="scope">
           <router-link :to="'/democracyUserList/'+scope.row.id" class="comment-name">{{scope.row.titleDesc}}</router-link >
         </template>
      </el-table-column>

      <el-table-column  label="状态" >
        <template scope="scope">
          <el-tag type="gray" v-if="scope.row.isOpen==0">
           未开启
          </el-tag>
          <el-tag type="success" v-if="scope.row.isOpen==1">
            进行中
          </el-tag>
          <el-tag type="danger" v-if="scope.row.isOpen==2">
            已结束
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="timeFormat" label="时间"  >
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button v-if="scope.row.isOpen!=2" type="info" size="small" @click="handleEdit(scope.row)">修改</el-button>
          <el-button v-if="scope.row.isOpen==0" type="success" size="small" @click="handleStatus(scope.row)">开启</el-button>
          <el-button v-if="scope.row.isOpen==1" type="danger" size="small" @click="handleStatus(scope.row)">结束</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">

      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog  title="用户列表" size="large" v-model="democracyUserListVisible" :close-on-click-modal="false">
      <usercomment :comment="comment"></usercomment>
    </el-dialog>
    <el-dialog title="修改" v-model="dialogEditVisible">
       <updatecomment :comment="comment" @updated="handleUpdated"></updatecomment>
    </el-dialog>
  </section>
</template>

<script>
  import {getCommentList,changeCommentStatus } from '../../api/api'
  import UpdateComment from './UpdateComment.vue'
  import UserComment from './DemocracyUserList.vue'
  export default{
    data(){
      return {
        democracyUserListVisible:false,
        listLoading: false,
        searchLoading:false,
        tableData: [],
        total: 0,
        page: 1,
        pagesize: 10,
        sels: [],
        dialogEditVisible:false,
        dialogUsersVisible:false,
        comment:{}
      }
    },
    mounted(){
      this.getData();
    },
    components:{
      updatecomment:UpdateComment,
      usercomment:UserComment
    },
    methods: {
      handleUsers(row){
        this.democracyUserListVisible=true;
        this.comment={id:row.id};
      },
      handleEdit(row){
        this.dialogEditVisible=true;
        this.comment={id:row.id,titleDesc:row.titleDesc,content:row.content}
      },
      handleStatus(row){
        var self=this;
         changeCommentStatus({is_open:row.isOpen,comment_id:row.id})
           .then(function (res) {
             if(res.data&&res.data.code==1){
               self.$message({
                 message: '操作成功',
                 type: 'success'
               });
               self.getData();
             }
             else{
               self.$message({
                 message: res.data.msg,
                 type: 'error'
               });
             }
         }).catch(function () {

         })
      },
      handleUpdated(){
        this.getData();
      },
      handleSelectionChange: function (sels) {
        this.sels = sels;
      },

      handlePageChange(val){
        this.page = val;
        this.getData();
      },
      getData(){
        this.listLoading = true;
        var self = this;
        getCommentList({page: this.page, rows: this.pagesize})
          .then(function (res) {
            self.listLoading = false;
            self.searchLoading=false;
            if (res.data&&res.data.code==1) {
              self.total = res.data.total;
              self.tableData = res.data.rows;
            }
          })
      },

    }
  }
</script>
<style scoped lang="less">
  @import '../../style/vars.less';
  .comment-name{
    color:@color-primary;
  }
</style>

