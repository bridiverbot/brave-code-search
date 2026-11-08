import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const FeatureModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FeatureMode {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kUnspecified = 0,
    kImageGeneration = 1,
    kActuation = 2,
    kExperimentalTriggering = 3,
    kUniversalCart = 4,
    kPromotionPage = 5,
    kPasswordChange = 6,
    kWebContinuity = 7
}
export declare const PanelStateKindSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PanelStateKind {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kHidden = 0,
    kDetached = 1,
    kAttached = 2
}
export declare const PlatformSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Platform {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kMacOS = 1,
    kWindows = 2,
    kLinux = 3,
    kChromeOS = 4,
    kAndroid = 5
}
export declare const FormFactorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FormFactor {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kDesktop = 1,
    kPhone = 2,
    kTablet = 3
}
export declare const FreOverrideSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FreOverride {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnspecified = 0,
    kTrustFirstText = 1,
    kTrustFirstClick = 2,
    kTrustFirstInline = 3
}
export declare const InvocationSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InvocationSource {
    MIN_VALUE = 0,
    MAX_VALUE = 49,
    kOsButton = 0,
    kOsButtonMenu = 1,
    kOsHotkey = 2,
    kTopChromeButton = 3,
    kFre = 4,
    kProfilePicker = 5,
    kNudge = 6,
    kThreeDotsMenu = 7,
    kUnsupported = 8,
    kWhatsNew = 9,
    kAfterSignIn = 10,
    kSharedTab = 11,
    kActorTaskIcon = 12,
    kSharedImage = 13,
    kHandoffButton = 14,
    kSkills = 15,
    kAutoOpenedByContextualCue = 16,
    kPdfSummarizeButton = 17,
    kNavigationCapture = 18,
    kAutoOpenedForPdf = 19,
    kCaptureRegionHotkey = 20,
    kIph = 21,
    kAnchoredContextualCue = 22,
    kWebContentsContextMenu = 23,
    kTextSelectionNudge = 24,
    kTextSelectionWidget = 25,
    kZeroStateAutoSummarize = 26,
    kUniversalCart = 27,
    kExperimentalTriggering = 28,
    kPasswordChange = 29,
    kAutofill = 30,
    kToolbarButton = 31,
    kIndigoPageAction = 32,
    kWebDragDrop = 33,
    kPromotionPage = 34,
    kDaisyChainOnNewTab = 35,
    kDaisyChainOnFollowLink = 36,
    kConversationSwitch = 37,
    kDetachAttachButton = 38,
    kTabRestore = 39,
    kReshowInactive = 40,
    kTabContextMenu = 41,
    kWebContinuity = 42,
    kHistoryPageChatLinkout = 43,
    kContextHubTopics = 44,
    kContextHubAutoTodos = 45,
    kWebContentsContextMenuLink = 46,
    kWebContentsContextMenuPage = 47,
    kWebContentsContextMenuTextSelection = 48,
    kActorTool = 49
}
export declare const ActuationTargetSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActuationTarget {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnknown = 0,
    kAgentDecides = 1,
    kCurrentTab = 2,
    kNewTab = 3,
    kTargetSurface = 4
}
