import Konva from "konva";
import type { PluginT } from "./plugins";
import { BgGridPlugin, StateTool } from "./plugins";
import { Invoker } from "./command";

/**
 * 编辑器配置
 */
type EditorConfigT = {
  plugins: Array<PluginT>;
};

/**
 * 规则编辑器
 * @constructor
 */
export class Editor {
  engine: Konva.Stage;
  plugins: Array<PluginT> = []
  dragLayer: Konva.Layer = new Konva.Layer()
  invoker: Invoker = new Invoker({})

  constructor(private el: HTMLDivElement, configs?: EditorConfigT) {
    this.engine = this.initStage(el);
    const { plugins = [] } = configs || {};

    this.installPlugins(plugins.concat([BgGridPlugin(), StateTool()]));
  }

  initStage(el: HTMLDivElement) {
    const width = el.clientWidth;
    const height = el.clientHeight;
    const stage = new Konva.Stage({
      container: el,
      width: width,
      height: height,
      draggable: true,
    });

    stage.add(this.dragLayer)

    const layer = new Konva.Layer()
    stage.add(layer)
    this.command('ADD_TASK', { layer, config: {
      id: 'xxxx',
      x: 300,
      y: 300,
      name: 'teset_Test',
    }})

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

  command(commandName: string, ...args: any) {
    return this.invoker.execute(commandName, ...args)
  }
}
