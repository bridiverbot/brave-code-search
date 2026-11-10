// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './sign_in_promo.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './intro_app.css.js';
import { getHtml } from './intro_app.html.js';
export class IntroAppElement extends CrLitElement {
    static get is() {
        return 'intro-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setupViewManager_();
    }
    async setupViewManager_() {
        if (!loadTimeData.getBoolean('disableAnimations')) {
            const kSplashViewDurationMillis = 1500;
            this.$.viewManager.switchView('splash', 'no-animation', 'no-animation');
            // Delay the switch to signInPromo based on the splash animation timing.
            await new Promise(resolve => setTimeout(resolve, kSplashViewDurationMillis));
        }
        this.$.viewManager.switchView('signInPromo', 'no-animation', 'no-animation');
    }
}
customElements.define(IntroAppElement.is, IntroAppElement);
