import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '/tab_group_shared/tab_group_dot.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SplitViewData } from './tab_data.js';
import type { Tab } from './tab_search.mojom-webui.js';
declare const TabSearchSplitItemBase: typeof CrLitElement;
export declare class TabSearchSplitItemElement extends TabSearchSplitItemBase {
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
        closeButtonIcon: {
            type: StringConstructor;
        };
    };
    accessor data: SplitViewData;
    protected accessor buttonRipples_: boolean;
    accessor closeButtonIcon: string;
    protected getFaviconUrl_(url: string, index: number): string;
    get domainTexts_(): string[];
    protected getDomainTextForUrl_(url: string): string;
    protected isCloseable_(): boolean;
    protected tooltipForButton_(): string;
    protected onCloseButtonClick_(e: Event): void;
    protected onCloseButtonFocus_(): void;
    protected onCloseButtonBlur_(): void;
    protected hasMediaAlertForTab_(tab: Tab): boolean;
    protected getMediaAlertImageClassForTab_(tab: Tab): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-search-split-item': TabSearchSplitItemElement;
    }
}
export {};
