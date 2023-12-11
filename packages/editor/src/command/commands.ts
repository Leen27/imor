import Konva from 'konva'
import { TaskNode, TaskNodeConfig } from '../entity'
/**
 * The Command interface declares a method for executing a command.
 */
export interface ICommand {
  execute(...args: any): Promise<any>
  undo(...args: any): Promise<any>
}

export default {
  ADD_TASK: {
    execute: function ({ layer, config }: { stage: Konva.Stage; layer: Konva.Layer; config: TaskNodeConfig }) {
      layer.add(
        new TaskNode({
          ...config
        })
      )
      return Promise.resolve()
    },
    undo() {
      return Promise.resolve()
    }
  },
  LOAD_DATA: {
    execute: function () {
      return Promise.resolve()
    },
    undo() {
      return Promise.resolve()
    }
  }
} as Record<string, ICommand>
