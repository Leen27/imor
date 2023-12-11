import Konva from 'konva'

const NODE_WIDTH = 50
const NODE_HEIGHT = 50

export interface TaskNodeConfig {
  id: string
  x: number
  y: number
  stroke?: string
  fill?: string
  name: string
  tag1?: string
  tag2?: string
  icon: string
}

export class TaskNode extends Konva.Group {
  constructor(config: TaskNodeConfig) {
    const { x = NODE_WIDTH, y = NODE_HEIGHT, stroke = '#000', fill = '#fff', name = '' } = config
    super({
      x,
      y,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      draggable: true
    })

    const bg = new Konva.Rect({
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      fill,
      stroke,
      cornerRadius: 5
    })

    super.add(bg)

    super.add(
      new Konva.Text({
        text: name,
        x: -NODE_WIDTH / 2,
        y: -NODE_HEIGHT,
        width: NODE_WIDTH * 2,
        align: 'center'
      })
    )
  }
}
