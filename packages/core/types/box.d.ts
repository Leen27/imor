import { type Emitter, EventType } from 'mitt';
declare const _mitt: Emitter<Record<EventType, unknown>>;
/**
 * 一个容器组件
 * 1. 事件订阅者同时也是发布者
 * 2. 一个有限状态机
 */
export declare class Box implements Emitter<Record<EventType, unknown>> {
    on: typeof _mitt.on;
    off: typeof _mitt.off;
    emit: typeof _mitt.emit;
    all: typeof _mitt.all;
    constructor();
}
export {};
