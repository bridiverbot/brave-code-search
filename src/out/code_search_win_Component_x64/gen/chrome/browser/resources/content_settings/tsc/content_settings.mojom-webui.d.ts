import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ProviderType as contentSettings_mojom_ProviderType, SessionModel as contentSettings_mojom_SessionModel, TpcdMetadataCohort as contentSettings_mojom_TpcdMetadataCohort, TpcdMetadataRuleSource as contentSettings_mojom_TpcdMetadataRuleSource } from './content_settings_enums.mojom-webui.js';
import { ContentSettingsType as contentSettings_mojom_ContentSettingsType } from './content_settings_types.mojom-webui.js';
import { Time as mojoBase_mojom_Time, TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Value as mojoBase_mojom_Value } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
export declare const ContentSettingSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContentSetting {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    DEFAULT = 0,
    ALLOW = 1,
    BLOCK = 2,
    ASK = 3,
    SESSION_ONLY = 4
}
export declare const PatternPartsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContentSettingsPatternSpec: {
    $: mojo.internal.MojomType;
};
export declare const RuleMetaDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContentSettingPatternSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare const RendererContentSettingRulesSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PatternPartsMojoType {
    scheme: string;
    isSchemeWildcard: boolean;
    hasDomainWildcard: boolean;
    isPortWildcard: boolean;
    isPathWildcard: boolean;
    host: string;
    port: string;
    path: string;
}
export type PatternParts = PatternPartsMojoType;
export declare interface ContentSettingsPatternMojoType {
    parts: PatternParts;
    isValid: boolean;
}
export type ContentSettingsPattern = ContentSettingsPatternMojoType;
export declare interface RuleMetaDataMojoType {
    lastModified: mojoBase_mojom_Time;
    lastUsed: mojoBase_mojom_Time;
    lastVisited: mojoBase_mojom_Time;
    expiration: mojoBase_mojom_Time;
    sessionModel: contentSettings_mojom_SessionModel;
    tpcdMetadataRuleSource: contentSettings_mojom_TpcdMetadataRuleSource;
    lifetime: mojoBase_mojom_TimeDelta;
    tpcdMetadataCohort: contentSettings_mojom_TpcdMetadataCohort;
    decidedByRelatedWebsiteSets: boolean;
    autorevocationBypassedByUser: boolean;
}
export type RuleMetaData = RuleMetaDataMojoType;
export declare interface ContentSettingPatternSourceMojoType {
    primaryPattern: ContentSettingsPattern;
    secondaryPattern: ContentSettingsPattern;
    settingValue: mojoBase_mojom_Value;
    metadata: RuleMetaData;
    source: contentSettings_mojom_ProviderType;
    incognito: boolean;
}
export type ContentSettingPatternSource = ContentSettingPatternSourceMojoType;
export declare interface RendererContentSettingRulesMojoType {
    mixedContentRules: ContentSettingPatternSource[];
    autoplayRules: ContentSettingPatternSource[];
    fingerprintingRules: ContentSettingPatternSource[];
    braveShieldsRules: ContentSettingPatternSource[];
    cosmeticFilteringRules: ContentSettingPatternSource[];
    webcompatRules: {
        [key in contentSettings_mojom_ContentSettingsType]?: ContentSettingPatternSource[];
    };
}
export type RendererContentSettingRules = RendererContentSettingRulesMojoType;
