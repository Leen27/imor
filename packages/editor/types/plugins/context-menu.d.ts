import type { PluginT } from './plugin';
import { EditorEvents } from '../events';
export interface MenuItem {
    key: string;
    text: string;
    icon?: string;
    onSelect?: (instance: MenuInstance, item: MenuItem) => void;
    children?: Array<MenuItem>;
}
export interface Menu {
    id: string;
    showEvent?: EditorEvents | EditorEvents[];
    hideEvent?: EditorEvents | EditorEvents[];
    items: MenuItem[];
}
export interface MenuInstance {
    el: HTMLDivElement;
    elId: string;
    show: (x: number, y: number) => void;
    hide: () => void;
}
declare const _default: () => PluginT & {
    menuesInstance: Array<MenuInstance>;
};
export default _default;
