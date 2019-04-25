// ---- 引入 Vue Vuex --------
import Vue from 'vue'
import Vuex from 'vuex'

// ---- 引入 axios -----------

import axios from 'axios'
import { rejects } from 'assert';

Vue.use(Vuex)


const state ={

    userinfo:JSON.parse(localStorage.getItem('userinfo')),
    userlist:[]
}

const mutations = {

// ----------- 把用户信息存入本地存储 ---------------
    SAVE_USERINFO (state,userinfo) {
        localStorage.setItem('userinfo',JSON.stringify(userinfo))
        state.userinfo = userinfo
    },

// ----------- 异步获取用户列表信息 ---------------
    GET_USERLIST (state,userlist) {
        state.userlist = userlist
    }
}


const actions ={
// ----------- 在首页触发 GET_USERLIST -----------
    GET_USERLIST ({commit}){
        return new Promise((resolve,reject) => {
            axios.get('./api/getuserlist').then( res => {
                console.log('获取用户列表' , res.data)
                commit('GET_USERLIST',res.data)
                resolve();
            })
        })
    }
}

const getters={
    vipUsers:state => state.userlist.filter(v => v.age <= 25)
}

//------------- 创建 Vuex 仓库，并暴露出去  -----
export default  new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})