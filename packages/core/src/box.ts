import mitt, { type Emitter, EventType } from 'mitt'
const _mitt = mitt()

/**
 * 一个容器组件
 * 1. 事件订阅者同时也是发布者
 * 2. 一个有限状态机
 */
export class Box implements Emitter<Record<EventType, unknown>>{
    public on: typeof _mitt.on
    public off: typeof _mitt.off
    public emit: typeof _mitt.emit
    public all: typeof _mitt.all

    constructor() {
        this.on = _mitt.on
        this.off = _mitt.off
        this.emit = _mitt.emit
        this.all = _mitt.all
    }
}
