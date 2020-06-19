<template>
    <div class="drag">
        <div style="margin:100px 0;float:left;" >
            <p style="border:1px solid black;font:16px/24px bold;width:200px;margin:10px;" v-for="(color,index) in colors" :key="index" v-dragging="{ item: color, list: colors, group: 'color' }">
                {{color.text}}
            </p>
            
        </div>

         <div class="color">
            <div
                class="color-item"
                :style="'background-color:' + color.bgc"
                v-for="(color,i) in colors" :key="i" v-dragging="{ item: color, list: colors, group: 'color' }"
                >
                {{color.text}}
                <!-- <el-button icon="el-icon-delete" class="btn" @click="del(index)"></el-button> -->
            </div>
            
        </div>
     
    </div>
</template>
<script>


export default {
    data(){
        return {
            colors: [{
                text: "1",
                bgc:'#F56C6C'
            }, {
                text: "2",
                bgc:'#909399'
            }, {
                text: "3",
                bgc:'#401EFF'
            }, {
                text: "4",
                bgc:'#E6A23C'
            }, {
                text: "5",
                bgc:'#E21DE6'
            }, {
                text: "6",
                bgc:'#67C23A'
            }, {
                text: "7",
                bgc:'#C0C4CC'
            }, {
                text: "8",
                bgc:'red'
            }, {
                text: "9",
                bgc:'#764B0A'
            }],
            addColors:[]
        }
    },
    mounted(){
        // console.log("123");
        // history.pushState(null, null, document.URL);
        // console.log(history);
        // window.addEventListener("popstate", function() {
        //     if(true){
        //         history.pushState(null, null, document.URL);
        //     }else{
        //         console.log("我点击了")
        //     }
        
        
        // });
    },
    methods:{
        del(val){
            this.addColors.push(this.colors[val])
            this.colors.splice(val,1)
        }
    }
}
</script>
<style>
.color {
    width: 300px;
    height: 300px;
    margin: 100px;
    float: left;
    /* border:1px solid black; */
}
.color-item {
    position: relative;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    float: left;
    line-height: 100px;
    text-align: center;
    color:white;
    font-size:24px;
}
.btn {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent !important;
    border:none;
    color:white;
}
</style>