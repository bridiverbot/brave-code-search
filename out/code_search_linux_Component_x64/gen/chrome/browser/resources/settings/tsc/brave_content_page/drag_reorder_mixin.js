// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { css, 
// The template is rendered by a mixin method, so it can't live in a
// .html.ts file.
// eslint-disable-next-line @webui-eslint/lit-element-structure
html, } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export const getDragReorderCss = () => css `
  .dragging {
    opacity: 0.5;
  }

  .drag-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--leo-color-icon-default);
    cursor: grab;
  }

  .drag-handle:active {
    cursor: grabbing;
  }
`;
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
export const DragReorderMixin = (superClass) => {
    class DragReorderMixinInternal extends superClass {
        draggingId_ = null;
        previewOrder_;
        dropCommitted_ = false;
        animationId_ = 0;
        animations_ = [];
        getReorderableIds_() {
            throw new Error('getReorderableIds_() must be implemented by the host');
        }
        onItemsReordered_(_orderedIds) {
            throw new Error('onItemsReordered_() must be implemented by the host');
        }
        onReorderableItemsUpdated_() {
            // A browser or sync update is authoritative, even if it changes the
            // list dramatically or arrives while a drag is in progress.
            this.animationId_++;
            this.cancelAnimations_();
            this.draggingId_ = null;
            this.previewOrder_ = undefined;
            this.dropCommitted_ = false;
            this.requestUpdate();
        }
        dragRowClass_(id) {
            return this.draggingId_ === id ? 'dragging' : '';
        }
        dragReorderedItems_(items) {
            if (!this.previewOrder_) {
                return items;
            }
            // Ignore preview ids that disappeared in a concurrent browser/sync
            // update instead of rendering undefined rows.
            const itemsById = new Map(items.map((item) => [item.id, item]));
            return this.previewOrder_
                .map((id) => itemsById.get(id))
                .filter((item) => item !== undefined);
        }
        dragHandleTemplate_(id) {
            return html `
        <div
          class="drag-handle"
          data-drag-handle-id="${id}"
          draggable="true"
          role="button"
          tabindex="0"
          aria-label="${this.i18n("SETTINGS_DRAG_TO_REORDER_LABEL" /* ContainersStrings.SETTINGS_DRAG_TO_REORDER_LABEL */)}"
          aria-keyshortcuts="ArrowUp ArrowDown"
          @dragstart="${this.onDragHandleStart_}"
          @dragend="${this.onDragHandleEnd_}"
          @keydown="${this.onDragHandleKeydown_}"
        >
          <leo-icon name="drag"></leo-icon>
        </div>
      `;
        }
        onListDragover_(e) {
            if (!this.draggingId_) {
                return;
            }
            const list = e.currentTarget;
            // Lit can briefly place the pointer over the list or a row border while
            // keyed rows are reordered. Keep the whole list a valid move target so
            // Chromium does not flash the disallowed cursor between dragover events.
            e.preventDefault();
            if (e.dataTransfer) {
                e.dataTransfer.dropEffect = 'move';
            }
            const row = this.rowFromEvent_(e, list);
            const rows = list.querySelectorAll('[data-drag-id]');
            const lastRow = rows[rows.length - 1];
            // Use row midpoints so both halves of a row are useful drop targets;
            // the area after the final row appends the item.
            const after = !!row
                && e.clientY >= row.getBoundingClientRect().top + row.offsetHeight / 2;
            const append = !!lastRow
                && ((!row && e.clientY >= lastRow.getBoundingClientRect().bottom)
                    || (row === lastRow && after));
            const targetId = row?.dataset['dragId'];
            if (!targetId && !append) {
                return;
            }
            this.updatePreviewOrder_(list, targetId ?? null, after, append);
        }
        onListDragenter_(e) {
            if (!this.draggingId_) {
                return;
            }
            // Chromium negotiates the drag cursor on dragenter, before the first
            // dragover. Accept the list here to prevent a transient disallowed
            // cursor while the pointer crosses a row boundary.
            e.preventDefault();
            if (e.dataTransfer) {
                e.dataTransfer.dropEffect = 'move';
            }
        }
        onListDrop_(e) {
            if (!this.draggingId_) {
                return;
            }
            const list = e.currentTarget;
            const row = this.rowFromEvent_(e, list);
            const rows = list.querySelectorAll('[data-drag-id]');
            const lastRow = rows[rows.length - 1];
            if ((!row && !lastRow)
                || (!row && e.clientY < lastRow.getBoundingClientRect().bottom)) {
                return;
            }
            e.preventDefault();
            // The preview is already the order to persist; the next backing-list
            // update will clear it after the browser accepts the change.
            this.finishDrag_();
        }
        updatePreviewOrder_(list, targetId, after, append) {
            const ids = this.previewOrder_ ?? this.getReorderableIds_();
            const draggingIndex = ids.indexOf(this.draggingId_ ?? '');
            const targetIndex = targetId ? ids.indexOf(targetId) : ids.length - 1;
            const insertionIndex = append
                ? ids.length
                : targetIndex + (after ? 1 : 0);
            // These positions leave the dragged item where it already is. Avoid
            // rerendering and animating when crossing either side of itself.
            if (draggingIndex === -1
                || targetIndex === -1
                || insertionIndex === draggingIndex
                || insertionIndex === draggingIndex + 1) {
                return;
            }
            const reordered = ids.slice();
            reordered.splice(draggingIndex, 1);
            reordered.splice(insertionIndex > draggingIndex ? insertionIndex - 1 : insertionIndex, 0, this.draggingId_);
            const oldPositions = new Map();
            list.querySelectorAll('[data-drag-id]').forEach((row) => {
                oldPositions.set(row.dataset['dragId'], row.getBoundingClientRect());
            });
            this.cancelAnimations_();
            this.previewOrder_ = reordered;
            this.requestUpdate();
            const animationId = ++this.animationId_;
            this.updateComplete.then(() => {
                // A later drag update, drop, or sync update makes this measurement
                // stale, so never animate against that newer layout.
                if (animationId !== this.animationId_) {
                    return;
                }
                list.querySelectorAll('[data-drag-id]').forEach((row) => {
                    const oldPosition = oldPositions.get(row.dataset['dragId']);
                    if (!oldPosition) {
                        return;
                    }
                    const newPosition = row.getBoundingClientRect();
                    const offset = oldPosition.top - newPosition.top;
                    if (!offset) {
                        return;
                    }
                    if (animationId !== this.animationId_) {
                        return;
                    }
                    requestAnimationFrame(() => {
                        if (animationId !== this.animationId_) {
                            return;
                        }
                        const animation = row.animate([
                            { transform: `translateY(${offset}px)` },
                            { transform: 'translateY(0)' },
                        ], { duration: 50, easing: 'ease' });
                        this.animations_.push(animation);
                        const removeAnimation = () => {
                            this.animations_ = this.animations_.filter((activeAnimation) => activeAnimation !== animation);
                        };
                        animation.finished.then(removeAnimation, removeAnimation);
                    });
                });
            });
        }
        rowFromEvent_(e, list) {
            const target = e.target;
            if (!(target instanceof Element)) {
                return null;
            }
            const row = target.closest('[data-drag-id]');
            return row && list.contains(row) ? row : null;
        }
        onDragHandleStart_(e) {
            const handle = e.currentTarget;
            const id = handle.dataset['dragHandleId'];
            if (!id) {
                return;
            }
            this.draggingId_ = id;
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', id);
                const row = handle.closest('[data-drag-id]');
                if (row) {
                    const bounds = row.getBoundingClientRect();
                    e.dataTransfer.setDragImage(row, Math.max(0, e.clientX - bounds.left), Math.max(0, e.clientY - bounds.top));
                }
            }
            this.requestUpdate();
        }
        onDragHandleEnd_() {
            if (this.dropCommitted_) {
                // Drop and dragend are separate native events. Keep the optimistic
                // order through dragend until the browser sends the updated list.
                this.dropCommitted_ = false;
                return;
            }
            this.clearDrag_();
        }
        onDragHandleKeydown_(e) {
            const direction = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
            if (!direction) {
                return;
            }
            const handle = e.currentTarget;
            const id = handle.dataset['dragHandleId'];
            const ids = this.previewOrder_ ?? this.getReorderableIds_();
            const currentIndex = ids.indexOf(id ?? '');
            const nextIndex = currentIndex + direction;
            if (currentIndex < 0 || nextIndex < 0 || nextIndex >= ids.length) {
                return;
            }
            e.preventDefault();
            const reordered = ids.slice();
            reordered.splice(currentIndex, 1);
            reordered.splice(nextIndex, 0, id);
            this.previewOrder_ = reordered;
            this.onItemsReordered_(reordered);
            this.requestUpdate();
            // Lit moves keyed rows during the update. Restore focus after that move
            // so repeated arrow presses continue to reorder the same item.
            this.updateComplete.then(() => {
                this.renderRoot
                    .querySelector(`[data-drag-handle-id="${CSS.escape(id)}"]`)
                    ?.focus();
            });
        }
        finishDrag_() {
            const draggingId = this.draggingId_;
            const order = this.previewOrder_;
            this.animationId_++;
            this.cancelAnimations_();
            this.draggingId_ = null;
            if (draggingId && order) {
                // Keep rendering the optimistic order to avoid flashing back to the
                // old prefs order while the asynchronous Mojo call completes.
                this.dropCommitted_ = true;
                this.onItemsReordered_(order);
            }
            else {
                this.previewOrder_ = undefined;
            }
            this.requestUpdate();
        }
        clearDrag_() {
            this.animationId_++;
            this.cancelAnimations_();
            this.draggingId_ = null;
            this.dropCommitted_ = false;
            this.previewOrder_ = undefined;
            this.requestUpdate();
        }
        cancelAnimations_() {
            this.animations_.forEach((animation) => animation.cancel());
            this.animations_ = [];
        }
    }
    return DragReorderMixinInternal;
};
