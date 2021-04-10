<template>
    <div class="svg">
        <!-- <one-circle></one-circle> -->
        <more-circle></more-circle>
    </div>
</template>
<script>
import oneCircle from './oneCircle'
import moreCircle from './moreCircle'
export default {
    name:'svg',
    components:{
        moreCircle,
        oneCircle
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    .svg {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>