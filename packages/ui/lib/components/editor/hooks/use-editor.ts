import { onMounted, ref, shallowRef } from 'vue'
import { Editor, type TaskNodeConfig } from '@cvrts/editor'
import contextMenuPlugin from '../plugins/context-menu'
import { TASK_CONFIGS } from '@cvrts/core'
import { createUniqueId } from '@cvrts/utils'
const editorRef = ref(null)
const editor = shallowRef<Editor | null>(null)

const createTask = (key: keyof typeof TASK_CONFIGS, x: number, y: number) => {
    const config = TASK_CONFIGS[key]
    editor.value?.command('ADD_TASK', {
        tasks: {
            id: createUniqueId(),
            x,
            y,
            key,
            name: config.name,
            icon: config.icon
        } as TaskNodeConfig
    })
}

export const useEditor = () => {
    onMounted(() => {
        if (!editorRef.value) return

        editor.value = new Editor(editorRef.value, {
          plugins: [contextMenuPlugin()]
        })
    })

    return {
        editor,
        editorRef,
        createTask
    }
}