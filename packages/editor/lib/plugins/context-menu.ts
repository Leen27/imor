// @ts-nocheck
import type { Engine } from '../engine'
import type { PluginT } from './plugin'
import { getTaskNode } from '../utils/node'
import { MouseButton } from '@cvrts/shared/types'
import { EditorEvents } from '../events'

export interface MenuItem {
  key: string
  text: string
  icon?: string
  onSelect?: (instance: MenuInstance, item: MenuItem) => void
  children?: Array<MenuItem>
}

export interface Menu {
  id: string
  showEvent?: EditorEvents | EditorEvents[],
  hideEvent?: EditorEvents | EditorEvents[]
  items: MenuItem[]
}

export interface MenuInstance {
  el: HTMLDivElement,
  elId: string,
  show: (x: number, y: number) => void,
  hide: () => void,
}

const wrapperTemplate = (elId: string) => `
<div id="${elId}" class="w-[100px] h-[200px] b-[1px] b-dark absolute left-0 top-0 z-99 bg-[#eee] transform translate-x-[-999px]"></div>
`

const itemTamplate = (item: MenuItem) => `
  <div context-menu-item-key="${item.key}" class="cvrts-context-menu-item hover:bg-[#E6A23C] hover:cursor-pointer">
    <span>${item.text}<span>
    ${item.children ? '<span>⏭</span>' : ''}
  </div>
`

const createMenuInstance = (engine: Engine, menu: Menu) => {
  const content = engine.domContainer

  const contextMenuWrapper = document.createElement('div')
    const elId = `cvrts-context-menu-${menu.id}`
    contextMenuWrapper.innerHTML = wrapperTemplate(elId)
    content.appendChild(contextMenuWrapper)
    const contextMenuEl = contextMenuWrapper.querySelector(`#${elId}`) as HTMLDivElement
    /** 生成子菜单 dom */
    contextMenuEl.innerHTML = menu.items.map(itemTamplate).join('')

    for(let i = 0; i < menu.items.length; i++) {
      const item = menu.items[i]
      if(item.children) {
        createMenuInstance(engine, {
          id: `${menu.id}:${item.key}`,
          // showEvent: EditorEvents.EDITOR_CLICK,
          // hideEvent: EditorEvents | EditorEvents[]
          items: item.children
        })
      }
    }

    const instance = {
      wrapper: contextMenuWrapper,
      el: contextMenuEl,
      elId,
      show(x: number, y: number) {
        contextMenuEl.style.transform = `translate(${x || 0}px, ${y || 0}px)`
      },
      hide() {
        contextMenuEl.style.transform = `translate(-999px, 0px)`
      }
    }

    /** bind select event */
    contextMenuEl.addEventListener('mousedown', (e) => {
      const itemId = (e.target as HTMLDivElement).getAttribute('context-menu-item-key') || ''
      if (!itemId) return
      const item = menu.items.find(item => item.key === itemId)
      if (!item) return
      item.onSelect && item.onSelect(instance, item)
    })
        
    ;[menu.showEvent].flat().forEach(m => {
      if(!m) return
      engine.on(m, (evt: any) => {
        instance.show(evt.x, evt.y)
      })
    })

    ;[menu.hideEvent].flat().forEach(m => {
      if (!m) return
      engine.on(m, () => {
        instance.hide()
      })
    })

    return instance
}

const createMenu = (engine: Engine, config?: {
  menues: Menu[]
}) => {
  return config?.menues?.map((menu: Menu) => createMenuInstance(engine, menu))
}
 
export default (): PluginT & { menuesInstance: Array<MenuInstance> } => ({
  name: 'context-menu',
  menuesInstance: [],

  install(engine: Engine, _, config?: {
    menues: Menu[]
  }): void {
    this.menuesInstance = createMenu(engine, config) || []

    engine.on('contextmenu', (e) => {
      e.evt.preventDefault();

      const shape = e.target

      if (shape === engine) {
        const { x, y } = engine.getPointerPosition() || {}
        engine.fire(EditorEvents.EDITOR_CONTEXT_MENU, {
          x,
          y,
          target: shape
        })
        return;
      }

      const tasknode = getTaskNode(shape)
      if (tasknode) {
        const { x, y } = engine.getPointerPosition() || {}
        engine.fire(EditorEvents.TASK_NODE_CONTEXT_MENU, {
          x,
          y,
          target: tasknode
        })
        return
      }
    })

    engine.on('mousedown', (e) => {
      if (e.evt.button === MouseButton.Left || e.target == engine) {
        this.menuesInstance.forEach(m => m.hide())
        return
      }
    })
  }
})
