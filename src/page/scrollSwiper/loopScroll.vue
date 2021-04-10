<template>
   <div class="loop">
       <div class="li" v-for="(item,index) in list">{{item.title}}</div>
   </div>
</template>
<script>
export default {
    name:'loop',
    data(){
        return {
            list:[
                {title:'向上滚动 134***5610134***5610134***5610134***5610134***5610'},
                {title:'向上滚动 134***5612'},
                {title:'向上滚动 134***5613'},
                {title:'向上滚动 134***5614'},
                // {title:'向上滚动 134***5615'},
                // {title:'向上滚动 134***5616'},
                // {title:'向上滚动 134***5617'},
                // {title:'向上滚动 134***5618'},
                // {title:'向上滚动 134***5619'},
                // {title:'向上滚动 134***5615'},
                // {title:'向上滚动 134***5617'},
                // {title:'向上滚动 134***5618'},
                // {title:'向上滚动 134***5619'},
                // {title:'向上滚动 134***5615'},
                // {title:'向上滚动 134***5617'},
                // {title:'向上滚动 134***5618'},
                // {title:'向上滚动 134***5619'},
                // {title:'向上滚动 134***5615'},
            ]
        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .loop {
        display: flex;
        width: 1200px;
        margin: 0 auto;
        border:1px solid red;
        transform:translateX(-1px);
        .li {
            white-space: nowrap;
            padding-right: 20px;
        }
    }
</style>