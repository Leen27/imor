import Konva from "konva";
import type { Engine } from "../engine";
import type { TaskLink, TaskNode } from "../entity";
import { throttle } from "@cvrts/utils";

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
    let dragNode: TaskNode | null = null
    const updateLine = throttle(16, () => {
        if (dragNode) {
            const links = engine.getLinks(dragNode)
            links.forEach((line) => (line as TaskLink).updateLine())
        }
    })

    engine.on('mousedown', function (evt) {
        var shape = evt.target;
        const taskNode = getTaskNode(shape)
        if (taskNode) {
            startLayer = taskNode.getLayer();
            taskNode.moveTo(engine.dragLayer);
            taskNode.startDrag();
            dragNode = taskNode
        }
    });

    engine.on('dragmove', updateLine)

    engine.on('mouseup', function () {
        if (dragNode) {
            dragNode.moveTo(startLayer);
            dragNode.stopDrag()
            dragNode = null
        }
    });
  },
})