// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app_refresh.css.js';
import { getHtml } from './app_refresh.html.js';
import { DefaultBrowserBrowserProxyImpl } from './browser_proxy.js';
const AppRefreshElementBase = WebUiListenerMixinLit(CrLitElement);
export class AppRefreshElement extends AppRefreshElementBase {
    static get is() {
        return 'default-browser-app-refresh';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            anyButtonClicked_: { type: Boolean },
        };
    }
    #anyButtonClicked__accessor_storage = false;
    get anyButtonClicked_() { return this.#anyButtonClicked__accessor_storage; }
    set anyButtonClicked_(value) { this.#anyButtonClicked__accessor_storage = value; }
    browserProxy_ = DefaultBrowserBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('reset-default-browser-buttons', this.resetButtons_.bind(this));
    }
    onConfirmDefaultBrowserClick_() {
        this.anyButtonClicked_ = true;
        this.browserProxy_.setAsDefaultBrowser();
    }
    onSkipDefaultBrowserClick_() {
        this.anyButtonClicked_ = true;
        this.browserProxy_.skipDefaultBrowser();
    }
    resetButtons_() {
        this.anyButtonClicked_ = false;
    }
}
customElements.define(AppRefreshElement.is, AppRefreshElement);
