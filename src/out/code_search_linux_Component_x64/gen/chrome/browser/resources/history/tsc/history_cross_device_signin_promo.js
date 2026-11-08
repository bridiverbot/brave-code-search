// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { HistoryCrossDeviceSigninPromoPageReceiver } from 'chrome://resources/cr_components/history/history_cross_device_signin_promo.mojom-webui.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './history_cross_device_signin_promo.css.js';
import { getHtml } from './history_cross_device_signin_promo.html.js';
import { HistoryCrossDeviceSigninPromoBrowserProxy } from './history_cross_device_signin_promo_browser_proxy.js';
const HistoryCrossDeviceSigninPromoElementBase = I18nMixinLit(CrLitElement);
export class HistoryCrossDeviceSigninPromoElement extends HistoryCrossDeviceSigninPromoElementBase {
    static get is() {
        return 'history-cross-device-signin-promo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isBubbleOpen_: { type: Boolean },
        };
    }
    #isBubbleOpen__accessor_storage = false;
    get isBubbleOpen_() { return this.#isBubbleOpen__accessor_storage; }
    set isBubbleOpen_(value) { this.#isBubbleOpen__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.receiver_ = new HistoryCrossDeviceSigninPromoPageReceiver(this);
        this.handler_.setPage(this.receiver_.$.bindNewPipeAndPassRemote());
        this.handler_.shouldShowPromoCard().then(({ shouldShow }) => {
            this.propagateShouldShowPromo_(shouldShow);
            if (shouldShow) {
                this.handler_.onPromoCardShown();
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.isBubbleOpen_ = false;
        this.receiver_?.$.close();
        this.receiver_ = null;
    }
    onPromoBubbleStateChanged(isOpen) {
        this.isBubbleOpen_ = isOpen;
    }
    hidePromoCard() {
        this.propagateShouldShowPromo_(false);
    }
    handler_ = HistoryCrossDeviceSigninPromoBrowserProxy.getInstance().handler;
    receiver_ = null;
    onActionButtonClick_() {
        this.handler_.onPromoCardActionClicked();
    }
    onCloseClick_() {
        this.handler_.onPromoCardDismissed();
        this.propagateShouldShowPromo_(false);
    }
    propagateShouldShowPromo_(shouldShow) {
        this.fire('should-show-history-cross-device-signin-promo', { shouldShow });
    }
}
customElements.define(HistoryCrossDeviceSigninPromoElement.is, HistoryCrossDeviceSigninPromoElement);
