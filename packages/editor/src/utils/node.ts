import { TaskNode } from "../entity"

export function getTaskNode(shape: any): TaskNode | null {
  if(!shape) return null
  if(shape.__isTask) return shape
  if(shape.parent?.__isTask) return shape.parent

  return null
}
