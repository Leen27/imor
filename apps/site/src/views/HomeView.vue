<script setup lang="ts">
import { computed, onMounted, reactive, ref, type Ref } from 'vue'
import { Editor, Box, useEditor } from '@cvrts/ui'

const configPanelRef = ref(null)
import {xml} from './test-xml.js'

const { editor, editorRef } = useEditor()
const editorData = ref({
  tasks: [], links: []
})

onMounted(async () => {
  if (!editorRef.value) return 
  const res = await editor.value.loadData(xml)
  console.log(res)
  editorData.value = res
})

const selectHandle = (node: any) => {
  console.log(node, 'node')
}
</script>

<template>
  <main>
    {{ editor?.state }}
    <Box>
      <Editor
        id="editor"
        :editorData="editorData"
        @selecte="selectHandle"
      />
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