// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-search-engine-icon' is the icon for a search engine in the settings
 * page. It prioritizes showing an existing favicon, then tries downloading an
 * image, and uses a generic favicon as final fallback.
 */
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '../site_favicon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './search_engine_icon.css.js';
import { getHtml } from './search_engine_icon.html.js';
export class SettingsSearchEngineIconElement extends CrLitElement {
    static get is() {
        return 'settings-search-engine-icon';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            engine: { type: Object },
            showDownloadedIcon_: { type: Boolean },
        };
    }
    #engine_accessor_storage = null;
    get engine() { return this.#engine_accessor_storage; }
    set engine(value) { this.#engine_accessor_storage = value; }
    #showDownloadedIcon__accessor_storage = false;
    get showDownloadedIcon_() { return this.#showDownloadedIcon__accessor_storage; }
    set showDownloadedIcon_(value) { this.#showDownloadedIcon__accessor_storage = value; }
    timeoutId_ = null;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('engine')) {
            const oldEngine = changedProperties.get('engine');
            this.onEngineChanged_(this.engine, oldEngine);
        }
    }
    getIconUrl_() {
        const iconURL = this.engine?.iconURL;
        if (!iconURL) {
            return '';
        }
        try {
            const url = new URL(iconURL);
            return url.protocol === 'https:' || url.protocol === 'http:' ? iconURL :
                '';
        }
        catch (e) {
            return '';
        }
    }
    onEngineChanged_(newEngine, oldEngine) {
        if (oldEngine && newEngine?.iconURL === oldEngine.iconURL) {
            return;
        }
        this.showDownloadedIcon_ = false;
        if (this.timeoutId_) {
            clearTimeout(this.timeoutId_);
            this.timeoutId_ = null;
        }
        this.timeoutId_ = setTimeout(() => {
            if (!this.$.downloadedIcon.complete) {
                // Reset src to cancel ongoing request.
                this.$.downloadedIcon.src = '';
                this.showDownloadedIcon_ = false;
            }
            this.timeoutId_ = null;
        }, 1000);
    }
    onDownloadedIconLoad_() {
        this.showDownloadedIcon_ = true;
        if (this.timeoutId_) {
            clearTimeout(this.timeoutId_);
            this.timeoutId_ = null;
        }
    }
    onDownloadedIconError_() {
        this.showDownloadedIcon_ = false;
    }
    shouldShowDownloadedIcon_() {
        return this.showDownloadedIcon_ && !this.engine?.iconPath &&
            !!this.engine?.iconURL;
    }
}
customElements.define(SettingsSearchEngineIconElement.is, SettingsSearchEngineIconElement);
