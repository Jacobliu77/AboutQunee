<!--
 * @Author: jacob
 * @Date: 2020-11-26 10:30:02
 * @LastEditTime: 2020-11-30 12:28:54
 * @LastEditors: jacob
 * @Description:线应用场景vue文件
-->
<template>
  <div>
      <el-alert
        title="线应用场景vue文件"
        type="success"
        :closable="false" >
      </el-alert>
      <el-button type="primary" icon="el-icon-refresh-left" class="el-button" circle @click="change()"></el-button>
       <div ref="canvas2" style="background-color: #bcbcbc; width: 100%; height: 50vh;"></div>
  </div>
</template>

<script>
import Q from '@/lib/qunee-es.js';
import flow from '@/assets/flow.png'
let graph
export default {
  data () {
    return {
      flowColor: "#F00"
    }
  },
  methods: {
    change(){
      this.flowColor = '#000'
      this.creatGraph()
      graph.invalidate()
    },
    creatGraph () {
      graph = new Q.Graph(this.$refs.canvas2);
      graph.editable = true
      graph.enableRectangleSelectionByRightButton = true
    } 
  },
   mounted(){   
       function FlowingSupport(graph) {
            this.flowMap = {};
            this.graph = graph;
        }
        FlowingSupport.prototype = {
            flowMap: null,
            length: 0,
            gap: 40,
            graph: null,
            addFlowing: function (edgeOrLine, count, byPercent,flowColors) {
                var flowList = this.flowMap[edgeOrLine.id];
                if(!flowList){
                    flowList = this.flowMap[edgeOrLine.id] = [];
                    this.length++;
                }
                count = count || 1;
                while(--count >= 0){
                    var ui = new Q.ImageUI(flow);
                    ui.layoutByPath = true;
                    ui.position = {x: 0, y: 0};
                    ui.size = {width: 20};
                    ui.renderColor = flowColors;
                    flowList.push(ui);
                    flowList.byPercent = byPercent;
                    edgeOrLine.addUI(ui);
                }
            },
            removeFlowing: function(id){
                var flowList = this.flowMap[id];
                if(!flowList){
                    return;
                }
                var edgeOrLine = this.graph.getElement(id);
                if(edgeOrLine){
                    flowList.forEach(function(ui){
                        edgeOrLine.removeUI(ui);
                    })
                }
                this._doRemove(id);
            },
            _doRemove: function(id){
                delete this.flowMap[id];
                this.length--;
            },
            timer: null,
            perStep: 10,
            stop: function(){
                clearTimeout(this.timer);
            },
            start: function(){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                var offset = 0;
                var scope = this;
                scope.timer = setTimeout(function A() {
                    if (!scope.length) {
                        scope.timer = setTimeout(A, 2000);
                        offset = 0;
                        return;
                    }
                    offset += 1;
                    for(var id in scope.flowMap){
                        var ui = scope.graph.getUI(id);
                        if(!ui){
                            scope._doRemove(id);
                            continue;
                        }
                        var lineLength = ui.length;
                        if(!lineLength){
                            continue;
                        }
                        var flowList = scope.flowMap[id];
                        if(flowList.byPercent){
                            var x = offset * 2;
                            var gap = 15;
                            scope.flowMap[id].forEach(function(ui){
                                ui.position = {x: (x % 100) / 100, y: 0};
                                x += gap;
                            });
                        }else{
                            var x = offset * scope.perStep;
                            scope.flowMap[id].forEach(function(ui){
                                ui.position = {x: x % lineLength, y: 0};
                                x += scope.gap;
                            });
                        }
                        scope.graph.invalidateUI(ui);

                        var data = ui.data;
                        if(data instanceof Q.Edge){
                            if(data.getStyle(Q.Styles.EDGE_LINE_DASH)){
                                data.setStyle(Q.Styles.EDGE_LINE_DASH_OFFSET, -offset);
                            }
                        }else if(data instanceof Q.ShapeNode){
                            if(data.getStyle(Q.Styles.SHAPE_LINE_DASH)) {
                                data.setStyle(Q.Styles.SHAPE_LINE_DASH_OFFSET, -offset);
                            }
                        }
                    }
                    scope.timer = setTimeout(A, 200);
                }, 200);
            }
        } 
      this.creatGraph()
      var line2 = graph.createShapeNode("Line Open", 0, -70);
      line2.setStyle(Q.Styles.SHAPE_FILL_COLOR, null);
      line2.moveTo(-200, -100);
      line2.lineTo(100, -100);
      line2.curveTo(200, -100, 200, -50, 100, -50);

      var flowingSupport = new FlowingSupport(graph);
      flowingSupport.addFlowing(line2, 2, true, this.flowColor);

      graph.callLater(function(){
          flowingSupport.start();
      })

      function destroy(){
          flowingSupport.stop();
      }
    

   
      graph.zoomToOverview()
   }
}
</script>

<style lang="less" scoped>
  .el-button {
    margin: 20px auto;
  }
</style>