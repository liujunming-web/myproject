<template>
    <div style="margin-bottom:50px;">
        <h2>组件高级用法</h2>
        <div>
            <h4>大多数代码已注销</h4>
            <h3>递归组件的用法</h3>
            <!-- <div>
                <p>数字递归</p>
                <num :count="count" :max="max" inline-template>
                    <div>
                        <p>11111111111111111</p>
                        <p>11111111111111111</p>
                        <p>11111111111111111</p>
                        <p>11111111111111111</p>
                    </div>
                </num>
            </div> -->
            <!-- <div>
                <p>列表递归</p>
                <div v-for="(item,index) in list" :key="index">
                    <p>{{item.name}}</p>
                    <recursives :list="item.children" v-if="item.children && item.children.length"></recursives>
                </div>
            </div> -->

            <h3>内联模板用法</h3>
            <div>
                <p>内联模板指的是给组件添加 inline-template 特性，组件把他当作模板内容，而不是作为内容分发</p>
                <p>Inline-template components must have exactly one child element.内联模板组件必须仅具有一个子元素。</p>
            </div>

             <h3>动态组件的用法</h3>
            <div>
                <p>vue提供了一个特殊的元素 component 用来挂载不同的组件，使用is特性来选择要挂载的组件</p>
                <!-- <div>
                    <component :is="cur"  :count="count" :max="max"></component>
                </div> -->
            </div>

            <h3>异步组件的用法</h3>
            <div>
                <p>当你的工程足够大，使用的组件足够多时，是时候考虑下性能问题了，因为一开始就加载所有组件是没必要的一笔开销。</p>
                <p>vue.js允许将组件定义为一个函数工厂，动态的解析组件</p>
                <p>只在组件需要渲染的时候触发工厂函数，并且把结果缓存起来，用于后面的再次渲染</p>
            </div>

            <!-- components: {
                HomeHeader: () => import("./components/Header"), //异步组件加载方式
                HomeSwiper: () => import("./components/Swiper"),
                HomeIcons: () => import("./components/Icons"),
                HomeRecommend: () => import("./components/Recommend"),
                HomeWeekend: () => import("./components/Weekend")
            } -->
        </div>
    </div>
</template>
<script>
import num from './childMore'
import recursives from './recursive'
export default {
    components:{
        num,
        recursives
    },
    data(){
        return {
          count:1,
          max:10,
          cur:'num',
          list:[
              {
                  name:'我是1',
                  children:[
                      {
                            name:'我是子1',
                            children:[
                                {
                                    name:'我是子子1',
                                    children:[
                                        {
                                            name:'我是子子子1',
                                            children:[]
                                        }
                                    ]
                                }
                            ]
                      }
                  ]
              },
              {
                  name:'我是2',
                  children:[
                      {
                            name:'我是子2',
                            children:[
                                {
                                    name:'我是子子2',
                                    children:[]
                                }
                            ]
                      }
                  ]
              },
              {
                  name:'我是3',
                  children:[
                      {
                            name:'我是子3',
                            children:[
                                {
                                    name:'我是子子3',
                                    children:[
                                        {
                                            name:'我是子子子3',
                                            children:[
                                                {
                                                    name:'我是子子子子3',
                                                    children:[]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name:'我是子子4',
                                    children:[
                                        {
                                            name:'我是子子子4',
                                            children:[
                                                {
                                                    name:'我是子子子子4',
                                                    children:[]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                      }
                  ]
              },
          ]
        }
    },
    methods:{
      
    }
}
</script>
<style>
    h2 {
        text-align: center;
    }
    h3 {
        text-align: center;
        color:dimgrey;
        font-size:18px;
        margin-top: 40px;
    }
    h4 {
        text-align: center;
        color:red;
    }
    
</style>