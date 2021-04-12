<template>
    <div>
        <div v-for="(item,index) in list" :key="item +''+index">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        name:'MyList',
        props:{
            list:{
                type:Array,
                default:[1,2,3,4]
            }
        }
    }
</script>

<style scoped>

</style>