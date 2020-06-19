<template>
    <div>
        <p ref='showdate' v-color='color'><span>当前日期</span><span>{{today}}</span></p>
        <p><span>今天是星期</span><span>{{week}}</span></p>
        <input type="text" v-model="color">
    </div>
</template>
<script>
var timer,i = 0;

function start(){

    timer = setInterval(function(){i++
        console.log(i++)
    },20)
    // clearInterval(timer)
    // console.log('结束之后',i)
}
// start()
export default {
    data(){
        return {
            today:'',
            week:'',
            color:'red'
        }
    },
    mounted(){
        this.getToday()
    },
    methods:{
        getToday(){

            /* date日期转换为字符串日期
                年月日的转换
            **/ 
            // 获取当前日期
            var date = new Date()
            // var date = new Date(2020, 1,1)
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            let week = date.getDay()
            // console.log(week)
            switch(week){
                case 1:
                    console.log('一')
                    this.week = '一'
                    break;
                case 2:
                    console.log('二')
                    this.week = '二'
                    break;
                case 3:
                    console.log('三')
                    this.week = '三'
                    break;
                case 4:
                    console.log('四')
                    this.week = '四'
                    break;
                case 5:
                    console.log('五')
                    this.week = '五'
                    break;
                case 6:
                    console.log('六')
                    this.week = '六'
                    break;
                case 7:
                    console.log('日')
                    this.week = '日'
                    break;
                default:
                    console.log('没有相同的')
                    break;
               
            }
            /* 字符串日期转换为dateriqi**/ 
            // 获取某一天的日期
            var date1 = new Date(2019,11,22)
            console.log(date)
            console.log(date1)
            this.today =  year + '-' + month + '-' + day
            console.log(this.today)
        }
    }
}
</script>