<template>
    <div>
       <el-table
    :data="tableData"
    style="width: 100%"
    >
    <el-table-column
      prop="username"
      label="账号名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="realname"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">
    </el-table-column>
     <el-table-column
      prop="idtype"
      label="证件编码">
    </el-table-column>
  </el-table>
 
    </div>
</template>

<script>



import {mapState,mapActions} from 'vuex'

export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {

      // ------- 异步 action  操作 (一) ---------------------------
    //     this.$store.dispatch('GET_USERLIST').then(() => {
    //         this.tableData = this.userlist
    //         // console.log('fgeg',this.$store.state.userlist, )
    //     })
    // },
      // ------- 异步 action  操作 (一) ---------------------------

      this.GET_USERLIST().then(() => {
            this.tableData = this.userlist
      })
    },

     methods: {
      ...mapActions(['GET_USERLIST'])
    },


    computed: {
        ...mapState({
            userlist: state => state.userlist
        })
    },
}
</script>

<style>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
