// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './mv2_deprecation_panel.css.js';
import { getHtml } from './mv2_deprecation_panel.html.js';
const ExtensionsMv2DeprecationPanelElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsMv2DeprecationPanelElement extends ExtensionsMv2DeprecationPanelElementBase {
    static get is() {
        return 'extensions-mv2-deprecation-panel';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            /*
             * Extensions to display in the panel.
             */
            extensions: { type: Array },
            /**
             * Whether the panel title should be shown.
             */
            showTitle: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The string for the panel's header.
             */
            headerString_: { type: String },
            /**
             * The string for the panel's subtitle.
             */
            subtitleString_: { type: String },
            /**
             * Extension which has its action menu opened.
             */
            extensionWithActionMenuOpened_: { type: Object },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #delegate_accessor_storage;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #showTitle_accessor_storage = false;
    get showTitle() { return this.#showTitle_accessor_storage; }
    set showTitle(value) { this.#showTitle_accessor_storage = value; }
    #headerString__accessor_storage = '';
    get headerString_() { return this.#headerString__accessor_storage; }
    set headerString_(value) { this.#headerString__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    #subtitleString__accessor_storage = '';
    get subtitleString_() { return this.#subtitleString__accessor_storage; }
    set subtitleString_(value) { this.#subtitleString__accessor_storage = value; }
    #extensionWithActionMenuOpened__accessor_storage;
    get extensionWithActionMenuOpened_() { return this.#extensionWithActionMenuOpened__accessor_storage; }
    set extensionWithActionMenuOpened_(value) { this.#extensionWithActionMenuOpened__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('extensions')) {
            this.onExtensionsChanged_();
        }
    }
    /**
     * Updates properties after extensions change.
     */
    async onExtensionsChanged_() {
        const headerVar = 'mv2DeprecationPanelDisabledHeader';
        const subtitleVar = 'mv2DeprecationPanelDisabledSubtitle';
        const subtitleLink = 'https://support.google.com/chrome_webstore?' +
            'p=unsupported_extensions';
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString(headerVar, this.extensions.length);
        const subtitle = await PluralStringProxyImpl.getInstance().getPluralString(subtitleVar, this.extensions.length);
        this.subtitleString_ = subtitle.replace('$1', subtitleLink);
        this.subtitleString_ =
            this.subtitleString_.replace('$2', this.i18n('opensInNewTab'));
    }
    /**
     * Returns whether the extension's remove button should be displayed.
     */
    showExtensionRemoveButton_(extension) {
        return !extension.mustRemainInstalled;
    }
    /**
     * Returns whether the extension's action menu button should be displayed.
     */
    showActionMenu_(extension) {
        return !!extension.recommendationsUrl;
    }
    /**
     * Returns whether the find alternative button in the extension's action menu
     * should be displayed.
     */
    showExtensionFindAlternativeAction_() {
        return !!this.extensionWithActionMenuOpened_ &&
            !!this.extensionWithActionMenuOpened_.recommendationsUrl;
    }
    /**
     * Returns the accessible label for the remove button corresponding to
     * `extensionName`.
     */
    getRemoveButtonLabelFor_(extensionName) {
        return this.i18n('mv2DeprecationPanelRemoveButtonAccLabel', extensionName);
    }
    /**
     * Returns the accessible label for the action menu button corresponding to
     * `extensionName`.
     */
    getActionMenuButtonLabelFor_(extensionName) {
        return this.i18n('mv2DeprecationPanelExtensionActionMenuLabel', extensionName);
    }
    /**
     * Returns the HTML representation of the subtitle string. We need the HTML
     * representation instead of the string since the string holds a link.
     */
    getSubtitleString_() {
        return sanitizeInnerHtml(this.subtitleString_, { attrs: ['aria-description'] });
    }
    /**
     * Triggers the MV2 deprecation notice dismissal when the dismiss button is
     * clicked.
     */
    onDismissButtonClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Mv2Deprecation.Unsupported.Dismissed');
        assert(this.delegate);
        this.delegate.dismissMv2DeprecationNotice();
    }
    /**
     * Triggers an extension removal when the remove button is clicked for an
     * extension.
     */
    onRemoveButtonClick_(event) {
        chrome.metricsPrivate.recordUserAction('Extensions.Mv2Deprecation.Unsupported.RemoveExtension');
        this.$.actionMenu.close();
        const id = event.target.dataset['id'];
        assert(!!id);
        assert(this.delegate);
        this.delegate.deleteItem(id);
    }
    /**
     * Opens the action menu for a specific extension when the action menu button
     * is clicked.
     */
    onExtensionActionMenuClick_(event) {
        const index = Number(event.target.dataset['index']);
        this.extensionWithActionMenuOpened_ = this.extensions[index];
        this.$.actionMenu.showAt(event.target, { anchorAlignmentY: AnchorAlignment.AFTER_END });
    }
    /**
     * Opens a URL in the Web Store with extension recommendations for the
     * extension whose find alternative action is clicked.
     */
    onFindAlternativeExtensionActionClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Mv2Deprecation.Unsupported.FindAlternativeForExtension');
        const recommendationsUrl = this.extensionWithActionMenuOpened_?.recommendationsUrl;
        assert(!!recommendationsUrl);
        assert(this.delegate);
        this.delegate.openUrl(recommendationsUrl);
    }
}
customElements.define(ExtensionsMv2DeprecationPanelElement.is, ExtensionsMv2DeprecationPanelElement);
