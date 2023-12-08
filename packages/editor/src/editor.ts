import Konva from 'konva'
import type { PluginT } from './plugins'
import { BgGridPlugin } from './plugins'

/**
 * 编辑器配置
 */
type EditorConfigT = {
    plugins: Array<PluginT>
}

/**
 * 规则编辑器
 */
export class Editor {
    engine: Konva.Stage
    plugins: Array<PluginT> = []

    constructor(private el: HTMLDivElement, configs?: EditorConfigT) {
        var width = el.clientWidth;
        var height = el.clientHeight;
  
        this.engine = new Konva.Stage({
          container: el,
          width: width,
          height: height,
        });

        const { plugins = [] } = configs || {}

        this.installPlugins(plugins.concat([BgGridPlugin()]))
    }

    getContainerElement() {
        return this.el
    }

    installPlugins(plugins: Array<PluginT> = []) {
        for(let i = 0; i < plugins.length; i++) {
            plugins[i].install(this.engine)
        }
    }
}