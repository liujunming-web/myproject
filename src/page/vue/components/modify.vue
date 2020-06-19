<template>
    <div>
        <!-- native修饰符是在组件上使用的 -->
        <div class="box" @click.native="consoler">
            <div class="inner">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        consoler(){
            console.log(1111)
        }
    }
}
</script>
<style scoped>
    .box {
        width: 500px;
        height: 500px;
        border:1px solid black;
        margin: 100px auto;
    }
    .inner {
        width: 80%;
        height: 80%;
        margin: 10% auto;
        background-color: #00f;
    }
</style>