import { type PluginT } from '@cvrts/editor';
export declare enum Target {
    None = 0,
    Blank = 1,
    TASK_NODE = 2
}
declare const _default: () => PluginT;
export default _default;
export declare const useContextMenu: () => {
    x: import("vue").Ref<number>;
    y: import("vue").Ref<number>;
    target: import("vue").Ref<Target | null>;
    toggleState: import("vue").Ref<boolean>;
};
