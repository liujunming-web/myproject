<template>
    <div>
        <button @click="count++">点击测试{{count}}</button>
    </div>
</template>

<script>
    export default {
        name:'MyButton',
        data(){
            return {
                count:0
            }
        }
    }
</script>

<style scoped>

</style>