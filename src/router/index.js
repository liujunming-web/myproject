
let axios = require("axios")

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slot from '@/page/vue/slot'
import eleIndex from '@/page/element/index'
import editor from '@/page/editor/index'
import newdate from '@/page/Date/date'
import directive from '@/page/directive/index'
import drag from '@/page/draggable/index'
import draggable from '@/page/draggable/dragIndex'
import calc from '@/page/calc/jiecheng'
import brower from '@/page/brower/index'

// ------VUE----------
import vue from '@/page/vue/index'
import computed from '@/page/vue/components/computed'
import incase from '@/page/vue/components/if'
import modify from '@/page/vue/components/modify'
import vueTalk from '@/page/vue/components/vueTalk'
import talkMore from '@/page/vue/components/vueComponentMore'
import binding from '@/page/vue/components/binding'
import tree from '@/page/vue/components/tree'
import notFound from '@/page/vue/index'
// import directives from '@/page/vue/components/directive/index'

// -----------JSX-----------
import jsx from '@/page/JSX/index'

// ------------element-------------

import eleTable from '@/page/element/element-table'

Vue.use(Router)




const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    },
    {
      path: '/eleindex',
      name: 'eleindex',
      component: eleIndex
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/newdate',
      name: 'newdate',
      component: newdate
    },
    {
      path: '/directive',
      name: 'directive',
      component: directive
    },
    {
      path: '/calc',
      name: 'calc',
      component: calc
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: draggable
    },
    {
      path: '/vue',
      name: 'vue',
      component: vue
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/incase',
      name: 'incase',
      component: incase
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/vuetalk',
      name: 'vuetalk',
      component: vueTalk
    },
    {
      path: '/talkmore',
      name: 'talkmore',
      component: talkMore
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: jsx
    },
    {
      path: '/brower',
      name: 'brower',
      component: brower
    },
    {
      path: '/eletable',
      name: 'eletable',
      component: eleTable
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding
    },
    {
      path: '/tree',
      name: 'tree',
      component: tree
    },
    {
      path: '/excel',
      name: 'excel',
      component: () => import('@/page/Excel/index')
    },
    {
      path: '/pagelist',
      name: 'pagelist',
      component: () => import('@/page/element/element-list')
    },
    // 迭代器
    {
      path: '/iterator',
      name: 'iterator',
      component: () => import('@/page/es6/iterator')
    },
    {
      path:'*',
      component:() => import ("@/components/404")
    },
    //视频播放器
    {
      path:'/video',
      name:'video',
      component:() => import ("@/page/video/index")
    }, 
     //动态添加class属性
     {
      path:'/addclass',
      name:'addclass',
      component:() => import('@/page/es6/addClass')
    }, 
    // 关系图谱
    {
      path:'/relationmap',
      name:'relationmap',
      component:() => import('@/page/vue/components/relationmap')
    },
    // 关系图谱 vue-org-tree
    {
      path:'/relation',
      name:'relation',
      component:() => import('@/page/vue/components/relation')
    },

  ]
})

export default router;

