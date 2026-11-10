// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview UI element for indicating that this user is managed by
 * their organization. This component uses the |isManaged| boolean in
 * loadTimeData, and the |managedByOrg| i18n string.
 *
 * If |isManaged| is false, this component is hidden. If |isManaged| is true, it
 * becomes visible.
 */
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './managed_footnote.css.js';
import { getHtml } from './managed_footnote.html.js';
const ManagedFootnoteElementBase = I18nMixinLit(WebUiListenerMixinLit(CrLitElement));
export class ManagedFootnoteElement extends ManagedFootnoteElementBase {
    static get is() {
        return 'managed-footnote';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Whether the user is managed by their organization through enterprise
             * policies.
             */
            isManaged_: {
                reflect: true,
                type: Boolean,
            },
            // 
            /**
             * The name of the icon to display in the footer.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                reflect: true,
                type: String,
            },
        };
    }
    #isManaged__accessor_storage = loadTimeData.getBoolean('isManaged');
    get isManaged_() { return this.#isManaged__accessor_storage; }
    set isManaged_(value) { this.#isManaged__accessor_storage = value; }
    #managedByIcon__accessor_storage = loadTimeData.getString('managedByIcon');
    get managedByIcon_() { return this.#managedByIcon__accessor_storage; }
    set managedByIcon_(value) { this.#managedByIcon__accessor_storage = value; }
    // 
    firstUpdated() {
        this.addWebUiListener('is-managed-changed', (managed) => {
            loadTimeData.overrideValues({ isManaged: managed });
            this.isManaged_ = managed;
        });
    }
    /** @return Message to display to the user. */
    getManagementString_() {
        // 
        return this.i18nAdvanced('browserManagedByOrg');
    }
}
customElements.define(ManagedFootnoteElement.is, ManagedFootnoteElement);
chrome.send('observeManagedUI');
