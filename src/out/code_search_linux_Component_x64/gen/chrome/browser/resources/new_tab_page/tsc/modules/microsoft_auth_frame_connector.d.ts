import type { MicrosoftAuthUntrustedDocumentRemote } from '../ntp_microsoft_auth_shared_ui.mojom-webui.js';
export declare class ParentTrustedDocumentProxy {
    static getInstance(): ParentTrustedDocumentProxy | null;
    static setInstance(childDocument: MicrosoftAuthUntrustedDocumentRemote): void;
    private childDocument_;
    private constructor();
    getChildDocument(): MicrosoftAuthUntrustedDocumentRemote;
}
