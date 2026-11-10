// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"chrome://resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
<cr-lottie id="leftAnimation" class="animation"
    .animationUrl="${this.getAnimationUrl_("left")}"
    ?autoplay="${!this.disableAnimations_}">
</cr-lottie>
<cr-lottie id="rightAnimation" class="animation"
    .animationUrl="${this.getAnimationUrl_("right")}"
    ?autoplay="${!this.disableAnimations_}">
</cr-lottie>
<cr-lottie id="bottomAnimation" class="animation"
    .animationUrl="${this.getAnimationUrl_("bottom")}"
    ?autoplay="${!this.disableAnimations_}">
</cr-lottie>

<img id="product-logo" src="images/product-logo.svg" alt="">

<h1 class="title">$i18n{finishOrContinueTitle}</h1>
<div id="buttonContainer">

  <cr-button id="continueEducationButton"
      @click="${this.onContinueEducationClick_}">
    ${this.getContinueEducationButtonLabel_()}
  </cr-button>

  <cr-button id="startBrowsingButton" class="action-button"
      @click="${this.onStartBrowsingClick_}">
    $i18n{startBrowsingButtonLabel}
  </cr-button>

</div>
<!--_html_template_end_-->`}