// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '/shared/icon_from_table.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { MenuSourceType } from '//resources/mojo/ui/base/mojom/menu_source_type.mojom-webui.js';
import { HighlightTracker } from '/shared/toolbar_button.js';
import { getCss } from './extension.css.js';
import { getHtml } from './extension.html.js';
export class ExtensionElement extends CrLitElement {
    static get is() {
        return 'webui-browser-extension';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            iconHandle: { type: Object },
            visible: { type: Boolean, reflect: true },
        };
    }
    #iconHandle_accessor_storage = { handleId: 0n };
    get iconHandle() { return this.#iconHandle_accessor_storage; }
    set iconHandle(value) { this.#iconHandle_accessor_storage = value; }
    #visible_accessor_storage = false;
    get visible() { return this.#visible_accessor_storage; }
    set visible(value) { this.#visible_accessor_storage = value; }
    bar;
    extensionId;
    highlightTracker_ = new HighlightTracker();
    constructor(extensionId, bar) {
        super();
        this.extensionId = extensionId;
        this.bar = bar;
    }
    connectedCallback() {
        super.connectedCallback();
        TrackedElementManager.getInstance().startTracking(this, 'kToolbarActionViewElementId', {
            secondaryId: 'ext:' + this.extensionId,
            onHighlightChanged: this.highlightTracker_.onHighlightChanged,
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        TrackedElementManager.getInstance().stopTracking(this);
    }
    onClick(e) {
        if (this.highlightTracker_.shouldSkipClick(e)) {
            return;
        }
        this.bar.onClick(this.extensionId);
    }
    onContextmenu_(event) {
        event.preventDefault();
        let sourceType = MenuSourceType.kNone;
        switch (event.pointerType) {
            case 'mouse':
                sourceType = MenuSourceType.kMouse;
                break;
            case 'pen':
                sourceType = MenuSourceType.kStylus;
                break;
            case 'touch':
                sourceType = MenuSourceType.kTouch;
                break;
            default:
                break;
        }
        this.bar.onContextMenu(sourceType, this.extensionId);
    }
}
customElements.define(ExtensionElement.is, ExtensionElement);
