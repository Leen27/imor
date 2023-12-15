<template>
  <div id="cvrts-editor-container">
    <ConextMenu>
      <div ref="editorRef"></div>
    </ConextMenu>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

import {xml} from './test-xml'
import ConextMenu from './ConextMenu.vue';
import { useEditor } from './hooks/use-editor';
import { TASK_CONFIGS } from '@cvrts/core'
import { EditorEvents, type TaskNode } from '@cvrts/editor';

const emits = defineEmits<{
  (e: 'selecte', task: any): void
}>()

const { editor, editorRef } = useEditor()

function getTaskIcon(task: TaskNode) {
  const key = task.key;
  const config = (TASK_CONFIGS as any)[key]
  if (!config) return '/favicon.ico'

  return config.icon
}

onMounted(async () => {
  if (!editor.value) return
  const { tasks, links } = await editor.value.loadData(xml)
  editor.value.command('ADD_TASK', {
    tasks: tasks.map((t: any) => ({ ...t, icon: getTaskIcon(t) }))
  })
  ?.then(() => {
    editor.value!.command('ADD_LINK', { links })
  })

  editor.value.on(EditorEvents.TASK_NODE_SELECT_CHANGE, (task: TaskNode) => {
    console.log(task, 'seleele')

    emits('selecte', task)
  })

})
</script>
