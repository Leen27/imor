import './normalize.css'
import './style.css'
import { Editor } from '../lib/editor'
import '../lib/style/index.css'

// import { EditorEvents } from './events'
import { xml } from './test-xml'
import { createUniqueId } from '@cvrts/utils'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div id="tools"></div>
   <div id="editor"></div>
`
const toolsDiv = document.querySelector<HTMLDivElement>('#tools')!
const editorDiv = document.querySelector<HTMLDivElement>('#editor')!

const btn = (config: { text: string, onClick: (el: any) => void }) => {
   const div = document.createElement('div')

   div.innerHTML = `${config.text}`

   div.addEventListener('click', () => {
      config.onClick && config.onClick(div)
   })

   return div
}

toolsDiv.appendChild(btn({
   text: 'add task node',
   onClick(el: any) {
      editor.command('ADD_TASK', { tasks: [{
         id: createUniqueId(),
         x: 1000 * Math.random(),
         y: 500 * Math.random(),
         key: 'db_read',
         name: 'db_read' + 1000 * Math.random(),
      }] })
   }
}))

const editor = new Editor(
   editorDiv,
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



