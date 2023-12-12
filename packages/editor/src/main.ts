import './normalize.css'
import './style.css'
import { Editor } from './editor'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div id="editor"></div>
`
const editor = new Editor(document.querySelector<HTMLDivElement>('#editor')!)

const { tasks } = await editor.loadData()
console.log(tasks)

editor.command('ADD_TASK', { config: tasks })