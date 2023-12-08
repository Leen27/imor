import Konva from 'konva'

export interface PluginT {
    name: string
    install(stage: Konva.Stage): void
}

import BgGridPlugin from './grid'
export { BgGridPlugin }