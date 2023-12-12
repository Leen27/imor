import Konva from "konva";
import { TaskNode } from "src/entity";

export class Engine extends Konva.Stage {
    dragLayer: Konva.Layer = new Konva.Layer()
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
        const viewContainer = el.querySelector('#cvrts-view')
        if (!container) return
        const width = container.clientWidth;
        const height = container.clientHeight;
        super({
            container: viewContainer as HTMLDivElement,
            width: width,
            height: height,
        });
    
        this.add(this.dragLayer)
        this.add(this._layer)
        this.dragLayer.zIndex(1)
    }

    addTaskNode(taskNode: TaskNode): this {
        this._layer.add(taskNode)
        this._nodeCount++
        if (this._nodeCount >= 1000) {
            this._nodeCount = 0
            this._layer = new Konva.Layer()
            this.add(this._layer)
        }
        return this
    }
}