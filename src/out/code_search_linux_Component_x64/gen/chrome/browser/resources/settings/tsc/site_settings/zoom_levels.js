// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'zoom-levels' is the element for showing the sites that are zoomed in
 * or out.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../settings_page/settings_subpage.js';
import '../site_favicon.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { SiteSettingsMixinLit } from './site_settings_mixin_lit.js';
import { getCss } from './zoom_levels.css.js';
import { getHtml } from './zoom_levels.html.js';
const ZoomLevelsElementBase = SettingsViewMixinLit(SiteSettingsMixinLit(WebUiListenerMixinLit(CrLitElement)));
export class ZoomLevelsElement extends ZoomLevelsElementBase {
    static get is() {
        return 'zoom-levels';
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
             * Array of sites that are zoomed in or out.
             */
            sites_: { type: Array },
        };
    }
    #sites__accessor_storage = [];
    get sites_() { return this.#sites__accessor_storage; }
    set sites_(value) { this.#sites__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('onZoomLevelsChanged', (sites) => this.onZoomLevelsChanged_(sites));
        this.browserProxy.fetchZoomLevels();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        // Restore focus to the last element if the previous last element was
        // deleted while it was focused.
        if (changedPrivateProperties.has('sites_')) {
            const previousSites = changedPrivateProperties.get('sites_');
            if (previousSites && this.sites_.length < previousSites.length) {
                const focused = this.shadowRoot.querySelector('.list-item:focus-within');
                if (!focused) {
                    const toFocus = this.shadowRoot.querySelector('.list-item:last-of-type cr-icon-button');
                    toFocus?.focus();
                }
            }
        }
    }
    /**
     * A handler for when zoom levels change.
     * @param sites The up to date list of sites and their zoom levels.
     */
    onZoomLevelsChanged_(sites) {
        this.sites_ = sites;
    }
    shouldShowNoSites_() {
        return this.sites_.length === 0;
    }
    /**
     * A handler for when a zoom level for a site is deleted.
     */
    onRemoveZoomLevelClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        const site = this.sites_[index];
        assert(site);
        this.browserProxy.removeZoomLevel(site.hostOrSpec);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(ZoomLevelsElement.is, ZoomLevelsElement);
