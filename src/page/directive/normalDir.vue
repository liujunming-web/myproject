<template>
    <div>
        <div v-dialogDrag>
            <div class="el-dialog" style="width:300px;height:200px;border:1px solid red;">
                <div class="el-dialog__header" style="width:100%;height:40px;background:red;"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
 
    directives:{
        'dialogDrag':{
            bind(el, binding, vnode, oldVnode) {
                // console.log(el)
                const dialogHeaderEl = el.querySelector('.el-dialog__header')
                const dragDom = el.querySelector('.el-dialog')
                dialogHeaderEl.style.cursor = 'move'
                // console.log(dragDom)
                // return
                // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
                const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
                console.log(sty)
                dialogHeaderEl.onmousedown = (e) => {
                    // 鼠标按下，计算当前元素距离可视区的距离
                    const disX = e.clientX - dialogHeaderEl.offsetLeft
                    const disY = e.clientY - dialogHeaderEl.offsetTop
                
                    // 获取到的值带px 正则匹配替换
                    let styL, styT
                
                    // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
                    if (sty.left.includes('%')) {
                        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
                        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
                    } else {
                        styL = +sty.left.replace(/\px/g, '')
                        styT = +sty.top.replace(/\px/g, '')
                    }

                    document.onmousemove = function(e) {
                        // 通过事件委托，计算移动的距离
                        const l = e.clientX - disX
                        const t = e.clientY - disY
                
                        // 移动当前元素
                        dragDom.style.left = `${l + styL}px`
                        dragDom.style.top = `${t + styT}px`
                
                        // 将此时的位置传出去
                        // binding.value({x:e.pageX,y:e.pageY})
                    }
                
                    document.onmouseup = function(e) {
                        document.onmousemove = null
                        document.onmouseup = null
                    }
                }
            }
        },
    }
}
</script>