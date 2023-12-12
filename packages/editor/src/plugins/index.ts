import Konva from 'konva'
import BgGridPlugin from './grid'
export { BgGridPlugin }
import StateTool from './stateTool'
export { StateTool }
import SelectEntity from './select-entity'
export { SelectEntity }
import FilePlugin from './file'
export { FilePlugin }
import type { Editor } from '..'
export * from './file'

export interface PluginT {
    name: string
    install(stage: Konva.Stage, editor: Editor): void
}

