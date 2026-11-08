// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TestSectionDelegate {
    id_;
    header_;
    items_;
    getZeroState;
    shouldAlwaysShowZeroState;
    lastClickedItem_;
    clickCount_ = 0;
    lastActionButtonClickedItem_;
    lastActionButtonElement_;
    actionButtonClickCount_ = 0;
    lastContextMenuClickedItem_;
    lastContextMenuCoordinates_;
    contextMenuClickCount_ = 0;
    constructor(header, items = [], zeroState, id = 'open-tabs', alwaysShowZeroState = false) {
        this.id_ = id;
        this.header_ = header;
        this.items_ = items;
        if (zeroState) {
            this.getZeroState = () => zeroState;
        }
        if (alwaysShowZeroState) {
            this.shouldAlwaysShowZeroState = () => alwaysShowZeroState;
        }
    }
    init(_sectionClient) { }
    getId() {
        return this.id_;
    }
    getHeader() {
        return this.header_;
    }
    getItems() {
        return Promise.resolve(this.items_);
    }
    onItemClick(item) {
        this.lastClickedItem_ = item;
        this.clickCount_++;
    }
    getLastClickedItem() {
        return this.lastClickedItem_;
    }
    getClickCount() {
        return this.clickCount_;
    }
    onItemActionButtonClicked(item, buttonElement) {
        this.lastActionButtonClickedItem_ = item;
        this.lastActionButtonElement_ = buttonElement;
        this.actionButtonClickCount_++;
    }
    getLastActionButtonClickedItem() {
        return this.lastActionButtonClickedItem_;
    }
    getLastActionButtonElement() {
        return this.lastActionButtonElement_;
    }
    getActionButtonClickCount() {
        return this.actionButtonClickCount_;
    }
    onItemContextMenuClicked(item, x, y) {
        this.lastContextMenuClickedItem_ = item;
        this.lastContextMenuCoordinates_ = { x, y };
        this.contextMenuClickCount_++;
    }
    getLastContextMenuClickedItem() {
        return this.lastContextMenuClickedItem_;
    }
    getLastContextMenuCoordinates() {
        return this.lastContextMenuCoordinates_;
    }
    getContextMenuClickCount() {
        return this.contextMenuClickCount_;
    }
}
