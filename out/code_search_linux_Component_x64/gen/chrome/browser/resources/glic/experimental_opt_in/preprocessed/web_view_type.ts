// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This library allows you to obtain a chrome.webviewTag.WebView element when
// extensions are enabled, or a SlimWebviewElement when they are not.

// 

// 

// 
export type WebViewType = chrome.webviewTag.WebView;

declare global {
  interface HTMLElementTagNameMap {
    'webview': chrome.webviewTag.WebView;
  }
}
// 

declare global {
  interface Window {
    WebView: unknown;
  }
}

export function isFullWebView(webview: WebViewType):
    webview is chrome.webviewTag.WebView {
  // Bypass field check because WebView is added dynamically to the window
  // object.
  return webview.constructor === window.WebView;
}
