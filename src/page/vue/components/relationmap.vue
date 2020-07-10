<template>
  <div class="yh-page">
    <h1>关系图演示</h1>
    <div class="desc">
      Demo源代码：
    </div>
    <div class="yh-block" style="align:top">
      <yh-graph
        ref="graph"
        style="width:500px;height:400px;display:inline-block"
        @select-link="onLinkSelect"
      ></yh-graph>
      <div class="rel-form">
        <el-form v-show="editing" :model="rel" label-width="50px" class="yh-small">
          <div style="padding-left:50px">{{rel.source}} 与 {{rel.target}}</div>
          <el-form-item label="关系">
            <el-input v-model="rel.name" size="small"></el-input>
          </el-form-item>
          <el-button class="yh-primary" @click="onSaveClick">确定</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import graph from "./components/Graph";
// import yhbutton from "../../components/comcompont/Button";
export default {
  name: "GraphDemo",
  components: {
	"yh-graph": graph
  },
  data() {
    return {
      rel: {
        id: "",
        source: "",
        target: "",
        oldName: "",
        name: ""
      },
      editing: false,
      graph: {
        nodes: [
          { id: "0", name: "客户1", size: 100, image: "/images/ic_head.png" },
          { id: "1", name: "A", size: 70 },
          { id: "2", name: "B", size: 70 },
          { id: "3", name: "C", size: 70 },
          { id: "4", name: "D", size: 70 },
          { id: "5", name: "E", size: 70 },
          { id: "6", name: "F", size: 70 },
          { id: "7", name: "G", size: 70 },
          { id: "8", name: "H", size: 70 }
        ],
        links: [
          { id: "0", name: "夫妻", source: "0", target: "1" },
          { id: "1", name: "父子", source: "0", target: "2" },
          { id: "2", name: "母子", source: "0", target: "3" },
          { id: "3", name: "父子", source: "0", target: "4" },
          { id: "4", name: "同事", source: "0", target: "5" },
          { id: "5", name: "同事", source: "0", target: "6" },
          { id: "6", name: "同事", source: "0", target: "7" },
          { id: "7", name: "同事", source: "0", target: "8" }
        ]
      }
    };
  },
  methods: {
    onLinkSelect(link) {
      var r = this.rel;
      r.id = link.id;
      r.name = link.name;
      r.oldName = link.name;
      r.source = link.source.name;
      r.target = link.target.name;
      this.editing = true;
    },
    onSaveClick() {
      var rel = this.rel;
      if (rel.oldName != rel.name) {
        this.$refs.graph.updateLinkName(rel.id, rel.name);
      }
      this.editing = false;
    }
  },
  mounted() {
    this.$refs.graph.show(this.graph);
  },
  
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.rel-form {
  width: 300px;
  height: 400px;
  display: inline-block;
  float: right;
  margin-right: 20px;
  margin-top: 20px;
}
</style>