import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { EventDispositionFlag as browserControlsApi_mojom_EventDispositionFlag } from './browser_controls_api_data_model.mojom-webui.js';
import { ExtensionActionInfo as extensionsBar_mojom_ExtensionActionInfo } from './extensions_bar_data_model.mojom-webui.js';
import { IconHandle as toolbarUiApi_mojom_IconHandle } from './icon_handle.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import { TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { PointF as gfx_mojom_PointF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Range as gfx_mojom_Range } from '//resources/mojo/ui/gfx/range/mojom/range.mojom-webui.js';
import { TrackedElementIdentifier as trackedElement_mojom_TrackedElementIdentifier } from '//resources/mojo/ui/webui/resources/js/tracked_element/tracked_element.mojom-webui.js';
export declare const ContextMenuTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContextMenuType {
    MIN_VALUE = 0,
    MAX_VALUE = 43,
    kUnspecified = 0,
    kReload = 1,
    kSplitTabsAction = 2,
    kSplitTabsContext = 3,
    kBack = 4,
    kForward = 5,
    kHome = 6,
    kBatterySaver = 7,
    kMedia = 8,
    kPinnedActionNewIncognitoWindow = 9,
    kPinnedActionShowPasswordsBubbleOrPage = 10,
    kPinnedActionShowPaymentsBubbleOrPage = 11,
    kPinnedActionShowAddressesBubbleOrPage = 12,
    kPinnedActionSidePanelShowBookmarks = 13,
    kPinnedActionSidePanelShowReadingList = 14,
    kPinnedActionSidePanelShowHistoryCluster = 15,
    kPinnedActionShowDownloads = 16,
    kPinnedActionClearBrowsingData = 17,
    kPinnedActionPrint = 18,
    kPinnedActionSidePanelShowLensOverlayResults = 19,
    kPinnedActionShowTranslate = 20,
    kPinnedActionQrCodeGenerator = 21,
    kPinnedActionRouteMedia = 22,
    kPinnedActionSidePanelShowReadAnything = 23,
    kPinnedActionCopyUrl = 24,
    kPinnedActionSendTabToSelf = 25,
    kPinnedActionTaskManager = 26,
    kPinnedActionDevTools = 27,
    kPinnedActionTabSearch = 28,
    kPinnedActionSidePanelShowContextualTasks = 29,
    kPinnedActionSidePanelShowLens = 30,
    kPinnedActionSidePanelShowAboutThisSite = 31,
    kPinnedActionSidePanelShowCustomizeChrome = 32,
    kPinnedActionSidePanelShowShoppingInsights = 33,
    kPinnedActionSidePanelShowMerchantTrust = 34,
    kPinnedActionSendSharedTabGroupFeedback = 35,
    kPinnedActionSidePanelShowComments = 36,
    kPinnedActionShowAiOverlayDialog = 37,
    kPinnedActionTtcToolbar = 38,
    kPinnedActionSidePanelShowHistory = 39,
    kPinnedActionShowChromeLabs = 40,
    kPinnedActionSidePanelShowGlic = 41,
    kAppMenu = 42,
    kGlic = 43
}
export declare const SplitTabActiveLocationSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SplitTabActiveLocation {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kStart = 1,
    kEnd = 2,
    kTop = 3,
    kBottom = 4
}
export declare const ToolbarButtonTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ToolbarButtonType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kSplitTabs = 1,
    kHome = 2
}
export declare const AppMenuIconTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AppMenuIconType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNone = 0,
    kUpgradeNotification = 1,
    kGlobalError = 2
}
export declare const AppMenuSeveritySpec: {
    $: mojo.internal.MojomType;
};
export declare enum AppMenuSeverity {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNone = 0,
    kLow = 1,
    kMedium = 2,
    kHigh = 3
}
export declare const AvatarToolbarButtonStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AvatarToolbarButtonState {
    MIN_VALUE = 0,
    MAX_VALUE = 15,
    kGuestSession = 0,
    kIncognitoProfile = 1,
    kEnterpriseIsolatedProfile = 2,
    kExplicitTextShowing = 3,
    kOnSignin = 4,
    kShowIdentityName = 5,
    kSigninPending = 6,
    kSyncPaused = 7,
    kUpgradeClientError = 8,
    kPassphraseError = 9,
    kBookmarksLimitExceeded = 10,
    kSyncError = 11,
    kPasskeysLockedError = 12,
    kPromo = 13,
    kManagement = 14,
    kNormal = 15
}
export declare const ContentSettingImageTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContentSettingImageType {
    MIN_VALUE = 0,
    MAX_VALUE = 21,
    kCookies = 0,
    kImages = 1,
    kJavaScript = 2,
    kPopups = 5,
    kGeolocation = 6,
    kMixedScript = 7,
    kProtocolHandlers = 8,
    kMediaStream = 9,
    kAds = 10,
    kAutomaticDownloads = 11,
    kMidiSysex = 12,
    kSound = 13,
    kFramebust = 14,
    kSensors = 16,
    kClipboardReadWrite = 18,
    kStorageAccess = 19,
    kNotifications = 21
}
export declare const PageActionIdSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PageActionId {
    MIN_VALUE = 0,
    MAX_VALUE = 35,
    kActionAiMode = 0,
    kActionIndigo = 1,
    kActionMultistepFilter = 2,
    kActionSidePanelShowLensOverlayResults = 3,
    kActionLensOverlayHomework = 4,
    kActionShowTranslate = 5,
    kActionShowMemorySaverChip = 6,
    kActionShowJsOptimizationsIcon = 7,
    kActionRecordReplay = 8,
    kActionShowIntentPicker = 9,
    kActionShowZoomBubble = 10,
    kActionSidePanelShowReadAnything = 11,
    kActionOffersAndRewardsForPage = 12,
    kActionShowFileSystemAccess = 13,
    kActionInstallPwa = 14,
    kActionCommercePriceInsights = 15,
    kActionCommerceDiscounts = 16,
    kActionShowPasswordsBubbleOrPage = 17,
    kActionShowCollaborationRecentActivity = 18,
    kActionAutofillMandatoryReauth = 19,
    kActionFind = 20,
    kActionShowCookieControls = 21,
    kActionShowAddressesBubbleOrPage = 22,
    kActionVirtualCardEnroll = 23,
    kActionFilledCardInformation = 24,
    kActionShowPaymentsBubbleOrPage = 25,
    kActionSidePanelShowContextualTasks = 26,
    kActionBookmarkThisTab = 27,
    kActionFederation = 28,
    kActionGlicContextualCueing = 29,
    kActionAnchoredContextualCue = 30,
    kActionAutofillPayment = 31,
    kActionShowPaymentsChurnedUsersBubble = 32,
    kActionFakePageActionForDebug = 33,
    kActionWalletReminderNotice = 34,
    kActionGmailOtpOptIn = 35
}
export declare const PageActionTriggerSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PageActionTrigger {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kMouse = 0,
    kKeyboard = 1,
    kGesture = 2
}
export declare const PageActionAnimationStyleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PageActionAnimationStyle {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kStandard = 0,
    kSlideAndCrossfade = 1
}
export declare const OmniboxTextColorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OmniboxTextColor {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kOmniboxText = 1,
    kOmniboxTextDimmed = 2,
    kOmniboxForegroundDisabled = 3,
    kOmniboxSecurityChipDangerous = 4
}
export declare const PinnedToolbarActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PinnedToolbarAction {
    MIN_VALUE = 0,
    MAX_VALUE = 34,
    kUnspecified = 0,
    kNewIncognitoWindow = 1,
    kShowPasswordsBubbleOrPage = 2,
    kShowPaymentsBubbleOrPage = 3,
    kShowAddressesBubbleOrPage = 4,
    kSidePanelShowBookmarks = 5,
    kSidePanelShowReadingList = 6,
    kSidePanelShowHistoryCluster = 7,
    kShowDownloads = 8,
    kClearBrowsingData = 9,
    kPrint = 10,
    kSidePanelShowLensOverlayResults = 11,
    kShowTranslate = 12,
    kQrCodeGenerator = 13,
    kRouteMedia = 14,
    kSidePanelShowReadAnything = 15,
    kCopyUrl = 16,
    kSendTabToSelf = 17,
    kTaskManager = 18,
    kDevTools = 19,
    kTabSearch = 20,
    kSidePanelShowContextualTasks = 21,
    kSidePanelShowLens = 22,
    kSidePanelShowAboutThisSite = 23,
    kSidePanelShowCustomizeChrome = 24,
    kSidePanelShowShoppingInsights = 25,
    kSidePanelShowMerchantTrust = 26,
    kSendSharedTabGroupFeedback = 27,
    kSidePanelShowComments = 28,
    kShowAiOverlayDialog = 29,
    kTtcToolbar = 30,
    kSidePanelShowHistory = 31,
    kShowChromeLabs = 32,
    kSidePanelShowGlic = 33,
    kDivider = 34
}
export declare const DownloadProgressRingStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DownloadProgressRingStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDormant = 0,
    kScanning = 1,
    kDownloading = 2
}
export declare const LhsChipIdentifierSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LhsChipIdentifier {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnspecified = 0,
    kLocationIcon = 1,
    kPermissionIndicator = 2,
    kPermissionRequest = 3
}
export declare const PermissionChipThemeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PermissionChipTheme {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnspecified = 0,
    kNormalVisibility = 1,
    kLowVisibility = 2,
    kActivityIndicator = 3,
    kInUseActivityIndicator = 4,
    kBlockedActivityIndicator = 5,
    kOnSystemBlockedActivityIndicator = 6
}
export declare const PermissionPromptStyleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PermissionPromptStyle {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kBubbleOnly = 1,
    kChip = 2,
    kLocationBarRightIcon = 3,
    kQuietChip = 4
}
export declare const PermissionActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PermissionAction {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnspecified = 0,
    kGranted = 1,
    kDenied = 2,
    kDismissed = 3,
    kIgnored = 4,
    kRevoked = 5,
    kGrantedOnce = 6
}
export declare const SecurityLevelSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SecurityLevel {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kNone = 1,
    kSecure = 2,
    kDangerous = 3,
    kWarning = 4
}
export declare const SecurityChipRoleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SecurityChipRole {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kButton = 0,
    kImage = 1
}
export declare const FocusRequestTargetSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FocusRequestTarget {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kLocationBar = 1,
    kLocationBarUserInitiated = 2,
    kSearch = 3,
    kAppMenu = 4
}
export declare const BackForwardButtonStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionFocusChangeSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionTextInputSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionKeySpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionPointerSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionDropTextSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionDropFileSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReloadControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const SplitTabsControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const BackForwardControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const HomeControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PerformanceInterventionControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const MediaControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const BatterySaverControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const GlicButtonStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const AppMenuControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const AvatarControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const OverflowButtonControlStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContentSettingImageStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageActionStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxTextPortionSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxViewStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const LocationBarFlagsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectedKeywordStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const DownloadProgressRingStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PinnedToolbarActionStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const LocationBarStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PermissionChipStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PermissionDashboardStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const SecurityChipAccessibilityStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const SecurityChipStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const LhsChipsStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxActionSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BackForwardButtonStateMojoType {
    enabled: boolean;
    shouldBeShown: boolean;
    isContextMenuVisible: boolean;
}
export type BackForwardButtonState = BackForwardButtonStateMojoType;
export declare interface OmniboxActionFocusChangeMojoType {
    hasFocus: boolean;
    requestClearKeyword: boolean;
    activateDefaultSearch: boolean;
    startZeroSuggest: boolean;
    browserVersion: number;
    selection: gfx_mojom_Range;
}
export type OmniboxActionFocusChange = OmniboxActionFocusChangeMojoType;
export declare interface OmniboxActionTextInputMojoType {
    text: mojoBase_mojom_String16;
    inlineAutocompletion: mojoBase_mojom_String16;
    browserVersion: number;
    uiVersion: number;
    unelision: boolean;
    paste: boolean;
    selection: gfx_mojom_Range;
}
export type OmniboxActionTextInput = OmniboxActionTextInputMojoType;
export declare interface OmniboxActionKeyMojoType {
    isKeyDown: boolean;
    key: string;
    selection: gfx_mojom_Range;
    modifiers: browserControlsApi_mojom_EventDispositionFlag[];
}
export type OmniboxActionKey = OmniboxActionKeyMojoType;
export declare interface OmniboxActionPointerMojoType {
    isPointerDown: boolean;
    startZeroSuggest: boolean;
    selection: gfx_mojom_Range;
}
export type OmniboxActionPointer = OmniboxActionPointerMojoType;
export declare interface OmniboxActionDropTextMojoType {
    text: mojoBase_mojom_String16;
}
export type OmniboxActionDropText = OmniboxActionDropTextMojoType;
export declare interface OmniboxActionDropFileMojoType {
    dropPosition: gfx_mojom_PointF;
}
export type OmniboxActionDropFile = OmniboxActionDropFileMojoType;
export declare interface ReloadControlStateMojoType {
    doubleClickInterval: mojoBase_mojom_TimeDelta;
    canShowMenu: boolean;
    isNavigationLoading: boolean;
    isContextMenuVisible: boolean;
    stateToken: number;
}
export type ReloadControlState = ReloadControlStateMojoType;
export declare interface SplitTabsControlStateMojoType {
    isCurrentTabSplit: boolean;
    shouldBeShown: boolean;
    isContextMenuVisible: boolean;
    location: SplitTabActiveLocation;
    menuOpenToken: number;
}
export type SplitTabsControlState = SplitTabsControlStateMojoType;
export declare interface BackForwardControlStateMojoType {
    backButtonState: BackForwardButtonState;
    forwardButtonState: BackForwardButtonState;
    windowIsMaximizedOrFullscreen: boolean;
}
export type BackForwardControlState = BackForwardControlStateMojoType;
export declare interface HomeControlStateMojoType {
    shouldBeShown: boolean;
    isContextMenuVisible: boolean;
}
export type HomeControlState = HomeControlStateMojoType;
export declare interface PerformanceInterventionControlStateMojoType {
    shouldBeShown: boolean;
}
export type PerformanceInterventionControlState = PerformanceInterventionControlStateMojoType;
export declare interface MediaControlStateMojoType {
    enabled: boolean;
    shouldBeShown: boolean;
    isContextMenuVisible: boolean;
    preventOverflow: (boolean | null);
}
export type MediaControlState = MediaControlStateMojoType;
export declare interface BatterySaverControlStateMojoType {
    shouldBeShown: boolean;
    preventOverflow: (boolean | null);
}
export type BatterySaverControlState = BatterySaverControlStateMojoType;
export declare interface GlicButtonStateMojoType {
    open: boolean;
    shouldShow: boolean;
    isContextMenuVisible: boolean;
    shouldMatchToolbarStyle: boolean;
    useCustomThemeFallback: boolean;
    nudgeLabel: (string | null);
}
export type GlicButtonState = GlicButtonStateMojoType;
export declare interface AppMenuControlStateMojoType {
    iconType: AppMenuIconType;
    severity: AppMenuSeverity;
    labelText: (mojoBase_mojom_String16 | null);
    accessibilityText: mojoBase_mojom_String16;
    tooltip: mojoBase_mojom_String16;
    isContextMenuVisible: boolean;
    windowIsMaximizedOrFullscreen: boolean;
}
export type AppMenuControlState = AppMenuControlStateMojoType;
export declare interface AvatarControlStateMojoType {
    state: AvatarToolbarButtonState;
    enabled: boolean;
    hasLinearGradientRing: boolean;
    preventOverflow: boolean;
    icon: toolbarUiApi_mojom_IconHandle;
    text: mojoBase_mojom_String16;
    tooltip: mojoBase_mojom_String16;
    accessibilityName: mojoBase_mojom_String16;
    accessibilityDescription: mojoBase_mojom_String16;
}
export type AvatarControlState = AvatarControlStateMojoType;
export declare interface OverflowButtonControlStateMojoType {
    isContextMenuVisible: boolean;
}
export type OverflowButtonControlState = OverflowButtonControlStateMojoType;
export declare interface ContentSettingImageStateMojoType {
    type: ContentSettingImageType;
    isBlocked: boolean;
    shouldRunAnimation: boolean;
    accessibilityString: mojoBase_mojom_String16;
    tooltip: mojoBase_mojom_String16;
    explanatoryString: mojoBase_mojom_String16;
    identifier: trackedElement_mojom_TrackedElementIdentifier;
}
export type ContentSettingImageState = ContentSettingImageStateMojoType;
export declare interface PageActionStateMojoType {
    pageActionId: PageActionId;
    shouldShowChip: boolean;
    shouldAnimateChipIn: boolean;
    shouldAnimateChipOut: boolean;
    isActive: boolean;
    showTrailingIcon: boolean;
    accessibleName: mojoBase_mojom_String16;
    tooltipText: mojoBase_mojom_String16;
    icon: toolbarUiApi_mojom_IconHandle;
    text: mojoBase_mojom_String16;
    backgroundColorOverride: (skia_mojom_SkColor | null);
    foregroundColorOverride: (skia_mojom_SkColor | null);
    identifier: trackedElement_mojom_TrackedElementIdentifier;
    tabSwitchToken: number;
    animationStyle: PageActionAnimationStyle;
    trailingIcon: (toolbarUiApi_mojom_IconHandle | null);
}
export type PageActionState = PageActionStateMojoType;
export declare interface OmniboxTextPortionMojoType {
    text: mojoBase_mojom_String16;
    strikethrough: boolean;
    color: OmniboxTextColor;
}
export type OmniboxTextPortion = OmniboxTextPortionMojoType;
export declare interface OmniboxViewStateMojoType {
    uiVersion: number;
    browserVersion: number;
    formattedFullUrl: mojoBase_mojom_String16;
    textPieces: OmniboxTextPortion[];
    placeholder: (OmniboxTextPortion | null);
    inlineAutocompletion: mojoBase_mojom_String16;
    additionalText: mojoBase_mojom_String16;
    a11yFriendlySuggestionText: mojoBase_mojom_String16;
    selection: (gfx_mojom_Range | null);
    textIsUrl: boolean;
    userInputInProgress: boolean;
    hasTemporaryText: boolean;
}
export type OmniboxViewState = OmniboxViewStateMojoType;
export declare interface LocationBarFlagsMojoType {
    userInputInProgress: boolean;
    popupOpen: boolean;
    forceAimButtonFocusRing: boolean;
    isVirtualKeyboardVisible: boolean;
}
export type LocationBarFlags = LocationBarFlagsMojoType;
export declare interface SelectedKeywordStateMojoType {
    shortName: mojoBase_mojom_String16;
    fullName: mojoBase_mojom_String16;
    icon: toolbarUiApi_mojom_IconHandle;
}
export type SelectedKeywordState = SelectedKeywordStateMojoType;
export declare interface DownloadProgressRingStateMojoType {
    status: DownloadProgressRingStatus;
    progressPercentage: (number | null);
}
export type DownloadProgressRingState = DownloadProgressRingStateMojoType;
export declare interface PinnedToolbarActionStateMojoType {
    action: PinnedToolbarAction;
    highlighted: boolean;
    enabled: boolean;
    activated: boolean;
    badgeNumber: (number | null);
    tooltip: mojoBase_mojom_String16;
    accessibilityText: mojoBase_mojom_String16;
    elementId: (string | null);
    icon: toolbarUiApi_mojom_IconHandle;
    progressRing: (DownloadProgressRingState | null);
}
export type PinnedToolbarActionState = PinnedToolbarActionStateMojoType;
export declare interface LocationBarStateMojoType {
    omniboxViewState: OmniboxViewState;
    locationBarFlags: LocationBarFlags;
    contentSettingImageStates: ContentSettingImageState[];
    pageActionStates: PageActionState[];
    lhsChipsState: LhsChipsState;
    selectedKeyword: (SelectedKeywordState | null);
}
export type LocationBarState = LocationBarStateMojoType;
export declare interface PermissionChipStateMojoType {
    isVisible: boolean;
    shouldShowBlockedIcon: boolean;
    isFullyCollapsed: boolean;
    theme: PermissionChipTheme;
    iconName: string;
    message: mojoBase_mojom_String16;
    tooltip: mojoBase_mojom_String16;
    userDecision: PermissionAction;
    promptStyle: PermissionPromptStyle;
    accessibilityName: mojoBase_mojom_String16;
    stateToken: number;
}
export type PermissionChipState = PermissionChipStateMojoType;
export declare interface PermissionDashboardStateMojoType {
    indicatorChip: PermissionChipState;
    requestChip: PermissionChipState;
    isDividerVisible: boolean;
}
export type PermissionDashboardState = PermissionDashboardStateMojoType;
export declare interface SecurityChipAccessibilityStateMojoType {
    role: SecurityChipRole;
    label: mojoBase_mojom_String16;
    description: mojoBase_mojom_String16;
}
export type SecurityChipAccessibilityState = SecurityChipAccessibilityStateMojoType;
export declare interface SecurityChipStateMojoType {
    icon: toolbarUiApi_mojom_IconHandle;
    securityLevel: SecurityLevel;
    isClickable: boolean;
    isTextDangerous: boolean;
    isVisible: boolean;
    isContextMenuVisible: boolean;
    text: mojoBase_mojom_String16;
    tooltip: mojoBase_mojom_String16;
    accessibilityState: SecurityChipAccessibilityState;
}
export type SecurityChipState = SecurityChipStateMojoType;
export declare interface LhsChipsStateMojoType {
    securityChip: SecurityChipState;
    activityIndicators: ContentSettingImageState[];
    permissionDashboard: PermissionDashboardState;
}
export type LhsChipsState = LhsChipsStateMojoType;
export declare interface ToolbarStateMojoType {
    reloadControlState: ReloadControlState;
    splitTabsControlState: SplitTabsControlState;
    backForwardControlState: BackForwardControlState;
    homeControlState: HomeControlState;
    performanceInterventionControlState: PerformanceInterventionControlState;
    appMenuControlState: AppMenuControlState;
    avatarControlState: AvatarControlState;
    overflowButtonControlState: OverflowButtonControlState;
    mediaControlState: MediaControlState;
    batterySaverControlState: BatterySaverControlState;
    locationBarState: LocationBarState;
    extensionsState: extensionsBar_mojom_ExtensionActionInfo[];
    pinnedToolbarActionsState: PinnedToolbarActionState[];
    layoutConstantsVersion: number;
    touchUi: boolean;
    controlsAppearInactive: boolean;
    glicButtonState: GlicButtonState;
}
export type ToolbarState = ToolbarStateMojoType;
export declare interface OmniboxAction {
    focusChange?: OmniboxActionFocusChange;
    textInput?: OmniboxActionTextInput;
    key?: OmniboxActionKey;
    pointer?: OmniboxActionPointer;
    dropText?: OmniboxActionDropText;
    dropFile?: OmniboxActionDropFile;
    dragStart?: mojoBase_mojom_Empty;
}
export declare enum OmniboxActionFieldTags {
    FOCUS_CHANGE = 0,
    TEXT_INPUT = 1,
    KEY = 2,
    POINTER = 3,
    DROP_TEXT = 4,
    DROP_FILE = 5,
    DRAG_START = 6
}
export declare function whichOmniboxAction(u: OmniboxAction): OmniboxActionFieldTags;
