export type WebViewType = chrome.webviewTag.WebView;
declare global {
    interface HTMLElementTagNameMap {
        'webview': chrome.webviewTag.WebView;
    }
}
declare global {
    interface Window {
        WebView: unknown;
    }
}
export declare function isFullWebView(webview: WebViewType): webview is chrome.webviewTag.WebView;
