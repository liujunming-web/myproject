<template>

<div>
    <!-- 上下滚动 -->
     <vue-seamless-scroll :data="listData" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>

    <!-- 左右滚动 -->
    <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
            <li v-for="item in newsList" v-text="item.title"></li>
            <li style="width:400px"></li>
        </ul>
    </vue-seamless-scroll>
</div>
   

    
</template>
<style lang="less" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .seamless-warp {
        height: 200px;
        overflow: hidden;
        margin: 100px auto;
    }
    ul,li{
        list-style: none;
    }
    .seamless-warp2 {
        overflow: hidden;
        height: 25px;
        width: 380px;
        margin: 100px auto;
        
    }
    .seamless-warp2 ul {
        width: 600px;
    }
    .seamless-warp2 ul li {
        float: left;
        margin-right: 10px;
    }
</style>
<script>
    export default {
        data () {
            return {
                newsList: [{
                    'title': 'banababa----banababa----'
                }, {
                    'title': 'A curated list of awesome things related to Vue.js'
                },{
                    'title': 'B curated list of awesome things related to Vue.js'
                },{
                    'title': 'C curated list of awesome things related to Vue.js'
                },{
                    'title': 'D curated list of awesome things related to Vue.js'
                }],
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                optionLeft () {
                    return {
                        direction: 2,
                        limitMoveNum: 4
                    }
                }
            }
        }
        
</script>
