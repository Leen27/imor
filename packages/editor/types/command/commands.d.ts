export interface ICommand {
    execute(...args: any): Promise<any>;
    undo(...args: any): Promise<any>;
}
declare const _default: Record<string, ICommand>;
export default _default;
