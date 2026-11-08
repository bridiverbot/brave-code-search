interface LogEntry {
    submodule: string;
    event: string;
    date: Date;
    details: object;
    textDetails: string;
}
/**
 * Creates a new log object which then immediately starts recording sync
 * protocol events.  Recorded entries are available in the 'entries'
 * property and there is an 'append' event which can be listened to.
 */
declare class Log extends EventTarget {
    /** Must match the value in SyncInternalsMessageHandler::OnProtocolEvent(). */
    private protocolEventName_;
    /** The recorded log entries. */
    entries: LogEntry[];
    constructor();
    /**
     * Records a single event with the given parameters and fires the
     * 'append' event with the newly-created event as the 'detail'
     * field of a custom event.
     * @param details A dictionary of event-specific details.
     */
    private log_;
}
export declare const log: Log;
export {};
