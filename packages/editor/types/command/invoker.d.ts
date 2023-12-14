import type { ICommand } from "./commands";
import { Editor } from "../";
type StackData = {
    command: ICommand;
    args: any;
};
export declare class Invoker {
    private _isLocked;
    private _undoStack;
    private _redoStack;
    private _max;
    constructor({ max }: {
        max?: number;
    });
    execute(command: ICommand | string, editor: Editor, ...args: any): Promise<any> | null;
    undo(): Promise<any>;
    _invokeExecution(command: ICommand, editor: Editor, ...args: any): Promise<any>;
    _invokeUndo(stackData: StackData): Promise<any>;
    pushUndoStack(data: {
        command: ICommand;
        args: any;
    }): void;
    pushRedoStack(data: {
        command: ICommand;
        args: any;
    }): void;
    lock(): void;
    unlock(): void;
    isEmptyUndoStack(): boolean;
}
export {};
