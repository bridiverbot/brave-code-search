// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { assert } from '//resources/js/assert.js';
import { OpenWindowProxyImpl } from '//resources/js/open_window_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ExtensionControlBrowserProxyImpl } from '/shared/settings/extension_control_browser_proxy.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { getCss } from './extension_controlled_message.css.js';
import { getHtml } from './extension_controlled_message.html.js';
const ExtensionControlledMessageElementBase = I18nMixinLit(CrLitElement);
export class ExtensionControlledMessageElement extends ExtensionControlledMessageElementBase {
    static get is() {
        return 'extension-controlled-message';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            extensionName: { type: String },
            extensionId: { type: String },
            extensionCanBeDisabled: { type: Boolean },
        };
    }
    #extensionName_accessor_storage;
    get extensionName() { return this.#extensionName_accessor_storage; }
    set extensionName(value) { this.#extensionName_accessor_storage = value; }
    #extensionCanBeDisabled_accessor_storage;
    get extensionCanBeDisabled() { return this.#extensionCanBeDisabled_accessor_storage; }
    set extensionCanBeDisabled(value) { this.#extensionCanBeDisabled_accessor_storage = value; }
    #extensionId_accessor_storage;
    get extensionId() { return this.#extensionId_accessor_storage; }
    set extensionId(value) { this.#extensionId_accessor_storage = value; }
    getDisclaimerHtml_() {
        const disclaimerStringId = this.extensionCanBeDisabled ?
            'controlledByExtensionWithDisableOption' :
            'controlledByExtensionWithoutDisableOption';
        return this.i18nAdvanced(disclaimerStringId, {
            substitutions: [this.extensionName, this.i18n('opensInNewTab')],
            attrs: ['id', 'aria-description'],
        });
    }
    onDisclaimerClick_(e) {
        const target = e.target;
        e.preventDefault();
        if (target.id === 'disableLink') {
            this.onDisableClick_();
            return;
        }
        if (target.id === 'manageLink') {
            this.onManageClick_();
        }
    }
    onManageClick_() {
        const manageUrl = 'chrome://extensions/?id=' + this.extensionId;
        OpenWindowProxyImpl.getInstance().openUrl(manageUrl);
    }
    onDisableClick_() {
        assert(this.extensionCanBeDisabled);
        ExtensionControlBrowserProxyImpl.getInstance().disableExtension(this.extensionId);
    }
}
customElements.define(ExtensionControlledMessageElement.is, ExtensionControlledMessageElement);
