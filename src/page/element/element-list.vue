<template>
    <div class="list">
        <page-list :currentPage="page" :total="total" @pageInfo="getPageInfo"></page-list>
        <el-button @click="changePage">转变数据</el-button>
        <el-button @click="changeTotal">转变total</el-button>
    </div>
</template>
<script>
import pageList from './components/pagination'
export default {
    name:"list",
    components:{
        pageList
    },
    data(){
        return {
            page:1,
            total:1
        }
    },
    methods:{
        getPageInfo(val){
            console.log("我收到信息了",val)
        },
        changePage(){
            if(this.page < 3){
                this.page ++;
            }else{
                this.page = 1;
            }
        },
        changeTotal(){
            this.total += 15;
        }
    }
}
</script>