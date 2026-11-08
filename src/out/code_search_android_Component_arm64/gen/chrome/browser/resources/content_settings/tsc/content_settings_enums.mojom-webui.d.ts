import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const TpcdMetadataRuleSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TpcdMetadataRuleSource {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    SOURCE_UNSPECIFIED = 0,
    SOURCE_TEST = 1,
    SOURCE_1P_DT = 2,
    SOURCE_3P_DT = 3,
    SOURCE_DOGFOOD = 4,
    SOURCE_CRITICAL_SECTOR = 5,
    SOURCE_CUJ = 6,
    SOURCE_GOV_EDU_TLD = 7
}
export declare const TpcdMetadataCohortSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TpcdMetadataCohort {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    DEFAULT = 0,
    GRACE_PERIOD_FORCED_OFF = 1,
    GRACE_PERIOD_FORCED_ON = 2
}
export declare const SessionModelSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SessionModel {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    DURABLE = 0,
    USER_SESSION = 1,
    ONE_TIME = 3
}
export declare const ProviderTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ProviderType {
    MIN_VALUE = 0,
    MAX_VALUE = 15,
    kWebuiAllowlistProvider = 0,
    kComponentExtensionProvider = 1,
    kPolicyProvider = 2,
    kSupervisedProvider = 3,
    kCustomExtensionProvider = 4,
    kInstalledWebappProvider = 5,
    kNotificationAndroidProvider = 6,
    kOneTimePermissionProvider = 7,
    kPrefProvider = 8,
    kJavascriptOptimizerAndroidProvider = 9,
    kExtensionInstallTimePermissionProvider = 10,
    kRemoteListProvider = 11,
    kProviderForTests = 12,
    kOtherProviderForTests = 13,
    kDefaultProvider = 14,
    kNone = 15
}
