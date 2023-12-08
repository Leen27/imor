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

    var layer = new Konva.Layer();

    var circle = new Konva.Circle({
      x:  this.engine.width() / 2,
      y:  this.engine.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });

    // add the shape to the layer
    layer.add(circle);

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
