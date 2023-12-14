import type { PluginT, PluginCoinfg } from './plugins';
import { Invoker } from './command';
import { Engine } from './engine';
/**
 * 编辑器配置
 */
type EditorConfigT = {
    plugins: Array<PluginT | PluginCoinfg>;
};
/**
 * 规则编辑器
 * @constructor
 */
export declare class Editor {
    private el;
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
