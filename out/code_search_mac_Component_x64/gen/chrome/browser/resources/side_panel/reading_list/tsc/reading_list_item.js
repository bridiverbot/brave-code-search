// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import { MouseHoverableMixinLit } from 'chrome://resources/cr_elements/mouse_hoverable_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './reading_list.mojom-webui.js';
import { getCss } from './reading_list_item.css.js';
import { getHtml } from './reading_list_item.html.js';
export const MARKED_AS_READ_UI_EVENT = 'reading-list-marked-as-read';
const navigationKeys = new Set([' ', 'Enter', 'ArrowRight', 'ArrowLeft']);
const ReadingListItemElementBase = MouseHoverableMixinLit(CrLitElement);
export class ReadingListItemElement extends ReadingListItemElementBase {
    static get is() {
        return 'reading-list-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            data: { type: Object },
            buttonRipples: { type: Boolean },
        };
    }
    #data_accessor_storage = {
        title: '',
        url: '',
        displayUrl: '',
        updateTime: 0n,
        read: false,
        displayTimeSinceUpdate: '',
    };
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #buttonRipples_accessor_storage = false;
    get buttonRipples() { return this.#buttonRipples_accessor_storage; }
    set buttonRipples(value) { this.#buttonRipples_accessor_storage = value; }
    apiProxy_ = browserProxyFactory.getInstance();
    firstUpdated() {
        this.addEventListener('click', this.onClick_);
        this.addEventListener('auxclick', this.onAuxClick_.bind(this));
        this.addEventListener('contextmenu', this.onContextMenu_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
    }
    focus() {
        this.$.crUrlListItem.focus();
    }
    onAuxClick_(e) {
        if (e.button !== 1) {
            // Not a middle click.
            return;
        }
        this.apiProxy_.handler.openURL(this.data.url, {
            middleButton: true,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        });
    }
    onClick_(e) {
        this.apiProxy_.handler.openURL(this.data.url, {
            middleButton: false,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        });
    }
    onContextMenu_(e) {
        this.apiProxy_.handler.showContextMenuForURL(this.data.url, e.clientX, e.clientY);
    }
    onKeyDown_(e) {
        if (e.shiftKey || !navigationKeys.has(e.key)) {
            return;
        }
        const focusableElements = [
            this.$.crUrlListItem,
            this.$.updateStatusButton,
            this.$.deleteButton,
        ];
        const focusedIndex = focusableElements.indexOf(this.shadowRoot.activeElement);
        switch (e.key) {
            case ' ':
            case 'Enter':
                this.onClick_(e);
                break;
            case 'ArrowRight': {
                const index = focusedIndex >= focusableElements.length - 1 ? 0 : focusedIndex + 1;
                focusableElements[index].focus();
                break;
            }
            case 'ArrowLeft': {
                const index = focusedIndex <= 0 ? focusableElements.length - 1 : focusedIndex - 1;
                focusableElements[index].focus();
                break;
            }
            default:
                assertNotReached();
        }
        e.preventDefault();
        e.stopPropagation();
    }
    onUpdateStatusClick_(e) {
        e.stopPropagation();
        this.apiProxy_.handler.updateReadStatus(this.data.url, !this.data.read);
        if (!this.data.read) {
            this.fire(MARKED_AS_READ_UI_EVENT);
        }
    }
    onItemDeleteClick_(e) {
        e.stopPropagation();
        this.apiProxy_.handler.removeEntry(this.data.url);
    }
    /**
     * @return The appropriate icon for the current state
     */
    getUpdateStatusButtonIcon_() {
        return this.data.read ?
            (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-later:check-circle-filled' :
                'read-later:check-circle-reverse-old') :
            'cr:check-circle';
    }
    /**
     * @return The appropriate tooltip for the current state
     */
    getUpdateStatusButtonTooltip_(markAsUnreadTooltip, markAsReadTooltip) {
        return this.data.read ? markAsUnreadTooltip : markAsReadTooltip;
    }
}
customElements.define(ReadingListItemElement.is, ReadingListItemElement);
