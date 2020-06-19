<template>
    <div id="app">
        <demo>
            <p slot="bodys">我是父元素的插槽</p>
            <p slot="header" @click="console">我是父元素头部的插槽</p>
        </demo>
        <el-button>点击测试</el-button>
    </div>
</template>

<script>
import demo from './components/demo'
export default {
    components:{
        demo
    },
    data(){
        return {
            num:'1'
        }
    },
    methods:{
        console(){
            console.log(this.$slots.bodys)
            console.log(this.num)
        }
    }
}
</script>