<template>
    <div>
        <h3>自定义指令v-color，改变字体颜色</h3>
        <h5 v-color = "'orange'">我是局部自定义指令</h5>

        <h3>自定义指令，点击元素外部隐藏</h3>
        <el-button @click.stop="changeShow1">显示1</el-button>
        <el-button @click.stop="changeShow2">显示2</el-button>
        <div class="box">
            <div class="inner" v-show="show1" v-clickoutside="closeDiv1">111111111</div>
            <div class="inner" v-show="show2" v-clickoutside="closeDiv2">22222222222</div>
            <normal-dir></normal-dir>
            <!-- <normal-dirs></normal-dirs> -->

        </div>
    </div>
</template>

<script>
import normalDir from './normalDir'
// import normalDirs from './normalDir1'
export default {
    data(){
        return{
            show1:true,
            show2:true,
        }
    },
    components:{
        normalDir,
        // normalDirs
    },
    directives:{
        'color':{//给字体设置颜色
            bind:function(el, binding){ //这个function() 中还有第二个参数 binding ，这里不做介绍，在下边钩子函数参数中介绍
                console.log(el)
                console.log(binding)
                if(binding.value){
                    el.style.color=binding.value;
                }else{
                    el.style.color= 'aqua';
                }
            }
        },
        'clickoutside':{
            bind:function(el,binding,vnode){
                console.log(el)
                console.log('开启',binding)
                function documentHander(e){

                    if(el.contains(e.target)){
                        return false
                    }

                    if(binding.expression){
                        binding.value(e)
                    }

                }
                el.__vueClickOutside__ = documentHander;
                document.addEventListener('click',documentHander)
            },
            unbind:function(el,binding){
                console.log('销毁',binding)
                document.removeEventListener('click',el.__vueClickOutside__);
                delete el.__vueClickOutside__
            }
        }
    },
    watch:{
        show(val){
            console.log(val)
        }
    },
    methods:{
        changeShow1(){
            this.show1 = true
        },
        closeDiv1(val){
            console.log(val)
            this.show1 = false
        },
        changeShow2(){
            this.show2 = true
        },
        closeDiv2(){
            this.show2 = false
        }
    }
}
</script>
<style>
    h3 {
        margin-top: 40px;
        color:#bbb;
    }
    .box {
        width: 1000px;
        height: 600px;
        /* border:1px solid red ; */
        margin: 40px auto;
    }
    .inner {
        width: 200px;
        height: 200px;
        background-color: #0f0;
        margin: 10px auto;
    }
</style>