import type { I18nMixinLitInterface } from '//resources/cr_elements/i18n_mixin_lit.js';
import type { CSSResultGroup } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement, TemplateResult } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
type I18nCrLitElement = CrLitElement & I18nMixinLitInterface;
export declare const getDragReorderCss: () => CSSResultGroup;
/**
 * Mixin that adds native HTML5 drag-and-drop reordering to a Lit element
 * rendering a list of items identified by string ids. Host elements provide
 * the current ordered list of ids and a callback to persist a new order, and
 * render `dragHandleTemplate_(id)` inside each row. Drag events are delegated
 * from the list so rows only need a `data-drag-id` attribute.
 *
 * Usage:
 *   class MyListElement extends DragReorderMixin(CrLitElement) {
 *     getReorderableIds_(): string[] { return this.items_.map(i => i.id) }
 *     onItemsReordered_(orderedIds: string[]) {
 *       this.browserProxy.handler.reorderItems(orderedIds)
 *     }
 *   }
 *
 *   // In the template, bind these events once on the list, and provide each
 *   // row with `data-drag-id`:
 *   <div
 *     class="list"
 *     @dragenter="${this.onListDragenter_}"
 *     @dragover="${this.onListDragover_}"
 *     @drop="${this.onListDrop_}"
 *   >
 *     <div class="row ${this.dragRowClass_(item.id)}"
 *          data-drag-id="${item.id}">
 *       ${this.dragHandleTemplate_(item.id)}
 *       ...
 *     </div>
 *   </div>
 */
export declare const DragReorderMixin: <T extends Constructor<I18nCrLitElement>>(superClass: T) => T & Constructor<DragReorderMixinInterface>;
export interface DragReorderMixinInterface {
    /** Implemented by the host: returns the ids of the reorderable items, in
     * their current display order. */
    getReorderableIds_(): string[];
    /** Implemented by the host: called with the full list of ids in the new
     * order after a pointer or keyboard reorder. */
    onItemsReordered_(orderedIds: string[]): void;
    /** Cancels drag and preview state after the backing list changes. */
    onReorderableItemsUpdated_(): void;
    /** Returns the CSS classes to apply to a row's outer element for drag
     * feedback (dragging / drag-over). */
    dragRowClass_(id: string): string;
    dragReorderedItems_<T extends {
        id: string;
    }>(items: T[]): T[];
    /** Renders a row handle that supports pointer drag and arrow-key reordering. */
    dragHandleTemplate_(id: string): TemplateResult;
    /** Event handlers to bind once on the list element. */
    onListDragenter_(e: DragEvent): void;
    onListDragover_(e: DragEvent): void;
    onListDrop_(e: DragEvent): void;
}
export {};
