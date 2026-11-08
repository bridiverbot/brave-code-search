import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Policies } from '../native_layer.js';
import type { Range } from '../print_preview_utils.js';
import type { DpiOption, MediaSizeOption } from './cdd.js';
import type { Destination, RecentDestination } from './destination.js';
import { PrinterType } from './destination.js';
import type { DocumentSettings } from './document_info.js';
import type { Margins, MarginsSetting } from './margins.js';
import { MarginsType } from './margins.js';
import { Observable } from './observable.js';
import type { Indexable } from './observable.js';
import { ScalingType } from './scaling.js';
import { Size } from './size.js';
/**
 * |key| is the field in the serialized settings state that corresponds to the
 * setting, or an empty string if the setting should not be saved in the
 * serialized state.
 */
export interface Setting<T> {
    value: T;
    unavailableValue: T;
    valid: boolean;
    available: boolean;
    setByGlobalPolicy: boolean;
    setFromUi: boolean;
    key: keyof SerializedSettings | '';
    updatesPreview: boolean;
    policyDefaultValue?: T;
}
export interface Settings {
    pages: Setting<number[]>;
    copies: Setting<number>;
    collate: Setting<boolean>;
    layout: Setting<boolean>;
    color: Setting<boolean>;
    customMargins: Setting<any>;
    mediaSize: Setting<any>;
    margins: Setting<MarginsType>;
    dpi: Setting<any>;
    scaling: Setting<string>;
    scalingType: Setting<ScalingType>;
    scalingTypePdf: Setting<ScalingType>;
    duplex: Setting<boolean>;
    duplexShortEdge: Setting<boolean>;
    cssBackground: Setting<boolean>;
    selectionOnly: Setting<boolean>;
    headerFooter: Setting<boolean>;
    rasterize: Setting<boolean>;
    vendorItems: Setting<Record<string, string>>;
    otherOptions: Setting<null>;
    ranges: Setting<Range[]>;
    pagesPerSheet: Setting<number>;
    recentDestinations: Setting<RecentDestination[]>;
}
type IndexableSettings = Indexable<Settings>;
export interface SerializedSettings {
    version: number;
    recentDestinations?: RecentDestination[];
    dpi?: DpiOption;
    mediaSize?: MediaSizeOption;
    marginsType?: MarginsType;
    customMargins?: MarginsSetting;
    isColorEnabled?: boolean;
    isDuplexEnabled?: boolean;
    isDuplexShortEdge?: boolean;
    isHeaderFooterEnabled?: boolean;
    isLandscapeEnabled?: boolean;
    isCollateEnabled?: boolean;
    isCssBackgroundEnabled?: boolean;
    scaling?: string;
    scalingType?: ScalingType;
    scalingTypePdf?: ScalingType;
    vendorOptions?: object;
}
export interface PolicyEntry<T> {
    value: T;
    managed: boolean;
    applyOnDestinationUpdate: boolean;
}
export interface PolicyObjectEntry {
    defaultMode?: unknown;
    allowedMode?: unknown;
    value?: number;
}
export interface PolicySettings {
    headerFooter?: PolicyEntry<boolean>;
    cssBackground?: PolicyEntry<boolean>;
    mediaSize?: PolicyEntry<{
        width: number;
        height: number;
    }>;
    color?: PolicyEntry<boolean>;
    duplex?: PolicyEntry<boolean>;
    printPdfAsImageAvailability?: PolicyEntry<boolean>;
    printPdfAsImage?: PolicyEntry<boolean>;
}
interface CloudJobTicketPrint {
    page_orientation?: {
        type: string;
    };
    dpi?: {
        horizontal_dpi: number;
        vertical_dpi: number;
        vendor_id?: string;
    };
    vendor_ticket_item?: Array<{
        id: string;
        value: string;
    }>;
    copies?: {
        copies: number;
    };
    media_size?: {
        width_microns: number;
        height_microns: number;
        is_continuous_feed?: boolean;
        vendor_id?: string;
    };
    duplex?: {
        type: string;
    };
    color?: {
        vendor_id?: string;
        type?: string;
    };
    collate?: {
        collate: boolean;
    };
}
export interface CloudJobTicket {
    version: string;
    print: CloudJobTicketPrint;
}
export interface MediaSizeValue {
    width_microns: number;
    height_microns: number;
    imageable_area_left_microns?: number;
    imageable_area_bottom_microns?: number;
    imageable_area_right_microns?: number;
    imageable_area_top_microns?: number;
    is_continuous_feed?: boolean;
    vendor_id?: string;
}
export interface Ticket {
    collate: boolean;
    color: number;
    copies: number;
    deviceName: string;
    dpiHorizontal: number;
    dpiVertical: number;
    duplex: DuplexMode;
    headerFooterEnabled: boolean;
    landscape: boolean;
    marginsType: MarginsType;
    mediaSize: MediaSizeValue;
    pagesPerSheet: number;
    previewModifiable: boolean;
    printerType: PrinterType;
    rasterizePDF: boolean;
    scaleFactor: number;
    scalingType: ScalingType;
    shouldPrintBackgrounds: boolean;
    shouldPrintSelectionOnly: boolean;
    advancedSettings?: object;
    capabilities?: string;
    marginsCustom?: MarginsSetting;
    openPDFInPreview?: boolean;
    pinValue?: string;
    ticket?: string;
}
export type PrintTicket = Ticket & {
    dpiDefault: boolean;
    pageCount: number;
    pageHeight: number;
    pageWidth: number;
    showSystemDialog: boolean;
};
/**
 * Constant values matching printing::DuplexMode enum.
 */
