<template>
    <div>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>用户{{realname}}信息卡</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div  class="text item">
            用户账号:{{userinfo.username}}
        </div>
        <div  class="text item">
            用户密码:{{userinfo.password}}
        </div>
        <div  class="text item">
            真实姓名:{{userinfo.realname}}
        </div>
        <div  class="text item">
            证件号码:{{userinfo.idType}}
        </div>
        </el-card>
    </div>
</template>

<script>
// ------- 引入 mapState 函数 -----------

import {mapState} from 'vuex'

export default {
    data(){
        return{

        }
    },
    created() {
        
    },

    computed: {
        realname(){
            return this.$store.state.userinfo.realname
        },

        // 辅助函数，获取state的数据
        ...mapState({
            userinfo : state => state.userinfo
        })
    },

}
</script>

<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
