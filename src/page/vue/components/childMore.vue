<template>
    <div>
        <span>{{count}}</span>
        <num :count="count + 1" :max="max" v-if="count < Number(max)"></num>
    </div>
</template>
<script>
export default {
    name:'num',
    props:['count','max'],
    data(){
        return {

        }
    },
    mounted(){
        console.log(this.count,this.max)
    },
    methods:{

    }
}
</script>