import { getTaskNode, type PluginT, Engine } from '@cvrts/editor'
import { ref } from 'vue'

const toggleState = ref(false)
const x = ref(0)
const y = ref(0)
const target = ref<null | Target>(null)

export enum Target {
  None = 0,
  Blank,
  TASK_NODE
}

export default (): PluginT => ({
  name: 'context-menu',

  install(engine: Engine): void {
    engine.on('contextmenu', (e) => {
      // e.evt.preventDefault();

      const shape = e.target

      if (shape === engine) {
        const { x: _x = 0, y: _y = 0 } = engine.getPointerPosition() || {}
        x.value = _x
        y.value = _y
        target.value = Target.Blank
        toggleState.value = true
        return;
      }

      const tasknode = getTaskNode(shape)
      if (tasknode) {
        const { x: _x = 0, y: _y = 0 } = engine.getPointerPosition() || {}
        x.value = _x
        y.value = _y
        target.value = Target.TASK_NODE
        toggleState.value = true
        return
      }
    })
  }
})

export const useContextMenu = () => {
  return {
    x,
    y,
    target,
    toggleState
  }
}
