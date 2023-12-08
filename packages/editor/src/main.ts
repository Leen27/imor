import './style.css'
import { Editor } from './editor'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="editor"></div>
`
new Editor(document.querySelector<HTMLDivElement>('#editor')!)