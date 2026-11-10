// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
<cr-lottie id="leftAnimation" class="animation"
    animation-url="${this.getAnimationUrl_("left")}"
    ?autoplay="${!this.shouldDisableAnimations_}">
</cr-lottie>
<cr-lottie id="rightAnimation" class="animation"
    animation-url="${this.getAnimationUrl_("right")}"
    ?autoplay="${!this.shouldDisableAnimations_}">
</cr-lottie>
<cr-lottie id="bottomAnimation" class="animation"
    animation-url="${this.getAnimationUrl_("bottom")}"
    ?autoplay="${!this.shouldDisableAnimations_}">
</cr-lottie>

<div id="product-logo-container">
  <img id="product-logo-animation" src="images/product-logo-animation.svg"
      alt="$i18n{productLogoAltText}">
</div>

<h1 class="title fade-in">$i18n{pageTitle}</h1>

<div id="textContainer">
  <div id="benefitCardsContainer">
    ${this.benefitCards_.map((item=>html`
      <div class="benefit-card fade-in">
        <div id="${item.iconId}" class="cr-icon"></div>
        <h2>${item.title}</h2>
        <p class="benefit-card-description">${item.description}</p>
      </div>
    `))}
  </div>

  <div id="managedDeviceDisclaimer" ?hidden="${!this.isDeviceManaged_}"
      class="${this.getDisclaimerVisibilityClass_()}">
    <div id="iconContainer">
      <cr-icon icon="cr:domain" aria-hidden="true"></cr-icon>
    </div>
    <p id="disclaimerText">${this.managedDeviceDisclaimer_}</p>
  </div>
</div>

<div id="buttonContainer" class="fade-in">

  <cr-button id="declineSignInButton" class="tangible-button tonal-button"
      ?disabled="${this.shouldDisableButtons_()}"
      @click="${this.onDeclineSignInButtonClick_}">
    $i18n{declineSignInButtonTitle}
  </cr-button>

  <cr-button id="acceptSignInButton" class="tangible-button action-button"
      ?disabled="${this.shouldDisableButtons_()}"
      @click="${this.onAcceptSignInButtonClick_}">
    $i18n{acceptSignInButtonTitle}
  </cr-button>

</div>
<!--_html_template_end_-->`}