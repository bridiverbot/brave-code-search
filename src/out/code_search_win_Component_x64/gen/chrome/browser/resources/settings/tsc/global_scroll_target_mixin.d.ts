import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route, RouteObserverMixinInterface } from './router.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const GlobalScrollTargetMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<GlobalScrollTargetMixinInterface>;
export interface GlobalScrollTargetMixinInterface extends RouteObserverMixinInterface {
    scrollTarget: HTMLElement;
    subpageRoute: Route;
}
/**
 * This should only be called once.
 */
export declare function setGlobalScrollTarget(scrollTarget: HTMLElement): void;
export declare function resetGlobalScrollTargetForTesting(): void;
export {};
