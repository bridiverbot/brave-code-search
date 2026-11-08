import 'chrome://resources/cr_components/composebox/threads_rail.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum NtpLhsMessageType {
    NTP_LHS_READY = "NTP_LHS_READY",
    NTP_LHS_CLOSE = "NTP_LHS_CLOSE",
    NTP_LHS_NEW_THREAD = "NTP_LHS_NEW_THREAD",
    NTP_LHS_NAVIGATE = "NTP_LHS_NAVIGATE",
    NTP_LHS_SET_THEME = "NTP_LHS_SET_THEME"
}
export interface NtpLhsReadyMessage {
    type: NtpLhsMessageType.NTP_LHS_READY;
    width?: number;
}
export interface NtpLhsCloseMessage {
    type: NtpLhsMessageType.NTP_LHS_CLOSE;
}
export interface NtpLhsNewThreadMessage {
    type: NtpLhsMessageType.NTP_LHS_NEW_THREAD;
}
export interface NtpLhsNavigateMessage {
    type: NtpLhsMessageType.NTP_LHS_NAVIGATE;
    url: string;
}
export type SearchToChromeLhsMessage = NtpLhsReadyMessage | NtpLhsCloseMessage | NtpLhsNewThreadMessage | NtpLhsNavigateMessage;
export interface NtpLhsThemePalette {
    primaryFont?: string;
    railBackground?: string;
}
export declare class LeftHandSideElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableThreadsRailHybrid_: {
            type: BooleanConstructor;
        };
        expandedLhsUrl_: {
            type: StringConstructor;
        };
        expandedWidth_: {
            type: NumberConstructor;
        };
        isDark: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isExpanded_: {
            type: BooleanConstructor;
        };
        isExpandedReady_: {
            type: BooleanConstructor;
        };
    };
    accessor isDark: boolean | undefined;
    protected accessor enableThreadsRailHybrid_: boolean;
    protected accessor expandedLhsUrl_: string;
    protected accessor expandedWidth_: number;
    protected accessor isExpanded_: boolean;
    protected accessor isExpandedReady_: boolean;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onFoldedClick_(): void;
    protected onExpandRail_(): void;
    private onMessage_;
    private postThemeColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-left-hand-side': LeftHandSideElement;
    }
}
