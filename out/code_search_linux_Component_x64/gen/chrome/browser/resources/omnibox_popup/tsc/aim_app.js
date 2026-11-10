// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './omnibox_composebox.js';
import '/strings.m.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './aim_app.html.js';
import { browserProxyFactory } from './omnibox_popup_aim.mojom-webui.js';
/**
 * App element of the standalone AI Mode popup (omnibox_popup_aim.html).
 * `cr-omnibox-composebox` configures and paints itself; this element only
 * connects it to the popup's browser-side handler (omnibox_popup_aim.mojom):
 * `Page` callbacks become composebox method calls and composebox events become
 * `PageHandler` calls. `omnibox-full-app` will do the same wiring for the
 * merged popup on its own pipe, which is why none of it lives in the
 * composebox.
 *
 * TODO(crbug.com/566275992): Retire this element together with the standalone
 * popup once it is merged into the Full WebUI popup.
 */
export class OmniboxAimAppElement extends CrLitElement {
    static get is() {
        return 'omnibox-aim-app';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            webuiOmniboxFullPopupEnabled_: { type: Boolean },
            // Reflected so omnibox_popup_document_style.css's
            // 'body:has([webui-shadow-enabled_])' sees it on the page root, as it
            // does on <omnibox-full-app>.
            webuiShadowEnabled_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #webuiOmniboxFullPopupEnabled__accessor_storage = loadTimeData.getBoolean('webuiOmniboxFullPopupEnabled');
    // Host-specific composebox configuration. Which popup widget the composebox
    // is in decides whether it paints the popup surface itself and whether
    // Escape closes it; the composebox cannot know that on its own.
    get webuiOmniboxFullPopupEnabled_() { return this.#webuiOmniboxFullPopupEnabled__accessor_storage; }
    set webuiOmniboxFullPopupEnabled_(value) { this.#webuiOmniboxFullPopupEnabled__accessor_storage = value; }
    #webuiShadowEnabled__accessor_storage = loadTimeData.getBoolean('omniboxAimWebUIShadowEnabled');
    get webuiShadowEnabled_() { return this.#webuiShadowEnabled__accessor_storage; }
    set webuiShadowEnabled_(value) { this.#webuiShadowEnabled__accessor_storage = value; }
    browserProxy_ = browserProxyFactory.getInstance();
    listenerIds_ = [];
    preserveContextOnClose_ = false;
    // Whether a query was submitted from the composebox since the popup was last
    // shown. Reported back to the browser on `clearPopup` so it leaves focus on
    // the page showing the results instead of returning it to the omnibox.
    querySubmitted_ = false;
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
    }
    connectedCallback() {
        super.connectedCallback();
        // Force an initial refresh to avoid the race condition where the profile
        // theme loads after the page, but before the listener is ready.
        ColorChangeUpdater.forDocument().refreshColorsCss();
        const router = this.browserProxy_.callbackRouter;
        this.listenerIds_ = [
            router.onPopupShown.addListener(this.onPopupShown_.bind(this)),
            router.addContext.addListener(this.addContext_.bind(this)),
            router.focusInput.addListener(() => this.$.composebox.focusInput()),
            router.clearPopup.addListener(this.clearPopup_.bind(this)),
            router.setPreserveContextOnClose.addListener(this.setPreserveContextOnClose_.bind(this)),
            router.onContextMenuClosed.addListener(() => this.$.composebox.setContextMenuOpen(false)),
        ];
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listenerId of this.listenerIds_) {
            this.browserProxy_.callbackRouter.removeListener(listenerId);
        }
        this.listenerIds_ = [];
    }
    // ===========================================================================
    // omnibox_popup_aim.mojom Page
    // ===========================================================================
    // Browser -> page. Listeners for the `Page` interface, registered on the
    // callback router in connectedCallback(). They drive the composebox through
    // its public API.
    onPopupShown_(context) {
        this.querySubmitted_ = false;
        const composebox = this.$.composebox;
        if (!this.preserveContextOnClose_) {
            // Avoid showing the glow animation when coming back from a preserved
            // context on close as this indicates that the user is returning to the
            // widget after adding context.
            composebox.playGlowAnimation();
            composebox.setDefaultModel();
        }
        composebox.addSearchContext(context);
        composebox.focusInput();
        this.preserveContextOnClose_ = false;
    }
    addContext_(context) {
        this.$.composebox.addSearchContext(context);
        this.$.composebox.focusInput();
        // Reset `preserveContextOnClose_` so subsequent popup closes correctly
        // clear searchbox state (e.g. after adding context via Drive picker while
        // popup stayed open).
        this.setPreserveContextOnClose_(false);
    }
    async clearPopup_() {
        const composebox = this.$.composebox;
        const input = composebox.input;
        const querySubmitted = this.querySubmitted_;
        this.querySubmitted_ = false;
        if (!this.preserveContextOnClose_) {
            composebox.resetSession();
        }
        await composebox.updateComplete;
        // Transfer input text to the location bar.
        return { input, querySubmitted };
    }
    setPreserveContextOnClose_(preserveContextOnClose) {
        this.preserveContextOnClose_ = preserveContextOnClose;
    }
    // ===========================================================================
    // Composebox events -> omnibox_popup_aim.mojom PageHandler
    // ===========================================================================
    // Page -> browser. Handlers for the events `cr-omnibox-composebox` fires
    // (bound in aim_app.html.ts). Each forwards to the `PageHandler` remote.
    onContextMenuEntrypointClick_(e) {
        e.preventDefault();
        this.$.composebox.setContextMenuOpen(true);
        this.browserProxy_.handler.showContextMenu({ x: e.detail.x, y: e.detail.y });
    }
    /**
     * Forwards close requests along with the active composebox input text so the
     * browser can transfer any typed draft back to the Omnibox.
     */
    onCloseComposebox_(e) {
        // After a submit, the browser closes the popup itself, and
        // `requestClose()` would hand focus back to the omnibox.
        if (e.detail.afterSubmit) {
            return;
        }
        this.browserProxy_.handler.requestClose(e.detail.composeboxText);
    }
    /**
     * Records that a query was submitted, so that `clearPopup_()` can tell the
     * browser to leave focus on the page showing the results. The composebox
     * clears its own inputs on submit.
     */
    onComposeboxSubmit_() {
        this.querySubmitted_ = true;
    }
}
customElements.define(OmniboxAimAppElement.is, OmniboxAimAppElement);
