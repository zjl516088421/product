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
    <el-table :data="tableData" v-loading="listLoading"  stripe fit
              @selection-change="handleSelectionChange"  style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username" label="用户名" >
      </el-table-column>
      <el-table-column prop="content" label="内容" show-overflow-tooltip min-width="100">
      </el-table-column>
      <el-table-column  label="跟帖" >
        <template scope="scope">
          <el-tag type="gray" style="cursor: pointer"  @click.native="handleFollow(scope.row.forumId)">{{scope.row.commentCount}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="currentTime" label="时间">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
           <el-button  type="danger" size="small" @click="handleDelete(scope.row.forumId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="danger" :disabled="this.sels.length===0" @click.native="handleBatchRemove">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog title="跟帖列表" size="large" v-model="dialogVisible" :close-on-click-modal="false">
        <followlist :forumid="forumid" :visible="dialogVisible"></followlist>
    </el-dialog>
  </section>
</template>

<script>
  import {getTopicList,deleteTopic } from '../../api/api'
  import FollowList from './FollowList.vue'
  export default{
    data(){
      return {
        listLoading: false,
        searchLoading:false,
        tableData: [],
        total: 0,
        page: 1,
        pagesize: 10,
        sels: [],
        forumid:0,
        dialogVisible:false,
      }
    },
    mounted(){
      this.getData();
    },
    components:{
      followlist:FollowList
    },

    methods: {
      handleSearch(){
        this.page = 1;
        this.searchLoading=true;
        this.getData();
      },
      handleFollow(id){
        this.dialogVisible = true;
        this.forumid=id;
      },
      handleDelete(id){
        this.deleteData(id,'您确定要删除帖子吗');
      },
      handleSelectionChange: function (sels) {
        this.sels = sels;
      },
      handleBatchRemove(){
        var ids = this.sels.map(function (item) {
          return item.forumId
        }).toString();
        this.deleteData(ids,'您确定要删除选择的帖子吗')
      },
      handlePageChange(val){
        this.page = val;
        this.getData();
      },
      getData(){
        this.listLoading = true;
        var self = this;
        getTopicList({page: this.page, rows: this.pagesize,type:this.type,cates:this.cates})
          .then(function (res) {
          self.listLoading = false;
          self.searchLoading=false;
          if (res.data&&res.data.code==1) {
            self.total = res.data.total;
            self.tableData = res.data.rows;
          }
        })
      },
      deleteData(ids,tip){
        console.log(ids);
        var self=this;
        this.$confirm(tip, '提示', {
          type: 'warning'
        }).then(function () {
          self.listLoading = true;
          let para = {forum_ids: ids};
          deleteTopic(para).then(function (res) {
            self.listLoading = false;
            self.$message({
              message: '删除成功',
              type: 'success'
            });
            self.getData();
          })
        }).catch(function () {

        });
      },
    }
  }
</script>

<style>
</style>
