import { TaskNode, TaskNodeConfig } from '../entity'
import { Engine } from '../engine'
import { Editor } from '../editor'
export interface ICommand {
  execute(...args: any): Promise<any>
  undo(...args: any): Promise<any>
}

export default {
  ADD_TASK: {
    execute: function (editor: Editor , { config }: { config: TaskNodeConfig | TaskNodeConfig[] }) {
      const configs = Array.isArray(config) ? config : [config]

      for(let i = 0; i < configs.length; i++) {
        editor.engine.addTaskNode(
          new TaskNode({
            ...configs[i]
          })
        )
      }

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
