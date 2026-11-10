import type { Time, TimeDelta } from 'chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
export interface PatternSourceData {
    primaryPattern: string;
    secondaryPattern: string;
    sourceElement: HTMLElement;
    valueElement: HTMLElement;
    incognitoElement: HTMLElement;
    lastModified: Time;
    lastUsed: Time;
    lastVisited: Time;
    expiration: Time;
    sessionModelElement: HTMLElement;
    lifetime: TimeDelta;
}
export declare function getHtml(data: PatternSourceData): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
