// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{I18nMixinLit}from"chrome://resources/cr_elements/i18n_mixin_lit.js";export const SupportToolPageMixinLit=superClass=>{const superClassBase=I18nMixinLit(superClass);class SupportToolPageMixinLit extends superClassBase{$$(query){return this.shadowRoot.querySelector(query)}ensureFocusOnPageHeader(){this.$$("h1").focus()}}return SupportToolPageMixinLit};