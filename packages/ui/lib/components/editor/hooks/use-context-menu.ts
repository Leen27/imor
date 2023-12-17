import { ref } from 'vue'

const toggleState = ref(false)
const x = ref(0)
const y = ref(0)
const target = ref<null | Target>(null)

export enum Target {
  None = 0,
  Blank,
  TASK_NODE
}

export const useContextMenu = () => {
    return {
      x,
      y,
      target,
      toggleState
    }
}
  