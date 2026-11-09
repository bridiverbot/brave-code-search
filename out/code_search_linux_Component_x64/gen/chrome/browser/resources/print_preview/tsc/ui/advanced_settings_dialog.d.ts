import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './advanced_settings_item.js';
import './print_preview_search_box.js';
import '/strings.m.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { VendorCapability } from '../data/cdd.js';
import type { Destination } from '../data/destination.js';
import type { PrintPreviewSearchBoxElement } from './print_preview_search_box.js';
export interface PrintPreviewAdvancedSettingsDialogElement {
    $: {
        dialog: CrDialogElement;
        searchBox: PrintPreviewSearchBoxElement;
    };
}
declare const PrintPreviewAdvancedSettingsDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class PrintPreviewAdvancedSettingsDialogElement extends PrintPreviewAdvancedSettingsDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destination: {
            type: ObjectConstructor;
        };
        searchQuery_: {
            type: ObjectConstructor;
        };
        hasMatching_: {
            type: BooleanConstructor;
            notify: boolean;
        };
    };
    accessor destination: Destination | null;
    protected accessor searchQuery_: RegExp | null;
    private accessor hasMatching_;
    private highlights_;
    private bubbles_;
    private metrics_;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onKeydown_;
    /**
     * @return Whether there is more than one vendor item to display.
     */
    protected hasMultipleItems_(): boolean;
    /**
     * @return Whether there is a setting matching the query.
     */
    private computeHasMatching_;
    /**
     * @return Whether the no matching settings hint should be shown.
     */
    protected shouldShowHint_(): boolean;
    protected onClose_(): void;
    protected onCancelButtonClick_(): void;
    protected onApplyButtonClick_(): void;
    close(): void;
    protected isSearching_(): string;
    protected getVendorCapabilities_(): VendorCapability[];
    protected onSearchQueryChanged_(e: CustomEvent<{
        value: RegExp | null;
    }>): void;
}
export type AdvancedSettingsDialogElement = PrintPreviewAdvancedSettingsDialogElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-advanced-settings-dialog': PrintPreviewAdvancedSettingsDialogElement;
    }
}
export {};
