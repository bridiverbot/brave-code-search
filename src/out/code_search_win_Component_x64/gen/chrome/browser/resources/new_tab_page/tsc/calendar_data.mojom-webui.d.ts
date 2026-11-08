import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const AttachmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const CalendarEventSpec: {
    $: mojo.internal.MojomType;
};
export declare interface AttachmentMojoType {
    title: string;
    resourceUrl: (url_mojom_Url | null);
    iconUrl: url_mojom_Url;
}
export type Attachment = AttachmentMojoType;
export declare interface CalendarEventMojoType {
    title: string;
    startTime: mojoBase_mojom_Time;
    endTime: mojoBase_mojom_Time;
    url: url_mojom_Url;
    location: (string | null);
    attachments: Attachment[];
    conferenceUrl: (url_mojom_Url | null);
    isAccepted: boolean;
    hasOtherAttendee: boolean;
}
export type CalendarEvent = CalendarEventMojoType;
