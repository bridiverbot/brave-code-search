// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './content_setting_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './content_settings_icons.css.js';
import { getHtml } from './content_settings_icons.html.js';
export class ContentSettingsIconsElement extends CrLitElement {
    static get is() {
        return 'content-settings-icons';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            contentSettingImageStates: { type: Array },
        };
    }
    #contentSettingImageStates_accessor_storage = [];
    get contentSettingImageStates() { return this.#contentSettingImageStates_accessor_storage; }
    set contentSettingImageStates(value) { this.#contentSettingImageStates_accessor_storage = value; }
}
customElements.define(ContentSettingsIconsElement.is, ContentSettingsIconsElement);
