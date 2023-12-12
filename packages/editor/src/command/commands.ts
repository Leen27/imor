import { TaskNode, TaskNodeConfig } from '../entity'
import { Editor } from '../editor'
export interface ICommand {
  execute(...args: any): Promise<any>
  undo(...args: any): Promise<any>
}

export default {
  TEST_TASK_NODE_DATA: {
    execute() {
      const data: any = []
    
      for(let j = 0; j < 20; j++) {
        for(let i = 0; i < 20; i++) {
          data.push({
            id: 'xxxx' + 1000 * Math.random(),
            x: 1000  * Math.random(),
            y: 1000 * Math.random(),
            name: 'teset_Test' + 1000 * Math.random(),
            icon: ''
          })
        }
      }

      return Promise.resolve(data)
    },
    undo() {
      return Promise.resolve()
    }
  },
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
