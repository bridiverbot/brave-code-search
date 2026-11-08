import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface KeyedActionState<T> {
    key: string;
    state: T;
    animateIn?: boolean;
    exiting?: boolean;
    dragPlaceholder?: boolean;
}
type Constructor<T> = new (...args: any[]) => T;
export interface ToolbarActionContainerMixinInterface<T> {
    states: T[];
    keyedStates: Array<KeyedActionState<T>>;
    getKey(state: T): string;
    isInitialUpdate(newStates: T[]): boolean;
    allExiting(): boolean;
    animateInDivider(): boolean;
    reconcileKeys(): void;
    onKeyedStatesChanged(): void;
    isDraggable(state: T, index: number): boolean;
    onActionDragover(e: DragEvent): void;
    onActionDrop(e: DragEvent): void;
    moveItem(id: string, index: number): void;
    moveItemBy(id: string, delta: number): void;
    getMimeType(): string;
    getBroadcastChannelName(): string;
    childTagName: string;
}
/**
 * A mixin for WebUI toolbar icon container elements (such as pinned toolbar
 * actions and extensions) that manage a list of dynamic items with slide-in
 * and slide-out animations.
 *
 * It reconciles new state arrays (`states`) against internal keyed items
 * (`keyedStates`), automatically setting the `exiting` flag for removed items
 * while keeping exiting items in the DOM until their CSS transitions complete.
 *
 * Usage:
 * 1. Mix in `ToolbarActionContainerMixin<T>` where `T` is your item state type.
 * 2. Implement `getKey(state: T): string` to return a unique key for each item.
 * 3. Implement `isDraggable(state: T, index: number): boolean` to specify
 *    which items are draggable. Non-draggable items must be positioned
 *    consecutively at the very end of the list, forming a fixed undraggable
 *    suffix that drag-and-drop operations cannot reorder or enter.
 * 4. Optionally override `isInitialUpdate(newStates: T[]): boolean` to suppress
 *    slide-in animations on initial load.
 * 5. Optionally override `onKeyedStatesChanged()` to recompute any state
 *    derived from `keyedStates`. It is invoked on every change to
 *    `keyedStates`, before any calls are made to isDraggable().
 * 6. In your Lit template (`.html.ts`), iterate over `this.keyedStates` using
 *    the Lit `repeat()` directive, applying `animate-in` and `exiting` CSS
 *    classes based on `keyedState.animateIn` and `keyedState.exiting`.
 */
export declare const ToolbarActionContainerMixin: <T, BaseClass extends Constructor<CrLitElement>>(superClass: BaseClass, initialState: T[]) => BaseClass & Constructor<ToolbarActionContainerMixinInterface<T>>;
export {};
