<template>
  <section>

    <el-table :data="tableData" v-loading="listLoading"  stripe fit
              @selection-change="handleSelectionChange"  style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username" label="用户名" >
      </el-table-column>
      <el-table-column prop="comment" label="内容" show-overflow-tooltip min-width="100">
      </el-table-column>
      <el-table-column prop="timeFormat" label="时间">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button  type="danger" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="danger" :disabled="this.sels.length===0" @click.native="handleBatchRemove">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>

  </section>
</template>

<script>
  import {getFollowList,deleteFollow } from '../../api/api'
  export default{
    props:{
      forumid:{
        type:String
      },
      visible:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        listLoading: false,
        searchLoading:false,
        tableData: [],
        total: 0,
        page: 1,
        pagesize: 10,
        sels: [],
      }
    },
    mounted(){
      this.getData();
    },

    methods: {
      handleSearch(){
        this.page = 1;
        this.searchLoading=true;
        this.getData();
      },
      handleDelete(id){
        this.deleteData(id,'您确定要删除帖子吗');
      },
      handleSelectionChange: function (sels) {
        this.sels = sels;
      },
      handleBatchRemove(){
        var ids = this.sels.map(function (item) {
          return item.id
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
        getFollowList({page: this.page, rows: this.pagesize,forum_id:this.forumid})
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

        var self=this;
        this.$confirm(tip, '提示', {
          type: 'warning'
        }).then(function () {
          self.listLoading = true;
          let para = {comment_ids: ids};
          deleteFollow(para).then(function (res) {
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
    },
    watch:{
      visible(a,b){
        if(a){
          this.page=1;
          this.total=0;
          this.getData();
        }
      }
    }
  }
</script>

