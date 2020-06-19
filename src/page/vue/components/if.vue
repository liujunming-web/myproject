<template>
    <div>

        <!-- input框会被复用 -->
        <template v-if="show">
            <label>姓名：</label>
            <input type="text" placeholder="请看代码">
        </template>
        <template v-else>
            <label>取代：</label>
            <input type="text" placeholder="请输入内容">
        </template>

          <!-- 如果不想被复用，添加不同的标志
                1.添加v-model
                2.添加key值
           -->

        <!-- <template v-if="show">
            <label>姓名：</label>
            <input type="text" placeholder="请输入姓名" v-model="name">
        </template>
        <template v-else>
            <label>取代：</label>
            <input type="text" placeholder="请输入内容" v-model="copy">
        </template> -->


        <!-- 添加key值以区分 -->

         <!-- <template v-if="show">
            <label>姓名：</label>
            <input type="text" placeholder="请输入姓名" key="name-value">
        </template>
        <template v-else>
            <label>取代：</label>
            <input type="text" placeholder="请输入内容" v-model="copy" key="copy-value">
        </template> -->
        <el-button @click="show = !show">切换</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show:true,
            name:'',
            copy:''
        }
    },
    methods:{

    }
}
</script>