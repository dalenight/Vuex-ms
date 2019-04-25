<template>
<div class="message">
    <!-- index:{{$store.state.userinfo}} -->

    <el-container style="height: 100%;">

        <el-aside width="200px">

            <el-menu :default-openeds="['1', '3']" router >
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>账号管理</template>
                <el-menu-item-group>
                <el-menu-item index="/index/userlist">账号列表</el-menu-item>
                <el-menu-item index="/index/useradd">添加账号</el-menu-item>
                <el-menu-item index="/index/passwordedt">修改密码</el-menu-item>
                </el-menu-item-group>

            </el-submenu>

            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                <el-menu-item index="/index/shophead">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
  
        <el-container>
                <h1 style="text-aline:center; background-color : #545c64; color: #ccc; padding-top:20px;">Vuex+Express 管理系统</h1>

            <el-header style="text-align: right; font-size: 12px;background-color : #545c64; color: #ccc">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px ;background-color :  #ccc"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>{{this.$store.state.userinfo.username}}</span>
            </el-header>
            
           <el-main>
           <router-view >  </router-view>
            </el-main>
        </el-container>



         
</el-container>
    
    </div>    
</template>

<script>
export default {
     data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item)
      }
    },
    
}
</script>

<style>

html, body, #app, .message{
  height: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside ,.el-menu {
    border-right: 0;
    background-color: #545c64!important;
  }
  
.el-submenu__title,.el-menu-item{
    color: #ccc;
  }



</style>
