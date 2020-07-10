<template>
    <div>
        <p class="text" :class="{'red':show}">我是第1元素</p>
        <p class="text" :class="yel">我是第2元素</p>
        <p class="text">我是第3元素</p>
        <p class="text">我是第4元素</p>
        <p class="text">我是第5元素</p>
        <p class="text">我是第6元素</p>
        <p class="text">我是第7元素</p>
        <p class="text">我是第8元素</p>
        <p class="text">我是第9元素</p>
        <p class="text">我是第10元素</p>

        <!-- 1.{'a':b} -- b是判断是否绑定a的标准 -->
        <!-- 2.{'a':b == 1} -- b == 1 的布尔值是判断绑定a的标准-->
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {
            show:true,
            hide:false,
            yel:'yellow'
        }
    }
}
</script>
<style>
.text {
    width: 500px;
    height: 30px;
    bordeR:1px solid red;
    font:14px/30px normal;
}
.red{
    color:red;
}
.yellow {
    color:yellow;
}
</style>