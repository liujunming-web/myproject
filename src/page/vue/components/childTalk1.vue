<template>
    <div style="border:1px solid black;margin-top:30px;padding:20px;">
        <slot name="header">
            11111
        </slot>
        <p>我是子组件1</p>
        <p>{{msg}}</p>
        <slot>
            <div>
                <label>名称:</label>
                <el-input></el-input>
            </div>
        </slot>
        
        <el-button @click="changeData">点击更改父组件</el-button>
    </div>
</template>
<script>
import bus from '../js/bus'
export default {
    data(){
        return {
            msg:''
        }
    },
    mounted(){
        console.log(this.$parent.parentData)
        var _this = this;
        bus.$on('myTransMsg',(val) => {
            _this.msg = val + '已收到'
        })
    },
    methods:{
        changeData(){
            console.log('更改前',this.$parent.parentData)
            this.$parent.parentData = ''
            console.log('更改后',this.$parent.parentData)
        }
    }
}
</script>
<style>
   
</style>