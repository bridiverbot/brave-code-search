// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A component for displaying a single NTP Promo.
 */
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './ntp_promo_icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../ntp_promo.mojom-webui.js';
import { getCss } from './individual_promos.css.js';
import { getHtml } from './individual_promos.html.js';
export class IndividualPromosElement extends CrLitElement {
    static get is() {
        return 'individual-promos';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            promo_: { type: Object },
        };
    }
    #promo__accessor_storage = null;
    get promo_() { return this.#promo__accessor_storage; }
    set promo_(value) { this.#promo__accessor_storage = value; }
    handler_;
    callbackRouter_;
    listenerIds_ = [];
    notifiedShown_ = false;
    constructor() {
        super();
        this.handler_ = browserProxyFactory.getInstance().handler;
        this.callbackRouter_ = browserProxyFactory.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds_.push(this.callbackRouter_.setPromo.addListener(this.onSetPromo.bind(this)));
        this.handler_.requestPromos();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listenerId of this.listenerIds_) {
            this.callbackRouter_.removeListener(listenerId);
        }
        this.listenerIds_ = [];
    }
    // Public for testing purposes only.
    onSetPromo(promo) {
        this.promo_ = promo;
        if (this.promo_) {
            this.style.display = 'block';
        }
        else {
            this.style.display = 'none';
        }
        if (!this.notifiedShown_ && this.promo_) {
            this.notifiedShown_ = true;
            this.handler_.onPromoShown(this.promo_.id);
        }
    }
    onClick_(promoId) {
        assert(promoId, 'Button should not be able to display if no promoId.');
        this.handler_.onPromoClicked(promoId);
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        this.shadowRoot.querySelector('#actionMenu').showAt(e.target);
    }
    onPromoDismissed_(e) {
        e.stopPropagation();
        this.shadowRoot.querySelector('#actionMenu').close();
        if (this.promo_) {
            this.handler_.onPromoDismissed(this.promo_.id);
            this.promo_ = null;
        }
    }
    getBodyTextCssClass_() {
        return 'singlePromo';
    }
}
customElements.define(IndividualPromosElement.is, IndividualPromosElement);
