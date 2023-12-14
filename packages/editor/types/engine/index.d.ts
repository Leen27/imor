import Konva from 'konva';
import { TaskLink, TaskNode } from '../entity';
export declare class Engine extends Konva.Stage {
    domContainer: HTMLDivElement;
    dragLayer: Konva.Layer;
    linkLayer: Konva.Layer;
    private _nodeCount;
    private _layer;
    constructor(el: HTMLDivElement);
    addTaskNode(taskNode: TaskNode): this;
    addLink(taskLink: TaskLink): this;
    getLinks(taskNode: TaskNode): import("konva/lib/Node").Node<import("konva/lib/Node").NodeConfig>[];
    connectTask(from: string, to: string): void;
}
