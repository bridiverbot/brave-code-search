// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ManageProfilesBrowserProxyImpl } from './manage_profiles_browser_proxy.js';
import { createDummyProfileState } from './profile_picker_util.js';
import { getCss } from './profile_switch.css.js';
import { getHtml } from './profile_switch.html.js';
export class ProfileSwitchElement extends CrLitElement {
    static get is() {
        return 'profile-switch';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            profileState_: { type: Object },
            isProfileStateInitialized_: { type: Boolean },
        };
    }
    #profileState__accessor_storage = createDummyProfileState();
    get profileState_() { return this.#profileState__accessor_storage; }
    set profileState_(value) { this.#profileState__accessor_storage = value; }
    #isProfileStateInitialized__accessor_storage = false;
    get isProfileStateInitialized_() { return this.#isProfileStateInitialized__accessor_storage; }
    set isProfileStateInitialized_(value) { this.#isProfileStateInitialized__accessor_storage = value; }
    manageProfilesBrowserProxy_ = ManageProfilesBrowserProxyImpl.getInstance();
    firstUpdated() {
        const params = new URLSearchParams(window.location.search);
        const profileSwitchPath = params.get('profileSwitchPath');
        assert(profileSwitchPath !== null, '`profileSwitchPath` param is not set');
        this.manageProfilesBrowserProxy_.getProfileState(profileSwitchPath)
            .then(profileState => {
            this.profileState_ = profileState;
            this.isProfileStateInitialized_ = true;
        });
    }
    onCancelClick_() {
        this.manageProfilesBrowserProxy_.cancelProfileSwitch();
    }
    onSwitchClick_() {
        this.manageProfilesBrowserProxy_.confirmProfileSwitch(this.profileState_.profilePath);
    }
}
customElements.define(ProfileSwitchElement.is, ProfileSwitchElement);
