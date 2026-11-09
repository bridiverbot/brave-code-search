export interface GlicGuestLoadTimeData {
    loggingEnabled?: boolean;
    maxInFlightRequests?: number;
    sendResponsesForAllRequests?: boolean;
    chromeVersion?: string;
    chromeChannel?: string;
    glicHeaderRequestTypes?: string;
    enableStructuredYieldMetadata?: boolean;
}
export declare function getGuestLoadTimeData(): GlicGuestLoadTimeData;
