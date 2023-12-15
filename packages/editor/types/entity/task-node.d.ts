import Konva from 'konva';
export interface TaskNodeConfig {
    id: string;
    x: number;
    y: number;
    stroke?: string;
    fill?: string;
    name: string;
    tag1?: string;
    tag2?: string;
    icon: string;
}
export declare class TaskNode extends Konva.Group {
    __isTask: boolean;
    _isSelected: boolean;
    taskName: Konva.Text;
    bgRect: Konva.Rect;
    constructor(config: TaskNodeConfig);
    select(): void;
    unSelect(): void;
}
