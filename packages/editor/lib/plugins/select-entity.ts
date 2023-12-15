import Konva from "konva";
import type { Engine } from "../engine";
import type { TaskLink, TaskNode } from "../entity";
import { throttle } from "@cvrts/utils";
import { isEngine } from "../utils/is";
import { getTaskNode } from '../utils/node'
import type { Editor } from "../editor";

export default () => ({
  name: 'select-entity',

  install(engine: Engine, editor: Editor): void {
    let startLayer: Konva.Layer | null = null;
    let dragNode: TaskNode | null = null

    const updateLine = throttle(20, () => {
        if (dragNode) {
            const links = engine.getLinks(dragNode)
            links.forEach((line) => (line as TaskLink).updateLine())
        }
    })

    const doSelectNode = (node: TaskNode) => {
        editor.command('SELECT_TASK_NODE', { tasks: node })
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
            return
        }

        if (isEngine(shape)) {
            editor.command('UN_SELECT_ALL_TASK_NODE')
            dragNode = null
            return
        }        
    });

    engine.on('dragmove', updateLine)

    engine.on('mouseup', function () {
        if (dragNode) {
            dragNode.moveTo(startLayer);
            dragNode.stopDrag()
            editor.command('SELECT_TASK_NODE', { tasks: dragNode })
        }
    });
  },
})