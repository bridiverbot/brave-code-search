/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { Authentication, AuthenticationObserverCallbackRouter, DialogController, } from './brave_account.mojom-webui.js';
import { PasswordStrengthMeter } from './password_strength_meter.mojom-webui.js';
export class BraveAccountBrowserProxyImpl {
    authentication;
    authenticationObserverCallbackRouter;
    dialog_controller;
    password_strength_meter;
    dialogMode;
    constructor() {
        this.authentication = Authentication.getRemote();
        this.authenticationObserverCallbackRouter =
            new AuthenticationObserverCallbackRouter();
        this.dialog_controller = DialogController.getRemote();
        this.password_strength_meter = PasswordStrengthMeter.getRemote();
        this.authentication.addObserver(this.authenticationObserverCallbackRouter.$.bindNewPipeAndPassRemote());
    }
    closeDialog() {
        this.dialog_controller.closeDialog();
    }
    // The mode is fixed for the page's lifetime, so the round trip is made once
    // and every caller awaits the same promise.
    getDialogMode() {
        return (this.dialogMode ??= this.dialog_controller
            .getDialogMode()
            .then(({ dialogMode }) => dialogMode));
    }
    static getInstance() {
        return instance || (instance = new BraveAccountBrowserProxyImpl());
    }
}
let instance = null;
