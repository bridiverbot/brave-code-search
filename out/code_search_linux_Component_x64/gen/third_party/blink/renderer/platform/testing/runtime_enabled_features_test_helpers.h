// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_enabled_features_test_helpers.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_TEST_HELPERS_H_
#define THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_TEST_HELPERS_H_

#include <cstddef>

#include "base/check_op.h"
#include "third_party/blink/renderer/platform/runtime_enabled_features.h"

namespace blink {

// Don't use this class directly. Use Scoped*ForTest instead.
class RuntimeEnabledFeaturesTestHelpers {
 public:
  // Takes the flag's index rather than a `bool&` template parameter bound to
  // `RuntimeEnabledFeaturesBase::feature_states_[index]`, which trips a clang
  // frontend crash when the destructor is instantiated.
  // TODO(https://github.com/llvm/llvm-project/pull/215900): Take the flag by
  // reference once the clang fix has rolled.
  template <size_t index>
  class [[nodiscard]] ScopedRuntimeEnabledFeature {
   public:
    ScopedRuntimeEnabledFeature(bool enabled)
        : enabled_(enabled),
          original_(RuntimeEnabledFeaturesBase::feature_states_[index]) {
      RuntimeEnabledFeaturesBase::feature_states_[index] = enabled;
    }
    ~ScopedRuntimeEnabledFeature() {
      CHECK_EQ(enabled_, RuntimeEnabledFeaturesBase::feature_states_[index]);
      RuntimeEnabledFeaturesBase::feature_states_[index] = original_;
    }
   private:
    bool enabled_;
    bool original_;
  };

