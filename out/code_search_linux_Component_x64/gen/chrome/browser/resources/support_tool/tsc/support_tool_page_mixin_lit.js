// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin to be used by Lit elements that define Support Tool
 * pages.
 */
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
export const SupportToolPageMixinLit = (superClass) => {
    const superClassBase = I18nMixinLit(superClass);
    class SupportToolPageMixinLit extends superClassBase {
        $$(query) {
            return this.shadowRoot.querySelector(query);
        }
        // Puts the focus on the first header (h1) element of the page. Every
        // Support Tool page Lit element that implements this mixin should
        // have a focusable header to describe the step.
        ensureFocusOnPageHeader() {
            this.$$('h1').focus();
        }
    }
    return SupportToolPageMixinLit;
};
