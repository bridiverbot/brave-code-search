import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './searched_label.js';
import '/strings.m.js';
import type { ForeignSessionTab } from 'chrome://resources/cr_components/history/foreign_sessions.mojom-webui.js';
import type { CrCollapseElement } from 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import { FocusRow } from 'chrome://resources/js/focus_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface HistorySyncedDeviceCardElement {
    $: {
        cardHeading: HTMLElement;
        collapseButton: HTMLElement;
        collapse: CrCollapseElement;
        menuButton: HTMLElement;
    };
}
export declare class HistorySyncedDeviceCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The list of tabs open for this device.
         */
        tabs: {
            type: ArrayConstructor;
        };
        device: {
            type: StringConstructor;
        };
        lastUpdateTime: {
            type: StringConstructor;
        };
        opened: {
            type: BooleanConstructor;
            notify: boolean;
        };
        searchTerm: {
            type: StringConstructor;
        };
        /**
         * The indexes where a window separator should be shown. The use of a
         * separate array here is necessary for window separators to appear
         * correctly in search. See http://crrev.com/2022003002 for more details.
         */
        separatorIndexes: {
            type: ArrayConstructor;
        };
        sessionTag: {
            type: StringConstructor;
        };
    };
    accessor device: string;
    accessor lastUpdateTime: string;
    accessor tabs: ForeignSessionTab[];
    accessor opened: boolean;
    accessor searchTerm: string;
    accessor separatorIndexes: number[];
    accessor sessionTag: string;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Create FocusRows for this card. One is always made for the card heading and
     * one for each result if the card is open.
     */
    createFocusRows(): FocusRow[];
    /** Open a single synced tab. */
    protected onLinkClick_(e: MouseEvent): void;
    protected onLinkAuxclick_(e: MouseEvent): void;
    protected onCardHeadingClick_(): void;
    /**
     * Toggles the dropdown display of synced tabs for each device card.
     */
    toggleTabCard(): Promise<void>;
    private notifyFocusUpdate_;
    /**
     * When the synced tab information is set, the icon associated with the tab
     * website is also set.
     */
    private updateIcons_;
    protected isWindowSeparatorIndex_(index: number): boolean;
    protected getCollapseIcon_(): string;
    protected getCollapseTitle_(): string;
    protected onMenuButtonClick_(e: Event): void;
    protected onLinkContextmenu_(): void;
    protected onOpenedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
export type SyncedDeviceCardElement = HistorySyncedDeviceCardElement;
declare global {
    interface HTMLElementTagNameMap {
        'history-synced-device-card': HistorySyncedDeviceCardElement;
    }
}
