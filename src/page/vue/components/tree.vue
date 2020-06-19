<template>
    <div class="tree">
        <el-tree
            :data="data"
            :props="defaultProps"
            show-checkbox
            @check-change="handleCheckChange"
            @node-click="handleNodeClick">
        </el-tree>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
            label: '一级 1',
            children: [
                {
                    label: '二级 1',
                    id:1
                },{
                    label: '二级 2',
                    id:2
                },{
                    label: '二级 3',
                    id:3
                },{
                    label: '二级 4',
                    id:4
                },{
                    label: '二级 5',
                    id:5
                },
            ]
            }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
    }
  };
</script>