export declare enum DuplexMode {
    SIMPLEX = 0,
    LONG_EDGE = 1,
    SHORT_EDGE = 2,
    UNKNOWN_DUPLEX_MODE = -1
}
export declare function getInstance(): PrintPreviewModelElement;
export declare function whenReady(): Promise<void>;
export declare class PrintPreviewModelElement extends CrLitElement {
    static get is(): string;
    static get properties(): {
        settingsManaged: {
            type: BooleanConstructor;
            notify: boolean;
        };
        destination: {
            type: ObjectConstructor;
        };
        documentSettings: {
            type: ObjectConstructor;
        };
        margins: {
            type: ObjectConstructor;
        };
        pageSize: {
            type: ObjectConstructor;
        };
    };
    accessor settingsManaged: boolean;
    accessor destination: Destination | null;
    accessor documentSettings: DocumentSettings;
    accessor margins: Margins | null;
    accessor pageSize: Size;
    observable: Observable<IndexableSettings>;
    private initialized_;
    private stickySettings_;
    private policySettings_;
    private lastDestinationCapabilities_;
    /**
     * Object containing current settings of Print Preview.
     * Initialize all settings to available so that more settings always stays
     * in a collapsed state during startup, when document information and
     * printer capabilities may arrive at slightly different times.
     */
    private settings_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    getSetting<K extends keyof Settings>(settingName: K): Settings[K];
    /**
     * @param settingName Name of the setting to get the value for.
     * @return The value of the setting, accounting for availability.
     */
    getSettingValue<K extends keyof Settings>(settingName: K): Settings[K]['value'];
    /**
     * Updates settings.settingPath to |value|. Fires a preview-setting-changed
     * event if the modification results in a change to the value returned by
     * getSettingValue().
     */
    private setSettingPath_;
    /**
     * Sets settings.settingName.value to |value|, unless updating the setting is
     * disallowed by enterprise policy. Fires preview-setting-changed and
     * sticky-setting-changed events if the update impacts the preview or requires
     * an update to sticky settings. Used for setting settings from UI elements.
     * @param settingName Name of the setting to set
     * @param value The value to set the setting to.
     * @param noSticky Whether to avoid stickying the setting. Defaults to false.
     */
    setSetting<K extends keyof Settings>(settingName: K, value: Settings[K]['value'], noSticky?: boolean): void;
    /**
     * Sets the validity of |settingName| to |valid|. If the validity is changed,
     * fires a setting-valid-changed event.
     * @param settingName Name of the setting to set
     * @param valid Whether the setting value is currently valid.
     */
    setSettingValid(settingName: keyof Settings, valid: boolean): void;
    /**
     * Sets the availability of |settingName| to |available|, exposed only for
     * testing purposes, where `destination` and `documentSettings` are not
     * always set and therefore availability is not automatically inferred.
     */
    setSettingAvailableForTesting(settingName: keyof Settings, available: boolean): void;
    /**
     * Sets the setByGlobalPolicy of |settingName| to |setByGlobalPolicy|, exposed
     * only for testing purposes, where `policySettings_` aren't always set.
     */
    setSettingSetByGlobalPolicyForTesting(settingName: keyof Settings, setByGlobalPolicy: boolean): void;
    /**
     * Updates the availability of the settings sections and values of various
     * settings based on the destination capabilities.
     */
    updateSettingsFromDestination(): void;
    private updateSettingsAvailabilityFromDestination_;
    private updateSettingsAvailabilityFromDestinationAndDocumentSettings_;
    private updateSettingsAvailabilityFromDocumentSettings_;
    private updateHeaderFooterAvailable_;
    /**
     * @return Whether the header/footer setting should be available.
     */
    private isHeaderFooterAvailable_;
    private updateRasterizeAvailable_;
    /**
     * @return Whether the rasterization setting should be available.
     */
    private isRasterizeAvailable_;
    private isLayoutAvailable_;
    private updateSettingsValues_;
    /**
     * Caches the sticky settings and sets up the recent destinations. Sticky
     * settings will be applied when destinaton capabilities have been retrieved.
     */
    setStickySettings(savedSettingsStr: string | null): void;
    /**
     * Helper function for configurePolicySetting_(). Sets value and managed flag
     * for given setting.
     * @param settingName Name of the setting being applied.
     * @param value Value of the setting provided via policy.
     * @param managed Flag showing whether value of setting is managed.
     * @param applyOnDestinationUpdate Flag showing whether policy
     *     should be applied on every destination update.
     */
    private setPolicySetting_;
    /**
     * Helper function for setPolicySettings(). Calculates value and managed flag
     * of the setting according to allowed and default modes.
     */
    private configurePolicySetting_;
    /**
     * Sets settings in accordance to policies from native code, and prevents
     * those settings from being changed via other means.
     */
    setPolicySettings(policies: Policies | undefined): void;
    applyStickySettings(): void;
    /**
     * Helper function for applyStickySettings(). Checks if the setting
     * is a scaling setting and applies by applying the old types
     * that rely on 'fitToPage' and 'customScaling'.
     * @param settingName Name of the setting being applied.
     */
    private applyScalingStickySettings_;
    private applyPolicySettings_;
    /**
     * If the setting has a default value specified in the CDD capabilities and
     * the attribute `reset_to_default` is true, this method will return the
     * default value for the setting; otherwise it will return null.
     */
    private getResetValue_;
    /**
     * For PrinterProvider printers, it's possible to specify for a setting to
     * always reset to the default value using the `reset_to_default` attribute.
     * If `reset_to_default` is true and a default value for the
     * setting is specified, this method will reset the setting
     * value to the default value.
     */
    private applyPersistentCddDefaults_;
    /**
     * Re-applies policies after the destination changes. Necessary for policies
     * that apply to settings where available options are based on the current
     * print destination.
     */
    applyPoliciesOnDestinationUpdate(): void;
    private updateManaged_;
    initialized(): boolean;
    private getStickySettings_;
    private getDuplexMode_;
    private getCddDuplexType_;
    /**
     * Creates a string that represents a print ticket.
     * @param destination Destination to print to.
     * @param openPdfInPreview Whether this print request is to open
     *     the PDF in Preview app (Mac only).
     * @param showSystemDialog Whether this print request is to show
     *     the system dialog.
     * @return Serialized print ticket.
     */
    createPrintTicket(destination: Destination, openPdfInPreview: boolean, showSystemDialog: boolean): string;
    /**
     * Creates an object that represents a Google Cloud Print print ticket.
     * @param destination Destination to print to.
     * @return Google Cloud Print print ticket.
     */
    createCloudJobTicket(destination: Destination): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-model': PrintPreviewModelElement;
    }
}
export {};
