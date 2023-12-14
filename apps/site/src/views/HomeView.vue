<script setup lang="ts">
import { Editor } from '@cvrts/editor'
import { onMounted, ref } from 'vue'
import { Box } from '@cvrts/ui'

const editorRef = ref(null)
const configPanelRef = ref(null)

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
    <Box>
      <div ref="editorRef" id="editor"></div>
    </Box>
    <Box>
      <div ref="configPanelRef" id="config-panel"></div>
    </Box>
  </main>
</template>

<style scoped>
#editor {
  width: 50%;
  height: 100vh;
}

#config-panel {
  width: 50%;
  height: 100vh;
}
</style>