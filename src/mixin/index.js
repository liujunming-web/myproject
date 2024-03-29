/*
    混入(mixin) 提供了一种非常灵活的方式，来分发VUe组件中可复用功能。一个混入对象可以包含任意组件选项。
    当组件使用混入对象时，所有混入对象的选项将被‘混合’进入该组件本身的选项
**/ 
console.log('我是mixin1')
export const myMixin = {
    data(){
        return {
            num:1
        }
    },
    create(){
        console.log('我是mixin')
    },
    methods: {
        click() {
            this.num ++;
        }
    },
}


