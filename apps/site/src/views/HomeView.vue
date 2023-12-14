<script setup lang="ts">
import { ref } from 'vue'
import { Editor, Box } from '@cvrts/ui'

const configPanelRef = ref(null)
</script>

<template>
  <main>
    <Box>
      <Editor />
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