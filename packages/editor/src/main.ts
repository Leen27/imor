import './normalize.css'
import './style.css'
import { Editor } from './editor'
import { getPoints } from './utils/calc-link'
import { TaskLink, TaskNode } from './entity'
import Konva from 'konva'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div id="editor"></div>
`
const editor = new Editor(document.querySelector<HTMLDivElement>('#editor')!)

const { tasks, links } = await editor.loadData()
console.log(tasks, links)

editor.command('ADD_TASK', { tasks })
?.then(() => {
   editor.command('ADD_LINK', { links })
})

const node = editor.engine.findOne('#354ID202105121012218758756978_32')
console.log(node, '#1')
editor.engine.getLinks(node as TaskNode)