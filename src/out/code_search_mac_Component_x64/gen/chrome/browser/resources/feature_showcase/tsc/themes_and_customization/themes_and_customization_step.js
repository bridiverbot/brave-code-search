// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.js';
import '//resources/cr_components/theme_color_picker/theme_color_picker.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '../feature_showcase_step.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../themes_and_customization.mojom-webui.js';
import { getCss } from './themes_and_customization_step.css.js';
import { getHtml } from './themes_and_customization_step.html.js';
export class FeatureShowcaseThemesAndCustomizationStepElement extends CrLitElement {
    static get is() {
        return 'feature-showcase-themes-and-customization-step';
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
    connectedCallback() {
        super.connectedCallback();
        browserProxyFactory.getInstance().handler.snapshotTheme();
    }
    onConfirmClick_() {
        browserProxyFactory.getInstance().handler.acceptTheme();
        this.buttonsDisabled = true;
        this.fire('step-completed');
    }
    onSkipClick_() {
        browserProxyFactory.getInstance().handler.revertTheme();
        this.buttonsDisabled = true;
        this.fire('step-completed');
    }
}
customElements.define(FeatureShowcaseThemesAndCustomizationStepElement.is, FeatureShowcaseThemesAndCustomizationStepElement);
