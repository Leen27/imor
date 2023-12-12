import Konva from "konva";
import type { Engine } from "../engine";
import type { TaskLink, TaskNode } from "../entity";
import { throttle } from "@cvrts/utils";
import { isEngine } from "../utils/is";
import { getTaskNode } from '../utils/node'

export default () => ({
  name: 'select-entity',

  install(engine: Engine): void {
    let startLayer: Konva.Layer | null = null;
    let dragNode: TaskNode | null = null
    let selectNode: TaskNode | null = null

    const updateLine = throttle(20, () => {
        if (dragNode) {
            const links = engine.getLinks(dragNode)
            links.forEach((line) => (line as TaskLink).updateLine())
        }
    })

    const doSelectNode = (node: TaskNode) => {
        selectNode?.unSelect()
        node?.select()
        selectNode = node
        dragNode = null
    }

    engine.on('mousedown', function (evt) {
        var shape = evt.target;
        const taskNode = getTaskNode(shape)

        if (taskNode && evt.evt?.button === 2) {
            doSelectNode(taskNode)
            return
        }

        if (taskNode) {
            startLayer = taskNode.getLayer();
            taskNode.moveTo(engine.dragLayer);
            taskNode.startDrag();
            dragNode = taskNode
        }

        if (isEngine(shape)) {
            selectNode?.unSelect()
            dragNode = null
        }        
    });

    engine.on('dragmove', updateLine)

    engine.on('mouseup', function () {
        if (dragNode) {
            dragNode.moveTo(startLayer);
            dragNode.stopDrag()
            doSelectNode(dragNode)
        }
    });
  },
})