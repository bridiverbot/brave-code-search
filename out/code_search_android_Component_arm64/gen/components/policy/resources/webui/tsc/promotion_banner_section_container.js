// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './promotion_banner_section_container.css.js';
import { getHtml } from './promotion_banner_section_container.html.js';
export class PromotionBannerSectionContainerElement extends CrLitElement {
    static get is() {
        return 'promotion-banner-section-container';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    onRedirectClick() {
        this.fire('redirect');
    }
    onDismissClick() {
        this.fire('dismiss');
    }
}
customElements.define(PromotionBannerSectionContainerElement.is, PromotionBannerSectionContainerElement);
