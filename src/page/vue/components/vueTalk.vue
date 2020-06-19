<template>
    <div>
        <h2>组件通信</h2>

        <h3 v-for="(item,index) in intro" :key="index">{{index  + 1}} . {{item.name}}</h3>
        <p>{{total}}</p>
        <p>{{parentData}}</p>
        <child-talk :transMsg="msg" @changeNum="add"></child-talk>
        <child-talks>
            <h3 slot="header">你好，我是头部插槽！！！</h3>
        </child-talks>
    </div>
</template>
<script>
import childTalk from './childTalk'
import childTalks from './childTalk1'
export default {
    components:{
        childTalk,
        childTalks
    },
    data(){
        return {
            msg:'我是父组件传递的数据',
            total:0,
            parentData:'我是父组件的数据',
            intro:[
                {
                    name:'组件的高级类型：递归组件，内联模板,动态组件,异步组件'
                },
                {
                    name:'正常父子组件通信 （props，$emit）'
                },
                {
                    name:'语法糖 （v-model）'
                },
                {
                    name:'兄弟组件/非父子组件通信（bus）'
                },
                {
                    name:'父链，子链 （$parent,$children,$refs）'
                },
                {
                    name:'组件构成：1. props  2. event触发事件  3. slot内容分发'
                },
                {
                    name:'插槽分类：普通插槽,具名插槽，作用域插槽'
                },
            ]
        }
    },
    methods:{
        add(){
            this.total += 1
        }
    }
}
</script>
<style>
    h2 {
        text-align: center;
    }
    h3 {
        text-align: center;
        color:dimgrey;
        font-size:18px;
        margin-top: 40px;
    }
</style>