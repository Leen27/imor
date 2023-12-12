import { TaskLink, TaskLinkConfigs, TaskLinkRawConfigs, TaskNode, TaskNodeConfig } from '../entity'
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
    execute: function (editor: Editor , { tasks }: { tasks: TaskNodeConfig | TaskNodeConfig[] }) {
      const configs = Array.isArray(tasks) ? tasks : [tasks]

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
  ADD_LINK: {
    execute: function (editor: Editor , { links }: { links: TaskLinkRawConfigs | TaskLinkRawConfigs[] }) {
      const configs = Array.isArray(links) ? links : [links]
      const engine = editor.engine

      for(let i = 0; i < configs.length; i++) {
        const link = configs[i]
        editor.engine.addLink(
          new TaskLink({
            id: link.id,
            from: engine.findOne(`#${link.from}`),
            to: engine.findOne(`#${link.to}`)
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
