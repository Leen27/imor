import type { ICommand } from "./commands"
import commands from "./commands"
import { isString } from '@cvrts/utils'
import { ERROR_CODE, throwEditorErr } from '../error'
import { Editor } from "src"
type StackData = {
    command: ICommand
    args: any
}

export class Invoker { 
  private _isLocked: boolean
  private _undoStack: Array<StackData>
  private _redoStack: Array<StackData>
  private _max: number

  constructor({
    max = 10
  }: {
    max?: number
  }) {
    this._isLocked = false
    this._undoStack = []
    this._redoStack = []
    this._max = max
  }
  
  execute(command: ICommand | string, editor: Editor, ...args: any) {
    if (this._isLocked) {
      return Promise.reject('当前有未完成的指令，无法执行新指令');
    }

    if (isString(command)) {
      const _cmd = commands[command]
      if (!_cmd) return null
      command = _cmd
    }

    return this._invokeExecution(command, editor, ...args)
  }

  undo() {
    let stackData  = this._undoStack.pop();
    let promise
    let message = ''

    if (stackData && !this._isLocked) {
      this.pushUndoStack(stackData)
      stackData = undefined
    }
    if (stackData) {
      promise = this._invokeUndo(stackData);
    } else {
      throwEditorErr(ERROR_CODE.UNDO_FAILED)
      if (this._isLocked) {
        throwEditorErr(ERROR_CODE.IS_LOCK)
      }
      promise = Promise.reject(message);
    }

    return promise
  }
  
  async _invokeExecution(command: ICommand, editor: Editor, ...args: any) {
    this.lock()
    
    try {
      const res = await command.execute(editor, ...args)
      this.pushUndoStack({
        command,
        args
      })
      this.unlock()
      return res
    } catch(message) {
      this.unlock()
      return Promise.reject(message);
    }
  }

  async _invokeUndo(stackData: StackData) {
    this.lock();

    try {
      const res = await stackData.command.undo(...stackData.args)
      this.pushRedoStack(stackData);
      this.unlock();
      return res
    } catch(message) {
      this.unlock();

      return Promise.reject(message);
    }
  }

  pushUndoStack(data: {command: ICommand, args: any}) {
    this._undoStack.push(data)
    if (this._undoStack.length > this._max) {
        this._undoStack.pop()
    }
  }

  pushRedoStack(data: {command: ICommand, args: any}) {
    this._redoStack.push(data);
    if (this._redoStack.length > this._max) {
        this._redoStack.pop()
    }
  }

  lock() {
    this._isLocked = true
  }

  unlock() {
    this._isLocked = false
  }

  isEmptyUndoStack() {
    return this._undoStack.length === 0;
  }
}