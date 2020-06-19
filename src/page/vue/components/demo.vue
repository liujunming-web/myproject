<template>
    <div class="slot">
        <p>我是一只小猪</p>
        <slot name="body"></slot>
        <p>我是一个小猪娃</p>
        <slot name="header"></slot>
        <el-button @click="getSlot">点击</el-button>

    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        getSlot(){
            console.log(this.$slots.header)
        }
    }
}
</script>