  using ScopedAboutBlankPageRespectsDarkModeOnUserAction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAboutBlankPageRespectsDarkModeOnUserActionFlagIndex>;
  using ScopedAccelerated2dCanvas = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccelerated2dCanvasFlagIndex>;
  using ScopedAcceleratedSmallCanvases = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAcceleratedSmallCanvasesFlagIndex>;
  using ScopedAccessibilityCheckIfcInPreviousTextOnLine = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityCheckIfcInPreviousTextOnLineFlagIndex>;
  using ScopedAccessibilityCustomElementRoleNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityCustomElementRoleNoneFlagIndex>;
  using ScopedAccessibilityExposeDisplayNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityExposeDisplayNoneFlagIndex>;
  using ScopedAccessibilityImplicitActions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityImplicitActionsFlagIndex>;
  using ScopedAccessibilityMinRoleTabbable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityMinRoleTabbableFlagIndex>;
  using ScopedAccessibilityOSLevelBoldText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityOSLevelBoldTextFlagIndex>;
  using ScopedAccessibilityProhibitedNames = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityProhibitedNamesFlagIndex>;
  using ScopedAccessibilitySerializationSizeMetrics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilitySerializationSizeMetricsFlagIndex>;
  using ScopedAccessibilityUseAXPositionForDocumentMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessibilityUseAXPositionForDocumentMarkersFlagIndex>;
  using ScopedAccessKeyLabel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAccessKeyLabelFlagIndex>;
  using ScopedAddressSpace = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAddressSpaceFlagIndex>;
  using ScopedAdInterestGroupAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAdInterestGroupAPIFlagIndex>;
  using ScopedAdjustEndOfNextParagraphIfMovedParagraphIsUpdated = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAdjustEndOfNextParagraphIfMovedParagraphIsUpdatedFlagIndex>;
  using ScopedAdTagging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAdTaggingFlagIndex>;
  using ScopedAIDecisionModelAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIDecisionModelAPIFlagIndex>;
  using ScopedAIDecisionModelAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIDecisionModelAPIForWorkersFlagIndex>;
  using ScopedAIEmbeddingsAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIEmbeddingsAPIFlagIndex>;
  using ScopedAIEmbeddingsAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIEmbeddingsAPIForWorkersFlagIndex>;
  using ScopedAIPageContentAnchoredFixedOffscreenNonActionability = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentAnchoredFixedOffscreenNonActionabilityFlagIndex>;
  using ScopedAIPageContentAnchoredNonFixedOffscreenNonActionability = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentAnchoredNonFixedOffscreenNonActionabilityFlagIndex>;
  using ScopedAIPageContentBuildOnLoadForTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentBuildOnLoadForTestingFlagIndex>;
  using ScopedAIPageContentCheckGeometry = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentCheckGeometryFlagIndex>;
  using ScopedAIPageContentConvertNodeTextToUtf8 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentConvertNodeTextToUtf8FlagIndex>;
  using ScopedAIPageContentElementCSSRedaction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentElementCSSRedactionFlagIndex>;
  using ScopedAIPageContentIncludeMathML = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentIncludeMathMLFlagIndex>;
  using ScopedAIPageContentIncludeSVGSubtree = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentIncludeSVGSubtreeFlagIndex>;
  using ScopedAIPageContentLabelExpandFallbackSources = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentLabelExpandFallbackSourcesFlagIndex>;
  using ScopedAIPageContentLabelRemoveRedundant = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentLabelRemoveRedundantFlagIndex>;
  using ScopedAIPageContentLabelRemoveRedundantWholeWordMatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentLabelRemoveRedundantWholeWordMatchingFlagIndex>;
  using ScopedAIPageContentOuterBoxMapToAncestorSpace = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentOuterBoxMapToAncestorSpaceFlagIndex>;
  using ScopedAIPageContentPaidContentAnnotation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentPaidContentAnnotationFlagIndex>;
  using ScopedAIPageContentSkipUnclickableFixedOverlays = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentSkipUnclickableFixedOverlaysFlagIndex>;
  using ScopedAIPageContentTrackedElementsIframe = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentTrackedElementsIframeFlagIndex>;
  using ScopedAIPageContentTrackedElementsPassword = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentTrackedElementsPasswordFlagIndex>;
  using ScopedAIPageContentVisualViewportClamp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPageContentVisualViewportClampFlagIndex>;
  using ScopedAIPromptAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPIFlagIndex>;
  using ScopedAIPromptAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPIForWorkersFlagIndex>;
  using ScopedAIPromptAPILegacyIdentifiers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPILegacyIdentifiersFlagIndex>;
  using ScopedAIPromptAPILegacyParams = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPILegacyParamsFlagIndex>;
  using ScopedAIPromptAPIMultimodalInput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPIMultimodalInputFlagIndex>;
  using ScopedAIPromptAPIParams = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPIParamsFlagIndex>;
  using ScopedAIPromptAPIStructuredOutput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPIStructuredOutputFlagIndex>;
  using ScopedAIPromptAPIToolUse = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIPromptAPIToolUseFlagIndex>;
  using ScopedAIProofreadingAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIProofreadingAPIFlagIndex>;
  using ScopedAIRewriterAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIRewriterAPIFlagIndex>;
  using ScopedAIRewriterAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIRewriterAPIForWorkersFlagIndex>;
  using ScopedAISummarizationAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAISummarizationAPIFlagIndex>;
  using ScopedAISummarizationAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAISummarizationAPIForWorkersFlagIndex>;
  using ScopedAISummarizationPerformancePreference = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAISummarizationPerformancePreferenceFlagIndex>;
  using ScopedAIWriterAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIWriterAPIFlagIndex>;
  using ScopedAIWriterAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAIWriterAPIForWorkersFlagIndex>;
  using ScopedAlignZoomToCenter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAlignZoomToCenterFlagIndex>;
  using ScopedAllowContentInitiatedDataUrlNavigations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAllowContentInitiatedDataUrlNavigationsFlagIndex>;
  using ScopedAllowPreloadingWithCSPMetaTag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAllowPreloadingWithCSPMetaTagFlagIndex>;
  using ScopedAllowSvgUseToReferenceExternalDocumentRoot = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAllowSvgUseToReferenceExternalDocumentRootFlagIndex>;
  using ScopedAllowSyntheticTimingForCanvasCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAllowSyntheticTimingForCanvasCaptureFlagIndex>;
  using ScopedAllowURNsInIframes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAllowURNsInIframesFlagIndex>;
  using ScopedAncestorOriginsStoredOnDocument = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAncestorOriginsStoredOnDocumentFlagIndex>;
  using ScopedAnchorPositionAdjustmentWithoutOverflow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnchorPositionAdjustmentWithoutOverflowFlagIndex>;
  using ScopedAndroidDownloadableFontsMatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAndroidDownloadableFontsMatchingFlagIndex>;
  using ScopedAnimationEventAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnimationEventAnimationFlagIndex>;
  using ScopedAnimationProgressAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnimationProgressAPIFlagIndex>;
  using ScopedAnimationRangeRejectRelativeLengths = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnimationRangeRejectRelativeLengthsFlagIndex>;
  using ScopedAnimationTrigger = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnimationTriggerFlagIndex>;
  using ScopedAnimationWorklet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnimationWorkletFlagIndex>;
  using ScopedAnnotationSpaceForMultiCol = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnnotationSpaceForMultiColFlagIndex>;
  using ScopedAnnotationSpaceOnStart = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnnotationSpaceOnStartFlagIndex>;
  using ScopedAnonymousIframe = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAnonymousIframeFlagIndex>;
  using ScopedAOMAriaRelationshipProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAOMAriaRelationshipPropertiesFlagIndex>;
  using ScopedAOMAriaRelationshipPropertiesAriaOwns = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAOMAriaRelationshipPropertiesAriaOwnsFlagIndex>;
  using ScopedAppearanceBase = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAppearanceBaseFlagIndex>;
  using ScopedAppearanceDisplayAdjustmentForWidgetsOnly = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAppearanceDisplayAdjustmentForWidgetsOnlyFlagIndex>;
  using ScopedApproximateGeolocationPermission = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kApproximateGeolocationPermissionFlagIndex>;
  using ScopedApproximateGeolocationPermissionAccuracyMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kApproximateGeolocationPermissionAccuracyModeFlagIndex>;
  using ScopedApproximateGeolocationPermissionAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kApproximateGeolocationPermissionAPIFlagIndex>;
  using ScopedApproximateGeolocationWebVisibleAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kApproximateGeolocationWebVisibleAPIFlagIndex>;
  using ScopedAppTitle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAppTitleFlagIndex>;
  using ScopedAriaActions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAriaActionsFlagIndex>;
  using ScopedAriaNotify = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAriaNotifyFlagIndex>;
  using ScopedAriaNotifyV2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAriaNotifyV2FlagIndex>;
  using ScopedAriaRowColIndexText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAriaRowColIndexTextFlagIndex>;
  using ScopedAttributionReporting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAttributionReportingFlagIndex>;
  using ScopedAudioContextAsyncStateTransitions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAudioContextAsyncStateTransitionsFlagIndex>;
  using ScopedAudioContextPlaybackStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAudioContextPlaybackStatsFlagIndex>;
  using ScopedAudioContextSetSinkId = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAudioContextSetSinkIdFlagIndex>;
  using ScopedAudioOutputDevices = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAudioOutputDevicesFlagIndex>;
  using ScopedAudioVideoTracks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAudioVideoTracksFlagIndex>;
  using ScopedAudioWorkletSharedPort = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAudioWorkletSharedPortFlagIndex>;
  using ScopedAuthorSpecifiedLayoutScrollSnapBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAuthorSpecifiedLayoutScrollSnapBehaviorFlagIndex>;
  using ScopedAutoDarkMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutoDarkModeFlagIndex>;
  using ScopedAutoDarkModeSkipImages = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutoDarkModeSkipImagesFlagIndex>;
  using ScopedAutoDarkModeSVGSizeThreshold = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutoDarkModeSVGSizeThresholdFlagIndex>;
  using ScopedAutofill = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutofillFlagIndex>;
  using ScopedAutofillEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutofillEventFlagIndex>;
  using ScopedAutofillPreviewGenericFontFamily = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutofillPreviewGenericFontFamilyFlagIndex>;
  using ScopedAutofillPreviewIgnoreAuthorFont = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutofillPreviewIgnoreAuthorFontFlagIndex>;
  using ScopedAutomationControlled = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutomationControlledFlagIndex>;
  using ScopedAutoPictureInPictureVideoHeuristics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutoPictureInPictureVideoHeuristicsFlagIndex>;
  using ScopedAutoSizeUsesScrollWidthForOverflow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAutoSizeUsesScrollWidthForOverflowFlagIndex>;
  using ScopedAvoidEmbeddedContentViewLocation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAvoidEmbeddedContentViewLocationFlagIndex>;
  using ScopedAvoidNonSelectableSelectionBoundary = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAvoidNonSelectableSelectionBoundaryFlagIndex>;
  using ScopedAvoidSynchronousBlurOnDisabledAttributeChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kAvoidSynchronousBlurOnDisabledAttributeChangeFlagIndex>;
  using ScopedBackfaceVisibilityInterop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackfaceVisibilityInteropFlagIndex>;
  using ScopedBackForwardCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackForwardCacheFlagIndex>;
  using ScopedBackForwardCacheExperimentHTTPHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackForwardCacheExperimentHTTPHeaderFlagIndex>;
  using ScopedBackForwardCacheNotRestoredReasons = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackForwardCacheNotRestoredReasonsFlagIndex>;
  using ScopedBackForwardCacheRestorationPerformanceEntry = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackForwardCacheRestorationPerformanceEntryFlagIndex>;
  using ScopedBackForwardCacheUpdateNotRestoredReasonsName = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackForwardCacheUpdateNotRestoredReasonsNameFlagIndex>;
  using ScopedBackgroundClipTextDecoration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackgroundClipTextDecorationFlagIndex>;
  using ScopedBackgroundFetch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackgroundFetchFlagIndex>;
  using ScopedBackgroundPageFreezeOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBackgroundPageFreezeOptOutFlagIndex>;
  using ScopedBarcodeDetector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBarcodeDetectorFlagIndex>;
  using ScopedBaseAppearanceInlineSizing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBaseAppearanceInlineSizingFlagIndex>;
  using ScopedBasicShapeCornerRadius = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBasicShapeCornerRadiusFlagIndex>;
  using ScopedBidiCaretAffinity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBidiCaretAffinityFlagIndex>;
  using ScopedBidiVisualOrderCaretMovement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBidiVisualOrderCaretMovementFlagIndex>;
  using ScopedBlinkExtensionWebView = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlinkExtensionWebViewFlagIndex>;
  using ScopedBlinkExtensionWebViewMediaIntegrity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlinkExtensionWebViewMediaIntegrityFlagIndex>;
  using ScopedBlinkGeometryMapperViewportFastPath = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlinkGeometryMapperViewportFastPathFlagIndex>;
  using ScopedBlinkLifecycleScriptForbidden = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlinkLifecycleScriptForbiddenFlagIndex>;
  using ScopedBlinkRuntimeCallStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlinkRuntimeCallStatsFlagIndex>;
  using ScopedBlobBytes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlobBytesFlagIndex>;
  using ScopedBlockingFocusWithoutUserActivation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlockingFocusWithoutUserActivationFlagIndex>;
  using ScopedBlockSelectPopupUnfocusedWindow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBlockSelectPopupUnfocusedWindowFlagIndex>;
  using ScopedBoundaryEventDispatchTracksNodeRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBoundaryEventDispatchTracksNodeRemovalFlagIndex>;
  using ScopedBoxDecorationBreakCloneLineBreaking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBoxDecorationBreakCloneLineBreakingFlagIndex>;
  using ScopedBrowserInitiatedAutomaticPictureInPicture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBrowserInitiatedAutomaticPictureInPictureFlagIndex>;
  using ScopedBufferedBytesConsumerLimitSize = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBufferedBytesConsumerLimitSizeFlagIndex>;
  using ScopedBypassPepcSecurityForTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBypassPepcSecurityForTestingFlagIndex>;
  using ScopedCacheControlRFC7234Parsing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCacheControlRFC7234ParsingFlagIndex>;
  using ScopedCacheControlRFC7234ParsingMetrics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCacheControlRFC7234ParsingMetricsFlagIndex>;
  using ScopedCacheStorageCodeCacheHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCacheStorageCodeCacheHintFlagIndex>;
  using ScopedCacheStyleAdjuster = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCacheStyleAdjusterFlagIndex>;
  using ScopedCameraAndMicrophoneElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCameraAndMicrophoneElementsFlagIndex>;
  using ScopedCanvas2dCanvasFilter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvas2dCanvasFilterFlagIndex>;
  using ScopedCanvas2dDeferredFlush = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvas2dDeferredFlushFlagIndex>;
  using ScopedCanvas2dLayers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvas2dLayersFlagIndex>;
  using ScopedCanvas2dLayersWithOptions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvas2dLayersWithOptionsFlagIndex>;
  using ScopedCanvas2dMesh = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvas2dMeshFlagIndex>;
  using ScopedCanvasDrawElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasDrawElementFlagIndex>;
  using ScopedCanvasFloatingPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasFloatingPointFlagIndex>;
  using ScopedCanvasGlobalHDRHeadroom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasGlobalHDRHeadroomFlagIndex>;
  using ScopedCanvasGradientCSSColor4 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasGradientCSSColor4FlagIndex>;
  using ScopedCanvasHDR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasHDRFlagIndex>;
  using ScopedCanvasTextDirectionReflect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasTextDirectionReflectFlagIndex>;
  using ScopedCanvasTextMetricsPreciseBounds = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasTextMetricsPreciseBoundsFlagIndex>;
  using ScopedCanvasToneMapping = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasToneMappingFlagIndex>;
  using ScopedCanvasUsesArcPaintOp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCanvasUsesArcPaintOpFlagIndex>;
  using ScopedCapabilityDelegationDigitalCredentials = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapabilityDelegationDigitalCredentialsFlagIndex>;
  using ScopedCapabilityDelegationDisplayCaptureRequest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapabilityDelegationDisplayCaptureRequestFlagIndex>;
  using ScopedCapabilityDelegationPopup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapabilityDelegationPopupFlagIndex>;
  using ScopedCapabilityElementIconOnlyMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapabilityElementIconOnlyModeFlagIndex>;
  using ScopedCapitalizeAfterSupplementaryCharacterFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapitalizeAfterSupplementaryCharacterFixFlagIndex>;
  using ScopedCaptureController = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCaptureControllerFlagIndex>;
  using ScopedCapturedMouseEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapturedMouseEventsFlagIndex>;
  using ScopedCapturedSurfaceControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapturedSurfaceControlFlagIndex>;
  using ScopedCapturedSurfaceResolution = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCapturedSurfaceResolutionFlagIndex>;
  using ScopedCaptureHandle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCaptureHandleFlagIndex>;
  using ScopedCaretBlinking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCaretBlinkingFlagIndex>;
  using ScopedCaretBrowsingSequentialFocusStartingPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCaretBrowsingSequentialFocusStartingPointFlagIndex>;
  using ScopedCaretOutsideEditableAtomicInline = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCaretOutsideEditableAtomicInlineFlagIndex>;
  using ScopedCCTNewRFMPushBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCCTNewRFMPushBehaviorFlagIndex>;
  using ScopedCDTNewCrossOriginHandling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCDTNewCrossOriginHandlingFlagIndex>;
  using ScopedCDTNewDestination = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCDTNewDestinationFlagIndex>;
  using ScopedCDTNewReferrerAndReferrerPolicyHandling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCDTNewReferrerAndReferrerPolicyHandlingFlagIndex>;
  using ScopedCheckableInputTypeLayoutInline = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCheckableInputTypeLayoutInlineFlagIndex>;
  using ScopedCheckCSPOnInlineScriptAttributeSet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCheckCSPOnInlineScriptAttributeSetFlagIndex>;
  using ScopedClampUnfocusedSelectionCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClampUnfocusedSelectionCacheFlagIndex>;
  using ScopedCleanUpActivationBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCleanUpActivationBehaviorFlagIndex>;
  using ScopedClearCrossOriginRelatedTarget = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClearCrossOriginRelatedTargetFlagIndex>;
  using ScopedClearCurrentTargetAfterDispatch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClearCurrentTargetAfterDispatchFlagIndex>;
  using ScopedClearDisplayLockPrePaintFlags = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClearDisplayLockPrePaintFlagsFlagIndex>;
  using ScopedClearFocusWithinOnSubtreeRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClearFocusWithinOnSubtreeRemovalFlagIndex>;
  using ScopedClearTargetOnlyIfInShadowTree = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClearTargetOnlyIfInShadowTreeFlagIndex>;
  using ScopedClipboardEventTargetUsesContainerNode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClipboardEventTargetUsesContainerNodeFlagIndex>;
  using ScopedClipboardOnExtensionServiceWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClipboardOnExtensionServiceWorkerFlagIndex>;
  using ScopedClipboardPasteImageRespectBuffer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClipboardPasteImageRespectBufferFlagIndex>;
  using ScopedClipElementVisibleBoundsInLocalRoot = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClipElementVisibleBoundsInLocalRootFlagIndex>;
  using ScopedClipPathNestedRasterOptimization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kClipPathNestedRasterOptimizationFlagIndex>;
  using ScopedCoalesceSelectionchangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCoalesceSelectionchangeEventFlagIndex>;
  using ScopedCoepReflection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCoepReflectionFlagIndex>;
  using ScopedColorInputAcceptsCSSColors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kColorInputAcceptsCSSColorsFlagIndex>;
  using ScopedColorSpaceDisplayP3Linear = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kColorSpaceDisplayP3LinearFlagIndex>;
  using ScopedColorSpacePredefinedLinearSpaces = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kColorSpacePredefinedLinearSpacesFlagIndex>;
  using ScopedColorSpaceRec2100Linear = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kColorSpaceRec2100LinearFlagIndex>;
  using ScopedComposedPathReturnTargetBeingDispatched = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kComposedPathReturnTargetBeingDispatchedFlagIndex>;
  using ScopedCompositeClipPathAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositeClipPathAnimationFlagIndex>;
  using ScopedCompositedSelectionUpdate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositedSelectionUpdateFlagIndex>;
  using ScopedCompositeHoverStyle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositeHoverStyleFlagIndex>;
  using ScopedCompositingDecisionAtAnimationPhaseBoundaries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositingDecisionAtAnimationPhaseBoundariesFlagIndex>;
  using ScopedCompositionForegroundMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositionForegroundMarkersFlagIndex>;
  using ScopedCompositorEventTrigger = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositorEventTriggerFlagIndex>;
  using ScopedCompositorTimelineTrigger = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompositorTimelineTriggerFlagIndex>;
  using ScopedCompressionDictionaryTransport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCompressionDictionaryTransportFlagIndex>;
  using ScopedComputedAccessibilityInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kComputedAccessibilityInfoFlagIndex>;
  using ScopedComputePressure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kComputePressureFlagIndex>;
  using ScopedConcurrentNativePaintWorklets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kConcurrentNativePaintWorkletsFlagIndex>;
  using ScopedConditionalTracingLoAF = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kConditionalTracingLoAFFlagIndex>;
  using ScopedConnectionAllowlistEmbeddedEnforcement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kConnectionAllowlistEmbeddedEnforcementFlagIndex>;
  using ScopedConsistentFormControlPaintSnapping = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kConsistentFormControlPaintSnappingFlagIndex>;
  using ScopedConstructableStylesheetCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kConstructableStylesheetCacheFlagIndex>;
  using ScopedContactsManager = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kContactsManagerFlagIndex>;
  using ScopedContactsManagerExtraProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kContactsManagerExtraPropertiesFlagIndex>;
  using ScopedContainerTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kContainerTimingFlagIndex>;
  using ScopedContentIndex = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kContentIndexFlagIndex>;
  using ScopedContextMenu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kContextMenuFlagIndex>;
  using ScopedControlledFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kControlledFrameFlagIndex>;
  using ScopedControlledFrameWebRequestSecurityInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kControlledFrameWebRequestSecurityInfoFlagIndex>;
  using ScopedCookieStoreAPIMaxAge = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCookieStoreAPIMaxAgeFlagIndex>;
  using ScopedCookieStoreAPIWhitespaceStripping = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCookieStoreAPIWhitespaceStrippingFlagIndex>;
  using ScopedCoopRestrictProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCoopRestrictPropertiesFlagIndex>;
  using ScopedCorrectTemplateFormParsing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCorrectTemplateFormParsingFlagIndex>;
  using ScopedCorsRFC1918 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCorsRFC1918FlagIndex>;
  using ScopedCpuPerformance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCpuPerformanceFlagIndex>;
  using ScopedCrashReportingStorageAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCrashReportingStorageAPIFlagIndex>;
  using ScopedCreateInlineContentsAnonymousBlock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCreateInlineContentsAnonymousBlockFlagIndex>;
  using ScopedCrossOriginStorage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCrossOriginStorageFlagIndex>;
  using ScopedCSPHashesV1 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSPHashesV1FlagIndex>;
  using ScopedCSPReportHash = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSPReportHashFlagIndex>;
  using ScopedCSSAccentColorKeyword = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAccentColorKeywordFlagIndex>;
  using ScopedCSSActiveCaptionMapsToCanvas = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSActiveCaptionMapsToCanvasFlagIndex>;
  using ScopedCSSAlphaColorFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAlphaColorFunctionFlagIndex>;
  using ScopedCSSAlphaColorFunctionRequiresAlpha = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAlphaColorFunctionRequiresAlphaFlagIndex>;
  using ScopedCSSAltCounter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAltCounterFlagIndex>;
  using ScopedCSSAnimationIterationComposite = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAnimationIterationCompositeFlagIndex>;
  using ScopedCSSArgumentGrammar = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSArgumentGrammarFlagIndex>;
  using ScopedCSSAtRuleCounterStyleImageSymbols = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAtRuleCounterStyleImageSymbolsFlagIndex>;
  using ScopedCSSAtRuleCounterStyleSpeakAsDescriptor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAtRuleCounterStyleSpeakAsDescriptorFlagIndex>;
  using ScopedCSSAttributeValueCaseSensitiveNonHTML = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSAttributeValueCaseSensitiveNonHTMLFlagIndex>;
  using ScopedCSSBackgroundClipBorderArea = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSBackgroundClipBorderAreaFlagIndex>;
  using ScopedCSSBackgroundLayerCountIndependence = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSBackgroundLayerCountIndependenceFlagIndex>;
  using ScopedCSSBorderRadiusSideShorthands = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSBorderRadiusSideShorthandsFlagIndex>;
  using ScopedCSSBorderShape = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSBorderShapeFlagIndex>;
  using ScopedCSSCalcEarlyNaNAndInfFolding = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCalcEarlyNaNAndInfFoldingFlagIndex>;
  using ScopedCSSCalcSimplificationAndSerialization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCalcSimplificationAndSerializationFlagIndex>;
  using ScopedCSSCaretAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCaretAnimationFlagIndex>;
  using ScopedCSSCaretColorWithOptionalSecondValue = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCaretColorWithOptionalSecondValueFlagIndex>;
  using ScopedCSSCaretShape = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCaretShapeFlagIndex>;
  using ScopedCSSCaseSensitiveSelector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCaseSensitiveSelectorFlagIndex>;
  using ScopedCSSChUnitSpecCompliantFallback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSChUnitSpecCompliantFallbackFlagIndex>;
  using ScopedCSSColorTypedOM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSColorTypedOMFlagIndex>;
  using ScopedCSSContainerProgressNotation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSContainerProgressNotationFlagIndex>;
  using ScopedCSSContainerStyleQueriesRange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSContainerStyleQueriesRangeFlagIndex>;
  using ScopedCSSCornersShorthand = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCornersShorthandFlagIndex>;
  using ScopedCSSCounterResetReversed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCounterResetReversedFlagIndex>;
  using ScopedCSSCounterStyleSymbolsFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCounterStyleSymbolsFunctionFlagIndex>;
  using ScopedCSSCrossFade = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCrossFadeFlagIndex>;
  using ScopedCSSCustomHighlightUniversalSelector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCustomHighlightUniversalSelectorFlagIndex>;
  using ScopedCSSCustomMedia = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSCustomMediaFlagIndex>;
  using ScopedCSSDynamicRangeLimit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSDynamicRangeLimitFlagIndex>;
  using ScopedCSSEnumeratedCustomProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSEnumeratedCustomPropertiesFlagIndex>;
  using ScopedCSSFlowStartAndEnd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSFlowStartAndEndFlagIndex>;
  using ScopedCSSFlowStartAndEndSerialization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSFlowStartAndEndSerializationFlagIndex>;
  using ScopedCSSFontFamilySerialization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSFontFamilySerializationFlagIndex>;
  using ScopedCSSFontSizeAdjust = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSFontSizeAdjustFlagIndex>;
  using ScopedCSSFunctions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSFunctionsFlagIndex>;
  using ScopedCSSGridLanesLayout = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSGridLanesLayoutFlagIndex>;
  using ScopedCSSHangingPunctuation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSHangingPunctuationFlagIndex>;
  using ScopedCSSHexAlphaColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSHexAlphaColorFlagIndex>;
  using ScopedCSSIdentFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSIdentFunctionFlagIndex>;
  using ScopedCSSImageAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSImageAnimationFlagIndex>;
  using ScopedCSSImageFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSImageFunctionFlagIndex>;
  using ScopedCSSInheritFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSInheritFunctionFlagIndex>;
  using ScopedCSSInRangeOutOfRangeReversedRanges = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSInRangeOutOfRangeReversedRangesFlagIndex>;
  using ScopedCSSKeyframesRuleLength = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSKeyframesRuleLengthFlagIndex>;
  using ScopedCSSLangExtendedRanges = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLangExtendedRangesFlagIndex>;
  using ScopedCSSLayoutAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLayoutAPIFlagIndex>;
  using ScopedCSSLightDarkImage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLightDarkImageFlagIndex>;
  using ScopedCSSLineClamp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLineClampFlagIndex>;
  using ScopedCSSLineClampAsShorthand = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLineClampAsShorthandFlagIndex>;
  using ScopedCSSLineClampLineBreakingEllipsis = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLineClampLineBreakingEllipsisFlagIndex>;
  using ScopedCSSLinkParametersProperty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLinkParametersPropertyFlagIndex>;
  using ScopedCSSListCounterAccounting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSListCounterAccountingFlagIndex>;
  using ScopedCSSLogicalCombinationPseudo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSLogicalCombinationPseudoFlagIndex>;
  using ScopedCSSMarkerNestedPseudoElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSMarkerNestedPseudoElementFlagIndex>;
  using ScopedCssMaxContentSizing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCssMaxContentSizingFlagIndex>;
  using ScopedCSSMediaElementPseudos = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSMediaElementPseudosFlagIndex>;
  using ScopedCSSMediaProgressNotation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSMediaProgressNotationFlagIndex>;
  using ScopedCSSMixins = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSMixinsFlagIndex>;
  using ScopedCSSNestedPseudoElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSNestedPseudoElementsFlagIndex>;
  using ScopedCSSOMGetComputedStylePseudoElementRequiresColon = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSOMGetComputedStylePseudoElementRequiresColonFlagIndex>;
  using ScopedCSSPaintAPIArguments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPaintAPIArgumentsFlagIndex>;
  using ScopedCSSParserIgnoreCharsetForURLs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSParserIgnoreCharsetForURLsFlagIndex>;
  using ScopedCSSPolygonRounding = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPolygonRoundingFlagIndex>;
  using ScopedCSSPositionStickyStaticScrollPosition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPositionStickyStaticScrollPositionFlagIndex>;
  using ScopedCSSPositionVisibilityAnchorValid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPositionVisibilityAnchorValidFlagIndex>;
  using ScopedCSSPrivate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPrivateFlagIndex>;
  using ScopedCSSProgressNotation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSProgressNotationFlagIndex>;
  using ScopedCSSProgressNotationNoClamp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSProgressNotationNoClampFlagIndex>;
  using ScopedCSSPseudoColumn = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoColumnFlagIndex>;
  using ScopedCSSPseudoElementBackdrop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoElementBackdropFlagIndex>;
  using ScopedCSSPseudoElementInterface = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoElementInterfaceFlagIndex>;
  using ScopedCSSPseudoElementScrollButton = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoElementScrollButtonFlagIndex>;
  using ScopedCSSPseudoElementSelectorText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoElementSelectorTextFlagIndex>;
  using ScopedCSSPseudoElementViewTransitions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoElementViewTransitionsFlagIndex>;
  using ScopedCSSPseudoHasSlotted = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoHasSlottedFlagIndex>;
  using ScopedCSSPseudoScrollButtons = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoScrollButtonsFlagIndex>;
  using ScopedCSSPseudoScrollMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSPseudoScrollMarkersFlagIndex>;
  using ScopedCSSRandomFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSRandomFunctionFlagIndex>;
  using ScopedCSSRandomFunctionTypedOM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSRandomFunctionTypedOMFlagIndex>;
  using ScopedCSSResizeAuto = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSResizeAutoFlagIndex>;
  using ScopedCSSRevertRule = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSRevertRuleFlagIndex>;
  using ScopedCSSRubyOverhang = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSRubyOverhangFlagIndex>;
  using ScopedCSSSafePrintableInset = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSSafePrintableInsetFlagIndex>;
  using ScopedCSSScopeifiedParentPseudoClass = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScopeifiedParentPseudoClassFlagIndex>;
  using ScopedCSSScopeImport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScopeImportFlagIndex>;
  using ScopedCSSScrolledContainerQueries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrolledContainerQueriesFlagIndex>;
  using ScopedCSSScrollInitialTarget = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollInitialTargetFlagIndex>;
  using ScopedCSSScrollMarkerGroupModes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollMarkerGroupModesFlagIndex>;
  using ScopedCSSScrollMarkerTargetBeforeAfter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollMarkerTargetBeforeAfterFlagIndex>;
  using ScopedCSSScrollSnapChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollSnapChangeEventFlagIndex>;
  using ScopedCSSScrollSnapChangingEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollSnapChangingEventFlagIndex>;
  using ScopedCSSScrollSnapEventConstructorExposed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollSnapEventConstructorExposedFlagIndex>;
  using ScopedCSSScrollSnapEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollSnapEventsFlagIndex>;
  using ScopedCSSScrollSnapStopBefore = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollSnapStopBeforeFlagIndex>;
  using ScopedCSSScrollSnapTypePair = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollSnapTypePairFlagIndex>;
  using ScopedCSSScrollTargetGroup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollTargetGroupFlagIndex>;
  using ScopedCSSScrollTargetGroupAriaCurrent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSScrollTargetGroupAriaCurrentFlagIndex>;
  using ScopedCSSShapeOutsidePathAndShapeSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSShapeOutsidePathAndShapeSupportFlagIndex>;
  using ScopedCSSShapeOutsideRectAndXywhSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSShapeOutsideRectAndXywhSupportFlagIndex>;
  using ScopedCSSStyleSheetInitBaseURL = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSStyleSheetInitBaseURLFlagIndex>;
  using ScopedCSSSupportsAtRuleFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSSupportsAtRuleFunctionFlagIndex>;
  using ScopedCSSSupportsForImportRules = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSSupportsForImportRulesFlagIndex>;
  using ScopedCSSSupportsNamedFeatureFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSSupportsNamedFeatureFunctionFlagIndex>;
  using ScopedCSSSystemAccentColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSSystemAccentColorFlagIndex>;
  using ScopedCSSTextAlignMatchParent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextAlignMatchParentFlagIndex>;
  using ScopedCSSTextDecorationInset = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextDecorationInsetFlagIndex>;
  using ScopedCSSTextDecorationSkipInkAll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextDecorationSkipInkAllFlagIndex>;
  using ScopedCSSTextDecorationSkipSpaces = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextDecorationSkipSpacesFlagIndex>;
  using ScopedCssTextFit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCssTextFitFlagIndex>;
  using ScopedCssTextFitReshaping = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCssTextFitReshapingFlagIndex>;
  using ScopedCSSTextSpacing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextSpacingFlagIndex>;
  using ScopedCSSTextTransformFullSizeKana = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextTransformFullSizeKanaFlagIndex>;
  using ScopedCSSTextTransformFullWidth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextTransformFullWidthFlagIndex>;
  using ScopedCSSTextTransformMultiKeyword = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTextTransformMultiKeywordFlagIndex>;
  using ScopedCSSTimelineScopeAll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTimelineScopeAllFlagIndex>;
  using ScopedCSSTimelineScopeGlobal = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTimelineScopeGlobalFlagIndex>;
  using ScopedCSSTreeScopedScrollTimeline = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSTreeScopedScrollTimelineFlagIndex>;
  using ScopedCSSURLRequestModifiers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSURLRequestModifiersFlagIndex>;
  using ScopedCSSUserSelectContain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSUserSelectContainFlagIndex>;
  using ScopedCSSUserValidAndUserInvalidForRadio = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSUserValidAndUserInvalidForRadioFlagIndex>;
  using ScopedCSSVideoDynamicRangeMediaQueries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSVideoDynamicRangeMediaQueriesFlagIndex>;
  using ScopedCSSViewTransitionAutoName = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSViewTransitionAutoNameFlagIndex>;
  using ScopedCSSWindowDrag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSWindowDragFlagIndex>;
  using ScopedCSSZoomAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCSSZoomAnimationFlagIndex>;
  using ScopedCustomElementsDisableFormattingFixups = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCustomElementsDisableFormattingFixupsFlagIndex>;
  using ScopedCustomizableCombobox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCustomizableComboboxFlagIndex>;
  using ScopedCustomizableSelectMultiplePopup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCustomizableSelectMultiplePopupFlagIndex>;
  using ScopedCustomizableSelectNewUAStyles = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCustomizableSelectNewUAStylesFlagIndex>;
  using ScopedCustomScrollbarApplyMinimumThumbLength = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kCustomScrollbarApplyMinimumThumbLengthFlagIndex>;
  using ScopedDatabase = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDatabaseFlagIndex>;
  using ScopedDateTimeInputTypeEarlyAdvanceFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDateTimeInputTypeEarlyAdvanceFixFlagIndex>;
  using ScopedDeclarativeCSSModules = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeclarativeCSSModulesFlagIndex>;
  using ScopedDeclarativeCSSModulesStyleTag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeclarativeCSSModulesStyleTagFlagIndex>;
  using ScopedDeclarativeFragment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeclarativeFragmentFlagIndex>;
  using ScopedDeclarativePerformanceObserver = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeclarativePerformanceObserverFlagIndex>;
  using ScopedDeclarativeSkeletons = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeclarativeSkeletonsFlagIndex>;
  using ScopedDeclarativeWebMCP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeclarativeWebMCPFlagIndex>;
  using ScopedDeferLineBoxHitTestToBackground = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeferLineBoxHitTestToBackgroundFlagIndex>;
  using ScopedDelegatesFocusTextControlInputFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDelegatesFocusTextControlInputFixFlagIndex>;
  using ScopedDeprecateUnloadOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeprecateUnloadOptOutFlagIndex>;
  using ScopedDesktopCaptureDisableLocalEchoControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDesktopCaptureDisableLocalEchoControlFlagIndex>;
  using ScopedDesktopPWAsAdditionalWindowingControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDesktopPWAsAdditionalWindowingControlsFlagIndex>;
  using ScopedDesktopPWAsAdditionalWindowingControlsOnMove = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDesktopPWAsAdditionalWindowingControlsOnMoveFlagIndex>;
  using ScopedDeviceAttributes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeviceAttributesFlagIndex>;
  using ScopedDeviceBoundSessionJsApi = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeviceBoundSessionJsApiFlagIndex>;
  using ScopedDeviceOrientationRequestPermission = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDeviceOrientationRequestPermissionFlagIndex>;
  using ScopedDevicePosture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDevicePostureFlagIndex>;
  using ScopedDialogCloseWhenOpenRemoved = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDialogCloseWhenOpenRemovedFlagIndex>;
  using ScopedDialogNewFocusBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDialogNewFocusBehaviorFlagIndex>;
  using ScopedDigitalCredentialsProtocolFilter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDigitalCredentialsProtocolFilterFlagIndex>;
  using ScopedDigitalGoods = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDigitalGoodsFlagIndex>;
  using ScopedDigitalGoodsV2_1 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDigitalGoodsV2_1FlagIndex>;
  using ScopedDirectSockets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDirectSocketsFlagIndex>;
  using ScopedDirectSocketsInServiceWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDirectSocketsInServiceWorkersFlagIndex>;
  using ScopedDirectSocketsInSharedWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDirectSocketsInSharedWorkersFlagIndex>;
  using ScopedDisableAnchorCenterOnAlignJustifyItems = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisableAnchorCenterOnAlignJustifyItemsFlagIndex>;
  using ScopedDisableDifferentOriginSubframeDialogSuppression = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisableDifferentOriginSubframeDialogSuppressionFlagIndex>;
  using ScopedDisableEllipsisWhenScrolled = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisableEllipsisWhenScrolledFlagIndex>;
  using ScopedDisableFormControlChangeEventDuringMutation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisableFormControlChangeEventDuringMutationFlagIndex>;
  using ScopedDisconnectWebSocketOnBFCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisconnectWebSocketOnBFCacheFlagIndex>;
  using ScopedDispatchHiddenVisibilityTransitions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDispatchHiddenVisibilityTransitionsFlagIndex>;
  using ScopedDispatchSelectionchangeEventPerElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDispatchSelectionchangeEventPerElementFlagIndex>;
  using ScopedDispatchWorkerCSPViolationEventForModuleGraphFetching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDispatchWorkerCSPViolationEventForModuleGraphFetchingFlagIndex>;
  using ScopedDisplayContentsFocusable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisplayContentsFocusableFlagIndex>;
  using ScopedDisplayCutoutAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDisplayCutoutAPIFlagIndex>;
  using ScopedDocumentCookie = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentCookieFlagIndex>;
  using ScopedDocumentDomain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentDomainFlagIndex>;
  using ScopedDocumentIsolationPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentIsolationPolicyFlagIndex>;
  using ScopedDocumentOpenIframeUnloadEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentOpenIframeUnloadEventsFlagIndex>;
  using ScopedDocumentOpenOriginAliasRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentOpenOriginAliasRemovalFlagIndex>;
  using ScopedDocumentOpenSandboxInheritanceRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentOpenSandboxInheritanceRemovalFlagIndex>;
  using ScopedDocumentPatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPatchingFlagIndex>;
  using ScopedDocumentPictureInPictureAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPictureInPictureAPIFlagIndex>;
  using ScopedDocumentPictureInPicturePreferInitialPlacement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPictureInPicturePreferInitialPlacementFlagIndex>;
  using ScopedDocumentPictureInPictureUserActivation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPictureInPictureUserActivationFlagIndex>;
  using ScopedDocumentPolicyDocumentDomain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyDocumentDomainFlagIndex>;
  using ScopedDocumentPolicyExpectNoLinkedResources = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyExpectNoLinkedResourcesFlagIndex>;
  using ScopedDocumentPolicyIncludeJSCallStacksInCrashReports = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyIncludeJSCallStacksInCrashReportsFlagIndex>;
  using ScopedDocumentPolicyInDedicatedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyInDedicatedWorkerFlagIndex>;
  using ScopedDocumentPolicyJSProfilingMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyJSProfilingModeFlagIndex>;
  using ScopedDocumentPolicyNegotiation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyNegotiationFlagIndex>;
  using ScopedDocumentPolicyNetworkEfficiencyGuardrails = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicyNetworkEfficiencyGuardrailsFlagIndex>;
  using ScopedDocumentPolicySyncXHR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentPolicySyncXHRFlagIndex>;
  using ScopedDocumentWrite = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDocumentWriteFlagIndex>;
  using ScopedDOMParserXmlScriptAlreadyStarted = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDOMParserXmlScriptAlreadyStartedFlagIndex>;
  using ScopedDragAndDropDownloadURLList = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDragAndDropDownloadURLListFlagIndex>;
  using ScopedDragAndDropJSFileObjects = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDragAndDropJSFileObjectsFlagIndex>;
  using ScopedDragImageForLargeImages = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDragImageForLargeImagesFlagIndex>;
  using ScopedDragThresholdRequiresMouseMovement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDragThresholdRequiresMouseMovementFlagIndex>;
  using ScopedDumpForAbsentKeyframeSnapshots = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kDumpForAbsentKeyframeSnapshotsFlagIndex>;
  using ScopedEditContextAssignmentAsPerSpec = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEditContextAssignmentAsPerSpecFlagIndex>;
  using ScopedEditContextBoundsUpdateSchedulesFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEditContextBoundsUpdateSchedulesFrameFlagIndex>;
  using ScopedEditContextCodePointDeletion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEditContextCodePointDeletionFlagIndex>;
  using ScopedEditContextHandleTextOrSelectionUpdateDuringComposition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEditContextHandleTextOrSelectionUpdateDuringCompositionFlagIndex>;
  using ScopedEditContextSelectionUpdateBeforeTextUpdateEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEditContextSelectionUpdateBeforeTextUpdateEventFlagIndex>;
  using ScopedEditingUseDomPositionApi = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEditingUseDomPositionApiFlagIndex>;
  using ScopedElasticOverscrollBackgroundPaintLocationFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kElasticOverscrollBackgroundPaintLocationFixFlagIndex>;
  using ScopedElasticOverscrollUseEventDeltaForAxisSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kElasticOverscrollUseEventDeltaForAxisSelectionFlagIndex>;
  using ScopedElementCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kElementCaptureFlagIndex>;
  using ScopedElementInternalsBehaviors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kElementInternalsBehaviorsFlagIndex>;
  using ScopedElementMatchContainer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kElementMatchContainerFlagIndex>;
  using ScopedElementSpecificReadOnlyConstraintValidation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kElementSpecificReadOnlyConstraintValidationFlagIndex>;
  using ScopedEmailVerificationProtocol = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEmailVerificationProtocolFlagIndex>;
  using ScopedEmbeddedContentCenterAlignBaseline = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEmbeddedContentCenterAlignBaselineFlagIndex>;
  using ScopedEmojiZWJVerticalOrientation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEmojiZWJVerticalOrientationFlagIndex>;
  using ScopedEnableXSLTForCAPAlerts = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEnableXSLTForCAPAlertsFlagIndex>;
  using ScopedEndpointInclusiveCommitStyles = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEndpointInclusiveCommitStylesFlagIndex>;
  using ScopedEnforceAnonymityExposure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEnforceAnonymityExposureFlagIndex>;
  using ScopedEntropyIgnoredForFirstVideoFrameLCP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEntropyIgnoredForFirstVideoFrameLCPFlagIndex>;
  using ScopedEventPseudoTargetProperty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEventPseudoTargetPropertyFlagIndex>;
  using ScopedEventPseudoTargetViewTransitionName = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEventPseudoTargetViewTransitionNameFlagIndex>;
  using ScopedEventTimingInteractionCount = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEventTimingInteractionCountFlagIndex>;
  using ScopedEventTimingMatchingHTML = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEventTimingMatchingHTMLFlagIndex>;
  using ScopedEventTimingTargetSelector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEventTimingTargetSelectorFlagIndex>;
  using ScopedEventTrigger = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEventTriggerFlagIndex>;
  using ScopedExperimentalContentSecurityPolicyFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExperimentalContentSecurityPolicyFeaturesFlagIndex>;
  using ScopedExperimentalJSProfilerMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExperimentalJSProfilerMarkersFlagIndex>;
  using ScopedExperimentalMachineLearningNeuralNetwork = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExperimentalMachineLearningNeuralNetworkFlagIndex>;
  using ScopedExperimentalPolicies = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExperimentalPoliciesFlagIndex>;
  using ScopedExposeCSSFontFeatureValuesRule = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExposeCSSFontFeatureValuesRuleFlagIndex>;
  using ScopedExposeRenderTimeNonTaoDelayedImage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExposeRenderTimeNonTaoDelayedImageFlagIndex>;
  using ScopedExtendedTextMetrics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExtendedTextMetricsFlagIndex>;
  using ScopedExtensionScriptTagging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExtensionScriptTaggingFlagIndex>;
  using ScopedExtensionScriptTaggingTestingAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExtensionScriptTaggingTestingAPIFlagIndex>;
  using ScopedExternalPopupMenuClickEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kExternalPopupMenuClickEventFlagIndex>;
  using ScopedEyeDropperAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kEyeDropperAPIFlagIndex>;
  using ScopedFaceDetector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFaceDetectorFlagIndex>;
  using ScopedFastCompositionCharacterBounds = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFastCompositionCharacterBoundsFlagIndex>;
  using ScopedFastPlainTextRangeCreateRange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFastPlainTextRangeCreateRangeFlagIndex>;
  using ScopedFastPositionIterator = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFastPositionIteratorFlagIndex>;
  using ScopedFedCm = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmFlagIndex>;
  using ScopedFedCmActiveModeMultipleIdentityProviders = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmActiveModeMultipleIdentityProvidersFlagIndex>;
  using ScopedFedCmAutofill = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmAutofillFlagIndex>;
  using ScopedFedCmDelegation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmDelegationFlagIndex>;
  using ScopedFedCmIdentityHandler = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmIdentityHandlerFlagIndex>;
  using ScopedFedCmIdPRegistration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmIdPRegistrationFlagIndex>;
  using ScopedFedCmLightweightMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmLightweightModeFlagIndex>;
  using ScopedFedCmMultipleIdentityProviders = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmMultipleIdentityProvidersFlagIndex>;
  using ScopedFedCmMultipleRequests = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmMultipleRequestsFlagIndex>;
  using ScopedFedCmNavigationInterception = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFedCmNavigationInterceptionFlagIndex>;
  using ScopedFencedFrames = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFencedFramesFlagIndex>;
  using ScopedFencedFramesAPIChanges = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFencedFramesAPIChangesFlagIndex>;
  using ScopedFencedFramesLocalUnpartitionedDataAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFencedFramesLocalUnpartitionedDataAccessFlagIndex>;
  using ScopedFetchBodyBytes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFetchBodyBytesFlagIndex>;
  using ScopedFetchLaterAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFetchLaterAPIFlagIndex>;
  using ScopedFetchRetry = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFetchRetryFlagIndex>;
  using ScopedFetchUploadStreaming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFetchUploadStreamingFlagIndex>;
  using ScopedFileHandling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileHandlingFlagIndex>;
  using ScopedFilePickerEventsFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFilePickerEventsFixFlagIndex>;
  using ScopedFileSystem = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemFlagIndex>;
  using ScopedFileSystemAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessFlagIndex>;
  using ScopedFileSystemAccessAPIExperimental = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessAPIExperimentalFlagIndex>;
  using ScopedFileSystemAccessGetCloudIdentifiers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessGetCloudIdentifiersFlagIndex>;
  using ScopedFileSystemAccessLocal = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessLocalFlagIndex>;
  using ScopedFileSystemAccessLockingScheme = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessLockingSchemeFlagIndex>;
  using ScopedFileSystemAccessOriginPrivate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessOriginPrivateFlagIndex>;
  using ScopedFileSystemAccessRevokeReadOnRemove = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessRevokeReadOnRemoveFlagIndex>;
  using ScopedFileSystemAccessWriteMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemAccessWriteModeFlagIndex>;
  using ScopedFileSystemObserver = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemObserverFlagIndex>;
  using ScopedFileSystemObserverUnobserve = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFileSystemObserverUnobserveFlagIndex>;
  using ScopedFilterableSelect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFilterableSelectFlagIndex>;
  using ScopedFilterContainerLevelStyles = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFilterContainerLevelStylesFlagIndex>;
  using ScopedFilteringPrimitives = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFilteringPrimitivesFlagIndex>;
  using ScopedFindBufferCollapseSkippedSpace = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFindBufferCollapseSkippedSpaceFlagIndex>;
  using ScopedFindBufferMatchAcrossIgnoredNodes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFindBufferMatchAcrossIgnoredNodesFlagIndex>;
  using ScopedFindBufferSkipIgnoredSubtrees = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFindBufferSkipIgnoredSubtreesFlagIndex>;
  using ScopedFindFirstMisspellingEndWhenNonEditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFindFirstMisspellingEndWhenNonEditableFlagIndex>;
  using ScopedFindIgnoreSuggestionFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFindIgnoreSuggestionFixFlagIndex>;
  using ScopedFirstLetterParagraphOffsets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFirstLetterParagraphOffsetsFlagIndex>;
  using ScopedFirstLineAndLetterExcludeInputTextarea = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFirstLineAndLetterExcludeInputTextareaFlagIndex>;
  using ScopedFirstLineTextMetrics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFirstLineTextMetricsFlagIndex>;
  using ScopedFixHTMLFormControlElementIsReadOnly = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFixHTMLFormControlElementIsReadOnlyFlagIndex>;
  using ScopedFixMapElementEmptyNameBug = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFixMapElementEmptyNameBugFlagIndex>;
  using ScopedFixSelectionPaintRangeNullOpt = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFixSelectionPaintRangeNullOptFlagIndex>;
  using ScopedFixVisualRectRemoteViewportTransform = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFixVisualRectRemoteViewportTransformFlagIndex>;
  using ScopedFledge = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeFlagIndex>;
  using ScopedFledgeAuctionDealSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeAuctionDealSupportFlagIndex>;
  using ScopedFledgeBiddingAndAuctionServerAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeBiddingAndAuctionServerAPIFlagIndex>;
  using ScopedFledgeBiddingAndAuctionServerAPIMultiSeller = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeBiddingAndAuctionServerAPIMultiSellerFlagIndex>;
  using ScopedFledgeClickiness = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeClickinessFlagIndex>;
  using ScopedFledgeCustomMaxAuctionAdComponents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeCustomMaxAuctionAdComponentsFlagIndex>;
  using ScopedFledgeDeprecatedRenderURLReplacements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeDeprecatedRenderURLReplacementsFlagIndex>;
  using ScopedFledgeDirectFromSellerSignalsHeaderAdSlot = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeDirectFromSellerSignalsHeaderAdSlotFlagIndex>;
  using ScopedFledgeDirectFromSellerSignalsWebBundles = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeDirectFromSellerSignalsWebBundlesFlagIndex>;
  using ScopedFledgeMultiBid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeMultiBidFlagIndex>;
  using ScopedFledgePrivateModelTraining = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgePrivateModelTrainingFlagIndex>;
  using ScopedFledgeRealTimeReporting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeRealTimeReportingFlagIndex>;
  using ScopedFledgeSellerNonce = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeSellerNonceFlagIndex>;
  using ScopedFledgeSellerScriptExecutionMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeSellerScriptExecutionModeFlagIndex>;
  using ScopedFledgeTrustedSignalsKVv1CreativeScanning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeTrustedSignalsKVv1CreativeScanningFlagIndex>;
  using ScopedFledgeTrustedSignalsKVv2ContextualData = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeTrustedSignalsKVv2ContextualDataFlagIndex>;
  using ScopedFledgeTrustedSignalsKVv2Support = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFledgeTrustedSignalsKVv2SupportFlagIndex>;
  using ScopedFlexWrapBalance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFlexWrapBalanceFlagIndex>;
  using ScopedFocusgroup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFocusgroupFlagIndex>;
  using ScopedFocusgroupV2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFocusgroupV2FlagIndex>;
  using ScopedFocusResetEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFocusResetEventFlagIndex>;
  using ScopedFocusRingRespectExplicitOutlineColorInDarkMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFocusRingRespectExplicitOutlineColorInDarkModeFlagIndex>;
  using ScopedFontAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontAccessFlagIndex>;
  using ScopedFontationsPrinting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontationsPrintingFlagIndex>;
  using ScopedFontDataServiceForCSSLocalFonts = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontDataServiceForCSSLocalFontsFlagIndex>;
  using ScopedFontFamilyPostscriptMatchingCTMigration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontFamilyPostscriptMatchingCTMigrationFlagIndex>;
  using ScopedFontFamilyStyleMatchingCTMigration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontFamilyStyleMatchingCTMigrationFlagIndex>;
  using ScopedFontFeatureSettingsDescriptor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontFeatureSettingsDescriptorFlagIndex>;
  using ScopedFontFormatAvar2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontFormatAvar2FlagIndex>;
  using ScopedFontLanguageOverride = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontLanguageOverrideFlagIndex>;
  using ScopedFontMatchAliasesAsLastResort = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontMatchAliasesAsLastResortFlagIndex>;
  using ScopedFontPrewarmerShutdownFallback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontPrewarmerShutdownFallbackFlagIndex>;
  using ScopedFontStyleObliqueZeroDegreeAsNormal = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontStyleObliqueZeroDegreeAsNormalFlagIndex>;
  using ScopedFontUniqueNameTypefaceCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontUniqueNameTypefaceCacheFlagIndex>;
  using ScopedFontVariableItalicAxis = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontVariableItalicAxisFlagIndex>;
  using ScopedFontVariationSettingsDescriptor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFontVariationSettingsDescriptorFlagIndex>;
  using ScopedForcedColors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kForcedColorsFlagIndex>;
  using ScopedForceEagerMeasureMemory = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kForceEagerMeasureMemoryFlagIndex>;
  using ScopedForceReduceMotion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kForceReduceMotionFlagIndex>;
  using ScopedForwardReasonToFetchBodyAbort = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kForwardReasonToFetchBodyAbortFlagIndex>;
  using ScopedFractionalScrollOffsets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFractionalScrollOffsetsFlagIndex>;
  using ScopedFractionalScrollOffsetsForWebAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFractionalScrollOffsetsForWebAPIFlagIndex>;
  using ScopedFragmentedOofInCb = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFragmentedOofInCbFlagIndex>;
  using ScopedFrameCaretSkipHiddenCheck = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFrameCaretSkipHiddenCheckFlagIndex>;
  using ScopedFreezeFramesOnVisibility = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kFreezeFramesOnVisibilityFlagIndex>;
  using ScopedGamepadButtonTypes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGamepadButtonTypesFlagIndex>;
  using ScopedGamepadMultitouch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGamepadMultitouchFlagIndex>;
  using ScopedGamepadRawInputChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGamepadRawInputChangeEventFlagIndex>;
  using ScopedGamepadWindowEventHandlers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGamepadWindowEventHandlersFlagIndex>;
  using ScopedGenerateDragOverlayBeforeDragStart = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGenerateDragOverlayBeforeDragStartFlagIndex>;
  using ScopedGenerateXSLTWarningBanner = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGenerateXSLTWarningBannerFlagIndex>;
  using ScopedGeolocationElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGeolocationElementFlagIndex>;
  using ScopedGeometryMapperSingularTransformFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGeometryMapperSingularTransformFixFlagIndex>;
  using ScopedGeometryUtils = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGeometryUtilsFlagIndex>;
  using ScopedGeometryUtilsForCSSPseudoElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGeometryUtilsForCSSPseudoElementFlagIndex>;
  using ScopedGetAllScreensMedia = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetAllScreensMediaFlagIndex>;
  using ScopedGetDisplayMedia = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetDisplayMediaFlagIndex>;
  using ScopedGetDisplayMediaAudioSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetDisplayMediaAudioSelectionFlagIndex>;
  using ScopedGetDisplayMediaRequiresUserActivation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetDisplayMediaRequiresUserActivationFlagIndex>;
  using ScopedGetDisplayMediaWindowAudioCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetDisplayMediaWindowAudioCaptureFlagIndex>;
  using ScopedGetElementsByNameOnlyHTMLElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetElementsByNameOnlyHTMLElementsFlagIndex>;
  using ScopedGetTargetRangesRetargeting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetTargetRangesRetargetingFlagIndex>;
  using ScopedGetUserMediaEchoCancellationModes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGetUserMediaEchoCancellationModesFlagIndex>;
  using ScopedGlobalPrivacyControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGlobalPrivacyControlFlagIndex>;
  using ScopedGlobalPrivacyControlApi = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGlobalPrivacyControlApiFlagIndex>;
  using ScopedGlobalPrivacyControlForce = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGlobalPrivacyControlForceFlagIndex>;
  using ScopedGraphemeClusterBoundsCheck = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGraphemeClusterBoundsCheckFlagIndex>;
  using ScopedGroupEffect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kGroupEffectFlagIndex>;
  using ScopedHandleShadowDOMInSubstringUtil = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHandleShadowDOMInSubstringUtilFlagIndex>;
  using ScopedHandwritingRecognition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHandwritingRecognitionFlagIndex>;
  using ScopedHarfRustShaping = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHarfRustShapingFlagIndex>;
  using ScopedHasUAVisualTransition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHasUAVisualTransitionFlagIndex>;
  using ScopedHeadingOffset = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHeadingOffsetFlagIndex>;
  using ScopedHideVideoControlsWhenUnneeded = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHideVideoControlsWhenUnneededFlagIndex>;
  using ScopedHighlightsFromPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHighlightsFromPointFlagIndex>;
  using ScopedHitTestBorderRadiusForStackingContext = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHitTestBorderRadiusForStackingContextFlagIndex>;
  using ScopedHitTestContainerTransformStateForPreserve3d = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHitTestContainerTransformStateForPreserve3dFlagIndex>;
  using ScopedHitTestCulledInlineOfSelfPaintingChild = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHitTestCulledInlineOfSelfPaintingChildFlagIndex>;
  using ScopedHrefTranslate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHrefTranslateFlagIndex>;
  using ScopedHstsTopLevelNavigationsOnly = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHstsTopLevelNavigationsOnlyFlagIndex>;
  using ScopedHTMLAdoptionAlgorithmNewSteps = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLAdoptionAlgorithmNewStepsFlagIndex>;
  using ScopedHTMLAreaElementDisplayNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLAreaElementDisplayNoneFlagIndex>;
  using ScopedHTMLAreaHreflangType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLAreaHreflangTypeFlagIndex>;
  using ScopedHTMLBodyMarginPixelLength = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLBodyMarginPixelLengthFlagIndex>;
  using ScopedHTMLCommandActionsV2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLCommandActionsV2FlagIndex>;
  using ScopedHTMLCommandElementRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLCommandElementRemovalFlagIndex>;
  using ScopedHTMLCommandForScrollCommands = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLCommandForScrollCommandsFlagIndex>;
  using ScopedHTMLElementScrollParent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLElementScrollParentFlagIndex>;
  using ScopedHTMLInterestForInterestButtonPseudo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLInterestForInterestButtonPseudoFlagIndex>;
  using ScopedHTMLLinkElementAttributeValueChanges = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLLinkElementAttributeValueChangesFlagIndex>;
  using ScopedHTMLParserIgnoreHeadInNoscript = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLParserIgnoreHeadInNoscriptFlagIndex>;
  using ScopedHTMLParserTruncatedMarkupDeclaration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLParserTruncatedMarkupDeclarationFlagIndex>;
  using ScopedHTMLParserYieldAndDelayOftenForTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLParserYieldAndDelayOftenForTestingFlagIndex>;
  using ScopedHTMLParserYieldByUserTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLParserYieldByUserTimingFlagIndex>;
  using ScopedHTMLPrintingArtifactAnnotations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLPrintingArtifactAnnotationsFlagIndex>;
  using ScopedHTMLProcessingInstruction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLProcessingInstructionFlagIndex>;
  using ScopedHTMLSwitchAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHTMLSwitchAttributeFlagIndex>;
  using ScopedHyphenVerticalOrientationFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kHyphenVerticalOrientationFixFlagIndex>;
  using ScopedICUCapitalization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kICUCapitalizationFlagIndex>;
  using ScopedIgnoreLetterSpacingInCursiveScripts = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kIgnoreLetterSpacingInCursiveScriptsFlagIndex>;
  using ScopedImageDataPixelFormat = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kImageDataPixelFormatFlagIndex>;
  using ScopedImageDocumentUseLayoutWidth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kImageDocumentUseLayoutWidthFlagIndex>;
  using ScopedImageSrcsetReselection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kImageSrcsetReselectionFlagIndex>;
  using ScopedImageSrcsetReselectionForSrcCandidate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kImageSrcsetReselectionForSrcCandidateFlagIndex>;
  using ScopedImplicitRootScroller = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kImplicitRootScrollerFlagIndex>;
  using ScopedIncomingCallNotifications = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kIncomingCallNotificationsFlagIndex>;
  using ScopedIncrementalFontTransfer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kIncrementalFontTransferFlagIndex>;
  using ScopedInertElementNonEditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInertElementNonEditableFlagIndex>;
  using ScopedInfiniteCullRect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInfiniteCullRectFlagIndex>;
  using ScopedInheritUserModifyWithoutContenteditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInheritUserModifyWithoutContenteditableFlagIndex>;
  using ScopedInitialLetterBlockPositioning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInitialLetterBlockPositioningFlagIndex>;
  using ScopedInlineBlockLineNavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInlineBlockLineNavigationFlagIndex>;
  using ScopedInlineContainingBlockSkipOpaque = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInlineContainingBlockSkipOpaqueFlagIndex>;
  using ScopedInlineCursorSkipNonIfc = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInlineCursorSkipNonIfcFlagIndex>;
  using ScopedInlineScriptCacheHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInlineScriptCacheHintFlagIndex>;
  using ScopedInnerHTMLParserFastpathLogFailure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInnerHTMLParserFastpathLogFailureFlagIndex>;
  using ScopedInputClientRectWithoutInlinePadding = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInputClientRectWithoutInlinePaddingFlagIndex>;
  using ScopedInputDisabledHandlerFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInputDisabledHandlerFixFlagIndex>;
  using ScopedInputInSelect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInputInSelectFlagIndex>;
  using ScopedInputMultipleFieldsUI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInputMultipleFieldsUIFlagIndex>;
  using ScopedInputMultipleFieldsUIWithPointerChecks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInputMultipleFieldsUIWithPointerChecksFlagIndex>;
  using ScopedInputTypeColorEnhancements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInputTypeColorEnhancementsFlagIndex>;
  using ScopedInsertBlockquoteBeforeOuterBlock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInsertBlockquoteBeforeOuterBlockFlagIndex>;
  using ScopedInstalledApp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInstalledAppFlagIndex>;
  using ScopedInstallElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInstallElementFlagIndex>;
  using ScopedInstallOnDeviceSpeechRecognition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInstallOnDeviceSpeechRecognitionFlagIndex>;
  using ScopedIntegrityPolicyScript = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kIntegrityPolicyScriptFlagIndex>;
  using ScopedInterestEventsNonComposed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInterestEventsNonComposedFlagIndex>;
  using ScopedIntersectionObserverCompositedAnimationsForceMainFrames = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kIntersectionObserverCompositedAnimationsForceMainFramesFlagIndex>;
  using ScopedInvertedColors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInvertedColorsFlagIndex>;
  using ScopedInvisibleSVGAnimationThrottling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kInvisibleSVGAnimationThrottlingFlagIndex>;
  using ScopedJavaScriptCompileHintsPerFunctionMagicRuntime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kJavaScriptCompileHintsPerFunctionMagicRuntimeFlagIndex>;
  using ScopedJavaScriptImportText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kJavaScriptImportTextFlagIndex>;
  using ScopedJavaScriptSourcePhaseImports = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kJavaScriptSourcePhaseImportsFlagIndex>;
  using ScopedKeyboardAccessibleTooltip = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kKeyboardAccessibleTooltipFlagIndex>;
  using ScopedLabelInteractiveContentCheckBeforeHandler = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLabelInteractiveContentCheckBeforeHandlerFlagIndex>;
  using ScopedLangAttributeAwareFormControlUI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLangAttributeAwareFormControlUIFlagIndex>;
  using ScopedLanguageDetectionAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLanguageDetectionAPIFlagIndex>;
  using ScopedLanguageDetectionAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLanguageDetectionAPIForWorkersFlagIndex>;
  using ScopedLayoutCloneForScrollableOverflowChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLayoutCloneForScrollableOverflowChangeFlagIndex>;
  using ScopedLayoutContainingBlockReturnsBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLayoutContainingBlockReturnsBoxFlagIndex>;
  using ScopedLayoutIgnoreMarginsForSticky = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLayoutIgnoreMarginsForStickyFlagIndex>;
  using ScopedLayoutOOFCollectInlinesFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLayoutOOFCollectInlinesFixFlagIndex>;
  using ScopedLazyImageConformantLoadEventTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLazyImageConformantLoadEventTimingFlagIndex>;
  using ScopedLazyLoadVideoAndAudio = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLazyLoadVideoAndAudioFlagIndex>;
  using ScopedLazyParseInlineStyleSheets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLazyParseInlineStyleSheetsFlagIndex>;
  using ScopedLeftClickToHandleSuggestion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLeftClickToHandleSuggestionFlagIndex>;
  using ScopedLegacyAbstractRange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLegacyAbstractRangeFlagIndex>;
  using ScopedLightDismissFromClick = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLightDismissFromClickFlagIndex>;
  using ScopedLineBreakAfterSpaceBeforeOpenTag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLineBreakAfterSpaceBeforeOpenTagFlagIndex>;
  using ScopedLineBreakBidiControlEnter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLineBreakBidiControlEnterFlagIndex>;
  using ScopedLineBreakerClearShapeResultOnOverflow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLineBreakerClearShapeResultOnOverflowFlagIndex>;
  using ScopedLineBreakerHanKerningEnd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLineBreakerHanKerningEndFlagIndex>;
  using ScopedLocalNetworkAccessForWebRTCOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLocalNetworkAccessForWebRTCOptOutFlagIndex>;
  using ScopedLocalNetworkAccessPermissionPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLocalNetworkAccessPermissionPolicyFlagIndex>;
  using ScopedLocalNetworkAccessWebRTC = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLocalNetworkAccessWebRTCFlagIndex>;
  using ScopedLocalNetworkAccessWebSocketsTargetAddressSpace = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLocalNetworkAccessWebSocketsTargetAddressSpaceFlagIndex>;
  using ScopedLockedMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLockedModeFlagIndex>;
  using ScopedLoginElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLoginElementFlagIndex>;
  using ScopedLongAnimationFrameSourceCharPosition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongAnimationFrameSourceCharPositionFlagIndex>;
  using ScopedLongAnimationFrameSourceLineColumn = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongAnimationFrameSourceLineColumnFlagIndex>;
  using ScopedLongAnimationFrameSourceLineColumnInterface = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongAnimationFrameSourceLineColumnInterfaceFlagIndex>;
  using ScopedLongAnimationFrameStyleDuration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongAnimationFrameStyleDurationFlagIndex>;
  using ScopedLongAnimationFrameWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongAnimationFrameWorkerFlagIndex>;
  using ScopedLongPressHitTestInFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongPressHitTestInFrameFlagIndex>;
  using ScopedLongPressLinkSelectText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongPressLinkSelectTextFlagIndex>;
  using ScopedLongPressReleasesActiveState = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongPressReleasesActiveStateFlagIndex>;
  using ScopedLongTaskFromLongAnimationFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kLongTaskFromLongAnimationFrameFlagIndex>;
  using ScopedMacCharacterFallbackCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMacCharacterFallbackCacheFlagIndex>;
  using ScopedMacDisableCtrlHomeEnd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMacDisableCtrlHomeEndFlagIndex>;
  using ScopedMacFontWeightFromOS2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMacFontWeightFromOS2FlagIndex>;
  using ScopedMachineLearningNeuralNetwork = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMachineLearningNeuralNetworkFlagIndex>;
  using ScopedManagedConfiguration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kManagedConfigurationFlagIndex>;
  using ScopedManualText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kManualTextFlagIndex>;
  using ScopedMarginTrim = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMarginTrimFlagIndex>;
  using ScopedMarkAncestorsOnDisplayLockUnlock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMarkAncestorsOnDisplayLockUnlockFlagIndex>;
  using ScopedMaskDeserializationTimeForCrossOriginMessages = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMaskDeserializationTimeForCrossOriginMessagesFlagIndex>;
  using ScopedMaskWaitForAllImages = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMaskWaitForAllImagesFlagIndex>;
  using ScopedMathMLAnchorElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMathMLAnchorElementFlagIndex>;
  using ScopedMathMLOperatorRTLMirroring = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMathMLOperatorRTLMirroringFlagIndex>;
  using ScopedMeasureMemory = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMeasureMemoryFlagIndex>;
  using ScopedMediaCapabilitiesEncodingInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCapabilitiesEncodingInfoFlagIndex>;
  using ScopedMediaCapabilitiesSpatialAudio = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCapabilitiesSpatialAudioFlagIndex>;
  using ScopedMediaCaptionSettingsButton = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptionSettingsButtonFlagIndex>;
  using ScopedMediaCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptureFlagIndex>;
  using ScopedMediaCaptureBackgroundBlur = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptureBackgroundBlurFlagIndex>;
  using ScopedMediaCaptureCameraControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptureCameraControlsFlagIndex>;
  using ScopedMediaCaptureConfigurationChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptureConfigurationChangeFlagIndex>;
  using ScopedMediaCaptureElementPreview = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptureElementPreviewFlagIndex>;
  using ScopedMediaCaptureVoiceIsolation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaCaptureVoiceIsolationFlagIndex>;
  using ScopedMediaControlsExpandGesture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaControlsExpandGestureFlagIndex>;
  using ScopedMediaControlsOverlayPlayButton = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaControlsOverlayPlayButtonFlagIndex>;
  using ScopedMediaElementMutedDefaultState = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaElementMutedDefaultStateFlagIndex>;
  using ScopedMediaElementVolumeGreaterThanOne = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaElementVolumeGreaterThanOneFlagIndex>;
  using ScopedMediaEngagementBypassAutoplayPolicies = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaEngagementBypassAutoplayPoliciesFlagIndex>;
  using ScopedMediaLatencyHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaLatencyHintFlagIndex>;
  using ScopedMediaPlaybackWhileNotVisiblePermissionPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaPlaybackWhileNotVisiblePermissionPolicyFlagIndex>;
  using ScopedMediaQueryNavigationControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaQueryNavigationControlsFlagIndex>;
  using ScopedMediaSession = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaSessionFlagIndex>;
  using ScopedMediaSessionChapterInformation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaSessionChapterInformationFlagIndex>;
  using ScopedMediaSourceExperimental = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaSourceExperimentalFlagIndex>;
  using ScopedMediaSourceExtensionsForWebCodecs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaSourceExtensionsForWebCodecsFlagIndex>;
  using ScopedMediaStreamTrackProcessorStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaStreamTrackProcessorStatsFlagIndex>;
  using ScopedMediaStreamTrackTransfer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaStreamTrackTransferFlagIndex>;
  using ScopedMediaStreamTrackWebSpeech = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMediaStreamTrackWebSpeechFlagIndex>;
  using ScopedMemoryConsumerForNGShapeCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMemoryConsumerForNGShapeCacheFlagIndex>;
  using ScopedMenuElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMenuElementsFlagIndex>;
  using ScopedMessagePortCloseEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMessagePortCloseEventFlagIndex>;
  using ScopedMiddleClickAutoscroll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMiddleClickAutoscrollFlagIndex>;
  using ScopedMixedContentAutoupgradesUseIsMixedContentRestrictedInFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMixedContentAutoupgradesUseIsMixedContentRestrictedInFrameFlagIndex>;
  using ScopedMobileLayoutTheme = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMobileLayoutThemeFlagIndex>;
  using ScopedModifyParagraphCrossEditingoundary = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kModifyParagraphCrossEditingoundaryFlagIndex>;
  using ScopedModuleMapDoNotCacheFailedFetch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kModuleMapDoNotCacheFailedFetchFlagIndex>;
  using ScopedModulePreloadReferrer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kModulePreloadReferrerFlagIndex>;
  using ScopedModulePreloadStyleJson = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kModulePreloadStyleJsonFlagIndex>;
  using ScopedMojoJS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMojoJSFlagIndex>;
  using ScopedMojoJSTest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMojoJSTestFlagIndex>;
  using ScopedMonospaceGlyphCompaction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMonospaceGlyphCompactionFlagIndex>;
  using ScopedMoveEndingSelectionToListChild = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMoveEndingSelectionToListChildFlagIndex>;
  using ScopedMoveParagraphsPreserveInlineStructure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMoveParagraphsPreserveInlineStructureFlagIndex>;
  using ScopedMulticolColumnWidthMaxContentClamp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kMulticolColumnWidthMaxContentClampFlagIndex>;
  using ScopedNastaliqScript = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNastaliqScriptFlagIndex>;
  using ScopedNavigateEventDeferCrossDocumentCommit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNavigateEventDeferCrossDocumentCommitFlagIndex>;
  using ScopedNavigationEventTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNavigationEventTimingFlagIndex>;
  using ScopedNavigationSourcePseudoClass = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNavigationSourcePseudoClassFlagIndex>;
  using ScopedNavigationTimingRedirectTimingViaTAO = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNavigationTimingRedirectTimingViaTAOFlagIndex>;
  using ScopedNavigationTypeAndPhase = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNavigationTypeAndPhaseFlagIndex>;
  using ScopedNavigatorContentUtils = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNavigatorContentUtilsFlagIndex>;
  using ScopedNetInfoConstantType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNetInfoConstantTypeFlagIndex>;
  using ScopedNetInfoDownlinkMax = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNetInfoDownlinkMaxFlagIndex>;
  using ScopedNeutralKeyframeEasingCompliance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNeutralKeyframeEasingComplianceFlagIndex>;
  using ScopedNewAnimationCompositingChecking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNewAnimationCompositingCheckingFlagIndex>;
  using ScopedNewAnimationDispositionReporting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNewAnimationDispositionReportingFlagIndex>;
  using ScopedNewHTMLSettingMethods = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNewHTMLSettingMethodsFlagIndex>;
  using ScopedNodeIteratorRemovalFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNodeIteratorRemovalFixFlagIndex>;
  using ScopedNoExtendSelectionToUserSelectNoneOutOfFlow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNoExtendSelectionToUserSelectNoneOutOfFlowFlagIndex>;
  using ScopedNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableFlagIndex>;
  using ScopedNoFontAntialiasing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNoFontAntialiasingFlagIndex>;
  using ScopedNoIdleEncodingForWebTests = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNoIdleEncodingForWebTestsFlagIndex>;
  using ScopedNoNbspForInterElementSpaceOnCopy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNoNbspForInterElementSpaceOnCopyFlagIndex>;
  using ScopedNonEmptyBlockquotesOnOutdenting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNonEmptyBlockquotesOnOutdentingFlagIndex>;
  using ScopedNonEmptyVisibleTextSelectionForTextFragment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNonEmptyVisibleTextSelectionForTextFragmentFlagIndex>;
  using ScopedNonStandardAppearanceValueSliderVertical = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNonStandardAppearanceValueSliderVerticalFlagIndex>;
  using ScopedNormalizeLineEndingsInInsertText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNormalizeLineEndingsInInsertTextFlagIndex>;
  using ScopedNoSynchronousThrowForCrossOriginBlockedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNoSynchronousThrowForCrossOriginBlockedWorkerFlagIndex>;
  using ScopedNotificationConstructor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNotificationConstructorFlagIndex>;
  using ScopedNotificationContentImage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNotificationContentImageFlagIndex>;
  using ScopedNotifications = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNotificationsFlagIndex>;
  using ScopedNotificationTriggers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNotificationTriggersFlagIndex>;
  using ScopedNotifySelectionControllerOnUnchangedSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNotifySelectionControllerOnUnchangedSelectionFlagIndex>;
  using ScopedNumberInputFullWidthChars = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kNumberInputFullWidthCharsFlagIndex>;
  using ScopedOfflineAudioContextIncrementalRendering = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOfflineAudioContextIncrementalRenderingFlagIndex>;
  using ScopedOffscreenCanvasGetContextAttributes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOffscreenCanvasGetContextAttributesFlagIndex>;
  using ScopedOffsetMappingReuseFullWidthSpaceFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOffsetMappingReuseFullWidthSpaceFixFlagIndex>;
  using ScopedOffsetPathTransformUpdateFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOffsetPathTransformUpdateFixFlagIndex>;
  using ScopedOmitBlurEventOnElementRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOmitBlurEventOnElementRemovalFlagIndex>;
  using ScopedOmitSubframeDetachmentEventsOnRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOmitSubframeDetachmentEventsOnRemovalFlagIndex>;
  using ScopedOnDeviceWebSpeechAvailable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOnDeviceWebSpeechAvailableFlagIndex>;
  using ScopedOnDeviceWebSpeechQuality = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOnDeviceWebSpeechQualityFlagIndex>;
  using ScopedOofLayoutRequiresSideEffects = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOofLayoutRequiresSideEffectsFlagIndex>;
  using ScopedOpaqueRange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOpaqueRangeFlagIndex>;
  using ScopedOpenPopoverInvokerRestrictToSameTreeScope = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOpenPopoverInvokerRestrictToSameTreeScopeFlagIndex>;
  using ScopedOptionDisablednessCheckAncestors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOptionDisablednessCheckAncestorsFlagIndex>;
  using ScopedOrientationEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOrientationEventFlagIndex>;
  using ScopedOriginAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginAPIFlagIndex>;
  using ScopedOriginIsolationHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginIsolationHeaderFlagIndex>;
  using ScopedOriginPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginPolicyFlagIndex>;
  using ScopedOriginTrialsSampleAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIFlagIndex>;
  using ScopedOriginTrialsSampleAPIBrowserReadWrite = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIBrowserReadWriteFlagIndex>;
  using ScopedOriginTrialsSampleAPIDependent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIDependentFlagIndex>;
  using ScopedOriginTrialsSampleAPIDeprecation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIDeprecationFlagIndex>;
  using ScopedOriginTrialsSampleAPIExpiryGracePeriod = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIExpiryGracePeriodFlagIndex>;
  using ScopedOriginTrialsSampleAPIExpiryGracePeriodThirdParty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIExpiryGracePeriodThirdPartyFlagIndex>;
  using ScopedOriginTrialsSampleAPIImplied = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIImpliedFlagIndex>;
  using ScopedOriginTrialsSampleAPIInvalidOS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIInvalidOSFlagIndex>;
  using ScopedOriginTrialsSampleAPINavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPINavigationFlagIndex>;
  using ScopedOriginTrialsSampleAPIPersistentExpiryGracePeriod = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIPersistentExpiryGracePeriodFlagIndex>;
  using ScopedOriginTrialsSampleAPIPersistentFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIPersistentFeatureFlagIndex>;
  using ScopedOriginTrialsSampleAPIPersistentInvalidOS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIPersistentInvalidOSFlagIndex>;
  using ScopedOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureFlagIndex>;
  using ScopedOriginTrialsSampleAPIThirdParty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOriginTrialsSampleAPIThirdPartyFlagIndex>;
  using ScopedOutlineDrawAutoStyleZeroWidth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOutlineDrawAutoStyleZeroWidthFlagIndex>;
  using ScopedOverlayGlobalRuleRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOverlayGlobalRuleRemovalFlagIndex>;
  using ScopedOverlayProperty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOverlayPropertyFlagIndex>;
  using ScopedOverscrollAreas = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kOverscrollAreasFlagIndex>;
  using ScopedPagePopup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPagePopupFlagIndex>;
  using ScopedPagePopupCopyPaste = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPagePopupCopyPasteFlagIndex>;
  using ScopedPageSwapEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPageSwapEventFlagIndex>;
  using ScopedPaintCaretAfterInnerEditorPaint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaintCaretAfterInnerEditorPaintFlagIndex>;
  using ScopedPaintHoldingForIframes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaintHoldingForIframesFlagIndex>;
  using ScopedPaintTimingContentImagePseudoElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaintTimingContentImagePseudoElementsFlagIndex>;
  using ScopedPaintUnderInvalidationChecking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaintUnderInvalidationCheckingFlagIndex>;
  using ScopedParakeet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kParakeetFlagIndex>;
  using ScopedPartitionVisitedLinkDatabaseWithSelfLinks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPartitionVisitedLinkDatabaseWithSelfLinksFlagIndex>;
  using ScopedPasswordReveal = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPasswordRevealFlagIndex>;
  using ScopedPaymentApp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaymentAppFlagIndex>;
  using ScopedPaymentHandlerStaticCustomSize = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaymentHandlerStaticCustomSizeFlagIndex>;
  using ScopedPaymentLinkDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaymentLinkDetectionFlagIndex>;
  using ScopedPaymentMethodChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaymentMethodChangeEventFlagIndex>;
  using ScopedPaymentRequest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaymentRequestFlagIndex>;
  using ScopedPaymentRequestNonFullyActiveDocumentCheckInvalidStateError = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorFlagIndex>;
  using ScopedPerformanceManagerInstrumentation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPerformanceManagerInstrumentationFlagIndex>;
  using ScopedPerformanceMarkCustomUserTimingFromSubframe = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPerformanceMarkCustomUserTimingFromSubframeFlagIndex>;
  using ScopedPerformanceMarkFeatureUsage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPerformanceMarkFeatureUsageFlagIndex>;
  using ScopedPeriodicBackgroundSync = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPeriodicBackgroundSyncFlagIndex>;
  using ScopedPerMethodCanMakePaymentQuota = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPerMethodCanMakePaymentQuotaFlagIndex>;
  using ScopedPermissionsPolicyAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPermissionsPolicyAPIFlagIndex>;
  using ScopedPermissionsPolicyForSharedWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPermissionsPolicyForSharedWorkersFlagIndex>;
  using ScopedPermissionsRequestRevoke = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPermissionsRequestRevokeFlagIndex>;
  using ScopedPersistentWidgetAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPersistentWidgetAPIFlagIndex>;
  using ScopedPNaCl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPNaClFlagIndex>;
  using ScopedPointerLockOnAndroid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPointerLockOnAndroidFlagIndex>;
  using ScopedPointerRawUpdateOnlyInSecureContext = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPointerRawUpdateOnlyInSecureContextFlagIndex>;
  using ScopedPopoverHintNestedShowException = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPopoverHintNestedShowExceptionFlagIndex>;
  using ScopedPopoverHintNewBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPopoverHintNewBehaviorFlagIndex>;
  using ScopedPopupWidgetRequiresUserActivation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPopupWidgetRequiresUserActivationFlagIndex>;
  using ScopedPositionOutsideTabSpanCheckSiblingNode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPositionOutsideTabSpanCheckSiblingNodeFlagIndex>;
  using ScopedPositionVisibilityIgnoreNonClipAncestors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPositionVisibilityIgnoreNonClipAncestorsFlagIndex>;
  using ScopedPositionVisibilitySingularValues = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPositionVisibilitySingularValuesFlagIndex>;
  using ScopedPotentialPermissionsPolicyReporting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPotentialPermissionsPolicyReportingFlagIndex>;
  using ScopedPreciseMemoryInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreciseMemoryInfoFlagIndex>;
  using ScopedPreferDefaultScrollbarStyles = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreferDefaultScrollbarStylesFlagIndex>;
  using ScopedPreferNonCompositedScrolling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreferNonCompositedScrollingFlagIndex>;
  using ScopedPreferredAudioOutputDevices = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreferredAudioOutputDevicesFlagIndex>;
  using ScopedPrefersReducedData = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrefersReducedDataFlagIndex>;
  using ScopedPrefetchAndPrerenderActivationBeacon = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrefetchAndPrerenderActivationBeaconFlagIndex>;
  using ScopedPreloadLinkRelDataUrls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreloadLinkRelDataUrlsFlagIndex>;
  using ScopedPreloadScannerImprovements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreloadScannerImprovementsFlagIndex>;
  using ScopedPrePaintBoxInvalidatorUsesFragments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrePaintBoxInvalidatorUsesFragmentsFlagIndex>;
  using ScopedPrerender2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrerender2FlagIndex>;
  using ScopedPrerender2CrossOriginIframes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrerender2CrossOriginIframesFlagIndex>;
  using ScopedPrerenderActivationByFormSubmission = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrerenderActivationByFormSubmissionFlagIndex>;
  using ScopedPrerenderUntilScript = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrerenderUntilScriptFlagIndex>;
  using ScopedPresentation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPresentationFlagIndex>;
  using ScopedPreserveHtmlEquivalentTagsInTypingStyle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreserveHtmlEquivalentTagsInTypingStyleFlagIndex>;
  using ScopedPreserveUnfocusedSelectionCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreserveUnfocusedSelectionCacheFlagIndex>;
  using ScopedPreventTextSelectionJump = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPreventTextSelectionJumpFlagIndex>;
  using ScopedPrivateNetworkAccessNullIpAddress = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrivateNetworkAccessNullIpAddressFlagIndex>;
  using ScopedPrivateStateTokens = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrivateStateTokensFlagIndex>;
  using ScopedPrivateStateTokensAlwaysAllowIssuance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPrivateStateTokensAlwaysAllowIssuanceFlagIndex>;
  using ScopedProfilerAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kProfilerAPIFlagIndex>;
  using ScopedProfilerAPIForDedicatedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kProfilerAPIForDedicatedWorkerFlagIndex>;
  using ScopedProgrammaticScrollPromise = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kProgrammaticScrollPromiseFlagIndex>;
  using ScopedProgressEventInServiceWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kProgressEventInServiceWorkerFlagIndex>;
  using ScopedPropagateOverscrollBehaviorFromRoot = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPropagateOverscrollBehaviorFromRootFlagIndex>;
  using ScopedPseudoElementsFocusable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPseudoElementsFocusableFlagIndex>;
  using ScopedPseudoElementsHitTestable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPseudoElementsHitTestableFlagIndex>;
  using ScopedPseudoElementsHoverable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPseudoElementsHoverableFlagIndex>;
  using ScopedPushMessageDataBytes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPushMessageDataBytesFlagIndex>;
  using ScopedPushMessaging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPushMessagingFlagIndex>;
  using ScopedPushMessagingSubscriptionChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kPushMessagingSubscriptionChangeFlagIndex>;
  using ScopedQuotaExceededErrorUpdate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kQuotaExceededErrorUpdateFlagIndex>;
  using ScopedRadioButtonCircularBorderRadius = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRadioButtonCircularBorderRadiusFlagIndex>;
  using ScopedRangeBoundaryFastPath = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRangeBoundaryFastPathFlagIndex>;
  using ScopedRasterInducingScroll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRasterInducingScrollFlagIndex>;
  using ScopedRateLimitPointerLockRequests = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRateLimitPointerLockRequestsFlagIndex>;
  using ScopedReadableStreamBYOBReaderReadMinOption = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReadableStreamBYOBReaderReadMinOptionFlagIndex>;
  using ScopedReadClipboardDataOnClipboardItemGetType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReadClipboardDataOnClipboardItemGetTypeFlagIndex>;
  using ScopedReadingFlowWithSlots = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReadingFlowWithSlotsFlagIndex>;
  using ScopedReadOnlyTextControlSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReadOnlyTextControlSelectionFlagIndex>;
  using ScopedRecheckParentDuringNodeVectorInsertion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRecheckParentDuringNodeVectorInsertionFlagIndex>;
  using ScopedReduceAcceptLanguage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReduceAcceptLanguageFlagIndex>;
  using ScopedReduceUserAgentMinorVersion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReduceUserAgentMinorVersionFlagIndex>;
  using ScopedRegionCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRegionCaptureFlagIndex>;
  using ScopedRelatedWebsitePartitionAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRelatedWebsitePartitionAPIFlagIndex>;
  using ScopedReleasePaintHoldingWithoutContentfulPaint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReleasePaintHoldingWithoutContentfulPaintFlagIndex>;
  using ScopedRelOpenerBcgDependencyHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRelOpenerBcgDependencyHintFlagIndex>;
  using ScopedRemotePlayback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemotePlaybackFlagIndex>;
  using ScopedRemotePlaybackBackend = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemotePlaybackBackendFlagIndex>;
  using ScopedRemoveCharsetAutoDetectionForISO2022JP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveCharsetAutoDetectionForISO2022JPFlagIndex>;
  using ScopedRemoveChildrenInReplaceChildren = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveChildrenInReplaceChildrenFlagIndex>;
  using ScopedRemoveCollapsedPlaceholderForContentEditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveCollapsedPlaceholderForContentEditableFlagIndex>;
  using ScopedRemoveDanglingMarkupInTarget = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveDanglingMarkupInTargetFlagIndex>;
  using ScopedRemoveDataUrlInSvgUse = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveDataUrlInSvgUseFlagIndex>;
  using ScopedRemoveNonAllowlistedCreateEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveNonAllowlistedCreateEventFlagIndex>;
  using ScopedRemoveScrollNodeWorkaround = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveScrollNodeWorkaroundFlagIndex>;
  using ScopedRemoveVisibleSelectionInDOMSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRemoveVisibleSelectionInDOMSelectionFlagIndex>;
  using ScopedRenderPriorityAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRenderPriorityAttributeFlagIndex>;
  using ScopedReplaceChildrenWithFragmentFastPath = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReplaceChildrenWithFragmentFastPathFlagIndex>;
  using ScopedReplaceCompositionActualInsertedLength = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReplaceCompositionActualInsertedLengthFlagIndex>;
  using ScopedReplacedNormalFlowStackingInlinePaint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReplacedNormalFlowStackingInlinePaintFlagIndex>;
  using ScopedReportFirstFrameTimeAsRenderTime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReportFirstFrameTimeAsRenderTimeFlagIndex>;
  using ScopedReportLayoutShiftRectsInCssPixels = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kReportLayoutShiftRectsInCssPixelsFlagIndex>;
  using ScopedRequestIsReloadNavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRequestIsReloadNavigationFlagIndex>;
  using ScopedResourceTimingInitiator = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kResourceTimingInitiatorFlagIndex>;
  using ScopedResourceTimingUseCORSForBodySizes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kResourceTimingUseCORSForBodySizesFlagIndex>;
  using ScopedRespectOverscrollBehaviorForScrollBubbling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRespectOverscrollBehaviorForScrollBubblingFlagIndex>;
  using ScopedResponsiveIframes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kResponsiveIframesFlagIndex>;
  using ScopedResponsiveIframesShrink = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kResponsiveIframesShrinkFlagIndex>;
  using ScopedResponsiveIframesSingleAxisIcb = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kResponsiveIframesSingleAxisIcbFlagIndex>;
  using ScopedRestrictGamepadAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRestrictGamepadAccessFlagIndex>;
  using ScopedRestrictOwnAudio = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRestrictOwnAudioFlagIndex>;
  using ScopedRootScrollbarFollowsBrowserTheme = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRootScrollbarFollowsBrowserThemeFlagIndex>;
  using ScopedRouteMatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRouteMatchingFlagIndex>;
  using ScopedRtcAlwaysNegotiateDataChannels = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRtcAlwaysNegotiateDataChannelsFlagIndex>;
  using ScopedRtcAudioJitterBufferMaxPackets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRtcAudioJitterBufferMaxPacketsFlagIndex>;
  using ScopedRTCConfigurationIceTransports = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCConfigurationIceTransportsFlagIndex>;
  using ScopedRTCDataChannelPriority = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCDataChannelPriorityFlagIndex>;
  using ScopedRTCDiagnosticLogging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCDiagnosticLoggingFlagIndex>;
  using ScopedRTCEncodedAudioFrameConstructor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedAudioFrameConstructorFlagIndex>;
  using ScopedRTCEncodedFrameAudioLevel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedFrameAudioLevelFlagIndex>;
  using ScopedRTCEncodedFrameSetMetadata = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedFrameSetMetadataFlagIndex>;
  using ScopedRTCEncodedFrameTimestamps = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedFrameTimestampsFlagIndex>;
  using ScopedRTCEncodedSource = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedSourceFlagIndex>;
  using ScopedRTCEncodedVideoFrameAdditionalMetadata = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedVideoFrameAdditionalMetadataFlagIndex>;
  using ScopedRTCEncodedVideoFrameConstructor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCEncodedVideoFrameConstructorFlagIndex>;
  using ScopedRTCJitterBufferTarget = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCJitterBufferTargetFlagIndex>;
  using ScopedRTCLegacyCallbackBasedGetStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCLegacyCallbackBasedGetStatsFlagIndex>;
  using ScopedRTCLegacyDiagnosticLogging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCLegacyDiagnosticLoggingFlagIndex>;
  using ScopedRTCRtpEncodingParametersCodec = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCRtpEncodingParametersCodecFlagIndex>;
  using ScopedRtcRtpHeaderEncryptionPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRtcRtpHeaderEncryptionPolicyFlagIndex>;
  using ScopedRTCRtpScaleResolutionDownTo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCRtpScaleResolutionDownToFlagIndex>;
  using ScopedRTCRtpScriptTransform = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCRtpScriptTransformFlagIndex>;
  using ScopedRTCRtpTransport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCRtpTransportFlagIndex>;
  using ScopedRTCStatsRelativePacketArrivalDelay = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCStatsRelativePacketArrivalDelayFlagIndex>;
  using ScopedRTCSvcScalabilityMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRTCSvcScalabilityModeFlagIndex>;
  using ScopedRubyTextDecorationSpacing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRubyTextDecorationSpacingFlagIndex>;
  using ScopedRunMicrotaskBeforeXmlScript = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRunMicrotaskBeforeXmlScriptFlagIndex>;
  using ScopedRunSnapshotPostLayoutStateSteps = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kRunSnapshotPostLayoutStateStepsFlagIndex>;
  using ScopedSanitizeIDNEmailFormInput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSanitizeIDNEmailFormInputFlagIndex>;
  using ScopedSanitizerAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSanitizerAPIFlagIndex>;
  using ScopedSanitizeWorkerErrorPropagation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSanitizeWorkerErrorPropagationFlagIndex>;
  using ScopedScopedViewTransitionSizeContainment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScopedViewTransitionSizeContainmentFlagIndex>;
  using ScopedScoreLineBreakerAbort = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScoreLineBreakerAbortFlagIndex>;
  using ScopedScreenDetailedHdrHeadroom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScreenDetailedHdrHeadroomFlagIndex>;
  using ScopedScriptBasedOnUnicodeBlock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScriptBasedOnUnicodeBlockFlagIndex>;
  using ScopedScriptedSpeechRecognition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScriptedSpeechRecognitionFlagIndex>;
  using ScopedScriptedSpeechSynthesis = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScriptedSpeechSynthesisFlagIndex>;
  using ScopedScrollAnchorSerializationUseParentForTextNode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollAnchorSerializationUseParentForTextNodeFlagIndex>;
  using ScopedScrollAxisLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollAxisLockFlagIndex>;
  using ScopedScrollbarColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollbarColorFlagIndex>;
  using ScopedScrollbarGutterBugFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollbarGutterBugFixFlagIndex>;
  using ScopedScrollbarWidth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollbarWidthFlagIndex>;
  using ScopedScrollIntoViewAlignAuto = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollIntoViewAlignAutoFlagIndex>;
  using ScopedScrollIntoViewNearest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollIntoViewNearestFlagIndex>;
  using ScopedScrollIntoViewNoInitialFocusNavigationStartingPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollIntoViewNoInitialFocusNavigationStartingPointFlagIndex>;
  using ScopedScrollIntoViewRootFrameViewportBugFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollIntoViewRootFrameViewportBugFixFlagIndex>;
  using ScopedScrollPerformanceTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollPerformanceTimingFlagIndex>;
  using ScopedScrollTimelineCurrentTime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollTimelineCurrentTimeFlagIndex>;
  using ScopedScrollTimelineNamedRangeScroll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollTimelineNamedRangeScrollFlagIndex>;
  using ScopedScrollTopLeftInterop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollTopLeftInteropFlagIndex>;
  using ScopedScrollToTextFragmentDirectiveLimit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollToTextFragmentDirectiveLimitFlagIndex>;
  using ScopedScrollVisibilityHiddenScrollers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kScrollVisibilityHiddenScrollersFlagIndex>;
  using ScopedSearchTextHighlightPseudo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSearchTextHighlightPseudoFlagIndex>;
  using ScopedSecurePaymentConfirmation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSecurePaymentConfirmationFlagIndex>;
  using ScopedSecurePaymentConfirmationAvailabilityAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSecurePaymentConfirmationAvailabilityAPIFlagIndex>;
  using ScopedSecurePaymentConfirmationCapabilities = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSecurePaymentConfirmationCapabilitiesFlagIndex>;
  using ScopedSecurePaymentConfirmationDebug = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSecurePaymentConfirmationDebugFlagIndex>;
  using ScopedSecurePaymentConfirmationExtensionsDisallowForThirdParties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSecurePaymentConfirmationExtensionsDisallowForThirdPartiesFlagIndex>;
  using ScopedSecurePaymentConfirmationOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSecurePaymentConfirmationOptOutFlagIndex>;
  using ScopedSelectAnchorInViewport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectAnchorInViewportFlagIndex>;
  using ScopedSelectAudioOutput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectAudioOutputFlagIndex>;
  using ScopedSelectedcontentelementAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectedcontentelementAttributeFlagIndex>;
  using ScopedSelectedcontentMultiple = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectedcontentMultipleFlagIndex>;
  using ScopedSelectedcontentSpec2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectedcontentSpec2FlagIndex>;
  using ScopedSelectionAndFocusedVisiblePositionMatch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionAndFocusedVisiblePositionMatchFlagIndex>;
  using ScopedSelectionCollapsedDirectionNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionCollapsedDirectionNoneFlagIndex>;
  using ScopedSelectionEditingBoundarySlottedContent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionEditingBoundarySlottedContentFlagIndex>;
  using ScopedSelectionFocusAffinity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionFocusAffinityFlagIndex>;
  using ScopedSelectionHandleWithBottomClipped = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionHandleWithBottomClippedFlagIndex>;
  using ScopedSelectionRemoveRangeNotFoundError = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionRemoveRangeNotFoundErrorFlagIndex>;
  using ScopedSelectionSetBaseAndExtentNonNullNode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectionSetBaseAndExtentNonNullNodeFlagIndex>;
  using ScopedSelectivePermissionsIntervention = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectivePermissionsInterventionFlagIndex>;
  using ScopedSelectLabelClickOpensPicker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectLabelClickOpensPickerFlagIndex>;
  using ScopedSelectPopupBackground = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectPopupBackgroundFlagIndex>;
  using ScopedSelectRemoveOverflowHidden = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectRemoveOverflowHiddenFlagIndex>;
  using ScopedSelectUsesFlatTree = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSelectUsesFlatTreeFlagIndex>;
  using ScopedSendBeaconThrowForBlobWithNonSimpleType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSendBeaconThrowForBlobWithNonSimpleTypeFlagIndex>;
  using ScopedSendEarlyLastBeginMainFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSendEarlyLastBeginMainFrameFlagIndex>;
  using ScopedSendSlotChangeSignalAfterNodeInserted = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSendSlotChangeSignalAfterNodeInsertedFlagIndex>;
  using ScopedSensorExtraClasses = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSensorExtraClassesFlagIndex>;
  using ScopedSeparateDeferModuleScriptTasks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSeparateDeferModuleScriptTasksFlagIndex>;
  using ScopedSequentialFocusPrimitives = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSequentialFocusPrimitivesFlagIndex>;
  using ScopedSequentialFocusPrimitivesShadowRoots = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSequentialFocusPrimitivesShadowRootsFlagIndex>;
  using ScopedSerial = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSerialFlagIndex>;
  using ScopedSerializeInvalidSelectorsInForgivingSelectorList = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSerializeInvalidSelectorsInForgivingSelectorListFlagIndex>;
  using ScopedSerializeViewTransitionStateInSPA = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSerializeViewTransitionStateInSPAFlagIndex>;
  using ScopedSerialPortConnected = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSerialPortConnectedFlagIndex>;
  using ScopedServiceWorkerBackgroundSyncInDedicatedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerBackgroundSyncInDedicatedWorkerFlagIndex>;
  using ScopedServiceWorkerClientLifecycleState = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerClientLifecycleStateFlagIndex>;
  using ScopedServiceWorkerCodeCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerCodeCacheFlagIndex>;
  using ScopedServiceWorkerCodeCacheHashing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerCodeCacheHashingFlagIndex>;
  using ScopedServiceWorkerInDedicatedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerInDedicatedWorkerFlagIndex>;
  using ScopedServiceWorkerScriptEncoding = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerScriptEncodingFlagIndex>;
  using ScopedServiceWorkerStaticRouterTimingInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kServiceWorkerStaticRouterTimingInfoFlagIndex>;
  using ScopedSetHTMLCanRunScripts = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSetHTMLCanRunScriptsFlagIndex>;
  using ScopedSetSequentialFocusStartingPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSetSequentialFocusStartingPointFlagIndex>;
  using ScopedSetShape = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSetShapeFlagIndex>;
  using ScopedShadowRootAdoptedStyleSheet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kShadowRootAdoptedStyleSheetFlagIndex>;
  using ScopedShadowRootNamespaceCheck = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kShadowRootNamespaceCheckFlagIndex>;
  using ScopedShadowRootReferenceTarget = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kShadowRootReferenceTargetFlagIndex>;
  using ScopedShadowRootReferenceTargetAriaOwns = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kShadowRootReferenceTargetAriaOwnsFlagIndex>;
  using ScopedShadowRootSlotAssignment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kShadowRootSlotAssignmentFlagIndex>;
  using ScopedSharedArrayBuffer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSharedArrayBufferFlagIndex>;
  using ScopedSharedArrayBufferUnrestrictedAccessAllowed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSharedArrayBufferUnrestrictedAccessAllowedFlagIndex>;
  using ScopedSharedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSharedWorkerFlagIndex>;
  using ScopedSharedWorkerExtendedLifetime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSharedWorkerExtendedLifetimeFlagIndex>;
  using ScopedSideRelativeBackgroundPosition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSideRelativeBackgroundPositionFlagIndex>;
  using ScopedSignatureBasedInlineIntegrity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSignatureBasedInlineIntegrityFlagIndex>;
  using ScopedSingleAxisScrollContainers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSingleAxisScrollContainersFlagIndex>;
  using ScopedSingleAxisScrollContainersForScrollSnap = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSingleAxisScrollContainersForScrollSnapFlagIndex>;
  using ScopedSkipAd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipAdFlagIndex>;
  using ScopedSkipCallbacksWhenDevToolsNotOpen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipCallbacksWhenDevToolsNotOpenFlagIndex>;
  using ScopedSkipCompositingStaticBackdropFilterAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipCompositingStaticBackdropFilterAnimationFlagIndex>;
  using ScopedSkipEventCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipEventCaptureFlagIndex>;
  using ScopedSkipHtmlInterchangeInForeignContent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipHtmlInterchangeInForeignContentFlagIndex>;
  using ScopedSkipInitialForcedScrollbar = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipInitialForcedScrollbarFlagIndex>;
  using ScopedSkipPaintInvalidationWhileStayingInvisible = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipPaintInvalidationWhileStayingInvisibleFlagIndex>;
  using ScopedSkipStaleUndoStepsInIdleSpellCheck = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipStaleUndoStepsInIdleSpellCheckFlagIndex>;
  using ScopedSkipTickingStaticAnimations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipTickingStaticAnimationsFlagIndex>;
  using ScopedSkipTouchEventFilter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipTouchEventFilterFlagIndex>;
  using ScopedSkipUnselectableElementsInParagraphBoundary = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSkipUnselectableElementsInParagraphBoundaryFlagIndex>;
  using ScopedSmallerViewportUnits = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSmallerViewportUnitsFlagIndex>;
  using ScopedSmartCard = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSmartCardFlagIndex>;
  using ScopedSmartCardContextRelease = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSmartCardContextReleaseFlagIndex>;
  using ScopedSmartZoom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSmartZoomFlagIndex>;
  using ScopedSnapshotScrollTimelinesPostLayout = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSnapshotScrollTimelinesPostLayoutFlagIndex>;
  using ScopedSortedLayoutShiftSourcesByImpactArea = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSortedLayoutShiftSourcesByImpactAreaFlagIndex>;
  using ScopedSourceSpecificMulticastInDirectSockets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSourceSpecificMulticastInDirectSocketsFlagIndex>;
  using ScopedSpatNavUsesCursorInheritance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpatNavUsesCursorInheritanceFlagIndex>;
  using ScopedSpeakerSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpeakerSelectionFlagIndex>;
  using ScopedSpecCompliantXmlMimeTypes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpecCompliantXmlMimeTypesFlagIndex>;
  using ScopedSpeculationMeasurement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpeculationMeasurementFlagIndex>;
  using ScopedSpeculationRulesModerateViewportHeuristicsControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpeculationRulesModerateViewportHeuristicsControlFlagIndex>;
  using ScopedSpellCheckChunking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpellCheckChunkingFlagIndex>;
  using ScopedSpellCheckCustomDictionaryAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSpellCheckCustomDictionaryAPIFlagIndex>;
  using ScopedSplitQualifiedNameOnFirstColon = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSplitQualifiedNameOnFirstColonFlagIndex>;
  using ScopedSplitTextNotCleanupDummySpans = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSplitTextNotCleanupDummySpansFlagIndex>;
  using ScopedSrcsetSelectionMatchesImageSet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSrcsetSelectionMatchesImageSetFlagIndex>;
  using ScopedSrcsetTwoDimensionalSizes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSrcsetTwoDimensionalSizesFlagIndex>;
  using ScopedStableBlinkFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStableBlinkFeaturesFlagIndex>;
  using ScopedStackingContextIsNotStacked = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStackingContextIsNotStackedFlagIndex>;
  using ScopedStaleImageNaturalSizeDuringRevalidation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStaleImageNaturalSizeDuringRevalidationFlagIndex>;
  using ScopedStaleIntersectionGeometryForThrottledFrames = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStaleIntersectionGeometryForThrottledFramesFlagIndex>;
  using ScopedStandardizedBrowserZoom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStandardizedBrowserZoomFlagIndex>;
  using ScopedStandardizedBrowserZoomOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStandardizedBrowserZoomOptOutFlagIndex>;
  using ScopedStickyUserActivationAcrossSameOriginNavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStickyUserActivationAcrossSameOriginNavigationFlagIndex>;
  using ScopedStorageBuckets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStorageBucketsFlagIndex>;
  using ScopedStorageBucketsDurability = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStorageBucketsDurabilityFlagIndex>;
  using ScopedStorageBucketsLocks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStorageBucketsLocksFlagIndex>;
  using ScopedStrictMimeTypesForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStrictMimeTypesForWorkersFlagIndex>;
  using ScopedStyleResourceFetcherIdentityCheck = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStyleResourceFetcherIdentityCheckFlagIndex>;
  using ScopedStylusHandwriting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kStylusHandwritingFlagIndex>;
  using ScopedSubApps = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSubAppsFlagIndex>;
  using ScopedSubframeMouseCaptureOwner = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSubframeMouseCaptureOwnerFlagIndex>;
  using ScopedSuppressFullscreenFromUnfocusedView = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSuppressFullscreenFromUnfocusedViewFlagIndex>;
  using ScopedSuppressPointerStreamAfterDrag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSuppressPointerStreamAfterDragFlagIndex>;
  using ScopedSvgAnimateMotionDiscreteCalcMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgAnimateMotionDiscreteCalcModeFlagIndex>;
  using ScopedSvgAvoidResettingFilterQualityForTiledPattern = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgAvoidResettingFilterQualityForTiledPatternFlagIndex>;
  using ScopedSvgCss3dTransforms = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgCss3dTransformsFlagIndex>;
  using ScopedSVGEmbeddedAsReplacedElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSVGEmbeddedAsReplacedElementFlagIndex>;
  using ScopedSvgEmptyAttributeStringParsingFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgEmptyAttributeStringParsingFixFlagIndex>;
  using ScopedSvgEnableTextDecorationCssStyling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgEnableTextDecorationCssStylingFlagIndex>;
  using ScopedSvgFallBackToContainerSize = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgFallBackToContainerSizeFlagIndex>;
  using ScopedSvgFeImageEXIFOrientation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgFeImageEXIFOrientationFlagIndex>;
  using ScopedSvgFeImageSkipHiddenContainerViewportDependence = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgFeImageSkipHiddenContainerViewportDependenceFlagIndex>;
  using ScopedSvgFilterPaintsForHiddenContent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgFilterPaintsForHiddenContentFlagIndex>;
  using ScopedSvgFilterUserSpaceViewportForSvg = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgFilterUserSpaceViewportForSvgFlagIndex>;
  using ScopedSvgHyperlinkElementUtils = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgHyperlinkElementUtilsFlagIndex>;
  using ScopedSvgIgnoreNegativeEllipseRadii = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgIgnoreNegativeEllipseRadiiFlagIndex>;
  using ScopedSvgImageAnimationReset = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgImageAnimationResetFlagIndex>;
  using ScopedSvgImageNonUniformScalingFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgImageNonUniformScalingFixFlagIndex>;
  using ScopedSvgIncrementalStyle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgIncrementalStyleFlagIndex>;
  using ScopedSvgInlineRootPixelSnappingScaleAdjustment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgInlineRootPixelSnappingScaleAdjustmentFlagIndex>;
  using ScopedSvgInstanceSyncOptimization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgInstanceSyncOptimizationFlagIndex>;
  using ScopedSvgLengthResolveUnparsedValue = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgLengthResolveUnparsedValueFlagIndex>;
  using ScopedSvgNewZoom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgNewZoomFlagIndex>;
  using ScopedSVGPathDataAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSVGPathDataAPIFlagIndex>;
  using ScopedSvgPathLengthCssProperty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgPathLengthCssPropertyFlagIndex>;
  using ScopedSvgScriptElementAsyncAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgScriptElementAsyncAttributeFlagIndex>;
  using ScopedSvgScriptFragmentAlreadyStarted = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgScriptFragmentAlreadyStartedFlagIndex>;
  using ScopedSvgSizingWithPreserveAspectRatioNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgSizingWithPreserveAspectRatioNoneFlagIndex>;
  using ScopedSvgStyleElementReflectTypeAndMedia = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgStyleElementReflectTypeAndMediaFlagIndex>;
  using ScopedSvgSupportMediaFragments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgSupportMediaFragmentsFlagIndex>;
  using ScopedSVGTextPathSideAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSVGTextPathSideAttributeFlagIndex>;
  using ScopedSvgTextPositioningGraphemeClusters = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgTextPositioningGraphemeClustersFlagIndex>;
  using ScopedSvgUseNestedResourceDocuments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgUseNestedResourceDocumentsFlagIndex>;
  using ScopedSvgUseNestedResourceDocumentsDelayLoad = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSvgUseNestedResourceDocumentsDelayLoadFlagIndex>;
  using ScopedSyncCrossDocumentAnimationTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSyncCrossDocumentAnimationTimingFlagIndex>;
  using ScopedSynthesizedKeyboardEventsForAccessibilityActions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSynthesizedKeyboardEventsForAccessibilityActionsFlagIndex>;
  using ScopedSyntheticMouseHoverOverInactivePage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSyntheticMouseHoverOverInactivePageFlagIndex>;
  using ScopedSystemWakeLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kSystemWakeLockFlagIndex>;
  using ScopedTabAlignmentWithFloats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTabAlignmentWithFloatsFlagIndex>;
  using ScopedTableCellBorderColorInherit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTableCellBorderColorInheritFlagIndex>;
  using ScopedTableIsAutoFixedLayout = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTableIsAutoFixedLayoutFlagIndex>;
  using ScopedTabSizeInRubyBase = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTabSizeInRubyBaseFlagIndex>;
  using ScopedTargetInShadowDeterminedBeforeListener = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTargetInShadowDeterminedBeforeListenerFlagIndex>;
  using ScopedTargetRangesForBackwardDeletionUnit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTargetRangesForBackwardDeletionUnitFlagIndex>;
  using ScopedTemporalInputHostBlur = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTemporalInputHostBlurFlagIndex>;
  using ScopedTestBlinkFeatureDefault = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestBlinkFeatureDefaultFlagIndex>;
  using ScopedTestFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestFeatureFlagIndex>;
  using ScopedTestFeatureCustomEnableCheck = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestFeatureCustomEnableCheckFlagIndex>;
  using ScopedTestFeatureDependent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestFeatureDependentFlagIndex>;
  using ScopedTestFeatureForBrowserProcessReadWriteAccessOriginTrial = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestFeatureForBrowserProcessReadWriteAccessOriginTrialFlagIndex>;
  using ScopedTestFeatureImplied = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestFeatureImpliedFlagIndex>;
  using ScopedTestFeatureStable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTestFeatureStableFlagIndex>;
  using ScopedTextAreaPlaceholderBreakAriaHiddenUpdate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextAreaPlaceholderBreakAriaHiddenUpdateFlagIndex>;
  using ScopedTextAreaResizerFixedSize = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextAreaResizerFixedSizeFlagIndex>;
  using ScopedTextAutoSpaceIgnoreRubyAnnotation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextAutoSpaceIgnoreRubyAnnotationFlagIndex>;
  using ScopedTextBoxTrimForNestedList = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextBoxTrimForNestedListFlagIndex>;
  using ScopedTextBoxTrimOnInlineBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextBoxTrimOnInlineBoxFlagIndex>;
  using ScopedTextBoxTrimOnInlineBoxTextDecoration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextBoxTrimOnInlineBoxTextDecorationFlagIndex>;
  using ScopedTextDetector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextDetectorFlagIndex>;
  using ScopedTextEmphasisPositionAuto = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextEmphasisPositionAutoFlagIndex>;
  using ScopedTextEncodingDetectorTldHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextEncodingDetectorTldHintFlagIndex>;
  using ScopedTextFragmentAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextFragmentAPIFlagIndex>;
  using ScopedTextFragmentIdentifiers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextFragmentIdentifiersFlagIndex>;
  using ScopedTextFragmentTapOpensContextMenu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextFragmentTapOpensContextMenuFlagIndex>;
  using ScopedTextIteratorExcludeAutofilledSelectFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextIteratorExcludeAutofilledSelectFixFlagIndex>;
  using ScopedTextMetricsBaselines = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextMetricsBaselinesFlagIndex>;
  using ScopedTextOverflowClipWithSelection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextOverflowClipWithSelectionFlagIndex>;
  using ScopedTextOverflowInTextarea = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextOverflowInTextareaFlagIndex>;
  using ScopedTextOverflowString = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextOverflowStringFlagIndex>;
  using ScopedTextScaleMetaTag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextScaleMetaTagFlagIndex>;
  using ScopedTextSpacingTrimFallback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextSpacingTrimFallbackFlagIndex>;
  using ScopedTextSpacingTrimFallback2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextSpacingTrimFallback2FlagIndex>;
  using ScopedTextSpacingTrimFallbackChws = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextSpacingTrimFallbackChwsFlagIndex>;
  using ScopedTextStreamMethod = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTextStreamMethodFlagIndex>;
  using ScopedTimelineTrigger = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTimelineTriggerFlagIndex>;
  using ScopedTimePickerHonorsStep = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTimePickerHonorsStepFlagIndex>;
  using ScopedTimerThrottlingForBackgroundTabs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTimerThrottlingForBackgroundTabsFlagIndex>;
  using ScopedTimestampBasedCLSTracking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTimestampBasedCLSTrackingFlagIndex>;
  using ScopedTimeZoneChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTimeZoneChangeEventFlagIndex>;
  using ScopedTopicsAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTopicsAPIFlagIndex>;
  using ScopedTouchDragAndContextMenu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTouchDragAndContextMenuFlagIndex>;
  using ScopedTouchDragAndDrop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTouchDragAndDropFlagIndex>;
  using ScopedTouchDragOnShortPress = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTouchDragOnShortPressFlagIndex>;
  using ScopedTouchEventFeatureDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTouchEventFeatureDetectionFlagIndex>;
  using ScopedTouchTextEditingRedesign = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTouchTextEditingRedesignFlagIndex>;
  using ScopedTrackAnimatedSources = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTrackAnimatedSourcesFlagIndex>;
  using ScopedTrackAnimatedSourcesForInheritedProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTrackAnimatedSourcesForInheritedPropertiesFlagIndex>;
  using ScopedTransferableRTCDataChannel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTransferableRTCDataChannelFlagIndex>;
  using ScopedTranslateService = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTranslateServiceFlagIndex>;
  using ScopedTranslationAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTranslationAPIFlagIndex>;
  using ScopedTranslationAPIForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTranslationAPIForWorkersFlagIndex>;
  using ScopedTreatMhtmlInitialDocumentLoadsAsCrossDocument = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTreatMhtmlInitialDocumentLoadsAsCrossDocumentFlagIndex>;
  using ScopedTrustedTypesCreateParserOptions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTrustedTypesCreateParserOptionsFlagIndex>;
  using ScopedTrustedTypesFromLiteral = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTrustedTypesFromLiteralFlagIndex>;
  using ScopedTrustedTypesUseCodeLike = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTrustedTypesUseCodeLikeFlagIndex>;
  using ScopedTwoPhaseViewTransition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kTwoPhaseViewTransitionFlagIndex>;
  using ScopedUAImageReplacementAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUAImageReplacementAPIFlagIndex>;
  using ScopedUnboundedElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnboundedElementFlagIndex>;
  using ScopedUnclosedFormControlIsInvalid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnclosedFormControlIsInvalidFlagIndex>;
  using ScopedUnexposedTaskIds = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnexposedTaskIdsFlagIndex>;
  using ScopedUnprefixedSpeechRecognition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnprefixedSpeechRecognitionFlagIndex>;
  using ScopedUnrestrictedMeasureUserAgentSpecificMemory = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnrestrictedMeasureUserAgentSpecificMemoryFlagIndex>;
  using ScopedUnrestrictedSharedArrayBuffer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnrestrictedSharedArrayBufferFlagIndex>;
  using ScopedUnrestrictedUsb = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnrestrictedUsbFlagIndex>;
  using ScopedUnsafeEscapingUnboundedElementOnTheOpenWeb = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnsafeEscapingUnboundedElementOnTheOpenWebFlagIndex>;
  using ScopedUnsafeUnboundedElementOnTheOpenWeb = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUnsafeUnboundedElementOnTheOpenWebFlagIndex>;
  using ScopedUpdateComplexSafaAreaConstraints = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUpdateComplexSafaAreaConstraintsFlagIndex>;
  using ScopedUpdateSelectionOnNodeInsertion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUpdateSelectionOnNodeInsertionFlagIndex>;
  using ScopedURLPatternCompareComponent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kURLPatternCompareComponentFlagIndex>;
  using ScopedURLPatternGenerate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kURLPatternGenerateFlagIndex>;
  using ScopedURLSearchParamsHasAndDeleteMultipleArgs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kURLSearchParamsHasAndDeleteMultipleArgsFlagIndex>;
  using ScopedUseBeginFramePresentationFeedback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUseBeginFramePresentationFeedbackFlagIndex>;
  using ScopedUseLowQualityInterpolation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUseLowQualityInterpolationFlagIndex>;
  using ScopedUseOriginalDomOffsetsForOffsetMap = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUseOriginalDomOffsetsForOffsetMapFlagIndex>;
  using ScopedUsePaintGeometryForIntersection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUsePaintGeometryForIntersectionFlagIndex>;
  using ScopedUsePositionForPointInFlexibleBoxWithSingleChildElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUsePositionForPointInFlexibleBoxWithSingleChildElementFlagIndex>;
  using ScopedUsePositionIfIsVisuallyEquivalentCandidate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUsePositionIfIsVisuallyEquivalentCandidateFlagIndex>;
  using ScopedUserActionPseudosStopAtTopLayer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUserActionPseudosStopAtTopLayerFlagIndex>;
  using ScopedUserDefinedEntryPointTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUserDefinedEntryPointTimingFlagIndex>;
  using ScopedUserMediaElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUserMediaElementFlagIndex>;
  using ScopedUserMediaElementLegacy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUserMediaElementLegacyFlagIndex>;
  using ScopedUseShadowHostStyleCheckEditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUseShadowHostStyleCheckEditableFlagIndex>;
  using ScopedUseUndoStepElementDispatchBeforeInput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kUseUndoStepElementDispatchBeforeInputFlagIndex>;
  using ScopedV8IdleTasks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kV8IdleTasksFlagIndex>;
  using ScopedVariableSystemFontSupportOnWindows = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVariableSystemFontSupportOnWindowsFlagIndex>;
  using ScopedVideoAutoFullscreen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoAutoFullscreenFlagIndex>;
  using ScopedVideoFrameMetadataBackgroundBlur = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoFrameMetadataBackgroundBlurFlagIndex>;
  using ScopedVideoFrameMetadataRtpTimestamp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoFrameMetadataRtpTimestampFlagIndex>;
  using ScopedVideoFullscreenOrientationLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoFullscreenOrientationLockFlagIndex>;
  using ScopedVideoRotateToFullscreen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoRotateToFullscreenFlagIndex>;
  using ScopedVideoTrackGenerator = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoTrackGeneratorFlagIndex>;
  using ScopedVideoTrackGeneratorInWindow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoTrackGeneratorInWindowFlagIndex>;
  using ScopedVideoTrackGeneratorInWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVideoTrackGeneratorInWorkerFlagIndex>;
  using ScopedViewportHeightClientHintHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kViewportHeightClientHintHeaderFlagIndex>;
  using ScopedViewportSegments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kViewportSegmentsFlagIndex>;
  using ScopedViewTransitionLongCallbackTimeoutForTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kViewTransitionLongCallbackTimeoutForTestingFlagIndex>;
  using ScopedViewTransitionPreventSvgFilterPaint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kViewTransitionPreventSvgFilterPaintFlagIndex>;
  using ScopedViewTransitionSkipPseudoTreeForNavigationCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kViewTransitionSkipPseudoTreeForNavigationCaptureFlagIndex>;
  using ScopedViewTransitionSkipZeroHeightControlsSnap = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kViewTransitionSkipZeroHeightControlsSnapFlagIndex>;
  using ScopedVisibilityCollapseColumn = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVisibilityCollapseColumnFlagIndex>;
  using ScopedVisualRectMappingFixForExpansion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kVisualRectMappingFixForExpansionFlagIndex>;
  using ScopedWakeLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWakeLockFlagIndex>;
  using ScopedWarnOnContentVisibilityRenderAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWarnOnContentVisibilityRenderAccessFlagIndex>;
  using ScopedWavyDecorationContinuousPhase = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWavyDecorationContinuousPhaseFlagIndex>;
  using ScopedWebAppInstallation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppInstallationFlagIndex>;
  using ScopedWebAppLaunchQueue = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppLaunchQueueFlagIndex>;
  using ScopedWebAppScopeExtensions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppScopeExtensionsFlagIndex>;
  using ScopedWebAppScopeSystemAccentColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppScopeSystemAccentColorFlagIndex>;
  using ScopedWebAppTabStrip = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppTabStripFlagIndex>;
  using ScopedWebAppTabStripCustomizations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppTabStripCustomizationsFlagIndex>;
  using ScopedWebAppTranslations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAppTranslationsFlagIndex>;
  using ScopedWebAssemblyCustomDescriptorsV2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAssemblyCustomDescriptorsV2FlagIndex>;
  using ScopedWebAssemblyJSPromiseIntegration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAssemblyJSPromiseIntegrationFlagIndex>;
  using ScopedWebAudioBypassOutputBuffering = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAudioBypassOutputBufferingFlagIndex>;
  using ScopedWebAudioBypassOutputBufferingOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAudioBypassOutputBufferingOptOutFlagIndex>;
  using ScopedWebAudioConfigurableRenderQuantum = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAudioConfigurableRenderQuantumFlagIndex>;
  using ScopedWebAuth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthFlagIndex>;
  using ScopedWebAuthAuthenticatorAttachment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthAuthenticatorAttachmentFlagIndex>;
  using ScopedWebAuthenticationAmbient = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthenticationAmbientFlagIndex>;
  using ScopedWebAuthenticationAttestationFormats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthenticationAttestationFormatsFlagIndex>;
  using ScopedWebAuthenticationCmtgKey = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthenticationCmtgKeyFlagIndex>;
  using ScopedWebAuthenticationCrossDeviceFallbackUrl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthenticationCrossDeviceFallbackUrlFlagIndex>;
  using ScopedWebAuthenticationRemoteClientDataJson = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthenticationRemoteClientDataJsonFlagIndex>;
  using ScopedWebAuthenticationRemoteDesktopSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAuthenticationRemoteDesktopSupportFlagIndex>;
  using ScopedWebAutocorrectByDefault = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebAutocorrectByDefaultFlagIndex>;
  using ScopedWebBluetooth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebBluetoothFlagIndex>;
  using ScopedWebBluetoothGetDevices = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebBluetoothGetDevicesFlagIndex>;
  using ScopedWebBluetoothScanning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebBluetoothScanningFlagIndex>;
  using ScopedWebBluetoothWatchAdvertisements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebBluetoothWatchAdvertisementsFlagIndex>;
  using ScopedWebBluetoothWorldIsolatedCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebBluetoothWorldIsolatedCacheFlagIndex>;
  using ScopedWebCodecsVideoEncoderBuffers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebCodecsVideoEncoderBuffersFlagIndex>;
  using ScopedWebCryptoPQC = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebCryptoPQCFlagIndex>;
  using ScopedWebGLDeveloperExtensions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGLDeveloperExtensionsFlagIndex>;
  using ScopedWebGLDraftExtensions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGLDraftExtensionsFlagIndex>;
  using ScopedWebGLDrawingBufferStorage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGLDrawingBufferStorageFlagIndex>;
  using ScopedWebGLOnWebGPU = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGLOnWebGPUFlagIndex>;
  using ScopedWebGLToneMapping = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGLToneMappingFlagIndex>;
  using ScopedWebGPUDeveloperFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGPUDeveloperFeaturesFlagIndex>;
  using ScopedWebGPUExperimentalFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGPUExperimentalFeaturesFlagIndex>;
  using ScopedWebGPUExperimentalResourceTable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGPUExperimentalResourceTableFlagIndex>;
  using ScopedWebGPUExternalImageHDRHeadroom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGPUExternalImageHDRHeadroomFlagIndex>;
  using ScopedWebGPUMapSyncOnWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGPUMapSyncOnWorkersFlagIndex>;
  using ScopedWebGPUMultithreadDawnWireOnWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebGPUMultithreadDawnWireOnWorkersFlagIndex>;
  using ScopedWebHaptics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebHapticsFlagIndex>;
  using ScopedWebHID = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebHIDFlagIndex>;
  using ScopedWebHIDOnServiceWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebHIDOnServiceWorkersFlagIndex>;
  using ScopedWebHIDWorldIsolatedCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebHIDWorldIsolatedCacheFlagIndex>;
  using ScopedWebIdentityDigitalCredentials = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebIdentityDigitalCredentialsFlagIndex>;
  using ScopedWebIdentityDigitalCredentialsCreation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebIdentityDigitalCredentialsCreationFlagIndex>;
  using ScopedWebIDLBigIntUsesToBigInt = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebIDLBigIntUsesToBigIntFlagIndex>;
  using ScopedWebMCP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebMCPFlagIndex>;
  using ScopedWebMCPContinuations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebMCPContinuationsFlagIndex>;
  using ScopedWebMCPDeclarativeFileInput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebMCPDeclarativeFileInputFlagIndex>;
  using ScopedWebMCPFormAssociatedCustomElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebMCPFormAssociatedCustomElementsFlagIndex>;
  using ScopedWebNFC = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebNFCFlagIndex>;
  using ScopedWebOTP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebOTPFlagIndex>;
  using ScopedWebOTPAssertionFeaturePolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebOTPAssertionFeaturePolicyFlagIndex>;
  using ScopedWebPreferences = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebPreferencesFlagIndex>;
  using ScopedWebPrinting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebPrintingFlagIndex>;
  using ScopedWebRtcSctpSnap = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebRtcSctpSnapFlagIndex>;
  using ScopedWebSerialWorldIsolatedCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSerialWorldIsolatedCacheFlagIndex>;
  using ScopedWebShare = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebShareFlagIndex>;
  using ScopedWebSocketOptionBag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSocketOptionBagFlagIndex>;
  using ScopedWebSocketStream = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSocketStreamFlagIndex>;
  using ScopedWebSocketStreamStandardBinaryChunkType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSocketStreamStandardBinaryChunkTypeFlagIndex>;
  using ScopedWebSpeechRecognitionContext = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSpeechRecognitionContextFlagIndex>;
  using ScopedWebSpeechTimestamps = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSpeechTimestampsFlagIndex>;
  using ScopedWebSpeechUnspokenPunctuation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebSpeechUnspokenPunctuationFlagIndex>;
  using ScopedWebTransportAnticipatedConcurrentIncomingStreams = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportAnticipatedConcurrentIncomingStreamsFlagIndex>;
  using ScopedWebTransportApplicationProtocol = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportApplicationProtocolFlagIndex>;
  using ScopedWebTransportCongestionControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportCongestionControlFlagIndex>;
  using ScopedWebTransportCreateStreamsBeforeReady = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportCreateStreamsBeforeReadyFlagIndex>;
  using ScopedWebTransportCustomCertificates = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportCustomCertificatesFlagIndex>;
  using ScopedWebTransportDatagramsReadableType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportDatagramsReadableTypeFlagIndex>;
  using ScopedWebTransportDatagramsWritable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportDatagramsWritableFlagIndex>;
  using ScopedWebTransportDraining = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportDrainingFlagIndex>;
  using ScopedWebTransportExportKeyingMaterial = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportExportKeyingMaterialFlagIndex>;
  using ScopedWebTransportHeaders = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportHeadersFlagIndex>;
  using ScopedWebTransportReceiveStream = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportReceiveStreamFlagIndex>;
  using ScopedWebTransportReliability = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportReliabilityFlagIndex>;
  using ScopedWebTransportSendGroup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportSendGroupFlagIndex>;
  using ScopedWebTransportStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebTransportStatsFlagIndex>;
  using ScopedWebUIBundledCodeCacheAsyncFetch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebUIBundledCodeCacheAsyncFetchFlagIndex>;
  using ScopedWebUSB = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebUSBFlagIndex>;
  using ScopedWebUSBOnDedicatedWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebUSBOnDedicatedWorkersFlagIndex>;
  using ScopedWebUSBOnServiceWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebUSBOnServiceWorkersFlagIndex>;
  using ScopedWebViewEnvReorderFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebViewEnvReorderFixFlagIndex>;
  using ScopedWebVTTCueLayoutByPositionAlignment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebVTTCueLayoutByPositionAlignmentFlagIndex>;
  using ScopedWebVTTCueTightLineBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebVTTCueTightLineBoxFlagIndex>;
  using ScopedWebVTTLineAndPositionAlignment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebVTTLineAndPositionAlignmentFlagIndex>;
  using ScopedWebVTTRegions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebVTTRegionsFlagIndex>;
  using ScopedWebXR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRFlagIndex>;
  using ScopedWebXREnabledFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXREnabledFeaturesFlagIndex>;
  using ScopedWebXRFrameRate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRFrameRateFlagIndex>;
  using ScopedWebXRFrontFacing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRFrontFacingFlagIndex>;
  using ScopedWebXRGPUBinding = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRGPUBindingFlagIndex>;
  using ScopedWebXRHitTestEntityTypes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRHitTestEntityTypesFlagIndex>;
  using ScopedWebXRImageTracking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRImageTrackingFlagIndex>;
  using ScopedWebXRLayers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRLayersFlagIndex>;
  using ScopedWebXRLayersCommon = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRLayersCommonFlagIndex>;
  using ScopedWebXRMediaBinding = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRMediaBindingFlagIndex>;
  using ScopedWebXRMeshDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRMeshDetectionFlagIndex>;
  using ScopedWebXRPlaneDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRPlaneDetectionFlagIndex>;
  using ScopedWebXRPoseMotionData = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRPoseMotionDataFlagIndex>;
  using ScopedWebXRSpecParity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRSpecParityFlagIndex>;
  using ScopedWebXRVisibilityMask = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWebXRVisibilityMaskFlagIndex>;
  using ScopedWheelEventDeltaExternalPageScale = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWheelEventDeltaExternalPageScaleFlagIndex>;
  using ScopedWheelEventMomentum = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWheelEventMomentumFlagIndex>;
  using ScopedWindowDefaultStatus = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWindowDefaultStatusFlagIndex>;
  using ScopedWindowOpenAlwaysOnTop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWindowOpenAlwaysOnTopFlagIndex>;
  using ScopedWindowOpenAttributionSrc = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWindowOpenAttributionSrcFlagIndex>;
  using ScopedWindowOpenSplitTab = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWindowOpenSplitTabFlagIndex>;
  using ScopedWordSkipSpacesPunctuationFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kWordSkipSpacesPunctuationFixFlagIndex>;
  using ScopedXMLNoExternalEntities = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXMLNoExternalEntitiesFlagIndex>;
  using ScopedXMLParserReplaceLoneSurrogates = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXMLParserReplaceLoneSurrogatesFlagIndex>;
  using ScopedXMLParsingRust = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXMLParsingRustFlagIndex>;
  using ScopedXMLRustForNonXslt = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXMLRustForNonXsltFlagIndex>;
  using ScopedXMLSerializerConsistentDefaultNsDeclMatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXMLSerializerConsistentDefaultNsDeclMatchingFlagIndex>;
  using ScopedXMLViewerForIframes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXMLViewerForIframesFlagIndex>;
  using ScopedXSLT = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXSLTFlagIndex>;
  using ScopedXSLTSpecialTrial = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kXSLTSpecialTrialFlagIndex>;
  using ScopedBraveIsInTorContext = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBraveIsInTorContextFlagIndex>;
  using ScopedBraveGlobalPrivacyControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::kBraveGlobalPrivacyControlFlagIndex>;
};

using ScopedAboutBlankPageRespectsDarkModeOnUserActionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAboutBlankPageRespectsDarkModeOnUserAction;
using ScopedAccelerated2dCanvasForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccelerated2dCanvas;
using ScopedAcceleratedSmallCanvasesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAcceleratedSmallCanvases;
using ScopedAccessibilityCheckIfcInPreviousTextOnLineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityCheckIfcInPreviousTextOnLine;
using ScopedAccessibilityCustomElementRoleNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityCustomElementRoleNone;
using ScopedAccessibilityExposeDisplayNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityExposeDisplayNone;
using ScopedAccessibilityImplicitActionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityImplicitActions;
using ScopedAccessibilityMinRoleTabbableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityMinRoleTabbable;
using ScopedAccessibilityOSLevelBoldTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityOSLevelBoldText;
using ScopedAccessibilityProhibitedNamesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityProhibitedNames;
using ScopedAccessibilitySerializationSizeMetricsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilitySerializationSizeMetrics;
using ScopedAccessibilityUseAXPositionForDocumentMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityUseAXPositionForDocumentMarkers;
using ScopedAccessKeyLabelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessKeyLabel;
using ScopedAddressSpaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAddressSpace;
using ScopedAdInterestGroupAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAdInterestGroupAPI;
using ScopedAdjustEndOfNextParagraphIfMovedParagraphIsUpdatedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAdjustEndOfNextParagraphIfMovedParagraphIsUpdated;
using ScopedAdTaggingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAdTagging;
using ScopedAIDecisionModelAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIDecisionModelAPI;
using ScopedAIDecisionModelAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIDecisionModelAPIForWorkers;
using ScopedAIEmbeddingsAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIEmbeddingsAPI;
using ScopedAIEmbeddingsAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIEmbeddingsAPIForWorkers;
using ScopedAIPageContentAnchoredFixedOffscreenNonActionabilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentAnchoredFixedOffscreenNonActionability;
using ScopedAIPageContentAnchoredNonFixedOffscreenNonActionabilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentAnchoredNonFixedOffscreenNonActionability;
using ScopedAIPageContentBuildOnLoadForTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentBuildOnLoadForTesting;
using ScopedAIPageContentCheckGeometryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentCheckGeometry;
using ScopedAIPageContentConvertNodeTextToUtf8ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentConvertNodeTextToUtf8;
using ScopedAIPageContentElementCSSRedactionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentElementCSSRedaction;
using ScopedAIPageContentIncludeMathMLForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentIncludeMathML;
using ScopedAIPageContentIncludeSVGSubtreeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentIncludeSVGSubtree;
using ScopedAIPageContentLabelExpandFallbackSourcesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentLabelExpandFallbackSources;
using ScopedAIPageContentLabelRemoveRedundantForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentLabelRemoveRedundant;
using ScopedAIPageContentLabelRemoveRedundantWholeWordMatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentLabelRemoveRedundantWholeWordMatching;
using ScopedAIPageContentOuterBoxMapToAncestorSpaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentOuterBoxMapToAncestorSpace;
using ScopedAIPageContentPaidContentAnnotationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentPaidContentAnnotation;
using ScopedAIPageContentSkipUnclickableFixedOverlaysForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentSkipUnclickableFixedOverlays;
using ScopedAIPageContentTrackedElementsIframeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentTrackedElementsIframe;
using ScopedAIPageContentTrackedElementsPasswordForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentTrackedElementsPassword;
using ScopedAIPageContentVisualViewportClampForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPageContentVisualViewportClamp;
using ScopedAIPromptAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPI;
using ScopedAIPromptAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPIForWorkers;
using ScopedAIPromptAPILegacyIdentifiersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPILegacyIdentifiers;
using ScopedAIPromptAPILegacyParamsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPILegacyParams;
using ScopedAIPromptAPIMultimodalInputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPIMultimodalInput;
using ScopedAIPromptAPIParamsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPIParams;
using ScopedAIPromptAPIStructuredOutputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPIStructuredOutput;
using ScopedAIPromptAPIToolUseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIPromptAPIToolUse;
using ScopedAIProofreadingAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIProofreadingAPI;
using ScopedAIRewriterAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIRewriterAPI;
using ScopedAIRewriterAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIRewriterAPIForWorkers;
using ScopedAISummarizationAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAISummarizationAPI;
using ScopedAISummarizationAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAISummarizationAPIForWorkers;
using ScopedAISummarizationPerformancePreferenceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAISummarizationPerformancePreference;
using ScopedAIWriterAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIWriterAPI;
using ScopedAIWriterAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAIWriterAPIForWorkers;
using ScopedAlignZoomToCenterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAlignZoomToCenter;
using ScopedAllowContentInitiatedDataUrlNavigationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowContentInitiatedDataUrlNavigations;
using ScopedAllowPreloadingWithCSPMetaTagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowPreloadingWithCSPMetaTag;
using ScopedAllowSvgUseToReferenceExternalDocumentRootForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowSvgUseToReferenceExternalDocumentRoot;
using ScopedAllowSyntheticTimingForCanvasCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowSyntheticTimingForCanvasCapture;
using ScopedAllowURNsInIframesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowURNsInIframes;
using ScopedAncestorOriginsStoredOnDocumentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAncestorOriginsStoredOnDocument;
using ScopedAnchorPositionAdjustmentWithoutOverflowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnchorPositionAdjustmentWithoutOverflow;
using ScopedAndroidDownloadableFontsMatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAndroidDownloadableFontsMatching;
using ScopedAnimationEventAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnimationEventAnimation;
using ScopedAnimationProgressAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnimationProgressAPI;
using ScopedAnimationRangeRejectRelativeLengthsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnimationRangeRejectRelativeLengths;
using ScopedAnimationTriggerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnimationTrigger;
using ScopedAnimationWorkletForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnimationWorklet;
using ScopedAnnotationSpaceForMultiColForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnnotationSpaceForMultiCol;
using ScopedAnnotationSpaceOnStartForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnnotationSpaceOnStart;
using ScopedAnonymousIframeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnonymousIframe;
using ScopedAOMAriaRelationshipPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAOMAriaRelationshipProperties;
using ScopedAOMAriaRelationshipPropertiesAriaOwnsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAOMAriaRelationshipPropertiesAriaOwns;
using ScopedAppearanceBaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAppearanceBase;
using ScopedAppearanceDisplayAdjustmentForWidgetsOnlyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAppearanceDisplayAdjustmentForWidgetsOnly;
using ScopedApproximateGeolocationPermissionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedApproximateGeolocationPermission;
using ScopedApproximateGeolocationPermissionAccuracyModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedApproximateGeolocationPermissionAccuracyMode;
using ScopedApproximateGeolocationPermissionAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedApproximateGeolocationPermissionAPI;
using ScopedApproximateGeolocationWebVisibleAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedApproximateGeolocationWebVisibleAPI;
using ScopedAppTitleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAppTitle;
using ScopedAriaActionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAriaActions;
using ScopedAriaNotifyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAriaNotify;
using ScopedAriaNotifyV2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAriaNotifyV2;
using ScopedAriaRowColIndexTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAriaRowColIndexText;
using ScopedAttributionReportingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAttributionReporting;
using ScopedAudioContextAsyncStateTransitionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioContextAsyncStateTransitions;
using ScopedAudioContextPlaybackStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioContextPlaybackStats;
using ScopedAudioContextSetSinkIdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioContextSetSinkId;
using ScopedAudioOutputDevicesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioOutputDevices;
using ScopedAudioVideoTracksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioVideoTracks;
using ScopedAudioWorkletSharedPortForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioWorkletSharedPort;
using ScopedAuthorSpecifiedLayoutScrollSnapBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAuthorSpecifiedLayoutScrollSnapBehavior;
using ScopedAutoDarkModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoDarkMode;
using ScopedAutoDarkModeSkipImagesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoDarkModeSkipImages;
using ScopedAutoDarkModeSVGSizeThresholdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoDarkModeSVGSizeThreshold;
using ScopedAutofillForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutofill;
using ScopedAutofillEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutofillEvent;
using ScopedAutofillPreviewGenericFontFamilyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutofillPreviewGenericFontFamily;
using ScopedAutofillPreviewIgnoreAuthorFontForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutofillPreviewIgnoreAuthorFont;
using ScopedAutomationControlledForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutomationControlled;
using ScopedAutoPictureInPictureVideoHeuristicsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoPictureInPictureVideoHeuristics;
using ScopedAutoSizeUsesScrollWidthForOverflowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoSizeUsesScrollWidthForOverflow;
using ScopedAvoidEmbeddedContentViewLocationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAvoidEmbeddedContentViewLocation;
using ScopedAvoidNonSelectableSelectionBoundaryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAvoidNonSelectableSelectionBoundary;
using ScopedAvoidSynchronousBlurOnDisabledAttributeChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAvoidSynchronousBlurOnDisabledAttributeChange;
using ScopedBackfaceVisibilityInteropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackfaceVisibilityInterop;
using ScopedBackForwardCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCache;
using ScopedBackForwardCacheExperimentHTTPHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCacheExperimentHTTPHeader;
using ScopedBackForwardCacheNotRestoredReasonsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCacheNotRestoredReasons;
using ScopedBackForwardCacheRestorationPerformanceEntryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCacheRestorationPerformanceEntry;
using ScopedBackForwardCacheUpdateNotRestoredReasonsNameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCacheUpdateNotRestoredReasonsName;
using ScopedBackgroundClipTextDecorationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackgroundClipTextDecoration;
using ScopedBackgroundFetchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackgroundFetch;
using ScopedBackgroundPageFreezeOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackgroundPageFreezeOptOut;
using ScopedBarcodeDetectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBarcodeDetector;
using ScopedBaseAppearanceInlineSizingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBaseAppearanceInlineSizing;
using ScopedBasicShapeCornerRadiusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBasicShapeCornerRadius;
using ScopedBidiCaretAffinityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBidiCaretAffinity;
using ScopedBidiVisualOrderCaretMovementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBidiVisualOrderCaretMovement;
using ScopedBlinkExtensionWebViewForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionWebView;
using ScopedBlinkExtensionWebViewMediaIntegrityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionWebViewMediaIntegrity;
using ScopedBlinkGeometryMapperViewportFastPathForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkGeometryMapperViewportFastPath;
using ScopedBlinkLifecycleScriptForbiddenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkLifecycleScriptForbidden;
using ScopedBlinkRuntimeCallStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkRuntimeCallStats;
using ScopedBlobBytesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlobBytes;
using ScopedBlockingFocusWithoutUserActivationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlockingFocusWithoutUserActivation;
using ScopedBlockSelectPopupUnfocusedWindowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlockSelectPopupUnfocusedWindow;
using ScopedBoundaryEventDispatchTracksNodeRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBoundaryEventDispatchTracksNodeRemoval;
using ScopedBoxDecorationBreakCloneLineBreakingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBoxDecorationBreakCloneLineBreaking;
using ScopedBrowserInitiatedAutomaticPictureInPictureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBrowserInitiatedAutomaticPictureInPicture;
using ScopedBufferedBytesConsumerLimitSizeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBufferedBytesConsumerLimitSize;
using ScopedBypassPepcSecurityForTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBypassPepcSecurityForTesting;
using ScopedCacheControlRFC7234ParsingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCacheControlRFC7234Parsing;
using ScopedCacheControlRFC7234ParsingMetricsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCacheControlRFC7234ParsingMetrics;
using ScopedCacheStorageCodeCacheHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCacheStorageCodeCacheHint;
using ScopedCacheStyleAdjusterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCacheStyleAdjuster;
using ScopedCameraAndMicrophoneElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCameraAndMicrophoneElements;
using ScopedCanvas2dCanvasFilterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dCanvasFilter;
using ScopedCanvas2dDeferredFlushForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dDeferredFlush;
using ScopedCanvas2dLayersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dLayers;
using ScopedCanvas2dLayersWithOptionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dLayersWithOptions;
using ScopedCanvas2dMeshForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dMesh;
using ScopedCanvasDrawElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasDrawElement;
using ScopedCanvasFloatingPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasFloatingPoint;
using ScopedCanvasGlobalHDRHeadroomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasGlobalHDRHeadroom;
using ScopedCanvasGradientCSSColor4ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasGradientCSSColor4;
using ScopedCanvasHDRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasHDR;
using ScopedCanvasTextDirectionReflectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasTextDirectionReflect;
using ScopedCanvasTextMetricsPreciseBoundsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasTextMetricsPreciseBounds;
using ScopedCanvasToneMappingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasToneMapping;
using ScopedCanvasUsesArcPaintOpForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasUsesArcPaintOp;
using ScopedCapabilityDelegationDigitalCredentialsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapabilityDelegationDigitalCredentials;
using ScopedCapabilityDelegationDisplayCaptureRequestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapabilityDelegationDisplayCaptureRequest;
using ScopedCapabilityDelegationPopupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapabilityDelegationPopup;
using ScopedCapabilityElementIconOnlyModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapabilityElementIconOnlyMode;
using ScopedCapitalizeAfterSupplementaryCharacterFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapitalizeAfterSupplementaryCharacterFix;
using ScopedCaptureControllerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaptureController;
using ScopedCapturedMouseEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapturedMouseEvents;
using ScopedCapturedSurfaceControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapturedSurfaceControl;
using ScopedCapturedSurfaceResolutionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapturedSurfaceResolution;
using ScopedCaptureHandleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaptureHandle;
using ScopedCaretBlinkingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaretBlinking;
using ScopedCaretBrowsingSequentialFocusStartingPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaretBrowsingSequentialFocusStartingPoint;
using ScopedCaretOutsideEditableAtomicInlineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaretOutsideEditableAtomicInline;
using ScopedCCTNewRFMPushBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCCTNewRFMPushBehavior;
using ScopedCDTNewCrossOriginHandlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCDTNewCrossOriginHandling;
using ScopedCDTNewDestinationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCDTNewDestination;
using ScopedCDTNewReferrerAndReferrerPolicyHandlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCDTNewReferrerAndReferrerPolicyHandling;
using ScopedCheckableInputTypeLayoutInlineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCheckableInputTypeLayoutInline;
using ScopedCheckCSPOnInlineScriptAttributeSetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCheckCSPOnInlineScriptAttributeSet;
using ScopedClampUnfocusedSelectionCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClampUnfocusedSelectionCache;
using ScopedCleanUpActivationBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCleanUpActivationBehavior;
using ScopedClearCrossOriginRelatedTargetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClearCrossOriginRelatedTarget;
using ScopedClearCurrentTargetAfterDispatchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClearCurrentTargetAfterDispatch;
using ScopedClearDisplayLockPrePaintFlagsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClearDisplayLockPrePaintFlags;
using ScopedClearFocusWithinOnSubtreeRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClearFocusWithinOnSubtreeRemoval;
using ScopedClearTargetOnlyIfInShadowTreeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClearTargetOnlyIfInShadowTree;
using ScopedClipboardEventTargetUsesContainerNodeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardEventTargetUsesContainerNode;
using ScopedClipboardOnExtensionServiceWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardOnExtensionServiceWorker;
using ScopedClipboardPasteImageRespectBufferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardPasteImageRespectBuffer;
using ScopedClipElementVisibleBoundsInLocalRootForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipElementVisibleBoundsInLocalRoot;
using ScopedClipPathNestedRasterOptimizationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipPathNestedRasterOptimization;
using ScopedCoalesceSelectionchangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCoalesceSelectionchangeEvent;
using ScopedCoepReflectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCoepReflection;
using ScopedColorInputAcceptsCSSColorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedColorInputAcceptsCSSColors;
using ScopedColorSpaceDisplayP3LinearForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedColorSpaceDisplayP3Linear;
using ScopedColorSpacePredefinedLinearSpacesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedColorSpacePredefinedLinearSpaces;
using ScopedColorSpaceRec2100LinearForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedColorSpaceRec2100Linear;
using ScopedComposedPathReturnTargetBeingDispatchedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedComposedPathReturnTargetBeingDispatched;
using ScopedCompositeClipPathAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositeClipPathAnimation;
using ScopedCompositedSelectionUpdateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositedSelectionUpdate;
using ScopedCompositeHoverStyleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositeHoverStyle;
using ScopedCompositingDecisionAtAnimationPhaseBoundariesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositingDecisionAtAnimationPhaseBoundaries;
using ScopedCompositionForegroundMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositionForegroundMarkers;
using ScopedCompositorEventTriggerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositorEventTrigger;
using ScopedCompositorTimelineTriggerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositorTimelineTrigger;
using ScopedCompressionDictionaryTransportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompressionDictionaryTransport;
using ScopedComputedAccessibilityInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedComputedAccessibilityInfo;
using ScopedComputePressureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedComputePressure;
using ScopedConcurrentNativePaintWorkletsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConcurrentNativePaintWorklets;
using ScopedConditionalTracingLoAFForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConditionalTracingLoAF;
using ScopedConnectionAllowlistEmbeddedEnforcementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConnectionAllowlistEmbeddedEnforcement;
using ScopedConsistentFormControlPaintSnappingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConsistentFormControlPaintSnapping;
using ScopedConstructableStylesheetCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConstructableStylesheetCache;
using ScopedContactsManagerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContactsManager;
using ScopedContactsManagerExtraPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContactsManagerExtraProperties;
using ScopedContainerTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContainerTiming;
using ScopedContentIndexForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContentIndex;
using ScopedContextMenuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContextMenu;
using ScopedControlledFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedControlledFrame;
using ScopedControlledFrameWebRequestSecurityInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedControlledFrameWebRequestSecurityInfo;
using ScopedCookieStoreAPIMaxAgeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCookieStoreAPIMaxAge;
using ScopedCookieStoreAPIWhitespaceStrippingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCookieStoreAPIWhitespaceStripping;
using ScopedCoopRestrictPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCoopRestrictProperties;
using ScopedCorrectTemplateFormParsingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCorrectTemplateFormParsing;
using ScopedCorsRFC1918ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCorsRFC1918;
using ScopedCpuPerformanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCpuPerformance;
using ScopedCrashReportingStorageAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCrashReportingStorageAPI;
using ScopedCreateInlineContentsAnonymousBlockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCreateInlineContentsAnonymousBlock;
using ScopedCrossOriginStorageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCrossOriginStorage;
using ScopedCSPHashesV1ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSPHashesV1;
using ScopedCSPReportHashForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSPReportHash;
using ScopedCSSAccentColorKeywordForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAccentColorKeyword;
using ScopedCSSActiveCaptionMapsToCanvasForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSActiveCaptionMapsToCanvas;
using ScopedCSSAlphaColorFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAlphaColorFunction;
using ScopedCSSAlphaColorFunctionRequiresAlphaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAlphaColorFunctionRequiresAlpha;
using ScopedCSSAltCounterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAltCounter;
using ScopedCSSAnimationIterationCompositeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAnimationIterationComposite;
using ScopedCSSArgumentGrammarForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSArgumentGrammar;
using ScopedCSSAtRuleCounterStyleImageSymbolsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAtRuleCounterStyleImageSymbols;
using ScopedCSSAtRuleCounterStyleSpeakAsDescriptorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAtRuleCounterStyleSpeakAsDescriptor;
using ScopedCSSAttributeValueCaseSensitiveNonHTMLForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAttributeValueCaseSensitiveNonHTML;
using ScopedCSSBackgroundClipBorderAreaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSBackgroundClipBorderArea;
using ScopedCSSBackgroundLayerCountIndependenceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSBackgroundLayerCountIndependence;
using ScopedCSSBorderRadiusSideShorthandsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSBorderRadiusSideShorthands;
using ScopedCSSBorderShapeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSBorderShape;
using ScopedCSSCalcEarlyNaNAndInfFoldingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCalcEarlyNaNAndInfFolding;
using ScopedCSSCalcSimplificationAndSerializationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCalcSimplificationAndSerialization;
using ScopedCSSCaretAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCaretAnimation;
using ScopedCSSCaretColorWithOptionalSecondValueForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCaretColorWithOptionalSecondValue;
using ScopedCSSCaretShapeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCaretShape;
using ScopedCSSCaseSensitiveSelectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCaseSensitiveSelector;
using ScopedCSSChUnitSpecCompliantFallbackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSChUnitSpecCompliantFallback;
using ScopedCSSColorTypedOMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSColorTypedOM;
using ScopedCSSContainerProgressNotationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSContainerProgressNotation;
using ScopedCSSContainerStyleQueriesRangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSContainerStyleQueriesRange;
using ScopedCSSCornersShorthandForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCornersShorthand;
using ScopedCSSCounterResetReversedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCounterResetReversed;
using ScopedCSSCounterStyleSymbolsFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCounterStyleSymbolsFunction;
using ScopedCSSCrossFadeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCrossFade;
using ScopedCSSCustomHighlightUniversalSelectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCustomHighlightUniversalSelector;
using ScopedCSSCustomMediaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCustomMedia;
using ScopedCSSDynamicRangeLimitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSDynamicRangeLimit;
using ScopedCSSEnumeratedCustomPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSEnumeratedCustomProperties;
using ScopedCSSFlowStartAndEndForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFlowStartAndEnd;
using ScopedCSSFlowStartAndEndSerializationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFlowStartAndEndSerialization;
using ScopedCSSFontFamilySerializationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFontFamilySerialization;
using ScopedCSSFontSizeAdjustForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFontSizeAdjust;
using ScopedCSSFunctionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFunctions;
using ScopedCSSGridLanesLayoutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSGridLanesLayout;
using ScopedCSSHangingPunctuationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSHangingPunctuation;
using ScopedCSSHexAlphaColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSHexAlphaColor;
using ScopedCSSIdentFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSIdentFunction;
using ScopedCSSImageAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSImageAnimation;
using ScopedCSSImageFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSImageFunction;
using ScopedCSSInheritFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSInheritFunction;
using ScopedCSSInRangeOutOfRangeReversedRangesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSInRangeOutOfRangeReversedRanges;
using ScopedCSSKeyframesRuleLengthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSKeyframesRuleLength;
using ScopedCSSLangExtendedRangesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLangExtendedRanges;
using ScopedCSSLayoutAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLayoutAPI;
using ScopedCSSLightDarkImageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLightDarkImage;
using ScopedCSSLineClampForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLineClamp;
using ScopedCSSLineClampAsShorthandForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLineClampAsShorthand;
using ScopedCSSLineClampLineBreakingEllipsisForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLineClampLineBreakingEllipsis;
using ScopedCSSLinkParametersPropertyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLinkParametersProperty;
using ScopedCSSListCounterAccountingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSListCounterAccounting;
using ScopedCSSLogicalCombinationPseudoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLogicalCombinationPseudo;
using ScopedCSSMarkerNestedPseudoElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMarkerNestedPseudoElement;
using ScopedCssMaxContentSizingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCssMaxContentSizing;
using ScopedCSSMediaElementPseudosForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMediaElementPseudos;
using ScopedCSSMediaProgressNotationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMediaProgressNotation;
using ScopedCSSMixinsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMixins;
using ScopedCSSNestedPseudoElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSNestedPseudoElements;
using ScopedCSSOMGetComputedStylePseudoElementRequiresColonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOMGetComputedStylePseudoElementRequiresColon;
using ScopedCSSPaintAPIArgumentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPaintAPIArguments;
using ScopedCSSParserIgnoreCharsetForURLsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSParserIgnoreCharsetForURLs;
using ScopedCSSPolygonRoundingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPolygonRounding;
using ScopedCSSPositionStickyStaticScrollPositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPositionStickyStaticScrollPosition;
using ScopedCSSPositionVisibilityAnchorValidForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPositionVisibilityAnchorValid;
using ScopedCSSPrivateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPrivate;
using ScopedCSSProgressNotationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSProgressNotation;
using ScopedCSSProgressNotationNoClampForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSProgressNotationNoClamp;
using ScopedCSSPseudoColumnForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoColumn;
using ScopedCSSPseudoElementBackdropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoElementBackdrop;
using ScopedCSSPseudoElementInterfaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoElementInterface;
using ScopedCSSPseudoElementScrollButtonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoElementScrollButton;
using ScopedCSSPseudoElementSelectorTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoElementSelectorText;
using ScopedCSSPseudoElementViewTransitionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoElementViewTransitions;
using ScopedCSSPseudoHasSlottedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoHasSlotted;
using ScopedCSSPseudoScrollButtonsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoScrollButtons;
using ScopedCSSPseudoScrollMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoScrollMarkers;
using ScopedCSSRandomFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSRandomFunction;
using ScopedCSSRandomFunctionTypedOMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSRandomFunctionTypedOM;
using ScopedCSSResizeAutoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSResizeAuto;
using ScopedCSSRevertRuleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSRevertRule;
using ScopedCSSRubyOverhangForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSRubyOverhang;
using ScopedCSSSafePrintableInsetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSafePrintableInset;
using ScopedCSSScopeifiedParentPseudoClassForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScopeifiedParentPseudoClass;
using ScopedCSSScopeImportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScopeImport;
using ScopedCSSScrolledContainerQueriesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrolledContainerQueries;
using ScopedCSSScrollInitialTargetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollInitialTarget;
using ScopedCSSScrollMarkerGroupModesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollMarkerGroupModes;
using ScopedCSSScrollMarkerTargetBeforeAfterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollMarkerTargetBeforeAfter;
using ScopedCSSScrollSnapChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapChangeEvent;
using ScopedCSSScrollSnapChangingEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapChangingEvent;
using ScopedCSSScrollSnapEventConstructorExposedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapEventConstructorExposed;
using ScopedCSSScrollSnapEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapEvents;
using ScopedCSSScrollSnapStopBeforeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapStopBefore;
using ScopedCSSScrollSnapTypePairForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapTypePair;
using ScopedCSSScrollTargetGroupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollTargetGroup;
using ScopedCSSScrollTargetGroupAriaCurrentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollTargetGroupAriaCurrent;
using ScopedCSSShapeOutsidePathAndShapeSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSShapeOutsidePathAndShapeSupport;
using ScopedCSSShapeOutsideRectAndXywhSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSShapeOutsideRectAndXywhSupport;
using ScopedCSSStyleSheetInitBaseURLForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSStyleSheetInitBaseURL;
using ScopedCSSSupportsAtRuleFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSupportsAtRuleFunction;
using ScopedCSSSupportsForImportRulesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSupportsForImportRules;
using ScopedCSSSupportsNamedFeatureFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSupportsNamedFeatureFunction;
using ScopedCSSSystemAccentColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSystemAccentColor;
using ScopedCSSTextAlignMatchParentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextAlignMatchParent;
using ScopedCSSTextDecorationInsetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextDecorationInset;
using ScopedCSSTextDecorationSkipInkAllForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextDecorationSkipInkAll;
using ScopedCSSTextDecorationSkipSpacesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextDecorationSkipSpaces;
using ScopedCssTextFitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCssTextFit;
using ScopedCssTextFitReshapingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCssTextFitReshaping;
using ScopedCSSTextSpacingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextSpacing;
using ScopedCSSTextTransformFullSizeKanaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextTransformFullSizeKana;
using ScopedCSSTextTransformFullWidthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextTransformFullWidth;
using ScopedCSSTextTransformMultiKeywordForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextTransformMultiKeyword;
using ScopedCSSTimelineScopeAllForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTimelineScopeAll;
using ScopedCSSTimelineScopeGlobalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTimelineScopeGlobal;
using ScopedCSSTreeScopedScrollTimelineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTreeScopedScrollTimeline;
using ScopedCSSURLRequestModifiersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSURLRequestModifiers;
using ScopedCSSUserSelectContainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSUserSelectContain;
using ScopedCSSUserValidAndUserInvalidForRadioForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSUserValidAndUserInvalidForRadio;
using ScopedCSSVideoDynamicRangeMediaQueriesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSVideoDynamicRangeMediaQueries;
using ScopedCSSViewTransitionAutoNameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSViewTransitionAutoName;
using ScopedCSSWindowDragForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSWindowDrag;
using ScopedCSSZoomAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSZoomAnimation;
using ScopedCustomElementsDisableFormattingFixupsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCustomElementsDisableFormattingFixups;
using ScopedCustomizableComboboxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCustomizableCombobox;
using ScopedCustomizableSelectMultiplePopupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCustomizableSelectMultiplePopup;
using ScopedCustomizableSelectNewUAStylesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCustomizableSelectNewUAStyles;
using ScopedCustomScrollbarApplyMinimumThumbLengthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCustomScrollbarApplyMinimumThumbLength;
using ScopedDatabaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDatabase;
using ScopedDateTimeInputTypeEarlyAdvanceFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDateTimeInputTypeEarlyAdvanceFix;
using ScopedDeclarativeCSSModulesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeclarativeCSSModules;
using ScopedDeclarativeCSSModulesStyleTagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeclarativeCSSModulesStyleTag;
using ScopedDeclarativeFragmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeclarativeFragment;
using ScopedDeclarativePerformanceObserverForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeclarativePerformanceObserver;
using ScopedDeclarativeSkeletonsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeclarativeSkeletons;
using ScopedDeclarativeWebMCPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeclarativeWebMCP;
using ScopedDeferLineBoxHitTestToBackgroundForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeferLineBoxHitTestToBackground;
using ScopedDelegatesFocusTextControlInputFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDelegatesFocusTextControlInputFix;
using ScopedDeprecateUnloadOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeprecateUnloadOptOut;
using ScopedDesktopCaptureDisableLocalEchoControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDesktopCaptureDisableLocalEchoControl;
using ScopedDesktopPWAsAdditionalWindowingControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDesktopPWAsAdditionalWindowingControls;
using ScopedDesktopPWAsAdditionalWindowingControlsOnMoveForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDesktopPWAsAdditionalWindowingControlsOnMove;
using ScopedDeviceAttributesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeviceAttributes;
using ScopedDeviceBoundSessionJsApiForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeviceBoundSessionJsApi;
using ScopedDeviceOrientationRequestPermissionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeviceOrientationRequestPermission;
using ScopedDevicePostureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDevicePosture;
using ScopedDialogCloseWhenOpenRemovedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDialogCloseWhenOpenRemoved;
using ScopedDialogNewFocusBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDialogNewFocusBehavior;
using ScopedDigitalCredentialsProtocolFilterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDigitalCredentialsProtocolFilter;
using ScopedDigitalGoodsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDigitalGoods;
using ScopedDigitalGoodsV2_1ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDigitalGoodsV2_1;
using ScopedDirectSocketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDirectSockets;
using ScopedDirectSocketsInServiceWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDirectSocketsInServiceWorkers;
using ScopedDirectSocketsInSharedWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDirectSocketsInSharedWorkers;
using ScopedDisableAnchorCenterOnAlignJustifyItemsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableAnchorCenterOnAlignJustifyItems;
using ScopedDisableDifferentOriginSubframeDialogSuppressionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableDifferentOriginSubframeDialogSuppression;
using ScopedDisableEllipsisWhenScrolledForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableEllipsisWhenScrolled;
using ScopedDisableFormControlChangeEventDuringMutationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableFormControlChangeEventDuringMutation;
using ScopedDisconnectWebSocketOnBFCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisconnectWebSocketOnBFCache;
using ScopedDispatchHiddenVisibilityTransitionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDispatchHiddenVisibilityTransitions;
using ScopedDispatchSelectionchangeEventPerElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDispatchSelectionchangeEventPerElement;
using ScopedDispatchWorkerCSPViolationEventForModuleGraphFetchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDispatchWorkerCSPViolationEventForModuleGraphFetching;
using ScopedDisplayContentsFocusableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisplayContentsFocusable;
using ScopedDisplayCutoutAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisplayCutoutAPI;
using ScopedDocumentCookieForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentCookie;
using ScopedDocumentDomainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentDomain;
using ScopedDocumentIsolationPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentIsolationPolicy;
using ScopedDocumentOpenIframeUnloadEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentOpenIframeUnloadEvents;
using ScopedDocumentOpenOriginAliasRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentOpenOriginAliasRemoval;
using ScopedDocumentOpenSandboxInheritanceRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentOpenSandboxInheritanceRemoval;
using ScopedDocumentPatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPatching;
using ScopedDocumentPictureInPictureAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPictureInPictureAPI;
using ScopedDocumentPictureInPicturePreferInitialPlacementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPictureInPicturePreferInitialPlacement;
using ScopedDocumentPictureInPictureUserActivationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPictureInPictureUserActivation;
using ScopedDocumentPolicyDocumentDomainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyDocumentDomain;
using ScopedDocumentPolicyExpectNoLinkedResourcesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyExpectNoLinkedResources;
using ScopedDocumentPolicyIncludeJSCallStacksInCrashReportsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyIncludeJSCallStacksInCrashReports;
using ScopedDocumentPolicyInDedicatedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyInDedicatedWorker;
using ScopedDocumentPolicyJSProfilingModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyJSProfilingMode;
using ScopedDocumentPolicyNegotiationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyNegotiation;
using ScopedDocumentPolicyNetworkEfficiencyGuardrailsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyNetworkEfficiencyGuardrails;
using ScopedDocumentPolicySyncXHRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicySyncXHR;
using ScopedDocumentWriteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentWrite;
using ScopedDOMParserXmlScriptAlreadyStartedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDOMParserXmlScriptAlreadyStarted;
using ScopedDragAndDropDownloadURLListForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDragAndDropDownloadURLList;
using ScopedDragAndDropJSFileObjectsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDragAndDropJSFileObjects;
using ScopedDragImageForLargeImagesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDragImageForLargeImages;
using ScopedDragThresholdRequiresMouseMovementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDragThresholdRequiresMouseMovement;
using ScopedDumpForAbsentKeyframeSnapshotsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDumpForAbsentKeyframeSnapshots;
using ScopedEditContextAssignmentAsPerSpecForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditContextAssignmentAsPerSpec;
using ScopedEditContextBoundsUpdateSchedulesFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditContextBoundsUpdateSchedulesFrame;
using ScopedEditContextCodePointDeletionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditContextCodePointDeletion;
using ScopedEditContextHandleTextOrSelectionUpdateDuringCompositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditContextHandleTextOrSelectionUpdateDuringComposition;
using ScopedEditContextSelectionUpdateBeforeTextUpdateEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditContextSelectionUpdateBeforeTextUpdateEvent;
using ScopedEditingUseDomPositionApiForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditingUseDomPositionApi;
using ScopedElasticOverscrollBackgroundPaintLocationFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElasticOverscrollBackgroundPaintLocationFix;
using ScopedElasticOverscrollUseEventDeltaForAxisSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElasticOverscrollUseEventDeltaForAxisSelection;
using ScopedElementCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElementCapture;
using ScopedElementInternalsBehaviorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElementInternalsBehaviors;
using ScopedElementMatchContainerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElementMatchContainer;
using ScopedElementSpecificReadOnlyConstraintValidationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElementSpecificReadOnlyConstraintValidation;
using ScopedEmailVerificationProtocolForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEmailVerificationProtocol;
using ScopedEmbeddedContentCenterAlignBaselineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEmbeddedContentCenterAlignBaseline;
using ScopedEmojiZWJVerticalOrientationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEmojiZWJVerticalOrientation;
using ScopedEnableXSLTForCAPAlertsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEnableXSLTForCAPAlerts;
using ScopedEndpointInclusiveCommitStylesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEndpointInclusiveCommitStyles;
using ScopedEnforceAnonymityExposureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEnforceAnonymityExposure;
using ScopedEntropyIgnoredForFirstVideoFrameLCPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEntropyIgnoredForFirstVideoFrameLCP;
using ScopedEventPseudoTargetPropertyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventPseudoTargetProperty;
using ScopedEventPseudoTargetViewTransitionNameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventPseudoTargetViewTransitionName;
using ScopedEventTimingInteractionCountForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventTimingInteractionCount;
using ScopedEventTimingMatchingHTMLForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventTimingMatchingHTML;
using ScopedEventTimingTargetSelectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventTimingTargetSelector;
using ScopedEventTriggerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventTrigger;
using ScopedExperimentalContentSecurityPolicyFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalContentSecurityPolicyFeatures;
using ScopedExperimentalJSProfilerMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalJSProfilerMarkers;
using ScopedExperimentalMachineLearningNeuralNetworkForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalMachineLearningNeuralNetwork;
using ScopedExperimentalPoliciesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalPolicies;
using ScopedExposeCSSFontFeatureValuesRuleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExposeCSSFontFeatureValuesRule;
using ScopedExposeRenderTimeNonTaoDelayedImageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExposeRenderTimeNonTaoDelayedImage;
using ScopedExtendedTextMetricsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExtendedTextMetrics;
using ScopedExtensionScriptTaggingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExtensionScriptTagging;
using ScopedExtensionScriptTaggingTestingAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExtensionScriptTaggingTestingAPI;
using ScopedExternalPopupMenuClickEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExternalPopupMenuClickEvent;
using ScopedEyeDropperAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEyeDropperAPI;
using ScopedFaceDetectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFaceDetector;
using ScopedFastCompositionCharacterBoundsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFastCompositionCharacterBounds;
using ScopedFastPlainTextRangeCreateRangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFastPlainTextRangeCreateRange;
using ScopedFastPositionIteratorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFastPositionIterator;
using ScopedFedCmForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCm;
using ScopedFedCmActiveModeMultipleIdentityProvidersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmActiveModeMultipleIdentityProviders;
using ScopedFedCmAutofillForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmAutofill;
using ScopedFedCmDelegationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmDelegation;
using ScopedFedCmIdentityHandlerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmIdentityHandler;
using ScopedFedCmIdPRegistrationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmIdPRegistration;
using ScopedFedCmLightweightModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmLightweightMode;
using ScopedFedCmMultipleIdentityProvidersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmMultipleIdentityProviders;
using ScopedFedCmMultipleRequestsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmMultipleRequests;
using ScopedFedCmNavigationInterceptionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmNavigationInterception;
using ScopedFencedFramesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFencedFrames;
using ScopedFencedFramesAPIChangesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFencedFramesAPIChanges;
using ScopedFencedFramesLocalUnpartitionedDataAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFencedFramesLocalUnpartitionedDataAccess;
using ScopedFetchBodyBytesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFetchBodyBytes;
using ScopedFetchLaterAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFetchLaterAPI;
using ScopedFetchRetryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFetchRetry;
using ScopedFetchUploadStreamingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFetchUploadStreaming;
using ScopedFileHandlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileHandling;
using ScopedFilePickerEventsFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFilePickerEventsFix;
using ScopedFileSystemForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystem;
using ScopedFileSystemAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccess;
using ScopedFileSystemAccessAPIExperimentalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessAPIExperimental;
using ScopedFileSystemAccessGetCloudIdentifiersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessGetCloudIdentifiers;
using ScopedFileSystemAccessLocalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessLocal;
using ScopedFileSystemAccessLockingSchemeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessLockingScheme;
using ScopedFileSystemAccessOriginPrivateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessOriginPrivate;
using ScopedFileSystemAccessRevokeReadOnRemoveForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessRevokeReadOnRemove;
using ScopedFileSystemAccessWriteModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessWriteMode;
using ScopedFileSystemObserverForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemObserver;
using ScopedFileSystemObserverUnobserveForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemObserverUnobserve;
using ScopedFilterableSelectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFilterableSelect;
using ScopedFilterContainerLevelStylesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFilterContainerLevelStyles;
using ScopedFilteringPrimitivesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFilteringPrimitives;
using ScopedFindBufferCollapseSkippedSpaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFindBufferCollapseSkippedSpace;
using ScopedFindBufferMatchAcrossIgnoredNodesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFindBufferMatchAcrossIgnoredNodes;
using ScopedFindBufferSkipIgnoredSubtreesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFindBufferSkipIgnoredSubtrees;
using ScopedFindFirstMisspellingEndWhenNonEditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFindFirstMisspellingEndWhenNonEditable;
using ScopedFindIgnoreSuggestionFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFindIgnoreSuggestionFix;
using ScopedFirstLetterParagraphOffsetsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFirstLetterParagraphOffsets;
using ScopedFirstLineAndLetterExcludeInputTextareaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFirstLineAndLetterExcludeInputTextarea;
using ScopedFirstLineTextMetricsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFirstLineTextMetrics;
using ScopedFixHTMLFormControlElementIsReadOnlyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFixHTMLFormControlElementIsReadOnly;
using ScopedFixMapElementEmptyNameBugForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFixMapElementEmptyNameBug;
using ScopedFixSelectionPaintRangeNullOptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFixSelectionPaintRangeNullOpt;
using ScopedFixVisualRectRemoteViewportTransformForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFixVisualRectRemoteViewportTransform;
using ScopedFledgeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledge;
using ScopedFledgeAuctionDealSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeAuctionDealSupport;
using ScopedFledgeBiddingAndAuctionServerAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeBiddingAndAuctionServerAPI;
using ScopedFledgeBiddingAndAuctionServerAPIMultiSellerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeBiddingAndAuctionServerAPIMultiSeller;
using ScopedFledgeClickinessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeClickiness;
using ScopedFledgeCustomMaxAuctionAdComponentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeCustomMaxAuctionAdComponents;
using ScopedFledgeDeprecatedRenderURLReplacementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeDeprecatedRenderURLReplacements;
using ScopedFledgeDirectFromSellerSignalsHeaderAdSlotForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeDirectFromSellerSignalsHeaderAdSlot;
using ScopedFledgeDirectFromSellerSignalsWebBundlesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeDirectFromSellerSignalsWebBundles;
using ScopedFledgeMultiBidForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeMultiBid;
using ScopedFledgePrivateModelTrainingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgePrivateModelTraining;
using ScopedFledgeRealTimeReportingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeRealTimeReporting;
using ScopedFledgeSellerNonceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeSellerNonce;
using ScopedFledgeSellerScriptExecutionModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeSellerScriptExecutionMode;
using ScopedFledgeTrustedSignalsKVv1CreativeScanningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeTrustedSignalsKVv1CreativeScanning;
using ScopedFledgeTrustedSignalsKVv2ContextualDataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeTrustedSignalsKVv2ContextualData;
using ScopedFledgeTrustedSignalsKVv2SupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeTrustedSignalsKVv2Support;
using ScopedFlexWrapBalanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFlexWrapBalance;
using ScopedFocusgroupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFocusgroup;
using ScopedFocusgroupV2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFocusgroupV2;
using ScopedFocusResetEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFocusResetEvent;
using ScopedFocusRingRespectExplicitOutlineColorInDarkModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFocusRingRespectExplicitOutlineColorInDarkMode;
using ScopedFontAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontAccess;
using ScopedFontationsPrintingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontationsPrinting;
using ScopedFontDataServiceForCSSLocalFontsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontDataServiceForCSSLocalFonts;
using ScopedFontFamilyPostscriptMatchingCTMigrationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontFamilyPostscriptMatchingCTMigration;
using ScopedFontFamilyStyleMatchingCTMigrationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontFamilyStyleMatchingCTMigration;
using ScopedFontFeatureSettingsDescriptorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontFeatureSettingsDescriptor;
using ScopedFontFormatAvar2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontFormatAvar2;
using ScopedFontLanguageOverrideForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontLanguageOverride;
using ScopedFontMatchAliasesAsLastResortForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontMatchAliasesAsLastResort;
using ScopedFontPrewarmerShutdownFallbackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontPrewarmerShutdownFallback;
using ScopedFontStyleObliqueZeroDegreeAsNormalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontStyleObliqueZeroDegreeAsNormal;
using ScopedFontUniqueNameTypefaceCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontUniqueNameTypefaceCache;
using ScopedFontVariableItalicAxisForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontVariableItalicAxis;
using ScopedFontVariationSettingsDescriptorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontVariationSettingsDescriptor;
using ScopedForcedColorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForcedColors;
using ScopedForceEagerMeasureMemoryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForceEagerMeasureMemory;
using ScopedForceReduceMotionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForceReduceMotion;
using ScopedForwardReasonToFetchBodyAbortForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForwardReasonToFetchBodyAbort;
using ScopedFractionalScrollOffsetsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFractionalScrollOffsets;
using ScopedFractionalScrollOffsetsForWebAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFractionalScrollOffsetsForWebAPI;
using ScopedFragmentedOofInCbForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFragmentedOofInCb;
using ScopedFrameCaretSkipHiddenCheckForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFrameCaretSkipHiddenCheck;
using ScopedFreezeFramesOnVisibilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFreezeFramesOnVisibility;
using ScopedGamepadButtonTypesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGamepadButtonTypes;
using ScopedGamepadMultitouchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGamepadMultitouch;
using ScopedGamepadRawInputChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGamepadRawInputChangeEvent;
using ScopedGamepadWindowEventHandlersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGamepadWindowEventHandlers;
using ScopedGenerateDragOverlayBeforeDragStartForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGenerateDragOverlayBeforeDragStart;
using ScopedGenerateXSLTWarningBannerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGenerateXSLTWarningBanner;
using ScopedGeolocationElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGeolocationElement;
using ScopedGeometryMapperSingularTransformFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGeometryMapperSingularTransformFix;
using ScopedGeometryUtilsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGeometryUtils;
using ScopedGeometryUtilsForCSSPseudoElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGeometryUtilsForCSSPseudoElement;
using ScopedGetAllScreensMediaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetAllScreensMedia;
using ScopedGetDisplayMediaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetDisplayMedia;
using ScopedGetDisplayMediaAudioSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetDisplayMediaAudioSelection;
using ScopedGetDisplayMediaRequiresUserActivationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetDisplayMediaRequiresUserActivation;
using ScopedGetDisplayMediaWindowAudioCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetDisplayMediaWindowAudioCapture;
using ScopedGetElementsByNameOnlyHTMLElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetElementsByNameOnlyHTMLElements;
using ScopedGetTargetRangesRetargetingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetTargetRangesRetargeting;
using ScopedGetUserMediaEchoCancellationModesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetUserMediaEchoCancellationModes;
using ScopedGlobalPrivacyControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGlobalPrivacyControl;
using ScopedGlobalPrivacyControlApiForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGlobalPrivacyControlApi;
using ScopedGlobalPrivacyControlForceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGlobalPrivacyControlForce;
using ScopedGraphemeClusterBoundsCheckForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGraphemeClusterBoundsCheck;
using ScopedGroupEffectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGroupEffect;
using ScopedHandleShadowDOMInSubstringUtilForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHandleShadowDOMInSubstringUtil;
using ScopedHandwritingRecognitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHandwritingRecognition;
using ScopedHarfRustShapingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHarfRustShaping;
using ScopedHasUAVisualTransitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHasUAVisualTransition;
using ScopedHeadingOffsetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHeadingOffset;
using ScopedHideVideoControlsWhenUnneededForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHideVideoControlsWhenUnneeded;
using ScopedHighlightsFromPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHighlightsFromPoint;
using ScopedHitTestBorderRadiusForStackingContextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHitTestBorderRadiusForStackingContext;
using ScopedHitTestContainerTransformStateForPreserve3dForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHitTestContainerTransformStateForPreserve3d;
using ScopedHitTestCulledInlineOfSelfPaintingChildForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHitTestCulledInlineOfSelfPaintingChild;
using ScopedHrefTranslateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHrefTranslate;
using ScopedHstsTopLevelNavigationsOnlyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHstsTopLevelNavigationsOnly;
using ScopedHTMLAdoptionAlgorithmNewStepsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLAdoptionAlgorithmNewSteps;
using ScopedHTMLAreaElementDisplayNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLAreaElementDisplayNone;
using ScopedHTMLAreaHreflangTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLAreaHreflangType;
using ScopedHTMLBodyMarginPixelLengthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLBodyMarginPixelLength;
using ScopedHTMLCommandActionsV2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLCommandActionsV2;
using ScopedHTMLCommandElementRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLCommandElementRemoval;
using ScopedHTMLCommandForScrollCommandsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLCommandForScrollCommands;
using ScopedHTMLElementScrollParentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLElementScrollParent;
using ScopedHTMLInterestForInterestButtonPseudoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLInterestForInterestButtonPseudo;
using ScopedHTMLLinkElementAttributeValueChangesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLLinkElementAttributeValueChanges;
using ScopedHTMLParserIgnoreHeadInNoscriptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLParserIgnoreHeadInNoscript;
using ScopedHTMLParserTruncatedMarkupDeclarationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLParserTruncatedMarkupDeclaration;
using ScopedHTMLParserYieldAndDelayOftenForTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLParserYieldAndDelayOftenForTesting;
using ScopedHTMLParserYieldByUserTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLParserYieldByUserTiming;
using ScopedHTMLPrintingArtifactAnnotationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLPrintingArtifactAnnotations;
using ScopedHTMLProcessingInstructionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLProcessingInstruction;
using ScopedHTMLSwitchAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLSwitchAttribute;
using ScopedHyphenVerticalOrientationFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHyphenVerticalOrientationFix;
using ScopedICUCapitalizationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedICUCapitalization;
using ScopedIgnoreLetterSpacingInCursiveScriptsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIgnoreLetterSpacingInCursiveScripts;
using ScopedImageDataPixelFormatForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImageDataPixelFormat;
using ScopedImageDocumentUseLayoutWidthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImageDocumentUseLayoutWidth;
using ScopedImageSrcsetReselectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImageSrcsetReselection;
using ScopedImageSrcsetReselectionForSrcCandidateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImageSrcsetReselectionForSrcCandidate;
using ScopedImplicitRootScrollerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImplicitRootScroller;
using ScopedIncomingCallNotificationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIncomingCallNotifications;
using ScopedIncrementalFontTransferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIncrementalFontTransfer;
using ScopedInertElementNonEditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInertElementNonEditable;
using ScopedInfiniteCullRectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInfiniteCullRect;
using ScopedInheritUserModifyWithoutContenteditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInheritUserModifyWithoutContenteditable;
using ScopedInitialLetterBlockPositioningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInitialLetterBlockPositioning;
using ScopedInlineBlockLineNavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInlineBlockLineNavigation;
using ScopedInlineContainingBlockSkipOpaqueForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInlineContainingBlockSkipOpaque;
using ScopedInlineCursorSkipNonIfcForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInlineCursorSkipNonIfc;
using ScopedInlineScriptCacheHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInlineScriptCacheHint;
using ScopedInnerHTMLParserFastpathLogFailureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInnerHTMLParserFastpathLogFailure;
using ScopedInputClientRectWithoutInlinePaddingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputClientRectWithoutInlinePadding;
using ScopedInputDisabledHandlerFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputDisabledHandlerFix;
using ScopedInputInSelectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputInSelect;
using ScopedInputMultipleFieldsUIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputMultipleFieldsUI;
using ScopedInputMultipleFieldsUIWithPointerChecksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputMultipleFieldsUIWithPointerChecks;
using ScopedInputTypeColorEnhancementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputTypeColorEnhancements;
using ScopedInsertBlockquoteBeforeOuterBlockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInsertBlockquoteBeforeOuterBlock;
using ScopedInstalledAppForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInstalledApp;
using ScopedInstallElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInstallElement;
using ScopedInstallOnDeviceSpeechRecognitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInstallOnDeviceSpeechRecognition;
using ScopedIntegrityPolicyScriptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIntegrityPolicyScript;
using ScopedInterestEventsNonComposedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInterestEventsNonComposed;
using ScopedIntersectionObserverCompositedAnimationsForceMainFramesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIntersectionObserverCompositedAnimationsForceMainFrames;
using ScopedInvertedColorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInvertedColors;
using ScopedInvisibleSVGAnimationThrottlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInvisibleSVGAnimationThrottling;
using ScopedJavaScriptCompileHintsPerFunctionMagicRuntimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedJavaScriptCompileHintsPerFunctionMagicRuntime;
using ScopedJavaScriptImportTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedJavaScriptImportText;
using ScopedJavaScriptSourcePhaseImportsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedJavaScriptSourcePhaseImports;
using ScopedKeyboardAccessibleTooltipForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedKeyboardAccessibleTooltip;
using ScopedLabelInteractiveContentCheckBeforeHandlerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLabelInteractiveContentCheckBeforeHandler;
using ScopedLangAttributeAwareFormControlUIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLangAttributeAwareFormControlUI;
using ScopedLanguageDetectionAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLanguageDetectionAPI;
using ScopedLanguageDetectionAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLanguageDetectionAPIForWorkers;
using ScopedLayoutCloneForScrollableOverflowChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutCloneForScrollableOverflowChange;
using ScopedLayoutContainingBlockReturnsBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutContainingBlockReturnsBox;
using ScopedLayoutIgnoreMarginsForStickyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutIgnoreMarginsForSticky;
using ScopedLayoutOOFCollectInlinesFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutOOFCollectInlinesFix;
using ScopedLazyImageConformantLoadEventTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLazyImageConformantLoadEventTiming;
using ScopedLazyLoadVideoAndAudioForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLazyLoadVideoAndAudio;
using ScopedLazyParseInlineStyleSheetsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLazyParseInlineStyleSheets;
using ScopedLeftClickToHandleSuggestionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLeftClickToHandleSuggestion;
using ScopedLegacyAbstractRangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLegacyAbstractRange;
using ScopedLightDismissFromClickForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLightDismissFromClick;
using ScopedLineBreakAfterSpaceBeforeOpenTagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLineBreakAfterSpaceBeforeOpenTag;
using ScopedLineBreakBidiControlEnterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLineBreakBidiControlEnter;
using ScopedLineBreakerClearShapeResultOnOverflowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLineBreakerClearShapeResultOnOverflow;
using ScopedLineBreakerHanKerningEndForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLineBreakerHanKerningEnd;
using ScopedLocalNetworkAccessForWebRTCOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLocalNetworkAccessForWebRTCOptOut;
using ScopedLocalNetworkAccessPermissionPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLocalNetworkAccessPermissionPolicy;
using ScopedLocalNetworkAccessWebRTCForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLocalNetworkAccessWebRTC;
using ScopedLocalNetworkAccessWebSocketsTargetAddressSpaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLocalNetworkAccessWebSocketsTargetAddressSpace;
using ScopedLockedModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLockedMode;
using ScopedLoginElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLoginElement;
using ScopedLongAnimationFrameSourceCharPositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameSourceCharPosition;
using ScopedLongAnimationFrameSourceLineColumnForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameSourceLineColumn;
using ScopedLongAnimationFrameSourceLineColumnInterfaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameSourceLineColumnInterface;
using ScopedLongAnimationFrameStyleDurationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameStyleDuration;
using ScopedLongAnimationFrameWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameWorker;
using ScopedLongPressHitTestInFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongPressHitTestInFrame;
using ScopedLongPressLinkSelectTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongPressLinkSelectText;
using ScopedLongPressReleasesActiveStateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongPressReleasesActiveState;
using ScopedLongTaskFromLongAnimationFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongTaskFromLongAnimationFrame;
using ScopedMacCharacterFallbackCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMacCharacterFallbackCache;
using ScopedMacDisableCtrlHomeEndForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMacDisableCtrlHomeEnd;
using ScopedMacFontWeightFromOS2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMacFontWeightFromOS2;
using ScopedMachineLearningNeuralNetworkForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMachineLearningNeuralNetwork;
using ScopedManagedConfigurationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedManagedConfiguration;
using ScopedManualTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedManualText;
using ScopedMarginTrimForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMarginTrim;
using ScopedMarkAncestorsOnDisplayLockUnlockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMarkAncestorsOnDisplayLockUnlock;
using ScopedMaskDeserializationTimeForCrossOriginMessagesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMaskDeserializationTimeForCrossOriginMessages;
using ScopedMaskWaitForAllImagesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMaskWaitForAllImages;
using ScopedMathMLAnchorElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMathMLAnchorElement;
using ScopedMathMLOperatorRTLMirroringForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMathMLOperatorRTLMirroring;
using ScopedMeasureMemoryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMeasureMemory;
using ScopedMediaCapabilitiesEncodingInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapabilitiesEncodingInfo;
using ScopedMediaCapabilitiesSpatialAudioForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapabilitiesSpatialAudio;
using ScopedMediaCaptionSettingsButtonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptionSettingsButton;
using ScopedMediaCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapture;
using ScopedMediaCaptureBackgroundBlurForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureBackgroundBlur;
using ScopedMediaCaptureCameraControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureCameraControls;
using ScopedMediaCaptureConfigurationChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureConfigurationChange;
using ScopedMediaCaptureElementPreviewForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureElementPreview;
using ScopedMediaCaptureVoiceIsolationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureVoiceIsolation;
using ScopedMediaControlsExpandGestureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaControlsExpandGesture;
using ScopedMediaControlsOverlayPlayButtonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaControlsOverlayPlayButton;
using ScopedMediaElementMutedDefaultStateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaElementMutedDefaultState;
using ScopedMediaElementVolumeGreaterThanOneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaElementVolumeGreaterThanOne;
using ScopedMediaEngagementBypassAutoplayPoliciesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaEngagementBypassAutoplayPolicies;
using ScopedMediaLatencyHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaLatencyHint;
using ScopedMediaPlaybackWhileNotVisiblePermissionPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaPlaybackWhileNotVisiblePermissionPolicy;
using ScopedMediaQueryNavigationControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaQueryNavigationControls;
using ScopedMediaSessionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSession;
using ScopedMediaSessionChapterInformationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSessionChapterInformation;
using ScopedMediaSourceExperimentalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSourceExperimental;
using ScopedMediaSourceExtensionsForWebCodecsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSourceExtensionsForWebCodecs;
using ScopedMediaStreamTrackProcessorStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaStreamTrackProcessorStats;
using ScopedMediaStreamTrackTransferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaStreamTrackTransfer;
using ScopedMediaStreamTrackWebSpeechForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaStreamTrackWebSpeech;
using ScopedMemoryConsumerForNGShapeCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMemoryConsumerForNGShapeCache;
using ScopedMenuElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMenuElements;
using ScopedMessagePortCloseEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMessagePortCloseEvent;
using ScopedMiddleClickAutoscrollForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMiddleClickAutoscroll;
using ScopedMixedContentAutoupgradesUseIsMixedContentRestrictedInFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMixedContentAutoupgradesUseIsMixedContentRestrictedInFrame;
using ScopedMobileLayoutThemeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMobileLayoutTheme;
using ScopedModifyParagraphCrossEditingoundaryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedModifyParagraphCrossEditingoundary;
using ScopedModuleMapDoNotCacheFailedFetchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedModuleMapDoNotCacheFailedFetch;
using ScopedModulePreloadReferrerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedModulePreloadReferrer;
using ScopedModulePreloadStyleJsonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedModulePreloadStyleJson;
using ScopedMojoJSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMojoJS;
using ScopedMojoJSTestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMojoJSTest;
using ScopedMonospaceGlyphCompactionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMonospaceGlyphCompaction;
using ScopedMoveEndingSelectionToListChildForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMoveEndingSelectionToListChild;
using ScopedMoveParagraphsPreserveInlineStructureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMoveParagraphsPreserveInlineStructure;
using ScopedMulticolColumnWidthMaxContentClampForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMulticolColumnWidthMaxContentClamp;
using ScopedNastaliqScriptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNastaliqScript;
using ScopedNavigateEventDeferCrossDocumentCommitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigateEventDeferCrossDocumentCommit;
using ScopedNavigationEventTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigationEventTiming;
using ScopedNavigationSourcePseudoClassForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigationSourcePseudoClass;
using ScopedNavigationTimingRedirectTimingViaTAOForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigationTimingRedirectTimingViaTAO;
using ScopedNavigationTypeAndPhaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigationTypeAndPhase;
using ScopedNavigatorContentUtilsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigatorContentUtils;
using ScopedNetInfoConstantTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNetInfoConstantType;
using ScopedNetInfoDownlinkMaxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNetInfoDownlinkMax;
using ScopedNeutralKeyframeEasingComplianceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNeutralKeyframeEasingCompliance;
using ScopedNewAnimationCompositingCheckingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNewAnimationCompositingChecking;
using ScopedNewAnimationDispositionReportingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNewAnimationDispositionReporting;
using ScopedNewHTMLSettingMethodsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNewHTMLSettingMethods;
using ScopedNodeIteratorRemovalFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNodeIteratorRemovalFix;
using ScopedNoExtendSelectionToUserSelectNoneOutOfFlowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoExtendSelectionToUserSelectNoneOutOfFlow;
using ScopedNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditable;
using ScopedNoFontAntialiasingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoFontAntialiasing;
using ScopedNoIdleEncodingForWebTestsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoIdleEncodingForWebTests;
using ScopedNoNbspForInterElementSpaceOnCopyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoNbspForInterElementSpaceOnCopy;
using ScopedNonEmptyBlockquotesOnOutdentingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonEmptyBlockquotesOnOutdenting;
using ScopedNonEmptyVisibleTextSelectionForTextFragmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonEmptyVisibleTextSelectionForTextFragment;
using ScopedNonStandardAppearanceValueSliderVerticalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonStandardAppearanceValueSliderVertical;
using ScopedNormalizeLineEndingsInInsertTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNormalizeLineEndingsInInsertText;
using ScopedNoSynchronousThrowForCrossOriginBlockedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoSynchronousThrowForCrossOriginBlockedWorker;
using ScopedNotificationConstructorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotificationConstructor;
using ScopedNotificationContentImageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotificationContentImage;
using ScopedNotificationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotifications;
using ScopedNotificationTriggersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotificationTriggers;
using ScopedNotifySelectionControllerOnUnchangedSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotifySelectionControllerOnUnchangedSelection;
using ScopedNumberInputFullWidthCharsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNumberInputFullWidthChars;
using ScopedOfflineAudioContextIncrementalRenderingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOfflineAudioContextIncrementalRendering;
using ScopedOffscreenCanvasGetContextAttributesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOffscreenCanvasGetContextAttributes;
using ScopedOffsetMappingReuseFullWidthSpaceFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOffsetMappingReuseFullWidthSpaceFix;
using ScopedOffsetPathTransformUpdateFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOffsetPathTransformUpdateFix;
using ScopedOmitBlurEventOnElementRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOmitBlurEventOnElementRemoval;
using ScopedOmitSubframeDetachmentEventsOnRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOmitSubframeDetachmentEventsOnRemoval;
using ScopedOnDeviceWebSpeechAvailableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOnDeviceWebSpeechAvailable;
using ScopedOnDeviceWebSpeechQualityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOnDeviceWebSpeechQuality;
using ScopedOofLayoutRequiresSideEffectsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOofLayoutRequiresSideEffects;
using ScopedOpaqueRangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOpaqueRange;
using ScopedOpenPopoverInvokerRestrictToSameTreeScopeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOpenPopoverInvokerRestrictToSameTreeScope;
using ScopedOptionDisablednessCheckAncestorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOptionDisablednessCheckAncestors;
using ScopedOrientationEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOrientationEvent;
using ScopedOriginAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginAPI;
using ScopedOriginIsolationHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginIsolationHeader;
using ScopedOriginPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginPolicy;
using ScopedOriginTrialsSampleAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPI;
using ScopedOriginTrialsSampleAPIBrowserReadWriteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIBrowserReadWrite;
using ScopedOriginTrialsSampleAPIDependentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIDependent;
using ScopedOriginTrialsSampleAPIDeprecationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIDeprecation;
using ScopedOriginTrialsSampleAPIExpiryGracePeriodForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIExpiryGracePeriod;
using ScopedOriginTrialsSampleAPIExpiryGracePeriodThirdPartyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIExpiryGracePeriodThirdParty;
using ScopedOriginTrialsSampleAPIImpliedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIImplied;
using ScopedOriginTrialsSampleAPIInvalidOSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIInvalidOS;
using ScopedOriginTrialsSampleAPINavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPINavigation;
using ScopedOriginTrialsSampleAPIPersistentExpiryGracePeriodForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentExpiryGracePeriod;
using ScopedOriginTrialsSampleAPIPersistentFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentFeature;
using ScopedOriginTrialsSampleAPIPersistentInvalidOSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentInvalidOS;
using ScopedOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature;
using ScopedOriginTrialsSampleAPIThirdPartyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIThirdParty;
using ScopedOutlineDrawAutoStyleZeroWidthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOutlineDrawAutoStyleZeroWidth;
using ScopedOverlayGlobalRuleRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOverlayGlobalRuleRemoval;
using ScopedOverlayPropertyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOverlayProperty;
using ScopedOverscrollAreasForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOverscrollAreas;
using ScopedPagePopupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPagePopup;
using ScopedPagePopupCopyPasteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPagePopupCopyPaste;
using ScopedPageSwapEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPageSwapEvent;
using ScopedPaintCaretAfterInnerEditorPaintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaintCaretAfterInnerEditorPaint;
using ScopedPaintHoldingForIframesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaintHoldingForIframes;
using ScopedPaintTimingContentImagePseudoElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaintTimingContentImagePseudoElements;
using ScopedPaintUnderInvalidationCheckingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaintUnderInvalidationChecking;
using ScopedParakeetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedParakeet;
using ScopedPartitionVisitedLinkDatabaseWithSelfLinksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPartitionVisitedLinkDatabaseWithSelfLinks;
using ScopedPasswordRevealForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPasswordReveal;
using ScopedPaymentAppForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentApp;
using ScopedPaymentHandlerStaticCustomSizeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentHandlerStaticCustomSize;
using ScopedPaymentLinkDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentLinkDetection;
using ScopedPaymentMethodChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentMethodChangeEvent;
using ScopedPaymentRequestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentRequest;
using ScopedPaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentRequestNonFullyActiveDocumentCheckInvalidStateError;
using ScopedPerformanceManagerInstrumentationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerformanceManagerInstrumentation;
using ScopedPerformanceMarkCustomUserTimingFromSubframeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerformanceMarkCustomUserTimingFromSubframe;
using ScopedPerformanceMarkFeatureUsageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerformanceMarkFeatureUsage;
using ScopedPeriodicBackgroundSyncForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPeriodicBackgroundSync;
using ScopedPerMethodCanMakePaymentQuotaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerMethodCanMakePaymentQuota;
using ScopedPermissionsPolicyAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissionsPolicyAPI;
using ScopedPermissionsPolicyForSharedWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissionsPolicyForSharedWorkers;
using ScopedPermissionsRequestRevokeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissionsRequestRevoke;
using ScopedPersistentWidgetAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPersistentWidgetAPI;
using ScopedPNaClForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPNaCl;
using ScopedPointerLockOnAndroidForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPointerLockOnAndroid;
using ScopedPointerRawUpdateOnlyInSecureContextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPointerRawUpdateOnlyInSecureContext;
using ScopedPopoverHintNestedShowExceptionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPopoverHintNestedShowException;
using ScopedPopoverHintNewBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPopoverHintNewBehavior;
using ScopedPopupWidgetRequiresUserActivationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPopupWidgetRequiresUserActivation;
using ScopedPositionOutsideTabSpanCheckSiblingNodeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPositionOutsideTabSpanCheckSiblingNode;
using ScopedPositionVisibilityIgnoreNonClipAncestorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPositionVisibilityIgnoreNonClipAncestors;
using ScopedPositionVisibilitySingularValuesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPositionVisibilitySingularValues;
using ScopedPotentialPermissionsPolicyReportingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPotentialPermissionsPolicyReporting;
using ScopedPreciseMemoryInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreciseMemoryInfo;
using ScopedPreferDefaultScrollbarStylesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreferDefaultScrollbarStyles;
using ScopedPreferNonCompositedScrollingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreferNonCompositedScrolling;
using ScopedPreferredAudioOutputDevicesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreferredAudioOutputDevices;
using ScopedPrefersReducedDataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrefersReducedData;
using ScopedPrefetchAndPrerenderActivationBeaconForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrefetchAndPrerenderActivationBeacon;
using ScopedPreloadLinkRelDataUrlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreloadLinkRelDataUrls;
using ScopedPreloadScannerImprovementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreloadScannerImprovements;
using ScopedPrePaintBoxInvalidatorUsesFragmentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrePaintBoxInvalidatorUsesFragments;
using ScopedPrerender2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrerender2;
using ScopedPrerender2CrossOriginIframesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrerender2CrossOriginIframes;
using ScopedPrerenderActivationByFormSubmissionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrerenderActivationByFormSubmission;
using ScopedPrerenderUntilScriptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrerenderUntilScript;
using ScopedPresentationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPresentation;
using ScopedPreserveHtmlEquivalentTagsInTypingStyleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreserveHtmlEquivalentTagsInTypingStyle;
using ScopedPreserveUnfocusedSelectionCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreserveUnfocusedSelectionCache;
using ScopedPreventTextSelectionJumpForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreventTextSelectionJump;
using ScopedPrivateNetworkAccessNullIpAddressForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateNetworkAccessNullIpAddress;
using ScopedPrivateStateTokensForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateStateTokens;
using ScopedPrivateStateTokensAlwaysAllowIssuanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateStateTokensAlwaysAllowIssuance;
using ScopedProfilerAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedProfilerAPI;
using ScopedProfilerAPIForDedicatedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedProfilerAPIForDedicatedWorker;
using ScopedProgrammaticScrollPromiseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedProgrammaticScrollPromise;
using ScopedProgressEventInServiceWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedProgressEventInServiceWorker;
using ScopedPropagateOverscrollBehaviorFromRootForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPropagateOverscrollBehaviorFromRoot;
using ScopedPseudoElementsFocusableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPseudoElementsFocusable;
using ScopedPseudoElementsHitTestableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPseudoElementsHitTestable;
using ScopedPseudoElementsHoverableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPseudoElementsHoverable;
using ScopedPushMessageDataBytesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPushMessageDataBytes;
using ScopedPushMessagingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPushMessaging;
using ScopedPushMessagingSubscriptionChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPushMessagingSubscriptionChange;
using ScopedQuotaExceededErrorUpdateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedQuotaExceededErrorUpdate;
using ScopedRadioButtonCircularBorderRadiusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRadioButtonCircularBorderRadius;
using ScopedRangeBoundaryFastPathForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRangeBoundaryFastPath;
using ScopedRasterInducingScrollForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRasterInducingScroll;
using ScopedRateLimitPointerLockRequestsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRateLimitPointerLockRequests;
using ScopedReadableStreamBYOBReaderReadMinOptionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReadableStreamBYOBReaderReadMinOption;
using ScopedReadClipboardDataOnClipboardItemGetTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReadClipboardDataOnClipboardItemGetType;
using ScopedReadingFlowWithSlotsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReadingFlowWithSlots;
using ScopedReadOnlyTextControlSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReadOnlyTextControlSelection;
using ScopedRecheckParentDuringNodeVectorInsertionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRecheckParentDuringNodeVectorInsertion;
using ScopedReduceAcceptLanguageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceAcceptLanguage;
using ScopedReduceUserAgentMinorVersionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceUserAgentMinorVersion;
using ScopedRegionCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRegionCapture;
using ScopedRelatedWebsitePartitionAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRelatedWebsitePartitionAPI;
using ScopedReleasePaintHoldingWithoutContentfulPaintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReleasePaintHoldingWithoutContentfulPaint;
using ScopedRelOpenerBcgDependencyHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRelOpenerBcgDependencyHint;
using ScopedRemotePlaybackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemotePlayback;
using ScopedRemotePlaybackBackendForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemotePlaybackBackend;
using ScopedRemoveCharsetAutoDetectionForISO2022JPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveCharsetAutoDetectionForISO2022JP;
using ScopedRemoveChildrenInReplaceChildrenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveChildrenInReplaceChildren;
using ScopedRemoveCollapsedPlaceholderForContentEditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveCollapsedPlaceholderForContentEditable;
using ScopedRemoveDanglingMarkupInTargetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveDanglingMarkupInTarget;
using ScopedRemoveDataUrlInSvgUseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveDataUrlInSvgUse;
using ScopedRemoveNonAllowlistedCreateEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveNonAllowlistedCreateEvent;
using ScopedRemoveScrollNodeWorkaroundForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveScrollNodeWorkaround;
using ScopedRemoveVisibleSelectionInDOMSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveVisibleSelectionInDOMSelection;
using ScopedRenderPriorityAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRenderPriorityAttribute;
using ScopedReplaceChildrenWithFragmentFastPathForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReplaceChildrenWithFragmentFastPath;
using ScopedReplaceCompositionActualInsertedLengthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReplaceCompositionActualInsertedLength;
using ScopedReplacedNormalFlowStackingInlinePaintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReplacedNormalFlowStackingInlinePaint;
using ScopedReportFirstFrameTimeAsRenderTimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReportFirstFrameTimeAsRenderTime;
using ScopedReportLayoutShiftRectsInCssPixelsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReportLayoutShiftRectsInCssPixels;
using ScopedRequestIsReloadNavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRequestIsReloadNavigation;
using ScopedResourceTimingInitiatorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceTimingInitiator;
using ScopedResourceTimingUseCORSForBodySizesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceTimingUseCORSForBodySizes;
using ScopedRespectOverscrollBehaviorForScrollBubblingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRespectOverscrollBehaviorForScrollBubbling;
using ScopedResponsiveIframesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResponsiveIframes;
using ScopedResponsiveIframesShrinkForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResponsiveIframesShrink;
using ScopedResponsiveIframesSingleAxisIcbForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResponsiveIframesSingleAxisIcb;
using ScopedRestrictGamepadAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRestrictGamepadAccess;
using ScopedRestrictOwnAudioForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRestrictOwnAudio;
using ScopedRootScrollbarFollowsBrowserThemeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRootScrollbarFollowsBrowserTheme;
using ScopedRouteMatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRouteMatching;
using ScopedRtcAlwaysNegotiateDataChannelsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRtcAlwaysNegotiateDataChannels;
using ScopedRtcAudioJitterBufferMaxPacketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRtcAudioJitterBufferMaxPackets;
using ScopedRTCConfigurationIceTransportsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCConfigurationIceTransports;
using ScopedRTCDataChannelPriorityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCDataChannelPriority;
using ScopedRTCDiagnosticLoggingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCDiagnosticLogging;
using ScopedRTCEncodedAudioFrameConstructorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedAudioFrameConstructor;
using ScopedRTCEncodedFrameAudioLevelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedFrameAudioLevel;
using ScopedRTCEncodedFrameSetMetadataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedFrameSetMetadata;
using ScopedRTCEncodedFrameTimestampsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedFrameTimestamps;
using ScopedRTCEncodedSourceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedSource;
using ScopedRTCEncodedVideoFrameAdditionalMetadataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedVideoFrameAdditionalMetadata;
using ScopedRTCEncodedVideoFrameConstructorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedVideoFrameConstructor;
using ScopedRTCJitterBufferTargetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCJitterBufferTarget;
using ScopedRTCLegacyCallbackBasedGetStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCLegacyCallbackBasedGetStats;
using ScopedRTCLegacyDiagnosticLoggingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCLegacyDiagnosticLogging;
using ScopedRTCRtpEncodingParametersCodecForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCRtpEncodingParametersCodec;
using ScopedRtcRtpHeaderEncryptionPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRtcRtpHeaderEncryptionPolicy;
using ScopedRTCRtpScaleResolutionDownToForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCRtpScaleResolutionDownTo;
using ScopedRTCRtpScriptTransformForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCRtpScriptTransform;
using ScopedRTCRtpTransportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCRtpTransport;
using ScopedRTCStatsRelativePacketArrivalDelayForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCStatsRelativePacketArrivalDelay;
using ScopedRTCSvcScalabilityModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCSvcScalabilityMode;
using ScopedRubyTextDecorationSpacingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRubyTextDecorationSpacing;
using ScopedRunMicrotaskBeforeXmlScriptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRunMicrotaskBeforeXmlScript;
using ScopedRunSnapshotPostLayoutStateStepsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRunSnapshotPostLayoutStateSteps;
using ScopedSanitizeIDNEmailFormInputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSanitizeIDNEmailFormInput;
using ScopedSanitizerAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSanitizerAPI;
using ScopedSanitizeWorkerErrorPropagationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSanitizeWorkerErrorPropagation;
using ScopedScopedViewTransitionSizeContainmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScopedViewTransitionSizeContainment;
using ScopedScoreLineBreakerAbortForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScoreLineBreakerAbort;
using ScopedScreenDetailedHdrHeadroomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScreenDetailedHdrHeadroom;
using ScopedScriptBasedOnUnicodeBlockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptBasedOnUnicodeBlock;
using ScopedScriptedSpeechRecognitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptedSpeechRecognition;
using ScopedScriptedSpeechSynthesisForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptedSpeechSynthesis;
using ScopedScrollAnchorSerializationUseParentForTextNodeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollAnchorSerializationUseParentForTextNode;
using ScopedScrollAxisLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollAxisLock;
using ScopedScrollbarColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollbarColor;
using ScopedScrollbarGutterBugFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollbarGutterBugFix;
using ScopedScrollbarWidthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollbarWidth;
using ScopedScrollIntoViewAlignAutoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollIntoViewAlignAuto;
using ScopedScrollIntoViewNearestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollIntoViewNearest;
using ScopedScrollIntoViewNoInitialFocusNavigationStartingPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollIntoViewNoInitialFocusNavigationStartingPoint;
using ScopedScrollIntoViewRootFrameViewportBugFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollIntoViewRootFrameViewportBugFix;
using ScopedScrollPerformanceTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollPerformanceTiming;
using ScopedScrollTimelineCurrentTimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTimelineCurrentTime;
using ScopedScrollTimelineNamedRangeScrollForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTimelineNamedRangeScroll;
using ScopedScrollTopLeftInteropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTopLeftInterop;
using ScopedScrollToTextFragmentDirectiveLimitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollToTextFragmentDirectiveLimit;
using ScopedScrollVisibilityHiddenScrollersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollVisibilityHiddenScrollers;
using ScopedSearchTextHighlightPseudoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSearchTextHighlightPseudo;
using ScopedSecurePaymentConfirmationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmation;
using ScopedSecurePaymentConfirmationAvailabilityAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationAvailabilityAPI;
using ScopedSecurePaymentConfirmationCapabilitiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationCapabilities;
using ScopedSecurePaymentConfirmationDebugForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationDebug;
using ScopedSecurePaymentConfirmationExtensionsDisallowForThirdPartiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationExtensionsDisallowForThirdParties;
using ScopedSecurePaymentConfirmationOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationOptOut;
using ScopedSelectAnchorInViewportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectAnchorInViewport;
using ScopedSelectAudioOutputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectAudioOutput;
using ScopedSelectedcontentelementAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectedcontentelementAttribute;
using ScopedSelectedcontentMultipleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectedcontentMultiple;
using ScopedSelectedcontentSpec2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectedcontentSpec2;
using ScopedSelectionAndFocusedVisiblePositionMatchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionAndFocusedVisiblePositionMatch;
using ScopedSelectionCollapsedDirectionNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionCollapsedDirectionNone;
using ScopedSelectionEditingBoundarySlottedContentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionEditingBoundarySlottedContent;
using ScopedSelectionFocusAffinityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionFocusAffinity;
using ScopedSelectionHandleWithBottomClippedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionHandleWithBottomClipped;
using ScopedSelectionRemoveRangeNotFoundErrorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionRemoveRangeNotFoundError;
using ScopedSelectionSetBaseAndExtentNonNullNodeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectionSetBaseAndExtentNonNullNode;
using ScopedSelectivePermissionsInterventionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectivePermissionsIntervention;
using ScopedSelectLabelClickOpensPickerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectLabelClickOpensPicker;
using ScopedSelectPopupBackgroundForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectPopupBackground;
using ScopedSelectRemoveOverflowHiddenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectRemoveOverflowHidden;
using ScopedSelectUsesFlatTreeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectUsesFlatTree;
using ScopedSendBeaconThrowForBlobWithNonSimpleTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSendBeaconThrowForBlobWithNonSimpleType;
using ScopedSendEarlyLastBeginMainFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSendEarlyLastBeginMainFrame;
using ScopedSendSlotChangeSignalAfterNodeInsertedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSendSlotChangeSignalAfterNodeInserted;
using ScopedSensorExtraClassesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSensorExtraClasses;
using ScopedSeparateDeferModuleScriptTasksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSeparateDeferModuleScriptTasks;
using ScopedSequentialFocusPrimitivesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSequentialFocusPrimitives;
using ScopedSequentialFocusPrimitivesShadowRootsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSequentialFocusPrimitivesShadowRoots;
using ScopedSerialForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSerial;
using ScopedSerializeInvalidSelectorsInForgivingSelectorListForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSerializeInvalidSelectorsInForgivingSelectorList;
using ScopedSerializeViewTransitionStateInSPAForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSerializeViewTransitionStateInSPA;
using ScopedSerialPortConnectedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSerialPortConnected;
using ScopedServiceWorkerBackgroundSyncInDedicatedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerBackgroundSyncInDedicatedWorker;
using ScopedServiceWorkerClientLifecycleStateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerClientLifecycleState;
using ScopedServiceWorkerCodeCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerCodeCache;
using ScopedServiceWorkerCodeCacheHashingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerCodeCacheHashing;
using ScopedServiceWorkerInDedicatedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerInDedicatedWorker;
using ScopedServiceWorkerScriptEncodingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerScriptEncoding;
using ScopedServiceWorkerStaticRouterTimingInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerStaticRouterTimingInfo;
using ScopedSetHTMLCanRunScriptsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSetHTMLCanRunScripts;
using ScopedSetSequentialFocusStartingPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSetSequentialFocusStartingPoint;
using ScopedSetShapeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSetShape;
using ScopedShadowRootAdoptedStyleSheetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedShadowRootAdoptedStyleSheet;
using ScopedShadowRootNamespaceCheckForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedShadowRootNamespaceCheck;
using ScopedShadowRootReferenceTargetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedShadowRootReferenceTarget;
using ScopedShadowRootReferenceTargetAriaOwnsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedShadowRootReferenceTargetAriaOwns;
using ScopedShadowRootSlotAssignmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedShadowRootSlotAssignment;
using ScopedSharedArrayBufferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedArrayBuffer;
using ScopedSharedArrayBufferUnrestrictedAccessAllowedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedArrayBufferUnrestrictedAccessAllowed;
using ScopedSharedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedWorker;
using ScopedSharedWorkerExtendedLifetimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedWorkerExtendedLifetime;
using ScopedSideRelativeBackgroundPositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSideRelativeBackgroundPosition;
using ScopedSignatureBasedInlineIntegrityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSignatureBasedInlineIntegrity;
using ScopedSingleAxisScrollContainersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSingleAxisScrollContainers;
using ScopedSingleAxisScrollContainersForScrollSnapForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSingleAxisScrollContainersForScrollSnap;
using ScopedSkipAdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipAd;
using ScopedSkipCallbacksWhenDevToolsNotOpenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipCallbacksWhenDevToolsNotOpen;
using ScopedSkipCompositingStaticBackdropFilterAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipCompositingStaticBackdropFilterAnimation;
using ScopedSkipEventCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipEventCapture;
using ScopedSkipHtmlInterchangeInForeignContentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipHtmlInterchangeInForeignContent;
using ScopedSkipInitialForcedScrollbarForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipInitialForcedScrollbar;
using ScopedSkipPaintInvalidationWhileStayingInvisibleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipPaintInvalidationWhileStayingInvisible;
using ScopedSkipStaleUndoStepsInIdleSpellCheckForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipStaleUndoStepsInIdleSpellCheck;
using ScopedSkipTickingStaticAnimationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipTickingStaticAnimations;
using ScopedSkipTouchEventFilterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipTouchEventFilter;
using ScopedSkipUnselectableElementsInParagraphBoundaryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipUnselectableElementsInParagraphBoundary;
using ScopedSmallerViewportUnitsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmallerViewportUnits;
using ScopedSmartCardForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmartCard;
using ScopedSmartCardContextReleaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmartCardContextRelease;
using ScopedSmartZoomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmartZoom;
using ScopedSnapshotScrollTimelinesPostLayoutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSnapshotScrollTimelinesPostLayout;
using ScopedSortedLayoutShiftSourcesByImpactAreaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSortedLayoutShiftSourcesByImpactArea;
using ScopedSourceSpecificMulticastInDirectSocketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSourceSpecificMulticastInDirectSockets;
using ScopedSpatNavUsesCursorInheritanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpatNavUsesCursorInheritance;
using ScopedSpeakerSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeakerSelection;
using ScopedSpecCompliantXmlMimeTypesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpecCompliantXmlMimeTypes;
using ScopedSpeculationMeasurementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationMeasurement;
using ScopedSpeculationRulesModerateViewportHeuristicsControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesModerateViewportHeuristicsControl;
using ScopedSpellCheckChunkingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpellCheckChunking;
using ScopedSpellCheckCustomDictionaryAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpellCheckCustomDictionaryAPI;
using ScopedSplitQualifiedNameOnFirstColonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSplitQualifiedNameOnFirstColon;
using ScopedSplitTextNotCleanupDummySpansForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSplitTextNotCleanupDummySpans;
using ScopedSrcsetSelectionMatchesImageSetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSrcsetSelectionMatchesImageSet;
using ScopedSrcsetTwoDimensionalSizesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSrcsetTwoDimensionalSizes;
using ScopedStableBlinkFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStableBlinkFeatures;
using ScopedStackingContextIsNotStackedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStackingContextIsNotStacked;
using ScopedStaleImageNaturalSizeDuringRevalidationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStaleImageNaturalSizeDuringRevalidation;
using ScopedStaleIntersectionGeometryForThrottledFramesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStaleIntersectionGeometryForThrottledFrames;
using ScopedStandardizedBrowserZoomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStandardizedBrowserZoom;
using ScopedStandardizedBrowserZoomOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStandardizedBrowserZoomOptOut;
using ScopedStickyUserActivationAcrossSameOriginNavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStickyUserActivationAcrossSameOriginNavigation;
using ScopedStorageBucketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageBuckets;
using ScopedStorageBucketsDurabilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageBucketsDurability;
using ScopedStorageBucketsLocksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageBucketsLocks;
using ScopedStrictMimeTypesForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStrictMimeTypesForWorkers;
using ScopedStyleResourceFetcherIdentityCheckForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStyleResourceFetcherIdentityCheck;
using ScopedStylusHandwritingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStylusHandwriting;
using ScopedSubAppsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSubApps;
using ScopedSubframeMouseCaptureOwnerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSubframeMouseCaptureOwner;
using ScopedSuppressFullscreenFromUnfocusedViewForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSuppressFullscreenFromUnfocusedView;
using ScopedSuppressPointerStreamAfterDragForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSuppressPointerStreamAfterDrag;
using ScopedSvgAnimateMotionDiscreteCalcModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgAnimateMotionDiscreteCalcMode;
using ScopedSvgAvoidResettingFilterQualityForTiledPatternForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgAvoidResettingFilterQualityForTiledPattern;
using ScopedSvgCss3dTransformsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgCss3dTransforms;
using ScopedSVGEmbeddedAsReplacedElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSVGEmbeddedAsReplacedElement;
using ScopedSvgEmptyAttributeStringParsingFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgEmptyAttributeStringParsingFix;
using ScopedSvgEnableTextDecorationCssStylingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgEnableTextDecorationCssStyling;
using ScopedSvgFallBackToContainerSizeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgFallBackToContainerSize;
using ScopedSvgFeImageEXIFOrientationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgFeImageEXIFOrientation;
using ScopedSvgFeImageSkipHiddenContainerViewportDependenceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgFeImageSkipHiddenContainerViewportDependence;
using ScopedSvgFilterPaintsForHiddenContentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgFilterPaintsForHiddenContent;
using ScopedSvgFilterUserSpaceViewportForSvgForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgFilterUserSpaceViewportForSvg;
using ScopedSvgHyperlinkElementUtilsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgHyperlinkElementUtils;
using ScopedSvgIgnoreNegativeEllipseRadiiForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgIgnoreNegativeEllipseRadii;
using ScopedSvgImageAnimationResetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgImageAnimationReset;
using ScopedSvgImageNonUniformScalingFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgImageNonUniformScalingFix;
using ScopedSvgIncrementalStyleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgIncrementalStyle;
using ScopedSvgInlineRootPixelSnappingScaleAdjustmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgInlineRootPixelSnappingScaleAdjustment;
using ScopedSvgInstanceSyncOptimizationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgInstanceSyncOptimization;
using ScopedSvgLengthResolveUnparsedValueForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgLengthResolveUnparsedValue;
using ScopedSvgNewZoomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgNewZoom;
using ScopedSVGPathDataAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSVGPathDataAPI;
using ScopedSvgPathLengthCssPropertyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgPathLengthCssProperty;
using ScopedSvgScriptElementAsyncAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgScriptElementAsyncAttribute;
using ScopedSvgScriptFragmentAlreadyStartedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgScriptFragmentAlreadyStarted;
using ScopedSvgSizingWithPreserveAspectRatioNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgSizingWithPreserveAspectRatioNone;
using ScopedSvgStyleElementReflectTypeAndMediaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgStyleElementReflectTypeAndMedia;
using ScopedSvgSupportMediaFragmentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgSupportMediaFragments;
using ScopedSVGTextPathSideAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSVGTextPathSideAttribute;
using ScopedSvgTextPositioningGraphemeClustersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgTextPositioningGraphemeClusters;
using ScopedSvgUseNestedResourceDocumentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgUseNestedResourceDocuments;
using ScopedSvgUseNestedResourceDocumentsDelayLoadForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgUseNestedResourceDocumentsDelayLoad;
using ScopedSyncCrossDocumentAnimationTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSyncCrossDocumentAnimationTiming;
using ScopedSynthesizedKeyboardEventsForAccessibilityActionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSynthesizedKeyboardEventsForAccessibilityActions;
using ScopedSyntheticMouseHoverOverInactivePageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSyntheticMouseHoverOverInactivePage;
using ScopedSystemWakeLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSystemWakeLock;
using ScopedTabAlignmentWithFloatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTabAlignmentWithFloats;
using ScopedTableCellBorderColorInheritForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTableCellBorderColorInherit;
using ScopedTableIsAutoFixedLayoutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTableIsAutoFixedLayout;
using ScopedTabSizeInRubyBaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTabSizeInRubyBase;
using ScopedTargetInShadowDeterminedBeforeListenerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTargetInShadowDeterminedBeforeListener;
using ScopedTargetRangesForBackwardDeletionUnitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTargetRangesForBackwardDeletionUnit;
using ScopedTemporalInputHostBlurForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTemporalInputHostBlur;
using ScopedTestBlinkFeatureDefaultForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestBlinkFeatureDefault;
using ScopedTestFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeature;
using ScopedTestFeatureCustomEnableCheckForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureCustomEnableCheck;
using ScopedTestFeatureDependentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureDependent;
using ScopedTestFeatureForBrowserProcessReadWriteAccessOriginTrialForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureForBrowserProcessReadWriteAccessOriginTrial;
using ScopedTestFeatureImpliedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureImplied;
using ScopedTestFeatureStableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureStable;
using ScopedTextAreaPlaceholderBreakAriaHiddenUpdateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextAreaPlaceholderBreakAriaHiddenUpdate;
using ScopedTextAreaResizerFixedSizeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextAreaResizerFixedSize;
using ScopedTextAutoSpaceIgnoreRubyAnnotationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextAutoSpaceIgnoreRubyAnnotation;
using ScopedTextBoxTrimForNestedListForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextBoxTrimForNestedList;
using ScopedTextBoxTrimOnInlineBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextBoxTrimOnInlineBox;
using ScopedTextBoxTrimOnInlineBoxTextDecorationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextBoxTrimOnInlineBoxTextDecoration;
using ScopedTextDetectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextDetector;
using ScopedTextEmphasisPositionAutoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextEmphasisPositionAuto;
using ScopedTextEncodingDetectorTldHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextEncodingDetectorTldHint;
using ScopedTextFragmentAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextFragmentAPI;
using ScopedTextFragmentIdentifiersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextFragmentIdentifiers;
using ScopedTextFragmentTapOpensContextMenuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextFragmentTapOpensContextMenu;
using ScopedTextIteratorExcludeAutofilledSelectFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextIteratorExcludeAutofilledSelectFix;
using ScopedTextMetricsBaselinesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextMetricsBaselines;
using ScopedTextOverflowClipWithSelectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextOverflowClipWithSelection;
using ScopedTextOverflowInTextareaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextOverflowInTextarea;
using ScopedTextOverflowStringForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextOverflowString;
using ScopedTextScaleMetaTagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextScaleMetaTag;
using ScopedTextSpacingTrimFallbackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextSpacingTrimFallback;
using ScopedTextSpacingTrimFallback2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextSpacingTrimFallback2;
using ScopedTextSpacingTrimFallbackChwsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextSpacingTrimFallbackChws;
using ScopedTextStreamMethodForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextStreamMethod;
using ScopedTimelineTriggerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimelineTrigger;
using ScopedTimePickerHonorsStepForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimePickerHonorsStep;
using ScopedTimerThrottlingForBackgroundTabsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimerThrottlingForBackgroundTabs;
using ScopedTimestampBasedCLSTrackingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimestampBasedCLSTracking;
using ScopedTimeZoneChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimeZoneChangeEvent;
using ScopedTopicsAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTopicsAPI;
using ScopedTouchDragAndContextMenuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchDragAndContextMenu;
using ScopedTouchDragAndDropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchDragAndDrop;
using ScopedTouchDragOnShortPressForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchDragOnShortPress;
using ScopedTouchEventFeatureDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchEventFeatureDetection;
using ScopedTouchTextEditingRedesignForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchTextEditingRedesign;
using ScopedTrackAnimatedSourcesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrackAnimatedSources;
using ScopedTrackAnimatedSourcesForInheritedPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrackAnimatedSourcesForInheritedProperties;
using ScopedTransferableRTCDataChannelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTransferableRTCDataChannel;
using ScopedTranslateServiceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTranslateService;
using ScopedTranslationAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTranslationAPI;
using ScopedTranslationAPIForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTranslationAPIForWorkers;
using ScopedTreatMhtmlInitialDocumentLoadsAsCrossDocumentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTreatMhtmlInitialDocumentLoadsAsCrossDocument;
using ScopedTrustedTypesCreateParserOptionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrustedTypesCreateParserOptions;
using ScopedTrustedTypesFromLiteralForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrustedTypesFromLiteral;
using ScopedTrustedTypesUseCodeLikeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrustedTypesUseCodeLike;
using ScopedTwoPhaseViewTransitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTwoPhaseViewTransition;
using ScopedUAImageReplacementAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUAImageReplacementAPI;
using ScopedUnboundedElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnboundedElement;
using ScopedUnclosedFormControlIsInvalidForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnclosedFormControlIsInvalid;
using ScopedUnexposedTaskIdsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnexposedTaskIds;
using ScopedUnprefixedSpeechRecognitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnprefixedSpeechRecognition;
using ScopedUnrestrictedMeasureUserAgentSpecificMemoryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnrestrictedMeasureUserAgentSpecificMemory;
using ScopedUnrestrictedSharedArrayBufferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnrestrictedSharedArrayBuffer;
using ScopedUnrestrictedUsbForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnrestrictedUsb;
using ScopedUnsafeEscapingUnboundedElementOnTheOpenWebForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnsafeEscapingUnboundedElementOnTheOpenWeb;
using ScopedUnsafeUnboundedElementOnTheOpenWebForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnsafeUnboundedElementOnTheOpenWeb;
using ScopedUpdateComplexSafaAreaConstraintsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUpdateComplexSafaAreaConstraints;
using ScopedUpdateSelectionOnNodeInsertionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUpdateSelectionOnNodeInsertion;
using ScopedURLPatternCompareComponentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLPatternCompareComponent;
using ScopedURLPatternGenerateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLPatternGenerate;
using ScopedURLSearchParamsHasAndDeleteMultipleArgsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLSearchParamsHasAndDeleteMultipleArgs;
using ScopedUseBeginFramePresentationFeedbackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUseBeginFramePresentationFeedback;
using ScopedUseLowQualityInterpolationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUseLowQualityInterpolation;
using ScopedUseOriginalDomOffsetsForOffsetMapForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUseOriginalDomOffsetsForOffsetMap;
using ScopedUsePaintGeometryForIntersectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUsePaintGeometryForIntersection;
using ScopedUsePositionForPointInFlexibleBoxWithSingleChildElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUsePositionForPointInFlexibleBoxWithSingleChildElement;
using ScopedUsePositionIfIsVisuallyEquivalentCandidateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUsePositionIfIsVisuallyEquivalentCandidate;
using ScopedUserActionPseudosStopAtTopLayerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserActionPseudosStopAtTopLayer;
using ScopedUserDefinedEntryPointTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserDefinedEntryPointTiming;
using ScopedUserMediaElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserMediaElement;
using ScopedUserMediaElementLegacyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserMediaElementLegacy;
using ScopedUseShadowHostStyleCheckEditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUseShadowHostStyleCheckEditable;
using ScopedUseUndoStepElementDispatchBeforeInputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUseUndoStepElementDispatchBeforeInput;
using ScopedV8IdleTasksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedV8IdleTasks;
using ScopedVariableSystemFontSupportOnWindowsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVariableSystemFontSupportOnWindows;
using ScopedVideoAutoFullscreenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoAutoFullscreen;
using ScopedVideoFrameMetadataBackgroundBlurForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoFrameMetadataBackgroundBlur;
using ScopedVideoFrameMetadataRtpTimestampForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoFrameMetadataRtpTimestamp;
using ScopedVideoFullscreenOrientationLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoFullscreenOrientationLock;
using ScopedVideoRotateToFullscreenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoRotateToFullscreen;
using ScopedVideoTrackGeneratorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoTrackGenerator;
using ScopedVideoTrackGeneratorInWindowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoTrackGeneratorInWindow;
using ScopedVideoTrackGeneratorInWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoTrackGeneratorInWorker;
using ScopedViewportHeightClientHintHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewportHeightClientHintHeader;
using ScopedViewportSegmentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewportSegments;
using ScopedViewTransitionLongCallbackTimeoutForTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewTransitionLongCallbackTimeoutForTesting;
using ScopedViewTransitionPreventSvgFilterPaintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewTransitionPreventSvgFilterPaint;
using ScopedViewTransitionSkipPseudoTreeForNavigationCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewTransitionSkipPseudoTreeForNavigationCapture;
using ScopedViewTransitionSkipZeroHeightControlsSnapForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewTransitionSkipZeroHeightControlsSnap;
using ScopedVisibilityCollapseColumnForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVisibilityCollapseColumn;
using ScopedVisualRectMappingFixForExpansionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVisualRectMappingFixForExpansion;
using ScopedWakeLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWakeLock;
using ScopedWarnOnContentVisibilityRenderAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWarnOnContentVisibilityRenderAccess;
using ScopedWavyDecorationContinuousPhaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWavyDecorationContinuousPhase;
using ScopedWebAppInstallationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppInstallation;
using ScopedWebAppLaunchQueueForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppLaunchQueue;
using ScopedWebAppScopeExtensionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppScopeExtensions;
using ScopedWebAppScopeSystemAccentColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppScopeSystemAccentColor;
using ScopedWebAppTabStripForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppTabStrip;
using ScopedWebAppTabStripCustomizationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppTabStripCustomizations;
using ScopedWebAppTranslationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppTranslations;
using ScopedWebAssemblyCustomDescriptorsV2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAssemblyCustomDescriptorsV2;
using ScopedWebAssemblyJSPromiseIntegrationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAssemblyJSPromiseIntegration;
using ScopedWebAudioBypassOutputBufferingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAudioBypassOutputBuffering;
using ScopedWebAudioBypassOutputBufferingOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAudioBypassOutputBufferingOptOut;
using ScopedWebAudioConfigurableRenderQuantumForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAudioConfigurableRenderQuantum;
using ScopedWebAuthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuth;
using ScopedWebAuthAuthenticatorAttachmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthAuthenticatorAttachment;
using ScopedWebAuthenticationAmbientForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationAmbient;
using ScopedWebAuthenticationAttestationFormatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationAttestationFormats;
using ScopedWebAuthenticationCmtgKeyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationCmtgKey;
using ScopedWebAuthenticationCrossDeviceFallbackUrlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationCrossDeviceFallbackUrl;
using ScopedWebAuthenticationRemoteClientDataJsonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationRemoteClientDataJson;
using ScopedWebAuthenticationRemoteDesktopSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationRemoteDesktopSupport;
using ScopedWebAutocorrectByDefaultForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAutocorrectByDefault;
using ScopedWebBluetoothForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetooth;
using ScopedWebBluetoothGetDevicesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothGetDevices;
using ScopedWebBluetoothScanningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothScanning;
using ScopedWebBluetoothWatchAdvertisementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothWatchAdvertisements;
using ScopedWebBluetoothWorldIsolatedCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothWorldIsolatedCache;
using ScopedWebCodecsVideoEncoderBuffersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebCodecsVideoEncoderBuffers;
using ScopedWebCryptoPQCForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebCryptoPQC;
using ScopedWebGLDeveloperExtensionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLDeveloperExtensions;
using ScopedWebGLDraftExtensionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLDraftExtensions;
using ScopedWebGLDrawingBufferStorageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLDrawingBufferStorage;
using ScopedWebGLOnWebGPUForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLOnWebGPU;
using ScopedWebGLToneMappingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLToneMapping;
using ScopedWebGPUDeveloperFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUDeveloperFeatures;
using ScopedWebGPUExperimentalFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUExperimentalFeatures;
using ScopedWebGPUExperimentalResourceTableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUExperimentalResourceTable;
using ScopedWebGPUExternalImageHDRHeadroomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUExternalImageHDRHeadroom;
using ScopedWebGPUMapSyncOnWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUMapSyncOnWorkers;
using ScopedWebGPUMultithreadDawnWireOnWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUMultithreadDawnWireOnWorkers;
using ScopedWebHapticsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebHaptics;
using ScopedWebHIDForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebHID;
using ScopedWebHIDOnServiceWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebHIDOnServiceWorkers;
using ScopedWebHIDWorldIsolatedCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebHIDWorldIsolatedCache;
using ScopedWebIdentityDigitalCredentialsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebIdentityDigitalCredentials;
using ScopedWebIdentityDigitalCredentialsCreationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebIdentityDigitalCredentialsCreation;
using ScopedWebIDLBigIntUsesToBigIntForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebIDLBigIntUsesToBigInt;
using ScopedWebMCPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebMCP;
using ScopedWebMCPContinuationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebMCPContinuations;
using ScopedWebMCPDeclarativeFileInputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebMCPDeclarativeFileInput;
using ScopedWebMCPFormAssociatedCustomElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebMCPFormAssociatedCustomElements;
using ScopedWebNFCForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebNFC;
using ScopedWebOTPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebOTP;
using ScopedWebOTPAssertionFeaturePolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebOTPAssertionFeaturePolicy;
using ScopedWebPreferencesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebPreferences;
using ScopedWebPrintingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebPrinting;
using ScopedWebRtcSctpSnapForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebRtcSctpSnap;
using ScopedWebSerialWorldIsolatedCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSerialWorldIsolatedCache;
using ScopedWebShareForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebShare;
using ScopedWebSocketOptionBagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSocketOptionBag;
using ScopedWebSocketStreamForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSocketStream;
using ScopedWebSocketStreamStandardBinaryChunkTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSocketStreamStandardBinaryChunkType;
using ScopedWebSpeechRecognitionContextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSpeechRecognitionContext;
using ScopedWebSpeechTimestampsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSpeechTimestamps;
using ScopedWebSpeechUnspokenPunctuationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSpeechUnspokenPunctuation;
using ScopedWebTransportAnticipatedConcurrentIncomingStreamsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportAnticipatedConcurrentIncomingStreams;
using ScopedWebTransportApplicationProtocolForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportApplicationProtocol;
using ScopedWebTransportCongestionControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportCongestionControl;
using ScopedWebTransportCreateStreamsBeforeReadyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportCreateStreamsBeforeReady;
using ScopedWebTransportCustomCertificatesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportCustomCertificates;
using ScopedWebTransportDatagramsReadableTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportDatagramsReadableType;
using ScopedWebTransportDatagramsWritableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportDatagramsWritable;
using ScopedWebTransportDrainingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportDraining;
using ScopedWebTransportExportKeyingMaterialForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportExportKeyingMaterial;
using ScopedWebTransportHeadersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportHeaders;
using ScopedWebTransportReceiveStreamForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportReceiveStream;
using ScopedWebTransportReliabilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportReliability;
using ScopedWebTransportSendGroupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportSendGroup;
using ScopedWebTransportStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportStats;
using ScopedWebUIBundledCodeCacheAsyncFetchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUIBundledCodeCacheAsyncFetch;
using ScopedWebUSBForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUSB;
using ScopedWebUSBOnDedicatedWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUSBOnDedicatedWorkers;
using ScopedWebUSBOnServiceWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUSBOnServiceWorkers;
using ScopedWebViewEnvReorderFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebViewEnvReorderFix;
using ScopedWebVTTCueLayoutByPositionAlignmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebVTTCueLayoutByPositionAlignment;
using ScopedWebVTTCueTightLineBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebVTTCueTightLineBox;
using ScopedWebVTTLineAndPositionAlignmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebVTTLineAndPositionAlignment;
using ScopedWebVTTRegionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebVTTRegions;
using ScopedWebXRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXR;
using ScopedWebXREnabledFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXREnabledFeatures;
using ScopedWebXRFrameRateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRFrameRate;
using ScopedWebXRFrontFacingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRFrontFacing;
using ScopedWebXRGPUBindingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRGPUBinding;
using ScopedWebXRHitTestEntityTypesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRHitTestEntityTypes;
using ScopedWebXRImageTrackingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRImageTracking;
using ScopedWebXRLayersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRLayers;
using ScopedWebXRLayersCommonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRLayersCommon;
using ScopedWebXRMediaBindingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRMediaBinding;
using ScopedWebXRMeshDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRMeshDetection;
using ScopedWebXRPlaneDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRPlaneDetection;
using ScopedWebXRPoseMotionDataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRPoseMotionData;
using ScopedWebXRSpecParityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRSpecParity;
using ScopedWebXRVisibilityMaskForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRVisibilityMask;
using ScopedWheelEventDeltaExternalPageScaleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWheelEventDeltaExternalPageScale;
using ScopedWheelEventMomentumForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWheelEventMomentum;
using ScopedWindowDefaultStatusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowDefaultStatus;
using ScopedWindowOpenAlwaysOnTopForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowOpenAlwaysOnTop;
using ScopedWindowOpenAttributionSrcForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowOpenAttributionSrc;
using ScopedWindowOpenSplitTabForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowOpenSplitTab;
using ScopedWordSkipSpacesPunctuationFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWordSkipSpacesPunctuationFix;
using ScopedXMLNoExternalEntitiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLNoExternalEntities;
using ScopedXMLParserReplaceLoneSurrogatesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLParserReplaceLoneSurrogates;
using ScopedXMLParsingRustForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLParsingRust;
using ScopedXMLRustForNonXsltForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLRustForNonXslt;
using ScopedXMLSerializerConsistentDefaultNsDeclMatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLSerializerConsistentDefaultNsDeclMatching;
using ScopedXMLViewerForIframesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLViewerForIframes;
using ScopedXSLTForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXSLT;
using ScopedXSLTSpecialTrialForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXSLTSpecialTrial;
using ScopedBraveIsInTorContextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBraveIsInTorContext;
using ScopedBraveGlobalPrivacyControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBraveGlobalPrivacyControl;
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_TEST_HELPERS_H_
