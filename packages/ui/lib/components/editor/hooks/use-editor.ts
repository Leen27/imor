import { onMounted, ref, shallowRef } from 'vue'
import { Editor } from '@cvrts/editor'
import contextMenuPlugin from '../plugins/context-menu'

const editorRef = ref(null)
const editor = shallowRef<Editor | null>(null)
export const useEditor = () => {
    onMounted(() => {
        if (!editorRef.value) return

        editor.value = new Editor(editorRef.value, {
          plugins: [contextMenuPlugin()]
        })
    })

    return {
        editor,
        editorRef
    }
}