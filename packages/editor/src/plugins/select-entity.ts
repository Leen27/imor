import Konva from "konva";
import type { Engine } from "src/engine";
import type { TaskNode } from "src/entity";

function getTaskNode(shape: any): TaskNode | null {
    if(!shape) return null
    if(shape.__isTask) return shape
    if(shape.parent?.__isTask) return shape.parent

    return null
}

export default () => ({
  name: 'select-entity',

  install(engine: Engine): void {
    let startLayer: Konva.Layer | null = null;
    engine.on('mousedown', function (evt) {
        var shape = evt.target;
        console.log(shape, 'down')
        const taskNode = getTaskNode(shape)
        if (taskNode) {
            startLayer = taskNode.getLayer();
            taskNode.moveTo(engine.dragLayer);
            taskNode.startDrag();
        }
    });

    engine.on('mouseup', function (evt) {
        var shape = evt.target;
        console.log(shape, 'mouseup')
        const taskNode = getTaskNode(shape)
        if (taskNode) {
            taskNode.moveTo(startLayer);
        }
    });
  },
})