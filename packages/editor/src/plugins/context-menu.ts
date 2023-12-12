import type { Engine } from '../engine'
import type { PluginT } from './plugin'

export default (): PluginT => ({
  name: 'context-menu',

  install(engine: Engine): void {
    const content = engine.domContainer
    const contextMenu = document.createElement('div')
    contextMenu.innerHTML = `
      <div id="cvrts-context-menu" class="w-[100px] h-[200px] b-[1px] b-dark absolute left-0 top-0 z-99 bg-[#eee] transform translate-x-[-999px]"></div>
    `
    content.appendChild(contextMenu)
    const contextMenuDom = contextMenu.querySelector('#cvrts-context-menu') as HTMLDivElement
    engine.on('contextmenu', (e) => {
      if (!contextMenuDom) return
      e.evt.preventDefault();
      if (e.target === engine) {
        const x = engine.getPointerPosition()?.x
        const y = engine.getPointerPosition()?.y
        contextMenuDom.style.transform = `translate(${x || 0}px, ${y || 0}px)`
        return;
      }
    })

    engine.on('mousedown', (e) => {
      if (e.target == engine) {
        contextMenuDom.style.transform = `translate(-999px, 0px)`
        return
      }
    })
  }
})
