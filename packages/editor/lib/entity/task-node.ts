import Konva from 'konva'

const NODE_WIDTH = 50
const NODE_HEIGHT = 50

export interface TaskNodeConfig {
  id: string
  x: number
  y: number
  key: string
  stroke?: string
  fill?: string
  name: string
  tag1?: string
  tag2?: string
  icon: string
}

export class TaskNode extends Konva.Group {
  __isTask = true
  _isSelected = false
  taskIcon: Konva.Image | undefined
  taskName: Konva.Text
  bgRect: Konva.Rect
  key: string

  constructor(config: TaskNodeConfig) {
    const { id, key='', x = NODE_WIDTH, y = NODE_HEIGHT, stroke = '#000', fill = '#fff', name = '', icon = '' } = config
    super({
      id,
      x,
      y,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      draggable: true
    })

    this.key = key

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
      listening: false,
      fontSize: 10
    })
    super.add(this.taskName)

    if (!!icon) {
      var wabbitTexture = new Image();
      wabbitTexture.src = icon;
      wabbitTexture.onload = () => {
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
      }
    }

    const mask = new Konva.Rect({
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      fill: undefined,
      stroke: undefined,
    })

    super.add(mask)
  }

  select() {
    this._isSelected = true
    this.bgRect.fill('#FD8041')
  }

  unSelect() {
    this._isSelected = false
    this.bgRect.fill('#FFF')
  }
}
