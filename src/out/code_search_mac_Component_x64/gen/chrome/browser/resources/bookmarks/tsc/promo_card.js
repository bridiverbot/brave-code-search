// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { BookmarkPromoType } from './constants.js';
import { getCss } from './promo_card.css.js';
import { getHtml } from './promo_card.html.js';
const PromoCardElementBase = WebUiListenerMixinLit(CrLitElement);
export class PromoCardElement extends PromoCardElementBase {
    static get is() {
        return 'promo-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            promoData_: { type: Object },
        };
    }
    #promoData__accessor_storage = {
        promoType: BookmarkPromoType.NONE,
        canShow: false,
        promoTitle: '',
        promoSubtitle: '',
        actionButtonText: '',
        promoAvatarUrl: '',
    };
    get promoData_() { return this.#promoData__accessor_storage; }
    set promoData_(value) { this.#promoData__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.getPromoData().then(this.updatePromoData_.bind(this));
        this.addWebUiListener('promo-data-updated', this.updatePromoData_.bind(this));
    }
    browserProxy_ = BrowserProxyImpl.getInstance();
    updatePromoData_(promoData) {
        const isNewPromoShown = (this.promoData_.canShow !== promoData.canShow ||
            this.promoData_.promoType !== promoData.promoType) &&
            promoData.canShow;
        this.promoData_ = promoData;
        if (isNewPromoShown) {
            this.browserProxy_.onPromoShown();
        }
        this.propagateShouldShowPromo_(this.promoData_.canShow);
    }
    onActionButtonClick_() {
        this.browserProxy_.onPromoClicked();
    }
    onCloseClick_() {
        this.promoData_.canShow = false;
        this.promoData_.promoType = BookmarkPromoType.NONE;
        this.browserProxy_.onPromoDismissed();
        // Allows to close the promo right away instead of waiting for the
        // notification from the browser.
        this.propagateShouldShowPromo_(false);
    }
    // Trigger update on the list.
    propagateShouldShowPromo_(shouldShow) {
        this.fire('should-show-promo-card', { shouldShowPromoCard: shouldShow });
    }
}
customElements.define(PromoCardElement.is, PromoCardElement);
