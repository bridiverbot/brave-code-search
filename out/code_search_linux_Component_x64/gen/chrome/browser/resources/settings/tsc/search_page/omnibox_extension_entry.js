// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-omnibox-extension-entry' is a component for showing
 * an omnibox extension with its name and keyword.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../site_favicon.js';
import { ExtensionControlBrowserProxyImpl } from '/shared/settings/extension_control_browser_proxy.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './omnibox_extension_entry.css.js';
import { getHtml } from './omnibox_extension_entry.html.js';
export class SettingsOmniboxExtensionEntryElement extends CrLitElement {
    static get is() {
        return 'settings-omnibox-extension-entry';
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
        };
    }
    #engine_accessor_storage = {
        canBeDefault: false,
        canBeEdited: false,
        canBeRemoved: false,
        canBeActivated: false,
        canBeDeactivated: false,
        default: false,
        displayName: '',
        iconPath: '',
        id: '',
        isManaged: false,
        isRecommendedFromPolicy: false,
        isOmniboxExtension: false,
        isPrepopulated: false,
        isStarterPack: false,
        keyword: '',
        name: '',
        shouldConfirmRemoval: false,
        url: '',
        urlLocked: false,
    };
    get engine() { return this.#engine_accessor_storage; }
    set engine(value) { this.#engine_accessor_storage = value; }
    browserProxy_ = ExtensionControlBrowserProxyImpl.getInstance();
    onManageClick_() {
        this.closePopupMenu_();
        this.browserProxy_.manageExtension(this.engine.extension.id);
    }
    onDisableClick_() {
        this.closePopupMenu_();
        this.browserProxy_.disableExtension(this.engine.extension.id);
    }
    closePopupMenu_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    onDotsClick_() {
        const dots = this.shadowRoot.querySelector('cr-icon-button');
        assert(dots);
        this.shadowRoot.querySelector('cr-action-menu').showAt(dots, {
            anchorAlignmentY: AnchorAlignment.AFTER_END,
        });
    }
}
customElements.define(SettingsOmniboxExtensionEntryElement.is, SettingsOmniboxExtensionEntryElement);
