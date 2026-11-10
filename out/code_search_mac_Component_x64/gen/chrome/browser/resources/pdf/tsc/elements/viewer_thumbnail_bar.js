// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './viewer_thumbnail.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { debounceEnd } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PluginController, PluginControllerEventType } from '../controller.js';
import { getCss } from './viewer_thumbnail_bar.css.js';
import { getHtml } from './viewer_thumbnail_bar.html.js';
// 
const DEBOUNCE_DELAY_MS = 100;
export class ViewerThumbnailBarElement extends CrLitElement {
    static get is() {
        return 'viewer-thumbnail-bar';
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
            clockwiseRotations: { type: Number },
            docLength: { type: Number },
            sidenavCollapsed: { type: Boolean },
            isPluginActive_: { type: Boolean },
        };
    }
    #activePage_accessor_storage = 0;
    get activePage() { return this.#activePage_accessor_storage; }
    set activePage(value) { this.#activePage_accessor_storage = value; }
    #clockwiseRotations_accessor_storage = 0;
    get clockwiseRotations() { return this.#clockwiseRotations_accessor_storage; }
    set clockwiseRotations(value) { this.#clockwiseRotations_accessor_storage = value; }
    #docLength_accessor_storage = 0;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #sidenavCollapsed_accessor_storage = false;
    get sidenavCollapsed() { return this.#sidenavCollapsed_accessor_storage; }
    set sidenavCollapsed(value) { this.#sidenavCollapsed_accessor_storage = value; }
    #isPluginActive__accessor_storage = false;
    get isPluginActive_() { return this.#isPluginActive__accessor_storage; }
    set isPluginActive_(value) { this.#isPluginActive__accessor_storage = value; }
    intersectionObserver_ = null;
    // A map of zero-based page indices to their corresponding thumbnail
    // elements waiting to be requested from the plugin.
    pendingThumbnails_ = new Map();
    pluginController_ = PluginController.getInstance();
    processPendingThumbnailsDebounced_ = debounceEnd(() => this.processPendingThumbnails_(), DEBOUNCE_DELAY_MS);
    tracker_ = new EventTracker();
    constructor() {
        super();
        this.isPluginActive_ = this.pluginController_.isActive;
        // Listen to whether the plugin is active. Thumbnails should be hidden
        // when the plugin is inactive.
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.IS_ACTIVE_CHANGED, (e) => {
            this.isPluginActive_ = e.detail;
            if (!this.isPluginActive_) {
                this.pendingThumbnails_.clear();
            }
        });
        // 
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.UPDATE_THUMBNAIL, this.handleUpdateThumbnail_.bind(this));
        // 
    }
    firstUpdated() {
        this.addEventListener('focus', this.onFocus_);
        this.addEventListener('keydown', this.onKeydown_);
        const thumbnailsDiv = this.$.thumbnails;
        this.intersectionObserver_ =
            new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const thumbnail = entry.target;
                    const pageIndex = thumbnail.pageNumber - 1;
                    if (!entry.isIntersecting) {
                        this.pendingThumbnails_.delete(pageIndex);
                        thumbnail.clearImage();
                        return;
                    }
                    if (thumbnail.isPainted()) {
                        return;
                    }
                    thumbnail.setPainted();
                    if (!this.isPluginActive_ || this.sidenavCollapsed) {
                        return;
                    }
                    this.pendingThumbnails_.set(pageIndex, thumbnail);
                    this.processPendingThumbnailsDebounced_();
                });
            }, {
                root: thumbnailsDiv,
                // The root margin is set to 100% on the bottom to prepare thumbnails
                // that are one standard scroll finger swipe away. The root margin is
                // set to 500% on the top to discard thumbnails that are far from
                // view, but to avoid regenerating thumbnails that are close.
                rootMargin: '500% 0% 100%',
            });
        FocusOutlineManager.forDocument(document);
    }
    clearPendingThumbnails_() {
        for (const thumbnail of this.pendingThumbnails_.values()) {
            thumbnail.clearImage();
        }
        this.pendingThumbnails_.clear();
    }
    observeThumbnails_() {
        assert(this.intersectionObserver_);
        this.shadowRoot.querySelectorAll('viewer-thumbnail')
            .forEach(thumbnail => this.intersectionObserver_.observe(thumbnail));
    }
    processPendingThumbnails_() {
        if (!this.isPluginActive_ || this.sidenavCollapsed) {
            this.clearPendingThumbnails_();
            return;
        }
        // Skip thumbnails that were cleared (e.g., scrolled out or plugin
        // deactivated) before the debounce timer fired.
        const queue = Array.from(this.pendingThumbnails_.entries())
            .filter(([_, thumbnail]) => thumbnail.isPainted());
        this.pendingThumbnails_.clear();
        for (const [pageIndex, thumbnail] of queue) {
            this.pluginController_.requestThumbnail(pageIndex).then(response => {
                // The thumbnail may have been scrolled out of view and cleared while
                // the asynchronous request was in flight.
                if (thumbnail.isPainted()) {
                    const array = new Uint8ClampedArray(response.imageData);
                    const imageData = new ImageData(array, response.width);
                    thumbnail.image = imageData;
                }
            });
        }
        this.dispatchEvent(new CustomEvent('thumbnails-processed-for-testing'));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('activePage')) {
            if (this.shadowRoot.activeElement) {
                // Changes the focus to the thumbnail of the new active page if the
                // focus was already on a thumbnail.
                this.getThumbnailForPage(this.activePage).focusAndScroll();
            }
        }
        if (changedProperties.has('sidenavCollapsed') && this.sidenavCollapsed) {
            assert(this.intersectionObserver_);
            this.intersectionObserver_.disconnect();
            this.clearPendingThumbnails_();
        }
        else if (!this.sidenavCollapsed &&
            (changedProperties.has('docLength') ||
                changedProperties.has('sidenavCollapsed'))) {
            this.observeThumbnails_();
        }
    }
    clickThumbnailForPage(pageNumber) {
        const thumbnail = this.getThumbnailForPage(pageNumber);
        if (!thumbnail) {
            return;
        }
        thumbnail.getClickTarget().click();
    }
    getThumbnailForPage(pageNumber) {
        return this.shadowRoot.querySelector(`viewer-thumbnail:nth-child(${pageNumber})`);
    }
    /** @return The array of page numbers. */
    computePageNumbers_() {
        return Array.from({ length: this.docLength }, (_, i) => i + 1);
    }
    getAriaLabel_(pageNumber) {
        return loadTimeData.getStringF('thumbnailPageAriaLabel', pageNumber);
    }
    /** @return Whether the page is the current page. */
    isActivePage_(page) {
        return this.activePage === page;
    }
    /** Forwards focus to a thumbnail when tabbing. */
    onFocus_() {
        // Ignore focus triggered by mouse to allow the focus to go straight to the
        // thumbnail being clicked.
        const focusOutlineManager = FocusOutlineManager.forDocument(document);
        if (!focusOutlineManager.visible) {
            return;
        }
        // Change focus to the thumbnail of the active page.
        const activeThumbnail = this.shadowRoot.querySelector('viewer-thumbnail[is-active]');
        if (activeThumbnail) {
            activeThumbnail.focus();
            return;
        }
        // Otherwise change to the first thumbnail, if there is one.
        const firstThumbnail = this.shadowRoot.querySelector('viewer-thumbnail');
        if (!firstThumbnail) {
            return;
        }
        firstThumbnail.focus();
    }
    onKeydown_(e) {
        switch (e.key) {
            case 'Tab':
                // On shift+tab, first redirect focus from the thumbnails to:
                // 1) Avoid focusing on the thumbnail bar.
                // 2) Focus to the element before the thumbnail bar from any thumbnail.
                if (e.shiftKey) {
                    this.focus();
                    return;
                }
                // On tab, first redirect focus to the last thumbnail to focus to the
                // element after the thumbnail bar from any thumbnail.
                const lastThumbnail = this.shadowRoot.querySelector('viewer-thumbnail:last-of-type');
                assert(lastThumbnail);
                lastThumbnail.focus({ preventScroll: true });
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                // Prevent default arrow scroll behavior.
                e.preventDefault();
                this.clickThumbnailForPage(this.activePage + 1);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                // Prevent default arrow scroll behavior.
                e.preventDefault();
                this.clickThumbnailForPage(this.activePage - 1);
                break;
            default:
                break;
        }
    }
    // 
    handleUpdateThumbnail_(e) {
        const data = e.detail;
        const thumbnail = this.getThumbnailForPage(data.pageNumber);
        if (thumbnail && thumbnail.isPainted()) {
            const array = new Uint8ClampedArray(data.imageData);
            thumbnail.image = new ImageData(array, data.width);
        }
    }
}
customElements.define(ViewerThumbnailBarElement.is, ViewerThumbnailBarElement);
