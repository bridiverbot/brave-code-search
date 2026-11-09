// Copyright (c) 2024 The Brave Authors. All rights reserved.
import{injectStyle}from"//resources/brave/lit_overriding.js";import{css}from"//resources/lit/v3_0/lit.rollup.js";import{PowerBookmarksService}from"./power_bookmarks_service.js";import{PowerBookmarksListElement}from"./power_bookmarks_list-chromium.js";injectStyle(PowerBookmarksListElement,css`
  :host {
    --iron-icon-width: 16px;
  }

  .new-folder-row {
    color: var(--leo-color-text-interactive);
  }

  .new-folder-icon-container {
    --iron-icon-fill-color: var(--leo-color-icon-interactive);

    border: 1px solid var(--leo-color-divider-interactive);
    border-radius: var(--leo-radius-s);
  }
`);const originalSortBookmarks=PowerBookmarksService.prototype.sortBookmarks;PowerBookmarksService.prototype.sortBookmarks=function(bookmarks,activeSortIndex){if(activeSortIndex===5){return false}return originalSortBookmarks.apply(this,[bookmarks,activeSortIndex])};const proto=PowerBookmarksListElement.prototype;const originalOnBookmarkMoved=proto.onBookmarkMoved;proto.onBookmarkMoved=function(bookmark,oldParent,newParent){originalOnBookmarkMoved.apply(this,[bookmark,oldParent,newParent]);const shouldShow=this.bookmarkShouldShow_(bookmark);if(oldParent===newParent&&shouldShow&&this.activeSortIndex===5){this.updateDisplayList_()}};export*from"./power_bookmarks_list-chromium.js";customElements.define(PowerBookmarksListElement.is,PowerBookmarksListElement);