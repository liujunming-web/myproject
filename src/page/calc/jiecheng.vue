<template>
    <div class="app">
        求阶乘：
        <el-input v-model="num"></el-input>
        <br>
        结果：{{total}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:0,
            total:0
        }
    },
    watch:{
        num(val){
            this.total =  this.jiecheng(val)
        }
    },
    methods:{
        jiecheng(val){
            if(val <= 1){
                return 1
            }
            return val * this.jiecheng(val - 1)
        }
    }
}
</script>
<style>
    .app {
       width:1000px;
       margin: 0 auto;
       border:1px solid black;
    }
</style>