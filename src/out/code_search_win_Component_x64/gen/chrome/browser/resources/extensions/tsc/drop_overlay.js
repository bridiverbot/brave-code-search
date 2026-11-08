// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { DragWrapper } from 'chrome://resources/js/drag_wrapper.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DragAndDropHandler } from './drag_and_drop_handler.js';
import { getCss } from './drop_overlay.css.js';
import { getHtml } from './drop_overlay.html.js';
export class ExtensionsDropOverlayElement extends CrLitElement {
    static get is() {
        return 'extensions-drop-overlay';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dragEnabled: { type: Boolean },
        };
    }
    #dragEnabled_accessor_storage = false;
    get dragEnabled() { return this.#dragEnabled_accessor_storage; }
    set dragEnabled(value) { this.#dragEnabled_accessor_storage = value; }
    dragWrapperHandler_;
    eventTracker_ = new EventTracker();
    constructor() {
        super();
        this.hidden = true;
        this.dragWrapperHandler_ =
            new DragAndDropHandler(true, document.documentElement);
    }
    connectedCallback() {
        super.connectedCallback();
        const dragTarget = document.documentElement;
        this.eventTracker_.add(dragTarget, 'extension-drag-started', () => {
            this.hidden = false;
        });
        this.eventTracker_.add(dragTarget, 'extension-drag-ended', () => {
            this.hidden = true;
        });
        this.eventTracker_.add(dragTarget, 'drag-and-drop-load-error', (e) => {
            this.fire('load-error', e.detail);
        });
        new DragWrapper(dragTarget, this.dragWrapperHandler_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('dragEnabled')) {
            this.dragWrapperHandler_.dragEnabled = this.dragEnabled;
        }
    }
}
customElements.define(ExtensionsDropOverlayElement.is, ExtensionsDropOverlayElement);
