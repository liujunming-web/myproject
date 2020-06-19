<template>
  <div>
    <span v-for="val in number" :key="val">{{val}}</span>
    <button @click="push">push一个数字8</button>
    <button @click="change">把数字1赋值为A(下标方式)</button>
    <button @click="changeLen">修改数组长度为2(赋值的方式)</button>
    <button @click="set">把数字1赋值为A(set方式)</button>
    <button @click="spliceLen">修改数组长度为2(splice方式)</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: [1,2,3,4,5,6,7]
    }
  },
  methods:{
    push() {
      this.number.push(8);
    },
    change() {
      this.number[0] = "A";
    },
    changeLen() {
      this.number.length = 2;
    },
    set() {
      this.$set(this.number, 0 , "A"); //VUE实例用Vue.set(this.number, 0 , "A")
    },
    spliceLen() {
      this.number.splice(2);
    }
  }
}
</script>