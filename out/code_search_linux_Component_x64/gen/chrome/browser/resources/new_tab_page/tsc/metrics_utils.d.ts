/** Records `durationMs` in the `metricName` histogram. */
export declare function recordDuration(metricName: string, durationMs: number): void;
/**
 * Records the duration between navigation start and `msSinceEpoch` in the
 * `metricName` histogram.
 */
export declare function recordLoadDuration(metricName: string, msSinceEpoch: number): void;
/**
 * Records `value` (expected to be between 0 and 10) into the ten-bucket
 * `metricName` histogram.
 */
export declare function recordPerdecage(metricName: string, value: number): void;
/**
 * Records that an event has happened rather than a value in the `metricName`
 * histogram.
 */
export declare function recordOccurrence(metricName: string): void;
export declare function recordEnumeration(metricName: string, value: number, enumSize: number): void;
export declare function recordBoolean(metricName: string, value: boolean): void;
export declare function recordSparseValueWithPersistentHash(metricName: string, value: string): void;
export declare function recordSmallCount(metricName: string, value: number): void;
export declare function recordLogValue(metricName: string, min: number, max: number, buckets: number, value: number): void;
export declare function recordLinearValue(metricName: string, min: number, max: number, buckets: number, value: number): void;
/**
 * Action the user can perform while using voice search. This enum must match
 * the numbering for NewTabPageVoiceAction in enums.xml. These values are
 * persisted to logs. Entries should not be renumbered, removed or reused.
 */
export declare enum VoiceAction {
    ACTIVATE = 0,
    ACTIVATE_KEYBOARD = 1,
    CLOSE_OVERLAY = 2,
    QUERY_SUBMITTED = 3,
    SUPPORT_LINK_CLICKED = 4,
    TRY_AGAIN_LINK = 5,
    TRY_AGAIN_MIC_BUTTON = 6,// Deprecated.
    MAX_VALUE = 6
}
/**
 * Errors than can occur while using voice search. This enum must match the
 * numbering for NewTabPageVoiceError in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 */
export declare enum VoiceError {
    ABORTED = 0,
    AUDIO_CAPTURE = 1,
    BAD_GRAMMAR = 2,
    LANGUAGE_NOT_SUPPORTED = 3,
    NETWORK = 4,
    NO_MATCH = 5,
    NO_SPEECH = 6,
    NOT_ALLOWED = 7,
    OTHER = 8,
    SERVICE_NOT_ALLOWED = 9,
    MAX_VALUE = 9
}
export declare function recordVoiceAction(action: VoiceAction): void;
