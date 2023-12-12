import Konva from "konva";
import { TaskNode } from "src/entity";

export class Engine extends Konva.Stage {
    dragLayer: Konva.Layer = new Konva.Layer()
    private _nodeCount = 0
    private _layer = new Konva.Layer()

    constructor(el: HTMLDivElement) {
        const width = el.clientWidth;
        const height = el.clientHeight;
        super({
            container: el,
            width: width,
            height: height,
            draggable: true,
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