// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory as finishOrContinueMojoProxyFactory } from '../finish_or_continue.mojom-webui.js';
import { IntroBrowserProxyImpl } from '../intro_browser_proxy.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { MatchMediaProxyImpl } from './match_media_proxy.js';
export class FinishOrContinueAppElement extends CrLitElement {
    static get is() {
        return 'finish-or-continue-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isDarkMode_: { type: Boolean },
            disableAnimations_: { type: Boolean },
        };
    }
    #isDarkMode__accessor_storage = false;
    get isDarkMode_() { return this.#isDarkMode__accessor_storage; }
    set isDarkMode_(value) { this.#isDarkMode__accessor_storage = value; }
    #disableAnimations__accessor_storage = loadTimeData.getBoolean('disableAnimations');
    get disableAnimations_() { return this.#disableAnimations__accessor_storage; }
    set disableAnimations_(value) { this.#disableAnimations__accessor_storage = value; }
    isFeatureShowcaseEligible_ = false;
    matchMediaProxy_ = MatchMediaProxyImpl.getInstance();
    browserProxy_ = finishOrContinueMojoProxyFactory.getInstance();
    introBrowserProxy_ = IntroBrowserProxyImpl.getInstance();
    darkModeListener_;
    matchMedia_;
    listenerIds_ = [];
    constructor() {
        super();
        const params = new URLSearchParams(window.location.search);
        this.isFeatureShowcaseEligible_ = params.get('showcase') === 'true';
        this.matchMedia_ =
            this.matchMediaProxy_.matchMedia('(prefers-color-scheme: dark)');
        this.isDarkMode_ = this.matchMedia_.matches;
        this.darkModeListener_ = (e) => {
            this.isDarkMode_ = e.matches;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.matchMedia_.addEventListener('change', this.darkModeListener_);
        this.listenerIds_.push(this.introBrowserProxy_.callbackRouter.toggleAnimations.addListener((active) => this.toggleAnimations_(active)));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.matchMedia_.removeEventListener('change', this.darkModeListener_);
        this.listenerIds_.forEach(id => this.introBrowserProxy_.callbackRouter.removeListener(id));
        this.listenerIds_ = [];
    }
    getContinueEducationButtonLabel_() {
        return this.isFeatureShowcaseEligible_
            ? loadTimeData.getString('seeMoreTipsButtonLabel')
            : loadTimeData.getString('seeWhatsNewButtonLabel');
    }
    getAnimationUrl_(position) {
        return (this.isDarkMode_) ?
            `chrome://intro/animations/finish_or_continue_dark_${position}.json` :
            `chrome://intro/animations/finish_or_continue_light_${position}.json`;
    }
    toggleAnimations_(active) {
        if (this.disableAnimations_) {
            return;
        }
        this.$.leftAnimation.setPlay(active);
        this.$.rightAnimation.setPlay(active);
        this.$.bottomAnimation.setPlay(active);
    }
    onStartBrowsingClick_() {
        this.browserProxy_.handler.startBrowsing();
    }
    onContinueEducationClick_() {
        this.browserProxy_.handler.continueEducation();
    }
}
customElements.define(FinishOrContinueAppElement.is, FinishOrContinueAppElement);
