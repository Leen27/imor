export declare enum ERROR_CODE {
    IS_LOCK = 0,// 有执行中的指令，无法执行新的
    UNDO_FAILED = 1
}
export type CanvasErr = {
    code: ERROR_CODE;
    data: any;
    err: ErrorEvent;
};
export declare const throwEditorErr: (code: ERROR_CODE, data?: any) => never;
export declare const catchCanvasError: <T>(err: T) => T;
