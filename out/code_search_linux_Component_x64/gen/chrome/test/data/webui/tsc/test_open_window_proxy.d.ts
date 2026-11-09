import type { OpenWindowProxy } from 'chrome://resources/js/open_window_proxy.js';
import { TestBrowserProxy } from './test_browser_proxy.js';
export declare class TestOpenWindowProxy extends TestBrowserProxy implements OpenWindowProxy {
    constructor();
    openUrl(url: string): void;
}
