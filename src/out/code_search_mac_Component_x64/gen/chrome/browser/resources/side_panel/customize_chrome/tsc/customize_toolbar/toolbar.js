// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../customize_toolbar.mojom-webui.js';
import { getCss } from './toolbar.css.js';
import { getHtml } from './toolbar.html.js';
const ToolbarElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class ToolbarElement extends ToolbarElementBase {
    static get is() {
        return 'customize-chrome-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            actions_: { type: Array },
            categories_: { type: Array },
            resetToDefaultDisabled_: { type: Boolean },
        };
    }
    apiProxy_ = browserProxyFactory.getInstance();
    listenerIds_ = [];
    #actions__accessor_storage = [];
    get actions_() { return this.#actions__accessor_storage; }
    set actions_(value) { this.#actions__accessor_storage = value; }
    #categories__accessor_storage = [];
    get categories_() { return this.#categories__accessor_storage; }
    set categories_(value) { this.#categories__accessor_storage = value; }
    #resetToDefaultDisabled__accessor_storage = true;
    get resetToDefaultDisabled_() { return this.#resetToDefaultDisabled__accessor_storage; }
    set resetToDefaultDisabled_(value) { this.#resetToDefaultDisabled__accessor_storage = value; }
    constructor() {
        super();
        this.populateUi_();
    }
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds_ = [
            this.apiProxy_.callbackRouter.setActionPinned.addListener(this.setActionPinned_.bind(this)),
            this.apiProxy_.callbackRouter.notifyActionsUpdated.addListener(this.populateUi_.bind(this)),
        ];
        this.addWebUiListener('theme-changed', this.populateUi_.bind(this));
        chrome.send('observeThemeChanges');
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.callbackRouter.removeListener(id));
        this.listenerIds_ = [];
    }
    focusOnBackButton() {
        this.$.heading.getBackButton().focus();
    }
    onBackButtonClick_() {
        this.fire('back-click');
    }
    onResetToDefaultClick_() {
        this.apiProxy_.handler.resetToDefault();
        const announcer = getAnnouncerInstance();
        announcer.announce(this.i18n('resetToDefaultButtonAnnouncement'));
    }
    getActionToggleHandler_(actionId, nextValue) {
        return (_event) => this.apiProxy_.handler.pinAction(actionId, nextValue);
    }
    setActionPinned_(actionId, pinned) {
        this.actions_ = this.actions_.map((action) => {
            if (action.id === actionId) {
                action.pinned = pinned;
            }
            return action;
        });
        this.updateResetToDefaultDisabled();
    }
    populateUi_() {
        this.apiProxy_.handler.listActions().then(({ actions }) => {
            this.actions_ = actions;
            assert(this.actions_.every(action => action.iconUrl.startsWith('data:')));
        });
        this.apiProxy_.handler.listCategories().then(({ categories }) => {
            this.categories_ = categories;
        });
        this.updateResetToDefaultDisabled();
    }
    updateResetToDefaultDisabled() {
        this.apiProxy_.handler.getIsCustomized().then(({ customized }) => {
            this.resetToDefaultDisabled_ = !customized;
        });
    }
}
customElements.define(ToolbarElement.is, ToolbarElement);
