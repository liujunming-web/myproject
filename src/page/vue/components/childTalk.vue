<template>
    <div style="border:1px solid black;margin-top:30px;padding:20px;">
        <p>我是子组件</p>
        <p>{{transMsg}}</p>
        <el-button @click="transToParent">点击增加1</el-button>
        <el-button @click="transToOther">传递非父子数据</el-button>
    </div>
</template>
<script>
import bus from '../js/bus'
export default {
    props:['transMsg'],
    data(){
        return {

        }
    },
    mounted(){
        
    },
    methods:{
        transToParent(){
            this.$emit('changeNum')
        },
        transToOther(){
            bus.$emit('myTransMsg','我想要传递给兄弟姐妹们信息')
        }
    }
}
</script>
<style>
   
</style>