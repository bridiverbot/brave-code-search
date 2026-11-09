// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import './organizer_list.js';
import '/strings.m.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { ForeignTabsDelegate } from './delegates/foreign_tabs_delegate.js';
import { OpenTabsDelegate } from './delegates/open_tabs_delegate.js';
import { RecentTabsDelegate } from './delegates/recent_tabs_delegate.js';
import { TabGroupsDelegate } from './delegates/tab_groups_delegate.js';
import { browserProxyFactory } from './organizer_panel.mojom-webui.js';
export class OrganizerPanelAppElement extends CrLitElement {
    static get is() {
        return 'organizer-panel-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            shortcut_: { type: String },
            sectionDelegates_: { type: Array },
            searchQuery_: { type: String },
            verticalTabsEnabled: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #verticalTabsEnabled_accessor_storage = false;
    get verticalTabsEnabled() { return this.#verticalTabsEnabled_accessor_storage; }
    set verticalTabsEnabled(value) { this.#verticalTabsEnabled_accessor_storage = value; }
    #shortcut__accessor_storage = loadTimeData.getString('shortcutText');
    get shortcut_() { return this.#shortcut__accessor_storage; }
    set shortcut_(value) { this.#shortcut__accessor_storage = value; }
    #searchQuery__accessor_storage = '';
    get searchQuery_() { return this.#searchQuery__accessor_storage; }
    set searchQuery_(value) { this.#searchQuery__accessor_storage = value; }
    #sectionDelegates__accessor_storage = this.getSectionDelegates_();
    get sectionDelegates_() { return this.#sectionDelegates__accessor_storage; }
    set sectionDelegates_(value) { this.#sectionDelegates__accessor_storage = value; }
    browserProxy_ = browserProxyFactory.getInstance();
    verticalTabsEnabledChangedListenerId_ = null;
    onKeydown_ = (e) => {
        if (e.key === 'Tab') {
            const closeButton = this.getCloseButton_();
            if (closeButton && e.composedPath().includes(closeButton)) {
                if (!e.shiftKey) {
                    this.$.searchField.getSearchInput().focus();
                }
                else {
                    if (!this.$.list.focusLastSection()) {
                        this.$.searchField.getSearchInput().focus();
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };
    onWindowFocused_ = () => {
        // Autofocus only works when the window is initially shown; for subsequent
        // focus events, focus the search field.
        this.$.searchField.showAndFocus();
    };
    onContextMenu_ = (e) => {
        e.preventDefault();
    };
    onVisibilityChange_ = () => {
        if (document.visibilityState === 'hidden') {
            this.$.searchField.setValue('');
            this.searchQuery_ = '';
            this.$.list.scrollTop = 0;
        }
    };
    connectedCallback() {
        super.connectedCallback();
        ColorChangeUpdater.forDocument().start();
        this.addEventListener('keydown', this.onKeydown_);
        window.addEventListener('focus', this.onWindowFocused_);
        window.addEventListener('contextmenu', this.onContextMenu_);
        document.addEventListener('visibilitychange', this.onVisibilityChange_);
        this.verticalTabsEnabledChangedListenerId_ =
            this.browserProxy_.callbackRouter.onVerticalTabsEnabledChanged
                .addListener((verticalTabsEnabled) => {
                this.verticalTabsEnabled = verticalTabsEnabled;
            });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.onKeydown_);
        window.removeEventListener('focus', this.onWindowFocused_);
        window.removeEventListener('contextmenu', this.onContextMenu_);
        document.removeEventListener('visibilitychange', this.onVisibilityChange_);
        assert(this.verticalTabsEnabledChangedListenerId_ !== null);
        this.browserProxy_.callbackRouter.removeListener(this.verticalTabsEnabledChangedListenerId_);
        this.verticalTabsEnabledChangedListenerId_ = null;
    }
    getCloseButton_() {
        const button = this.shadowRoot?.querySelector('#closeButton');
        if (!button || button.hidden || button.style.display === 'none') {
            return null;
        }
        return button;
    }
    onFocusAfterList_(e) {
        const closeButton = this.getCloseButton_();
        if (closeButton) {
            closeButton.focus();
            e.detail?.sourceEvent?.preventDefault();
            e.detail?.sourceEvent?.stopPropagation();
        }
    }
    onFocusBeforeList_(e) {
        this.$.searchField.getSearchInput().focus();
        e.detail?.sourceEvent?.preventDefault();
        e.detail?.sourceEvent?.stopPropagation();
    }
    getSectionDelegates_() {
        const delegates = [
            new OpenTabsDelegate(),
            ...(!loadTimeData.getBoolean('isIncognitoMode') ?
                [new RecentTabsDelegate()] :
                []),
            new TabGroupsDelegate(),
        ];
        if (loadTimeData.getBoolean('foreignTabsEnabled')) {
            delegates.push(new ForeignTabsDelegate());
        }
        return delegates;
    }
    onSearchChanged_(e) {
        this.searchQuery_ = e.detail;
    }
    onSearchIconClicked_() {
        this.$.searchField.getSearchInput().focus();
    }
    onShortcutClick_() {
        this.$.searchField.getSearchInput().focus();
    }
}
customElements.define(OrganizerPanelAppElement.is, OrganizerPanelAppElement);
