import '/strings.m.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface CursorTooltipData {
    tooltipType: CursorTooltipType;
}
export declare enum CursorTooltipType {
    NONE = 0,
    REGION_SEARCH = 1,
    TEXT_HIGHLIGHT = 2,
    CLICK_SEARCH = 3,
    LIVE_PAGE = 4
}
export interface CursorTooltipElement {
    $: {
        cursorTooltip: HTMLElement;
    };
}
declare const CursorTooltipElementBase: typeof PolymerElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class CursorTooltipElement extends CursorTooltipElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        canShowTooltipFromPrefs: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        currentTooltip: {
            type: NumberConstructor;
            value: CursorTooltipType;
        };
        forceTooltipHidden: {
            type: BooleanConstructor;
            value: boolean;
        };
        isPointerInsideViewport: BooleanConstructor;
        tooltipMessage: StringConstructor;
    };
    private canShowTooltipFromPrefs;
    private currentTooltip;
    private forceTooltipHidden;
    private isPointerInsideViewport;
    private tooltipMessage;
    private queuedTooltipType?;
    private queuedTooltipMessage;
    private queuedOffsetLeftPx;
    private queuedOffsetTopPx;
    private shouldPauseTooltipChanges;
    markPointerEnteredContentArea(): void;
    markPointerLeftContentArea(): void;
    hideTooltip(): void;
    unhideTooltip(): void;
    setPauseTooltipChanges(shouldPauseTooltipChanges: boolean): void;
    setTooltip(type: CursorTooltipType): void;
    isTooltipVisible(): boolean;
    private setTooltipImmediately;
    private getHiddenCursorClass;
}
declare global {
    interface HTMLElementTagNameMap {
        'cursor-tooltip': CursorTooltipElement;
    }
}
export {};
