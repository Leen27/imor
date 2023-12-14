import './normalize.css'
import './style.css'
import { Editor } from '../lib/editor'
import '../lib/style/index.css'

// import { EditorEvents } from './events'
import { xml } from './test-xml'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div id="editor"></div>
`

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
