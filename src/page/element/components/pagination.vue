<template>
    <div class="pagination">
        <el-pagination
            :hide-on-single-page="pageList.total == 0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageList.currentPage"
            :page-sizes="pageSizes"
            :page-size="pageList.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageList.total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    props:["currentPage","total"],
    data(){
        return {
            pageSizes:[10,20,30,40],
            pageList:{
                pageSize:10,
                currentPage:1,
                total:0
            }
        }
    },
    watch:{
        currentPage(val){
            console.log("我是子元素curPage，我改变啦",val)
            this.pageList.currentPage = val;
        },
        total(val){
            console.log("我是子元素total，我改变啦",val)
            this.pageList.total = val;
        }
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageList.pageSize = val;
            this.$emit('pageInfo',this.pageList)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageList.currentPage = val;
            this.$emit('pageInfo',this.pageList)
        }
    }
}
</script>