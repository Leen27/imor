import Konva from "konva";
import type { PluginT } from "./plugins";
import { BgGridPlugin, StateTool, SelectEntity } from "./plugins";
import { Invoker } from "./command";
import { Engine } from "./engine";
import { TaskNode } from "./entity";

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
  engine!: Engine;
  plugins: Array<PluginT> = []
  invoker: Invoker = new Invoker({})

  constructor(private el: HTMLDivElement, configs?: EditorConfigT) {
    const { plugins = [] } = configs || {};
    this.initEngine(el)
    this.installPlugins(plugins.concat([BgGridPlugin(), StateTool(), SelectEntity()]));
  }

  initEngine(el: HTMLDivElement) {
    this.engine = new Engine(el)
    const layer = new Konva.Layer()
    this.engine.add(layer)

    const data = []
    
    for(let j = 0; j < 40; j++) {
      for(let i = 0; i < 40; i++) {
        data.push({
          id: 'xxxx' + 1000 * Math.random(),
          x: 3000 * Math.random(),
          y: 3000 * Math.random(),
          name: 'teset_Test' + 1000 * Math.random(),
          icon: ''
        })
      }
    }

    this.command('ADD_TASK', { config: data })
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
    return this.invoker.execute(commandName, this, ...args)
  }
}
