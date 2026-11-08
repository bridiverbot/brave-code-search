import type { SlimWebviewElement } from '/shared/guest_view/slim_webview.js';
export type WebViewType = chrome.webviewTag.WebView | SlimWebviewElement;
declare global {
    interface Window {
        WebView: unknown;
    }
}
export declare function isFullWebView(webview: WebViewType): webview is chrome.webviewTag.WebView;
