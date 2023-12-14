<template>
  <div id="cvrts-editor-container">
    <ConextMenu>
      <div ref="editorRef"></div>
    </ConextMenu>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Editor } from '@cvrts/editor'
import contextMenuPlugin from './plugins/context-menu'
import ConextMenu from './ConextMenu.vue';
import {xml} from './test-xml'

const editorRef = ref(null)

onMounted(async () => {
  if (!editorRef.value) return

  const editor = new Editor(editorRef.value, {
    plugins: [contextMenuPlugin()]
  })

  const { tasks, links } = await editor.loadData(xml)

  editor.command('ADD_TASK', { tasks })
  ?.then(() => {
    editor.command('ADD_LINK', { links })
  })
})
</script>
