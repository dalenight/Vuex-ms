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



import {mapState,mapActions,mapGetters} from 'vuex'

export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {

      // ------- 异步 action  操作 (1) ---------------------------

    //     this.$store.dispatch('GET_USERLIST').then(() => {
    //         this.tableData = this.userlist
    //         // console.log('fgeg',this.$store.state.userlist, )
    //     })


      // ------- 异步 action  操作 (2) ---------------------------

    //   this.GET_USERLIST().then(() => {
    //         this.tableData = this.userlist.filter(v => v.age < 26)
    //   })

      // ------- 异步 action  操作 (3) ---------------------------

    this.getuserList().then(() => {
        // this.tableData = this.userlist.filter(v => v.age < 26)
        this.tableData = this.vipUsers
        
    })

    },


    methods: {

      ...mapActions({
          getuserList:'GET_USERLIST'
      })

    },
    computed: {
        ...mapGetters(['vipUsers']),
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
