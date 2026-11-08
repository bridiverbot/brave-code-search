// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/policy/cr_tooltip_icon.js';
import '//resources/cr_elements/icons.html.js';
import { browserProxyFactory, InstallReason } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { AppManagementUserAction } from 'chrome://resources/cr_components/app_management/constants.js';
import { recordAppManagementUserAction } from 'chrome://resources/cr_components/app_management/util.js';
import { assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './uninstall_button.css.js';
import { getHtml } from './uninstall_button.html.js';
import { createDummyApp } from './web_app_settings_utils.js';
export class UninstallButtonElement extends CrLitElement {
    static get is() {
        return 'app-management-uninstall-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            app: { type: Object },
            uninstallLabel: { type: String },
            policyLabel: { type: String },
        };
    }
    #app_accessor_storage = createDummyApp();
    get app() { return this.#app_accessor_storage; }
    set app(value) { this.#app_accessor_storage = value; }
    #uninstallLabel_accessor_storage = '';
    get uninstallLabel() { return this.#uninstallLabel_accessor_storage; }
    set uninstallLabel(value) { this.#uninstallLabel_accessor_storage = value; }
    #policyLabel_accessor_storage = '';
    get policyLabel() { return this.#policyLabel_accessor_storage; }
    set policyLabel(value) { this.#policyLabel_accessor_storage = value; }
    /**
     * Returns true if the button should be disabled due to app install type.
     *
     * If the compiler complains about the "Argument ... is not assignable to
     * parameter of type 'never', you need to add a new 'case' below.
     */
    getDisableState_() {
        switch (this.app.installReason) {
            case InstallReason.kSystem:
            case InstallReason.kPolicy:
            case InstallReason.kKiosk:
                return true;
            case InstallReason.kUnknown:
            case InstallReason.kOem:
            case InstallReason.kDefault:
            case InstallReason.kSubApp:
            case InstallReason.kSync:
            case InstallReason.kUser:
            case InstallReason.kSubApp:
            case InstallReason.kCommandLine:
                return false;
            default:
                assertNotReachedCase(this.app.installReason);
        }
    }
    /**
     * Returns true if the app was installed by a policy.
     */
    showPolicyIndicator_() {
        return this.app.installReason === InstallReason.kPolicy;
    }
    /**
     * Returns true if the uninstall button should be shown.
     */
    showUninstallButton_() {
        return this.app.installReason !== InstallReason.kSystem;
    }
    onClick_() {
        browserProxyFactory.getInstance().handler.uninstall(this.app.id);
        recordAppManagementUserAction(this.app.type, AppManagementUserAction.UNINSTALL_DIALOG_LAUNCHED);
    }
}
customElements.define(UninstallButtonElement.is, UninstallButtonElement);
