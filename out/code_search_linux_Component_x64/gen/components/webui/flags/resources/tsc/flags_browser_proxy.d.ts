/**
 * `enabled` is only set if the feature is single valued.
 * `enabled` is true if the feature is currently enabled.
 * `is_default` is true if the feature is in its default state.
 * `options` is only set if the entry has multiple values.
 */
export interface Feature {
    internal_name: string;
    name: string;
    description: string;
    enabled: boolean;
    is_default: boolean;
    supported_platforms: string[];
    origin_list_value?: string;
    string_value?: string;
    options?: Array<{
        internal_name: string;
        description: string;
        selected: boolean;
    }>;
    links?: string[];
}
export interface ExperimentalFeaturesData {
    supportedFeatures: Feature[];
    unsupportedFeatures: Feature[];
    needsRestart: boolean;
    showBetaChannelPromotion: boolean;
    showDevChannelPromotion: boolean;
    importExportEnabled?: boolean;
}
export interface FlagsExportData {
    enabled_flags: string[];
    customized_flags: Record<string, string>;
}
export interface FlagsBrowserProxy {
    restartBrowser(): void;
    requestDeprecatedFeatures(): Promise<ExperimentalFeaturesData>;
    exportFlags(): Promise<FlagsExportData>;
    importFlags(data: FlagsExportData): Promise<boolean>;
    resetAllFlags(): void;
    requestExperimentalFeatures(): Promise<ExperimentalFeaturesData>;
    enableExperimentalFeature(internalName: string, enable: boolean): void;
    selectExperimentalFeature(internalName: string, index: number): void;
    setOriginListFlag(internalName: string, value: string): void;
    setStringFlag(internalName: string, value: string): void;
}
export declare class FlagsBrowserProxyImpl implements FlagsBrowserProxy {
    restartBrowser(): void;
    requestDeprecatedFeatures(): Promise<ExperimentalFeaturesData>;
    exportFlags(): Promise<FlagsExportData>;
    importFlags(data: FlagsExportData): Promise<boolean>;
    resetAllFlags(): void;
    requestExperimentalFeatures(): Promise<ExperimentalFeaturesData>;
    enableExperimentalFeature(internalName: string, enable: boolean): void;
    selectExperimentalFeature(internalName: string, index: number): void;
    setOriginListFlag(internalName: string, value: string): void;
    setStringFlag(internalName: string, value: string): void;
    static getInstance(): FlagsBrowserProxy;
    static setInstance(obj: FlagsBrowserProxy): void;
}
