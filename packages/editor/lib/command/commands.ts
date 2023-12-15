import { TaskLink, TaskLinkRawConfigs, TaskNode, TaskNodeConfig } from '../entity'
import { Editor } from '../editor'
export interface ICommand {
  execute(...args: any): Promise<any>
  undo(...args: any): Promise<any>
}

export default {
  SELECT_TASK_NODE: {
    execute(editor: Editor , { tasks }: { tasks: TaskNode | TaskNode[] }) {
      const taskArray = Array.isArray(tasks) ? tasks : [tasks]
      const state = editor.state

      for(let i = 0; i < state.selectedTasks.value.length; i++) {
        state.selectedTasks.value[i].unSelect()
      }

      editor.state.selectedTasks.value = []

      for(let i = 0; i < taskArray.length; i++) {
        if(!taskArray[i]) continue;
        state.selectedTasks.value.push(taskArray[i])
        taskArray[i].select()
      }

      return Promise.resolve(state.selectedTasks.value)
    },
    undo() {
      return Promise.resolve()
    }
  },
  UN_SELECT_ALL_TASK_NODE: {
    execute(editor: Editor) {    
      const state = editor.state

      if (state.selectedTasks.value.length === 0) {
        return
      }


      for(let i = 0; i < state.selectedTasks.value.length; i++) {
        state.selectedTasks.value[i].unSelect()
      }

      state.selectedTasks.value = []

      return Promise.resolve(state.selectedTasks)
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
