import type { Engine } from '../engine'
import type { PluginT } from './plugin'
import { getTaskNode } from '../utils/node'
import { MouseButton } from '@cvrts/shared/types'

export interface MenuItem {
  key: string
  text: string
  icon?: string
  onSelect?: (key: string) => void
  children?: Array<MenuItem>
}

export default (): PluginT => ({
  name: 'context-menu',

  install(engine: Engine, _, config?: {
    menues: MenuItem[]
  }): void {
    const content = engine.domContainer
    const contextMenu = document.createElement('div')
    contextMenu.innerHTML = `
      <div id="cvrts-context-menu" class="w-[100px] h-[200px] b-[1px] b-dark absolute left-0 top-0 z-99 bg-[#eee] transform translate-x-[-999px]">1</div>
      <div id="cvrts-context-menu-node" class="w-[100px] h-[200px] b-[1px] b-dark absolute left-0 top-0 z-99 bg-[#eee] transform translate-x-[-999px]">2</div>
      <div id="cvrts-context-menu-link" class="w-[100px] h-[200px] b-[1px] b-dark absolute left-0 top-0 z-99 bg-[#eee] transform translate-x-[-999px]">3</div>
    `
    content.appendChild(contextMenu)
    const nodeContextMenuDom = contextMenu.querySelector('#cvrts-context-menu-node') as HTMLDivElement
    const contextMenuDom = contextMenu.querySelector('#cvrts-context-menu') as HTMLDivElement
    engine.on('contextmenu', (e) => {
      if (!contextMenuDom) return
      e.evt.preventDefault();

      const shape = e.target

      if (shape === engine) {
        const x = engine.getPointerPosition()?.x
        const y = engine.getPointerPosition()?.y
        contextMenuDom.style.transform = `translate(${x || 0}px, ${y || 0}px)`
        return;
      }

      const tasknode = getTaskNode(shape)
      if (tasknode) {
        contextMenuDom.style.transform = `translate(-999px, 0px)`
        const x = engine.getPointerPosition()?.x
        const y = engine.getPointerPosition()?.y
        nodeContextMenuDom.style.transform = `translate(${x || 0}px, ${y || 0}px)`
        return
      }
    })

    engine.on('mousedown', (e) => {
      if (e.evt.button === MouseButton.Left || e.target == engine) {
        contextMenuDom.style.transform = `translate(-999px, 0px)`
        nodeContextMenuDom.style.transform = `translate(-999px, 0px)`
        return
      }
    })
  }
})
