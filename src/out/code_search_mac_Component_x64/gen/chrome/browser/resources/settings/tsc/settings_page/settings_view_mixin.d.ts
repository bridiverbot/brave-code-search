import type { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FocusConfig } from '../focus_config.js';
import type { RouteObserverMixinInterface } from '../router.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SettingsViewMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<SettingsViewMixinInterface>;
export interface SettingsViewMixinInterface extends RouteObserverMixinInterface {
    focusBackButton(): void;
    getFocusConfig(): FocusConfig | null;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
export {};
