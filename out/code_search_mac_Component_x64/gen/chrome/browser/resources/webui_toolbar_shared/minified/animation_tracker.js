// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class AnimationTracker{static reducedMotion_=window.matchMedia("(prefers-reduced-motion: reduce)");static showAnimations=!AnimationTracker.reducedMotion_.matches;static{AnimationTracker.reducedMotion_.addEventListener("change",(()=>{AnimationTracker.showAnimations=!AnimationTracker.reducedMotion_.matches}))}static resetForTesting(){AnimationTracker.showAnimations=!AnimationTracker.reducedMotion_.matches}}