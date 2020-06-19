<template>
    <div>
        <p>我是一个静态文本</p>
        <p v-html={msg}></p>
        <el-button></el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'这是一条动态信息'
        }
    },
    methods:{

    }
}
</script>