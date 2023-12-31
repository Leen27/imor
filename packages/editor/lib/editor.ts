import Konva from 'konva'
import type { PluginT, PluginCoinfg } from './plugins'
import { BgGridPlugin, StateTool, SelectEntity, FilePlugin } from './plugins'
import { Invoker } from './command'
import { Engine } from './engine'
import { partition, Observable } from '@cvrts/utils'
import { TaskNode } from './entity'
import { EditorEvents } from './events'
/**
 * 编辑器配置
 */
type EditorConfigT = {
  plugins: Array<PluginT | PluginCoinfg>
}

/**
 * 编辑器状态数据
 */
type EditorState = {
  /**
   * 当前编辑器选中的task节点
   */
  selectedTasks: Array<TaskNode>
}

/**
 * 规则编辑器
 * @constructor
 */
export class Editor {
  state!: EditorState
  engine!: Engine
  invoker: Invoker = new Invoker({})
  plugins: Array<PluginT | PluginCoinfg> = []

  constructor(private el: HTMLDivElement, configs?: EditorConfigT) {
    const { plugins = [] } = configs || {}
    this.initEngine(el)
    this.installPlugins(
      plugins.concat([BgGridPlugin(), StateTool(), SelectEntity(), FilePlugin()])
    )
    this.initState()
  }

  initState() {
    const that = this
    that.state = Observable({
      selectedTasks: []
    }, (data: {
      action: 'set' | 'get' | 'delete',
      path: string,
      target: any,
      newValue: any,
      previousValue: any,
    }) => {
      if (data.action !== 'set') {
        return
      }

      if (data.path === 'selectedTasks') {
        that.engine.fire(EditorEvents.TASK_NODE_SELECT_CHANGE, data.newValue)
        return;
      }
    })
  }

  initEngine(el: HTMLDivElement) {
    this.engine = new Engine(el)
    const layer = new Konva.Layer()
    this.engine.add(layer)

    return this.engine
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

  async loadData(_: string): Promise<any> {}

  on(evtStr: string, handler: (...args: any) => any) {
    return this.engine.on(evtStr, handler)
  }

  fire(eventType: string, evt?: any, bubble?: boolean | undefined) {
    return this.engine.fire(eventType, evt, bubble)
  }
}
