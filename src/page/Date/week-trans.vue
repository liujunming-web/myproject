<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<!-- Set render engine for 360 browser -->
	<meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- HTML5 shim for IE8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->

	<!-- <link href="__PUBLIC__/simpleboot/themes/{:C('SP_ADMIN_STYLE')}/theme.min.css" rel="stylesheet"> -->
    <link href="__PUBLIC__/simpleboot/css/simplebootadmin.css" rel="stylesheet">
    <link href="__PUBLIC__/js/artDialog/skins/default.css" rel="stylesheet" />
    <link href="__PUBLIC__/simpleboot/font-awesome/4.4.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css">
    <style>
		form .input-order{margin-bottom: 0px;padding:3px;width:40px;}
		.table-actions{margin-top: 5px; margin-bottom: 5px;padding:0px;}
		.table-list{margin-bottom: 0px;}
        
	</style>
	<!--[if IE 7]>
	<link rel="stylesheet" href="__PUBLIC__/simpleboot/font-awesome/4.4.0/css/font-awesome-ie7.min.css">
	<![endif]-->
	<script type="text/javascript">
	//全局变量
	var GV = {
	    ROOT: "__ROOT__/",
	    WEB_ROOT: "__WEB_ROOT__/",
	    JS_ROOT: "public/js/",
	    APP:'{$Think.MODULE_NAME}'/*当前应用名*/
	};
	</script>
    <script src="__PUBLIC__/js/jquery.js"></script>
    <script src="__PUBLIC__/js/wind.js"></script>
    <script src="__PUBLIC__/simpleboot/bootstrap/js/bootstrap.min.js"></script>
    <script>
    	$(function(){
    		$("[data-toggle='tooltip']").tooltip();
    	});
    </script>
<if condition="APP_DEBUG">
	<style>
		#think_page_trace_open{
			z-index:9999;
		}
	</style>
</if>
<title>QM质量平台</title>
<link rel="stylesheet" href="__PUBLIC__/vendor/bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker3.min.css"/>
<!-- <script src="__PUBLIC__/css/elementui/index213.css"></script> -->
<link rel="stylesheet" href="__PUBLIC__/css/elementui/index213.css">
<!-- <link href="__PUBLIC__/css/nav/caseNav.css" rel="stylesheet"/> -->

<script src="__PUBLIC__/js/common.js"></script>
<script src="__PUBLIC__/newjs/vue.min.js"></script>
<script src="__PUBLIC__/vendor/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.min.js"></script>
<script src="__PUBLIC__/menu/sui.nav.js" type="text/javascript" charset="utf-8"></script>
<script src="__PUBLIC__/js/elementui/index213.js"></script>
<!-- <script src="https://cdn.bootcss.com/element-ui/2.13.0/index.js"></script> -->
<!-- <script src="https://unpkg.com/element-ui/lib/index.js"></script> -->
<script src="__PUBLIC__/js/echarts/echarts.min.js"></script>
<style>
body{overflow-y: scroll;}
.box,.box *{box-sizing: border-box;-o-box-sizing: border-box;-ms-box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}

