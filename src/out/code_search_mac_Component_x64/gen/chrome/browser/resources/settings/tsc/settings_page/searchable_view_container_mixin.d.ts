import type { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route, RouteObserverMixinInterface } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SearchableViewContainerMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<SearchableViewContainerMixinInterface>;
export interface SearchableViewContainerMixinInterface extends RouteObserverMixinInterface, SettingsPlugin {
    inSearchMode: boolean;
    shouldShowAll: boolean;
    currentRoute: Route | null;
}
export {};
