<template>
    <div class="svg">
        <div id="container" style="position: relative; margin: 550px 0 0 50px;">   
            <svg style="position: absolute;" width="400" height="280">   
            <defs>   
            <mask id="mask3">   
            <rect x="0" y="0" width="100%" height="100%" style="stroke:none; fill: #ccc"></rect>   
            <circle id="circle1" cx="100" cy="100" r="50" style="fill: #000" />   
            </mask>   
            </defs>   
            <rect x="0" y="0" width="100%" height="100%" style="stroke: none; fill: #ccc; mask: url(#mask3)"></rect>   
            </svg>   
            <img src="http://img6.cache.netease.com/cnews/2014/11/3/20141103100737855b7.jpg" />   
        </div>
    </div>
</template>
<script>
export default {
    name:'svg',
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
   
</style>