.tit{height: 120px;padding:20px 0;border-bottom: 1px solid #eee;}
.tit div{width: 1200px;height: 80px;margin:0 auto;}
.tit .xm{height: 80px;line-height: 80px;display: inline-block;vertical-align: top;font-size: 25px;color: #666;}
.tit .xm span{
    display: inline-block;
    vertical-align: top;
    color: #317eac;
    font-size: 40px;
    margin-left: 20px;
}
.tit .hea{
    display: inline-block;
    vertical-align: top;
    height: 80px;
    line-height: 80px;
    font-size: 25px;
    color: #666;
    margin-left: 80px;
}
.tit .hea span{
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
    font-size: 50px;
    color: #317eac;
}

.bi p{font-size: 50px; text-align: center; line-height: 80px;}
.bi p i{display: inline-block; font-style: normal; margin-left: 20px; width: 80px; vertical-align: top; height: 80px; border-radius: 40px;font-size: 30px;}

.detail p{font-size: 14px;width: 280px;margin:0 auto;line-height: 30px;}
.detail .el-progress{display: inline-block;width: 200px;}

.lidetail{width:100%;padding:20px;overflow: hidden;}
.lidetail li{
    list-style: none;
}
.li0 i{border:1px solid #409EFF;}
.li1 i{border:1px solid #67c23a;}
.li2 i{border:1px solid #e6a23c;}
.li3 i{border:1px solid #f56c6c;}
.Red {
    color:rgba(236, 128, 141, 1);
}
.Orange {
    color:rgba(245, 154, 35, 1);
}
.Green {
    color:rgba(112, 182, 3, 1);
}
h3 {
    margin:0;
}
.lidetail0 {
    margin-top:20px !important;
}
.el-progress-bar__outer {
    background-color: #ddd;
} 
</style>

</head>
<body id="body">    
   
    <div id="vm" style="width:1300px;margin:80px auto;">
        <el-button type="info" @click="back">返回</el-button>
        <div style="margin-top:20px;overflow: hidden;">

        <div style="border:1px solid #ccc;overflow: hidden;padding:20px;">

            <div style="overflow:hidden;">
                <h2 style="text-align:center;">{{pro_info.pro_name}}
                    <span style="display: inline-block;margin-left:15px;">风险：</span>
                    <span :class="changeShowColor(pro_info.rating)" v-html="pro_info.rating != ''?pro_info.rating:'未填'"></span>
    
                    <span style="display: inline-block;margin-left:15px;">迭代：</span>
                    <span :class="changeShowColor(pro_info.sprint_name)" v-html="pro_info.sprint_name != ''?pro_info.sprint_name:'未填'"></span>
                </h2>

                <div style="margin:40px auto 20px;">
                    <el-steps :active="3" align-center finish-status="success" process-status="finish" simple>
                        <el-step title="GR1" icon="el-icon-success" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="GR2" icon="el-icon-success" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="GR3" icon="el-icon-success" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="GR4" icon="el-icon-success" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="上线运营" icon="el-icon-success" description="这是一段很长很长很长的描述性文字"></el-step>
                      </el-steps>
                </div>
                <!-- 顶部选择框 -->
                <div style="overflow: hidden;margin-top:10px">
                    
                    <el-form :inline="true" style="float:right;">
                        
                        <el-form-item label="上次更新:">
                            <span style="color:#7F7F7F;" v-html="pro_info.update_time"></span>
                        </el-form-item>
                        <el-form-item label="当前日期:">
                            <span style="color:#7F7F7F;">{{year}} 年第 {{week}} 周</span>
                        </el-form-item>
                        <el-form-item label="日期:">
                            <el-date-picker
                                v-model="selDate"
                                type="week"
                                :picker-options="{'firstDayOfWeek': 1}"
                                @change = "changeWeek"
                                format="yyyy 第 WW 周"
                                placeholder="选择周">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button  type="primary" v-if="isConfiguration == 1" type="" class="hidden" @click="transgo">编辑</el-button>
                        </el-form-item>
                        
                    </el-form>
                </div>
            </div>
    
            <!-- 新的项目栏 -->
            <div>
                <div style="width: 100%;" v-for="(item,index) in formData">
                    <div style="width:45%;float:left;margin:0;padding:20px;">
    
                        <div id="minList" style="background-color:#F2F6FC;border-radius:12px;width: 100%;margin: 0 auto;overflow:hidden;cursor:pointer;padding-bottom:20px;border:1px solid #ddd;min-height:400px;"  @click="toDetail(index)">
                            <h3 style="padding-left: 28px;line-height:56px;background-color:#DCDFE6;" >{{item.module_name}}<span style="display: inline-block;margin-left:15px;">风险：</span><span :class="changeShowColor(item.rating)" v-html="item.rating != ''?item.rating:'未填'"></span></h3>
                            
                            <div style="width: 90%;padding:10px 2.5%; margin:0 2.5%;font-size:14px;border-bottom:1px dashed #aaa;" v-for="(citem,cindex) in item.data">
                                <p style="color:#ccc;font:16px/20px bold;margin:8px;">{{citem.check_name}}</p>
                                <div style="overflow: hidden;">
                                    <div style="width:50%;float:left;" v-for="i in 2 ">
                                        <span style="width:60px;float:left;">风险：</span>
                                        <span style="width:calc(100% - 70px);float:left;">
                                            <el-progress :percentage="changePercentage(citem.score)" :format="format" :color="showColor(citem.score)"></el-progress>
                                        </span>
                                    </div>
                                
                                </div>
                                
                            </div>
                             
                        </div>
                    </div>
                    <hr v-if="index % 2 == 1" style="width:100%;border:none;">
                </div>
            </div>
            <!-- <div>
                <div style="width: 100%;" v-for="(item,index) in formData">
                    <div style="width:45%;float:left;margin:0;padding:20px;">
    
                        <div style="background-color:#F2F6FC;border-radius:12px;width: 100%;margin: 0 auto;overflow:hidden;cursor:pointer;border:1px solid #ddd;min-height:300px;"  @click="toDetail(index)">
                            <h3 style="padding-left: 20px;line-height:56px;background-color:#DCDFE6;" >{{item.module_name}}<span style="display: inline-block;margin-left:15px;">风险：</span><span :class="changeShowColor(item.rating)" v-html="item.rating != ''?item.rating:'未填'"></span></h3>
                            <div style="width:45%;float:left;overflow: hidden;padding:8px 0;margin-left:4%;" v-for="(citem,cindex) in item.data">
                                <span style="width:100px;font-size:14px;text-align:center;float: left;padding-left: 5px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{citem.check_name}}</span>
                                <span style="width: calc(100% - 105px);float: left;">
                                    <el-progress :percentage="changePercentage(citem.score)" :format="format" :color="showColor(citem.score)"></el-progress>
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr v-if="index % 2 == 1" style="width:100%;border:none;">
                </div>
            </div> -->
        </div>
        
        <!-- 详情展示 -->
        <div style="border:1px solid #ccc;overflow: hidden;padding:20px;margin-top:40px;">
        
            <ul class="lidetail" style="width:calc(100% - 40px);">
                <li v-for="(item,index) in formData" :ref="'detail'" :class="'lidetail'+index" style="background-color:#F2F6FC;border-radius: 8px;width:(100% - 80px);overflow: hidden;border:1px solid #ddd;margin-top:60px;" v-show="item.data.length">
                        <h3 style="line-height:60px;padding-left:20px;background-color:#DCDFE6;">{{item.module_name}}</h3>
                        <div v-for='(it,index) in item.data'  class="range" style="margin-top: 20px;">
                            <div style="width: 45%;float: left;padding:20px;">
                                <!-- 进度 -->
                                <div style="overflow: hidden;margin-bottom:10px;">
                                    <span style="float: left;margin-right:20px;">{{it.check_name}}:</span>
                                    <span style="width: 380px;float: left;">
                                        <el-progress :percentage="changePercentage(it.score)" :stroke-width="10" :format="format" :color="showColor(it.score)"></el-progress>
                                    </span>
                                </div>
                                <!-- 描述信息 -->
                                <div class="description" style="overflow: hidden;">
                                    <span style="min-width:90px;float: left;">评估说明:</span>
                                    <span style="width: 70%;float: left;padding:5px;overflow:hidden;">
                                        <pre v-html="it.remark">
                                        </pre>
                                        <div v-if="it.link_url != ''">链接：<a :href="it.link_url" style="text-decoration:none;" :title="it.link_url" target="_blank">点击查看详情</a></div>
                                    </span>
                                </div>
                            </div>
                            
                            <hr v-if="index%2 == 1" style="width: 100%; border:none; ">
    
                        </div>
                        
                    </div>
                    
                </li>
            </ul>
        
        </div>
        
    </div>
    </div>
        
    <script>
        
        Date.prototype.getWeek   =   function(flag)   
        {   
            var   first   =   new   Date(this.getFullYear(),   0,   1);   
            var   n   =   parseInt("1065432".charAt(first.getDay()));   
            n   =   this.getTime()-first.getTime()-n*24*60*60*1000;   
            n   =   Math.ceil(n/(7*24*60*60*1000));   
            return   (flag==true&&first.getDay()!=1)?(n+1):n;   
        };   
        Date.prototype.format   =   function(format)   
        {   
            var   o   =   {   
                "M+"   :   this.getMonth()+1,   //month   
                "d+"   :   this.getDate(),         //day   
                "h+"   :   this.getHours(),       //hour   
                "m+"   :   this.getMinutes(),   //minute   
                "s+"   :   this.getSeconds(),   //second   
                "q+"   :   Math.floor((this.getMonth()+3)/3),     //quarter   
                "S"   :   this.getMilliseconds()   //millisecond   
            }   
            if(/(y+)/.test(format))   format=format.replace(RegExp.$1,   
                (this.getFullYear()+"").substr(4   -   RegExp.$1.length));   
            for(var   k   in   o)if(new   RegExp("("+   k   +")").test(format))   
                format   =   format.replace(RegExp.$1,   
                    RegExp.$1.length==1   ?   o[k]   :     
                        ("00"+   o[k]).substr((""+   o[k]).length));   
            return   format;   
        };   
            
        function   getFirstAndEnd(d)   
        {   
            var   w   =   d.getDay(),   n   =   24*60*60*1000;   
            var   first   =   new   Date(d.getTime()   -   parseInt("6012345".charAt(w))*n);   
            var   end   =   new   Date(d.getTime()   +   parseInt("0654321".charAt(w))*n);   
            return   {first:   first,   end:   end};   
        };
        function changeHeight(val){
            console.log('更改高度le')
            $('#minList').css('min-height',val + 'px')
        };
        var app = new Vue({
            el:'#vm',
            data(){
                return {
                    year:'xxxx',
                    originYear:'',
                    week:"xx",
                    originWeek:"",
                    selDate:'',
                    isConfiguration:0,
                    pro_info:{},
                    pro_name:'',

                    ShowDetail:true,
                    health:28,
                    formData:[],
                    data:[
                       
                    ] 
                }
            },
            mounted(){
                var aa = '<?php echo $display; ?>'
				// console.log('aaaa',aa)
                this.isConfiguration = aa
                
                // this.getUrlParam('id'),
                        this.originYear=this.getUrlParam('year'),
                        this.originWeek=this.getUrlParam('week')
                
                this.getOriginData()
                
      
            },
            watch:{
                formData(val){
                    let num = 0;
                    val.forEach(v => {
                        num += v.data.length
                    })
                    console.log('总数',num)
                    let height = num/val.length * 100
                    changeHeight(height)
                   
                }
            },
            methods:{
                // 删除链接中的amp
                delAmp(val){
                    var key="amp;";
                    let newUrl =val.replace(new RegExp(key,'g'),"");
                    // console.log('aaaaa',newUrl)
                    return newUrl
                },
                back(){
                    window.history.back();
                },
                // 改变风险显示颜色
                changeShowColor(val){
                    if(val == '低'){
                        return 'Green'
                    }else if(val == '中'){
                        return 'Orange'
                    }else if(val == '高'){
                        return 'Red'
                    }
                },
                format(percentage){
                    // console.log('aaaaaa',percentage)
                    if (percentage == 0) return '未填'
                    if(percentage < 40) return '低'
					else if (percentage < 70) return '中'
					else return '高'
                },
                changePercentage(val){
                    // console.log(val)
                    if(val == '低') return 33
					else if(val == '中') return 66
                    else if(val == '高') return 100
                    else return 0
                },
                getUrlParam (name){
                    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r!=null) return unescape(r[2]); return null;
                },
    
                /// 获取初始数据
                getOriginData(){
                    let form = {
                        pro_id:this.getUrlParam('pro_id'),
                        year:this.originYear,
                        week:this.originWeek
                    }
                    
                    var _this = this
                    $.ajax({
                        type: 'post',
                        url: "http://qm.yoozoo.com/index.php?g=apply&m=Health&a=get_pro_conf",
                        data: form,
                        dataType: 'json',
                        success: function (res) {
                            if(res.code == 0){
                                _this.year = _this.originYear
                                _this.week = _this.originWeek
                                _this.formData = res.data
                                _this.formData.forEach(v => {
                                    v.data.forEach(cv => {
                                        // console.log(cv.link_url)
                                        cv.link_url = _this.delAmp(cv.link_url)
                                    })
                                })
                                _this.pro_info = res.pro_rating
                                // console.log('转化日期',_this.changeDate(_this.year,_this.week))
                                _this.selDate = _this.changeDate(_this.year,_this.week)
                            }else{
								_this.$message.warning(res.msg)
							}
                           
                        }
                    });
                },

                changeDate (theyear,weekcount) {   
                    var   year   =   theyear;   
                    var   week   =   weekcount -1;   
                    if(year==""   ||   week=="")   return;   
                
                    var   d   =   new   Date(year,   0,   1);   
                    d.setDate(parseInt("1065432".charAt(d.getDay()))   +   week   *   7);   
                    var   fe   =   getFirstAndEnd(d);   
                    var str =  fe.first.format("yyyy-MM-dd"); 

                    // dateStrs = str.split(" ")

                    var dateStrs = str.split("-");

                    var year = parseInt(dateStrs[0], 10);

                    var month = parseInt(dateStrs[1], 10) - 1;

                    var day = parseInt(dateStrs[2], 10);
                    
                    var date =  new Date(year, month, day);
                    return date
                },
               
                transgo (){
                    location.href = 'http://qm.yoozoo.com/index.php?g=Apply&m=Health&a=edit_pro&pro_id='+this.getUrlParam('pro_id')+'&year='+this.year+'&week='+this.week
                },
                changeWeek(val){
                    let firstDay = new Date(val.getFullYear(), 0, 1)
                    let dayOfWeek = firstDay.getDay()
                    let spendDay = 1
                    if (dayOfWeek != 0) {
                    spendDay = 7 - dayOfWeek + 1
                    }
                    firstDay = new Date(val.getFullYear(), 0, 1 + spendDay)
                    let d = Math.ceil((val.valueOf() - firstDay.valueOf()) / 86400000)
                    let result = Math.ceil(d / 7)
                    this.originYear = val.getFullYear()
                    this.originWeek = result + 1 //如果使用的是默认为加2（如果将自然周设置为周一到周日则是加1）
                    // console.log(year + ' ' + week)
                    this.getOriginData()
                },
                showColor(val){
                    if(val == '低'){
                        return 'rgba(112, 182, 3, 1)'
                    }else if(val == '中'){
                        return 'rgba(245, 154, 35, 1)'
                    }else if(val == '高'){
                        return 'rgba(236, 128, 141, 1)'
                    }
                },
                toDetail(i){
                    this.ShowDetail=true;
                    setTimeout(()=>{
                        $('html').animate({scrollTop:$(this.$refs.detail[i]).offset().top},800)
                    },0)
                }
            }
        })

        function Resize(){
            let t = ($(window).height()-170)/2
            $('.contai li').height(t)
            $(".bi p").css({'margin-top':(t-80)/2+'px'})
            $('.contai li .detail').css({'padding-top':(t-200)/2+'px'})
            // $(".contai li").css({'border-bottom':'1px solid #eee'})
        }
        $(()=>{
            Resize();            
            $(window).on('resize',()=>Resize())
        })
    </script>
    <!-- <script src="__PUBLIC__/js/nav/caseNav.js"></script> -->
    <script src="__PUBLIC__/js/common/checkProId.js"></script>
</body>
</html>