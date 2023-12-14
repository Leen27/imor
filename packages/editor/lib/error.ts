export enum ERROR_CODE {
    IS_LOCK = 0,     // 有执行中的指令，无法执行新的
    UNDO_FAILED
}

export type CanvasErr = {
    code: ERROR_CODE,
    data: any,
    err: ErrorEvent
}

export const throwEditorErr = (code: ERROR_CODE, data?: any ) => {
    throw {
        code,
        data,
        error: new Error()
    }
}

export const catchCanvasError = <T>(err: T): T => {
    return err
}