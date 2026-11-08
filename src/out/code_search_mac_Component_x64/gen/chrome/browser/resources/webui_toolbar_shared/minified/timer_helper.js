// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TimerHelper{timerId_;setTimeout=(func,delay=0,...args)=>{this.clearTimeout();this.timerId_=setTimeout((()=>{this.timerId_=undefined;func(...args)}),delay)};clearTimeout=()=>{if(this.isRunning()){clearTimeout(this.timerId_);this.timerId_=undefined}};isRunning=()=>this.timerId_!==undefined}