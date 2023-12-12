import Konva from "konva";
import type { PluginT } from "./plugins";
import { BgGridPlugin, StateTool, SelectEntity, FilePlugin } from "./plugins";
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
    this.installPlugins(plugins.concat([BgGridPlugin(), StateTool(), SelectEntity(), FilePlugin()]));
  }

  initEngine(el: HTMLDivElement) {
    this.engine = new Engine(el)
    const layer = new Konva.Layer()
    this.engine.add(layer)
  }

  getContainerElement() {
    return this.el;
  }

  installPlugins(plugins: Array<PluginT> = []) {
    for (let i = 0; i < plugins.length; i++) {
      plugins[i].install(this.engine, this);
    }
  }

  command(commandName: string, ...args: any): Promise<any> | null {
    return this.invoker.execute(commandName, this, ...args)
  }

  async loadData(): Promise<any> {}
}
