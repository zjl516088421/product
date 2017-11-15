<template>
  <section>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-select placeholder="请选择类型" v-model="type">
            <el-option
              v-for="item in newsType"
              :key="item.type"
              :label="item.text"
              :value="item.type">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch" :loading="searchLoading">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableData" v-loading="listLoading" @selection-change="handleSelectionChange" stripe fit
              style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column prop="newsId" label="ID" width="80">
      </el-table-column>
      <el-table-column prop="title" label="标题" show-overflow-tooltip min-width="100">
      </el-table-column>
      <el-table-column prop="currentTime" label="发布时间">
      </el-table-column>
      <el-table-column  label="新闻类别">
        <template scope="scope" >
          <span v-if="scope.row.type<=newsType.length">
            {{newsType[scope.row.type].text}}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button type="info" size="small" @click="handleCarousel(scope.row)">生成轮播图</el-button>
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
    <el-dialog title="添加轮播图" size="large" v-model="carouselVisible">
        <add-carousel v-model="carousel"></add-carousel>
    </el-dialog>
  </section>
</template>

<script>
  import {getNewsList, deleteNews, allNewsType} from '../../api/api'
  import UpdateNews from './UpdateNews.vue'
  import AddCarousel from '../carousel/AddCarousel.vue'
  export default{
    data(){
      return {
        listLoading: false,
        searchLoading:false,
        tableData: [],
        total: 0,
        sels: [],
        newsType: [],
        type: '',
        page: 1,
        pagesize: 10,
        editFormVisible:false,
        carouselVisible:false,
        updateId:0,
        carousel:{}
      }
    },
    mounted(){
      this.newsType = allNewsType;
      this.getData();
    },
    components:{
      'update-news':UpdateNews,
      'add-carousel':AddCarousel
    },

    methods: {
      handleAdd(){
        this.$router.push('/addnews')
      },
      handleSearch(){
        this.page = 1;
        this.searchLoading=true;
        this.getData();
      },
      handleCarousel(row){
         this.carouselVisible=true;
         this.carousel={title:row.title,url:row.newsId};
      },
      handleEdit(index,row){
        this.editFormVisible = true;
        var self=this;
        self.updateId=row.newsId;
        setTimeout(function () {
          self.$refs.UP.show();
        })
      },
      handleDelete(index, row){
          this.deleteData(row.newsId,'您确定要删除当前新闻吗')
      },
      handleBatchRemove(){
        var ids = this.sels.map(function (item) {
          return item.newsId
        }).toString();
       this.deleteData(ids,'您确定要删除选择的新闻吗')
      },
      handleSelectionChange: function (sels) {
        this.sels = sels;
      },
      handlePageChange(val){
        this.page = val;
        this.getData();
      },
      handleUpdatedNews(){
        this.getData();
      },
      getData(){
        this.listLoading = true;
        var self = this;
        getNewsList({page: this.page, rows: this.pagesize, type: self.type}).then(function (res) {
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
          let para = {news_ids: ids};
          deleteNews(para).then(function (res) {
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
