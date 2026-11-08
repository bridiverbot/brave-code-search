// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../cr_icon_button/cr_icon_button.js';
import '../icons.html.js';
import './cr_toolbar_search_field.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_toolbar.css.js';
import { getHtml } from './cr_toolbar.html.js';
export class CrToolbarElement extends CrLitElement {
    static get is() {
        return 'cr-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // Name to display in the toolbar, in titlecase.
            pageName: { type: String },
            // Prompt text to display in the search field.
            searchPrompt: { type: String },
            // Tooltip to display on the clear search button.
            clearLabel: { type: String },
            // Tooltip to display on the menu button.
            menuLabel: { type: String },
            // Value is proxied through to cr-toolbar-search-field. When true,
            // the search field will show a processing spinner.
            spinnerActive: { type: Boolean },
            // Controls whether the menu button is shown at the start of the menu.
            showMenu: { type: Boolean },
            // Controls whether the search field is shown.
            showSearch: { type: Boolean },
            // Controls whether the search field is autofocused.
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            // True when the toolbar is displaying in narrow mode.
            narrow: {
                type: Boolean,
                reflect: true,
                notify: true,
            },
            /**
             * The threshold at which the toolbar will change from normal to narrow
             * mode, in px.
             */
            narrowThreshold: {
                type: Number,
            },
            alwaysShowLogo: {
                type: Boolean,
                reflect: true,
            },
            showingSearch_: {
                type: Boolean,
                reflect: true,
            },
            searchIconOverride: { type: String },
            searchInputAriaDescription: { type: String },
        };
    }
    #pageName_accessor_storage = '';
    get pageName() { return this.#pageName_accessor_storage; }
    set pageName(value) { this.#pageName_accessor_storage = value; }
    #searchPrompt_accessor_storage = '';
    get searchPrompt() { return this.#searchPrompt_accessor_storage; }
    set searchPrompt(value) { this.#searchPrompt_accessor_storage = value; }
    #clearLabel_accessor_storage = '';
    get clearLabel() { return this.#clearLabel_accessor_storage; }
    set clearLabel(value) { this.#clearLabel_accessor_storage = value; }
    #menuLabel_accessor_storage;
    get menuLabel() { return this.#menuLabel_accessor_storage; }
    set menuLabel(value) { this.#menuLabel_accessor_storage = value; }
    #spinnerActive_accessor_storage = false;
    get spinnerActive() { return this.#spinnerActive_accessor_storage; }
    set spinnerActive(value) { this.#spinnerActive_accessor_storage = value; }
    #showMenu_accessor_storage = false;
    get showMenu() { return this.#showMenu_accessor_storage; }
    set showMenu(value) { this.#showMenu_accessor_storage = value; }
    #showSearch_accessor_storage = true;
    get showSearch() { return this.#showSearch_accessor_storage; }
    set showSearch(value) { this.#showSearch_accessor_storage = value; }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #narrow_accessor_storage = false;
    get narrow() { return this.#narrow_accessor_storage; }
    set narrow(value) { this.#narrow_accessor_storage = value; }
    #narrowThreshold_accessor_storage = 900;
    get narrowThreshold() { return this.#narrowThreshold_accessor_storage; }
    set narrowThreshold(value) { this.#narrowThreshold_accessor_storage = value; }
    #alwaysShowLogo_accessor_storage = false;
    get alwaysShowLogo() { return this.#alwaysShowLogo_accessor_storage; }
    set alwaysShowLogo(value) { this.#alwaysShowLogo_accessor_storage = value; }
    #showingSearch__accessor_storage = false;
    get showingSearch_() { return this.#showingSearch__accessor_storage; }
    set showingSearch_(value) { this.#showingSearch__accessor_storage = value; }
    #searchIconOverride_accessor_storage;
    get searchIconOverride() { return this.#searchIconOverride_accessor_storage; }
    set searchIconOverride(value) { this.#searchIconOverride_accessor_storage = value; }
    #searchInputAriaDescription_accessor_storage = '';
    get searchInputAriaDescription() { return this.#searchInputAriaDescription_accessor_storage; }
    set searchInputAriaDescription(value) { this.#searchInputAriaDescription_accessor_storage = value; }
    narrowQuery_ = null;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('narrowThreshold')) {
            this.narrowQuery_ =
                window.matchMedia(`(max-width: ${this.narrowThreshold}px)`);
            this.narrow = this.narrowQuery_.matches;
            this.narrowQuery_.addListener(() => this.onQueryChanged_());
        }
    }
    getSearchField() {
        return this.$.search;
    }
    onMenuClick_() {
        this.fire('cr-toolbar-menu-click');
    }
    async focusMenuButton() {
        assert(this.showMenu);
        // Wait for rendering to finish to ensure menuButton exists on the DOM.
        await this.updateComplete;
        const menuButton = this.shadowRoot.querySelector('#menuButton');
        assert(!!menuButton);
        menuButton.focus();
    }
    isMenuFocused() {
        return !!this.shadowRoot.activeElement &&
            this.shadowRoot.activeElement.id === 'menuButton';
    }
    onShowingSearchChanged_(e) {
        this.showingSearch_ = e.detail.value;
    }
    onQueryChanged_() {
        assert(this.narrowQuery_);
        this.narrow = this.narrowQuery_.matches;
    }
}
customElements.define(CrToolbarElement.is, CrToolbarElement);
