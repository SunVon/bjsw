<template>
    <div>
xdeeee
    </div>
</template>
<script>

import{mapState,mapActions, mapGetters} from 'vuex';

export default {
  name:'userlist',
    data(){
        return {
            tableData:[]
        }
    },
    created(){
        // this.$store.dispatch('GetUserList').then(()=>{
        //     this.tableData=this.userList;
        // })

        this.getUserList().then(
            ()=>{
                // this.newUserlist= this.userlist.filter(v=>v.age>25)
                // this.tableData=this.userList;
                // this.tableData=this.$store.getters.vipUsers;
                this.tableData=this.vipUsers;

            }
        );
    },
    methods:{
        // ...mapActions(['GetUserList']),
        ...mapActions({
            getUserList:'GetUserList'
        })
    },
    computed:{
        ...mapGetters(['vipUsers']),
        ...mapState({
            userList:state=>state.userList
        })
    }

}
</script>
<style lang='scss' scoped>

</style>