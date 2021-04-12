<template>
    <div>
        <p>我是一个静态文本</p>
        <p v-html={msg}></p>
        <el-button></el-button>
        {{num}}
        <el-button @click="click()">num加1</el-button>
    </div>
</template>
<script>
import {myMixin} from '@/mixin/index'
export default {
    mixins:[myMixin],
    data(){
        return {
            msg:'这是一条动态信息'
        }
    },
    methods:{

    }
}
</script>