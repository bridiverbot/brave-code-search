// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_shared_style.css.js';
import './toggle_row.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { browserProxyFactory, RunOnOsLoginMode } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { AppManagementUserAction } from 'chrome://resources/cr_components/app_management/constants.js';
import { recordAppManagementUserAction } from 'chrome://resources/cr_components/app_management/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app_management_shared_style.css.js';
import { getHtml } from './run_on_os_login_item.html.js';
import { createDummyApp } from './web_app_settings_utils.js';
function convertModeToBoolean(runOnOsLoginMode) {
    switch (runOnOsLoginMode) {
        case RunOnOsLoginMode.kNotRun:
            return false;
        case RunOnOsLoginMode.kWindowed:
            return true;
        default:
            assertNotReached();
    }
}
function getRunOnOsLoginModeBoolean(runOnOsLoginMode) {
    assert(runOnOsLoginMode !== RunOnOsLoginMode.kUnknown, 'Run on OS Login Mode is not set');
    return convertModeToBoolean(runOnOsLoginMode);
}
export class RunOnOsLoginItemElement extends CrLitElement {
    static get is() {
        return 'app-management-run-on-os-login-item';
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
            loginModeLabel: { type: String },
        };
    }
    #loginModeLabel_accessor_storage = '';
    get loginModeLabel() { return this.#loginModeLabel_accessor_storage; }
    set loginModeLabel(value) { this.#loginModeLabel_accessor_storage = value; }
    #app_accessor_storage = createDummyApp();
    get app() { return this.#app_accessor_storage; }
    set app(value) { this.#app_accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('click', this.onClick_);
        this.addEventListener('change', this.toggleOsLoginMode_);
    }
    isManaged_() {
        const loginData = this.app.runOnOsLogin;
        if (loginData) {
            return loginData.isManaged;
        }
        return false;
    }
    getValue_() {
        const loginMode = this.getRunOnOsLoginMode();
        assert(loginMode);
        if (loginMode) {
            return getRunOnOsLoginModeBoolean(loginMode);
        }
        return false;
    }
    onClick_() {
        this.shadowRoot.querySelector('#toggle-row').click();
    }
    toggleOsLoginMode_() {
        assert(this.app);
        const currentRunOnOsLoginData = this.app.runOnOsLogin;
        if (currentRunOnOsLoginData) {
            const currentRunOnOsLoginMode = currentRunOnOsLoginData.loginMode;
            if (currentRunOnOsLoginMode === RunOnOsLoginMode.kUnknown) {
                assertNotReached();
            }
            const newRunOnOsLoginMode = (currentRunOnOsLoginMode === RunOnOsLoginMode.kNotRun) ?
                RunOnOsLoginMode.kWindowed :
                RunOnOsLoginMode.kNotRun;
            browserProxyFactory.getInstance().handler.setRunOnOsLoginMode(this.app.id, newRunOnOsLoginMode);
            const booleanRunOnOsLoginMode = getRunOnOsLoginModeBoolean(newRunOnOsLoginMode);
            const runOnOsLoginModeChangeAction = booleanRunOnOsLoginMode ?
                AppManagementUserAction.RUN_ON_OS_LOGIN_MODE_TURNED_ON :
                AppManagementUserAction.RUN_ON_OS_LOGIN_MODE_TURNED_OFF;
            recordAppManagementUserAction(this.app.type, runOnOsLoginModeChangeAction);
        }
    }
    getRunOnOsLoginMode() {
        if (this.app.runOnOsLogin) {
            return this.app.runOnOsLogin.loginMode;
        }
        return null;
    }
}
customElements.define(RunOnOsLoginItemElement.is, RunOnOsLoginItemElement);
