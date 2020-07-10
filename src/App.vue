<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition mode="out-in">
      <!-- keep-alive的使用必须是页面内有该组件的name，如果只在路由中有name，页面中没有，则不生效 -->
      <!-- 加上kepp-alive之后页面返回则不会重新加载,include可以使用数组添加 -->
      <!--  -->
      <keep-alive :include="keepAlive">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      transitionName:'transitionRight',
      keepAlive:['HelloWorld']
    }
  },
  beforeRouteEnter(to,from,next){
    console.log(to,from)
    if(to.name == 'newdate'){
      console.log("---------------------是的--------------------------")
      next('/excel')
    }else{
      next()
    }
  },
  watch: {
  '$route' (to, from) {
    // console.log(to)
    console.log('序列',to,from)
    // let toName = to.name

    // const toIndex = to.meta.index
    // const fromIndex = from.meta.index
    // console.log(toIndex,fromIndex)

    // this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
  }
},
mounted(){
  // console.log("我加载啦")
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.v-enter {
    opacity: 0;
}

.v-enter-to {
    opacity: 1;
}

.v-enter-active{
    transition:.3s;
}
.v-leave {
    opacity:1;
}

.v-leave-to {
    opacity:0;
}

.v-leave-active {
    transition:.3s;
}
</style>
