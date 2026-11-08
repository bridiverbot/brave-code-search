import type { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * Converts beforeNextRender() API to promise-based.
 */
export declare function waitBeforeNextRender(element: HTMLElement): Promise<void>;
/**
 * Converts afterNextRender() API to promise-based.
 */
export declare function waitAfterNextRender(element: HTMLElement): Promise<void>;
export declare function flushTasks(): Promise<void>;
/**
 * Data-binds two Polymer properties using the property-changed events and
 * set/notifyPath API. Useful for testing components which would normally be
 * used together.
 */
export declare function fakeDataBind(el1: PolymerElement, el2: PolymerElement, property: string): void;
