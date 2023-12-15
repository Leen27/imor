export declare enum Target {
    None = 0,
    Blank = 1,
    TASK_NODE = 2
}
export declare const useContextMenu: () => {
    x: import("vue").Ref<number>;
    y: import("vue").Ref<number>;
    target: import("vue").Ref<Target | null>;
    toggleState: import("vue").Ref<boolean>;
};
