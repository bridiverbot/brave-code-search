// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import '//resources/cr_elements/cr_progress/cr_progress.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './progress_indicator_demo.css.js';
import { getHtml } from './progress_indicator_demo.html.js';
export class ProgressIndicatorDemoElement extends CrLitElement {
    static get is() {
        return 'progress-indicator-demo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
}
export const tagName = ProgressIndicatorDemoElement.is;
customElements.define(ProgressIndicatorDemoElement.is, ProgressIndicatorDemoElement);
