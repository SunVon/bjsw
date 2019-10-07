import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
import { cpus } from 'os';
Vue.use(Vuex);

const state={
    userinfo:JSON.parse(localStorage.getItem("userinfo")),
    userList:[]
}

const mutations={
    SaveUserInfo(state,userinfo){
        localStorage.setItem('userinfo',JSON.stringify(userinfo));
    
        state.userinfo=userinfo;
    },
    GetUserList(state,userlist){
        state.userinfo=userinfo;
    }
}

const actions={
    GetUserList({commit}){

        return new Promise((resolve,reject)=>{
            axios.get('/api/getuserlist').then(
                response=>{
                    commit("GetUserList",response.data);
                    resolve();
                }
            );
        });

       
    }
}

const getters={
    vipUsers:state=>state.userList.filter(v=>v.age>25)
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});