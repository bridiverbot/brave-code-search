/**
 * @fileoverview A helper object used from the "Manage certificates" section
 * to interact with the browser. For the V2 Certificate Manager only.
 */
import type { CertificateManagerPageHandlerInterface } from './certificate_manager.mojom-webui.js';
import { CertificateManagerPageCallbackRouter } from './certificate_manager.mojom-webui.js';
export declare class CertificatesBrowserProxy {
    callbackRouter: CertificateManagerPageCallbackRouter;
    handler: CertificateManagerPageHandlerInterface;
    constructor();
    static getInstance(): CertificatesBrowserProxy;
    static setInstance(obj: CertificatesBrowserProxy): void;
}
