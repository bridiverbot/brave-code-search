// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import './viewer_attachment_bar.js';
import './viewer_document_outline.js';
import './viewer_thumbnail_bar.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { record, UserAction } from '../metrics.js';
import { getCss } from './viewer_pdf_sidenav.css.js';
import { getHtml } from './viewer_pdf_sidenav.html.js';
var TabId;
(function (TabId) {
    TabId[TabId["THUMBNAIL"] = 0] = "THUMBNAIL";
    TabId[TabId["OUTLINE"] = 1] = "OUTLINE";
    TabId[TabId["ATTACHMENT"] = 2] = "ATTACHMENT";
})(TabId || (TabId = {}));
export class ViewerPdfSidenavElement extends CrLitElement {
    static get is() {
        return 'viewer-pdf-sidenav';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            activePage: { type: Number },
            attachments: { type: Array },
            bookmarks: { type: Array },
            clockwiseRotations: { type: Number },
            docLength: { type: Number },
            sidenavCollapsed: { type: Boolean },
            strings: { type: Object },
            selectedTab_: { type: Number },
            tabs_: { type: Array },
        };
    }
    #activePage_accessor_storage = 0;
    get activePage() { return this.#activePage_accessor_storage; }
    set activePage(value) { this.#activePage_accessor_storage = value; }
    #attachments_accessor_storage = [];
    get attachments() { return this.#attachments_accessor_storage; }
    set attachments(value) { this.#attachments_accessor_storage = value; }
    #bookmarks_accessor_storage = [];
    get bookmarks() { return this.#bookmarks_accessor_storage; }
    set bookmarks(value) { this.#bookmarks_accessor_storage = value; }
    #clockwiseRotations_accessor_storage = 0;
    get clockwiseRotations() { return this.#clockwiseRotations_accessor_storage; }
    set clockwiseRotations(value) { this.#clockwiseRotations_accessor_storage = value; }
    #docLength_accessor_storage = 0;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #sidenavCollapsed_accessor_storage = false;
    get sidenavCollapsed() { return this.#sidenavCollapsed_accessor_storage; }
    set sidenavCollapsed(value) { this.#sidenavCollapsed_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    #selectedTab__accessor_storage = 0;
    get selectedTab_() { return this.#selectedTab__accessor_storage; }
    set selectedTab_(value) { this.#selectedTab__accessor_storage = value; }
    #tabs__accessor_storage = [];
    get tabs_() { return this.#tabs__accessor_storage; }
    set tabs_(value) { this.#tabs__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('bookmarks') ||
            changedProperties.has('attachments')) {
            this.tabs_ = this.computeTabs_();
        }
    }
    computeTabs_() {
        const tabs = [
            {
                id: TabId.THUMBNAIL,
                icon: 'pdf:image',
                title: this.strings ? loadTimeData.getString('tooltipThumbnails') : '',
            },
        ];
        if (this.bookmarks.length > 0) {
            tabs.push({
                id: TabId.OUTLINE,
                icon: 'pdf:list-alt',
                title: this.strings ? loadTimeData.getString('tooltipDocumentOutline') :
                    '',
            });
        }
        if (this.attachments.length > 0) {
            tabs.push({
                id: TabId.ATTACHMENT,
                icon: 'pdf:attach-file',
                title: this.strings ? loadTimeData.getString('tooltipAttachments') : '',
            });
        }
        return tabs;
    }
    hideIcons_() {
        return this.tabs_.length === 1;
    }
    getTabAriaSelected_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? 'true' : 'false';
    }
    getTabIndex_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? '0' : '-1';
    }
    getTabSelectedClass_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? 'selected' : '';
    }
    onTabClick_(e) {
        const tabId = e.currentTarget.dataset['tabId'];
        assert(tabId !== undefined);
        const tabIdNumber = Number.parseInt(tabId, 10);
        switch (tabIdNumber) {
            case TabId.THUMBNAIL:
                record(UserAction.SELECT_SIDENAV_THUMBNAILS);
                this.selectedTab_ = 0;
                break;
            case TabId.OUTLINE:
                record(UserAction.SELECT_SIDENAV_OUTLINE);
                this.selectedTab_ = 1;
                break;
            case TabId.ATTACHMENT:
                record(UserAction.SELECT_SIDENAV_ATTACHMENT);
                this.selectedTab_ = this.tabs_.length - 1;
                break;
            default:
                assertNotReachedCase(tabIdNumber);
        }
    }
    hideThumbnailView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.THUMBNAIL;
    }
    hideOutlineView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.OUTLINE;
    }
    hideAttachmentView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.ATTACHMENT;
    }
    onKeydown_(e) {
        if (this.tabs_.length === 1 ||
            (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.key === 'ArrowUp') {
            if (this.selectedTab_ === 0) {
                this.selectedTab_ = this.tabs_.length - 1;
            }
            else {
                this.selectedTab_--;
            }
        }
        else {
            if (this.selectedTab_ === this.tabs_.length - 1) {
                this.selectedTab_ = 0;
            }
            else {
                this.selectedTab_++;
            }
        }
    }
}
customElements.define(ViewerPdfSidenavElement.is, ViewerPdfSidenavElement);
