<template>
  <section>
    <el-table :data="tableData" v-loading="listLoading" @selection-change="handleSelectionChange" stripe fit
              style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="username" label="缩略图" >
        <template scope="scope">
           <div class="small-img" :style="{backgroundImage: 'url(' + scope.row.imgUrl + ')'}"></div>
        </template>
      </el-table-column>
      <el-table-column prop="priority" label="顺序" >
      </el-table-column>
      <el-table-column prop="status" label="状态">
         <template scope="scope">
           <el-tag
             :type="scope.row.status == '0' ? 'success' : 'danger'"
             close-transition>{{scope.row.status==0?'启用':'禁用'}}</el-tag>
         </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" show-overflow-tooltip min-width="100">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
           <el-button  type="info" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
           <el-button  type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="info" @click="handleAdd">添加</el-button>
      <el-button type="danger" :disabled="this.sels.length===0" @click.native="handleBatchRemove">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog title="添加轮播图" size="small" v-model="addFormVisible">
       <addcarousel></addcarousel>
    </el-dialog>
    <el-dialog title="编辑" size="small" v-model="editFormVisible" :close-on-click-modal="false">
        <updatecarousel :form="updateData"  @updated="handleUpdated"></updatecarousel>
    </el-dialog>
  </section>
</template>

<script>
  import {getCarouselList,deleteCarousel } from '../../api/api'
  import AddCarousel from './AddCarousel'
  import UpdateCarousel from './UpdateCarousel'
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
        addFormVisible:false,
        updateData:{},
        status:'',
        type:0,

      }
    },
    mounted(){
      this.getData();
    },
    components:{
       addcarousel:AddCarousel,
       updatecarousel:UpdateCarousel
    },

    methods: {
      handleAdd(){
        this.addFormVisible=true;
      },
      handleEdit(index,row){
        this.editFormVisible = true;
        this.updateData=Object.assign({},row);
        this.updateData.status+='';
        delete this.updateData.createTime;
      },
      handleUpdated(){
        this.getData();
      },
      handleDelete(index, row){
        this.deleteData(row.id,'您确定要删除当前数据吗')
      },
      handleBatchRemove(){
        var ids = this.sels.map(function (item) {
          return item.id
        }).toString();
        this.deleteData(ids,'您确定要删除选中的多条数据吗')
      },
      handleSelectionChange: function (sels) {
        this.sels = sels;
      },
      handlePageChange(val){
        this.page = val;
        this.getData();
      },
      handleUpdatedNews(){
        this.editFormVisible=true;
      },
      getData(){
        this.listLoading = true;
        var self = this;
        getCarouselList({page: this.page, rows: this.pagesize,type:this.type})
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
          let para = {carousel_ids: ids};
          deleteCarousel(para).then(function (res) {
            self.listLoading = false;
            self.$message({
              message: '删除成功',
              type: 'success'
            });
            self.getData();
          })
        }).catch(function () {
            console.log('cancel delete')
        });

      },
    }
  }
</script>

<style scoped>
   .small-img{
     width: 50px;
     height: 30px;
     background: center no-repeat;
     background-size: cover;
   }
</style>
