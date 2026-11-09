/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement, } from '//resources/lit/v3_0/lit.rollup.js';
import { BraveAccountRowBrowserProxyImpl, } from './brave_account_row_browser_proxy.js';
import { getCss } from './brave_account_compact_row.css.js';
import { getHtml } from './brave_account_compact_row.html.js';
import { TextTruncator } from './brave_account_text_truncator.js';
import { routes } from './route.js';
import { Router } from './router.js';
// A row for pages that are not where the account is managed: it only points at
// the account section, which owns the full account UI. Every account state is
// summarized by its description alone.
export class BraveAccountCompactRowElement extends CrLitElement {
    static get is() {
        return 'brave-account-compact-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            actionRequired: { type: Boolean, state: true },
            description: { type: String, state: true },
            displayDescription: { type: String, state: true },
            state: { type: Object, state: true },
        };
    }
    #actionRequired_accessor_storage = false;
    get actionRequired() { return this.#actionRequired_accessor_storage; }
    set actionRequired(value) { this.#actionRequired_accessor_storage = value; }
    #description_accessor_storage = '';
    get description() { return this.#description_accessor_storage; }
    set description(value) { this.#description_accessor_storage = value; }
    #displayDescription_accessor_storage = '';
    get displayDescription() { return this.#displayDescription_accessor_storage; }
    set displayDescription(value) { this.#displayDescription_accessor_storage = value; }
    #state_accessor_storage = undefined;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    browserProxy;
    accountStateListenerId = null;
    truncator = new TextTruncator((text) => {
        this.displayDescription = text;
    });
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy = new BraveAccountRowBrowserProxyImpl();
        this.accountStateListenerId =
            this.browserProxy.authenticationObserverCallbackRouter.onAccountStateChanged.addListener((state) => {
                this.state = state;
            });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.accountStateListenerId);
        this.browserProxy.authenticationObserverCallbackRouter.removeListener(this.accountStateListenerId);
        this.browserProxy.authenticationObserverCallbackRouter.$.close();
        this.truncator.disconnect();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('state')) {
            this.actionRequired = Boolean(this.state?.loggedIn?.verification
                ?? this.state?.loggedOut?.verification);
            this.description = this.getDescription();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('description')) {
            const element = this.shadowRoot?.querySelector('.description');
            if (element) {
                this.truncator.observe(element, this.description);
            }
            else {
                this.truncator.disconnect();
            }
        }
    }
    getDescription() {
        if (this.state === undefined) {
            return '';
        }
        if (this.actionRequired) {
            return loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_ACTION_REQUIRED_LABEL" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_ACTION_REQUIRED_LABEL */);
        }
        return (this.state.loggedIn?.email
            ?? loadTimeData.getString("SETTINGS_BRAVE_ACCOUNT_LOGGED_OUT_ROW_TITLE" /* BraveAccountSettingsStrings.SETTINGS_BRAVE_ACCOUNT_LOGGED_OUT_ROW_TITLE */));
    }
    navigateToAccountSection() {
        Router.getInstance().navigateTo(routes.GET_STARTED);
    }
}
customElements.define(BraveAccountCompactRowElement.is, BraveAccountCompactRowElement);
