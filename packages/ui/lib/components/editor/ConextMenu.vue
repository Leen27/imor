<template>
  <ContextMenu>
    <ContextMenuTrigger>
      <slot />
    </ContextMenuTrigger>
    <!-- <TaskContextMenu v-show="target === Target.TASK_NODE" /> -->
    <template v-if="target === Target.TASK_NODE">
      <ContextMenuContent class="w-64">
      <ContextMenuSub>
        <ContextMenuSubTrigger inset> cut </ContextMenuSubTrigger>
        <ContextMenuSubContent class="w-48">
          <ContextMenuItem>Create Shortcut...</ContextMenuItem>
          <ContextMenuItem>Name Window...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
    </template>
    <template v-else="target === Target.Blank">
      <ContextMenuContent class="w-64">
      <ContextMenuSub>
        <ContextMenuSubTrigger inset> Task1 {{target}}</ContextMenuSubTrigger>
        <ContextMenuSubContent class="w-48">
          <ContextMenuItem @click="createTask('db_read', x, y)">DB</ContextMenuItem>
          <ContextMenuItem>Name Window...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
    </template>
  </ContextMenu>
</template>
<script setup lang="ts">
import TaskContextMenu from './ConextMenu.vue'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
useEditor
} from '@/index'
import { onMounted } from 'vue'
import { useContextMenu, Target } from './hooks/use-context-menu'

const { target, x, y } = useContextMenu()
const { createTask } = useEditor()
onMounted(() => {
})
</script>
