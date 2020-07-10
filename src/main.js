// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import VueDND from 'awe-dnd'

import Axios from 'axios'
Vue.prototype.$http = Axios
// 配置域名
Axios.defaults.baseURL = process.env.AIR_PORT
Vue.use(VueDND)

// 导出功能

import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

// echarts

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 关系图谱插件
import Vue2OrgTree from 'vue2-org-tree';
Vue.use(Vue2OrgTree)
import "vue2-org-tree/dist/style.css"

// video播放器
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)


Vue.use(ElementUI)
console.log('环境测试',process.env.AIR_PORT);

//  头部请求格式
Axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';



// 自定义指令v-color
Vue.directive('color',{
    bind:function(el, binding){ //这个function() 中还有第二个参数 binding ，这里不做介绍，在下边钩子函数参数中介绍
        console.log(el)
        console.log(binding)
        if(binding.value){
            el.style.color=binding.value;
        }else{
            el.style.color= 'aqua';
        }

    },
    update:function(el,binding,VNode,oldVnode){
      console.log('更新')
        console.log(el)
        console.log(binding)
        console.log(VNode)
        console.log(oldVnode)
        if(binding.value){
            el.style.color=binding.value;
        }else{
            el.style.color= 'aqua';
        }
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  components: { App },
  template: '<App/>'
})
// console.log("vm",vm)
