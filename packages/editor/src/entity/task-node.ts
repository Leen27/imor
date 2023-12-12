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
  __isTask = true
  taskIcon: Konva.Image
  taskName: Konva.Text
  bgRect: Konva.Rect

  constructor(config: TaskNodeConfig) {
    const { x = NODE_WIDTH, y = NODE_HEIGHT, stroke = '#000', fill = '#fff', name = '', icon = '' } = config
    super({
      x,
      y,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      draggable: true
    })

    this.bgRect = new Konva.Rect({
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      fill,
      stroke,
      cornerRadius: 5,
      draggable: false,
      listening: false
    })

    super.add(this.bgRect)

    this.taskName = new Konva.Text({
      text: name,
      x: -NODE_WIDTH / 2,
      y: NODE_HEIGHT * 1.2,
      width: NODE_WIDTH * 2,
      align: 'center',
      listening: false
    })
    super.add(this.taskName)

    var wabbitTexture = new Image();
    wabbitTexture.src = 'https://konvajs.org/assets/bunny.png';

    this.taskIcon = new Konva.Image({
      image: wabbitTexture,
      x: NODE_WIDTH * 0.1,
      y: NODE_HEIGHT * 0.1,
      width: NODE_WIDTH * 0.8,
      height: NODE_HEIGHT * 0.8,
      transformsEnabled: 'position',
      perfectDrawEnabled: false,
      listening: false
    })

    super.add(this.taskIcon)

    const mask = new Konva.Rect({
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      fill: undefined,
      stroke: undefined,
    })

    super.add(mask)
  }

  select() {
    this.bgRect.fill('#FD8041')
  }

  unSelect() {
    this.bgRect.fill('#FFF')
  }
}
