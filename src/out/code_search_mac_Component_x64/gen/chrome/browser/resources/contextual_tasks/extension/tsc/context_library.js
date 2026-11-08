// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/composebox/composebox_favicon_group.js';
import { ExtensionBrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_browser_proxy.js';
import { ComposeboxProxyImpl } from 'chrome://resources/cr_components/composebox/composebox_proxy.js';
import { TrackedElementManager } from 'chrome://resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './context_library.css.js';
import { getHtml } from './context_library.html.js';
// Sets the `ComposeboxProxyImpl` singleton inside this Rollup bundle (`optimize
// = true` in `BUILD.gn` bundles `composebox_proxy.js` into
// `context_library.js`, giving it its own module-scoped `instance` separate
// from unbundled test imports of
// `chrome://resources/cr_components/composebox/composebox_proxy.js`).
export function setComposeboxProxyForTesting(proxy) {
    ComposeboxProxyImpl.setInstance(proxy);
}
export class ContextLibraryElement extends CrLitElement {
    static get is() {
        return 'context-library';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            tabs: { type: Array },
            submittedTabIds: { type: Object },
            darkMode: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #tabs_accessor_storage = [];
    get tabs() { return this.#tabs_accessor_storage; }
    set tabs(value) { this.#tabs_accessor_storage = value; }
    #submittedTabIds_accessor_storage = new Set();
    get submittedTabIds() { return this.#submittedTabIds_accessor_storage; }
    set submittedTabIds(value) { this.#submittedTabIds_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    isTrackingFaviconGroup_ = false;
    resizeObserver_ = null;
    listenerIds_ = [];
    connectedCallback() {
        super.connectedCallback();
        this.darkMode = this.isDarkModeEnabled_();
        this.resizeObserver_ = new ResizeObserver(() => {
            window.requestResize?.();
        });
        this.resizeObserver_.observe(this);
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        this.listenerIds_.push(callbackRouter.onTabContextUpdated.addListener((tabs, submittedTabIds) => {
            this.tabs = tabs;
            this.submittedTabIds = new Set(submittedTabIds);
        }));
        this.updateFaviconTracking_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.isTrackingFaviconGroup_) {
            this.isTrackingFaviconGroup_ = false;
            TrackedElementManager.getInstance().stopTracking(this.$.faviconGroup);
        }
        this.resizeObserver_?.disconnect();
        this.resizeObserver_ = null;
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        for (const id of this.listenerIds_) {
            callbackRouter.removeListener(id);
        }
        this.listenerIds_ = [];
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('tabs')) {
            this.updateFaviconTracking_();
        }
    }
    updateFaviconTracking_() {
        const hasTabs = (this.tabs?.length ?? 0) > 0;
        if (hasTabs && !this.isTrackingFaviconGroup_) {
            this.isTrackingFaviconGroup_ = true;
            TrackedElementManager.getInstance().startTracking(this.$.faviconGroup, 'kContextualTasksFaviconsElementId');
        }
        else if (!hasTabs && this.isTrackingFaviconGroup_) {
            this.isTrackingFaviconGroup_ = false;
            TrackedElementManager.getInstance().stopTracking(this.$.faviconGroup);
        }
    }
    // <composebox-favicon-group> fires this to request a live favicon for a tab
    // that is still loading. Handled here so the event does not escape the
    // component; invoking `onTabLoaded` swaps in the higher fidelity favicon.
    async onWaitForTabLoad_(e) {
        e.stopPropagation();
        try {
            const { faviconDataUrl } = await ComposeboxProxyImpl.getInstance()
                .searchboxHandler.waitForTabFaviconLoad(e.detail.tabId);
            e.detail.onTabLoaded(faviconDataUrl || undefined);
        }
        catch {
            e.detail.onTabLoaded(undefined);
        }
    }
    isDarkModeEnabled_() {
        const params = new URLSearchParams(window.location.search);
        return params.get('cs') === '1';
    }
}
customElements.define(ContextLibraryElement.is, ContextLibraryElement);
