<template>
<div class="child">
  <p>我是儿子，父亲对我说： {{receive}}</p>
  <el-button @click="returnBackFn">添加</el-button>
</div>
</template>
<script>
export default {
  props: {
    gives: Array
  },
  model: {
    prop: 'gives',
    event: 'returnBack'
  },
  data(){
      return {
          receive:[]
      }
  },
  mounted(){
      this.receive = this.gives
  },
  methods: {
    returnBackFn() {
        this.receive.push(this.receive.length + 1)
      this.$emit('returnBack', this.receive);
    }
  }
}
</script>