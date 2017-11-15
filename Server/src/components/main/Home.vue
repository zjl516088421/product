<template>
  <el-row class="home-container">
    <el-col :span="24" class="header">
      <m-header></m-header>
    </el-col>
    <el-col :span="24" type="flex" class="main">
      <aside class="main-menu">
        <m-nav></m-nav>
      </aside>
      <section class="main-content">
          <router-view></router-view>
      </section>
    </el-col>
  </el-row>
</template>

<script>
    import Header from './MainHeader'
    import Nav from './MainNav'
    export default{
      components:{
         'm-header':Header,
         'm-nav':Nav
      }
    }
</script>

<style lang="less">
  @import "../../style/home.less";
</style>
