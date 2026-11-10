import type { Time } from 'chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
/**
 * Calendar actions. This enum must match the numbering for
 * NTPCalendarAction in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
export declare enum CalendarAction {
    EXPANDED_EVENT_HEADER_CLICKED = 0,
    DOUBLE_BOOKED_EVENT_HEADER_CLICKED = 1,
    BASIC_EVENT_HEADER_CLICKED = 2,
    ATTACHMENT_CLICKED = 3,
    CONFERENCE_CALL_CLICKED = 4,
    SEE_MORE_CLICKED = 5,
    MAX_VALUE = 5
}
export declare function recordCalendarAction(action: CalendarAction, moduleName: string): void;
export declare function toJsTimestamp(time: Time): number;
