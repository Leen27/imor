import { getTaskNode, type PluginT, Engine } from '@cvrts/editor'
import { useContextMenu, Target } from '../hooks/use-context-menu'

export default (): PluginT => ({
  name: 'context-menu',

  install(engine: Engine): void {
    const { x, y, target, toggleState } = useContextMenu()

    engine.on('contextmenu', (e) => {
      // 手动触发一次事件，因为radix vue组件停止了事件传播
      engine.fire('mousedown', e)

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

