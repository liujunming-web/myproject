<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <change-num style="width:477px;margin:0 auto;"></change-num> -->
    <scroll-swiper></scroll-swiper>
    <loop-scroll></loop-scroll>
    <p class="pink">1.全局使用transition,在App.vue中，显隐形式</p>
    <p class="pink">2.针对首页使用keep-alive,详情在App.vue中有介绍</p>
  
    
    <p id='title'>{{msg}}</p>
    <div>
      <el-button @click="transgo('slot')">点击</el-button>
      <el-button @click="transgo('eleindex')">element</el-button>
      <el-button @click="transgo('newdate')">Date</el-button>
      <el-button @click="transgo('directive')">自定义命令</el-button>
      <el-button @click="console">测试nextTick</el-button>
      <el-button @click="transgo('editor')">富文本编辑器</el-button>
      <el-button @click="transgo('textscroll')">文字滚动</el-button>
      <el-button @click="transgo('svg')">SVG</el-button>
    </div>
    <div>
      <el-button v-color @click="transgo('calc')">计算</el-button>
      <el-button @click="transgo('drag')">拖拽</el-button>
      <el-button @click="transgo('draggable')">vueDraggable</el-button>
      <el-button @click="transgo('brower')">浏览器指令</el-button>
      <el-button @click="transgo('addclass')">动态添加class</el-button>
    </div>
    <div>
      <el-button @click="transgo('vue')">Vue</el-button>
    </div>
    <div>
      <el-button @click="transgo('jsx')">JSX</el-button>
      <el-button @click="transgo('excel')">导出Excel</el-button>
      <el-button @click="transgo1('excelsss')">错误路由</el-button>
    </div>
    <div>
      <el-button @click="transgo('iterator')">迭代器</el-button>
    </div>
    <div>
      <el-button @click="transgo('video')">视频播放</el-button>
    </div>
    <p>{{filterTest | filterNum}}</p>
    <p>{{filterTest1 | filterNum}}</p>
    <p>{{filterTest2 | filterNum}}</p>
    <my-button></my-button>
  </div>
</template>

<script>
let axios = require("axios")
import changeNum from '../page/numchange/changenum'
import scrollSwiper from '../page/scrollSwiper/scroll'
import loopScroll from '../page/scrollSwiper/loopScroll'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      filterTest:1,
      filterTest1:3,
      filterTest2:-1,
    }
  },
  components:{
    changeNum,
    scrollSwiper,
    loopScroll
  },
  // filter方法是将原有的数据做处理，通过不同的逻辑展示出不同的效果
  filters:{
    filterNum(val){
      if(val > 1){
        return val + "大于1"
      }else{
        return val + "小于等于1"
      }
    }
  },
  mounted(){
    this.links();
  },
  methods:{
    links(){
      axios.post('/uprotect/',{id:1,name:2,age:3}).then(res => {})
      // this.$http.post('/uprotect/').then(res => {})
    },
    transgo(val){
      this.$router.push({"name":val})
    },
    transgo1(val){
      this.$router.push({"path":val})
    },
    // $nextTick的使用是所有逻辑执行之后得到的数值，他可以写在任何位置
    // data中的数据改变，dom不一定能及时的渲染，但是在同一函数中同一个数据不能多次进行更改，否则将会使数据污染
    console(){
      this.msg = 'hello'
      var box = document.getElementById("title")
      console.log('前',this.msg)
      console.log('前标签',box.innerHTML)
      this.$nextTick(() => {
        console.log('后',this.msg)
        console.log('标签',box.innerHTML)
      })
      
      this.msg = 'world'
      console.log('中',this.msg)
      this.trans()
    },
    trans(){
      this.msg = 'change'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pink {
  color:pink;
}
div {
  margin: 20px auto;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
