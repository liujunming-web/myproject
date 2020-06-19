<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <p>{{item.name}}</p>
            <recursives v-if="item.children && item.children.length" :list="item.children"></recursives>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'recursives',
    props:['list'],
    data(){
        return {

        }
    },
    mounted(){
        
    },
    methods:{

    }
}
</script>