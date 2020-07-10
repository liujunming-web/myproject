<template>
  <div>
      <!-- horizontal   true 横向  false  纵向 -->
    <vue2-org-tree 
        :data="data" 
        :horizontal="false"
        :label-class-name="labelClassName"
        collapsable
         @on-expand="onExpand"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
        labelClassName:'bg-color-orange',
      data: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部"
              },
              {
                id: 8,
                label: "销售二部"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 9,
            label: "HR人事"
          }
        ]
      }
    };
  },
  methods: {
        toggleExpand(data, val) {
            var _this = this;
            if (Array.isArray(data)) {
                data.forEach(function(item) {
                _this.$set(item, "expand", val);
                if (item.children) {
                    _this.toggleExpand(item.children, val);
                }
                });
            } else {
                this.$set(data, "expand", val);
                if (data.children) {
                _this.toggleExpand(data.children, val);
                }
            }
        },
        collapse(list) {
            var _this = this;
            list.forEach(function(child) {
                if (child.expand) {
                child.expand = false;
                }
                child.children && _this.collapse(child.children);
            });
        },
        onExpand(e,data) {
            if ("expand" in data) {
            data.expand = !data.expand;
                if (!data.expand && data.children) {
                    this.collapse(data.children);
                }
            } else {
                this.$set(data, "expand", true);
            }
        },
  }
};
</script>
<style type="text/css">
.bg-color-orange{
    color: #fff;
    background-color: orange;
}
.org-tree-node-label {
  white-space: nowrap;
}
.bg-white {
  background-color: white;
}
.bg-orange {
  background-color: orange;
}
.bg-gold {
  background-color: gold;
}
.bg-gray {
  background-color: gray;
}
.bg-lightpink {
  background-color: lightpink;
}
.bg-chocolate {
  background-color: chocolate;
}
.bg-tomato {
  background-color: tomato;
}
</style>