// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { ExtensionBrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_browser_proxy.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './lens_chip_app.css.js';
import { getHtml } from './lens_chip_app.html.js';
export class LensChipAppElement extends CrLitElement {
    static get is() {
        return 'lens-chip-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dataUri: { type: String },
            darkMode: {
                type: Boolean,
                reflect: true,
                attribute: 'dark-mode',
            },
            label_: { type: String },
            dismissLabel_: { type: String },
        };
    }
    #dataUri_accessor_storage = '';
    get dataUri() { return this.#dataUri_accessor_storage; }
    set dataUri(value) { this.#dataUri_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #label__accessor_storage = loadTimeData.getString('lensRegionChipLabel');
    get label_() { return this.#label__accessor_storage; }
    set label_(value) { this.#label__accessor_storage = value; }
    #dismissLabel__accessor_storage = loadTimeData.getString('lensRegionChipDismissA11yLabel');
    get dismissLabel_() { return this.#dismissLabel__accessor_storage; }
    set dismissLabel_(value) { this.#dismissLabel__accessor_storage = value; }
    pageHandler_ = null;
    listenerIds_ = [];
    connectedCallback() {
        super.connectedCallback();
        const params = new URLSearchParams(window.location.search);
        this.darkMode = params.get('cs') === '1';
        this.fetchPreview_();
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        this.listenerIds_.push(callbackRouter.onLensCropUpdated.addListener((dataUri) => {
            this.dataUri = dataUri;
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        for (const id of this.listenerIds_) {
            callbackRouter.removeListener(id);
        }
        this.listenerIds_ = [];
    }
    setPageHandlerForTesting(handler) {
        this.pageHandler_ = handler;
    }
    setDataUriForTesting(dataUri) {
        this.dataUri = dataUri;
    }
    getDataUriForTesting() {
        return this.dataUri;
    }
    setDarkModeForTesting(darkMode) {
        this.darkMode = darkMode;
    }
    getDarkModeForTesting() {
        return this.darkMode;
    }
    getPageHandler_() {
        return this.pageHandler_ || ExtensionBrowserProxyImpl.getInstance().handler;
    }
    async fetchPreview_() {
        const startTime = performance.now();
        try {
            const response = await this.getPageHandler_().getLensCropPreview();
            this.dataUri = response?.dataUri ?? '';
            if (response?.dataUri) {
                chrome.metricsPrivate?.recordTime('ContextualTasks.LensRegionChip.PreviewLoadLatency', Math.round(performance.now() - startTime));
            }
        }
        catch (e) {
            this.dataUri = '';
        }
    }
    async onCloseClick_() {
        this.fire('close-chip');
        if (this.dataUri) {
            this.dataUri = '';
            try {
                await this.getPageHandler_().removeLensCrop();
            }
            catch (e) {
                // Ignore
            }
        }
    }
}
customElements.define(LensChipAppElement.is, LensChipAppElement);
