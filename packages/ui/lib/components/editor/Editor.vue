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

const { editor, editorRef } = useEditor()

onMounted(async () => {
  if (!editor.value) return
  const { tasks, links } = await editor.value.loadData(xml)
  
  editor.value.command('ADD_TASK', {
    tasks: tasks.map((t: any) => ({ ...t, icon: '/favicon.ico' }))
  })
  ?.then(() => {
    editor.value!.command('ADD_LINK', { links })
  })

})
</script>
