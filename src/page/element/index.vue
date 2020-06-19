<template>
<div id="element">
    <p>element首页</p>
    <el-button>按钮</el-button>
    <el-button>表单</el-button>
    <el-button @click="transgo('eletable')">表格</el-button>
    <el-button>日期</el-button>
    <el-button>菜单</el-button>
    <el-button>分页</el-button>
    <el-button @click="transgo('pagelist')">列表</el-button>
    <el-button @click="message">message</el-button>
</div>
    
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        transgo(val){
            this.$router.push({name:val})
        },
        message(){
            this.$message.success("hello")
        }
    }
}
</script>