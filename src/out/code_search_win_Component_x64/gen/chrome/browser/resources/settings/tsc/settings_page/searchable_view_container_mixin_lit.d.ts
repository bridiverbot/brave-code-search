import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Route, RouteObserverMixinInterface } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SearchableViewContainerMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SearchableViewContainerMixinLitInterface>;
export interface SearchableViewContainerMixinLitInterface extends RouteObserverMixinInterface, SettingsPlugin {
    inSearchMode: boolean;
    shouldShowAll: boolean;
    currentRoute: Route | null;
}
export {};
