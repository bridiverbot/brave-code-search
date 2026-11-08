import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '/strings.m.js';
import '/tab_group_shared/tab_group_dot.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TabData } from './tab_data.js';
export declare enum TabSearchItemSize {
    COMPACT = "compact",
    MEDIUM = "medium",
    LARGE = "large"
}
export interface TabSearchItemElement {
    $: {
        primaryText: HTMLElement;
        secondaryText: HTMLElement;
        secondaryTextInner: HTMLElement;
    };
}
declare const TabSearchItemBase: typeof CrLitElement;
export declare class TabSearchItemElement extends TabSearchItemBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
        buttonRipples_: {
            type: BooleanConstructor;
        };
        hideTimestamp: {
            type: BooleanConstructor;
        };
        hideUrl: {
            type: BooleanConstructor;
        };
        hideCloseButton: {
            type: BooleanConstructor;
        };
        closeButtonAriaLabel: {
            type: StringConstructor;
        };
        closeButtonTooltip: {
            type: StringConstructor;
        };
        closeButtonIcon: {
            type: StringConstructor;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    accessor data: TabData;
    protected accessor buttonRipples_: boolean;
    accessor hideTimestamp: boolean;
    accessor size: TabSearchItemSize;
    accessor hideUrl: boolean;
    accessor hideCloseButton: boolean;
    accessor closeButtonIcon: string;
    accessor closeButtonAriaLabel: string;
    accessor closeButtonTooltip: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @return Whether a close action can be performed on the item.
     */
    protected isCloseable_(): boolean;
    /**
     * @return the class name for the close button including a second class to
     *     preallocate space for the close button even while hidden if the tab
     *     will display a media alert.
     */
    protected getButtonContainerStyles_(): string;
    protected getCloseButtonRole_(): string;
    protected onCloseButtonClick_(e: Event): void;
    protected onCloseButtonFocus_(): void;
    protected onCloseButtonBlur_(): void;
    protected faviconUrl_(): string;
    private isOpenTabAndHasMediaAlert_;
    /**
     * Determines the display attribute value for the media indicator.
     */
    protected mediaAlertVisibility_(): string;
    /**
     * Returns the correct media alert indicator class name.
     */
    protected getMediaAlertImageClass_(): string;
    private dataChanged_;
    protected ariaLabelForButton_(): string;
    protected tooltipForButton_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-search-item': TabSearchItemElement;
    }
}
export {};
