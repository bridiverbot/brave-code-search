// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-rivacy-guide-dialog' is a settings dialog that helps users guide
 * various privacy settings.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './privacy_guide_page.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './privacy_guide_dialog.css.js';
import { getHtml } from './privacy_guide_dialog.html.js';
export class SettingsPrivacyGuideDialogElement extends CrLitElement {
    static get is() {
        return 'settings-privacy-guide-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    firstUpdated() {
        this.$.dialog.showModal();
        this.$.backToSettingsButton.focus();
    }
    onDialogCancel_(e) {
        if (e.target === this.$.dialog) {
            e.preventDefault();
        }
    }
    onDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.$.dialog) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire('close');
    }
    onPrivacyGuidePageClose_(e) {
        e.stopPropagation();
        this.$.dialog.close();
    }
    onSettingsBackClick_(e) {
        e.stopPropagation();
        this.$.dialog.close();
    }
}
customElements.define(SettingsPrivacyGuideDialogElement.is, SettingsPrivacyGuideDialogElement);
