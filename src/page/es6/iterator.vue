<template>
    <div>
        <p><span>value:{{value}}</span></p>
        <p><span>done:{{done}}</span></p>
        <el-button @click="birth">生成迭代</el-button>
        <el-button @click="conInterator()">点击切换下一个</el-button>
    </div>
</template>

<script>
export default {
    name:'iterator',
    data(){
        return {
            value:'1',
            done:'2',
            arr:[1,2,3,4,5,6],
            doo:''
        }
    },
    methods:{
        conInterator(){
            console.log(this.doo.next())
        },
        birth(){
            this.doo = this.iterator(this.arr)

        },
        iterator(val){
            var _this = this;
            let i = 0;

            return {
                next: function (){
                    var done = (i >= val.length);
                    var value = !done? val[i++] : undefined;
                    return {
                        done: done,
                        value: value
                    }
                }
            }
        }
    }
}
</script>