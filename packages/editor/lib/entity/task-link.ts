import Konva from "konva";
import { TaskNode } from ".";
import { getPoints } from "../utils/calc-link";

export type TaskLinkConfigs = {
    id?: string
    from?: TaskNode
    to?: TaskNode
}

export type TaskLinkRawConfigs = {
    id?: string
    from?: string
    to?: string
}

export class TaskLink extends Konva.Arrow {
    fromTask!: TaskNode
    toTask!: TaskNode
    
    constructor(configs: TaskLinkConfigs) {
        const { from, to } = configs

        if (!from || !to) {
            super()
            return
        } 

        const points = getPoints(
            from,
            to
        ) || [];

        super({
            stroke: 'black',
            id: 'test',
            fill: 'white',
            points
        })

        this.fromTask = from
        this.toTask = to
    }

    updateLine() {
        const points = getPoints(
            this.fromTask,
            this.toTask
        ) || [];

        this.points(points)
    }
}