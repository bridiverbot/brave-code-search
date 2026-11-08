import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_iconset.js';
import './icons.html.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import { //
GlicOverlayPageCallbackRouter, //
GlicOverlayPageHandlerRemote } from './glic_overlay.mojom-webui.js';
export interface GlicOverlayBrowserProxy {
    handler: GlicOverlayPageHandlerRemote;
    router: GlicOverlayPageCallbackRouter;
}
export declare class GlicOverlayBrowserProxyImpl implements GlicOverlayBrowserProxy {
    handler: GlicOverlayPageHandlerRemote;
    router: GlicOverlayPageCallbackRouter;
    constructor();
    static getInstance(): GlicOverlayBrowserProxy;
    static setInstance(newInstance: GlicOverlayBrowserProxy): void;
}
export declare class GlicOverlayElement extends HTMLElement {
    static get is(): string;
    private browserProxy;
    private listenerId;
    private listenersSetUp;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setOverlayState;
    private showError;
    private showLoading;
    private setupListeners;
}
declare global {
    interface HTMLElementTagNameMap {
        'glic-overlay': GlicOverlayElement;
    }
}
