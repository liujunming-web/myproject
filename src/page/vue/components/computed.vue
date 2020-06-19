<template>
    <div>
        <h2>computed的set和get</h2>
        <div style="width:300px;margin:0 auto;">
            <el-input v-model="num" type="number"></el-input>
            <el-input v-model="totalNum" type="number"></el-input>
        </div>
        

        <div style="width:60%;margin:20px auto;color:#bbb;">
            <p v-for="item in caption" :key="item.text">{{item.text}}</p>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:1,
            nums:10,
            caption:[
                {
                    text:'1. 简洁样式的computed只能通过计算得到当前的值，该值却不能做改变'
                },
                {
                    text:'2. 使用get和set后，get是来计算获取当前的值，set是通过改变当前的值来调整其他的值'
                },
            ]
        }
    },
    computed:{
        totalNum:{
            get(){
                return Number(this.num) + Number(this.nums)
            },
            set(v){
                this.num =  v - this.nums
            }
        },
    },
    methods:{
       
    }
}
</script>