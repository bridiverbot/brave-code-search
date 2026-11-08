// Copyright (c) 2026 The Brave Authors. All rights reserved.
import"//resources/brave/custom_profile_image_row.js";import{loadTimeData}from"//resources/js/load_time_data.js";import{css}from"//resources/lit/v3_0/lit.rollup.js";import{ProfileCustomizationAppElement as ProfileCustomizationAppElementChromium}from"./profile_customization_app-chromium.js";class ProfileCustomizationAppElement extends ProfileCustomizationAppElementChromium{static get is(){return"profile-customization-app"}static get styles(){return[super.styles,css`
      br-custom-profile-image-row {
        /* Match the preset selector's avatar size and spacing. */
        --icon-size: 72px;
        --icon-grid-gap: 18px;

        box-sizing: border-box;
        padding: var(--leo-spacing-l);
      }
    `]}isCustomProfileImageEnabled_(){return loadTimeData.getBoolean("customProfileImageEnabled")}firstUpdated(){super.firstUpdated();this.$.nameInput.inputElement.addEventListener("keydown",(e=>this.onNameInputKeydown_(e)))}onNameInputKeydown_(e){if(e.key!=="Enter"||this.$.doneButton.disabled){return}e.preventDefault();this.$.doneButton.click()}}export{ProfileCustomizationAppElement};export*from"./profile_customization_app-chromium.js";customElements.define(ProfileCustomizationAppElement.is,ProfileCustomizationAppElement);