// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * @fileoverview Shared constants for the composebox, animated-glow-element,
 * searchbox.
 */
export var GlowAnimationState;
(function (GlowAnimationState) {
    GlowAnimationState["NONE"] = "";
    GlowAnimationState["VOICE_EXITED"] = "voice-exited";
    GlowAnimationState["DRAGGING"] = "dragging";
    GlowAnimationState["EXPANDING"] = "expanding";
    GlowAnimationState["SUBMITTING"] = "submitting";
    GlowAnimationState["LISTENING"] = "listening";
})(GlowAnimationState || (GlowAnimationState = {}));
export var GlowMode;
(function (GlowMode) {
    GlowMode["OUTER_GLOW"] = "outer-glow";
    GlowMode["INNER_GLOW"] = "inner-glow";
    GlowMode["NONE"] = "none";
})(GlowMode || (GlowMode = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/contextual_search/enums.xml:ContextAddedMethod)
// LINT.IfChange(VoiceSearchState)
export var VoiceSearchState;
(function (VoiceSearchState) {
    VoiceSearchState[VoiceSearchState["VOICE_SEARCH_BUTTON_CLICKED"] = 0] = "VOICE_SEARCH_BUTTON_CLICKED";
    VoiceSearchState[VoiceSearchState["SUCCESSFUL_TRANSCRIPT"] = 1] = "SUCCESSFUL_TRANSCRIPT";
    VoiceSearchState[VoiceSearchState["VOICE_SEARCH_ERROR"] = 2] = "VOICE_SEARCH_ERROR";
    VoiceSearchState[VoiceSearchState["VOICE_SEARCH_ERROR_AND_CANCELED"] = 3] = "VOICE_SEARCH_ERROR_AND_CANCELED";
    VoiceSearchState[VoiceSearchState["VOICE_SEARCH_CANCELED"] = 4] = "VOICE_SEARCH_CANCELED";
    VoiceSearchState[VoiceSearchState["MAX_VALUE"] = 4] = "MAX_VALUE";
})(VoiceSearchState || (VoiceSearchState = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/contextual_tasks/enums.xml:VoiceSearchState)
