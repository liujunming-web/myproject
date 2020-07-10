<template>
  <div class="yh-graph"></div>
</template>
<script>
var _POS = [
  [-1, -0.35],
  [1.0, 0.1],
  [0.72, -0.45],
  [-0.75, 0.25],
  [0.4, -0.75],
  [-0.5, -0.55],
  [0.45, 0.2],
  [-0.15, -0.66]
];
 
var _N_RADIUS = 600;
 
function _position(node, i) {
  if (i == 0) {
    node.x = 0;
    node.y = 0;
  } else {
    i = i - 1;
    var k = i % _POS.length;
    var p = _POS[k];
    var r = _N_RADIUS * (i / _POS.length + 1);
    node.x = p[0] * r;
    node.y = p[1] * r;
  }
}
 
function _create_nodes(nodes) {
  var arr = [];
  var i = 0;
  nodes.forEach(function(e) {
    var n = {};
    n.id = e.id;
    n.name = e.name;
    var s = e.size;
    n.value = s;
    n.symbolSize = s;
    if (e.image) {
      n.symbol = "image://" + e.image;
    }
    _position(n, i++);
    arr.push(n);
  });
  return arr;
}
 
function _create_links(links) {
  var arr = [];
  links.forEach(function(e) {
    var l = {};
    l.id = e.id;
    l.name = e.name;
    l.source = e.source;
    l.target = e.target;
    arr.push(l);
  });
  return arr;
}
 
function showGraph(chart, nodes, links) {
  var option = {
    series: [
      {
        name: "g1",
        type: "graph",
        animation: false,
        data: nodes,
        links: links,
        roam: false,
        focusNodeAdjacency: true,
        itemStyle: {
          normal: {
            color: "#999",
            backgroundColor: "#fff",
            borderColor: "#fff",
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          }
        },
        label: {
          show: true,
          position: "bottom",
          color: "#000",
          formatter: "{b}"
        },
        force: {
          repulsion: 10000
        },
        lineStyle: {
          type: "solid",
          color: "#666",
          curveness: 0.3,
          opacity: 0.9,
          width: 3
        },
        edgeLabel: {
          show: true,
          formatter: function(params) {
            return params.data["name"];
          },
          color: "#fff",
          borderColor: "#666",
          backgroundColor: "#666",
          borderWidth: 1,
          borderRadius: 3,
          padding: [2, 5, 2, 5]
        },
        emphasis: {
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };
  chart.setOption(option);
  chart.dispatchAction({
    type: "unfocusNodeAdjacency",
    seriesIndex: 0,
    dataIndex: 0
  });
}
 
export default {
  name: "YhGraph",
  data() {
    return {
      nodes: [],
      links: []
    };
  },
  methods: {
    onLinkClick(link) {
      this.$emit("select-link", {
        id: link.id,
        name: link.name,
        source: this.getNodeDesc(link.source),
        target: this.getNodeDesc(link.target)
      });
    },
    getNodeDesc(id) {
      var nodes = this.nodes;
      for (var i = 0; i < nodes.length; ++i) {
        var n = nodes[i];
        if (n.id == id) {
          return { id: id, name: n.name };
        }
      }
    },
    updateLinkName(id, name) {
      var links = this.links;
      for (var i = 0; i < links.length; ++i) {
        var n = links[i];
        if (n.id == id) {
          n.name = name;
          var chart = this.$chart;
          chart.clear();
          showGraph(chart, this.nodes, this.links);
        }
      }
    },
    show(g) {
      this.nodes = _create_nodes(g.nodes);
      this.links = _create_links(g.links);
      showGraph(this.$chart, this.nodes, this.links);
    }
  },
  mounted() {
    var chart = this.$echarts.init(this.$el);
    var vm = this;
    chart.on("click", function(params) {
      if (params.seriesIndex == 0 && params.dataType == "edge") {
        vm.onLinkClick(params.data);
      }
    });
    this.$chart = chart;
  }
};

</script>