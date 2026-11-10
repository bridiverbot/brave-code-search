// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AudioBrowserProxyImpl } from './audio_browser_proxy.js';
import { TsReadModelImpl } from './ts_model_impl.js';
import { V8ModelImpl } from './v8_model_impl.js';
export function getReadAloudModel() {
    return instance ||
        (!AudioBrowserProxyImpl.getInstance().isPhraseHighlightingEnabled() ?
            instance = new TsReadModelImpl() :
            instance = new V8ModelImpl());
}
export function setInstance(obj) {
    instance = obj;
}
let instance = null;
