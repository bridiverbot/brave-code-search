// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function isFullWebView(webview) {
    // Bypass field check because WebView is added dynamically to the window
    // object.
    return webview.constructor === window.WebView;
}
