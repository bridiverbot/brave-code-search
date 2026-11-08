import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { EventDict } from './event_dispatcher.js';
import type { OnBeforeSendHeadersParams, OriginCheckParams } from './request_throttlers.js';
export declare class ExitEvent extends Event {
    readonly reason: string;
    readonly processId: number;
    static factory(args: EventDict): ExitEvent;
    private constructor();
}
export declare class LoadEvent extends Event {
    readonly url: string;
    readonly isTopLevel: boolean;
    static loadCommitFactory(args: EventDict): LoadEvent;
    static loadStartFactory(args: EventDict): LoadEvent;
    protected constructor(type: string, args: EventDict);
}
export declare class LoadAbortEvent extends LoadEvent {
    readonly code: number;
    readonly reason: string;
    static factory(args: EventDict): LoadAbortEvent;
    private constructor();
}
export declare class NewWindowEvent extends Event {
    readonly targetUrl: string;
    readonly windowOpenDisposition: string;
    readonly initialWidth: number;
    readonly initialHeight: number;
    static factory(args: EventDict): NewWindowEvent;
    private constructor();
}
export declare class ZoomChangeEvent extends Event {
    readonly oldZoomFactor: number;
    readonly newZoomFactor: number;
    static factory(args: EventDict): ZoomChangeEvent;
    private constructor();
}
export interface PermissionRequest {
    url: string;
    allow(): void;
    deny(): void;
}
export declare class PermissionRequestEvent extends Event {
    readonly permission: string;
    readonly request: PermissionRequest;
    private readonly requestId;
    private readonly guestInstanceId;
    private actionTaken;
    static factory(args: EventDict, guestInstanceId: number): PermissionRequestEvent;
    private constructor();
    handle(element: HTMLElement): void;
    private allow;
    private deny;
    private defaultAction;
}
export declare class SlimWebviewElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        src: {
            type: StringConstructor;
            reflect: boolean;
        };
        autosize: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        minwidth: {
            type: NumberConstructor;
            reflect: boolean;
        };
        maxwidth: {
            type: NumberConstructor;
            reflect: boolean;
        };
        minheight: {
            type: NumberConstructor;
            reflect: boolean;
        };
        maxheight: {
            type: NumberConstructor;
            reflect: boolean;
        };
        partition: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    accessor src: string;
    accessor autosize: boolean;
    accessor minwidth: number;
    accessor maxwidth: number;
    accessor minheight: number;
    accessor maxheight: number;
    accessor partition: string;
    private contentWindow_;
    get contentWindow(): Window | null;
    private viewInstanceId;
    private containerId;
    private guestInstanceId;
    private eventDispatcher;
    private onBeforeSendHeadersParamsInternal;
    private allowedOriginsParamsInternal;
    private userAgentOverrideInternal;
    constructor();
    get onBeforeSendHeadersParams(): OnBeforeSendHeadersParams | null;
    set onBeforeSendHeadersParams(params: OnBeforeSendHeadersParams);
    get allowedOriginsParams(): OriginCheckParams | null;
    set allowedOriginsParams(params: OriginCheckParams);
    getUserAgent(): string;
    setUserAgentOverride(userAgentOverride: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    updated(changedProperties: PropertyValues<this>): void;
    private createGuest;
    private onGuestCreated;
    private maybeSetupEventDispatcher;
    private navigate;
    private updateAutoSize;
    private validatePartitionUpdate;
    setZoom(zoomFactor: number, callback?: () => void): void;
    getZoom(callback: (zoomFactor: number) => void): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'webview': SlimWebviewElement;
    }
}
