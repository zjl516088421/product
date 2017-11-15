<template>
  <el-menu router unique-opened default-active="2" class="el-menu-vertical-demo" @select="handleselect">
    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <el-submenu :index="index+''" v-if="!item.leaf">
        <template slot="title"><i class="iconfont" :class="item.icon"></i>{{item.name}}</template>
        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                      v-if="!child.hidden"><i class="iconfont" :class="child.icon"></i>{{child.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
        :class="item.icon" class="iconfont"></i>{{item.children[0].name}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
    export default{
      methods:{
        handleselect(index,path){

        }
      }
    }
</script>

