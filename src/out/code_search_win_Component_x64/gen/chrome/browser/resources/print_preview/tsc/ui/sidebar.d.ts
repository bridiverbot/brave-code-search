import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './advanced_options_settings.js';
import './button_strip.js';
import './color_settings.js';
import './copies_settings.js';
import './destination_settings.js';
import './dpi_settings.js';
import './duplex_settings.js';
import './header.js';
import './layout_settings.js';
import './media_size_settings.js';
import './margins_settings.js';
import './more_settings.js';
import './other_options_settings.js';
import './pages_per_sheet_settings.js';
import './pages_settings.js';
import './print_preview_vars.css.js';
import './scaling_settings.js';
import '/strings.m.js';
import './link_container.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Cdd } from '../data/cdd.js';
import type { Destination } from '../data/destination.js';
import type { Settings } from '../data/model.js';
import type { Error } from '../data/state.js';
import { State } from '../data/state.js';
import { DestinationState } from './destination_settings.js';
import type { PrintPreviewDestinationSettingsElement } from './destination_settings.js';
export interface PrintPreviewSidebarElement {
    $: {
        destinationSettings: PrintPreviewDestinationSettingsElement;
    };
}
declare const PrintPreviewSidebarElementBase: typeof CrLitElement & (new (...args: any[]) => import("../dark_mode_mixin.js").DarkModeMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrintPreviewSidebarElement extends PrintPreviewSidebarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        controlsManaged: {
            type: BooleanConstructor;
        };
        destination: {
            type: ObjectConstructor;
            notify: boolean;
        };
        destinationCapabilities_: {
            type: ObjectConstructor;
        };
        destinationState: {
            type: NumberConstructor;
            notify: boolean;
        };
        error: {
            type: NumberConstructor;
            notify: boolean;
        };
        isPdf: {
            type: BooleanConstructor;
        };
        pageCount: {
            type: NumberConstructor;
        };
        state: {
            type: NumberConstructor;
        };
        controlsDisabled_: {
            type: BooleanConstructor;
        };
        firstLoad_: {
            type: BooleanConstructor;
        };
        isInAppKioskMode_: {
            type: BooleanConstructor;
        };
        settingsExpandedByUser_: {
            type: BooleanConstructor;
        };
        shouldShowMoreSettings_: {
            type: BooleanConstructor;
        };
        settingsAvailable_: {
            type: ObjectConstructor;
        };
    };
    accessor controlsManaged: boolean;
    accessor destination: Destination | null;
    accessor destinationCapabilities_: Cdd | null;
    accessor destinationState: DestinationState;
    accessor error: Error | null;
    accessor isPdf: boolean;
    accessor pageCount: number;
    accessor state: State;
    protected accessor settingsAvailable_: Record<keyof Settings, boolean>;
    protected accessor controlsDisabled_: boolean;
    protected accessor firstLoad_: boolean;
    protected accessor isInAppKioskMode_: boolean;
    protected accessor settingsExpandedByUser_: boolean;
    protected accessor shouldShowMoreSettings_: boolean;
    constructor();
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @param defaultPrinter The system default printer ID.
     * @param serializedDestinationSelectionRulesStr String with rules
     *     for selecting the default destination.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     */
    init(appKioskMode: boolean, defaultPrinter: string, serializedDestinationSelectionRulesStr: string | null, pdfPrinterDisabled: boolean): void;
    private updateShouldShowMoreSettings_;
    /**
     * @return Whether the "more settings" collapse should be expanded.
     */
    protected shouldExpandSettings_(): boolean;
    protected onPrintButtonFocused_(): void;
    private onStateChanged_;
    /** @return Whether the system dialog link is available. */
    systemDialogLinkAvailable(): boolean;
    protected onDestinationChanged_(e: CustomEvent<{
        value: Destination;
    }>): void;
    protected onDestinationCapabilitiesChanged_(e: CustomEvent<Destination>): void;
    protected onDestinationStateChanged_(e: CustomEvent<{
        value: DestinationState;
    }>): void;
    protected onErrorChanged_(e: CustomEvent<{
        value: Error;
    }>): void;
    protected onSettingsExpandedByUserChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
export type SidebarElement = PrintPreviewSidebarElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-sidebar': PrintPreviewSidebarElement;
    }
}
export {};
