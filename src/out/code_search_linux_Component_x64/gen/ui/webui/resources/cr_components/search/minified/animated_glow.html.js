// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";import{GlowAnimationState,GlowMode}from"./constants.js";export function getHtml(){return html`<!--_html_template_start_-->
    ${this.glowMode!==GlowMode.NONE?html`
      ${this.useEnergyEffect_()&&(this.animationState===GlowAnimationState.DRAGGING||this.animationState===GlowAnimationState.SUBMITTING||this.animationState===GlowAnimationState.EXPANDING)?html`
        <div class="gradient-blur-wrapper">
          <div class="gradient"></div>
        </div>
        <div class="gradient-sharp-wrapper">
          <div class="double-gradient"></div>
        </div>
        <div class="double-gradient-mask"></div>
      `:html`
        <div class="gradient gradient-outer-glow"></div>
        <div class="double-gradient"></div>
        <div class="double-gradient-mask"></div>
        <div class="gradient"></div>
      `}
    `:""}
    <div class="background" part="composebox-background"></div>
    <div id="dragDropPlaceholder">${this.dragDropPlaceholder}</div>

    <div id="fullContainerOverlay" part="full-container-overlay">
      ${this.requiresVoice&&this.coloredTicTacVoiceAnimationEnabled?html`
              ${this.isListening?html`<slot name="carousel"></slot>`:""}
              <recording-wave id='recordingWave'
                  class='audio-animation'
                  .darkThemeColorsEnabled="${this.darkThemeColorsEnabled}"
                  .isListening="${this.isListening}"
                  .transcript="${this.transcript}"
                  .receivedSpeech="${this.receivedSpeech}"
              ></recording-wave>
              ${this.isListening?html`<slot name="tool-chip"></slot>`:""}
          `:""}
    </div>

    ${this.requiresVoice&&!this.coloredTicTacVoiceAnimationEnabled?html`<audio-wave class='audio-animation'
              .isListening="${this.isListening}"
              .transcript="${this.transcript}"
              .receivedSpeech="${this.receivedSpeech}">
          </audio-wave>`:""}
  <!--_html_template_end_-->`}