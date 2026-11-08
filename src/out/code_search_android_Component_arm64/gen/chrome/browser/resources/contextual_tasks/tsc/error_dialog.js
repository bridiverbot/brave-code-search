// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './error_dialog.css.js';
import { getHtml } from './error_dialog.html.js';
export class ContextualTasksErrorDialogElement extends CrLitElement {
    static get is() {
        return 'contextual-tasks-error-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    onReloadClick_() {
        window.location.reload();
        this.$.dialog.close();
    }
}
customElements.define(ContextualTasksErrorDialogElement.is, ContextualTasksErrorDialogElement);
