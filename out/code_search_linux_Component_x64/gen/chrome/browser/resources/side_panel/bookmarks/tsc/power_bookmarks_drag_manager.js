// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { PowerBookmarkRowElement } from './power_bookmark_row.js';
import { getFolderDescendants, PowerBookmarksService } from './power_bookmarks_service.js';
export const DROP_POSITION_ATTR = 'drop-position';
export var DropPosition;
(function (DropPosition) {
    DropPosition["INTO"] = "into";
})(DropPosition || (DropPosition = {}));
// Conversion is needed given that `chrome.bookmarkManagerPrivate.DragData`
// contains a `chrome.bookmarks.BookmarkTreeNode` to be able to communicate
// with the rest of the UIs in chrome.
function toExtensionsBookmarkTreeNode(mojoNode) {
    const extensionNode = {
        id: mojoNode.id,
        parentId: mojoNode.parentId,
        title: mojoNode.title,
        index: mojoNode.index,
    };
    if (mojoNode.url && mojoNode.url.length !== 0) {
        extensionNode.url = mojoNode.url;
    }
    else if (mojoNode.children) {
        extensionNode.children =
            mojoNode.children.map(toExtensionsBookmarkTreeNode);
    }
    if (mojoNode.dateAdded !== null) {
        extensionNode.dateAdded = mojoNode.dateAdded;
    }
    if (mojoNode.dateLastUsed !== null) {
        extensionNode.dateLastUsed = mojoNode.dateLastUsed;
    }
    if (mojoNode.unmodifiable) {
        extensionNode.unmodifiable =
            chrome.bookmarks.BookmarkTreeNodeUnmodifiable.MANAGED;
    }
    return extensionNode;
}
class DragSession {
    delegate_;
    dragData_;
    lastDragOverElements_ = [];
    lastDropTargetBookmark_ = null;
    lastBookmarkRowElement_ = null;
    bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
    constructor(delegate, dragData) {
        this.delegate_ = delegate;
        this.dragData_ = dragData;
    }
    start(e) {
        chrome.bookmarkManagerPrivate.startDrag(this.dragData_.elements.map(bookmark => bookmark.id), 0, false, e.clientX, e.clientY);
    }
    update(e) {
        const bookmarkRowElement = e.composedPath().find(target => {
            return target instanceof PowerBookmarkRowElement;
        });
        if (bookmarkRowElement === this.lastBookmarkRowElement_) {
            return;
        }
        this.lastBookmarkRowElement_ = bookmarkRowElement || null;
        this.resetState_();
        const fallbackBookmark = this.delegate_.getFallbackBookmark();
        let dropTargetBookmark = fallbackBookmark;
        let useFallbackHighlight = true;
        if (bookmarkRowElement) {
            // Resolve target: parent folder if hovering over a URL, folder itself
            // if hovering over a folder.
            const isUrl = bookmarkRowElement.bookmark.url;
            const targetNode = isUrl ?
                PowerBookmarksService.getInstance().findBookmarkWithId(bookmarkRowElement.bookmark.parentId) :
                bookmarkRowElement.bookmark;
            // Validate target and determine if we should highlight a specific folder.
            if (targetNode && !targetNode.unmodifiable) {
                dropTargetBookmark = targetNode;
                // Only turn off fallback container highlight if target is a subfolder.
                if (dropTargetBookmark.id !== fallbackBookmark.id) {
                    useFallbackHighlight = false;
                }
            }
        }
        const draggedBookmarks = this.dragData_.elements;
        if (draggedBookmarks.length === 0) {
            this.cancel();
            return;
        }
        const elementsToHighlight = [];
        if (useFallbackHighlight) {
            elementsToHighlight.push(this.delegate_.getFallbackDropTargetElement());
        }
        else {
            const descendants = getFolderDescendants(dropTargetBookmark);
            descendants.forEach(descendant => {
                const element = this.delegate_.getBookmarkRowElement(descendant.id);
                if (element) {
                    elementsToHighlight.push(element);
                }
            });
            if (elementsToHighlight.length === 0) {
                elementsToHighlight.push(this.delegate_.getFallbackDropTargetElement());
            }
        }
        elementsToHighlight.forEach(element => {
            element.setAttribute(DROP_POSITION_ATTR, DropPosition.INTO);
        });
        this.lastDragOverElements_ = elementsToHighlight;
        this.lastDropTargetBookmark_ = dropTargetBookmark;
    }
    cancel() {
        this.resetState_();
        this.lastDropTargetBookmark_ = null;
        this.lastBookmarkRowElement_ = null;
    }
    finish() {
        // TODO(crbug.com/40267573): Ensure it is possible to drag bookmarks into an
        // empty active folder.
        if (!this.lastDropTargetBookmark_) {
            return;
        }
        const draggedBookmarks = this.dragData_.elements;
        const dropTargetIsParent = !draggedBookmarks.some((bookmark) => bookmark.parentId !== this.lastDropTargetBookmark_.id);
        const dropTargetIsSelfOrDescendant = draggedBookmarks.some((dragged) => {
            // The drag-and-drop system provides extension-formatted nodes. We
            // must resolve the corresponding Mojo-formatted node from our
            // internal service so we can query its descendants using
            // getFolderDescendants.
            const mojoNode = PowerBookmarksService.getInstance().findBookmarkWithId(dragged.id);
            if (mojoNode) {
                return getFolderDescendants(mojoNode).some(descendant => descendant.id === this.lastDropTargetBookmark_.id);
            }
            return false;
        });
        if (dropTargetIsParent || dropTargetIsSelfOrDescendant) {
            this.cancel();
            return;
        }
        const targetBookmark = this.lastDropTargetBookmark_;
        this.bookmarksApi_.dropBookmarks(targetBookmark.id).then(() => {
            this.delegate_.onFinishDrop(targetBookmark);
        });
        this.cancel();
    }
    resetState_() {
        this.lastDragOverElements_.forEach(element => {
            element.removeAttribute(DROP_POSITION_ATTR);
        });
        this.lastDragOverElements_ = [];
    }
    static createFromBookmark(delegate, bookmark) {
        return new DragSession(delegate, {
            elements: [toExtensionsBookmarkTreeNode(bookmark)],
            sameProfile: true,
        });
    }
}
// Listens to standard drag events for taking care of drag and drop events
// generating from the Side Panel.
// Listens to `chrome.bookmarkManagerPrivate` for events that originates from
// different sources and affect the Side Panel - e.g. drop event in the Side
// Panel that originates from the BookmarkBar.
// Dependency on the chrome extension private API is an exception here since it
// allows to get information from different sources.
export class PowerBookmarksDragManager {
    delegate_;
    dragSession_ = null;
    eventTracker_ = new EventTracker();
    lastPointerWasTouch_ = false;
    constructor(delegate) {
        this.delegate_ = delegate;
    }
    startObserving() {
        this.eventTracker_.removeAll();
        this.eventTracker_.add(this.delegate_, 'pointerdown', (e) => this.lastPointerWasTouch_ =
            e.pointerType === 'touch');
        this.eventTracker_.add(this.delegate_, 'dragstart', (e) => this.onDragStart_(e));
        this.eventTracker_.add(this.delegate_, 'dragover', (e) => this.onDragOver_(e));
        this.eventTracker_.add(this.delegate_, 'dragleave', () => this.onDragLeave_());
        this.eventTracker_.add(this.delegate_, 'dragend', () => this.cancelDrag_());
        this.eventTracker_.add(this.delegate_, 'drop', (e) => this.onDrop_(e));
        if (loadTimeData.getBoolean('editBookmarksEnabled')) {
            chrome.bookmarkManagerPrivate.onDragEnter.addListener((dragData) => this.onChromeDragEnter_(dragData));
            chrome.bookmarkManagerPrivate.onDragLeave.addListener(() => this.cancelDrag_());
        }
    }
    stopObserving() {
        this.eventTracker_.removeAll();
    }
    hasActiveDrag() {
        return !!this.dragSession_;
    }
    cancelDrag_() {
        if (!this.dragSession_) {
            return;
        }
        this.dragSession_.cancel();
        this.dragSession_ = null;
        this.delegate_.setHasActiveDrag(false);
    }
    onChromeDragEnter_(dragData) {
        if (this.dragSession_) {
            // A drag session is already in flight.
            return;
        }
        this.dragSession_ = new DragSession(this.delegate_, dragData);
    }
    onDragStart_(e) {
        e.preventDefault();
        if (!loadTimeData.getBoolean('editBookmarksEnabled') ||
            this.lastPointerWasTouch_) {
            return;
        }
        const bookmark = e.composedPath().find(target => target.draggable)
            ?.bookmark;
        if (!bookmark ||
            /* Cannot drag root's children. */ bookmark.parentId ===
                loadTimeData.getString('rootBookmarkId') ||
            bookmark.unmodifiable) {
            return;
        }
        this.dragSession_ =
            DragSession.createFromBookmark(this.delegate_, bookmark);
        this.dragSession_.start(e);
        this.delegate_.setHasActiveDrag(true);
    }
    onDragOver_(e) {
        e.preventDefault();
        if (!this.dragSession_) {
            return;
        }
        this.dragSession_.update(e);
    }
    onDragLeave_() {
        if (!this.dragSession_) {
            return;
        }
        this.dragSession_.cancel();
    }
    onDrop_(e) {
        if (!this.dragSession_) {
            return;
        }
        e.preventDefault();
        this.dragSession_.finish();
        this.dragSession_ = null;
        this.delegate_.setHasActiveDrag(false);
    }
}
