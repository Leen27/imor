import './normalize.css'
import './style.css'
import { Editor } from './editor'
// import { EditorEvents } from './events'
import { xml } from './test-xml'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div id="editor"></div>
`

// const contextConfig = {
//    name: 'context-menu',
//    menues: [{
//       id: 'editor-menu',
//       showEvent: EditorEvents.EDITOR_CONTEXT_MENU,
//       hideEvent: EditorEvents.TASK_NODE_CONTEXT_MENU,
//       items: [
//          {
//             key: 'task',
//             text: 'Task',
//             children: [{
//                key: 'DB-Read',
//                text: 'DB Read',
//                onSelect: () => {
//                   console.log('dddddd')
//                }
//             }]
//          }
//       ]
//    }, {
//       id: 'task-menu',
//       showEvent: EditorEvents.TASK_NODE_CONTEXT_MENU,
//       hideEvent: EditorEvents.EDITOR_CONTEXT_MENU,
//       items: [
//          {
//             key: 'copy',
//             text: 'Copy(C)',
//             onSelect: () => {
//                console.log('conpy')
//             }
//          }
//       ]
//    }]
// }

const editor = new Editor(
   document.querySelector<HTMLDivElement>('#editor')!,
   {
      plugins: [
         // contextConfig
      ]
   }
)

const { tasks, links } = await editor.loadData(xml)

editor.command('ADD_TASK', { tasks })
?.then(() => {
   editor.command('ADD_LINK', { links })
})
