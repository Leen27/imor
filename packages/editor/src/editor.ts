import Konva from "konva";
import type { PluginT } from "./plugins";
import { BgGridPlugin } from "./plugins";

/**
 * 编辑器配置
 */
type EditorConfigT = {
  plugins: Array<PluginT>;
};

/**
 * 规则编辑器
 */
export class Editor {
  engine: Konva.Stage;
  plugins: Array<PluginT> = [];

  constructor(private el: HTMLDivElement, configs?: EditorConfigT) {
    this.engine = this.initStage(el);

    
    const addNode = (layer) => {
        var circle = new Konva.Circle({
            x: 5000 * Math.random(),
            y: 5000 * Math.random(),
            radius: 10,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
          });
      
        layer.add(circle);
      }

      var nodeCount = 0;
      var layer = new Konva.Layer();

    for(let i = 0; i < 3000; i++) {

        addNode(layer);
          nodeCount++;
          if (nodeCount >= 1000) {
            nodeCount = 0;
            this.engine.add(layer);
            layer = new Konva.Layer();
          }
    }

    // this.engine.on('mouseover mousemove dragmove', function (evt) {
    //     var node = evt.target;
    //     if (node) {
    //       // update tooltip
    //       var mousePos = node.getStage()?.getPointerPosition();
    //       tooltip.position({
    //         x: mousePos.x,
    //         y: mousePos.y - 5,
    //       });
    //       tooltip
    //         .getText()
    //         .text('node: ' + node.id() + ', color: ' + node.fill());
    //       tooltip.show();
    //     }
    //   });


    // add the layer to the  this.engine
     this.engine.add(layer);

    const { plugins = [] } = configs || {};

    this.installPlugins(plugins.concat([BgGridPlugin()]));
  }

  initStage(el: HTMLDivElement) {
    var width = el.clientWidth;
    var height = el.clientHeight;

    const stage = new Konva.Stage({
      container: el,
      width: width,
      height: height,
      draggable: true,
    });

    return stage
  }

  getContainerElement() {
    return this.el;
  }

  installPlugins(plugins: Array<PluginT> = []) {
    for (let i = 0; i < plugins.length; i++) {
      plugins[i].install(this.engine);
    }
  }
}
