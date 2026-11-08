// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './print_preview_vars.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
// 
import { getCss } from './link_container.css.js';
import { getHtml } from './link_container.html.js';
export class PrintPreviewLinkContainerElement extends CrLitElement {
    static get is() {
        return 'print-preview-link-container';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            appKioskMode: { type: Boolean },
            destination: { type: Object },
            disabled: { type: Boolean },
            shouldShowSystemDialogLink_: {
                type: Boolean,
                reflect: true,
            },
            systemDialogLinkDisabled_: { type: Boolean },
            openingSystemDialog_: { type: Boolean },
            openingInPreview_: { type: Boolean },
        };
    }
    #appKioskMode_accessor_storage = false;
    get appKioskMode() { return this.#appKioskMode_accessor_storage; }
    set appKioskMode(value) { this.#appKioskMode_accessor_storage = value; }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #shouldShowSystemDialogLink__accessor_storage = false;
    get shouldShowSystemDialogLink_() { return this.#shouldShowSystemDialogLink__accessor_storage; }
    set shouldShowSystemDialogLink_(value) { this.#shouldShowSystemDialogLink__accessor_storage = value; }
    #systemDialogLinkDisabled__accessor_storage = false;
    get systemDialogLinkDisabled_() { return this.#systemDialogLinkDisabled__accessor_storage; }
    set systemDialogLinkDisabled_(value) { this.#systemDialogLinkDisabled__accessor_storage = value; }
    #openingSystemDialog__accessor_storage = false;
    get openingSystemDialog_() { return this.#openingSystemDialog__accessor_storage; }
    set openingSystemDialog_(value) { this.#openingSystemDialog__accessor_storage = value; }
    #openingInPreview__accessor_storage = false;
    get openingInPreview_() { return this.#openingInPreview__accessor_storage; }
    set openingInPreview_(value) { this.#openingInPreview__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('disabled')) {
            this.systemDialogLinkDisabled_ = this.computeSystemDialogLinkDisabled_();
        }
        if (changedProperties.has('appKioskMode') ||
            changedProperties.has('destination')) {
            this.shouldShowSystemDialogLink_ =
                this.computeShouldShowSystemDialogLink_();
        }
    }
    /**
     * @return Whether the system dialog link should be visible.
     */
    computeShouldShowSystemDialogLink_() {
        if (this.appKioskMode) {
            return false;
        }
        // 
        return true;
        // 
        // 
    }
    /**
     * @return Whether the system dialog link should be disabled
     */
    computeSystemDialogLinkDisabled_() {
        // 
        return false;
        // 
        // 
    }
    // 
    async onSystemDialogClick_() {
        if (!this.shouldShowSystemDialogLink_) {
            return;
        }
        this.openingSystemDialog_ = true;
        await this.updateComplete;
        this.fire('print-with-system-dialog');
    }
    // 
    // 
    // 
    async onOpenInPreviewClick_() {
        this.openingInPreview_ = true;
        await this.updateComplete;
        this.fire('open-pdf-in-preview');
    }
    // 
    /** @return Whether the system dialog link is available. */
    systemDialogLinkAvailable() {
        return this.shouldShowSystemDialogLink_ && !this.systemDialogLinkDisabled_;
    }
}
customElements.define(PrintPreviewLinkContainerElement.is, PrintPreviewLinkContainerElement);
