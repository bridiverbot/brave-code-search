// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import { assert } from 'chrome://resources/js/assert.js';
import { skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './customize_chrome.mojom-webui.js';
import { getCss } from './theme_snapshot.css.js';
import { getHtml } from './theme_snapshot.html.js';
export var CustomizeThemeType;
(function (CustomizeThemeType) {
    CustomizeThemeType["CLASSIC_CHROME"] = "classicChrome";
    CustomizeThemeType["CUSTOM_THEME"] = "customTheme";
    CustomizeThemeType["UPLOADED_IMAGE"] = "uploadedImage";
})(CustomizeThemeType || (CustomizeThemeType = {}));
/** Element used to display a snapshot of the NTP. */
export class ThemeSnapshotElement extends CrLitElement {
    static get is() {
        return 'customize-chrome-theme-snapshot';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            theme_: { type: Object },
            themeType_: { type: String },
        };
    }
    #theme__accessor_storage = null;
    get theme_() { return this.#theme__accessor_storage; }
    set theme_(value) { this.#theme__accessor_storage = value; }
    #themeType__accessor_storage = null;
    get themeType_() { return this.#themeType__accessor_storage; }
    set themeType_(value) { this.#themeType__accessor_storage = value; }
    apiProxy_ = browserProxyFactory.getInstance();
    setThemeListenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.setThemeListenerId_ =
            this.apiProxy_.callbackRouter.setTheme.addListener(theme => {
                this.theme_ = theme;
                if (this.theme_) {
                    this.style.setProperty('--customize-chrome-color-background-color', skColorToRgba(this.theme_.backgroundColor));
                }
            });
        this.apiProxy_.handler.updateTheme();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setThemeListenerId_);
        this.apiProxy_.callbackRouter.removeListener(this.setThemeListenerId_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('theme_')) {
            this.themeType_ = this.computeThemeType_();
        }
    }
    computeThemeType_() {
        if (this.theme_) {
            if (!this.theme_.backgroundImage) {
                return CustomizeThemeType.CLASSIC_CHROME;
            }
            if (this.theme_.backgroundImage.isUploadedImage) {
                return CustomizeThemeType.UPLOADED_IMAGE;
            }
            if (this.theme_.backgroundImage.snapshotUrl) {
                return CustomizeThemeType.CUSTOM_THEME;
            }
        }
        return null;
    }
    onThemeSnapshotClick_() {
        if (this.theme_ && this.theme_.backgroundManagedByPolicy) {
            return;
        }
        this.dispatchEvent(new Event('edit-theme-click'));
    }
}
customElements.define(ThemeSnapshotElement.is, ThemeSnapshotElement);
