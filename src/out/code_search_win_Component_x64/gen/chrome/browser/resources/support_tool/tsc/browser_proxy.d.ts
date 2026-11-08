export interface DataCollectorItem {
    name: string;
    isIncluded: boolean;
    protoEnum: number;
}
export interface IssueDetails {
    caseId: string;
    emailAddress: string;
    issueDescription: string;
}
export interface PiiDataItem {
    piiTypeDescription: string;
    piiType: number;
    detectedData: string[];
    count: number;
    keep: boolean;
    expandDetails: boolean;
}
export interface StartDataCollectionResult {
    success: boolean;
    errorMessage: string;
}
export interface SupportTokenGenerationResult {
    success: boolean;
    token: string;
    errorMessage: string;
}
export interface BrowserProxy {
    /**
     * Gets the list of email addresses that are logged in from C++ side.
     */
    getEmailAddresses(): Promise<string[]>;
    getDataCollectors(): Promise<DataCollectorItem[]>;
    getAllDataCollectors(): Promise<DataCollectorItem[]>;
    startDataCollection(issueDetails: IssueDetails, selectedDataCollectors: DataCollectorItem[]): Promise<StartDataCollectionResult>;
    cancelDataCollection(): void;
    startDataExport(piiItems: PiiDataItem[]): void;
    showExportedDataInFolder(): void;
    generateCustomizedUrl(caseId: string, dataCollectors: DataCollectorItem[]): Promise<SupportTokenGenerationResult>;
    generateSupportToken(dataCollectors: DataCollectorItem[]): Promise<SupportTokenGenerationResult>;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    getEmailAddresses(): Promise<string[]>;
    getDataCollectors(): Promise<DataCollectorItem[]>;
    getAllDataCollectors(): Promise<DataCollectorItem[]>;
    startDataCollection(issueDetails: IssueDetails, dataCollectors: DataCollectorItem[]): Promise<StartDataCollectionResult>;
    cancelDataCollection(): void;
    startDataExport(piiItems: PiiDataItem[]): void;
    showExportedDataInFolder(): void;
    generateCustomizedUrl(caseId: string, dataCollectors: DataCollectorItem[]): Promise<SupportTokenGenerationResult>;
    generateSupportToken(dataCollectors: DataCollectorItem[]): Promise<SupportTokenGenerationResult>;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
