import './normalize.css'
import './style.css'
import { Editor } from './editor'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div id="editor"></div>
`
const editor = new Editor(
   document.querySelector<HTMLDivElement>('#editor')!,
   {
      plugins: [
         {
            name: 'context-menu',
            config: {
               menues: [
                  {
                     key: 'task',
                     text: 'Task',
                     children: [{
                        key: 'DB-Read',
                        text: 'DB Read',
                        onSelect: () => {
                           console.log('dddddd')
                        }
                     }]
                  }
               ]
            }
         }
      ]
   }
)

const { tasks, links } = await editor.loadData()

editor.command('ADD_TASK', { tasks })
?.then(() => {
   editor.command('ADD_LINK', { links })
})
