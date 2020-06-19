<template>
    <div>
        <el-button v-for="(item,index) in list" :key="index" @click="transgo(item.name)">{{item.title}}</el-button>
        <el-button @click="print">打印</el-button>
        <div class="content">
            <div class="box"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    title:'computed的set和get',
                    name:'computed'
                },
                {
                    title:'v-if内在含义',
                    name:'incase'
                },
                {
                    title:'修饰符',
                    name:'modify'
                },
                {
                    title:'组件通信',
                    name:'vuetalk'
                },
                {
                    title:'高级组件',
                    name:'talkmore'
                },
                {    
                    title:'双向绑定',
                    name:'binding'
                },
                {    
                    title:'树结构',
                    name:'tree'
                },
            ]
        }
    },
    methods:{
        transgo(val){
            this.$router.push({
                "name":val
            })
        },
        print(){
            window.print();
        }
    }
}
</script>
<style>
.content { 
	width: 100px; 
   	height: 100px; 
    margin:100px auto;
    transform: scale(2);
    box-sizing: border-box; 
    padding: 5px; 
    border-radius: 50%; 
    background-image: -webkit-linear-gradient(top, red 0%, blue 30%, yellow 60%, green 90%);
    background-image: -moz-linear-gradient(top, red 0%, blue 30%, yellow 60%, green 90%);
    background-image: linear-gradient(top, red 0%, blue 30%, yellow 60%, green 90%);
}
.box { 
	width:100%; 
    height:100%; 
    border-radius:50%; 
    background:#fff; 
}
</style>