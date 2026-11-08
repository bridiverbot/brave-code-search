export interface CertMetadataChangeResult {
    success: boolean;
    errorMessage?: string;
}
export interface ConstraintChangeResult {
    status: CertMetadataChangeResult;
    constraints?: string[];
}
export interface CertViewerBrowserProxy {
    updateTrustState(newTrust: number): Promise<CertMetadataChangeResult>;
    addConstraint(constraint: string): Promise<ConstraintChangeResult>;
    deleteConstraint(constraint: string): Promise<ConstraintChangeResult>;
}
export declare class CertViewerBrowserProxyImpl implements CertViewerBrowserProxy {
    updateTrustState(newTrust: number): Promise<CertMetadataChangeResult>;
    addConstraint(constraint: string): Promise<ConstraintChangeResult>;
    deleteConstraint(constraint: string): Promise<ConstraintChangeResult>;
    static getInstance(): CertViewerBrowserProxy;
    static setInstance(obj: CertViewerBrowserProxyImpl): void;
}
