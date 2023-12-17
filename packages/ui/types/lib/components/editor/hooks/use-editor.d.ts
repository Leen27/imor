import { Editor } from '@cvrts/editor';
import { TASK_CONFIGS } from '@cvrts/core';
export declare const useEditor: () => {
    editor: import("vue").Ref<Editor | null> | import("vue").ShallowRef<Editor | null>;
    editorRef: import("vue").Ref<null>;
    createTask: (key: keyof typeof TASK_CONFIGS, x: number, y: number) => void;
};
