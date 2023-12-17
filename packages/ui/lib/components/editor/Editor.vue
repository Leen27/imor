<template>
  <div id="cvrts-editor-container">
    <ConextMenu>
      <div ref="editorRef"></div>
    </ConextMenu>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch, withDefaults, computed } from 'vue'
import ConextMenu from './ConextMenu.vue'
import { useEditor } from './hooks/use-editor'
import { TASK_CONFIGS } from '@cvrts/core'
import { EditorEvents, TaskLink, type TaskNode } from '@cvrts/editor'

const emits = defineEmits<{
  (e: 'selecte', task: any): void
}>()

const props = withDefaults(
  defineProps<{
    editorData: {
      tasks: TaskNode[]
      links: TaskLink[]
    }
  }>(),
  {
    editorData: () => ({
      tasks: [],
      links: []
    })
  }
)

const { editor, editorRef } = useEditor()

function getTaskIcon(task: TaskNode) {
  const key = task.key
  const config = (TASK_CONFIGS as any)[key]
  if (!config) return '/favicon.ico'

  return config.icon
}

defineExpose({
  editor
})

onMounted(async () => {
  watch(
    () => props.editorData,
    () => {
      console.log(props.editorData, 'props.editorData')
      if (!editor.value) return
      editor.value
        .command('ADD_TASK', {
          tasks: props.editorData.tasks.map((t: any) => ({ ...t, icon: getTaskIcon(t) }))
        })
        ?.then(() => {
          editor.value!.command('ADD_LINK', { links: props.editorData.links })
        })

      editor.value.on(EditorEvents.TASK_NODE_SELECT_CHANGE, (nodes: any) => {
        emits('selecte', [...nodes])
      })
    }
  )
})
</script>
