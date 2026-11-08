// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/internal_runtime_flags.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_TESTING_INTERNAL_RUNTIME_FLAGS_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_TESTING_INTERNAL_RUNTIME_FLAGS_H_

#include "third_party/blink/renderer/platform/bindings/script_wrappable.h"
#include "third_party/blink/renderer/platform/heap/garbage_collected.h"
#include "third_party/blink/renderer/platform/runtime_enabled_features.h"
#include "base/memory/scoped_refptr.h"
#include "third_party/blink/renderer/platform/wtf/ref_counted.h"

namespace blink {

class InternalRuntimeFlags : public ScriptWrappable {
  DEFINE_WRAPPERTYPEINFO();
 public:
  static InternalRuntimeFlags* create() {
    return MakeGarbageCollected<InternalRuntimeFlags>();
  }

  InternalRuntimeFlags() {}

  // These are reset between web tests from Internals::resetToConsistentState
  // using RuntimeEnabledFeatures::Backup.
  void setAccelerated2dCanvasEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetAccelerated2dCanvasEnabled(isEnabled);
  }
  void setAutomationControlledEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetAutomationControlledEnabled(isEnabled);
  }
  void setEditContextHandleTextOrSelectionUpdateDuringCompositionEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetEditContextHandleTextOrSelectionUpdateDuringCompositionEnabled(isEnabled);
  }
  void setImplicitRootScrollerEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetImplicitRootScrollerEnabled(isEnabled);
  }
  void setLangAttributeAwareFormControlUIEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetLangAttributeAwareFormControlUIEnabled(isEnabled);
  }
  void setMediaControlsOverlayPlayButtonEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetMediaControlsOverlayPlayButtonEnabled(isEnabled);
  }
  void setPaintUnderInvalidationCheckingEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetPaintUnderInvalidationCheckingEnabled(isEnabled);
  }
  void setPreferNonCompositedScrollingEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetPreferNonCompositedScrollingEnabled(isEnabled);
  }
  void setRemotePlaybackBackendEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetRemotePlaybackBackendEnabled(isEnabled);
  }
  void setSelectionSetBaseAndExtentNonNullNodeEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetSelectionSetBaseAndExtentNonNullNodeEnabled(isEnabled);
  }
  void setVideoAutoFullscreenEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetVideoAutoFullscreenEnabled(isEnabled);
  }

  bool aboutBlankPageRespectsDarkModeOnUserActionEnabled() {
    return RuntimeEnabledFeatures::AboutBlankPageRespectsDarkModeOnUserActionEnabled();
  }
  bool accelerated2dCanvasEnabled() {
    return RuntimeEnabledFeatures::Accelerated2dCanvasEnabled();
  }
  bool acceleratedSmallCanvasesEnabled() {
    return RuntimeEnabledFeatures::AcceleratedSmallCanvasesEnabled();
  }
  bool accessibilityCheckIfcInPreviousTextOnLineEnabled() {
    return RuntimeEnabledFeatures::AccessibilityCheckIfcInPreviousTextOnLineEnabled();
  }
  bool accessibilityCustomElementRoleNoneEnabled() {
    return RuntimeEnabledFeatures::AccessibilityCustomElementRoleNoneEnabled();
  }
  bool accessibilityExposeDisplayNoneEnabled() {
    return RuntimeEnabledFeatures::AccessibilityExposeDisplayNoneEnabled();
  }
  bool accessibilityImplicitActionsEnabled() {
    return RuntimeEnabledFeatures::AccessibilityImplicitActionsEnabled();
  }
  bool accessibilityMinRoleTabbableEnabled() {
    return RuntimeEnabledFeatures::AccessibilityMinRoleTabbableEnabled();
  }
  bool accessibilityOSLevelBoldTextEnabled() {
    return RuntimeEnabledFeatures::AccessibilityOSLevelBoldTextEnabled();
  }
  bool accessibilityProhibitedNamesEnabled() {
    return RuntimeEnabledFeatures::AccessibilityProhibitedNamesEnabled();
  }
  bool accessibilitySerializationSizeMetricsEnabled() {
    return RuntimeEnabledFeatures::AccessibilitySerializationSizeMetricsEnabled();
  }
  bool accessibilityUseAXPositionForDocumentMarkersEnabled() {
    return RuntimeEnabledFeatures::AccessibilityUseAXPositionForDocumentMarkersEnabled();
  }
  bool accessKeyLabelEnabled() {
    return RuntimeEnabledFeatures::AccessKeyLabelEnabled();
  }
  bool addressSpaceEnabled() {
    return RuntimeEnabledFeatures::AddressSpaceEnabled();
  }
  bool adInterestGroupAPIEnabled() {
    return RuntimeEnabledFeatures::AdInterestGroupAPIEnabledByRuntimeFlag();
  }
  bool adjustEndOfNextParagraphIfMovedParagraphIsUpdatedEnabled() {
    return RuntimeEnabledFeatures::AdjustEndOfNextParagraphIfMovedParagraphIsUpdatedEnabled();
  }
  bool adTaggingEnabled() {
    return RuntimeEnabledFeatures::AdTaggingEnabled();
  }
  bool aiDecisionModelAPIEnabled() {
    return RuntimeEnabledFeatures::AIDecisionModelAPIEnabled();
  }
  bool aiDecisionModelAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::AIDecisionModelAPIForWorkersEnabled();
  }
  bool aiEmbeddingsAPIEnabled() {
    return RuntimeEnabledFeatures::AIEmbeddingsAPIEnabled();
  }
  bool aiEmbeddingsAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::AIEmbeddingsAPIForWorkersEnabled();
  }
  bool aiPageContentAnchoredFixedOffscreenNonActionabilityEnabled() {
    return RuntimeEnabledFeatures::AIPageContentAnchoredFixedOffscreenNonActionabilityEnabled();
  }
  bool aiPageContentAnchoredNonFixedOffscreenNonActionabilityEnabled() {
    return RuntimeEnabledFeatures::AIPageContentAnchoredNonFixedOffscreenNonActionabilityEnabled();
  }
  bool aiPageContentBuildOnLoadForTestingEnabled() {
    return RuntimeEnabledFeatures::AIPageContentBuildOnLoadForTestingEnabled();
  }
  bool aiPageContentCheckGeometryEnabled() {
    return RuntimeEnabledFeatures::AIPageContentCheckGeometryEnabled();
  }
  bool aiPageContentConvertNodeTextToUtf8Enabled() {
    return RuntimeEnabledFeatures::AIPageContentConvertNodeTextToUtf8Enabled();
  }
  bool aiPageContentElementCSSRedactionEnabled() {
    return RuntimeEnabledFeatures::AIPageContentElementCSSRedactionEnabled();
  }
  bool aiPageContentIncludeMathMLEnabled() {
    return RuntimeEnabledFeatures::AIPageContentIncludeMathMLEnabled();
  }
  bool aiPageContentIncludeSVGSubtreeEnabled() {
    return RuntimeEnabledFeatures::AIPageContentIncludeSVGSubtreeEnabled();
  }
  bool aiPageContentLabelExpandFallbackSourcesEnabled() {
    return RuntimeEnabledFeatures::AIPageContentLabelExpandFallbackSourcesEnabled();
  }
  bool aiPageContentLabelRemoveRedundantEnabled() {
    return RuntimeEnabledFeatures::AIPageContentLabelRemoveRedundantEnabled();
  }
  bool aiPageContentLabelRemoveRedundantWholeWordMatchingEnabled() {
    return RuntimeEnabledFeatures::AIPageContentLabelRemoveRedundantWholeWordMatchingEnabled();
  }
  bool aiPageContentOuterBoxMapToAncestorSpaceEnabled() {
    return RuntimeEnabledFeatures::AIPageContentOuterBoxMapToAncestorSpaceEnabled();
  }
  bool aiPageContentPaidContentAnnotationEnabled() {
    return RuntimeEnabledFeatures::AIPageContentPaidContentAnnotationEnabled();
  }
  bool aiPageContentSkipUnclickableFixedOverlaysEnabled() {
    return RuntimeEnabledFeatures::AIPageContentSkipUnclickableFixedOverlaysEnabled();
  }
  bool aiPageContentTrackedElementsIframeEnabled() {
    return RuntimeEnabledFeatures::AIPageContentTrackedElementsIframeEnabled();
  }
  bool aiPageContentTrackedElementsPasswordEnabled() {
    return RuntimeEnabledFeatures::AIPageContentTrackedElementsPasswordEnabled();
  }
  bool aiPageContentVisualViewportClampEnabled() {
    return RuntimeEnabledFeatures::AIPageContentVisualViewportClampEnabled();
  }
  bool aiPromptAPIEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPIEnabled();
  }
  bool aiPromptAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPIForWorkersEnabled();
  }
  bool aiPromptAPILegacyIdentifiersEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPILegacyIdentifiersEnabled();
  }
  bool aiPromptAPILegacyParamsEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPILegacyParamsEnabled();
  }
  bool aiPromptAPIMultimodalInputEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPIMultimodalInputEnabled();
  }
  bool aiPromptAPIParamsEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPIParamsEnabledByRuntimeFlag();
  }
  bool aiPromptAPIStructuredOutputEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPIStructuredOutputEnabled();
  }
  bool aiPromptAPIToolUseEnabled() {
    return RuntimeEnabledFeatures::AIPromptAPIToolUseEnabled();
  }
  bool aiProofreadingAPIEnabled() {
    return RuntimeEnabledFeatures::AIProofreadingAPIEnabledByRuntimeFlag();
  }
  bool aiRewriterAPIEnabled() {
    return RuntimeEnabledFeatures::AIRewriterAPIEnabledByRuntimeFlag();
  }
  bool aiRewriterAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::AIRewriterAPIForWorkersEnabled();
  }
  bool aiSummarizationAPIEnabled() {
    return RuntimeEnabledFeatures::AISummarizationAPIEnabled();
  }
  bool aiSummarizationAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::AISummarizationAPIForWorkersEnabled();
  }
  bool aiSummarizationPerformancePreferenceEnabled() {
    return RuntimeEnabledFeatures::AISummarizationPerformancePreferenceEnabled();
  }
  bool aiWriterAPIEnabled() {
    return RuntimeEnabledFeatures::AIWriterAPIEnabledByRuntimeFlag();
  }
  bool aiWriterAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::AIWriterAPIForWorkersEnabled();
  }
  bool alignZoomToCenterEnabled() {
    return RuntimeEnabledFeatures::AlignZoomToCenterEnabled();
  }
  bool allowContentInitiatedDataUrlNavigationsEnabled() {
    return RuntimeEnabledFeatures::AllowContentInitiatedDataUrlNavigationsEnabled();
  }
  bool allowPreloadingWithCSPMetaTagEnabled() {
    return RuntimeEnabledFeatures::AllowPreloadingWithCSPMetaTagEnabled();
  }
  bool allowSvgUseToReferenceExternalDocumentRootEnabled() {
    return RuntimeEnabledFeatures::AllowSvgUseToReferenceExternalDocumentRootEnabled();
  }
  bool allowSyntheticTimingForCanvasCaptureEnabled() {
    return RuntimeEnabledFeatures::AllowSyntheticTimingForCanvasCaptureEnabled();
  }
  bool allowURNsInIframesEnabled() {
    return RuntimeEnabledFeatures::AllowURNsInIframesEnabled();
  }
  bool ancestorOriginsStoredOnDocumentEnabled() {
    return RuntimeEnabledFeatures::AncestorOriginsStoredOnDocumentEnabled();
  }
  bool anchorPositionAdjustmentWithoutOverflowEnabled() {
    return RuntimeEnabledFeatures::AnchorPositionAdjustmentWithoutOverflowEnabled();
  }
  bool androidDownloadableFontsMatchingEnabled() {
    return RuntimeEnabledFeatures::AndroidDownloadableFontsMatchingEnabled();
  }
  bool animationEventAnimationEnabled() {
    return RuntimeEnabledFeatures::AnimationEventAnimationEnabled();
  }
  bool animationProgressAPIEnabled() {
    return RuntimeEnabledFeatures::AnimationProgressAPIEnabled();
  }
  bool animationRangeRejectRelativeLengthsEnabled() {
    return RuntimeEnabledFeatures::AnimationRangeRejectRelativeLengthsEnabled();
  }
  bool animationTriggerEnabled() {
    return RuntimeEnabledFeatures::AnimationTriggerEnabled();
  }
  bool animationWorkletEnabled() {
    return RuntimeEnabledFeatures::AnimationWorkletEnabled();
  }
  bool annotationSpaceForMultiColEnabled() {
    return RuntimeEnabledFeatures::AnnotationSpaceForMultiColEnabled();
  }
  bool annotationSpaceOnStartEnabled() {
    return RuntimeEnabledFeatures::AnnotationSpaceOnStartEnabled();
  }
  bool anonymousIframeEnabled() {
    return RuntimeEnabledFeatures::AnonymousIframeEnabled();
  }
  bool aomAriaRelationshipPropertiesEnabled() {
    return RuntimeEnabledFeatures::AOMAriaRelationshipPropertiesEnabled();
  }
  bool aomAriaRelationshipPropertiesAriaOwnsEnabled() {
    return RuntimeEnabledFeatures::AOMAriaRelationshipPropertiesAriaOwnsEnabled();
  }
  bool appearanceBaseEnabled() {
    return RuntimeEnabledFeatures::AppearanceBaseEnabled();
  }
  bool appearanceDisplayAdjustmentForWidgetsOnlyEnabled() {
    return RuntimeEnabledFeatures::AppearanceDisplayAdjustmentForWidgetsOnlyEnabled();
  }
  bool approximateGeolocationPermissionEnabled() {
    return RuntimeEnabledFeatures::ApproximateGeolocationPermissionEnabled();
  }
  bool approximateGeolocationPermissionAccuracyModeEnabled() {
    return RuntimeEnabledFeatures::ApproximateGeolocationPermissionAccuracyModeEnabled();
  }
  bool approximateGeolocationPermissionAPIEnabled() {
    return RuntimeEnabledFeatures::ApproximateGeolocationPermissionAPIEnabled();
  }
  bool approximateGeolocationWebVisibleAPIEnabled() {
    return RuntimeEnabledFeatures::ApproximateGeolocationWebVisibleAPIEnabled();
  }
  bool appTitleEnabled() {
    return RuntimeEnabledFeatures::AppTitleEnabledByRuntimeFlag();
  }
  bool ariaActionsEnabled() {
    return RuntimeEnabledFeatures::AriaActionsEnabled();
  }
  bool ariaNotifyEnabled() {
    return RuntimeEnabledFeatures::AriaNotifyEnabled();
  }
  bool ariaNotifyV2Enabled() {
    return RuntimeEnabledFeatures::AriaNotifyV2Enabled();
  }
  bool ariaRowColIndexTextEnabled() {
    return RuntimeEnabledFeatures::AriaRowColIndexTextEnabled();
  }
  bool attributionReportingEnabled() {
    return RuntimeEnabledFeatures::AttributionReportingEnabled();
  }
  bool audioContextAsyncStateTransitionsEnabled() {
    return RuntimeEnabledFeatures::AudioContextAsyncStateTransitionsEnabled();
  }
  bool audioContextPlaybackStatsEnabled() {
    return RuntimeEnabledFeatures::AudioContextPlaybackStatsEnabled();
  }
  bool audioContextSetSinkIdEnabled() {
    return RuntimeEnabledFeatures::AudioContextSetSinkIdEnabled();
  }
  bool audioOutputDevicesEnabled() {
    return RuntimeEnabledFeatures::AudioOutputDevicesEnabled();
  }
  bool audioVideoTracksEnabled() {
    return RuntimeEnabledFeatures::AudioVideoTracksEnabled();
  }
  bool audioWorkletSharedPortEnabled() {
    return RuntimeEnabledFeatures::AudioWorkletSharedPortEnabled();
  }
  bool authorSpecifiedLayoutScrollSnapBehaviorEnabled() {
    return RuntimeEnabledFeatures::AuthorSpecifiedLayoutScrollSnapBehaviorEnabled();
  }
  bool autoDarkModeEnabled() {
    return RuntimeEnabledFeatures::AutoDarkModeEnabled();
  }
  bool autoDarkModeSkipImagesEnabled() {
    return RuntimeEnabledFeatures::AutoDarkModeSkipImagesEnabled();
  }
  bool autoDarkModeSVGSizeThresholdEnabled() {
    return RuntimeEnabledFeatures::AutoDarkModeSVGSizeThresholdEnabled();
  }
  bool autofillEnabled() {
    return RuntimeEnabledFeatures::AutofillEnabled();
  }
  bool autofillEventEnabled() {
    return RuntimeEnabledFeatures::AutofillEventEnabledByRuntimeFlag();
  }
  bool autofillPreviewGenericFontFamilyEnabled() {
    return RuntimeEnabledFeatures::AutofillPreviewGenericFontFamilyEnabled();
  }
  bool autofillPreviewIgnoreAuthorFontEnabled() {
    return RuntimeEnabledFeatures::AutofillPreviewIgnoreAuthorFontEnabled();
  }
  bool automationControlledEnabled() {
    return RuntimeEnabledFeatures::AutomationControlledEnabled();
  }
  bool autoPictureInPictureVideoHeuristicsEnabled() {
    return RuntimeEnabledFeatures::AutoPictureInPictureVideoHeuristicsEnabled();
  }
  bool autoSizeUsesScrollWidthForOverflowEnabled() {
    return RuntimeEnabledFeatures::AutoSizeUsesScrollWidthForOverflowEnabled();
  }
  bool avoidEmbeddedContentViewLocationEnabled() {
    return RuntimeEnabledFeatures::AvoidEmbeddedContentViewLocationEnabled();
  }
  bool avoidNonSelectableSelectionBoundaryEnabled() {
    return RuntimeEnabledFeatures::AvoidNonSelectableSelectionBoundaryEnabled();
  }
  bool avoidSynchronousBlurOnDisabledAttributeChangeEnabled() {
    return RuntimeEnabledFeatures::AvoidSynchronousBlurOnDisabledAttributeChangeEnabled();
  }
  bool backfaceVisibilityInteropEnabled() {
    return RuntimeEnabledFeatures::BackfaceVisibilityInteropEnabled();
  }
  bool backForwardCacheEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheEnabled();
  }
  bool backForwardCacheExperimentHTTPHeaderEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheExperimentHTTPHeaderEnabledByRuntimeFlag();
  }
  bool backForwardCacheNotRestoredReasonsEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheNotRestoredReasonsEnabledByRuntimeFlag();
  }
  bool backForwardCacheRestorationPerformanceEntryEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheRestorationPerformanceEntryEnabled();
  }
  bool backForwardCacheUpdateNotRestoredReasonsNameEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheUpdateNotRestoredReasonsNameEnabled();
  }
  bool backgroundClipTextDecorationEnabled() {
    return RuntimeEnabledFeatures::BackgroundClipTextDecorationEnabled();
  }
  bool backgroundFetchEnabled() {
    return RuntimeEnabledFeatures::BackgroundFetchEnabled();
  }
  bool backgroundPageFreezeOptOutEnabled() {
    return RuntimeEnabledFeatures::BackgroundPageFreezeOptOutEnabledByRuntimeFlag();
  }
  bool barcodeDetectorEnabled() {
    return RuntimeEnabledFeatures::BarcodeDetectorEnabled();
  }
  bool baseAppearanceInlineSizingEnabled() {
    return RuntimeEnabledFeatures::BaseAppearanceInlineSizingEnabled();
  }
  bool basicShapeCornerRadiusEnabled() {
    return RuntimeEnabledFeatures::BasicShapeCornerRadiusEnabled();
  }
  bool bidiCaretAffinityEnabled() {
    return RuntimeEnabledFeatures::BidiCaretAffinityEnabled();
  }
  bool bidiVisualOrderCaretMovementEnabled() {
    return RuntimeEnabledFeatures::BidiVisualOrderCaretMovementEnabled();
  }
  bool blinkExtensionWebViewEnabled() {
    return RuntimeEnabledFeatures::BlinkExtensionWebViewEnabled();
  }
  bool blinkExtensionWebViewMediaIntegrityEnabled() {
    return RuntimeEnabledFeatures::BlinkExtensionWebViewMediaIntegrityEnabled();
  }
  bool blinkGeometryMapperViewportFastPathEnabled() {
    return RuntimeEnabledFeatures::BlinkGeometryMapperViewportFastPathEnabled();
  }
  bool blinkLifecycleScriptForbiddenEnabled() {
    return RuntimeEnabledFeatures::BlinkLifecycleScriptForbiddenEnabled();
  }
  bool blinkRuntimeCallStatsEnabled() {
    return RuntimeEnabledFeatures::BlinkRuntimeCallStatsEnabled();
  }
  bool blobBytesEnabled() {
    return RuntimeEnabledFeatures::BlobBytesEnabled();
  }
  bool blockingFocusWithoutUserActivationEnabled() {
    return RuntimeEnabledFeatures::BlockingFocusWithoutUserActivationEnabledByRuntimeFlag();
  }
  bool blockSelectPopupUnfocusedWindowEnabled() {
    return RuntimeEnabledFeatures::BlockSelectPopupUnfocusedWindowEnabled();
  }
  bool boundaryEventDispatchTracksNodeRemovalEnabled() {
    return RuntimeEnabledFeatures::BoundaryEventDispatchTracksNodeRemovalEnabled();
  }
  bool boxDecorationBreakCloneLineBreakingEnabled() {
    return RuntimeEnabledFeatures::BoxDecorationBreakCloneLineBreakingEnabled();
  }
  bool browserInitiatedAutomaticPictureInPictureEnabled() {
    return RuntimeEnabledFeatures::BrowserInitiatedAutomaticPictureInPictureEnabled();
  }
  bool bufferedBytesConsumerLimitSizeEnabled() {
    return RuntimeEnabledFeatures::BufferedBytesConsumerLimitSizeEnabled();
  }
  bool bypassPepcSecurityForTestingEnabled() {
    return RuntimeEnabledFeatures::BypassPepcSecurityForTestingEnabled();
  }
  bool cacheControlRFC7234ParsingEnabled() {
    return RuntimeEnabledFeatures::CacheControlRFC7234ParsingEnabled();
  }
  bool cacheControlRFC7234ParsingMetricsEnabled() {
    return RuntimeEnabledFeatures::CacheControlRFC7234ParsingMetricsEnabled();
  }
  bool cacheStorageCodeCacheHintEnabled() {
    return RuntimeEnabledFeatures::CacheStorageCodeCacheHintEnabledByRuntimeFlag();
  }
  bool cacheStyleAdjusterEnabled() {
    return RuntimeEnabledFeatures::CacheStyleAdjusterEnabled();
  }
  bool cameraAndMicrophoneElementsEnabled() {
    return RuntimeEnabledFeatures::CameraAndMicrophoneElementsEnabled();
  }
  bool canvas2dCanvasFilterEnabled() {
    return RuntimeEnabledFeatures::Canvas2dCanvasFilterEnabled();
  }
  bool canvas2dDeferredFlushEnabled() {
    return RuntimeEnabledFeatures::Canvas2dDeferredFlushEnabled();
  }
  bool canvas2dLayersEnabled() {
    return RuntimeEnabledFeatures::Canvas2dLayersEnabled();
  }
  bool canvas2dLayersWithOptionsEnabled() {
    return RuntimeEnabledFeatures::Canvas2dLayersWithOptionsEnabled();
  }
  bool canvas2dMeshEnabled() {
    return RuntimeEnabledFeatures::Canvas2dMeshEnabledByRuntimeFlag();
  }
  bool canvasDrawElementEnabled() {
    return RuntimeEnabledFeatures::CanvasDrawElementEnabledByRuntimeFlag();
  }
  bool canvasFloatingPointEnabled() {
    return RuntimeEnabledFeatures::CanvasFloatingPointEnabled();
  }
  bool canvasGlobalHDRHeadroomEnabled() {
    return RuntimeEnabledFeatures::CanvasGlobalHDRHeadroomEnabled();
  }
  bool canvasGradientCSSColor4Enabled() {
    return RuntimeEnabledFeatures::CanvasGradientCSSColor4Enabled();
  }
  bool canvasHDREnabled() {
    return RuntimeEnabledFeatures::CanvasHDREnabled();
  }
  bool canvasTextDirectionReflectEnabled() {
    return RuntimeEnabledFeatures::CanvasTextDirectionReflectEnabled();
  }
  bool canvasTextMetricsPreciseBoundsEnabled() {
    return RuntimeEnabledFeatures::CanvasTextMetricsPreciseBoundsEnabled();
  }
  bool canvasToneMappingEnabled() {
    return RuntimeEnabledFeatures::CanvasToneMappingEnabled();
  }
  bool canvasUsesArcPaintOpEnabled() {
    return RuntimeEnabledFeatures::CanvasUsesArcPaintOpEnabled();
  }
  bool capabilityDelegationDigitalCredentialsEnabled() {
    return RuntimeEnabledFeatures::CapabilityDelegationDigitalCredentialsEnabled();
  }
  bool capabilityDelegationDisplayCaptureRequestEnabled() {
    return RuntimeEnabledFeatures::CapabilityDelegationDisplayCaptureRequestEnabled();
  }
  bool capabilityDelegationPopupEnabled() {
    return RuntimeEnabledFeatures::CapabilityDelegationPopupEnabled();
  }
  bool capabilityElementIconOnlyModeEnabled() {
    return RuntimeEnabledFeatures::CapabilityElementIconOnlyModeEnabled();
  }
  bool capitalizeAfterSupplementaryCharacterFixEnabled() {
    return RuntimeEnabledFeatures::CapitalizeAfterSupplementaryCharacterFixEnabled();
  }
  bool captureControllerEnabled() {
    return RuntimeEnabledFeatures::CaptureControllerEnabled();
  }
  bool capturedMouseEventsEnabled() {
    return RuntimeEnabledFeatures::CapturedMouseEventsEnabled();
  }
  bool capturedSurfaceControlEnabled() {
    return RuntimeEnabledFeatures::CapturedSurfaceControlEnabled();
  }
  bool capturedSurfaceResolutionEnabled() {
    return RuntimeEnabledFeatures::CapturedSurfaceResolutionEnabled();
  }
  bool captureHandleEnabled() {
    return RuntimeEnabledFeatures::CaptureHandleEnabled();
  }
  bool caretBlinkingEnabled() {
    return RuntimeEnabledFeatures::CaretBlinkingEnabled();
  }
  bool caretBrowsingSequentialFocusStartingPointEnabled() {
    return RuntimeEnabledFeatures::CaretBrowsingSequentialFocusStartingPointEnabled();
  }
  bool caretOutsideEditableAtomicInlineEnabled() {
    return RuntimeEnabledFeatures::CaretOutsideEditableAtomicInlineEnabled();
  }
  bool cctNewRFMPushBehaviorEnabled() {
    return RuntimeEnabledFeatures::CCTNewRFMPushBehaviorEnabled();
  }
  bool cdtNewCrossOriginHandlingEnabled() {
    return RuntimeEnabledFeatures::CDTNewCrossOriginHandlingEnabled();
  }
  bool cdtNewDestinationEnabled() {
    return RuntimeEnabledFeatures::CDTNewDestinationEnabled();
  }
  bool cdtNewReferrerAndReferrerPolicyHandlingEnabled() {
    return RuntimeEnabledFeatures::CDTNewReferrerAndReferrerPolicyHandlingEnabled();
  }
  bool checkableInputTypeLayoutInlineEnabled() {
    return RuntimeEnabledFeatures::CheckableInputTypeLayoutInlineEnabled();
  }
  bool checkCSPOnInlineScriptAttributeSetEnabled() {
    return RuntimeEnabledFeatures::CheckCSPOnInlineScriptAttributeSetEnabled();
  }
  bool clampUnfocusedSelectionCacheEnabled() {
    return RuntimeEnabledFeatures::ClampUnfocusedSelectionCacheEnabled();
  }
  bool cleanUpActivationBehaviorEnabled() {
    return RuntimeEnabledFeatures::CleanUpActivationBehaviorEnabled();
  }
  bool clearCrossOriginRelatedTargetEnabled() {
    return RuntimeEnabledFeatures::ClearCrossOriginRelatedTargetEnabled();
  }
  bool clearCurrentTargetAfterDispatchEnabled() {
    return RuntimeEnabledFeatures::ClearCurrentTargetAfterDispatchEnabled();
  }
  bool clearDisplayLockPrePaintFlagsEnabled() {
    return RuntimeEnabledFeatures::ClearDisplayLockPrePaintFlagsEnabled();
  }
  bool clearFocusWithinOnSubtreeRemovalEnabled() {
    return RuntimeEnabledFeatures::ClearFocusWithinOnSubtreeRemovalEnabled();
  }
  bool clearTargetOnlyIfInShadowTreeEnabled() {
    return RuntimeEnabledFeatures::ClearTargetOnlyIfInShadowTreeEnabled();
  }
  bool clipboardEventTargetUsesContainerNodeEnabled() {
    return RuntimeEnabledFeatures::ClipboardEventTargetUsesContainerNodeEnabled();
  }
  bool clipboardOnExtensionServiceWorkerEnabled() {
    return RuntimeEnabledFeatures::ClipboardOnExtensionServiceWorkerEnabled();
  }
  bool clipboardPasteImageRespectBufferEnabled() {
    return RuntimeEnabledFeatures::ClipboardPasteImageRespectBufferEnabled();
  }
  bool clipElementVisibleBoundsInLocalRootEnabled() {
    return RuntimeEnabledFeatures::ClipElementVisibleBoundsInLocalRootEnabled();
  }
  bool clipPathNestedRasterOptimizationEnabled() {
    return RuntimeEnabledFeatures::ClipPathNestedRasterOptimizationEnabled();
  }
  bool coalesceSelectionchangeEventEnabled() {
    return RuntimeEnabledFeatures::CoalesceSelectionchangeEventEnabled();
  }
  bool coepReflectionEnabled() {
    return RuntimeEnabledFeatures::CoepReflectionEnabled();
  }
  bool colorInputAcceptsCSSColorsEnabled() {
    return RuntimeEnabledFeatures::ColorInputAcceptsCSSColorsEnabled();
  }
  bool colorSpaceDisplayP3LinearEnabled() {
    return RuntimeEnabledFeatures::ColorSpaceDisplayP3LinearEnabled();
  }
  bool colorSpacePredefinedLinearSpacesEnabled() {
    return RuntimeEnabledFeatures::ColorSpacePredefinedLinearSpacesEnabled();
  }
  bool colorSpaceRec2100LinearEnabled() {
    return RuntimeEnabledFeatures::ColorSpaceRec2100LinearEnabled();
  }
  bool composedPathReturnTargetBeingDispatchedEnabled() {
    return RuntimeEnabledFeatures::ComposedPathReturnTargetBeingDispatchedEnabled();
  }
  bool compositeClipPathAnimationEnabled() {
    return RuntimeEnabledFeatures::CompositeClipPathAnimationEnabled();
  }
  bool compositedSelectionUpdateEnabled() {
    return RuntimeEnabledFeatures::CompositedSelectionUpdateEnabled();
  }
  bool compositeHoverStyleEnabled() {
    return RuntimeEnabledFeatures::CompositeHoverStyleEnabled();
  }
  bool compositingDecisionAtAnimationPhaseBoundariesEnabled() {
    return RuntimeEnabledFeatures::CompositingDecisionAtAnimationPhaseBoundariesEnabled();
  }
  bool compositionForegroundMarkersEnabled() {
    return RuntimeEnabledFeatures::CompositionForegroundMarkersEnabled();
  }
  bool compositorEventTriggerEnabled() {
    return RuntimeEnabledFeatures::CompositorEventTriggerEnabled();
  }
  bool compositorTimelineTriggerEnabled() {
    return RuntimeEnabledFeatures::CompositorTimelineTriggerEnabled();
  }
  bool compressionDictionaryTransportEnabled() {
    return RuntimeEnabledFeatures::CompressionDictionaryTransportEnabled();
  }
  bool computedAccessibilityInfoEnabled() {
    return RuntimeEnabledFeatures::ComputedAccessibilityInfoEnabled();
  }
  bool computePressureEnabled() {
    return RuntimeEnabledFeatures::ComputePressureEnabled();
  }
  bool concurrentNativePaintWorkletsEnabled() {
    return RuntimeEnabledFeatures::ConcurrentNativePaintWorkletsEnabled();
  }
  bool conditionalTracingLoAFEnabled() {
    return RuntimeEnabledFeatures::ConditionalTracingLoAFEnabled();
  }
  bool connectionAllowlistEmbeddedEnforcementEnabled() {
    return RuntimeEnabledFeatures::ConnectionAllowlistEmbeddedEnforcementEnabledByRuntimeFlag();
  }
  bool consistentFormControlPaintSnappingEnabled() {
    return RuntimeEnabledFeatures::ConsistentFormControlPaintSnappingEnabled();
  }
  bool constructableStylesheetCacheEnabled() {
    return RuntimeEnabledFeatures::ConstructableStylesheetCacheEnabled();
  }
  bool contactsManagerEnabled() {
    return RuntimeEnabledFeatures::ContactsManagerEnabled();
  }
  bool contactsManagerExtraPropertiesEnabled() {
    return RuntimeEnabledFeatures::ContactsManagerExtraPropertiesEnabled();
  }
  bool containerTimingEnabled() {
    return RuntimeEnabledFeatures::ContainerTimingEnabledByRuntimeFlag();
  }
  bool contentIndexEnabled() {
    return RuntimeEnabledFeatures::ContentIndexEnabled();
  }
  bool contextMenuEnabled() {
    return RuntimeEnabledFeatures::ContextMenuEnabled();
  }
  bool controlledFrameEnabled() {
    return RuntimeEnabledFeatures::ControlledFrameEnabled();
  }
  bool controlledFrameWebRequestSecurityInfoEnabled() {
    return RuntimeEnabledFeatures::ControlledFrameWebRequestSecurityInfoEnabled();
  }
  bool cookieStoreAPIMaxAgeEnabled() {
    return RuntimeEnabledFeatures::CookieStoreAPIMaxAgeEnabled();
  }
  bool cookieStoreAPIWhitespaceStrippingEnabled() {
    return RuntimeEnabledFeatures::CookieStoreAPIWhitespaceStrippingEnabled();
  }
  bool coopRestrictPropertiesEnabled() {
    return RuntimeEnabledFeatures::CoopRestrictPropertiesEnabledByRuntimeFlag();
  }
  bool correctTemplateFormParsingEnabled() {
    return RuntimeEnabledFeatures::CorrectTemplateFormParsingEnabled();
  }
  bool corsRFC1918Enabled() {
    return RuntimeEnabledFeatures::CorsRFC1918Enabled();
  }
  bool cpuPerformanceEnabled() {
    return RuntimeEnabledFeatures::CpuPerformanceEnabledByRuntimeFlag();
  }
  bool crashReportingStorageAPIEnabled() {
    return RuntimeEnabledFeatures::CrashReportingStorageAPIEnabledByRuntimeFlag();
  }
  bool createInlineContentsAnonymousBlockEnabled() {
    return RuntimeEnabledFeatures::CreateInlineContentsAnonymousBlockEnabled();
  }
  bool crossOriginStorageEnabled() {
    return RuntimeEnabledFeatures::CrossOriginStorageEnabled();
  }
  bool cspHashesV1Enabled() {
    return RuntimeEnabledFeatures::CSPHashesV1EnabledByRuntimeFlag();
  }
  bool cspReportHashEnabled() {
    return RuntimeEnabledFeatures::CSPReportHashEnabled();
  }
  bool cssAccentColorKeywordEnabled() {
    return RuntimeEnabledFeatures::CSSAccentColorKeywordEnabled();
  }
  bool cssActiveCaptionMapsToCanvasEnabled() {
    return RuntimeEnabledFeatures::CSSActiveCaptionMapsToCanvasEnabled();
  }
  bool cssAlphaColorFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSAlphaColorFunctionEnabled();
  }
  bool cssAlphaColorFunctionRequiresAlphaEnabled() {
    return RuntimeEnabledFeatures::CSSAlphaColorFunctionRequiresAlphaEnabled();
  }
  bool cssAltCounterEnabled() {
    return RuntimeEnabledFeatures::CSSAltCounterEnabled();
  }
  bool cssAnimationIterationCompositeEnabled() {
    return RuntimeEnabledFeatures::CSSAnimationIterationCompositeEnabled();
  }
  bool cssArgumentGrammarEnabled() {
    return RuntimeEnabledFeatures::CSSArgumentGrammarEnabled();
  }
  bool cssAtRuleCounterStyleImageSymbolsEnabled() {
    return RuntimeEnabledFeatures::CSSAtRuleCounterStyleImageSymbolsEnabled();
  }
  bool cssAtRuleCounterStyleSpeakAsDescriptorEnabled() {
    return RuntimeEnabledFeatures::CSSAtRuleCounterStyleSpeakAsDescriptorEnabled();
  }
  bool cssAttributeValueCaseSensitiveNonHTMLEnabled() {
    return RuntimeEnabledFeatures::CSSAttributeValueCaseSensitiveNonHTMLEnabled();
  }
  bool cssBackgroundClipBorderAreaEnabled() {
    return RuntimeEnabledFeatures::CSSBackgroundClipBorderAreaEnabled();
  }
  bool cssBackgroundLayerCountIndependenceEnabled() {
    return RuntimeEnabledFeatures::CSSBackgroundLayerCountIndependenceEnabled();
  }
  bool cssBorderRadiusSideShorthandsEnabled() {
    return RuntimeEnabledFeatures::CSSBorderRadiusSideShorthandsEnabled();
  }
  bool cssBorderShapeEnabled() {
    return RuntimeEnabledFeatures::CSSBorderShapeEnabled();
  }
  bool cssCalcEarlyNaNAndInfFoldingEnabled() {
    return RuntimeEnabledFeatures::CSSCalcEarlyNaNAndInfFoldingEnabled();
  }
  bool cssCalcSimplificationAndSerializationEnabled() {
    return RuntimeEnabledFeatures::CSSCalcSimplificationAndSerializationEnabled();
  }
  bool cssCaretAnimationEnabled() {
    return RuntimeEnabledFeatures::CSSCaretAnimationEnabled();
  }
  bool cssCaretColorWithOptionalSecondValueEnabled() {
    return RuntimeEnabledFeatures::CSSCaretColorWithOptionalSecondValueEnabled();
  }
  bool cssCaretShapeEnabled() {
    return RuntimeEnabledFeatures::CSSCaretShapeEnabled();
  }
  bool cssCaseSensitiveSelectorEnabled() {
    return RuntimeEnabledFeatures::CSSCaseSensitiveSelectorEnabled();
  }
  bool cssChUnitSpecCompliantFallbackEnabled() {
    return RuntimeEnabledFeatures::CSSChUnitSpecCompliantFallbackEnabled();
  }
  bool cssColorTypedOMEnabled() {
    return RuntimeEnabledFeatures::CSSColorTypedOMEnabled();
  }
  bool cssContainerProgressNotationEnabled() {
    return RuntimeEnabledFeatures::CSSContainerProgressNotationEnabled();
  }
  bool cssContainerStyleQueriesRangeEnabled() {
    return RuntimeEnabledFeatures::CSSContainerStyleQueriesRangeEnabled();
  }
  bool cssCornersShorthandEnabled() {
    return RuntimeEnabledFeatures::CSSCornersShorthandEnabled();
  }
  bool cssCounterResetReversedEnabled() {
    return RuntimeEnabledFeatures::CSSCounterResetReversedEnabled();
  }
  bool cssCounterStyleSymbolsFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSCounterStyleSymbolsFunctionEnabled();
  }
  bool cssCrossFadeEnabled() {
    return RuntimeEnabledFeatures::CSSCrossFadeEnabled();
  }
  bool cssCustomHighlightUniversalSelectorEnabled() {
    return RuntimeEnabledFeatures::CSSCustomHighlightUniversalSelectorEnabled();
  }
  bool cssCustomMediaEnabled() {
    return RuntimeEnabledFeatures::CSSCustomMediaEnabled();
  }
  bool cssDynamicRangeLimitEnabled() {
    return RuntimeEnabledFeatures::CSSDynamicRangeLimitEnabled();
  }
  bool cssEnumeratedCustomPropertiesEnabled() {
    return RuntimeEnabledFeatures::CSSEnumeratedCustomPropertiesEnabled();
  }
  bool cssFlowStartAndEndEnabled() {
    return RuntimeEnabledFeatures::CSSFlowStartAndEndEnabled();
  }
  bool cssFlowStartAndEndSerializationEnabled() {
    return RuntimeEnabledFeatures::CSSFlowStartAndEndSerializationEnabled();
  }
  bool cssFontFamilySerializationEnabled() {
    return RuntimeEnabledFeatures::CSSFontFamilySerializationEnabled();
  }
  bool cssFontSizeAdjustEnabled() {
    return RuntimeEnabledFeatures::CSSFontSizeAdjustEnabled();
  }
  bool cssFunctionsEnabled() {
    return RuntimeEnabledFeatures::CSSFunctionsEnabled();
  }
  bool cssGridLanesLayoutEnabled() {
    return RuntimeEnabledFeatures::CSSGridLanesLayoutEnabled();
  }
  bool cssHangingPunctuationEnabled() {
    return RuntimeEnabledFeatures::CSSHangingPunctuationEnabled();
  }
  bool cssHexAlphaColorEnabled() {
    return RuntimeEnabledFeatures::CSSHexAlphaColorEnabled();
  }
  bool cssIdentFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSIdentFunctionEnabled();
  }
  bool cssImageAnimationEnabled() {
    return RuntimeEnabledFeatures::CSSImageAnimationEnabled();
  }
  bool cssImageFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSImageFunctionEnabled();
  }
  bool cssInheritFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSInheritFunctionEnabled();
  }
  bool cssInRangeOutOfRangeReversedRangesEnabled() {
    return RuntimeEnabledFeatures::CSSInRangeOutOfRangeReversedRangesEnabled();
  }
  bool cssKeyframesRuleLengthEnabled() {
    return RuntimeEnabledFeatures::CSSKeyframesRuleLengthEnabled();
  }
  bool cssLangExtendedRangesEnabled() {
    return RuntimeEnabledFeatures::CSSLangExtendedRangesEnabled();
  }
  bool cssLayoutAPIEnabled() {
    return RuntimeEnabledFeatures::CSSLayoutAPIEnabled();
  }
  bool cssLightDarkImageEnabled() {
    return RuntimeEnabledFeatures::CSSLightDarkImageEnabled();
  }
  bool cssLineClampEnabled() {
    return RuntimeEnabledFeatures::CSSLineClampEnabled();
  }
  bool cssLineClampAsShorthandEnabled() {
    return RuntimeEnabledFeatures::CSSLineClampAsShorthandEnabled();
  }
  bool cssLineClampLineBreakingEllipsisEnabled() {
    return RuntimeEnabledFeatures::CSSLineClampLineBreakingEllipsisEnabled();
  }
  bool cssLinkParametersPropertyEnabled() {
    return RuntimeEnabledFeatures::CSSLinkParametersPropertyEnabled();
  }
  bool cssListCounterAccountingEnabled() {
    return RuntimeEnabledFeatures::CSSListCounterAccountingEnabled();
  }
  bool cssLogicalCombinationPseudoEnabled() {
    return RuntimeEnabledFeatures::CSSLogicalCombinationPseudoEnabled();
  }
  bool cssMarkerNestedPseudoElementEnabled() {
    return RuntimeEnabledFeatures::CSSMarkerNestedPseudoElementEnabled();
  }
  bool cssMaxContentSizingEnabled() {
    return RuntimeEnabledFeatures::CssMaxContentSizingEnabled();
  }
  bool cssMediaElementPseudosEnabled() {
    return RuntimeEnabledFeatures::CSSMediaElementPseudosEnabled();
  }
  bool cssMediaProgressNotationEnabled() {
    return RuntimeEnabledFeatures::CSSMediaProgressNotationEnabled();
  }
  bool cssMixinsEnabled() {
    return RuntimeEnabledFeatures::CSSMixinsEnabled();
  }
  bool cssNestedPseudoElementsEnabled() {
    return RuntimeEnabledFeatures::CSSNestedPseudoElementsEnabled();
  }
  bool cssomGetComputedStylePseudoElementRequiresColonEnabled() {
    return RuntimeEnabledFeatures::CSSOMGetComputedStylePseudoElementRequiresColonEnabled();
  }
  bool cssPaintAPIArgumentsEnabled() {
    return RuntimeEnabledFeatures::CSSPaintAPIArgumentsEnabled();
  }
  bool cssParserIgnoreCharsetForURLsEnabled() {
    return RuntimeEnabledFeatures::CSSParserIgnoreCharsetForURLsEnabled();
  }
  bool cssPolygonRoundingEnabled() {
    return RuntimeEnabledFeatures::CSSPolygonRoundingEnabled();
  }
  bool cssPositionStickyStaticScrollPositionEnabled() {
    return RuntimeEnabledFeatures::CSSPositionStickyStaticScrollPositionEnabled();
  }
  bool cssPositionVisibilityAnchorValidEnabled() {
    return RuntimeEnabledFeatures::CSSPositionVisibilityAnchorValidEnabled();
  }
  bool cssPrivateEnabled() {
    return RuntimeEnabledFeatures::CSSPrivateEnabled();
  }
  bool cssProgressNotationEnabled() {
    return RuntimeEnabledFeatures::CSSProgressNotationEnabled();
  }
  bool cssProgressNotationNoClampEnabled() {
    return RuntimeEnabledFeatures::CSSProgressNotationNoClampEnabled();
  }
  bool cssPseudoColumnEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoColumnEnabled();
  }
  bool cssPseudoElementBackdropEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoElementBackdropEnabled();
  }
  bool cssPseudoElementInterfaceEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoElementInterfaceEnabled();
  }
  bool cssPseudoElementScrollButtonEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoElementScrollButtonEnabled();
  }
  bool cssPseudoElementSelectorTextEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoElementSelectorTextEnabled();
  }
  bool cssPseudoElementViewTransitionsEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoElementViewTransitionsEnabled();
  }
  bool cssPseudoHasSlottedEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoHasSlottedEnabled();
  }
  bool cssPseudoScrollButtonsEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoScrollButtonsEnabled();
  }
  bool cssPseudoScrollMarkersEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoScrollMarkersEnabled();
  }
  bool cssRandomFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSRandomFunctionEnabled();
  }
  bool cssRandomFunctionTypedOMEnabled() {
    return RuntimeEnabledFeatures::CSSRandomFunctionTypedOMEnabled();
  }
  bool cssResizeAutoEnabled() {
    return RuntimeEnabledFeatures::CSSResizeAutoEnabled();
  }
  bool cssRevertRuleEnabled() {
    return RuntimeEnabledFeatures::CSSRevertRuleEnabled();
  }
  bool cssRubyOverhangEnabled() {
    return RuntimeEnabledFeatures::CSSRubyOverhangEnabled();
  }
  bool cssSafePrintableInsetEnabled() {
    return RuntimeEnabledFeatures::CSSSafePrintableInsetEnabled();
  }
  bool cssScopeifiedParentPseudoClassEnabled() {
    return RuntimeEnabledFeatures::CSSScopeifiedParentPseudoClassEnabled();
  }
  bool cssScopeImportEnabled() {
    return RuntimeEnabledFeatures::CSSScopeImportEnabled();
  }
  bool cssScrolledContainerQueriesEnabled() {
    return RuntimeEnabledFeatures::CSSScrolledContainerQueriesEnabled();
  }
  bool cssScrollInitialTargetEnabled() {
    return RuntimeEnabledFeatures::CSSScrollInitialTargetEnabled();
  }
  bool cssScrollMarkerGroupModesEnabled() {
    return RuntimeEnabledFeatures::CSSScrollMarkerGroupModesEnabled();
  }
  bool cssScrollMarkerTargetBeforeAfterEnabled() {
    return RuntimeEnabledFeatures::CSSScrollMarkerTargetBeforeAfterEnabled();
  }
  bool cssScrollSnapChangeEventEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapChangeEventEnabled();
  }
  bool cssScrollSnapChangingEventEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapChangingEventEnabled();
  }
  bool cssScrollSnapEventConstructorExposedEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapEventConstructorExposedEnabled();
  }
  bool cssScrollSnapEventsEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapEventsEnabled();
  }
  bool cssScrollSnapStopBeforeEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapStopBeforeEnabled();
  }
  bool cssScrollSnapTypePairEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapTypePairEnabled();
  }
  bool cssScrollTargetGroupEnabled() {
    return RuntimeEnabledFeatures::CSSScrollTargetGroupEnabled();
  }
  bool cssScrollTargetGroupAriaCurrentEnabled() {
    return RuntimeEnabledFeatures::CSSScrollTargetGroupAriaCurrentEnabled();
  }
  bool cssShapeOutsidePathAndShapeSupportEnabled() {
    return RuntimeEnabledFeatures::CSSShapeOutsidePathAndShapeSupportEnabled();
  }
  bool cssShapeOutsideRectAndXywhSupportEnabled() {
    return RuntimeEnabledFeatures::CSSShapeOutsideRectAndXywhSupportEnabled();
  }
  bool cssStyleSheetInitBaseURLEnabled() {
    return RuntimeEnabledFeatures::CSSStyleSheetInitBaseURLEnabled();
  }
  bool cssSupportsAtRuleFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSSupportsAtRuleFunctionEnabled();
  }
  bool cssSupportsForImportRulesEnabled() {
    return RuntimeEnabledFeatures::CSSSupportsForImportRulesEnabled();
  }
  bool cssSupportsNamedFeatureFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSSupportsNamedFeatureFunctionEnabled();
  }
  bool cssSystemAccentColorEnabled() {
    return RuntimeEnabledFeatures::CSSSystemAccentColorEnabled();
  }
  bool cssTextAlignMatchParentEnabled() {
    return RuntimeEnabledFeatures::CSSTextAlignMatchParentEnabled();
  }
  bool cssTextDecorationInsetEnabled() {
    return RuntimeEnabledFeatures::CSSTextDecorationInsetEnabled();
  }
  bool cssTextDecorationSkipInkAllEnabled() {
    return RuntimeEnabledFeatures::CSSTextDecorationSkipInkAllEnabled();
  }
  bool cssTextDecorationSkipSpacesEnabled() {
    return RuntimeEnabledFeatures::CSSTextDecorationSkipSpacesEnabled();
  }
  bool cssTextFitEnabled() {
    return RuntimeEnabledFeatures::CssTextFitEnabled();
  }
  bool cssTextFitReshapingEnabled() {
    return RuntimeEnabledFeatures::CssTextFitReshapingEnabled();
  }
  bool cssTextSpacingEnabled() {
    return RuntimeEnabledFeatures::CSSTextSpacingEnabled();
  }
  bool cssTextTransformFullSizeKanaEnabled() {
    return RuntimeEnabledFeatures::CSSTextTransformFullSizeKanaEnabled();
  }
  bool cssTextTransformFullWidthEnabled() {
    return RuntimeEnabledFeatures::CSSTextTransformFullWidthEnabled();
  }
  bool cssTextTransformMultiKeywordEnabled() {
    return RuntimeEnabledFeatures::CSSTextTransformMultiKeywordEnabled();
  }
  bool cssTimelineScopeAllEnabled() {
    return RuntimeEnabledFeatures::CSSTimelineScopeAllEnabled();
  }
  bool cssTimelineScopeGlobalEnabled() {
    return RuntimeEnabledFeatures::CSSTimelineScopeGlobalEnabled();
  }
  bool cssTreeScopedScrollTimelineEnabled() {
    return RuntimeEnabledFeatures::CSSTreeScopedScrollTimelineEnabled();
  }
  bool cssURLRequestModifiersEnabled() {
    return RuntimeEnabledFeatures::CSSURLRequestModifiersEnabled();
  }
  bool cssUserSelectContainEnabled() {
    return RuntimeEnabledFeatures::CSSUserSelectContainEnabled();
  }
  bool cssUserValidAndUserInvalidForRadioEnabled() {
    return RuntimeEnabledFeatures::CSSUserValidAndUserInvalidForRadioEnabled();
  }
  bool cssVideoDynamicRangeMediaQueriesEnabled() {
    return RuntimeEnabledFeatures::CSSVideoDynamicRangeMediaQueriesEnabled();
  }
  bool cssViewTransitionAutoNameEnabled() {
    return RuntimeEnabledFeatures::CSSViewTransitionAutoNameEnabled();
  }
  bool cssWindowDragEnabled() {
    return RuntimeEnabledFeatures::CSSWindowDragEnabled();
  }
  bool cssZoomAnimationEnabled() {
    return RuntimeEnabledFeatures::CSSZoomAnimationEnabled();
  }
  bool customElementsDisableFormattingFixupsEnabled() {
    return RuntimeEnabledFeatures::CustomElementsDisableFormattingFixupsEnabled();
  }
  bool customizableComboboxEnabled() {
    return RuntimeEnabledFeatures::CustomizableComboboxEnabled();
  }
  bool customizableSelectMultiplePopupEnabled() {
    return RuntimeEnabledFeatures::CustomizableSelectMultiplePopupEnabled();
  }
  bool customizableSelectNewUAStylesEnabled() {
    return RuntimeEnabledFeatures::CustomizableSelectNewUAStylesEnabled();
  }
  bool customScrollbarApplyMinimumThumbLengthEnabled() {
    return RuntimeEnabledFeatures::CustomScrollbarApplyMinimumThumbLengthEnabled();
  }
  bool databaseEnabled() {
    return RuntimeEnabledFeatures::DatabaseEnabled();
  }
  bool dateTimeInputTypeEarlyAdvanceFixEnabled() {
    return RuntimeEnabledFeatures::DateTimeInputTypeEarlyAdvanceFixEnabled();
  }
  bool declarativeCSSModulesEnabled() {
    return RuntimeEnabledFeatures::DeclarativeCSSModulesEnabledByRuntimeFlag();
  }
  bool declarativeCSSModulesStyleTagEnabled() {
    return RuntimeEnabledFeatures::DeclarativeCSSModulesStyleTagEnabled();
  }
  bool declarativeFragmentEnabled() {
    return RuntimeEnabledFeatures::DeclarativeFragmentEnabled();
  }
  bool declarativePerformanceObserverEnabled() {
    return RuntimeEnabledFeatures::DeclarativePerformanceObserverEnabledByRuntimeFlag();
  }
  bool declarativeSkeletonsEnabled() {
    return RuntimeEnabledFeatures::DeclarativeSkeletonsEnabled();
  }
  bool declarativeWebMCPEnabled() {
    return RuntimeEnabledFeatures::DeclarativeWebMCPEnabledByRuntimeFlag();
  }
  bool deferLineBoxHitTestToBackgroundEnabled() {
    return RuntimeEnabledFeatures::DeferLineBoxHitTestToBackgroundEnabled();
  }
  bool delegatesFocusTextControlInputFixEnabled() {
    return RuntimeEnabledFeatures::DelegatesFocusTextControlInputFixEnabled();
  }
  bool deprecateUnloadOptOutEnabled() {
    return RuntimeEnabledFeatures::DeprecateUnloadOptOutEnabledByRuntimeFlag();
  }
  bool desktopCaptureDisableLocalEchoControlEnabled() {
    return RuntimeEnabledFeatures::DesktopCaptureDisableLocalEchoControlEnabled();
  }
  bool desktopPWAsAdditionalWindowingControlsEnabled() {
    return RuntimeEnabledFeatures::DesktopPWAsAdditionalWindowingControlsEnabled();
  }
  bool desktopPWAsAdditionalWindowingControlsOnMoveEnabled() {
    return RuntimeEnabledFeatures::DesktopPWAsAdditionalWindowingControlsOnMoveEnabled();
  }
  bool deviceAttributesEnabled() {
    return RuntimeEnabledFeatures::DeviceAttributesEnabled();
  }
  bool deviceBoundSessionJsApiEnabled() {
    return RuntimeEnabledFeatures::DeviceBoundSessionJsApiEnabled();
  }
  bool deviceOrientationRequestPermissionEnabled() {
    return RuntimeEnabledFeatures::DeviceOrientationRequestPermissionEnabled();
  }
  bool devicePostureEnabled() {
    return RuntimeEnabledFeatures::DevicePostureEnabled();
  }
  bool dialogCloseWhenOpenRemovedEnabled() {
    return RuntimeEnabledFeatures::DialogCloseWhenOpenRemovedEnabled();
  }
  bool dialogNewFocusBehaviorEnabled() {
    return RuntimeEnabledFeatures::DialogNewFocusBehaviorEnabled();
  }
  bool digitalCredentialsProtocolFilterEnabled() {
    return RuntimeEnabledFeatures::DigitalCredentialsProtocolFilterEnabled();
  }
  bool digitalGoodsEnabled() {
    return RuntimeEnabledFeatures::DigitalGoodsEnabledByRuntimeFlag();
  }
  bool digitalGoodsV21Enabled() {
    return RuntimeEnabledFeatures::DigitalGoodsV2_1Enabled();
  }
  bool directSocketsEnabled() {
    return RuntimeEnabledFeatures::DirectSocketsEnabled();
  }
  bool directSocketsInServiceWorkersEnabled() {
    return RuntimeEnabledFeatures::DirectSocketsInServiceWorkersEnabled();
  }
  bool directSocketsInSharedWorkersEnabled() {
    return RuntimeEnabledFeatures::DirectSocketsInSharedWorkersEnabled();
  }
  bool disableAnchorCenterOnAlignJustifyItemsEnabled() {
    return RuntimeEnabledFeatures::DisableAnchorCenterOnAlignJustifyItemsEnabled();
  }
  bool disableDifferentOriginSubframeDialogSuppressionEnabled() {
    return RuntimeEnabledFeatures::DisableDifferentOriginSubframeDialogSuppressionEnabledByRuntimeFlag();
  }
  bool disableEllipsisWhenScrolledEnabled() {
    return RuntimeEnabledFeatures::DisableEllipsisWhenScrolledEnabled();
  }
  bool disableFormControlChangeEventDuringMutationEnabled() {
    return RuntimeEnabledFeatures::DisableFormControlChangeEventDuringMutationEnabled();
  }
  bool disconnectWebSocketOnBFCacheEnabled() {
    return RuntimeEnabledFeatures::DisconnectWebSocketOnBFCacheEnabled();
  }
  bool dispatchHiddenVisibilityTransitionsEnabled() {
    return RuntimeEnabledFeatures::DispatchHiddenVisibilityTransitionsEnabled();
  }
  bool dispatchSelectionchangeEventPerElementEnabled() {
    return RuntimeEnabledFeatures::DispatchSelectionchangeEventPerElementEnabled();
  }
  bool dispatchWorkerCSPViolationEventForModuleGraphFetchingEnabled() {
    return RuntimeEnabledFeatures::DispatchWorkerCSPViolationEventForModuleGraphFetchingEnabled();
  }
  bool displayContentsFocusableEnabled() {
    return RuntimeEnabledFeatures::DisplayContentsFocusableEnabled();
  }
  bool displayCutoutAPIEnabled() {
    return RuntimeEnabledFeatures::DisplayCutoutAPIEnabled();
  }
  bool documentCookieEnabled() {
    return RuntimeEnabledFeatures::DocumentCookieEnabled();
  }
  bool documentDomainEnabled() {
    return RuntimeEnabledFeatures::DocumentDomainEnabled();
  }
  bool documentIsolationPolicyEnabled() {
    return RuntimeEnabledFeatures::DocumentIsolationPolicyEnabledByRuntimeFlag();
  }
  bool documentOpenIframeUnloadEventsEnabled() {
    return RuntimeEnabledFeatures::DocumentOpenIframeUnloadEventsEnabled();
  }
  bool documentOpenOriginAliasRemovalEnabled() {
    return RuntimeEnabledFeatures::DocumentOpenOriginAliasRemovalEnabled();
  }
  bool documentOpenSandboxInheritanceRemovalEnabled() {
    return RuntimeEnabledFeatures::DocumentOpenSandboxInheritanceRemovalEnabled();
  }
  bool documentPatchingEnabled() {
    return RuntimeEnabledFeatures::DocumentPatchingEnabled();
  }
  bool documentPictureInPictureAPIEnabled() {
    return RuntimeEnabledFeatures::DocumentPictureInPictureAPIEnabled();
  }
  bool documentPictureInPicturePreferInitialPlacementEnabled() {
    return RuntimeEnabledFeatures::DocumentPictureInPicturePreferInitialPlacementEnabled();
  }
  bool documentPictureInPictureUserActivationEnabled() {
    return RuntimeEnabledFeatures::DocumentPictureInPictureUserActivationEnabled();
  }
  bool documentPolicyDocumentDomainEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyDocumentDomainEnabled();
  }
  bool documentPolicyExpectNoLinkedResourcesEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyExpectNoLinkedResourcesEnabled();
  }
  bool documentPolicyIncludeJSCallStacksInCrashReportsEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyIncludeJSCallStacksInCrashReportsEnabled();
  }
  bool documentPolicyInDedicatedWorkerEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyInDedicatedWorkerEnabled();
  }
  bool documentPolicyJSProfilingModeEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyJSProfilingModeEnabled();
  }
  bool documentPolicyNegotiationEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyNegotiationEnabledByRuntimeFlag();
  }
  bool documentPolicyNetworkEfficiencyGuardrailsEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyNetworkEfficiencyGuardrailsEnabled();
  }
  bool documentPolicySyncXHREnabled() {
    return RuntimeEnabledFeatures::DocumentPolicySyncXHREnabled();
  }
  bool documentWriteEnabled() {
    return RuntimeEnabledFeatures::DocumentWriteEnabled();
  }
  bool domParserXmlScriptAlreadyStartedEnabled() {
    return RuntimeEnabledFeatures::DOMParserXmlScriptAlreadyStartedEnabled();
  }
  bool dragAndDropDownloadURLListEnabled() {
    return RuntimeEnabledFeatures::DragAndDropDownloadURLListEnabled();
  }
  bool dragAndDropJSFileObjectsEnabled() {
    return RuntimeEnabledFeatures::DragAndDropJSFileObjectsEnabled();
  }
  bool dragImageForLargeImagesEnabled() {
    return RuntimeEnabledFeatures::DragImageForLargeImagesEnabled();
  }
  bool dragThresholdRequiresMouseMovementEnabled() {
    return RuntimeEnabledFeatures::DragThresholdRequiresMouseMovementEnabled();
  }
  bool dumpForAbsentKeyframeSnapshotsEnabled() {
    return RuntimeEnabledFeatures::DumpForAbsentKeyframeSnapshotsEnabled();
  }
  bool editContextAssignmentAsPerSpecEnabled() {
    return RuntimeEnabledFeatures::EditContextAssignmentAsPerSpecEnabled();
  }
  bool editContextBoundsUpdateSchedulesFrameEnabled() {
    return RuntimeEnabledFeatures::EditContextBoundsUpdateSchedulesFrameEnabled();
  }
  bool editContextCodePointDeletionEnabled() {
    return RuntimeEnabledFeatures::EditContextCodePointDeletionEnabled();
  }
  bool editContextHandleTextOrSelectionUpdateDuringCompositionEnabled() {
    return RuntimeEnabledFeatures::EditContextHandleTextOrSelectionUpdateDuringCompositionEnabled();
  }
  bool editContextSelectionUpdateBeforeTextUpdateEventEnabled() {
    return RuntimeEnabledFeatures::EditContextSelectionUpdateBeforeTextUpdateEventEnabled();
  }
  bool editingUseDomPositionApiEnabled() {
    return RuntimeEnabledFeatures::EditingUseDomPositionApiEnabled();
  }
  bool elasticOverscrollBackgroundPaintLocationFixEnabled() {
    return RuntimeEnabledFeatures::ElasticOverscrollBackgroundPaintLocationFixEnabled();
  }
  bool elasticOverscrollUseEventDeltaForAxisSelectionEnabled() {
    return RuntimeEnabledFeatures::ElasticOverscrollUseEventDeltaForAxisSelectionEnabled();
  }
  bool elementCaptureEnabled() {
    return RuntimeEnabledFeatures::ElementCaptureEnabled();
  }
  bool elementInternalsBehaviorsEnabled() {
    return RuntimeEnabledFeatures::ElementInternalsBehaviorsEnabled();
  }
  bool elementMatchContainerEnabled() {
    return RuntimeEnabledFeatures::ElementMatchContainerEnabled();
  }
  bool elementSpecificReadOnlyConstraintValidationEnabled() {
    return RuntimeEnabledFeatures::ElementSpecificReadOnlyConstraintValidationEnabled();
  }
  bool emailVerificationProtocolEnabled() {
    return RuntimeEnabledFeatures::EmailVerificationProtocolEnabledByRuntimeFlag();
  }
  bool embeddedContentCenterAlignBaselineEnabled() {
    return RuntimeEnabledFeatures::EmbeddedContentCenterAlignBaselineEnabled();
  }
  bool emojiZWJVerticalOrientationEnabled() {
    return RuntimeEnabledFeatures::EmojiZWJVerticalOrientationEnabled();
  }
  bool enableXSLTForCAPAlertsEnabled() {
    return RuntimeEnabledFeatures::EnableXSLTForCAPAlertsEnabled();
  }
  bool endpointInclusiveCommitStylesEnabled() {
    return RuntimeEnabledFeatures::EndpointInclusiveCommitStylesEnabled();
  }
  bool enforceAnonymityExposureEnabled() {
    return RuntimeEnabledFeatures::EnforceAnonymityExposureEnabled();
  }
  bool entropyIgnoredForFirstVideoFrameLCPEnabled() {
    return RuntimeEnabledFeatures::EntropyIgnoredForFirstVideoFrameLCPEnabled();
  }
  bool eventPseudoTargetPropertyEnabled() {
    return RuntimeEnabledFeatures::EventPseudoTargetPropertyEnabled();
  }
  bool eventPseudoTargetViewTransitionNameEnabled() {
    return RuntimeEnabledFeatures::EventPseudoTargetViewTransitionNameEnabled();
  }
  bool eventTimingInteractionCountEnabled() {
    return RuntimeEnabledFeatures::EventTimingInteractionCountEnabled();
  }
  bool eventTimingMatchingHTMLEnabled() {
    return RuntimeEnabledFeatures::EventTimingMatchingHTMLEnabled();
  }
  bool eventTimingTargetSelectorEnabled() {
    return RuntimeEnabledFeatures::EventTimingTargetSelectorEnabled();
  }
  bool eventTriggerEnabled() {
    return RuntimeEnabledFeatures::EventTriggerEnabled();
  }
  bool experimentalContentSecurityPolicyFeaturesEnabled() {
    return RuntimeEnabledFeatures::ExperimentalContentSecurityPolicyFeaturesEnabled();
  }
  bool experimentalJSProfilerMarkersEnabled() {
    return RuntimeEnabledFeatures::ExperimentalJSProfilerMarkersEnabledByRuntimeFlag();
  }
  bool experimentalMachineLearningNeuralNetworkEnabled() {
    return RuntimeEnabledFeatures::ExperimentalMachineLearningNeuralNetworkEnabled();
  }
  bool experimentalPoliciesEnabled() {
    return RuntimeEnabledFeatures::ExperimentalPoliciesEnabled();
  }
  bool exposeCSSFontFeatureValuesRuleEnabled() {
    return RuntimeEnabledFeatures::ExposeCSSFontFeatureValuesRuleEnabled();
  }
  bool exposeRenderTimeNonTaoDelayedImageEnabled() {
    return RuntimeEnabledFeatures::ExposeRenderTimeNonTaoDelayedImageEnabled();
  }
  bool extendedTextMetricsEnabled() {
    return RuntimeEnabledFeatures::ExtendedTextMetricsEnabledByRuntimeFlag();
  }
  bool extensionScriptTaggingEnabled() {
    return RuntimeEnabledFeatures::ExtensionScriptTaggingEnabled();
  }
  bool extensionScriptTaggingTestingAPIEnabled() {
    return RuntimeEnabledFeatures::ExtensionScriptTaggingTestingAPIEnabled();
  }
  bool externalPopupMenuClickEventEnabled() {
    return RuntimeEnabledFeatures::ExternalPopupMenuClickEventEnabled();
  }
  bool eyeDropperAPIEnabled() {
    return RuntimeEnabledFeatures::EyeDropperAPIEnabled();
  }
  bool faceDetectorEnabled() {
    return RuntimeEnabledFeatures::FaceDetectorEnabled();
  }
  bool fastCompositionCharacterBoundsEnabled() {
    return RuntimeEnabledFeatures::FastCompositionCharacterBoundsEnabled();
  }
  bool fastPlainTextRangeCreateRangeEnabled() {
    return RuntimeEnabledFeatures::FastPlainTextRangeCreateRangeEnabled();
  }
  bool fastPositionIteratorEnabled() {
    return RuntimeEnabledFeatures::FastPositionIteratorEnabled();
  }
  bool fedCmEnabled() {
    return RuntimeEnabledFeatures::FedCmEnabled();
  }
  bool fedCmActiveModeMultipleIdentityProvidersEnabled() {
    return RuntimeEnabledFeatures::FedCmActiveModeMultipleIdentityProvidersEnabledByRuntimeFlag();
  }
  bool fedCmAutofillEnabled() {
    return RuntimeEnabledFeatures::FedCmAutofillEnabled();
  }
  bool fedCmDelegationEnabled() {
    return RuntimeEnabledFeatures::FedCmDelegationEnabled();
  }
  bool fedCmIdentityHandlerEnabled() {
    return RuntimeEnabledFeatures::FedCmIdentityHandlerEnabled();
  }
  bool fedCmIdPRegistrationEnabled() {
    return RuntimeEnabledFeatures::FedCmIdPRegistrationEnabled();
  }
  bool fedCmLightweightModeEnabled() {
    return RuntimeEnabledFeatures::FedCmLightweightModeEnabled();
  }
  bool fedCmMultipleIdentityProvidersEnabled() {
    return RuntimeEnabledFeatures::FedCmMultipleIdentityProvidersEnabledByRuntimeFlag();
  }
  bool fedCmMultipleRequestsEnabled() {
    return RuntimeEnabledFeatures::FedCmMultipleRequestsEnabled();
  }
  bool fedCmNavigationInterceptionEnabled() {
    return RuntimeEnabledFeatures::FedCmNavigationInterceptionEnabled();
  }
  bool fencedFramesEnabled() {
    return RuntimeEnabledFeatures::FencedFramesEnabled();
  }
  bool fencedFramesAPIChangesEnabled() {
    return RuntimeEnabledFeatures::FencedFramesAPIChangesEnabled();
  }
  bool fencedFramesLocalUnpartitionedDataAccessEnabled() {
    return RuntimeEnabledFeatures::FencedFramesLocalUnpartitionedDataAccessEnabled();
  }
  bool fetchBodyBytesEnabled() {
    return RuntimeEnabledFeatures::FetchBodyBytesEnabled();
  }
  bool fetchLaterAPIEnabled() {
    return RuntimeEnabledFeatures::FetchLaterAPIEnabled();
  }
  bool fetchRetryEnabled() {
    return RuntimeEnabledFeatures::FetchRetryEnabledByRuntimeFlag();
  }
  bool fetchUploadStreamingEnabled() {
    return RuntimeEnabledFeatures::FetchUploadStreamingEnabled();
  }
  bool fileHandlingEnabled() {
    return RuntimeEnabledFeatures::FileHandlingEnabled();
  }
  bool filePickerEventsFixEnabled() {
    return RuntimeEnabledFeatures::FilePickerEventsFixEnabled();
  }
  bool fileSystemEnabled() {
    return RuntimeEnabledFeatures::FileSystemEnabled();
  }
  bool fileSystemAccessEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessEnabled();
  }
  bool fileSystemAccessAPIExperimentalEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessAPIExperimentalEnabled();
  }
  bool fileSystemAccessGetCloudIdentifiersEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessGetCloudIdentifiersEnabled();
  }
  bool fileSystemAccessLocalEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessLocalEnabled();
  }
  bool fileSystemAccessLockingSchemeEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessLockingSchemeEnabled();
  }
  bool fileSystemAccessOriginPrivateEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessOriginPrivateEnabled();
  }
  bool fileSystemAccessRevokeReadOnRemoveEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessRevokeReadOnRemoveEnabled();
  }
  bool fileSystemAccessWriteModeEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessWriteModeEnabled();
  }
  bool fileSystemObserverEnabled() {
    return RuntimeEnabledFeatures::FileSystemObserverEnabled();
  }
  bool fileSystemObserverUnobserveEnabled() {
    return RuntimeEnabledFeatures::FileSystemObserverUnobserveEnabled();
  }
  bool filterableSelectEnabled() {
    return RuntimeEnabledFeatures::FilterableSelectEnabled();
  }
  bool filterContainerLevelStylesEnabled() {
    return RuntimeEnabledFeatures::FilterContainerLevelStylesEnabled();
  }
  bool filteringPrimitivesEnabled() {
    return RuntimeEnabledFeatures::FilteringPrimitivesEnabled();
  }
  bool findBufferCollapseSkippedSpaceEnabled() {
    return RuntimeEnabledFeatures::FindBufferCollapseSkippedSpaceEnabled();
  }
  bool findBufferMatchAcrossIgnoredNodesEnabled() {
    return RuntimeEnabledFeatures::FindBufferMatchAcrossIgnoredNodesEnabled();
  }
  bool findBufferSkipIgnoredSubtreesEnabled() {
    return RuntimeEnabledFeatures::FindBufferSkipIgnoredSubtreesEnabled();
  }
  bool findFirstMisspellingEndWhenNonEditableEnabled() {
    return RuntimeEnabledFeatures::FindFirstMisspellingEndWhenNonEditableEnabled();
  }
  bool findIgnoreSuggestionFixEnabled() {
    return RuntimeEnabledFeatures::FindIgnoreSuggestionFixEnabled();
  }
  bool firstLetterParagraphOffsetsEnabled() {
    return RuntimeEnabledFeatures::FirstLetterParagraphOffsetsEnabled();
  }
  bool firstLineAndLetterExcludeInputTextareaEnabled() {
    return RuntimeEnabledFeatures::FirstLineAndLetterExcludeInputTextareaEnabled();
  }
  bool firstLineTextMetricsEnabled() {
    return RuntimeEnabledFeatures::FirstLineTextMetricsEnabled();
  }
  bool fixHTMLFormControlElementIsReadOnlyEnabled() {
    return RuntimeEnabledFeatures::FixHTMLFormControlElementIsReadOnlyEnabled();
  }
  bool fixMapElementEmptyNameBugEnabled() {
    return RuntimeEnabledFeatures::FixMapElementEmptyNameBugEnabled();
  }
  bool fixSelectionPaintRangeNullOptEnabled() {
    return RuntimeEnabledFeatures::FixSelectionPaintRangeNullOptEnabled();
  }
  bool fixVisualRectRemoteViewportTransformEnabled() {
    return RuntimeEnabledFeatures::FixVisualRectRemoteViewportTransformEnabled();
  }
  bool fledgeEnabled() {
    return RuntimeEnabledFeatures::FledgeEnabled();
  }
  bool fledgeAuctionDealSupportEnabled() {
    return RuntimeEnabledFeatures::FledgeAuctionDealSupportEnabled();
  }
  bool fledgeBiddingAndAuctionServerAPIEnabled() {
    return RuntimeEnabledFeatures::FledgeBiddingAndAuctionServerAPIEnabledByRuntimeFlag();
  }
  bool fledgeBiddingAndAuctionServerAPIMultiSellerEnabled() {
    return RuntimeEnabledFeatures::FledgeBiddingAndAuctionServerAPIMultiSellerEnabled();
  }
  bool fledgeClickinessEnabled() {
    return RuntimeEnabledFeatures::FledgeClickinessEnabled();
  }
  bool fledgeCustomMaxAuctionAdComponentsEnabled() {
    return RuntimeEnabledFeatures::FledgeCustomMaxAuctionAdComponentsEnabled();
  }
  bool fledgeDeprecatedRenderURLReplacementsEnabled() {
    return RuntimeEnabledFeatures::FledgeDeprecatedRenderURLReplacementsEnabled();
  }
  bool fledgeDirectFromSellerSignalsHeaderAdSlotEnabled() {
    return RuntimeEnabledFeatures::FledgeDirectFromSellerSignalsHeaderAdSlotEnabled();
  }
  bool fledgeDirectFromSellerSignalsWebBundlesEnabled() {
    return RuntimeEnabledFeatures::FledgeDirectFromSellerSignalsWebBundlesEnabled();
  }
  bool fledgeMultiBidEnabled() {
    return RuntimeEnabledFeatures::FledgeMultiBidEnabled();
  }
  bool fledgePrivateModelTrainingEnabled() {
    return RuntimeEnabledFeatures::FledgePrivateModelTrainingEnabled();
  }
  bool fledgeRealTimeReportingEnabled() {
    return RuntimeEnabledFeatures::FledgeRealTimeReportingEnabled();
  }
  bool fledgeSellerNonceEnabled() {
    return RuntimeEnabledFeatures::FledgeSellerNonceEnabled();
  }
  bool fledgeSellerScriptExecutionModeEnabled() {
    return RuntimeEnabledFeatures::FledgeSellerScriptExecutionModeEnabled();
  }
  bool fledgeTrustedSignalsKVv1CreativeScanningEnabled() {
    return RuntimeEnabledFeatures::FledgeTrustedSignalsKVv1CreativeScanningEnabled();
  }
  bool fledgeTrustedSignalsKVv2ContextualDataEnabled() {
    return RuntimeEnabledFeatures::FledgeTrustedSignalsKVv2ContextualDataEnabled();
  }
  bool fledgeTrustedSignalsKVv2SupportEnabled() {
    return RuntimeEnabledFeatures::FledgeTrustedSignalsKVv2SupportEnabled();
  }
  bool flexWrapBalanceEnabled() {
    return RuntimeEnabledFeatures::FlexWrapBalanceEnabled();
  }
  bool focusgroupEnabled() {
    return RuntimeEnabledFeatures::FocusgroupEnabled();
  }
  bool focusgroupV2Enabled() {
    return RuntimeEnabledFeatures::FocusgroupV2Enabled();
  }
  bool focusResetEventEnabled() {
    return RuntimeEnabledFeatures::FocusResetEventEnabled();
  }
  bool focusRingRespectExplicitOutlineColorInDarkModeEnabled() {
    return RuntimeEnabledFeatures::FocusRingRespectExplicitOutlineColorInDarkModeEnabled();
  }
  bool fontAccessEnabled() {
    return RuntimeEnabledFeatures::FontAccessEnabled();
  }
  bool fontationsPrintingEnabled() {
    return RuntimeEnabledFeatures::FontationsPrintingEnabled();
  }
  bool fontDataServiceForCSSLocalFontsEnabled() {
    return RuntimeEnabledFeatures::FontDataServiceForCSSLocalFontsEnabled();
  }
  bool fontFamilyPostscriptMatchingCTMigrationEnabled() {
    return RuntimeEnabledFeatures::FontFamilyPostscriptMatchingCTMigrationEnabled();
  }
  bool fontFamilyStyleMatchingCTMigrationEnabled() {
    return RuntimeEnabledFeatures::FontFamilyStyleMatchingCTMigrationEnabled();
  }
  bool fontFeatureSettingsDescriptorEnabled() {
    return RuntimeEnabledFeatures::FontFeatureSettingsDescriptorEnabled();
  }
  bool fontFormatAvar2Enabled() {
    return RuntimeEnabledFeatures::FontFormatAvar2Enabled();
  }
  bool fontLanguageOverrideEnabled() {
    return RuntimeEnabledFeatures::FontLanguageOverrideEnabled();
  }
  bool fontMatchAliasesAsLastResortEnabled() {
    return RuntimeEnabledFeatures::FontMatchAliasesAsLastResortEnabled();
  }
  bool fontPrewarmerShutdownFallbackEnabled() {
    return RuntimeEnabledFeatures::FontPrewarmerShutdownFallbackEnabled();
  }
  bool fontStyleObliqueZeroDegreeAsNormalEnabled() {
    return RuntimeEnabledFeatures::FontStyleObliqueZeroDegreeAsNormalEnabled();
  }
  bool fontUniqueNameTypefaceCacheEnabled() {
    return RuntimeEnabledFeatures::FontUniqueNameTypefaceCacheEnabled();
  }
  bool fontVariableItalicAxisEnabled() {
    return RuntimeEnabledFeatures::FontVariableItalicAxisEnabled();
  }
  bool fontVariationSettingsDescriptorEnabled() {
    return RuntimeEnabledFeatures::FontVariationSettingsDescriptorEnabled();
  }
  bool forcedColorsEnabled() {
    return RuntimeEnabledFeatures::ForcedColorsEnabled();
  }
  bool forceEagerMeasureMemoryEnabled() {
    return RuntimeEnabledFeatures::ForceEagerMeasureMemoryEnabled();
  }
  bool forceReduceMotionEnabled() {
    return RuntimeEnabledFeatures::ForceReduceMotionEnabled();
  }
  bool forwardReasonToFetchBodyAbortEnabled() {
    return RuntimeEnabledFeatures::ForwardReasonToFetchBodyAbortEnabled();
  }
  bool fractionalScrollOffsetsEnabled() {
    return RuntimeEnabledFeatures::FractionalScrollOffsetsEnabled();
  }
  bool fractionalScrollOffsetsForWebAPIEnabled() {
    return RuntimeEnabledFeatures::FractionalScrollOffsetsForWebAPIEnabled();
  }
  bool fragmentedOofInCbEnabled() {
    return RuntimeEnabledFeatures::FragmentedOofInCbEnabled();
  }
  bool frameCaretSkipHiddenCheckEnabled() {
    return RuntimeEnabledFeatures::FrameCaretSkipHiddenCheckEnabled();
  }
  bool freezeFramesOnVisibilityEnabled() {
    return RuntimeEnabledFeatures::FreezeFramesOnVisibilityEnabled();
  }
  bool gamepadButtonTypesEnabled() {
    return RuntimeEnabledFeatures::GamepadButtonTypesEnabled();
  }
  bool gamepadMultitouchEnabled() {
    return RuntimeEnabledFeatures::GamepadMultitouchEnabled();
  }
  bool gamepadRawInputChangeEventEnabled() {
    return RuntimeEnabledFeatures::GamepadRawInputChangeEventEnabledByRuntimeFlag();
  }
  bool gamepadWindowEventHandlersEnabled() {
    return RuntimeEnabledFeatures::GamepadWindowEventHandlersEnabled();
  }
  bool generateDragOverlayBeforeDragStartEnabled() {
    return RuntimeEnabledFeatures::GenerateDragOverlayBeforeDragStartEnabled();
  }
  bool generateXSLTWarningBannerEnabled() {
    return RuntimeEnabledFeatures::GenerateXSLTWarningBannerEnabled();
  }
  bool geolocationElementEnabled() {
    return RuntimeEnabledFeatures::GeolocationElementEnabled();
  }
  bool geometryMapperSingularTransformFixEnabled() {
    return RuntimeEnabledFeatures::GeometryMapperSingularTransformFixEnabled();
  }
  bool geometryUtilsEnabled() {
    return RuntimeEnabledFeatures::GeometryUtilsEnabled();
  }
  bool geometryUtilsForCSSPseudoElementEnabled() {
    return RuntimeEnabledFeatures::GeometryUtilsForCSSPseudoElementEnabled();
  }
  bool getAllScreensMediaEnabled() {
    return RuntimeEnabledFeatures::GetAllScreensMediaEnabled();
  }
  bool getDisplayMediaEnabled() {
    return RuntimeEnabledFeatures::GetDisplayMediaEnabled();
  }
  bool getDisplayMediaAudioSelectionEnabled() {
    return RuntimeEnabledFeatures::GetDisplayMediaAudioSelectionEnabled();
  }
  bool getDisplayMediaRequiresUserActivationEnabled() {
    return RuntimeEnabledFeatures::GetDisplayMediaRequiresUserActivationEnabled();
  }
  bool getDisplayMediaWindowAudioCaptureEnabled() {
    return RuntimeEnabledFeatures::GetDisplayMediaWindowAudioCaptureEnabled();
  }
  bool getElementsByNameOnlyHTMLElementsEnabled() {
    return RuntimeEnabledFeatures::GetElementsByNameOnlyHTMLElementsEnabled();
  }
  bool getTargetRangesRetargetingEnabled() {
    return RuntimeEnabledFeatures::GetTargetRangesRetargetingEnabled();
  }
  bool getUserMediaEchoCancellationModesEnabled() {
    return RuntimeEnabledFeatures::GetUserMediaEchoCancellationModesEnabled();
  }
  bool globalPrivacyControlEnabled() {
    return RuntimeEnabledFeatures::GlobalPrivacyControlEnabled();
  }
  bool globalPrivacyControlApiEnabled() {
    return RuntimeEnabledFeatures::GlobalPrivacyControlApiEnabled();
  }
  bool globalPrivacyControlForceEnabled() {
    return RuntimeEnabledFeatures::GlobalPrivacyControlForceEnabled();
  }
  bool graphemeClusterBoundsCheckEnabled() {
    return RuntimeEnabledFeatures::GraphemeClusterBoundsCheckEnabled();
  }
  bool groupEffectEnabled() {
    return RuntimeEnabledFeatures::GroupEffectEnabled();
  }
  bool handleShadowDOMInSubstringUtilEnabled() {
    return RuntimeEnabledFeatures::HandleShadowDOMInSubstringUtilEnabled();
  }
  bool handwritingRecognitionEnabled() {
    return RuntimeEnabledFeatures::HandwritingRecognitionEnabled();
  }
  bool harfRustShapingEnabled() {
    return RuntimeEnabledFeatures::HarfRustShapingEnabled();
  }
  bool hasUAVisualTransitionEnabled() {
    return RuntimeEnabledFeatures::HasUAVisualTransitionEnabled();
  }
  bool headingOffsetEnabled() {
    return RuntimeEnabledFeatures::HeadingOffsetEnabled();
  }
  bool hideVideoControlsWhenUnneededEnabled() {
    return RuntimeEnabledFeatures::HideVideoControlsWhenUnneededEnabled();
  }
  bool highlightsFromPointEnabled() {
    return RuntimeEnabledFeatures::HighlightsFromPointEnabled();
  }
  bool hitTestBorderRadiusForStackingContextEnabled() {
    return RuntimeEnabledFeatures::HitTestBorderRadiusForStackingContextEnabled();
  }
  bool hitTestContainerTransformStateForPreserve3dEnabled() {
    return RuntimeEnabledFeatures::HitTestContainerTransformStateForPreserve3dEnabled();
  }
  bool hitTestCulledInlineOfSelfPaintingChildEnabled() {
    return RuntimeEnabledFeatures::HitTestCulledInlineOfSelfPaintingChildEnabled();
  }
  bool hrefTranslateEnabled() {
    return RuntimeEnabledFeatures::HrefTranslateEnabledByRuntimeFlag();
  }
  bool hstsTopLevelNavigationsOnlyEnabled() {
    return RuntimeEnabledFeatures::HstsTopLevelNavigationsOnlyEnabled();
  }
  bool htmlAdoptionAlgorithmNewStepsEnabled() {
    return RuntimeEnabledFeatures::HTMLAdoptionAlgorithmNewStepsEnabled();
  }
  bool htmlAreaElementDisplayNoneEnabled() {
    return RuntimeEnabledFeatures::HTMLAreaElementDisplayNoneEnabled();
  }
  bool htmlAreaHreflangTypeEnabled() {
    return RuntimeEnabledFeatures::HTMLAreaHreflangTypeEnabled();
  }
  bool htmlBodyMarginPixelLengthEnabled() {
    return RuntimeEnabledFeatures::HTMLBodyMarginPixelLengthEnabled();
  }
  bool htmlCommandActionsV2Enabled() {
    return RuntimeEnabledFeatures::HTMLCommandActionsV2Enabled();
  }
  bool htmlCommandElementRemovalEnabled() {
    return RuntimeEnabledFeatures::HTMLCommandElementRemovalEnabled();
  }
  bool htmlCommandForScrollCommandsEnabled() {
    return RuntimeEnabledFeatures::HTMLCommandForScrollCommandsEnabled();
  }
  bool htmlElementScrollParentEnabled() {
    return RuntimeEnabledFeatures::HTMLElementScrollParentEnabled();
  }
  bool htmlInterestForInterestButtonPseudoEnabled() {
    return RuntimeEnabledFeatures::HTMLInterestForInterestButtonPseudoEnabled();
  }
  bool htmlLinkElementAttributeValueChangesEnabled() {
    return RuntimeEnabledFeatures::HTMLLinkElementAttributeValueChangesEnabled();
  }
  bool htmlParserIgnoreHeadInNoscriptEnabled() {
    return RuntimeEnabledFeatures::HTMLParserIgnoreHeadInNoscriptEnabled();
  }
  bool htmlParserTruncatedMarkupDeclarationEnabled() {
    return RuntimeEnabledFeatures::HTMLParserTruncatedMarkupDeclarationEnabled();
  }
  bool htmlParserYieldAndDelayOftenForTestingEnabled() {
    return RuntimeEnabledFeatures::HTMLParserYieldAndDelayOftenForTestingEnabled();
  }
  bool htmlParserYieldByUserTimingEnabled() {
    return RuntimeEnabledFeatures::HTMLParserYieldByUserTimingEnabled();
  }
  bool htmlPrintingArtifactAnnotationsEnabled() {
    return RuntimeEnabledFeatures::HTMLPrintingArtifactAnnotationsEnabled();
  }
  bool htmlProcessingInstructionEnabled() {
    return RuntimeEnabledFeatures::HTMLProcessingInstructionEnabled();
  }
  bool htmlSwitchAttributeEnabled() {
    return RuntimeEnabledFeatures::HTMLSwitchAttributeEnabled();
  }
  bool hyphenVerticalOrientationFixEnabled() {
    return RuntimeEnabledFeatures::HyphenVerticalOrientationFixEnabled();
  }
  bool icuCapitalizationEnabled() {
    return RuntimeEnabledFeatures::ICUCapitalizationEnabled();
  }
  bool ignoreLetterSpacingInCursiveScriptsEnabled() {
    return RuntimeEnabledFeatures::IgnoreLetterSpacingInCursiveScriptsEnabled();
  }
  bool imageDataPixelFormatEnabled() {
    return RuntimeEnabledFeatures::ImageDataPixelFormatEnabled();
  }
  bool imageDocumentUseLayoutWidthEnabled() {
    return RuntimeEnabledFeatures::ImageDocumentUseLayoutWidthEnabled();
  }
  bool imageSrcsetReselectionEnabled() {
    return RuntimeEnabledFeatures::ImageSrcsetReselectionEnabled();
  }
  bool imageSrcsetReselectionForSrcCandidateEnabled() {
    return RuntimeEnabledFeatures::ImageSrcsetReselectionForSrcCandidateEnabled();
  }
  bool implicitRootScrollerEnabled() {
    return RuntimeEnabledFeatures::ImplicitRootScrollerEnabled();
  }
  bool incomingCallNotificationsEnabled() {
    return RuntimeEnabledFeatures::IncomingCallNotificationsEnabledByRuntimeFlag();
  }
  bool incrementalFontTransferEnabled() {
    return RuntimeEnabledFeatures::IncrementalFontTransferEnabled();
  }
  bool inertElementNonEditableEnabled() {
    return RuntimeEnabledFeatures::InertElementNonEditableEnabled();
  }
  bool infiniteCullRectEnabled() {
    return RuntimeEnabledFeatures::InfiniteCullRectEnabled();
  }
  bool inheritUserModifyWithoutContenteditableEnabled() {
    return RuntimeEnabledFeatures::InheritUserModifyWithoutContenteditableEnabled();
  }
  bool initialLetterBlockPositioningEnabled() {
    return RuntimeEnabledFeatures::InitialLetterBlockPositioningEnabled();
  }
  bool inlineBlockLineNavigationEnabled() {
    return RuntimeEnabledFeatures::InlineBlockLineNavigationEnabled();
  }
  bool inlineContainingBlockSkipOpaqueEnabled() {
    return RuntimeEnabledFeatures::InlineContainingBlockSkipOpaqueEnabled();
  }
  bool inlineCursorSkipNonIfcEnabled() {
    return RuntimeEnabledFeatures::InlineCursorSkipNonIfcEnabled();
  }
  bool inlineScriptCacheHintEnabled() {
    return RuntimeEnabledFeatures::InlineScriptCacheHintEnabled();
  }
  bool innerHTMLParserFastpathLogFailureEnabled() {
    return RuntimeEnabledFeatures::InnerHTMLParserFastpathLogFailureEnabled();
  }
  bool inputClientRectWithoutInlinePaddingEnabled() {
    return RuntimeEnabledFeatures::InputClientRectWithoutInlinePaddingEnabled();
  }
  bool inputDisabledHandlerFixEnabled() {
    return RuntimeEnabledFeatures::InputDisabledHandlerFixEnabled();
  }
  bool inputInSelectEnabled() {
    return RuntimeEnabledFeatures::InputInSelectEnabled();
  }
  bool inputMultipleFieldsUIEnabled() {
    return RuntimeEnabledFeatures::InputMultipleFieldsUIEnabled();
  }
  bool inputMultipleFieldsUIWithPointerChecksEnabled() {
    return RuntimeEnabledFeatures::InputMultipleFieldsUIWithPointerChecksEnabled();
  }
  bool inputTypeColorEnhancementsEnabled() {
    return RuntimeEnabledFeatures::InputTypeColorEnhancementsEnabled();
  }
  bool insertBlockquoteBeforeOuterBlockEnabled() {
    return RuntimeEnabledFeatures::InsertBlockquoteBeforeOuterBlockEnabled();
  }
  bool installedAppEnabled() {
    return RuntimeEnabledFeatures::InstalledAppEnabled();
  }
  bool installElementEnabled() {
    return RuntimeEnabledFeatures::InstallElementEnabled();
  }
  bool installOnDeviceSpeechRecognitionEnabled() {
    return RuntimeEnabledFeatures::InstallOnDeviceSpeechRecognitionEnabled();
  }
  bool integrityPolicyScriptEnabled() {
    return RuntimeEnabledFeatures::IntegrityPolicyScriptEnabled();
  }
  bool interestEventsNonComposedEnabled() {
    return RuntimeEnabledFeatures::InterestEventsNonComposedEnabled();
  }
  bool intersectionObserverCompositedAnimationsForceMainFramesEnabled() {
    return RuntimeEnabledFeatures::IntersectionObserverCompositedAnimationsForceMainFramesEnabled();
  }
  bool invertedColorsEnabled() {
    return RuntimeEnabledFeatures::InvertedColorsEnabled();
  }
  bool invisibleSVGAnimationThrottlingEnabled() {
    return RuntimeEnabledFeatures::InvisibleSVGAnimationThrottlingEnabled();
  }
  bool javaScriptCompileHintsPerFunctionMagicRuntimeEnabled() {
    return RuntimeEnabledFeatures::JavaScriptCompileHintsPerFunctionMagicRuntimeEnabledByRuntimeFlag();
  }
  bool javaScriptImportTextEnabled() {
    return RuntimeEnabledFeatures::JavaScriptImportTextEnabled();
  }
  bool javaScriptSourcePhaseImportsEnabled() {
    return RuntimeEnabledFeatures::JavaScriptSourcePhaseImportsEnabled();
  }
  bool keyboardAccessibleTooltipEnabled() {
    return RuntimeEnabledFeatures::KeyboardAccessibleTooltipEnabled();
  }
  bool labelInteractiveContentCheckBeforeHandlerEnabled() {
    return RuntimeEnabledFeatures::LabelInteractiveContentCheckBeforeHandlerEnabled();
  }
  bool langAttributeAwareFormControlUIEnabled() {
    return RuntimeEnabledFeatures::LangAttributeAwareFormControlUIEnabled();
  }
  bool languageDetectionAPIEnabled() {
    return RuntimeEnabledFeatures::LanguageDetectionAPIEnabled();
  }
  bool languageDetectionAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::LanguageDetectionAPIForWorkersEnabled();
  }
  bool layoutCloneForScrollableOverflowChangeEnabled() {
    return RuntimeEnabledFeatures::LayoutCloneForScrollableOverflowChangeEnabled();
  }
  bool layoutContainingBlockReturnsBoxEnabled() {
    return RuntimeEnabledFeatures::LayoutContainingBlockReturnsBoxEnabled();
  }
  bool layoutIgnoreMarginsForStickyEnabled() {
    return RuntimeEnabledFeatures::LayoutIgnoreMarginsForStickyEnabled();
  }
  bool layoutOOFCollectInlinesFixEnabled() {
    return RuntimeEnabledFeatures::LayoutOOFCollectInlinesFixEnabled();
  }
  bool lazyImageConformantLoadEventTimingEnabled() {
    return RuntimeEnabledFeatures::LazyImageConformantLoadEventTimingEnabled();
  }
  bool lazyLoadVideoAndAudioEnabled() {
    return RuntimeEnabledFeatures::LazyLoadVideoAndAudioEnabled();
  }
  bool lazyParseInlineStyleSheetsEnabled() {
    return RuntimeEnabledFeatures::LazyParseInlineStyleSheetsEnabled();
  }
  bool leftClickToHandleSuggestionEnabled() {
    return RuntimeEnabledFeatures::LeftClickToHandleSuggestionEnabled();
  }
  bool legacyAbstractRangeEnabled() {
    return RuntimeEnabledFeatures::LegacyAbstractRangeEnabled();
  }
  bool lightDismissFromClickEnabled() {
    return RuntimeEnabledFeatures::LightDismissFromClickEnabled();
  }
  bool lineBreakAfterSpaceBeforeOpenTagEnabled() {
    return RuntimeEnabledFeatures::LineBreakAfterSpaceBeforeOpenTagEnabled();
  }
  bool lineBreakBidiControlEnterEnabled() {
    return RuntimeEnabledFeatures::LineBreakBidiControlEnterEnabled();
  }
  bool lineBreakerClearShapeResultOnOverflowEnabled() {
    return RuntimeEnabledFeatures::LineBreakerClearShapeResultOnOverflowEnabled();
  }
  bool lineBreakerHanKerningEndEnabled() {
    return RuntimeEnabledFeatures::LineBreakerHanKerningEndEnabled();
  }
  bool localNetworkAccessForWebRTCOptOutEnabled() {
    return RuntimeEnabledFeatures::LocalNetworkAccessForWebRTCOptOutEnabledByRuntimeFlag();
  }
  bool localNetworkAccessPermissionPolicyEnabled() {
    return RuntimeEnabledFeatures::LocalNetworkAccessPermissionPolicyEnabled();
  }
  bool localNetworkAccessWebRTCEnabled() {
    return RuntimeEnabledFeatures::LocalNetworkAccessWebRTCEnabled();
  }
  bool localNetworkAccessWebSocketSTargetAddressSpaceEnabled() {
    return RuntimeEnabledFeatures::LocalNetworkAccessWebSocketsTargetAddressSpaceEnabled();
  }
  bool lockedModeEnabled() {
    return RuntimeEnabledFeatures::LockedModeEnabled();
  }
  bool loginElementEnabled() {
    return RuntimeEnabledFeatures::LoginElementEnabled();
  }
  bool longAnimationFrameSourceCharPositionEnabled() {
    return RuntimeEnabledFeatures::LongAnimationFrameSourceCharPositionEnabled();
  }
  bool longAnimationFrameSourceLineColumnEnabled() {
    return RuntimeEnabledFeatures::LongAnimationFrameSourceLineColumnEnabled();
  }
  bool longAnimationFrameSourceLineColumnInterfaceEnabled() {
    return RuntimeEnabledFeatures::LongAnimationFrameSourceLineColumnInterfaceEnabled();
  }
  bool longAnimationFrameStyleDurationEnabled() {
    return RuntimeEnabledFeatures::LongAnimationFrameStyleDurationEnabled();
  }
  bool longAnimationFrameWorkerEnabled() {
    return RuntimeEnabledFeatures::LongAnimationFrameWorkerEnabled();
  }
  bool longPressHitTestInFrameEnabled() {
    return RuntimeEnabledFeatures::LongPressHitTestInFrameEnabled();
  }
  bool longPressLinkSelectTextEnabled() {
    return RuntimeEnabledFeatures::LongPressLinkSelectTextEnabled();
  }
  bool longPressReleasesActiveStateEnabled() {
    return RuntimeEnabledFeatures::LongPressReleasesActiveStateEnabled();
  }
  bool longTaskFromLongAnimationFrameEnabled() {
    return RuntimeEnabledFeatures::LongTaskFromLongAnimationFrameEnabled();
  }
  bool macCharacterFallbackCacheEnabled() {
    return RuntimeEnabledFeatures::MacCharacterFallbackCacheEnabled();
  }
  bool macDisableCtrlHomeEndEnabled() {
    return RuntimeEnabledFeatures::MacDisableCtrlHomeEndEnabled();
  }
  bool macFontWeightFromOS2Enabled() {
    return RuntimeEnabledFeatures::MacFontWeightFromOS2Enabled();
  }
  bool machineLearningNeuralNetworkEnabled() {
    return RuntimeEnabledFeatures::MachineLearningNeuralNetworkEnabled();
  }
  bool managedConfigurationEnabled() {
    return RuntimeEnabledFeatures::ManagedConfigurationEnabled();
  }
  bool manualTextEnabled() {
    return RuntimeEnabledFeatures::ManualTextEnabled();
  }
  bool marginTrimEnabled() {
    return RuntimeEnabledFeatures::MarginTrimEnabled();
  }
  bool markAncestorsOnDisplayLockUnlockEnabled() {
    return RuntimeEnabledFeatures::MarkAncestorsOnDisplayLockUnlockEnabled();
  }
  bool maskDeserializationTimeForCrossOriginMessagesEnabled() {
    return RuntimeEnabledFeatures::MaskDeserializationTimeForCrossOriginMessagesEnabled();
  }
  bool maskWaitForAllImagesEnabled() {
    return RuntimeEnabledFeatures::MaskWaitForAllImagesEnabled();
  }
  bool mathmlAnchorElementEnabled() {
    return RuntimeEnabledFeatures::MathMLAnchorElementEnabled();
  }
  bool mathmlOperatorRTLMirroringEnabled() {
    return RuntimeEnabledFeatures::MathMLOperatorRTLMirroringEnabled();
  }
  bool measureMemoryEnabled() {
    return RuntimeEnabledFeatures::MeasureMemoryEnabled();
  }
  bool mediaCapabilitiesEncodingInfoEnabled() {
    return RuntimeEnabledFeatures::MediaCapabilitiesEncodingInfoEnabled();
  }
  bool mediaCapabilitiesSpatialAudioEnabled() {
    return RuntimeEnabledFeatures::MediaCapabilitiesSpatialAudioEnabled();
  }
  bool mediaCaptionSettingsButtonEnabled() {
    return RuntimeEnabledFeatures::MediaCaptionSettingsButtonEnabled();
  }
  bool mediaCaptureEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureEnabled();
  }
  bool mediaCaptureBackgroundBlurEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureBackgroundBlurEnabledByRuntimeFlag();
  }
  bool mediaCaptureCameraControlsEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureCameraControlsEnabled();
  }
  bool mediaCaptureConfigurationChangeEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureConfigurationChangeEnabledByRuntimeFlag();
  }
  bool mediaCaptureElementPreviewEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureElementPreviewEnabled();
  }
  bool mediaCaptureVoiceIsolationEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureVoiceIsolationEnabled();
  }
  bool mediaControlsExpandGestureEnabled() {
    return RuntimeEnabledFeatures::MediaControlsExpandGestureEnabled();
  }
  bool mediaControlsOverlayPlayButtonEnabled() {
    return RuntimeEnabledFeatures::MediaControlsOverlayPlayButtonEnabled();
  }
  bool mediaElementMutedDefaultStateEnabled() {
    return RuntimeEnabledFeatures::MediaElementMutedDefaultStateEnabled();
  }
  bool mediaElementVolumeGreaterThanOneEnabled() {
    return RuntimeEnabledFeatures::MediaElementVolumeGreaterThanOneEnabled();
  }
  bool mediaEngagementBypassAutoplayPoliciesEnabled() {
    return RuntimeEnabledFeatures::MediaEngagementBypassAutoplayPoliciesEnabled();
  }
  bool mediaLatencyHintEnabled() {
    return RuntimeEnabledFeatures::MediaLatencyHintEnabled();
  }
  bool mediaPlaybackWhileNotVisiblePermissionPolicyEnabled() {
    return RuntimeEnabledFeatures::MediaPlaybackWhileNotVisiblePermissionPolicyEnabled();
  }
  bool mediaQueryNavigationControlsEnabled() {
    return RuntimeEnabledFeatures::MediaQueryNavigationControlsEnabled();
  }
  bool mediaSessionEnabled() {
    return RuntimeEnabledFeatures::MediaSessionEnabled();
  }
  bool mediaSessionChapterInformationEnabled() {
    return RuntimeEnabledFeatures::MediaSessionChapterInformationEnabled();
  }
  bool mediaSourceExperimentalEnabled() {
    return RuntimeEnabledFeatures::MediaSourceExperimentalEnabled();
  }
  bool mediaSourceExtensionsForWebCodecsEnabled() {
    return RuntimeEnabledFeatures::MediaSourceExtensionsForWebCodecsEnabledByRuntimeFlag();
  }
  bool mediaStreamTrackProcessorStatsEnabled() {
    return RuntimeEnabledFeatures::MediaStreamTrackProcessorStatsEnabled();
  }
  bool mediaStreamTrackTransferEnabled() {
    return RuntimeEnabledFeatures::MediaStreamTrackTransferEnabled();
  }
  bool mediaStreamTrackWebSpeechEnabled() {
    return RuntimeEnabledFeatures::MediaStreamTrackWebSpeechEnabled();
  }
  bool memoryConsumerForNGShapeCacheEnabled() {
    return RuntimeEnabledFeatures::MemoryConsumerForNGShapeCacheEnabled();
  }
  bool menuElementsEnabled() {
    return RuntimeEnabledFeatures::MenuElementsEnabled();
  }
  bool messagePortCloseEventEnabled() {
    return RuntimeEnabledFeatures::MessagePortCloseEventEnabled();
  }
  bool middleClickAutoscrollEnabled() {
    return RuntimeEnabledFeatures::MiddleClickAutoscrollEnabled();
  }
  bool mixedContentAutoupgradesUseIsMixedContentRestrictedInFrameEnabled() {
    return RuntimeEnabledFeatures::MixedContentAutoupgradesUseIsMixedContentRestrictedInFrameEnabled();
  }
  bool mobileLayoutThemeEnabled() {
    return RuntimeEnabledFeatures::MobileLayoutThemeEnabled();
  }
  bool modifyParagraphCrossEditingoundaryEnabled() {
    return RuntimeEnabledFeatures::ModifyParagraphCrossEditingoundaryEnabled();
  }
  bool moduleMapDoNotCacheFailedFetchEnabled() {
    return RuntimeEnabledFeatures::ModuleMapDoNotCacheFailedFetchEnabled();
  }
  bool modulePreloadReferrerEnabled() {
    return RuntimeEnabledFeatures::ModulePreloadReferrerEnabled();
  }
  bool modulePreloadStyleJsonEnabled() {
    return RuntimeEnabledFeatures::ModulePreloadStyleJsonEnabled();
  }
  bool mojoJSEnabled() {
    return RuntimeEnabledFeatures::MojoJSEnabled();
  }
  bool mojoJSTestEnabled() {
    return RuntimeEnabledFeatures::MojoJSTestEnabled();
  }
  bool monospaceGlyphCompactionEnabled() {
    return RuntimeEnabledFeatures::MonospaceGlyphCompactionEnabled();
  }
  bool moveEndingSelectionToListChildEnabled() {
    return RuntimeEnabledFeatures::MoveEndingSelectionToListChildEnabled();
  }
  bool moveParagraphsPreserveInlineStructureEnabled() {
    return RuntimeEnabledFeatures::MoveParagraphsPreserveInlineStructureEnabled();
  }
  bool multicolColumnWidthMaxContentClampEnabled() {
    return RuntimeEnabledFeatures::MulticolColumnWidthMaxContentClampEnabled();
  }
  bool nastaliqScriptEnabled() {
    return RuntimeEnabledFeatures::NastaliqScriptEnabled();
  }
  bool navigateEventDeferCrossDocumentCommitEnabled() {
    return RuntimeEnabledFeatures::NavigateEventDeferCrossDocumentCommitEnabled();
  }
  bool navigationEventTimingEnabled() {
    return RuntimeEnabledFeatures::NavigationEventTimingEnabled();
  }
  bool navigationSourcePseudoClassEnabled() {
    return RuntimeEnabledFeatures::NavigationSourcePseudoClassEnabled();
  }
  bool navigationTimingRedirectTimingViaTAOEnabled() {
    return RuntimeEnabledFeatures::NavigationTimingRedirectTimingViaTAOEnabled();
  }
  bool navigationTypeAndPhaseEnabled() {
    return RuntimeEnabledFeatures::NavigationTypeAndPhaseEnabled();
  }
  bool navigatorContentUtilsEnabled() {
    return RuntimeEnabledFeatures::NavigatorContentUtilsEnabled();
  }
  bool netInfoConstantTypeEnabled() {
    return RuntimeEnabledFeatures::NetInfoConstantTypeEnabled();
  }
  bool netInfoDownlinkMaxEnabled() {
    return RuntimeEnabledFeatures::NetInfoDownlinkMaxEnabled();
  }
  bool neutralKeyframeEasingComplianceEnabled() {
    return RuntimeEnabledFeatures::NeutralKeyframeEasingComplianceEnabled();
  }
  bool newAnimationCompositingCheckingEnabled() {
    return RuntimeEnabledFeatures::NewAnimationCompositingCheckingEnabled();
  }
  bool newAnimationDispositionReportingEnabled() {
    return RuntimeEnabledFeatures::NewAnimationDispositionReportingEnabled();
  }
  bool newHTMLSettingMethodsEnabled() {
    return RuntimeEnabledFeatures::NewHTMLSettingMethodsEnabled();
  }
  bool nodeIteratorRemovalFixEnabled() {
    return RuntimeEnabledFeatures::NodeIteratorRemovalFixEnabled();
  }
  bool noExtendSelectionToUserSelectNoneOutOfFlowEnabled() {
    return RuntimeEnabledFeatures::NoExtendSelectionToUserSelectNoneOutOfFlowEnabled();
  }
  bool noExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableEnabled() {
    return RuntimeEnabledFeatures::NoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableEnabled();
  }
  bool noFontAntialiasingEnabled() {
    return RuntimeEnabledFeatures::NoFontAntialiasingEnabled();
  }
  bool noIdleEncodingForWebTestsEnabled() {
    return RuntimeEnabledFeatures::NoIdleEncodingForWebTestsEnabled();
  }
  bool noNbspForInterElementSpaceOnCopyEnabled() {
    return RuntimeEnabledFeatures::NoNbspForInterElementSpaceOnCopyEnabled();
  }
  bool nonEmptyBlockquotesOnOutdentingEnabled() {
    return RuntimeEnabledFeatures::NonEmptyBlockquotesOnOutdentingEnabled();
  }
  bool nonEmptyVisibleTextSelectionForTextFragmentEnabled() {
    return RuntimeEnabledFeatures::NonEmptyVisibleTextSelectionForTextFragmentEnabled();
  }
  bool nonStandardAppearanceValueSliderVerticalEnabled() {
    return RuntimeEnabledFeatures::NonStandardAppearanceValueSliderVerticalEnabled();
  }
  bool normalizeLineEndingsInInsertTextEnabled() {
    return RuntimeEnabledFeatures::NormalizeLineEndingsInInsertTextEnabled();
  }
  bool noSynchronousThrowForCrossOriginBlockedWorkerEnabled() {
    return RuntimeEnabledFeatures::NoSynchronousThrowForCrossOriginBlockedWorkerEnabled();
  }
  bool notificationConstructorEnabled() {
    return RuntimeEnabledFeatures::NotificationConstructorEnabled();
  }
  bool notificationContentImageEnabled() {
    return RuntimeEnabledFeatures::NotificationContentImageEnabled();
  }
  bool notificationsEnabled() {
    return RuntimeEnabledFeatures::NotificationsEnabled();
  }
  bool notificationTriggersEnabled() {
    return RuntimeEnabledFeatures::NotificationTriggersEnabledByRuntimeFlag();
  }
  bool notifySelectionControllerOnUnchangedSelectionEnabled() {
    return RuntimeEnabledFeatures::NotifySelectionControllerOnUnchangedSelectionEnabled();
  }
  bool numberInputFullWidthCharsEnabled() {
    return RuntimeEnabledFeatures::NumberInputFullWidthCharsEnabled();
  }
  bool offlineAudioContextIncrementalRenderingEnabled() {
    return RuntimeEnabledFeatures::OfflineAudioContextIncrementalRenderingEnabled();
  }
  bool offscreenCanvasGetContextAttributesEnabled() {
    return RuntimeEnabledFeatures::OffscreenCanvasGetContextAttributesEnabled();
  }
  bool offsetMappingReuseFullWidthSpaceFixEnabled() {
    return RuntimeEnabledFeatures::OffsetMappingReuseFullWidthSpaceFixEnabled();
  }
  bool offsetPathTransformUpdateFixEnabled() {
    return RuntimeEnabledFeatures::OffsetPathTransformUpdateFixEnabled();
  }
  bool omitBlurEventOnElementRemovalEnabled() {
    return RuntimeEnabledFeatures::OmitBlurEventOnElementRemovalEnabled();
  }
  bool omitSubframeDetachmentEventsOnRemovalEnabled() {
    return RuntimeEnabledFeatures::OmitSubframeDetachmentEventsOnRemovalEnabled();
  }
  bool onDeviceWebSpeechAvailableEnabled() {
    return RuntimeEnabledFeatures::OnDeviceWebSpeechAvailableEnabled();
  }
  bool onDeviceWebSpeechQualityEnabled() {
    return RuntimeEnabledFeatures::OnDeviceWebSpeechQualityEnabled();
  }
  bool oofLayoutRequiresSideEffectsEnabled() {
    return RuntimeEnabledFeatures::OofLayoutRequiresSideEffectsEnabled();
  }
  bool opaqueRangeEnabled() {
    return RuntimeEnabledFeatures::OpaqueRangeEnabled();
  }
  bool openPopoverInvokerRestrictToSameTreeScopeEnabled() {
    return RuntimeEnabledFeatures::OpenPopoverInvokerRestrictToSameTreeScopeEnabled();
  }
  bool optionDisablednessCheckAncestorsEnabled() {
    return RuntimeEnabledFeatures::OptionDisablednessCheckAncestorsEnabled();
  }
  bool orientationEventEnabled() {
    return RuntimeEnabledFeatures::OrientationEventEnabled();
  }
  bool originAPIEnabled() {
    return RuntimeEnabledFeatures::OriginAPIEnabled();
  }
  bool originIsolationHeaderEnabled() {
    return RuntimeEnabledFeatures::OriginIsolationHeaderEnabled();
  }
  bool originPolicyEnabled() {
    return RuntimeEnabledFeatures::OriginPolicyEnabled();
  }
  bool originTrialsSampleAPIEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIBrowserReadWriteEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIBrowserReadWriteEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIDependentEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIDependentEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIDeprecationEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIDeprecationEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIExpiryGracePeriodEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIExpiryGracePeriodEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIImpliedEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIImpliedEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIInvalidOSEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIInvalidOSEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPINavigationEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPINavigationEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentExpiryGracePeriodEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentFeatureEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentFeatureEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentInvalidOSEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentInvalidOSEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIThirdPartyEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIThirdPartyEnabledByRuntimeFlag();
  }
  bool outlineDrawAutoStyleZeroWidthEnabled() {
    return RuntimeEnabledFeatures::OutlineDrawAutoStyleZeroWidthEnabled();
  }
  bool overlayGlobalRuleRemovalEnabled() {
    return RuntimeEnabledFeatures::OverlayGlobalRuleRemovalEnabled();
  }
  bool overlayPropertyEnabled() {
    return RuntimeEnabledFeatures::OverlayPropertyEnabled();
  }
  bool overscrollAreasEnabled() {
    return RuntimeEnabledFeatures::OverscrollAreasEnabledByRuntimeFlag();
  }
  bool pagePopupEnabled() {
    return RuntimeEnabledFeatures::PagePopupEnabled();
  }
  bool pagePopupCopyPasteEnabled() {
    return RuntimeEnabledFeatures::PagePopupCopyPasteEnabled();
  }
  bool pageSwapEventEnabled() {
    return RuntimeEnabledFeatures::PageSwapEventEnabled();
  }
  bool paintCaretAfterInnerEditorPaintEnabled() {
    return RuntimeEnabledFeatures::PaintCaretAfterInnerEditorPaintEnabled();
  }
  bool paintHoldingForIframesEnabled() {
    return RuntimeEnabledFeatures::PaintHoldingForIframesEnabled();
  }
  bool paintTimingContentImagePseudoElementsEnabled() {
    return RuntimeEnabledFeatures::PaintTimingContentImagePseudoElementsEnabled();
  }
  bool paintUnderInvalidationCheckingEnabled() {
    return RuntimeEnabledFeatures::PaintUnderInvalidationCheckingEnabled();
  }
  bool parakeetEnabled() {
    return RuntimeEnabledFeatures::ParakeetEnabledByRuntimeFlag();
  }
  bool partitionVisitedLinkDatabaseWithSelfLinksEnabled() {
    return RuntimeEnabledFeatures::PartitionVisitedLinkDatabaseWithSelfLinksEnabled();
  }
  bool passwordRevealEnabled() {
    return RuntimeEnabledFeatures::PasswordRevealEnabled();
  }
  bool paymentAppEnabled() {
    return RuntimeEnabledFeatures::PaymentAppEnabled();
  }
  bool paymentHandlerStaticCustomSizeEnabled() {
    return RuntimeEnabledFeatures::PaymentHandlerStaticCustomSizeEnabled();
  }
  bool paymentLinkDetectionEnabled() {
    return RuntimeEnabledFeatures::PaymentLinkDetectionEnabled();
  }
  bool paymentMethodChangeEventEnabled() {
    return RuntimeEnabledFeatures::PaymentMethodChangeEventEnabled();
  }
  bool paymentRequestEnabled() {
    return RuntimeEnabledFeatures::PaymentRequestEnabled();
  }
  bool paymentRequestNonFullyActiveDocumentCheckInvalidStateErrorEnabled() {
    return RuntimeEnabledFeatures::PaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorEnabled();
  }
  bool performanceManagerInstrumentationEnabled() {
    return RuntimeEnabledFeatures::PerformanceManagerInstrumentationEnabled();
  }
  bool performanceMarkCustomUserTimingFromSubframeEnabled() {
    return RuntimeEnabledFeatures::PerformanceMarkCustomUserTimingFromSubframeEnabled();
  }
  bool performanceMarkFeatureUsageEnabled() {
    return RuntimeEnabledFeatures::PerformanceMarkFeatureUsageEnabled();
  }
  bool periodicBackgroundSyncEnabled() {
    return RuntimeEnabledFeatures::PeriodicBackgroundSyncEnabled();
  }
  bool perMethodCanMakePaymentQuotaEnabled() {
    return RuntimeEnabledFeatures::PerMethodCanMakePaymentQuotaEnabledByRuntimeFlag();
  }
  bool permissionsPolicyAPIEnabled() {
    return RuntimeEnabledFeatures::PermissionsPolicyAPIEnabled();
  }
  bool permissionsPolicyForSharedWorkersEnabled() {
    return RuntimeEnabledFeatures::PermissionsPolicyForSharedWorkersEnabled();
  }
  bool permissionsRequestRevokeEnabled() {
    return RuntimeEnabledFeatures::PermissionsRequestRevokeEnabled();
  }
  bool persistentWidgetAPIEnabled() {
    return RuntimeEnabledFeatures::PersistentWidgetAPIEnabled();
  }
  bool pNaClEnabled() {
    return RuntimeEnabledFeatures::PNaClEnabledByRuntimeFlag();
  }
  bool pointerLockOnAndroidEnabled() {
    return RuntimeEnabledFeatures::PointerLockOnAndroidEnabled();
  }
  bool pointerRawUpdateOnlyInSecureContextEnabled() {
    return RuntimeEnabledFeatures::PointerRawUpdateOnlyInSecureContextEnabled();
  }
  bool popoverHintNestedShowExceptionEnabled() {
    return RuntimeEnabledFeatures::PopoverHintNestedShowExceptionEnabled();
  }
  bool popoverHintNewBehaviorEnabled() {
    return RuntimeEnabledFeatures::PopoverHintNewBehaviorEnabled();
  }
  bool popupWidgetRequiresUserActivationEnabled() {
    return RuntimeEnabledFeatures::PopupWidgetRequiresUserActivationEnabled();
  }
  bool positionOutsideTabSpanCheckSiblingNodeEnabled() {
    return RuntimeEnabledFeatures::PositionOutsideTabSpanCheckSiblingNodeEnabled();
  }
  bool positionVisibilityIgnoreNonClipAncestorsEnabled() {
    return RuntimeEnabledFeatures::PositionVisibilityIgnoreNonClipAncestorsEnabled();
  }
  bool positionVisibilitySingularValuesEnabled() {
    return RuntimeEnabledFeatures::PositionVisibilitySingularValuesEnabled();
  }
  bool potentialPermissionsPolicyReportingEnabled() {
    return RuntimeEnabledFeatures::PotentialPermissionsPolicyReportingEnabled();
  }
  bool preciseMemoryInfoEnabled() {
    return RuntimeEnabledFeatures::PreciseMemoryInfoEnabled();
  }
  bool preferDefaultScrollbarStylesEnabled() {
    return RuntimeEnabledFeatures::PreferDefaultScrollbarStylesEnabled();
  }
  bool preferNonCompositedScrollingEnabled() {
    return RuntimeEnabledFeatures::PreferNonCompositedScrollingEnabled();
  }
  bool preferredAudioOutputDevicesEnabled() {
    return RuntimeEnabledFeatures::PreferredAudioOutputDevicesEnabledByRuntimeFlag();
  }
  bool prefersReducedDataEnabled() {
    return RuntimeEnabledFeatures::PrefersReducedDataEnabled();
  }
  bool prefetchAndPrerenderActivationBeaconEnabled() {
    return RuntimeEnabledFeatures::PrefetchAndPrerenderActivationBeaconEnabledByRuntimeFlag();
  }
  bool preloadLinkRelDataUrlsEnabled() {
    return RuntimeEnabledFeatures::PreloadLinkRelDataUrlsEnabled();
  }
  bool preloadScannerImprovementsEnabled() {
    return RuntimeEnabledFeatures::PreloadScannerImprovementsEnabled();
  }
  bool prePaintBoxInvalidatorUsesFragmentsEnabled() {
    return RuntimeEnabledFeatures::PrePaintBoxInvalidatorUsesFragmentsEnabled();
  }
  bool prerender2Enabled() {
    return RuntimeEnabledFeatures::Prerender2Enabled();
  }
  bool prerender2CrossOriginIframesEnabled() {
    return RuntimeEnabledFeatures::Prerender2CrossOriginIframesEnabledByRuntimeFlag();
  }
  bool prerenderActivationByFormSubmissionEnabled() {
    return RuntimeEnabledFeatures::PrerenderActivationByFormSubmissionEnabledByRuntimeFlag();
  }
  bool prerenderUntilScriptEnabled() {
    return RuntimeEnabledFeatures::PrerenderUntilScriptEnabledByRuntimeFlag();
  }
  bool presentationEnabled() {
    return RuntimeEnabledFeatures::PresentationEnabled();
  }
  bool preserveHtmlEquivalentTagsInTypingStyleEnabled() {
    return RuntimeEnabledFeatures::PreserveHtmlEquivalentTagsInTypingStyleEnabled();
  }
  bool preserveUnfocusedSelectionCacheEnabled() {
    return RuntimeEnabledFeatures::PreserveUnfocusedSelectionCacheEnabled();
  }
  bool preventTextSelectionJumpEnabled() {
    return RuntimeEnabledFeatures::PreventTextSelectionJumpEnabled();
  }
  bool privateNetworkAccessNullIpAddressEnabled() {
    return RuntimeEnabledFeatures::PrivateNetworkAccessNullIpAddressEnabled();
  }
  bool privateStateTokensEnabled() {
    return RuntimeEnabledFeatures::PrivateStateTokensEnabled();
  }
  bool privateStateTokensAlwaysAllowIssuanceEnabled() {
    return RuntimeEnabledFeatures::PrivateStateTokensAlwaysAllowIssuanceEnabled();
  }
  bool profilerAPIEnabled() {
    return RuntimeEnabledFeatures::ProfilerAPIEnabled();
  }
  bool profilerAPIForDedicatedWorkerEnabled() {
    return RuntimeEnabledFeatures::ProfilerAPIForDedicatedWorkerEnabled();
  }
  bool programmaticScrollPromiseEnabled() {
    return RuntimeEnabledFeatures::ProgrammaticScrollPromiseEnabled();
  }
  bool progressEventInServiceWorkerEnabled() {
    return RuntimeEnabledFeatures::ProgressEventInServiceWorkerEnabled();
  }
  bool propagateOverscrollBehaviorFromRootEnabled() {
    return RuntimeEnabledFeatures::PropagateOverscrollBehaviorFromRootEnabled();
  }
  bool pseudoElementsFocusableEnabled() {
    return RuntimeEnabledFeatures::PseudoElementsFocusableEnabled();
  }
  bool pseudoElementsHitTestableEnabled() {
    return RuntimeEnabledFeatures::PseudoElementsHitTestableEnabled();
  }
  bool pseudoElementsHoverableEnabled() {
    return RuntimeEnabledFeatures::PseudoElementsHoverableEnabled();
  }
  bool pushMessageDataBytesEnabled() {
    return RuntimeEnabledFeatures::PushMessageDataBytesEnabled();
  }
  bool pushMessagingEnabled() {
    return RuntimeEnabledFeatures::PushMessagingEnabled();
  }
  bool pushMessagingSubscriptionChangeEnabled() {
    return RuntimeEnabledFeatures::PushMessagingSubscriptionChangeEnabled();
  }
  bool quotaExceededErrorUpdateEnabled() {
    return RuntimeEnabledFeatures::QuotaExceededErrorUpdateEnabled();
  }
  bool radioButtonCircularBorderRadiusEnabled() {
    return RuntimeEnabledFeatures::RadioButtonCircularBorderRadiusEnabled();
  }
  bool rangeBoundaryFastPathEnabled() {
    return RuntimeEnabledFeatures::RangeBoundaryFastPathEnabled();
  }
  bool rasterInducingScrollEnabled() {
    return RuntimeEnabledFeatures::RasterInducingScrollEnabled();
  }
  bool rateLimitPointerLockRequestsEnabled() {
    return RuntimeEnabledFeatures::RateLimitPointerLockRequestsEnabled();
  }
  bool readableStreamBYOBReaderReadMinOptionEnabled() {
    return RuntimeEnabledFeatures::ReadableStreamBYOBReaderReadMinOptionEnabled();
  }
  bool readClipboardDataOnClipboardItemGetTypeEnabled() {
    return RuntimeEnabledFeatures::ReadClipboardDataOnClipboardItemGetTypeEnabled();
  }
  bool readingFlowWithSlotsEnabled() {
    return RuntimeEnabledFeatures::ReadingFlowWithSlotsEnabled();
  }
  bool readOnlyTextControlSelectionEnabled() {
    return RuntimeEnabledFeatures::ReadOnlyTextControlSelectionEnabled();
  }
  bool recheckParentDuringNodeVectorInsertionEnabled() {
    return RuntimeEnabledFeatures::RecheckParentDuringNodeVectorInsertionEnabled();
  }
  bool reduceAcceptLanguageEnabled() {
    return RuntimeEnabledFeatures::ReduceAcceptLanguageEnabled();
  }
  bool reduceUserAgentMinorVersionEnabled() {
    return RuntimeEnabledFeatures::ReduceUserAgentMinorVersionEnabled();
  }
  bool regionCaptureEnabled() {
    return RuntimeEnabledFeatures::RegionCaptureEnabled();
  }
  bool relatedWebsitePartitionAPIEnabled() {
    return RuntimeEnabledFeatures::RelatedWebsitePartitionAPIEnabled();
  }
  bool releasePaintHoldingWithoutContentfulPaintEnabled() {
    return RuntimeEnabledFeatures::ReleasePaintHoldingWithoutContentfulPaintEnabled();
  }
  bool relOpenerBcgDependencyHintEnabled() {
    return RuntimeEnabledFeatures::RelOpenerBcgDependencyHintEnabled();
  }
  bool remotePlaybackEnabled() {
    return RuntimeEnabledFeatures::RemotePlaybackEnabled();
  }
  bool remotePlaybackBackendEnabled() {
    return RuntimeEnabledFeatures::RemotePlaybackBackendEnabled();
  }
  bool removeCharsetAutoDetectionForISO2022JPEnabled() {
    return RuntimeEnabledFeatures::RemoveCharsetAutoDetectionForISO2022JPEnabled();
  }
  bool removeChildrenInReplaceChildrenEnabled() {
    return RuntimeEnabledFeatures::RemoveChildrenInReplaceChildrenEnabled();
  }
  bool removeCollapsedPlaceholderForContentEditableEnabled() {
    return RuntimeEnabledFeatures::RemoveCollapsedPlaceholderForContentEditableEnabled();
  }
  bool removeDanglingMarkupInTargetEnabled() {
    return RuntimeEnabledFeatures::RemoveDanglingMarkupInTargetEnabled();
  }
  bool removeDataUrlInSvgUseEnabled() {
    return RuntimeEnabledFeatures::RemoveDataUrlInSvgUseEnabled();
  }
  bool removeNonAllowlistedCreateEventEnabled() {
    return RuntimeEnabledFeatures::RemoveNonAllowlistedCreateEventEnabled();
  }
  bool removeScrollNodeWorkaroundEnabled() {
    return RuntimeEnabledFeatures::RemoveScrollNodeWorkaroundEnabled();
  }
  bool removeVisibleSelectionInDOMSelectionEnabled() {
    return RuntimeEnabledFeatures::RemoveVisibleSelectionInDOMSelectionEnabled();
  }
  bool renderPriorityAttributeEnabled() {
    return RuntimeEnabledFeatures::RenderPriorityAttributeEnabled();
  }
  bool replaceChildrenWithFragmentFastPathEnabled() {
    return RuntimeEnabledFeatures::ReplaceChildrenWithFragmentFastPathEnabled();
  }
  bool replaceCompositionActualInsertedLengthEnabled() {
    return RuntimeEnabledFeatures::ReplaceCompositionActualInsertedLengthEnabled();
  }
  bool replacedNormalFlowStackingInlinePaintEnabled() {
    return RuntimeEnabledFeatures::ReplacedNormalFlowStackingInlinePaintEnabled();
  }
  bool reportFirstFrameTimeAsRenderTimeEnabled() {
    return RuntimeEnabledFeatures::ReportFirstFrameTimeAsRenderTimeEnabled();
  }
  bool reportLayoutShiftRectsInCssPixelsEnabled() {
    return RuntimeEnabledFeatures::ReportLayoutShiftRectsInCssPixelsEnabled();
  }
  bool requestIsReloadNavigationEnabled() {
    return RuntimeEnabledFeatures::RequestIsReloadNavigationEnabled();
  }
  bool resourceTimingInitiatorEnabled() {
    return RuntimeEnabledFeatures::ResourceTimingInitiatorEnabled();
  }
  bool resourceTimingUseCORSForBodySizesEnabled() {
    return RuntimeEnabledFeatures::ResourceTimingUseCORSForBodySizesEnabled();
  }
  bool respectOverscrollBehaviorForScrollBubblingEnabled() {
    return RuntimeEnabledFeatures::RespectOverscrollBehaviorForScrollBubblingEnabled();
  }
  bool responsiveIframesEnabled() {
    return RuntimeEnabledFeatures::ResponsiveIframesEnabled();
  }
  bool responsiveIframesShrinkEnabled() {
    return RuntimeEnabledFeatures::ResponsiveIframesShrinkEnabled();
  }
  bool responsiveIframesSingleAxisIcbEnabled() {
    return RuntimeEnabledFeatures::ResponsiveIframesSingleAxisIcbEnabled();
  }
  bool restrictGamepadAccessEnabled() {
    return RuntimeEnabledFeatures::RestrictGamepadAccessEnabled();
  }
  bool restrictOwnAudioEnabled() {
    return RuntimeEnabledFeatures::RestrictOwnAudioEnabled();
  }
  bool rootScrollbarFollowsBrowserThemeEnabled() {
    return RuntimeEnabledFeatures::RootScrollbarFollowsBrowserThemeEnabled();
  }
  bool routeMatchingEnabled() {
    return RuntimeEnabledFeatures::RouteMatchingEnabled();
  }
  bool rtcAlwaysNegotiateDataChannelsEnabled() {
    return RuntimeEnabledFeatures::RtcAlwaysNegotiateDataChannelsEnabled();
  }
  bool rtcAudioJitterBufferMaxPacketsEnabled() {
    return RuntimeEnabledFeatures::RtcAudioJitterBufferMaxPacketsEnabledByRuntimeFlag();
  }
  bool rtcConfigurationIceTransportsEnabled() {
    return RuntimeEnabledFeatures::RTCConfigurationIceTransportsEnabled();
  }
  bool rtcDataChannelPriorityEnabled() {
    return RuntimeEnabledFeatures::RTCDataChannelPriorityEnabled();
  }
  bool rtcDiagnosticLoggingEnabled() {
    return RuntimeEnabledFeatures::RTCDiagnosticLoggingEnabledByRuntimeFlag();
  }
  bool rtcEncodedAudioFrameConstructorEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedAudioFrameConstructorEnabled();
  }
  bool rtcEncodedFrameAudioLevelEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedFrameAudioLevelEnabled();
  }
  bool rtcEncodedFrameSetMetadataEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedFrameSetMetadataEnabledByRuntimeFlag();
  }
  bool rtcEncodedFrameTimestampsEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedFrameTimestampsEnabled();
  }
  bool rtcEncodedSourceEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedSourceEnabled();
  }
  bool rtcEncodedVideoFrameAdditionalMetadataEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedVideoFrameAdditionalMetadataEnabled();
  }
  bool rtcEncodedVideoFrameConstructorEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedVideoFrameConstructorEnabled();
  }
  bool rtcJitterBufferTargetEnabled() {
    return RuntimeEnabledFeatures::RTCJitterBufferTargetEnabled();
  }
  bool rtcLegacyCallbackBasedGetStatsEnabled() {
    return RuntimeEnabledFeatures::RTCLegacyCallbackBasedGetStatsEnabledByRuntimeFlag();
  }
  bool rtcLegacyDiagnosticLoggingEnabled() {
    return RuntimeEnabledFeatures::RTCLegacyDiagnosticLoggingEnabledByRuntimeFlag();
  }
  bool rtcRtpEncodingParametersCodecEnabled() {
    return RuntimeEnabledFeatures::RTCRtpEncodingParametersCodecEnabled();
  }
  bool rtcRtpHeaderEncryptionPolicyEnabled() {
    return RuntimeEnabledFeatures::RtcRtpHeaderEncryptionPolicyEnabled();
  }
  bool rtcRtpScaleResolutionDownToEnabled() {
    return RuntimeEnabledFeatures::RTCRtpScaleResolutionDownToEnabled();
  }
  bool rtcRtpScriptTransformEnabled() {
    return RuntimeEnabledFeatures::RTCRtpScriptTransformEnabled();
  }
  bool rtcRtpTransportEnabled() {
    return RuntimeEnabledFeatures::RTCRtpTransportEnabled();
  }
  bool rtcStatsRelativePacketArrivalDelayEnabled() {
    return RuntimeEnabledFeatures::RTCStatsRelativePacketArrivalDelayEnabledByRuntimeFlag();
  }
  bool rtcSvcScalabilityModeEnabled() {
    return RuntimeEnabledFeatures::RTCSvcScalabilityModeEnabled();
  }
  bool rubyTextDecorationSpacingEnabled() {
    return RuntimeEnabledFeatures::RubyTextDecorationSpacingEnabled();
  }
  bool runMicrotaskBeforeXmlScriptEnabled() {
    return RuntimeEnabledFeatures::RunMicrotaskBeforeXmlScriptEnabled();
  }
  bool runSnapshotPostLayoutStateStepsEnabled() {
    return RuntimeEnabledFeatures::RunSnapshotPostLayoutStateStepsEnabled();
  }
  bool sanitizeIDNEmailFormInputEnabled() {
    return RuntimeEnabledFeatures::SanitizeIDNEmailFormInputEnabled();
  }
  bool sanitizerAPIEnabled() {
    return RuntimeEnabledFeatures::SanitizerAPIEnabled();
  }
  bool sanitizeWorkerErrorPropagationEnabled() {
    return RuntimeEnabledFeatures::SanitizeWorkerErrorPropagationEnabled();
  }
  bool scopedViewTransitionSizeContainmentEnabled() {
    return RuntimeEnabledFeatures::ScopedViewTransitionSizeContainmentEnabled();
  }
  bool scoreLineBreakerAbortEnabled() {
    return RuntimeEnabledFeatures::ScoreLineBreakerAbortEnabled();
  }
  bool screenDetailedHdrHeadroomEnabled() {
    return RuntimeEnabledFeatures::ScreenDetailedHdrHeadroomEnabled();
  }
  bool scriptBasedOnUnicodeBlockEnabled() {
    return RuntimeEnabledFeatures::ScriptBasedOnUnicodeBlockEnabled();
  }
  bool scriptedSpeechRecognitionEnabled() {
    return RuntimeEnabledFeatures::ScriptedSpeechRecognitionEnabled();
  }
  bool scriptedSpeechSynthesisEnabled() {
    return RuntimeEnabledFeatures::ScriptedSpeechSynthesisEnabled();
  }
  bool scrollAnchorSerializationUseParentForTextNodeEnabled() {
    return RuntimeEnabledFeatures::ScrollAnchorSerializationUseParentForTextNodeEnabled();
  }
  bool scrollAxisLockEnabled() {
    return RuntimeEnabledFeatures::ScrollAxisLockEnabled();
  }
  bool scrollbarColorEnabled() {
    return RuntimeEnabledFeatures::ScrollbarColorEnabled();
  }
  bool scrollbarGutterBugFixEnabled() {
    return RuntimeEnabledFeatures::ScrollbarGutterBugFixEnabled();
  }
  bool scrollbarWidthEnabled() {
    return RuntimeEnabledFeatures::ScrollbarWidthEnabled();
  }
  bool scrollIntoViewAlignAutoEnabled() {
    return RuntimeEnabledFeatures::ScrollIntoViewAlignAutoEnabled();
  }
  bool scrollIntoViewNearestEnabled() {
    return RuntimeEnabledFeatures::ScrollIntoViewNearestEnabled();
  }
  bool scrollIntoViewNoInitialFocusNavigationStartingPointEnabled() {
    return RuntimeEnabledFeatures::ScrollIntoViewNoInitialFocusNavigationStartingPointEnabled();
  }
  bool scrollIntoViewRootFrameViewportBugFixEnabled() {
    return RuntimeEnabledFeatures::ScrollIntoViewRootFrameViewportBugFixEnabled();
  }
  bool scrollPerformanceTimingEnabled() {
    return RuntimeEnabledFeatures::ScrollPerformanceTimingEnabled();
  }
  bool scrollTimelineCurrentTimeEnabled() {
    return RuntimeEnabledFeatures::ScrollTimelineCurrentTimeEnabled();
  }
  bool scrollTimelineNamedRangeScrollEnabled() {
    return RuntimeEnabledFeatures::ScrollTimelineNamedRangeScrollEnabled();
  }
  bool scrollTopLeftInteropEnabled() {
    return RuntimeEnabledFeatures::ScrollTopLeftInteropEnabled();
  }
  bool scrollToTextFragmentDirectiveLimitEnabled() {
    return RuntimeEnabledFeatures::ScrollToTextFragmentDirectiveLimitEnabled();
  }
  bool scrollVisibilityHiddenScrollersEnabled() {
    return RuntimeEnabledFeatures::ScrollVisibilityHiddenScrollersEnabled();
  }
  bool searchTextHighlightPseudoEnabled() {
    return RuntimeEnabledFeatures::SearchTextHighlightPseudoEnabled();
  }
  bool securePaymentConfirmationEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationEnabled();
  }
  bool securePaymentConfirmationAvailabilityAPIEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationAvailabilityAPIEnabled();
  }
  bool securePaymentConfirmationCapabilitiesEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationCapabilitiesEnabled();
  }
  bool securePaymentConfirmationDebugEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationDebugEnabled();
  }
  bool securePaymentConfirmationExtensionsDisallowForThirdPartiesEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationExtensionsDisallowForThirdPartiesEnabled();
  }
  bool securePaymentConfirmationOptOutEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationOptOutEnabledByRuntimeFlag();
  }
  bool selectAnchorInViewportEnabled() {
    return RuntimeEnabledFeatures::SelectAnchorInViewportEnabled();
  }
  bool selectAudioOutputEnabled() {
    return RuntimeEnabledFeatures::SelectAudioOutputEnabled();
  }
  bool selectedcontentelementAttributeEnabled() {
    return RuntimeEnabledFeatures::SelectedcontentelementAttributeEnabled();
  }
  bool selectedcontentMultipleEnabled() {
    return RuntimeEnabledFeatures::SelectedcontentMultipleEnabled();
  }
  bool selectedcontentSpec2Enabled() {
    return RuntimeEnabledFeatures::SelectedcontentSpec2Enabled();
  }
  bool selectionAndFocusedVisiblePositionMatchEnabled() {
    return RuntimeEnabledFeatures::SelectionAndFocusedVisiblePositionMatchEnabled();
  }
  bool selectionCollapsedDirectionNoneEnabled() {
    return RuntimeEnabledFeatures::SelectionCollapsedDirectionNoneEnabled();
  }
  bool selectionEditingBoundarySlottedContentEnabled() {
    return RuntimeEnabledFeatures::SelectionEditingBoundarySlottedContentEnabled();
  }
  bool selectionFocusAffinityEnabled() {
    return RuntimeEnabledFeatures::SelectionFocusAffinityEnabled();
  }
  bool selectionHandleWithBottomClippedEnabled() {
    return RuntimeEnabledFeatures::SelectionHandleWithBottomClippedEnabled();
  }
  bool selectionRemoveRangeNotFoundErrorEnabled() {
    return RuntimeEnabledFeatures::SelectionRemoveRangeNotFoundErrorEnabled();
  }
  bool selectionSetBaseAndExtentNonNullNodeEnabled() {
    return RuntimeEnabledFeatures::SelectionSetBaseAndExtentNonNullNodeEnabled();
  }
  bool selectivePermissionsInterventionEnabled() {
    return RuntimeEnabledFeatures::SelectivePermissionsInterventionEnabled();
  }
  bool selectLabelClickOpensPickerEnabled() {
    return RuntimeEnabledFeatures::SelectLabelClickOpensPickerEnabled();
  }
  bool selectPopupBackgroundEnabled() {
    return RuntimeEnabledFeatures::SelectPopupBackgroundEnabled();
  }
  bool selectRemoveOverflowHiddenEnabled() {
    return RuntimeEnabledFeatures::SelectRemoveOverflowHiddenEnabled();
  }
  bool selectUsesFlatTreeEnabled() {
    return RuntimeEnabledFeatures::SelectUsesFlatTreeEnabled();
  }
  bool sendBeaconThrowForBlobWithNonSimpleTypeEnabled() {
    return RuntimeEnabledFeatures::SendBeaconThrowForBlobWithNonSimpleTypeEnabled();
  }
  bool sendEarlyLastBeginMainFrameEnabled() {
    return RuntimeEnabledFeatures::SendEarlyLastBeginMainFrameEnabled();
  }
  bool sendSlotChangeSignalAfterNodeInsertedEnabled() {
    return RuntimeEnabledFeatures::SendSlotChangeSignalAfterNodeInsertedEnabled();
  }
  bool sensorExtraClassesEnabled() {
    return RuntimeEnabledFeatures::SensorExtraClassesEnabled();
  }
  bool separateDeferModuleScriptTasksEnabled() {
    return RuntimeEnabledFeatures::SeparateDeferModuleScriptTasksEnabled();
  }
  bool sequentialFocusPrimitivesEnabled() {
    return RuntimeEnabledFeatures::SequentialFocusPrimitivesEnabled();
  }
  bool sequentialFocusPrimitivesShadowRootsEnabled() {
    return RuntimeEnabledFeatures::SequentialFocusPrimitivesShadowRootsEnabled();
  }
  bool serialEnabled() {
    return RuntimeEnabledFeatures::SerialEnabled();
  }
  bool serializeInvalidSelectorsInForgivingSelectorListEnabled() {
    return RuntimeEnabledFeatures::SerializeInvalidSelectorsInForgivingSelectorListEnabled();
  }
  bool serializeViewTransitionStateInSPAEnabled() {
    return RuntimeEnabledFeatures::SerializeViewTransitionStateInSPAEnabled();
  }
  bool serialPortConnectedEnabled() {
    return RuntimeEnabledFeatures::SerialPortConnectedEnabled();
  }
  bool serviceWorkerBackgroundSyncInDedicatedWorkerEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerBackgroundSyncInDedicatedWorkerEnabled();
  }
  bool serviceWorkerClientLifecycleStateEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerClientLifecycleStateEnabled();
  }
  bool serviceWorkerCodeCacheEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerCodeCacheEnabled();
  }
  bool serviceWorkerCodeCacheHashingEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerCodeCacheHashingEnabled();
  }
  bool serviceWorkerInDedicatedWorkerEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerInDedicatedWorkerEnabled();
  }
  bool serviceWorkerScriptEncodingEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerScriptEncodingEnabled();
  }
  bool serviceWorkerStaticRouterTimingInfoEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerStaticRouterTimingInfoEnabled();
  }
  bool setHTMLCanRunScriptsEnabled() {
    return RuntimeEnabledFeatures::SetHTMLCanRunScriptsEnabled();
  }
  bool setSequentialFocusStartingPointEnabled() {
    return RuntimeEnabledFeatures::SetSequentialFocusStartingPointEnabled();
  }
  bool setShapeEnabled() {
    return RuntimeEnabledFeatures::SetShapeEnabled();
  }
  bool shadowRootAdoptedStyleSheetEnabled() {
    return RuntimeEnabledFeatures::ShadowRootAdoptedStyleSheetEnabledByRuntimeFlag();
  }
  bool shadowRootNamespaceCheckEnabled() {
    return RuntimeEnabledFeatures::ShadowRootNamespaceCheckEnabled();
  }
  bool shadowRootReferenceTargetEnabled() {
    return RuntimeEnabledFeatures::ShadowRootReferenceTargetEnabledByRuntimeFlag();
  }
  bool shadowRootReferenceTargetAriaOwnsEnabled() {
    return RuntimeEnabledFeatures::ShadowRootReferenceTargetAriaOwnsEnabled();
  }
  bool shadowRootSlotAssignmentEnabled() {
    return RuntimeEnabledFeatures::ShadowRootSlotAssignmentEnabled();
  }
  bool sharedArrayBufferEnabled() {
    return RuntimeEnabledFeatures::SharedArrayBufferEnabled();
  }
  bool sharedArrayBufferUnrestrictedAccessAllowedEnabled() {
    return RuntimeEnabledFeatures::SharedArrayBufferUnrestrictedAccessAllowedEnabled();
  }
  bool sharedWorkerEnabled() {
    return RuntimeEnabledFeatures::SharedWorkerEnabled();
  }
  bool sharedWorkerExtendedLifetimeEnabled() {
    return RuntimeEnabledFeatures::SharedWorkerExtendedLifetimeEnabledByRuntimeFlag();
  }
  bool sideRelativeBackgroundPositionEnabled() {
    return RuntimeEnabledFeatures::SideRelativeBackgroundPositionEnabled();
  }
  bool signatureBasedInlineIntegrityEnabled() {
    return RuntimeEnabledFeatures::SignatureBasedInlineIntegrityEnabled();
  }
  bool singleAxisScrollContainersEnabled() {
    return RuntimeEnabledFeatures::SingleAxisScrollContainersEnabled();
  }
  bool singleAxisScrollContainersForScrollSnapEnabled() {
    return RuntimeEnabledFeatures::SingleAxisScrollContainersForScrollSnapEnabled();
  }
  bool skipAdEnabled() {
    return RuntimeEnabledFeatures::SkipAdEnabled();
  }
  bool skipCallbacksWhenDevToolsNotOpenEnabled() {
    return RuntimeEnabledFeatures::SkipCallbacksWhenDevToolsNotOpenEnabled();
  }
  bool skipCompositingStaticBackdropFilterAnimationEnabled() {
    return RuntimeEnabledFeatures::SkipCompositingStaticBackdropFilterAnimationEnabled();
  }
  bool skipEventCaptureEnabled() {
    return RuntimeEnabledFeatures::SkipEventCaptureEnabled();
  }
  bool skipHtmlInterchangeInForeignContentEnabled() {
    return RuntimeEnabledFeatures::SkipHtmlInterchangeInForeignContentEnabled();
  }
  bool skipInitialForcedScrollbarEnabled() {
    return RuntimeEnabledFeatures::SkipInitialForcedScrollbarEnabled();
  }
  bool skipPaintInvalidationWhileStayingInvisibleEnabled() {
    return RuntimeEnabledFeatures::SkipPaintInvalidationWhileStayingInvisibleEnabled();
  }
  bool skipStaleUndoStepsInIdleSpellCheckEnabled() {
    return RuntimeEnabledFeatures::SkipStaleUndoStepsInIdleSpellCheckEnabled();
  }
  bool skipTickingStaticAnimationsEnabled() {
    return RuntimeEnabledFeatures::SkipTickingStaticAnimationsEnabled();
  }
  bool skipTouchEventFilterEnabled() {
    return RuntimeEnabledFeatures::SkipTouchEventFilterEnabled();
  }
  bool skipUnselectableElementsInParagraphBoundaryEnabled() {
    return RuntimeEnabledFeatures::SkipUnselectableElementsInParagraphBoundaryEnabled();
  }
  bool smallerViewportUnitsEnabled() {
    return RuntimeEnabledFeatures::SmallerViewportUnitsEnabled();
  }
  bool smartCardEnabled() {
    return RuntimeEnabledFeatures::SmartCardEnabled();
  }
  bool smartCardContextReleaseEnabled() {
    return RuntimeEnabledFeatures::SmartCardContextReleaseEnabled();
  }
  bool smartZoomEnabled() {
    return RuntimeEnabledFeatures::SmartZoomEnabled();
  }
  bool snapshotScrollTimelinesPostLayoutEnabled() {
    return RuntimeEnabledFeatures::SnapshotScrollTimelinesPostLayoutEnabled();
  }
  bool sortedLayoutShiftSourcesByImpactAreaEnabled() {
    return RuntimeEnabledFeatures::SortedLayoutShiftSourcesByImpactAreaEnabled();
  }
  bool sourceSpecificMulticastInDirectSocketsEnabled() {
    return RuntimeEnabledFeatures::SourceSpecificMulticastInDirectSocketsEnabled();
  }
  bool spatNavUsesCursorInheritanceEnabled() {
    return RuntimeEnabledFeatures::SpatNavUsesCursorInheritanceEnabled();
  }
  bool speakerSelectionEnabled() {
    return RuntimeEnabledFeatures::SpeakerSelectionEnabled();
  }
  bool specCompliantXmlMimeTypesEnabled() {
    return RuntimeEnabledFeatures::SpecCompliantXmlMimeTypesEnabled();
  }
  bool speculationMeasurementEnabled() {
    return RuntimeEnabledFeatures::SpeculationMeasurementEnabledByRuntimeFlag();
  }
  bool speculationRulesModerateViewportHeuristicsControlEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesModerateViewportHeuristicsControlEnabledByRuntimeFlag();
  }
  bool spellCheckChunkingEnabled() {
    return RuntimeEnabledFeatures::SpellCheckChunkingEnabled();
  }
  bool spellCheckCustomDictionaryAPIEnabled() {
    return RuntimeEnabledFeatures::SpellCheckCustomDictionaryAPIEnabled();
  }
  bool splitQualifiedNameOnFirstColonEnabled() {
    return RuntimeEnabledFeatures::SplitQualifiedNameOnFirstColonEnabled();
  }
  bool splitTextNotCleanupDummySpansEnabled() {
    return RuntimeEnabledFeatures::SplitTextNotCleanupDummySpansEnabled();
  }
  bool srcsetSelectionMatchesImageSetEnabled() {
    return RuntimeEnabledFeatures::SrcsetSelectionMatchesImageSetEnabled();
  }
  bool srcsetTwoDimensionalSizesEnabled() {
    return RuntimeEnabledFeatures::SrcsetTwoDimensionalSizesEnabled();
  }
  bool stableBlinkFeaturesEnabled() {
    return RuntimeEnabledFeatures::StableBlinkFeaturesEnabled();
  }
  bool stackingContextIsNotStackedEnabled() {
    return RuntimeEnabledFeatures::StackingContextIsNotStackedEnabled();
  }
  bool staleImageNaturalSizeDuringRevalidationEnabled() {
    return RuntimeEnabledFeatures::StaleImageNaturalSizeDuringRevalidationEnabled();
  }
  bool staleIntersectionGeometryForThrottledFramesEnabled() {
    return RuntimeEnabledFeatures::StaleIntersectionGeometryForThrottledFramesEnabled();
  }
  bool standardizedBrowserZoomEnabled() {
    return RuntimeEnabledFeatures::StandardizedBrowserZoomEnabled();
  }
  bool standardizedBrowserZoomOptOutEnabled() {
    return RuntimeEnabledFeatures::StandardizedBrowserZoomOptOutEnabledByRuntimeFlag();
  }
  bool stickyUserActivationAcrossSameOriginNavigationEnabled() {
    return RuntimeEnabledFeatures::StickyUserActivationAcrossSameOriginNavigationEnabled();
  }
  bool storageBucketsEnabled() {
    return RuntimeEnabledFeatures::StorageBucketsEnabled();
  }
  bool storageBucketsDurabilityEnabled() {
    return RuntimeEnabledFeatures::StorageBucketsDurabilityEnabled();
  }
  bool storageBucketsLocksEnabled() {
    return RuntimeEnabledFeatures::StorageBucketsLocksEnabled();
  }
  bool strictMimeTypesForWorkersEnabled() {
    return RuntimeEnabledFeatures::StrictMimeTypesForWorkersEnabled();
  }
  bool styleResourceFetcherIdentityCheckEnabled() {
    return RuntimeEnabledFeatures::StyleResourceFetcherIdentityCheckEnabled();
  }
  bool stylusHandwritingEnabled() {
    return RuntimeEnabledFeatures::StylusHandwritingEnabled();
  }
  bool subAppsEnabled() {
    return RuntimeEnabledFeatures::SubAppsEnabled();
  }
  bool subframeMouseCaptureOwnerEnabled() {
    return RuntimeEnabledFeatures::SubframeMouseCaptureOwnerEnabled();
  }
  bool suppressFullscreenFromUnfocusedViewEnabled() {
    return RuntimeEnabledFeatures::SuppressFullscreenFromUnfocusedViewEnabled();
  }
  bool suppressPointerStreamAfterDragEnabled() {
    return RuntimeEnabledFeatures::SuppressPointerStreamAfterDragEnabled();
  }
  bool svgAnimateMotionDiscreteCalcModeEnabled() {
    return RuntimeEnabledFeatures::SvgAnimateMotionDiscreteCalcModeEnabled();
  }
  bool svgAvoidResettingFilterQualityForTiledPatternEnabled() {
    return RuntimeEnabledFeatures::SvgAvoidResettingFilterQualityForTiledPatternEnabled();
  }
  bool svgCss3dTransformsEnabled() {
    return RuntimeEnabledFeatures::SvgCss3dTransformsEnabled();
  }
  bool svgEmbeddedAsReplacedElementEnabled() {
    return RuntimeEnabledFeatures::SVGEmbeddedAsReplacedElementEnabled();
  }
  bool svgEmptyAttributeStringParsingFixEnabled() {
    return RuntimeEnabledFeatures::SvgEmptyAttributeStringParsingFixEnabled();
  }
  bool svgEnableTextDecorationCssStylingEnabled() {
    return RuntimeEnabledFeatures::SvgEnableTextDecorationCssStylingEnabled();
  }
  bool svgFallBackToContainerSizeEnabled() {
    return RuntimeEnabledFeatures::SvgFallBackToContainerSizeEnabled();
  }
  bool svgFeImageEXIFOrientationEnabled() {
    return RuntimeEnabledFeatures::SvgFeImageEXIFOrientationEnabled();
  }
  bool svgFeImageSkipHiddenContainerViewportDependenceEnabled() {
    return RuntimeEnabledFeatures::SvgFeImageSkipHiddenContainerViewportDependenceEnabled();
  }
  bool svgFilterPaintsForHiddenContentEnabled() {
    return RuntimeEnabledFeatures::SvgFilterPaintsForHiddenContentEnabled();
  }
  bool svgFilterUserSpaceViewportForSvgEnabled() {
    return RuntimeEnabledFeatures::SvgFilterUserSpaceViewportForSvgEnabled();
  }
  bool svgHyperlinkElementUtilsEnabled() {
    return RuntimeEnabledFeatures::SvgHyperlinkElementUtilsEnabled();
  }
  bool svgIgnoreNegativeEllipseRadiiEnabled() {
    return RuntimeEnabledFeatures::SvgIgnoreNegativeEllipseRadiiEnabled();
  }
  bool svgImageAnimationResetEnabled() {
    return RuntimeEnabledFeatures::SvgImageAnimationResetEnabled();
  }
  bool svgImageNonUniformScalingFixEnabled() {
    return RuntimeEnabledFeatures::SvgImageNonUniformScalingFixEnabled();
  }
  bool svgIncrementalStyleEnabled() {
    return RuntimeEnabledFeatures::SvgIncrementalStyleEnabled();
  }
  bool svgInlineRootPixelSnappingScaleAdjustmentEnabled() {
    return RuntimeEnabledFeatures::SvgInlineRootPixelSnappingScaleAdjustmentEnabled();
  }
  bool svgInstanceSyncOptimizationEnabled() {
    return RuntimeEnabledFeatures::SvgInstanceSyncOptimizationEnabled();
  }
  bool svgLengthResolveUnparsedValueEnabled() {
    return RuntimeEnabledFeatures::SvgLengthResolveUnparsedValueEnabled();
  }
  bool svgNewZoomEnabled() {
    return RuntimeEnabledFeatures::SvgNewZoomEnabled();
  }
  bool svgPathDataAPIEnabled() {
    return RuntimeEnabledFeatures::SVGPathDataAPIEnabled();
  }
  bool svgPathLengthCssPropertyEnabled() {
    return RuntimeEnabledFeatures::SvgPathLengthCssPropertyEnabled();
  }
  bool svgScriptElementAsyncAttributeEnabled() {
    return RuntimeEnabledFeatures::SvgScriptElementAsyncAttributeEnabled();
  }
  bool svgScriptFragmentAlreadyStartedEnabled() {
    return RuntimeEnabledFeatures::SvgScriptFragmentAlreadyStartedEnabled();
  }
  bool svgSizingWithPreserveAspectRatioNoneEnabled() {
    return RuntimeEnabledFeatures::SvgSizingWithPreserveAspectRatioNoneEnabled();
  }
  bool svgStyleElementReflectTypeAndMediaEnabled() {
    return RuntimeEnabledFeatures::SvgStyleElementReflectTypeAndMediaEnabled();
  }
  bool svgSupportMediaFragmentsEnabled() {
    return RuntimeEnabledFeatures::SvgSupportMediaFragmentsEnabled();
  }
  bool svgTextPathSideAttributeEnabled() {
    return RuntimeEnabledFeatures::SVGTextPathSideAttributeEnabled();
  }
  bool svgTextPositioningGraphemeClustersEnabled() {
    return RuntimeEnabledFeatures::SvgTextPositioningGraphemeClustersEnabled();
  }
  bool svgUseNestedResourceDocumentsEnabled() {
    return RuntimeEnabledFeatures::SvgUseNestedResourceDocumentsEnabled();
  }
  bool svgUseNestedResourceDocumentsDelayLoadEnabled() {
    return RuntimeEnabledFeatures::SvgUseNestedResourceDocumentsDelayLoadEnabled();
  }
  bool syncCrossDocumentAnimationTimingEnabled() {
    return RuntimeEnabledFeatures::SyncCrossDocumentAnimationTimingEnabled();
  }
  bool synthesizedKeyboardEventsForAccessibilityActionsEnabled() {
    return RuntimeEnabledFeatures::SynthesizedKeyboardEventsForAccessibilityActionsEnabled();
  }
  bool syntheticMouseHoverOverInactivePageEnabled() {
    return RuntimeEnabledFeatures::SyntheticMouseHoverOverInactivePageEnabled();
  }
  bool systemWakeLockEnabled() {
    return RuntimeEnabledFeatures::SystemWakeLockEnabled();
  }
  bool tabAlignmentWithFloatsEnabled() {
    return RuntimeEnabledFeatures::TabAlignmentWithFloatsEnabled();
  }
  bool tableCellBorderColorInheritEnabled() {
    return RuntimeEnabledFeatures::TableCellBorderColorInheritEnabled();
  }
  bool tableIsAutoFixedLayoutEnabled() {
    return RuntimeEnabledFeatures::TableIsAutoFixedLayoutEnabled();
  }
  bool tabSizeInRubyBaseEnabled() {
    return RuntimeEnabledFeatures::TabSizeInRubyBaseEnabled();
  }
  bool targetInShadowDeterminedBeforeListenerEnabled() {
    return RuntimeEnabledFeatures::TargetInShadowDeterminedBeforeListenerEnabled();
  }
  bool targetRangesForBackwardDeletionUnitEnabled() {
    return RuntimeEnabledFeatures::TargetRangesForBackwardDeletionUnitEnabled();
  }
  bool temporalInputHostBlurEnabled() {
    return RuntimeEnabledFeatures::TemporalInputHostBlurEnabled();
  }
  bool testBlinkFeatureDefaultEnabled() {
    return RuntimeEnabledFeatures::TestBlinkFeatureDefaultEnabled();
  }
  bool testFeatureEnabled() {
    return RuntimeEnabledFeatures::TestFeatureEnabled();
  }
  bool testFeatureCustomEnableCheckEnabled() {
    return RuntimeEnabledFeatures::TestFeatureCustomEnableCheckEnabled();
  }
  bool testFeatureDependentEnabled() {
    return RuntimeEnabledFeatures::TestFeatureDependentEnabled();
  }
  bool testFeatureForBrowserProcessReadWriteAccessOriginTrialEnabled() {
    return RuntimeEnabledFeatures::TestFeatureForBrowserProcessReadWriteAccessOriginTrialEnabledByRuntimeFlag();
  }
  bool testFeatureImpliedEnabled() {
    return RuntimeEnabledFeatures::TestFeatureImpliedEnabled();
  }
  bool testFeatureStableEnabled() {
    return RuntimeEnabledFeatures::TestFeatureStableEnabled();
  }
  bool textAreaPlaceholderBreakAriaHiddenUpdateEnabled() {
    return RuntimeEnabledFeatures::TextAreaPlaceholderBreakAriaHiddenUpdateEnabled();
  }
  bool textAreaResizerFixedSizeEnabled() {
    return RuntimeEnabledFeatures::TextAreaResizerFixedSizeEnabled();
  }
  bool textAutoSpaceIgnoreRubyAnnotationEnabled() {
    return RuntimeEnabledFeatures::TextAutoSpaceIgnoreRubyAnnotationEnabled();
  }
  bool textBoxTrimForNestedListEnabled() {
    return RuntimeEnabledFeatures::TextBoxTrimForNestedListEnabled();
  }
  bool textBoxTrimOnInlineBoxEnabled() {
    return RuntimeEnabledFeatures::TextBoxTrimOnInlineBoxEnabled();
  }
  bool textBoxTrimOnInlineBoxTextDecorationEnabled() {
    return RuntimeEnabledFeatures::TextBoxTrimOnInlineBoxTextDecorationEnabled();
  }
  bool textDetectorEnabled() {
    return RuntimeEnabledFeatures::TextDetectorEnabled();
  }
  bool textEmphasisPositionAutoEnabled() {
    return RuntimeEnabledFeatures::TextEmphasisPositionAutoEnabled();
  }
  bool textEncodingDetectorTldHintEnabled() {
    return RuntimeEnabledFeatures::TextEncodingDetectorTldHintEnabled();
  }
  bool textFragmentAPIEnabled() {
    return RuntimeEnabledFeatures::TextFragmentAPIEnabled();
  }
  bool textFragmentIdentifiersEnabled() {
    return RuntimeEnabledFeatures::TextFragmentIdentifiersEnabledByRuntimeFlag();
  }
  bool textFragmentTapOpensContextMenuEnabled() {
    return RuntimeEnabledFeatures::TextFragmentTapOpensContextMenuEnabled();
  }
  bool textIteratorExcludeAutofilledSelectFixEnabled() {
    return RuntimeEnabledFeatures::TextIteratorExcludeAutofilledSelectFixEnabled();
  }
  bool textMetricsBaselinesEnabled() {
    return RuntimeEnabledFeatures::TextMetricsBaselinesEnabled();
  }
  bool textOverflowClipWithSelectionEnabled() {
    return RuntimeEnabledFeatures::TextOverflowClipWithSelectionEnabled();
  }
  bool textOverflowInTextareaEnabled() {
    return RuntimeEnabledFeatures::TextOverflowInTextareaEnabled();
  }
  bool textOverflowStringEnabled() {
    return RuntimeEnabledFeatures::TextOverflowStringEnabled();
  }
  bool textScaleMetaTagEnabled() {
    return RuntimeEnabledFeatures::TextScaleMetaTagEnabled();
  }
  bool textSpacingTrimFallbackEnabled() {
    return RuntimeEnabledFeatures::TextSpacingTrimFallbackEnabled();
  }
  bool textSpacingTrimFallback2Enabled() {
    return RuntimeEnabledFeatures::TextSpacingTrimFallback2Enabled();
  }
  bool textSpacingTrimFallbackChwsEnabled() {
    return RuntimeEnabledFeatures::TextSpacingTrimFallbackChwsEnabled();
  }
  bool textStreamMethodEnabled() {
    return RuntimeEnabledFeatures::TextStreamMethodEnabled();
  }
  bool timelineTriggerEnabled() {
    return RuntimeEnabledFeatures::TimelineTriggerEnabled();
  }
  bool timePickerHonorsStepEnabled() {
    return RuntimeEnabledFeatures::TimePickerHonorsStepEnabled();
  }
  bool timerThrottlingForBackgroundTabsEnabled() {
    return RuntimeEnabledFeatures::TimerThrottlingForBackgroundTabsEnabled();
  }
  bool timestampBasedCLSTrackingEnabled() {
    return RuntimeEnabledFeatures::TimestampBasedCLSTrackingEnabled();
  }
  bool timeZoneChangeEventEnabled() {
    return RuntimeEnabledFeatures::TimeZoneChangeEventEnabled();
  }
  bool topicsAPIEnabled() {
    return RuntimeEnabledFeatures::TopicsAPIEnabled();
  }
  bool touchDragAndContextMenuEnabled() {
    return RuntimeEnabledFeatures::TouchDragAndContextMenuEnabled();
  }
  bool touchDragAndDropEnabled() {
    return RuntimeEnabledFeatures::TouchDragAndDropEnabled();
  }
  bool touchDragOnShortPressEnabled() {
    return RuntimeEnabledFeatures::TouchDragOnShortPressEnabled();
  }
  bool touchEventFeatureDetectionEnabled() {
    return RuntimeEnabledFeatures::TouchEventFeatureDetectionEnabledByRuntimeFlag();
  }
  bool touchTextEditingRedesignEnabled() {
    return RuntimeEnabledFeatures::TouchTextEditingRedesignEnabled();
  }
  bool trackAnimatedSourcesEnabled() {
    return RuntimeEnabledFeatures::TrackAnimatedSourcesEnabled();
  }
  bool trackAnimatedSourcesForInheritedPropertiesEnabled() {
    return RuntimeEnabledFeatures::TrackAnimatedSourcesForInheritedPropertiesEnabled();
  }
  bool transferableRTCDataChannelEnabled() {
    return RuntimeEnabledFeatures::TransferableRTCDataChannelEnabled();
  }
  bool translateServiceEnabled() {
    return RuntimeEnabledFeatures::TranslateServiceEnabled();
  }
  bool translationAPIEnabled() {
    return RuntimeEnabledFeatures::TranslationAPIEnabled();
  }
  bool translationAPIForWorkersEnabled() {
    return RuntimeEnabledFeatures::TranslationAPIForWorkersEnabled();
  }
  bool treatMhtmlInitialDocumentLoadsAsCrossDocumentEnabled() {
    return RuntimeEnabledFeatures::TreatMhtmlInitialDocumentLoadsAsCrossDocumentEnabled();
  }
  bool trustedTypesCreateParserOptionsEnabled() {
    return RuntimeEnabledFeatures::TrustedTypesCreateParserOptionsEnabled();
  }
  bool trustedTypesFromLiteralEnabled() {
    return RuntimeEnabledFeatures::TrustedTypesFromLiteralEnabled();
  }
  bool trustedTypesUseCodeLikeEnabled() {
    return RuntimeEnabledFeatures::TrustedTypesUseCodeLikeEnabled();
  }
  bool twoPhaseViewTransitionEnabled() {
    return RuntimeEnabledFeatures::TwoPhaseViewTransitionEnabled();
  }
  bool uaImageReplacementAPIEnabled() {
    return RuntimeEnabledFeatures::UAImageReplacementAPIEnabledByRuntimeFlag();
  }
  bool unboundedElementEnabled() {
    return RuntimeEnabledFeatures::UnboundedElementEnabled();
  }
  bool unclosedFormControlIsInvalidEnabled() {
    return RuntimeEnabledFeatures::UnclosedFormControlIsInvalidEnabled();
  }
  bool unexposedTaskIdsEnabled() {
    return RuntimeEnabledFeatures::UnexposedTaskIdsEnabled();
  }
  bool unprefixedSpeechRecognitionEnabled() {
    return RuntimeEnabledFeatures::UnprefixedSpeechRecognitionEnabled();
  }
  bool unrestrictedMeasureUserAgentSpecificMemoryEnabled() {
    return RuntimeEnabledFeatures::UnrestrictedMeasureUserAgentSpecificMemoryEnabled();
  }
  bool unrestrictedSharedArrayBufferEnabled() {
    return RuntimeEnabledFeatures::UnrestrictedSharedArrayBufferEnabledByRuntimeFlag();
  }
  bool unrestrictedUsbEnabled() {
    return RuntimeEnabledFeatures::UnrestrictedUsbEnabled();
  }
  bool unsafeEscapingUnboundedElementOnTheOpenWebEnabled() {
    return RuntimeEnabledFeatures::UnsafeEscapingUnboundedElementOnTheOpenWebEnabled();
  }
  bool unsafeUnboundedElementOnTheOpenWebEnabled() {
    return RuntimeEnabledFeatures::UnsafeUnboundedElementOnTheOpenWebEnabled();
  }
  bool updateComplexSafaAreaConstraintsEnabled() {
    return RuntimeEnabledFeatures::UpdateComplexSafaAreaConstraintsEnabled();
  }
  bool updateSelectionOnNodeInsertionEnabled() {
    return RuntimeEnabledFeatures::UpdateSelectionOnNodeInsertionEnabled();
  }
  bool urlPatternCompareComponentEnabled() {
    return RuntimeEnabledFeatures::URLPatternCompareComponentEnabled();
  }
  bool urlPatternGenerateEnabled() {
    return RuntimeEnabledFeatures::URLPatternGenerateEnabled();
  }
  bool urlSearchParamsHasAndDeleteMultipleArgsEnabled() {
    return RuntimeEnabledFeatures::URLSearchParamsHasAndDeleteMultipleArgsEnabled();
  }
  bool useBeginFramePresentationFeedbackEnabled() {
    return RuntimeEnabledFeatures::UseBeginFramePresentationFeedbackEnabled();
  }
  bool useLowQualityInterpolationEnabled() {
    return RuntimeEnabledFeatures::UseLowQualityInterpolationEnabled();
  }
  bool useOriginalDomOffsetsForOffsetMapEnabled() {
    return RuntimeEnabledFeatures::UseOriginalDomOffsetsForOffsetMapEnabled();
  }
  bool usePaintGeometryForIntersectionEnabled() {
    return RuntimeEnabledFeatures::UsePaintGeometryForIntersectionEnabled();
  }
  bool usePositionForPointInFlexibleBoxWithSingleChildElementEnabled() {
    return RuntimeEnabledFeatures::UsePositionForPointInFlexibleBoxWithSingleChildElementEnabled();
  }
  bool usePositionIfIsVisuallyEquivalentCandidateEnabled() {
    return RuntimeEnabledFeatures::UsePositionIfIsVisuallyEquivalentCandidateEnabled();
  }
  bool userActionPseudosStopAtTopLayerEnabled() {
    return RuntimeEnabledFeatures::UserActionPseudosStopAtTopLayerEnabled();
  }
  bool userDefinedEntryPointTimingEnabled() {
    return RuntimeEnabledFeatures::UserDefinedEntryPointTimingEnabled();
  }
  bool userMediaElementEnabled() {
    return RuntimeEnabledFeatures::UserMediaElementEnabled();
  }
  bool userMediaElementLegacyEnabled() {
    return RuntimeEnabledFeatures::UserMediaElementLegacyEnabledByRuntimeFlag();
  }
  bool useShadowHostStyleCheckEditableEnabled() {
    return RuntimeEnabledFeatures::UseShadowHostStyleCheckEditableEnabled();
  }
  bool useUndoStepElementDispatchBeforeInputEnabled() {
    return RuntimeEnabledFeatures::UseUndoStepElementDispatchBeforeInputEnabled();
  }
  bool v8IdleTasksEnabled() {
    return RuntimeEnabledFeatures::V8IdleTasksEnabled();
  }
  bool variableSystemFontSupportOnWindowsEnabled() {
    return RuntimeEnabledFeatures::VariableSystemFontSupportOnWindowsEnabled();
  }
  bool videoAutoFullscreenEnabled() {
    return RuntimeEnabledFeatures::VideoAutoFullscreenEnabled();
  }
  bool videoFrameMetadataBackgroundBlurEnabled() {
    return RuntimeEnabledFeatures::VideoFrameMetadataBackgroundBlurEnabled();
  }
  bool videoFrameMetadataRtpTimestampEnabled() {
    return RuntimeEnabledFeatures::VideoFrameMetadataRtpTimestampEnabled();
  }
  bool videoFullscreenOrientationLockEnabled() {
    return RuntimeEnabledFeatures::VideoFullscreenOrientationLockEnabled();
  }
  bool videoRotateToFullscreenEnabled() {
    return RuntimeEnabledFeatures::VideoRotateToFullscreenEnabled();
  }
  bool videoTrackGeneratorEnabled() {
    return RuntimeEnabledFeatures::VideoTrackGeneratorEnabled();
  }
  bool videoTrackGeneratorInWindowEnabled() {
    return RuntimeEnabledFeatures::VideoTrackGeneratorInWindowEnabled();
  }
  bool videoTrackGeneratorInWorkerEnabled() {
    return RuntimeEnabledFeatures::VideoTrackGeneratorInWorkerEnabled();
  }
  bool viewportHeightClientHintHeaderEnabled() {
    return RuntimeEnabledFeatures::ViewportHeightClientHintHeaderEnabled();
  }
  bool viewportSegmentsEnabled() {
    return RuntimeEnabledFeatures::ViewportSegmentsEnabled();
  }
  bool viewTransitionLongCallbackTimeoutForTestingEnabled() {
    return RuntimeEnabledFeatures::ViewTransitionLongCallbackTimeoutForTestingEnabled();
  }
  bool viewTransitionPreventSvgFilterPaintEnabled() {
    return RuntimeEnabledFeatures::ViewTransitionPreventSvgFilterPaintEnabled();
  }
  bool viewTransitionSkipPseudoTreeForNavigationCaptureEnabled() {
    return RuntimeEnabledFeatures::ViewTransitionSkipPseudoTreeForNavigationCaptureEnabled();
  }
  bool viewTransitionSkipZeroHeightControlsSnapEnabled() {
    return RuntimeEnabledFeatures::ViewTransitionSkipZeroHeightControlsSnapEnabled();
  }
  bool visibilityCollapseColumnEnabled() {
    return RuntimeEnabledFeatures::VisibilityCollapseColumnEnabled();
  }
  bool visualRectMappingFixForExpansionEnabled() {
    return RuntimeEnabledFeatures::VisualRectMappingFixForExpansionEnabled();
  }
  bool wakeLockEnabled() {
    return RuntimeEnabledFeatures::WakeLockEnabled();
  }
  bool warnOnContentVisibilityRenderAccessEnabled() {
    return RuntimeEnabledFeatures::WarnOnContentVisibilityRenderAccessEnabled();
  }
  bool wavyDecorationContinuousPhaseEnabled() {
    return RuntimeEnabledFeatures::WavyDecorationContinuousPhaseEnabled();
  }
  bool webAppInstallationEnabled() {
    return RuntimeEnabledFeatures::WebAppInstallationEnabled();
  }
  bool webAppLaunchQueueEnabled() {
    return RuntimeEnabledFeatures::WebAppLaunchQueueEnabled();
  }
  bool webAppScopeExtensionsEnabled() {
    return RuntimeEnabledFeatures::WebAppScopeExtensionsEnabledByRuntimeFlag();
  }
  bool webAppScopeSystemAccentColorEnabled() {
    return RuntimeEnabledFeatures::WebAppScopeSystemAccentColorEnabled();
  }
  bool webAppTabStripEnabled() {
    return RuntimeEnabledFeatures::WebAppTabStripEnabled();
  }
  bool webAppTabStripCustomizationsEnabled() {
    return RuntimeEnabledFeatures::WebAppTabStripCustomizationsEnabled();
  }
  bool webAppTranslationsEnabled() {
    return RuntimeEnabledFeatures::WebAppTranslationsEnabled();
  }
  bool webAssemblyCustomDescriptorsV2Enabled() {
    return RuntimeEnabledFeatures::WebAssemblyCustomDescriptorsV2EnabledByRuntimeFlag();
  }
  bool webAssemblyJSPromiseIntegrationEnabled() {
    return RuntimeEnabledFeatures::WebAssemblyJSPromiseIntegrationEnabledByRuntimeFlag();
  }
  bool webAudioBypassOutputBufferingEnabled() {
    return RuntimeEnabledFeatures::WebAudioBypassOutputBufferingEnabled();
  }
  bool webAudioBypassOutputBufferingOptOutEnabled() {
    return RuntimeEnabledFeatures::WebAudioBypassOutputBufferingOptOutEnabled();
  }
  bool webAudioConfigurableRenderQuantumEnabled() {
    return RuntimeEnabledFeatures::WebAudioConfigurableRenderQuantumEnabledByRuntimeFlag();
  }
  bool webAuthEnabled() {
    return RuntimeEnabledFeatures::WebAuthEnabled();
  }
  bool webAuthAuthenticatorAttachmentEnabled() {
    return RuntimeEnabledFeatures::WebAuthAuthenticatorAttachmentEnabled();
  }
  bool webAuthenticationAmbientEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationAmbientEnabled();
  }
  bool webAuthenticationAttestationFormatsEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationAttestationFormatsEnabledByRuntimeFlag();
  }
  bool webAuthenticationCmtgKeyEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationCmtgKeyEnabled();
  }
  bool webAuthenticationCrossDeviceFallbackUrlEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationCrossDeviceFallbackUrlEnabled();
  }
  bool webAuthenticationRemoteClientDataJsonEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationRemoteClientDataJsonEnabled();
  }
  bool webAuthenticationRemoteDesktopSupportEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationRemoteDesktopSupportEnabled();
  }
  bool webAutocorrectByDefaultEnabled() {
    return RuntimeEnabledFeatures::WebAutocorrectByDefaultEnabled();
  }
  bool webBluetoothEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothEnabled();
  }
  bool webBluetoothGetDevicesEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothGetDevicesEnabled();
  }
  bool webBluetoothScanningEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothScanningEnabled();
  }
  bool webBluetoothWatchAdvertisementsEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothWatchAdvertisementsEnabled();
  }
  bool webBluetoothWorldIsolatedCacheEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothWorldIsolatedCacheEnabled();
  }
  bool webcodecsVideoEncoderBuffersEnabled() {
    return RuntimeEnabledFeatures::WebCodecsVideoEncoderBuffersEnabled();
  }
  bool webCryptoPQCEnabled() {
    return RuntimeEnabledFeatures::WebCryptoPQCEnabled();
  }
  bool webglDeveloperExtensionsEnabled() {
    return RuntimeEnabledFeatures::WebGLDeveloperExtensionsEnabled();
  }
  bool webglDraftExtensionsEnabled() {
    return RuntimeEnabledFeatures::WebGLDraftExtensionsEnabled();
  }
  bool webglDrawingBufferStorageEnabled() {
    return RuntimeEnabledFeatures::WebGLDrawingBufferStorageEnabled();
  }
  bool webglOnWebGPUEnabled() {
    return RuntimeEnabledFeatures::WebGLOnWebGPUEnabled();
  }
  bool webglToneMappingEnabled() {
    return RuntimeEnabledFeatures::WebGLToneMappingEnabled();
  }
  bool webgpuDeveloperFeaturesEnabled() {
    return RuntimeEnabledFeatures::WebGPUDeveloperFeaturesEnabled();
  }
  bool webgpuExperimentalFeaturesEnabled() {
    return RuntimeEnabledFeatures::WebGPUExperimentalFeaturesEnabled();
  }
  bool webgpuExperimentalResourceTableEnabled() {
    return RuntimeEnabledFeatures::WebGPUExperimentalResourceTableEnabled();
  }
  bool webgpuExternalImageHDRHeadroomEnabled() {
    return RuntimeEnabledFeatures::WebGPUExternalImageHDRHeadroomEnabled();
  }
  bool webgpuMapSyncOnWorkersEnabled() {
    return RuntimeEnabledFeatures::WebGPUMapSyncOnWorkersEnabled();
  }
  bool webgpuMultithreadDawnWireOnWorkersEnabled() {
    return RuntimeEnabledFeatures::WebGPUMultithreadDawnWireOnWorkersEnabled();
  }
  bool webHapticsEnabled() {
    return RuntimeEnabledFeatures::WebHapticsEnabled();
  }
  bool webHIDEnabled() {
    return RuntimeEnabledFeatures::WebHIDEnabled();
  }
  bool webHIDOnServiceWorkersEnabled() {
    return RuntimeEnabledFeatures::WebHIDOnServiceWorkersEnabled();
  }
  bool webHIDWorldIsolatedCacheEnabled() {
    return RuntimeEnabledFeatures::WebHIDWorldIsolatedCacheEnabled();
  }
  bool webIdentityDigitalCredentialsEnabled() {
    return RuntimeEnabledFeatures::WebIdentityDigitalCredentialsEnabled();
  }
  bool webIdentityDigitalCredentialsCreationEnabled() {
    return RuntimeEnabledFeatures::WebIdentityDigitalCredentialsCreationEnabled();
  }
  bool webIDLBigIntUsesToBigIntEnabled() {
    return RuntimeEnabledFeatures::WebIDLBigIntUsesToBigIntEnabled();
  }
  bool webMCPEnabled() {
    return RuntimeEnabledFeatures::WebMCPEnabledByRuntimeFlag();
  }
  bool webMCPContinuationsEnabled() {
    return RuntimeEnabledFeatures::WebMCPContinuationsEnabled();
  }
  bool webMCPDeclarativeFileInputEnabled() {
    return RuntimeEnabledFeatures::WebMCPDeclarativeFileInputEnabled();
  }
  bool webMCPFormAssociatedCustomElementsEnabled() {
    return RuntimeEnabledFeatures::WebMCPFormAssociatedCustomElementsEnabled();
  }
  bool webNFCEnabled() {
    return RuntimeEnabledFeatures::WebNFCEnabled();
  }
  bool webOTPEnabled() {
    return RuntimeEnabledFeatures::WebOTPEnabled();
  }
  bool webOTPAssertionFeaturePolicyEnabled() {
    return RuntimeEnabledFeatures::WebOTPAssertionFeaturePolicyEnabled();
  }
  bool webPreferencesEnabled() {
    return RuntimeEnabledFeatures::WebPreferencesEnabled();
  }
  bool webPrintingEnabled() {
    return RuntimeEnabledFeatures::WebPrintingEnabled();
  }
  bool webRtcSctpSnapEnabled() {
    return RuntimeEnabledFeatures::WebRtcSctpSnapEnabledByRuntimeFlag();
  }
  bool webSerialWorldIsolatedCacheEnabled() {
    return RuntimeEnabledFeatures::WebSerialWorldIsolatedCacheEnabled();
  }
  bool webShareEnabled() {
    return RuntimeEnabledFeatures::WebShareEnabled();
  }
  bool websocketOptionBagEnabled() {
    return RuntimeEnabledFeatures::WebSocketOptionBagEnabled();
  }
  bool websocketStreamEnabled() {
    return RuntimeEnabledFeatures::WebSocketStreamEnabled();
  }
  bool websocketStreamStandardBinaryChunkTypeEnabled() {
    return RuntimeEnabledFeatures::WebSocketStreamStandardBinaryChunkTypeEnabled();
  }
  bool webSpeechRecognitionContextEnabled() {
    return RuntimeEnabledFeatures::WebSpeechRecognitionContextEnabled();
  }
  bool webSpeechTimestampsEnabled() {
    return RuntimeEnabledFeatures::WebSpeechTimestampsEnabled();
  }
  bool webSpeechUnspokenPunctuationEnabled() {
    return RuntimeEnabledFeatures::WebSpeechUnspokenPunctuationEnabled();
  }
  bool webTransportAnticipatedConcurrentIncomingStreamsEnabled() {
    return RuntimeEnabledFeatures::WebTransportAnticipatedConcurrentIncomingStreamsEnabled();
  }
  bool webTransportApplicationProtocolEnabled() {
    return RuntimeEnabledFeatures::WebTransportApplicationProtocolEnabled();
  }
  bool webTransportCongestionControlEnabled() {
    return RuntimeEnabledFeatures::WebTransportCongestionControlEnabled();
  }
  bool webTransportCreateStreamsBeforeReadyEnabled() {
    return RuntimeEnabledFeatures::WebTransportCreateStreamsBeforeReadyEnabled();
  }
  bool webTransportCustomCertificatesEnabled() {
    return RuntimeEnabledFeatures::WebTransportCustomCertificatesEnabledByRuntimeFlag();
  }
  bool webTransportDatagramsReadableTypeEnabled() {
    return RuntimeEnabledFeatures::WebTransportDatagramsReadableTypeEnabled();
  }
  bool webTransportDatagramsWritableEnabled() {
    return RuntimeEnabledFeatures::WebTransportDatagramsWritableEnabled();
  }
  bool webTransportDrainingEnabled() {
    return RuntimeEnabledFeatures::WebTransportDrainingEnabled();
  }
  bool webTransportExportKeyingMaterialEnabled() {
    return RuntimeEnabledFeatures::WebTransportExportKeyingMaterialEnabled();
  }
  bool webTransportHeadersEnabled() {
    return RuntimeEnabledFeatures::WebTransportHeadersEnabled();
  }
  bool webTransportReceiveStreamEnabled() {
    return RuntimeEnabledFeatures::WebTransportReceiveStreamEnabled();
  }
  bool webTransportReliabilityEnabled() {
    return RuntimeEnabledFeatures::WebTransportReliabilityEnabled();
  }
  bool webTransportSendGroupEnabled() {
    return RuntimeEnabledFeatures::WebTransportSendGroupEnabled();
  }
  bool webTransportStatsEnabled() {
    return RuntimeEnabledFeatures::WebTransportStatsEnabled();
  }
  bool webUIBundledCodeCacheAsyncFetchEnabled() {
    return RuntimeEnabledFeatures::WebUIBundledCodeCacheAsyncFetchEnabled();
  }
  bool webUSBEnabled() {
    return RuntimeEnabledFeatures::WebUSBEnabled();
  }
  bool webUSBOnDedicatedWorkersEnabled() {
    return RuntimeEnabledFeatures::WebUSBOnDedicatedWorkersEnabled();
  }
  bool webUSBOnServiceWorkersEnabled() {
    return RuntimeEnabledFeatures::WebUSBOnServiceWorkersEnabled();
  }
  bool webViewEnvReorderFixEnabled() {
    return RuntimeEnabledFeatures::WebViewEnvReorderFixEnabled();
  }
  bool webVTTCueLayoutByPositionAlignmentEnabled() {
    return RuntimeEnabledFeatures::WebVTTCueLayoutByPositionAlignmentEnabled();
  }
  bool webVTTCueTightLineBoxEnabled() {
    return RuntimeEnabledFeatures::WebVTTCueTightLineBoxEnabled();
  }
  bool webVTTLineAndPositionAlignmentEnabled() {
    return RuntimeEnabledFeatures::WebVTTLineAndPositionAlignmentEnabled();
  }
  bool webVTTRegionsEnabled() {
    return RuntimeEnabledFeatures::WebVTTRegionsEnabled();
  }
  bool webXREnabled() {
    return RuntimeEnabledFeatures::WebXREnabled();
  }
  bool webXREnabledFeaturesEnabled() {
    return RuntimeEnabledFeatures::WebXREnabledFeaturesEnabled();
  }
  bool webXRFrameRateEnabled() {
    return RuntimeEnabledFeatures::WebXRFrameRateEnabled();
  }
  bool webXRFrontFacingEnabled() {
    return RuntimeEnabledFeatures::WebXRFrontFacingEnabled();
  }
  bool webXRGPUBindingEnabled() {
    return RuntimeEnabledFeatures::WebXRGPUBindingEnabled();
  }
  bool webXRHitTestEntityTypesEnabled() {
    return RuntimeEnabledFeatures::WebXRHitTestEntityTypesEnabled();
  }
  bool webXRImageTrackingEnabled() {
    return RuntimeEnabledFeatures::WebXRImageTrackingEnabledByRuntimeFlag();
  }
  bool webXRLayersEnabled() {
    return RuntimeEnabledFeatures::WebXRLayersEnabled();
  }
  bool webXRLayersCommonEnabled() {
    return RuntimeEnabledFeatures::WebXRLayersCommonEnabled();
  }
  bool webXRMediaBindingEnabled() {
    return RuntimeEnabledFeatures::WebXRMediaBindingEnabled();
  }
  bool webXRMeshDetectionEnabled() {
    return RuntimeEnabledFeatures::WebXRMeshDetectionEnabled();
  }
  bool webXRPlaneDetectionEnabled() {
    return RuntimeEnabledFeatures::WebXRPlaneDetectionEnabledByRuntimeFlag();
  }
  bool webXRPoseMotionDataEnabled() {
    return RuntimeEnabledFeatures::WebXRPoseMotionDataEnabled();
  }
  bool webXRSpecParityEnabled() {
    return RuntimeEnabledFeatures::WebXRSpecParityEnabled();
  }
  bool webXRVisibilityMaskEnabled() {
    return RuntimeEnabledFeatures::WebXRVisibilityMaskEnabled();
  }
  bool wheelEventDeltaExternalPageScaleEnabled() {
    return RuntimeEnabledFeatures::WheelEventDeltaExternalPageScaleEnabled();
  }
  bool wheelEventMomentumEnabled() {
    return RuntimeEnabledFeatures::WheelEventMomentumEnabled();
  }
  bool windowDefaultStatusEnabled() {
    return RuntimeEnabledFeatures::WindowDefaultStatusEnabled();
  }
  bool windowOpenAlwaysOnTopEnabled() {
    return RuntimeEnabledFeatures::WindowOpenAlwaysOnTopEnabled();
  }
  bool windowOpenAttributionSrcEnabled() {
    return RuntimeEnabledFeatures::WindowOpenAttributionSrcEnabled();
  }
  bool windowOpenSplitTabEnabled() {
    return RuntimeEnabledFeatures::WindowOpenSplitTabEnabled();
  }
  bool wordSkipSpacesPunctuationFixEnabled() {
    return RuntimeEnabledFeatures::WordSkipSpacesPunctuationFixEnabled();
  }
  bool xmlNoExternalEntitiesEnabled() {
    return RuntimeEnabledFeatures::XMLNoExternalEntitiesEnabled();
  }
  bool xmlParserReplaceLoneSurrogatesEnabled() {
    return RuntimeEnabledFeatures::XMLParserReplaceLoneSurrogatesEnabled();
  }
  bool xmlParsingRustEnabled() {
    return RuntimeEnabledFeatures::XMLParsingRustEnabled();
  }
  bool xmlRustForNonXsltEnabled() {
    return RuntimeEnabledFeatures::XMLRustForNonXsltEnabled();
  }
  bool xmlSerializerConsistentDefaultNsDeclMatchingEnabled() {
    return RuntimeEnabledFeatures::XMLSerializerConsistentDefaultNsDeclMatchingEnabled();
  }
  bool xmlViewerForIframesEnabled() {
    return RuntimeEnabledFeatures::XMLViewerForIframesEnabled();
  }
  bool xsltEnabled() {
    return RuntimeEnabledFeatures::XSLTEnabledByRuntimeFlag();
  }
  bool xsltSpecialTrialEnabled() {
    return RuntimeEnabledFeatures::XSLTSpecialTrialEnabled();
  }
  bool braveIsInTorContextEnabled() {
    return RuntimeEnabledFeatures::BraveIsInTorContextEnabled();
  }
  bool braveGlobalPrivacyControlEnabled() {
    return RuntimeEnabledFeatures::BraveGlobalPrivacyControlEnabled();
  }
};

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_TESTING_INTERNAL_RUNTIME_FLAGS_H_
