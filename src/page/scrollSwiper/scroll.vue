<template>
    <div class="wrap">
        <div ref="inner" @mouseenter="zanting" @mouseleave="jump" class="inner">
            <div class="con" v-for="(item,index) in list" :key="index">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'scroll',
    data(){
        return {
            list:[1,2,3,4,5,6,7,8],
            nums:0,
            number:5,
            switch:true,
            timer:null,

        }
    },
    mounted(){
        var _this = this;
        
        // this.addNum()
        this.timer = setInterval(this.fun,100)
        // this.$refs['inner'].onmouseenter = function(){
            
        // }
        
    },
    methods:{
        fun(){
            // console.log(this.number)
            this.nums += this.number;
            var total = 150 * this.list.length;
            if(this.nums > total - 1000){
                this.nums = 0;
                // this.$refs['inner'].style.transition = 'all 0';
                clearInterval(this.timer)
                this.timer = null;
                    this.$refs['inner'].style.transform = `translateX(-${this.nums}px)`;
                    // this.jump()
                this.timer = setInterval(this.fun,100)
                // this.$refs['inner'].style.transition = 'all .1s linear';
            }else{
                this.$refs['inner'].style.transform = `translateX(-${this.nums}px)`;

            }
        },
        zanting(){
            // console.log('进入')
            clearInterval(this.timer)
            this.timer = null;
            console.log(this.$refs.inner.offsetWidth)
        },
        jump(){
            this.timer = setInterval(this.fun,100)
        }
    }
}
</script>
<style scoped>
    .wrap {
        position: relative;
        left: 0;
        top: 0;
        border:1px solid red;
        width: 1000px;
        height: 200px;
        overflow-x:hidden;
        overflow-y:hidden;
    }
    .inner {
        display:flex;
        height:200px;
        justify-content: left;
        align-items: center;
        flex-wrap: nowrap;
        transform:translateX(-0px);
        transition:all .1s linear;
    }
    .con {
        width: 150px;
        height: 150px;
        flex: 0 0 auto;
    }
</style>