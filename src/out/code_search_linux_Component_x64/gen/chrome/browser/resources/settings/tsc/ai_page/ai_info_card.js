// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-ai-info-card' is the top info card in AI settings page.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../settings_page/settings_section.js';
import '../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './ai_info_card.css.js';
import { getHtml } from './ai_info_card.html.js';
export class SettingsAiInfoCardElement extends CrLitElement {
    static get is() {
        return 'settings-ai-info-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    isManaged_() {
        return loadTimeData.getBoolean('isManaged');
    }
    getIcon3_() {
        return this.isManaged_() ? loadTimeData.getString('managedByIcon') :
            'settings20:account-box';
    }
}
customElements.define(SettingsAiInfoCardElement.is, SettingsAiInfoCardElement);
