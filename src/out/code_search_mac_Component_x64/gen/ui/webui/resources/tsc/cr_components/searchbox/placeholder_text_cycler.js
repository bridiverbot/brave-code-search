// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReachedCase } from '//resources/js/assert.js';
export var AnimationState;
(function (AnimationState) {
    AnimationState[AnimationState["FADE_IN"] = 0] = "FADE_IN";
    AnimationState[AnimationState["HOLD"] = 1] = "HOLD";
    AnimationState[AnimationState["FADE_OUT"] = 2] = "FADE_OUT";
})(AnimationState || (AnimationState = {}));
/**
 * Responsible for cycling placeholder text animations on an HTMLInputElement.
 */
export class PlaceholderTextCycler {
    input_;
    animation_ = null;
    placeholderTexts_ = [];
    placeholderTextsCurrentIndex_ = 0;
    changePlaceholderTextIntervalMs_ = 4000;
    fadePlaceholderTextDurationMs_ = 250;
    constructor(animatedPlaceholderContainer, placeholderTexts, changeTextAnimationIntervalMs, fadeTextAnimationDurationMs) {
        assert(placeholderTexts.length > 1);
        this.input_ = animatedPlaceholderContainer;
        this.placeholderTexts_ = placeholderTexts;
        this.changePlaceholderTextIntervalMs_ = changeTextAnimationIntervalMs;
        this.fadePlaceholderTextDurationMs_ = fadeTextAnimationDurationMs;
    }
    start() {
        this.stop();
        this.placeholderTextsCurrentIndex_ = 0;
        this.animate_(AnimationState.HOLD);
    }
    stop() {
        if (this.animation_) {
            this.animation_.cancel();
            this.animation_ = null;
        }
        this.placeholderTextsCurrentIndex_ = 0;
        this.input_.placeholder =
            this.placeholderTexts_[this.placeholderTextsCurrentIndex_];
    }
    animate_(state) {
        let animationDetails = null;
        switch (state) {
            case AnimationState.FADE_IN:
                this.input_.placeholder =
                    this.placeholderTexts_[this.placeholderTextsCurrentIndex_];
                animationDetails = {
                    startOpacity: 0,
                    endOpacity: 1,
                    duration: this.fadePlaceholderTextDurationMs_,
                    nextAnimationState: AnimationState.HOLD,
                };
                break;
            case AnimationState.HOLD:
                animationDetails = {
                    startOpacity: 1,
                    endOpacity: 1,
                    duration: this.changePlaceholderTextIntervalMs_,
                    nextAnimationState: AnimationState.FADE_OUT,
                };
                break;
            case AnimationState.FADE_OUT:
                this.placeholderTextsCurrentIndex_ =
                    (this.placeholderTextsCurrentIndex_ + 1) %
                        this.placeholderTexts_.length;
                animationDetails = {
                    startOpacity: 1,
                    endOpacity: 0,
                    duration: this.fadePlaceholderTextDurationMs_,
                    nextAnimationState: AnimationState.FADE_IN,
                };
                break;
            default:
                assertNotReachedCase(state);
        }
        this.animation_ = this.input_.animate([
            { '--placeholder-opacity': animationDetails.startOpacity },
            { '--placeholder-opacity': animationDetails.endOpacity },
        ], { duration: animationDetails.duration });
        this.animation_.onfinish = () => {
            if (this.animation_) {
                this.animate_(animationDetails.nextAnimationState);
            }
        };
    }
}
