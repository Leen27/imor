import Konva from 'konva'
import { TaskLink, TaskNode } from '../entity'

export class Engine extends Konva.Stage {
  domContainer!: HTMLDivElement
  dragLayer: Konva.Layer = new Konva.Layer()
  linkLayer: Konva.Layer = new Konva.Layer()
  private _nodeCount = 0
  private _layer = new Konva.Layer()

  constructor(el: HTMLDivElement) {
    el.innerHTML = `
        <div id="cvrts-scroll-container">
          <div id="cvrts-large-container">
            <div id="cvrts-view"></div>
          </div>
        </div>
      `
    const container = el.querySelector('#cvrts-scroll-container')
    const largeContainer = el.querySelector('#cvrts-large-container')
    const viewContainer = el.querySelector('#cvrts-view')
    if (!container || !viewContainer) return
    
    const width = container.clientWidth
    const height = container.clientHeight
    super({
      container: viewContainer as HTMLDivElement,
      width: width,
      height: height
    })

    this.domContainer = container as HTMLDivElement
    this.add(this.linkLayer)
    this.add(this._layer)
    this.dragLayer.zIndex(1)
    this.add(this.dragLayer)
  }

  addTaskNode(taskNode: TaskNode): this {
    this._layer.add(taskNode)
    // taskNode.cache()
    this._nodeCount++
    if (this._nodeCount >= 1000) {
      this._nodeCount = 0
      this._layer = new Konva.Layer()
      this.add(this._layer)
    }
    return this
  }

  addLink(taskLink: TaskLink) {
    this.linkLayer.add(taskLink)

    return this
  }

  getLinks(taskNode: TaskNode) {
    const links = this.linkLayer.find((link: any) => {
        return link.toTask === taskNode || link.fromTask === taskNode
    })

    return links
  }

  connectTask(from: string, to: string) {
    const node1 = this.findOne(`#${from}`) as TaskNode
    const node2 = this.findOne(`#${to}`) as TaskNode
    if (node1 && node2) {
      var line = new TaskLink({
        id: 'test',
        from: node1,
        to: node2
      })
      this.linkLayer.add(line)
    }
  }
}
