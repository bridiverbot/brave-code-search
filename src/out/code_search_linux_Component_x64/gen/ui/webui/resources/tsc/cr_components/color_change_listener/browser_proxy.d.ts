/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for one way communication between the JS and the
 * browser.
 * TODO(tluk): Convert this into typescript once all dependencies have been
 * fully migrated.
 */
import { PageCallbackRouter } from './color_change_listener.mojom-webui.js';
export declare class BrowserProxy {
    callbackRouter: PageCallbackRouter;
    constructor();
    static getInstance(): BrowserProxy;
    static setInstance(newInstance: BrowserProxy): void;
}
