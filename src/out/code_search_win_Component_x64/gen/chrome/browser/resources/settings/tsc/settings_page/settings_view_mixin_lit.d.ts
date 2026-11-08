import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { FocusConfig } from '../focus_config.js';
import type { RouteObserverMixinInterface } from '../router.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SettingsViewMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SettingsViewMixinLitInterface>;
export interface SettingsViewMixinLitInterface extends RouteObserverMixinInterface {
    routePath: string;
    focusBackButton(): void;
    getFocusConfig(): FocusConfig | null;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
export {};
