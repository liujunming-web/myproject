<template>
    <div>
        <p>浏览器菜单功能</p>
        <p>11111111111111111111111111</p>
        <p>2222222222222222222222222222</p>
        <p>3333333333333333333333</p>
        <p>444444444444444444444444444444</p>
        <p>555555555555555555555555555555555555555</p>
        <p>{{total()}}</p>
        <el-button type="success" size="mini" plain>功能</el-button>
        <el-button type="success" size="mini" plain @click="selectAll">全选</el-button>
        <el-button type="success" size="mini" plain @click="copy">复制</el-button>
        <el-button type="success" size="mini" plain @click="saveAs">另存为</el-button>
        <el-button type="success" size="mini" plain @click="print">打印</el-button>
        <el-button type="success" size="mini" plain @click="open">打开</el-button>
        <el-button type="success" size="mini" plain @click="reload">重新加载</el-button>
    </div>
</template>
<script>
window.onload = function(){
    console.log(123)
}

export default {
    data(){
        return {

        }
    },
    methods:{
        total(){
            return 2
        },
        selectAll(){
            document.execCommand("selectAll")
        },
        copy(){
            document.execCommand("copy")
        },
        open(){
            document.execCommand("open")
        },
        saveAs(){
            document.execCommand('saveAs')
        },
        print(){
            // 方法1
            // document.execCommand('print')

            // 方法2
            window.print()
        },
        reload(){
            // 方法1
            // window.location.reload()

            // 方法2
            document.location.reload()
        }
    }
}
</script>