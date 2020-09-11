<template>
<div class="parent">
    <p v-for="(item,index) in sthGiveChild" :key="index">{{item}}</p>
  <!-- <p>我是父亲, 对儿子说： {{sthGiveChild}}</p> -->
  <Child v-model="sthGiveChild"></Child>
</div>
  
</template>
<script>
import Child from './components/chilld'
export default {
    data() {
        return {
        // sthGiveChild: '给你100块'
        sthGiveChild: [1,2,3,4,5,6,7]
        };
    },
    components: {
        Child
    }
}
</script>