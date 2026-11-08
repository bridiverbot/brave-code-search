// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '/strings.m.js';
// 
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DisclaimerState } from './aim_eligibility.mojom-webui.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BrowserProxy } from './browser_proxy.js';
// Input states.
var InputState;
(function (InputState) {
    InputState["NONE"] = "";
    InputState["FAIL"] = "fail";
})(InputState || (InputState = {}));
// Check result classes.
var CheckClass;
(function (CheckClass) {
    CheckClass["PASS"] = "pass";
    CheckClass["FAIL"] = "fail";
})(CheckClass || (CheckClass = {}));
export class AimEligibilityAppElement extends CrLitElement {
    static get is() {
        return 'aim-eligibility-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            eligibilityState_: { type: Object },
            inputState_: { type: String },
            showFooter_: { type: Boolean },
        };
    }
    #eligibilityState__accessor_storage = {
        isEligible: false,
        isEligibleByDse: false,
        isEligibleByPolicy: false,
        isThirdPartyEligibleByPolicy: false,
        isAimEligibleByServer: false,
        isFuseboxEligibleByServer: false,
        isCobrowseEligibleByServer: false,
        isServerEligibilityEnabled: false,
        lastUpdated: new Date(0),
        eligibilityResponseBase64Encoded: '',
        eligibilityResponseSource: '',
        eligibilityResponseAuthType: null,
        driveStatus: null,
    };
    get eligibilityState_() { return this.#eligibilityState__accessor_storage; }
    set eligibilityState_(value) { this.#eligibilityState__accessor_storage = value; }
    #inputState__accessor_storage = InputState.NONE;
    get inputState_() { return this.#inputState__accessor_storage; }
    set inputState_(value) { this.#inputState__accessor_storage = value; }
    #showFooter__accessor_storage = loadTimeData.getBoolean('showAimEligibilityFooter');
    get showFooter_() { return this.#showFooter__accessor_storage; }
    set showFooter_(value) { this.#showFooter__accessor_storage = value; }
    callbackRouter_ = BrowserProxy.getInstance().getCallbackRouter();
    listenerIds_ = [];
    openWindowProxy_ = OpenWindowProxyImpl.getInstance();
    pageHandler_ = BrowserProxy.getInstance().getPageHandler();
    connectedCallback() {
        super.connectedCallback();
        // 
        this.listenerIds_.push(this.callbackRouter_.onEligibilityStateChanged.addListener(this.onEligibilityStateChanged_.bind(this)));
        this.listenerIds_.push(this.callbackRouter_.onDriveStatusChanged.addListener(this.onDriveStatusChanged_.bind(this)));
        this.pageHandler_.getEligibilityState().then(({ state }) => this.onEligibilityStateChanged_(state));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listenerId of this.listenerIds_) {
            this.callbackRouter_.removeListener(listenerId);
        }
        this.listenerIds_ = [];
    }
    onResponseInput_(e) {
        this.eligibilityState_ = {
            ...this.eligibilityState_,
            eligibilityResponseBase64Encoded: e.target.value,
        };
        this.inputState_ = InputState.NONE;
    }
    onServerRequestClick_() {
        this.pageHandler_.requestServerEligibilityForDebugging();
    }
    onViewResponseClick_() {
        this.openWindowProxy_.openUrl(this.getProtoshopUrl_(this.eligibilityState_.eligibilityResponseBase64Encoded));
    }
    onDraftResponseClick_() {
        this.openWindowProxy_.openUrl(this.getProtoshopUrl_(''));
    }
    async onSaveResponseClick_() {
        const result = await this.pageHandler_.setEligibilityResponseForDebugging(this.eligibilityState_.eligibilityResponseBase64Encoded);
        this.inputState_ = result.success ? InputState.NONE : InputState.FAIL;
    }
    getCheckClass_(isPass) {
        return isPass ? CheckClass.PASS : CheckClass.FAIL;
    }
    getEligibilityText_() {
        return this.eligibilityState_.isEligible ? '✓ Eligible' : '✗ Not Eligible';
    }
    getPolicyEligibilityText_() {
        return this.eligibilityState_.isEligibleByPolicy ? '✓ Allowed' :
            '✗ Blocked';
    }
    getThirdPartyPolicyEligibilityText_() {
        return this.eligibilityState_.isThirdPartyEligibleByPolicy ? '✓ Allowed' :
            '✗ Blocked';
    }
    getDseEligibilityText_() {
        return this.eligibilityState_.isEligibleByDse ? '✓ Google' : '✗ Not Google';
    }
    getAimEligibilityText_() {
        return this.eligibilityState_.isAimEligibleByServer ? '✓ Eligible' :
            '✗ Not Eligible';
    }
    getFuseboxEligibilityText_() {
        return this.eligibilityState_.isFuseboxEligibleByServer ? '✓ Eligible' :
            '✗ Not Eligible';
    }
    getCobrowseEligibilityText_() {
        return this.eligibilityState_.isCobrowseEligibleByServer ? '✓ Eligible' :
            '✗ Not Eligible';
    }
    getDriveSupportedText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isDriveSupported ?
            '✓ Drive Supported' :
            '✗ Drive Not Supported';
    }
    getPecEligibleText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isPecEligible ? '✓ Yes' : '✗ No';
    }
    getIdentityMatchText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isIdentityMatch ? '✓ Match' :
            '✗ No Match';
    }
    getIncognitoText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isIncognito ? '✓ Yes' : '✗ No';
    }
    getFeatureFlagText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isFeatureFlagEnabled ?
            '✓ Enabled' :
            '✗ Disabled';
    }
    getDisclaimerFlagText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isDisclaimerFlagEnabled ?
            '✓ Enabled' :
            '✗ Disabled';
    }
    getForceDisclaimerText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isForceDriveDisclaimerAccepted ?
            '✓ Enabled' :
            '✗ Disabled';
    }
    getSearchSharingText_() {
        if (!this.eligibilityState_.driveStatus) {
            return '';
        }
        return this.eligibilityState_.driveStatus.isSearchContentSharingEnabled ?
            '✓ Enabled' :
            '✗ Disabled';
    }
    getDisclaimerAcceptedText_() {
        const status = this.eligibilityState_.driveStatus;
        if (!status) {
            return 'Loading...';
        }
        const forced = status.isForceDriveDisclaimerAccepted;
        switch (status.disclaimerState) {
            case DisclaimerState.kAccepted:
                return forced ? '✓ Accepted (Forced by flag)' : '✓ Accepted';
            case DisclaimerState.kNotAccepted:
                return '✗ Not Accepted';
            case DisclaimerState.kRestricted:
                return '✗ Restricted';
            default:
                return 'Unknown';
        }
    }
    getDisclaimerClass_() {
        const status = this.eligibilityState_.driveStatus;
        if (!status) {
            return '';
        }
        switch (status.disclaimerState) {
            case DisclaimerState.kAccepted:
                return CheckClass.PASS;
            case DisclaimerState.kNotAccepted:
            case DisclaimerState.kRestricted:
                return CheckClass.FAIL;
            default:
                return CheckClass.FAIL;
        }
    }
    getLastUpdatedTimestamp_() {
        return this.eligibilityState_.lastUpdated.getTime() > 0 ?
            this.eligibilityState_.lastUpdated.toLocaleString() :
            '';
    }
    onEligibilityStateChanged_(state) {
        const oldDriveStatus = this.eligibilityState_.driveStatus;
        this.eligibilityState_ = state;
        if (!this.eligibilityState_.driveStatus && oldDriveStatus) {
            this.eligibilityState_.driveStatus = oldDriveStatus;
        }
        this.inputState_ = InputState.NONE;
    }
    onDriveStatusChanged_(status) {
        this.eligibilityState_ = {
            ...this.eligibilityState_,
            driveStatus: status,
        };
    }
    getProtoshopUrl_(base64Proto) {
        const protoType = 'com.google.gws.plugins.aim.AimEligibilityResponse';
        if (!base64Proto) {
            return `http://protoshop/${protoType}`;
        }
        return `http://protoshop/embed?tabs=textproto&type=${protoType}&protobytes=${encodeURIComponent(base64Proto)}`;
    }
}
customElements.define(AimEligibilityAppElement.is, AimEligibilityAppElement);
