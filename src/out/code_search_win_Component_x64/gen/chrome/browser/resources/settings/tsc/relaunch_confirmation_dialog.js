// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { LifetimeBrowserProxyImpl } from '/shared/settings/lifetime_browser_proxy.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './relaunch_confirmation_dialog.html.js';
import { RestartType } from './relaunch_mixin_lit.js';
/**
 * The element corresponding to <relaunch-confirmation-dialog>.
 * The dialog is only supported for "non" ChromeOS platforms and is
 * shown to warn users if they have any open Incognito windows before
 * proceeding with the restart/relaunch action.
 *
 * To make use of this dialog, add the below html to the target html and
 * substitute the value of restartType to either RestartType.RELAUNCH or
 * RestartType.RESTART.
 *
 * ${this.shouldShowRelaunchDialog ? html`
 *   <relaunch-confirmation-dialog .restartType="${RestartType.RELAUNCH}"
 *       @close="${this.onRelaunchDialogClose}"></relaunch-confirmation-dialog>
 * ` : ''}
 *
 * Then, in the corresponding typescript file, make the target HTMLElement
 * inherit from RelaunchMixinLit and invoke the member method
 * RelaunchMixinLit#performRestart where required.
 */
export class RelaunchConfirmationDialogElement extends CrLitElement {
    static get is() {
        return 'relaunch-confirmation-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            relaunchConfirmationDialogDesc: { type: String },
            restartType: { type: Number },
            //  Boolean that defines if the confirmation dialog is opened for browser
            //  version update.
            isVersionUpdate: { type: Boolean },
        };
    }
    #relaunchConfirmationDialogDesc_accessor_storage = null;
    get relaunchConfirmationDialogDesc() { return this.#relaunchConfirmationDialogDesc_accessor_storage; }
    set relaunchConfirmationDialogDesc(value) { this.#relaunchConfirmationDialogDesc_accessor_storage = value; }
    #restartType_accessor_storage = RestartType.RESTART;
    get restartType() { return this.#restartType_accessor_storage; }
    set restartType(value) { this.#restartType_accessor_storage = value; }
    #isVersionUpdate_accessor_storage = false;
    get isVersionUpdate() { return this.#isVersionUpdate_accessor_storage; }
    set isVersionUpdate(value) { this.#isVersionUpdate_accessor_storage = value; }
    async connectedCallback() {
        super.connectedCallback();
        this.relaunchConfirmationDialogDesc =
            await LifetimeBrowserProxyImpl.getInstance()
                .getRelaunchConfirmationDialogDescription(this.isVersionUpdate);
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        if (RestartType.RELAUNCH === this.restartType) {
            LifetimeBrowserProxyImpl.getInstance().relaunch();
        }
        else if (RestartType.RESTART === this.restartType) {
            LifetimeBrowserProxyImpl.getInstance().restart();
        }
        else {
            assertNotReached();
        }
    }
}
customElements.define(RelaunchConfirmationDialogElement.is, RelaunchConfirmationDialogElement);
