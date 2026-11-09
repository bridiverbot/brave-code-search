import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const ItemMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<ItemMixinInterface>;
export interface ItemMixinInterface {
    appOrExtension(type: chrome.developerPrivate.ExtensionType, appLabel: string, extensionLabel: string): string;
    a11yAssociation(name: string): string;
    canReloadItem(): boolean;
    reloadItem(): Promise<void>;
}
export {};
