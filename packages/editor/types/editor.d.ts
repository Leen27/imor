import type { PluginT, PluginCoinfg } from './plugins';
import { Invoker } from './command';
import { Engine } from './engine';
import { TaskNode } from './entity';
/**
 * 编辑器配置
 */
type EditorConfigT = {
    plugins: Array<PluginT | PluginCoinfg>;
};
/**
 * 编辑器状态数据
 */
type EditorState = {
    /**
     * 当前编辑器选中的task节点
     */
    selectedTasks: Array<TaskNode>;
};
/**
 * 规则编辑器
 * @constructor
 */
export declare class Editor {
    private el;
    state: EditorState;
    engine: Engine;
    invoker: Invoker;
    plugins: Array<PluginT | PluginCoinfg>;
    constructor(el: HTMLDivElement, configs?: EditorConfigT);
    initEngine(el: HTMLDivElement): void;
    getContainerElement(): HTMLDivElement;
    installPlugins(plugins?: Array<PluginT | PluginCoinfg>): void;
    command(commandName: string, ...args: any): Promise<any> | null;
    loadData(_: string): Promise<any>;
}
export {};
