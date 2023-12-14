import Konva from "konva";
import { TaskNode } from ".";
export type TaskLinkConfigs = {
    id?: string;
    from?: TaskNode;
    to?: TaskNode;
};
export type TaskLinkRawConfigs = {
    id?: string;
    from?: string;
    to?: string;
};
export declare class TaskLink extends Konva.Arrow {
    fromTask: TaskNode;
    toTask: TaskNode;
    constructor(configs: TaskLinkConfigs);
    updateLine(): void;
}
