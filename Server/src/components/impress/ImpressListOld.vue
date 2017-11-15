<template>
  <section>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch" :loading="searchLoading">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableData" v-loading="listLoading" @selection-change="handleSelectionChange" stripe fit
              style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username" label="用户名" >
      </el-table-column>
      <el-table-column prop="content" label="内容" show-overflow-tooltip min-width="100">
      </el-table-column>
      <el-table-column prop="currentTime" label="时间">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
           <el-button  type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="danger" :disabled="this.sels.length===0" @click.native="handleBatchRemove">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog title="编辑" size="large" v-model="editFormVisible" :close-on-click-modal="false">
      <update-news ref="UP" :id="updateId" @updated="handleUpdatedNews"></update-news>
    </el-dialog>
  </section>
</template>

<script>
  import {getImpressList } from '../../api/api'

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
        updateId:0,
        type:1,
        cates:0
      }
    },
    mounted(){
      this.getData();
    },
    components:{

    },

    methods: {
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
        self.updateId=row.newsId;
        /* setTimeout(function () {
         self.$refs.UP.show();
         })*/
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

<style>
</style>
