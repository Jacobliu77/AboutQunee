<!--
 * @Author: jacob
 * @Date: 2020-11-26 10:30:02
 * @LastEditTime: 2020-12-02 11:26:42
 * @LastEditors: jacob
 * @Description:点应用场景vue文件
-->
<template>
  <div>
    <el-alert
      title="点应用场景vue文件"
      type="success"
      :description="oneword"
      :closable="false" >
    </el-alert>
    <span>当前名字：{{names}}</span>
   <div ref="canvas" style="background-color: #bcbcbc; width: 100%; height: 60vh;"></div>
  </div>
</template>

<script>
// import Q from '@/lib/'
import Q from '@/lib/qunee-es.js';
import{ nameOrAll } from '@/api/home.js'

export default {
  data(){
    return{
       oneword:'',
       names:'aa'
    } 
  },
  methods:{
     async getNameOAll () {
      const { data } = await nameOrAll()
      // data = JSON.parse(data)
      this.names = data[0]['names']
    }
  },
   mounted(){
      var graph = new Q.Graph(this.$refs.canvas);
        function createGroup(name, expanded){
        expanded = expanded !== false;
        var group = graph.createGroup(name);
        group.expanded = expanded;
        var groupHandle = new Q.LabelUI(expanded ? "-" : "+");
        groupHandle.backgroundColor = "#2898E0";
        groupHandle.color = "#FFF";
        groupHandle.padding = new Q.Insets(0, 4);
        groupHandle.borderRadius = 0;
        groupHandle.position = Q.Position.RIGHT_TOP;
        groupHandle.anchorPosition = Q.Position.LEFT_TOP;
        groupHandle.type = "GroupHandle";
        groupHandle.reverseExpanded = function(evt){
            var g = this.parent.data;
            g.expanded = !g.expanded;
        }
        group.addUI(groupHandle, {
            property : "expanded",
            callback: function(value, ui){
                ui.data = value ? "-" : "+";
            }
        });
        return group;
    }
    

    graph.onclick = function(evt){
        var data = evt.getData();
        if(data instanceof Q.Group){
            var target = graph.hitTest(evt);
            if(target && target.type == "GroupHandle"){
                target.reverseExpanded();
            }
        }
    }

    var nodeA = graph.createNode("A", 50, -50);
    var nodeB = graph.createNode("B", 170, 30);
    var nodeC = graph.createNode("C", -200, 50);
    var nodeD = graph.createNode("D", -30, -130);
    var nodeE = graph.createNode("E", 50, -100);
    var nodeF = graph.createNode("F", -300, -50);

    var group1 = createGroup("G1", false);
    var group2 = createGroup("G2");
    var group3 = graph.createGroup("G3");
    var group4 = graph.createGroup("G4");

    group1.location = new Q.Point(50, -70);
    group1.addChild(nodeA);
    group1.addChild(nodeE);

    group2.addChild(group1);
    group2.addChild(nodeD);
    group2.setStyle(Q.Styles.GROUP_BACKGROUND_COLOR, Q.toColor(0xCCfcfb9b));
    group2.setStyle(Q.Styles.GROUP_BACKGROUND_GRADIENT, Q.Gradient.LINEAR_GRADIENT_HORIZONTAL);
    group2.setStyle(Q.Styles.GROUP_STROKE, 2);
    group2.setStyle(Q.Styles.GROUP_STROKE_STYLE, "#2898E0");
    group2.setStyle(Q.Styles.GROUP_STROKE_LINE_DASH, [3,2]);

    group3.addChild(group2);
    group3.addChild(nodeB);
    group3.groupType = Q.Consts.GROUP_TYPE_ELLIPSE;
    group3.setStyle(Q.Styles.GROUP_STROKE_LINE_DASH, [3,2]);
    group3.setStyle(Q.Styles.GROUP_BACKGROUND_COLOR, false);
    group4.addChild(nodeC);
    group4.addChild(nodeF);
    // group4.groupImage = graphs.group_cloud;
    group4.padding = 30;
    group4.setStyle(Q.Styles.RENDER_COLOR, "#2898E0");

    createEdge(nodeA, nodeB);
    createEdge(nodeA, nodeC);
    createEdge(nodeB, nodeC);
    createEdge(nodeC, group2);
    createEdge(nodeF, nodeC);
    createEdge(nodeF, nodeD);
    createEdge(nodeF, nodeA);
    createEdge(nodeD, nodeF);

    function createEdge(f, t){
        return graph.createEdge(f.name + ">" + t.name, f, t);
    }
    graph.zoomToOverview()
    },
    created(){
       this.getNameOAll()
    }
}
</script>

<style>

</style>