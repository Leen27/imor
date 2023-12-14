<template>
  <div ref="editorRef"></div>
  <ConextMenu />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Editor } from '@cvrts/editor'
import contextMenuPlugin from './plugins/context-menu'
import ConextMenu from './ConextMenu.vue';
const editorRef = ref(null)

onMounted(() => {
  if (!editorRef.value) return

  const editor = new Editor(editorRef.value, {
    plugins: [contextMenuPlugin()]
  })
})
</script>
