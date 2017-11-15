<template>
  <section>
    <el-col :span="24" class="toolbar" >
      <el-form :inline="true">
        <el-form-item>
          <el-input type="text" v-model="keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch" :loading="searchLoading">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">导入用户</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableData" v-loading="listLoading" @selection-change="handleSelectionChange" stripe fit
              style="width: 100%">
      <el-table-column type="selection" width="60">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column  label="用户名" >
        <template scope="scope">
          <a href="" class="username" @click.prevent="handleInfo(scope.row)">{{scope.row.username}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="idCard" label="证件" show-overflow-tooltip min-width="100">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="totalScore" label="积分">
        <template scope="scope">
          <el-tooltip class="item" effect="dark" content="查看积分" placement="top">
            <el-tag type="gray" class="integral" @click.native="handleIntegral(scope.row.id)">{{scope.row.totalScore}}</el-tag>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template scope="scope">
          <el-button v-if="scope.row.disabled==1" size="small" type="info" @click="handleEdit(scope.row.id,0)">启用</el-button>
          <el-button v-if="scope.row.disabled==0" type="danger" size="small" @click="handleEdit(scope.row.id,1)">禁用</el-button>
          <el-button type="warn" size="small" @click="handleReset(scope.row.id)">密码重置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="info" :disabled="this.sels.length===0" @click.native="handleBatchReset">批量重置密码</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handlePageChange" :page-size="pagesize" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog title="积分列表" size="large" v-model="userIntegralVisible" :close-on-click-modal="false">
      <userintegral :userid="userid" :show="userIntegralVisible"  ref="integral"></userintegral>
    </el-dialog>
    <el-dialog title="用户信息" v-model="userInfoVisible">
      <userinfo type="large" :user="user"></userinfo>
    </el-dialog>
  </section>
</template>

<script>
  import {getUserList, setUserState,getIntegralList,importUsers,resetUserPwd} from '../../api/api'
  import {openFile} from '../../util/core'
  import UserInfo from './UserInfo'
  import UserIntegral from './UserIntegral.vue'
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
        userIntegralVisible:false,
        userInfoVisible:false,
        user:{},
        userid:'',
        keyword:''
      }
    },
    mounted(){
      this.getData();
    },
    components:{
      userinfo:UserInfo,
      userintegral:UserIntegral
    },

    methods: {
      handleAdd(){
        var input=openFile('myFile','application/vnd.ms-excel');
        var self=this;
        input.onchange=function () {
          if(input.files.length==0)
            return;
          var data=new FormData();
          data.append('myFile',input.files[0]);
          self.listloading=true;

          importUsers(data).then(function (res) {
            self.listloading=false;
            if(res.data&&res.data.code==1){
              self.$message({
                message: '操作成功',
                type: 'success'
              });
              self.getData();
            }else{
              self.$message({
                message: '操作失败',
                type: 'error'
              });
            }
          }).catch(function () {

          })
        }

      },
      handleEdit(id,status){
        var self=this;
        setUserState({user_id:id,disabled:status}).then(function (res) {
          if(res.data.code==1){
            self.$message({
              message: '操作成功',
              type: 'success'
            });
            self.getData();
          }else{
            self.$message({
              message: '操作失败',
              type: 'error'
            });
          }
        })
      },
      handleInfo(row){
        this.userInfoVisible=true;
        this.user=Object.assign({},row);
      },
      handleSearch(){
        this.getData();
      },
      handleReset(id){
        this.resetPwd(id);
      },
      handleBatchReset(){
        var ids = this.sels.map(function (item) {
          return item.id
        }).toString();
        this.resetPwd(ids);
      },
      handleSelectionChange: function (sels) {
        this.sels = sels;
      },
      handlePageChange(val){
        this.page = val;
        this.getData();
      },
      handleIntegral(uid){
        this.userIntegralVisible=true;
        this.userid=uid;
      },
      getData(){
        this.listLoading = true;
        var self = this;
        getUserList({page: this.page, rows: this.pagesize,keyword:this.keyword}).then(function (res) {
          self.listLoading = false;
          self.searchLoading=false;
          if (res.data&&res.data.code==1) {
            self.total = res.data.total;
            self.tableData = res.data.rows;
          }
        })
      },
      resetPwd(ids){
        var self=this;
        resetUserPwd({userIds:ids}).then(function (res) {
          if(res.data&&res.data.code==1){
            self.$message({
              message: '修改成功',
              type: 'success'
            });
          }else{
            self.$message({
              message: '修改失败',
              type: 'error'
            });
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../style/vars.less";
  .integral{
    cursor: pointer;
  }
  .username{
    color:@color-primary;
  }
</style>
