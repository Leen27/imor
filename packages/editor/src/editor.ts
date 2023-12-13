import Konva from 'konva'
import type { PluginT, PluginCoinfg } from './plugins'
import { BgGridPlugin, StateTool, SelectEntity, FilePlugin, ContextMenuPlugin } from './plugins'
import { Invoker } from './command'
import { Engine } from './engine'
import { partition } from '@cvrts/utils'

/**
 * 编辑器配置
 */
type EditorConfigT = {
  plugins: Array<PluginT | PluginCoinfg>
}

/**
 * 规则编辑器
 * @constructor
 */
export class Editor {
  engine!: Engine
  invoker: Invoker = new Invoker({})
  plugins: Array<PluginT | PluginCoinfg> = []

  constructor(private el: HTMLDivElement, configs?: EditorConfigT) {
    const { plugins = [] } = configs || {}
    this.initEngine(el)
    this.installPlugins(
      plugins.concat([BgGridPlugin(), StateTool(), SelectEntity(), FilePlugin(), ContextMenuPlugin()])
    )
  }

  initEngine(el: HTMLDivElement) {
    this.engine = new Engine(el)
    const layer = new Konva.Layer()
    this.engine.add(layer)
  }

  getContainerElement() {
    return this.el
  }

  installPlugins(plugins: Array<PluginT | PluginCoinfg> = []) {
    const [creators, configs] = partition(plugins, p => !!p.install)
    for (let i = 0; i < creators.length; i++) {
      const plugin = creators[i]
      const config = configs.filter(c => c.name === plugin.name)
      plugin.install(this.engine, this, config[0])
    }
  }

  command(commandName: string, ...args: any): Promise<any> | null {
    return this.invoker.execute(commandName, this, ...args)
  }

  async loadData(): Promise<any> {}
}
