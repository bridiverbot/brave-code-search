// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '../feature_showcase_step.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../default_browser.mojom-webui.js';
import { getCss } from './default_browser_step.css.js';
import { getHtml } from './default_browser_step.html.js';
export class FeatureShowcaseDefaultBrowserStepElement extends CrLitElement {
    static get is() {
        return 'feature-showcase-default-browser-step';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            buttonsDisabled: { type: Boolean },
        };
    }
    #buttonsDisabled_accessor_storage = false;
    get buttonsDisabled() { return this.#buttonsDisabled_accessor_storage; }
    set buttonsDisabled(value) { this.#buttonsDisabled_accessor_storage = value; }
    onConfirmButtonClick_() {
        this.buttonsDisabled = true;
        browserProxyFactory.getInstance().handler.setAsDefaultBrowser();
        this.fire('step-completed');
    }
    onSkipButtonClick_() {
        this.buttonsDisabled = true;
        browserProxyFactory.getInstance().handler.skipSetAsDefaultBrowser();
        this.fire('step-completed');
    }
}
customElements.define(FeatureShowcaseDefaultBrowserStepElement.is, FeatureShowcaseDefaultBrowserStepElement);
