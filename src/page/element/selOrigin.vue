<template>
    <div class="sel">
        <el-input v-model="msg" @input="handleCHangeInput"></el-input>
        <input type="text" @input="e => handleQueryChange(e.target.value)">
        <p>{{arr1 | showChange}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'',
            arr:['123','43','456','2432','568767','123414','58567','2342','123','43','456','2432','568767','123414','58567','2342','123','43','456','2432','568767','123414','58567','2342','123','43','456','2432','568767','123414','58567','2342'],
            arr1:[]
        }
    },
    filters:{
        showChange(val){
            // console.log('arr1',val)
            if(!val.length){
                return "无数据"
            }else{
                return val
            }
        }
    },
    mounted(){
        this.handleCHangeInput();
    },
    methods:{
        handleCHangeInput(){
            console.log(this.msg)
            this.arr1 = this.arr.filter(v => {
              
                return v.includes(this.msg)
            })
        },
        handleQueryChange(val){
            console.log(val)
        }
        
    }
}
</script>