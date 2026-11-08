/**
 * Must be kept in sync with the C++ enums of the same names (see
 * components/policy/core/common/policy_types.h).
 */
export declare enum PolicyScope {
    SCOPE_USER_VAL = 0,
    SCOPE_DEVICE_VAL = 1
}
export declare enum PolicyLevel {
    LEVEL_RECOMMENDED_VAL = 0,
    LEVEL_MANDATORY_VAL = 1
}
export declare enum PolicySource {
    SOURCE_ENTERPRISE_DEFAULT_VAL = 0,
    SOURCE_COMMAND_LINE_VAL = 1,
    SOURCE_CLOUD_VAL = 2,
    SOURCE_ACTIVE_DIRECTORY_VAL = 3,
    SOURCE_PLATFORM_VAL = 5,
    SOURCE_MERGED_VAL = 7,
    SOURCE_CLOUD_FROM_ASH_VAL = 8,
    SOURCE_RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE_VAL = 9
}
export declare enum Presets {
    PRESET_CUSTOM = 0,
    PRESET_CBCM = 1,
    PRESET_LOCAL_MACHINE = 2,
    PRESET_CLOUD_ACCOUNT = 3
}
export type PolicyType = 'boolean' | 'integer' | 'number' | 'string' | 'list' | 'dictionary';
export interface PolicyNamespace {
    [policyName: string]: PolicyType;
}
export interface PolicySchema {
    chrome: PolicyNamespace;
    [extensionId: string]: PolicyNamespace;
}
export interface PolicyInfo {
    namespace: string;
    name: string;
    source: PolicySource;
    scope: PolicyScope;
    level: PolicyLevel;
    value: unknown;
}
export interface PresetAtrributes {
    source: PolicySource;
    scope: PolicyScope;
    level: PolicyLevel;
}
export declare const SourceNamesToValues: {
    [key: string]: PolicySource;
};
export declare const ScopeNamesToValues: {
    [key: string]: PolicyScope;
};
export declare const LevelNamesToValues: {
    [key: string]: PolicyLevel;
};
export declare namespace PolicyTestBrowserProxy {
    function applyTestPolicies(policies: string, profileSeparationResponse: string): Promise<unknown>;
    function listenPoliciesUpdates(): Promise<unknown>;
    function revertTestPolicies(): void;
    function restartWithTestPolicies(jsonString: string): void;
    function setUserAffiliation(affiliation: boolean): Promise<unknown>;
    function getAppliedTestPolicies(): Promise<PolicyInfo[]>;
}
