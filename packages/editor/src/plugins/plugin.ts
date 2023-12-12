import Konva from "konva"
import type { Editor } from '..'

export interface PluginT {
  name: string
  install(stage: Konva.Stage, editor: Editor): void
}

