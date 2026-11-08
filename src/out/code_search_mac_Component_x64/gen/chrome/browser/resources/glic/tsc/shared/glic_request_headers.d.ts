import type { WebViewType } from '../shared/web_view_type.js';
export declare class GlicRequestHeaderInjector {
    private chromeVersion;
    private chromeChannel;
    private glicSsr;
    private onboardingCompleted;
    private onboardingArm;
    private onDestroy;
    constructor(webview: WebViewType, chromeVersion: string, chromeChannel: string, glicSsr: boolean, onboardingCompleted: boolean, onboardingArm: string, requestTypes: string);
    destroy(): void;
    private onBeforeSendHeaders;
    private headers;
}
