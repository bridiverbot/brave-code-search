export declare enum DebugLogTag {
    WEB_SOCKET_MSG = "WebSocketMsg",
    PAGE_CONTENT = "PageContent",
    SYSTEM_INSTRUCTION = "SystemInstruction"
}
export declare function isDebugLogEnabled(debugTag?: DebugLogTag): boolean;
export declare function log(fileTag: string, msg: string, ...args: any[]): void;
/**
 * Like above but for noisier logs. Includes a tag which can be turned on in a
 * local build to output high volume debugging data.
 */
export declare function debugLog(fileTag: string, debugTag: DebugLogTag, msg: string, ...args: any[]): void;
export declare function warnLog(fileTag: string, msg: string, ...args: any[]): void;
export declare function errorLog(fileTag: string, msg: string, ...args: any[]): void;
