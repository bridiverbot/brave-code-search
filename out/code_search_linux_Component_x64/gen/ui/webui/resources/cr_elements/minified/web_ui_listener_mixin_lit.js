// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{addWebUiListener,removeWebUiListener}from"//resources/js/cr.js";export const WebUiListenerMixinLit=superClass=>{class WebUiListenerMixinLit extends superClass{webUiListeners_=[];addWebUiListener(eventName,callback){this.webUiListeners_.push(addWebUiListener(eventName,callback))}disconnectedCallback(){super.disconnectedCallback();while(this.webUiListeners_.length>0){removeWebUiListener(this.webUiListeners_.pop())}}}return WebUiListenerMixinLit};