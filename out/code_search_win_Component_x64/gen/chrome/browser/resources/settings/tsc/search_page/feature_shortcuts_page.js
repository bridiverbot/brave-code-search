// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-feature-shortcuts-page' is the settings page containing
 * feature and extension shortcuts.
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import './search_engines_list.js';
import '../settings_page/settings_section.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './feature_shortcuts_page.css.js';
import { getHtml } from './feature_shortcuts_page.html.js';
import { SearchEnginesBrowserProxyImpl, SearchEnginesInteractions } from './search_engines_browser_proxy.js';
const FeatureShortcutsPageElementBase = I18nMixinLit(WebUiListenerMixinLit(CrLitElement));
export class FeatureShortcutsPageElement extends FeatureShortcutsPageElementBase {
    static get is() {
        return 'settings-feature-shortcuts-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            activeShortcuts: { type: Array },
            inactiveShortcuts: { type: Array },
            // Whether the corresponding subsection is expanded.
            activeShortcutsExpanded_: { type: Boolean },
            inactiveShortcutsExpanded_: { type: Boolean },
        };
    }
    #activeShortcuts_accessor_storage = [];
    get activeShortcuts() { return this.#activeShortcuts_accessor_storage; }
    set activeShortcuts(value) { this.#activeShortcuts_accessor_storage = value; }
    #inactiveShortcuts_accessor_storage = [];
    get inactiveShortcuts() { return this.#inactiveShortcuts_accessor_storage; }
    set inactiveShortcuts(value) { this.#inactiveShortcuts_accessor_storage = value; }
    #activeShortcutsExpanded__accessor_storage = false;
    get activeShortcutsExpanded_() { return this.#activeShortcutsExpanded__accessor_storage; }
    set activeShortcutsExpanded_(value) { this.#activeShortcutsExpanded__accessor_storage = value; }
    #inactiveShortcutsExpanded__accessor_storage = false;
    get inactiveShortcutsExpanded_() { return this.#inactiveShortcutsExpanded__accessor_storage; }
    set inactiveShortcutsExpanded_(value) { this.#inactiveShortcutsExpanded__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        SearchEnginesBrowserProxyImpl.getInstance()
            .getCategorizedTemplateUrls()
            .then(this.enginesChanged_.bind(this));
        this.addWebUiListener('search-engines-changed', this.enginesChanged_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('activeShortcutsExpanded_') &&
            changedPrivateProperties.get('activeShortcutsExpanded_') !==
                undefined) {
            this.onSectionExpandedChanged_(this.activeShortcutsExpanded_);
        }
        if (changedPrivateProperties.has('inactiveShortcutsExpanded_') &&
            changedPrivateProperties.get('inactiveShortcutsExpanded_') !==
                undefined) {
            this.onSectionExpandedChanged_(this.inactiveShortcutsExpanded_);
        }
    }
    enginesChanged_(categorizedTemplateUrls) {
        this.activeShortcuts = categorizedTemplateUrls.activeFeatureShortcuts;
        this.inactiveShortcuts = categorizedTemplateUrls.inactiveFeatureShortcuts;
    }
    onActiveShortcutsExpandedChanged_(e) {
        this.activeShortcutsExpanded_ = e.detail.value;
    }
    onInactiveShortcutsExpandedChanged_(e) {
        this.inactiveShortcutsExpanded_ = e.detail.value;
    }
    onSectionExpandedChanged_(expanded) {
        const interaction = expanded ?
            SearchEnginesInteractions.FEATURE_SHORTCUTS_SECTION_EXPANDED :
            SearchEnginesInteractions.FEATURE_SHORTCUTS_SECTION_COLLAPSED;
        SearchEnginesBrowserProxyImpl.getInstance()
            .recordSearchEnginesPageHistogram(interaction);
    }
}
customElements.define(FeatureShortcutsPageElement.is, FeatureShortcutsPageElement);
