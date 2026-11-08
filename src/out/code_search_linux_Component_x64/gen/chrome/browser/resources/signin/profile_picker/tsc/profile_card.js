// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './profile_card_menu.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ManageProfilesBrowserProxyImpl } from './manage_profiles_browser_proxy.js';
import { getCss } from './profile_card.css.js';
import { getHtml } from './profile_card.html.js';
import { createDummyProfileState } from './profile_picker_util.js';
const ProfileCardElementBase = I18nMixinLit(CrLitElement);
export class ProfileCardElement extends ProfileCardElementBase {
    static get is() {
        return 'profile-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            profileState: { type: Object },
            pattern_: { type: String },
            disabled: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #profileState_accessor_storage = createDummyProfileState();
    get profileState() { return this.#profileState_accessor_storage; }
    set profileState(value) { this.#profileState_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #pattern__accessor_storage = '.*\\S.*';
    get pattern_() { return this.#pattern__accessor_storage; }
    set pattern_(value) { this.#pattern__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    manageProfilesBrowserProxy_ = ManageProfilesBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addNameInputTooltipListeners_();
        this.addGaiaNameTooltipListeners_();
        this.addEventListener('drag-tile-start', this.disableActiveRipple_);
    }
    addNameInputTooltipListeners_() {
        const showTooltip = () => {
            const target = this.$.tooltip.target;
            assert(target);
            const inputElement = target.inputElement;
            // Disable tooltip if the local name editing is in progress.
            if ((this.isNameTruncated_(inputElement) &&
                !this.$.nameInput.hasAttribute('focused_')) ||
                this.profileState.hasEnterpriseLabel) {
                this.$.tooltip.show();
                return;
            }
            this.$.tooltip.hide();
        };
        const hideTooltip = () => this.$.tooltip.hide();
        const target = this.$.tooltip.target;
        assert(target);
        target.addEventListener('mouseenter', showTooltip);
        target.addEventListener('focus', hideTooltip);
        target.addEventListener('mouseleave', hideTooltip);
        target.addEventListener('click', hideTooltip);
        this.$.tooltip.addEventListener('mouseenter', hideTooltip);
    }
    addGaiaNameTooltipListeners_() {
        const showTooltip = () => {
            if (this.isNameTruncated_(this.$.gaiaName)) {
                this.$.gaiaNameTooltip.show();
                return;
            }
            this.$.gaiaNameTooltip.hide();
        };
        const hideTooltip = () => this.$.gaiaNameTooltip.hide();
        const target = this.$.gaiaNameTooltip.target;
        assert(target);
        target.addEventListener('mouseenter', showTooltip);
        target.addEventListener('focus', showTooltip);
        target.addEventListener('mouseleave', hideTooltip);
        target.addEventListener('blur', hideTooltip);
        target.addEventListener('tap', hideTooltip);
        this.$.gaiaNameTooltip.addEventListener('mouseenter', hideTooltip);
    }
    getNameInputTooltipText() {
        if (this.profileState.hasEnterpriseLabel) {
            return loadTimeData.getString('controlledSettingPolicy');
        }
        return this.profileState.localProfileName;
    }
    isNameTruncated_(element) {
        return !!element && element.scrollWidth > element.offsetWidth;
    }
    onProfileClick_() {
        this.fire('disable-all-picker-buttons');
        this.manageProfilesBrowserProxy_.launchSelectedProfile(this.profileState.profilePath);
    }
    onNameInputPointerenter_() {
        this.fire('toggle-drag', { toggle: false });
    }
    onNameInputPointerleave_() {
        this.fire('toggle-drag', { toggle: true });
    }
    /**
     * Handler for when the profile name field is changed, then blurred.
     */
    onProfileNameChange_(event) {
        const target = event.target;
        if (target.invalid) {
            return;
        }
        this.manageProfilesBrowserProxy_.setProfileName(this.profileState.profilePath, target.value);
        target.blur();
    }
    /**
     * Handler for profile name keydowns.
     */
    onProfileNameKeydown_(event) {
        if (event.key === 'Escape' || event.key === 'Enter') {
            event.target.blur();
        }
    }
    /**
     * Handler for profile name blur.
     */
    onProfileNameInputBlur_() {
        if (this.$.nameInput.invalid) {
            this.$.nameInput.value = this.profileState.localProfileName;
        }
    }
    /**
     * Disables the ripple effect if any. This is needed when the tile is being
     * dragged in order not to break the visual effect of the dragging tile and
     * mouse positioning relative to the card.
     */
    disableActiveRipple_() {
        if (this.$.profileCardButton.hasRipple()) {
            const buttonRipple = this.$.profileCardButton.getRipple();
            // This sequence is equivalent to calling `buttonRipple.clear()` but also
            // avoids the animation effect which is needed in this case.
            buttonRipple.showAndHoldDown();
            buttonRipple.holdDown = false;
        }
    }
}
customElements.define(ProfileCardElement.is, ProfileCardElement);
