// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './updater_state_card.js';
import './enterprise_companion_state_card.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './updater_state.css.js';
import { getHtml } from './updater_state.html.js';
export class UpdaterStateElement extends CrLitElement {
    static get is() {
        return 'updater-state';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            userUpdaterState: { type: Object },
            systemUpdaterState: { type: Object },
            enterpriseCompanionState: { type: Object },
            error: { type: Boolean },
        };
    }
    #userUpdaterState_accessor_storage = null;
    get userUpdaterState() { return this.#userUpdaterState_accessor_storage; }
    set userUpdaterState(value) { this.#userUpdaterState_accessor_storage = value; }
    #systemUpdaterState_accessor_storage = null;
    get systemUpdaterState() { return this.#systemUpdaterState_accessor_storage; }
    set systemUpdaterState(value) { this.#systemUpdaterState_accessor_storage = value; }
    #enterpriseCompanionState_accessor_storage = null;
    get enterpriseCompanionState() { return this.#enterpriseCompanionState_accessor_storage; }
    set enterpriseCompanionState(value) { this.#enterpriseCompanionState_accessor_storage = value; }
    #error_accessor_storage = false;
    get error() { return this.#error_accessor_storage; }
    set error(value) { this.#error_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
    }
    filePathToString(filePath) {
        if (typeof filePath.path === 'string') {
            return filePath.path;
        }
        const decoder = new TextDecoder('utf-16');
        const buffer = new Uint16Array(filePath.path);
        return decoder.decode(buffer);
    }
    shouldShowSystemUpdaterState() {
        return !this.error && this.systemUpdaterState !== null;
    }
    shouldShowUserUpdaterState() {
        return !this.error && this.userUpdaterState !== null;
    }
    shouldShowEnterpriseCompanionState() {
        return !this.error && this.enterpriseCompanionState !== null;
    }
    shouldShowNoUpdatersFound() {
        return !this.error && this.systemUpdaterState === null &&
            this.userUpdaterState === null &&
            this.enterpriseCompanionState === null;
    }
}
customElements.define(UpdaterStateElement.is, UpdaterStateElement);
