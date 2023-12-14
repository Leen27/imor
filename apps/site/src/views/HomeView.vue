<script setup lang="ts">
import { Editor } from '@cvrts/editor'
import { onMounted, ref } from 'vue'

const editorRef = ref(null)

onMounted(() => {
  if (!editorRef.value) return
  const editor = new Editor(
    editorRef.value,
    {
        plugins: [
          // contextConfig
        ]
    }
  )
})

</script>

<template>
  <main>
    <div ref="editorRef" id="editor"></div>
  </main>
</template>

<style scoped>
#editor {
  width: 100%;
  height: 100vh;
}
</style>