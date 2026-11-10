/**
 * @fileoverview 'settings-clear-browsing-data-time-picker' is a control that
 * displays time period options for 'settings-clear-browsing-data-dialog'.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TimePeriod } from './clear_browsing_data_browser_proxy.js';
export interface TimePeriodOption {
    value: TimePeriod;
    label: string;
}
export declare function getTimePeriodString(timePeriod: TimePeriod, short?: boolean): string;
export interface SettingsClearBrowsingDataTimePickerElement {
    $: {
        moreButton: HTMLButtonElement;
        moreTimePeriodsMenu: CrLazyRenderLitElement<CrActionMenuElement>;
        timePicker: HTMLElement;
    };
}
declare const SettingsClearBrowsingDataTimePickerElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsClearBrowsingDataTimePickerElement extends SettingsClearBrowsingDataTimePickerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedTimePeriod_: {
            type: NumberConstructor;
        };
        timePeriodPref_: {
            type: ObjectConstructor;
        };
        expandedOptionList_: {
            type: ArrayConstructor;
        };
        moreOptionList_: {
            type: ArrayConstructor;
        };
        maxChipsShown_: {
            type: NumberConstructor;
        };
    };
    private accessor selectedTimePeriod_;
    /**
     * The list of all available Time Periods ordered by duration in ascending
     * order.
     */
    private allTimePeriodList_;
    /**
     * The list of Time Period options that are expanded by default, these
     * should include the currently selected time period.
     */
    protected accessor expandedOptionList_: TimePeriodOption[];
    /**
     * The list of Time Period options that are hidden in the 'More' dropdown
     * menu.
     */
    protected accessor moreOptionList_: TimePeriodOption[];
    /**
     * Maximum number of expanded chips to be shown, this should be less than
     * or equal to the `allTimePeriodList_.length` and greater than 0.
     */
    private accessor maxChipsShown_;
    private accessor timePeriodPref_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onTimePeriodPrefUpdated_;
    private onTimePeriodSelectionChanged_;
    private computeExpandedOptionList_;
    private computeMoreOptionList_;
    protected isTimePeriodSelected_(timePeriod: TimePeriod): boolean;
    protected onTimePeriodClick_(event: Event): void;
    protected onMenuTimePeriodClick_(event: Event): void;
    protected onMoreTimePeriodsButtonClick_(e: Event): void;
    protected onMoreOptionsMenuClose_(e: Event): void;
    getSelectedTimePeriod(): TimePeriod;
    sendPrefChange(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-clear-browsing-data-time-picker': SettingsClearBrowsingDataTimePickerElement;
    }
}
export {};
