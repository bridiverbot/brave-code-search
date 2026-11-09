// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_enabled_features.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#include <algorithm>
#include <iterator>
#include <limits>
#include <optional>
#include <string_view>

#include "base/notreached.h"
#include "build/build_config.h"

#include "third_party/blink/renderer/platform/runtime_enabled_features.h"

#include "base/debug/crash_logging.h"
#include "base/debug/dump_without_crashing.h"
#include "third_party/blink/public/common/features.h"
#include "third_party/blink/public/mojom/origin_trials/origin_trial_feature.mojom-shared.h"
#include "third_party/blink/renderer/platform/feature_context.h"
#include "third_party/blink/renderer/platform/runtime_feature_state/runtime_feature_state_override_context.h"
#include "third_party/blink/renderer/platform/wtf/text/wtf_string.h"

namespace blink {

RuntimeEnabledFeaturesBase::Backup::Backup() {
  std::copy(std::begin(RuntimeEnabledFeaturesBase::feature_states_),
            std::end(RuntimeEnabledFeaturesBase::feature_states_),
            feature_states_);
}

void RuntimeEnabledFeaturesBase::Backup::Restore() {
  std::copy(std::begin(feature_states_), std::end(feature_states_),
            RuntimeEnabledFeaturesBase::feature_states_);
}

void RuntimeEnabledFeaturesBase::SetStableFeaturesEnabled(bool enable) {
  SetAboutBlankPageRespectsDarkModeOnUserActionEnabled(enable);
  SetAccelerated2dCanvasEnabled(enable);
  SetAcceleratedSmallCanvasesEnabled(enable);
  SetAccessibilityCheckIfcInPreviousTextOnLineEnabled(enable);
  SetAdjustEndOfNextParagraphIfMovedParagraphIsUpdatedEnabled(enable);
  SetAIPageContentAnchoredFixedOffscreenNonActionabilityEnabled(enable);
  SetAIPageContentAnchoredNonFixedOffscreenNonActionabilityEnabled(enable);
  SetAIPageContentConvertNodeTextToUtf8Enabled(enable);
  SetAIPageContentElementCSSRedactionEnabled(enable);
  SetAIPageContentIncludeMathMLEnabled(enable);
  SetAIPageContentIncludeSVGSubtreeEnabled(enable);
  SetAIPageContentLabelExpandFallbackSourcesEnabled(enable);
  SetAIPageContentOuterBoxMapToAncestorSpaceEnabled(enable);
  SetAIPageContentPaidContentAnnotationEnabled(enable);
  SetAIPageContentSkipUnclickableFixedOverlaysEnabled(enable);
  SetAIPageContentTrackedElementsIframeEnabled(enable);
  SetAIPageContentTrackedElementsPasswordEnabled(enable);
  SetAIPageContentVisualViewportClampEnabled(enable);
  SetAIPromptAPIStructuredOutputEnabled(enable);
  SetAlignZoomToCenterEnabled(enable);
  SetAllowSvgUseToReferenceExternalDocumentRootEnabled(enable);
  SetAncestorOriginsStoredOnDocumentEnabled(enable);
  SetAnchorPositionAdjustmentWithoutOverflowEnabled(enable);
  SetAnimationEventAnimationEnabled(enable);
  SetAnimationProgressAPIEnabled(enable);
  SetAnimationTriggerEnabled(enable);
  SetAnnotationSpaceOnStartEnabled(enable);
  SetAnonymousIframeEnabled(enable);
  SetAOMAriaRelationshipPropertiesEnabled(enable);
  SetAppearanceDisplayAdjustmentForWidgetsOnlyEnabled(enable);
  SetAriaRowColIndexTextEnabled(enable);
  SetAttributionReportingEnabled(enable);
  SetAudioContextPlaybackStatsEnabled(enable);
  SetAudioContextSetSinkIdEnabled(enable);
  SetAuthorSpecifiedLayoutScrollSnapBehaviorEnabled(enable);
  SetAutoDarkModeSVGSizeThresholdEnabled(enable);
  SetAutofillPreviewGenericFontFamilyEnabled(enable);
  SetAutofillPreviewIgnoreAuthorFontEnabled(enable);
  SetAutoSizeUsesScrollWidthForOverflowEnabled(enable);
  SetAvoidEmbeddedContentViewLocationEnabled(enable);
  SetAvoidNonSelectableSelectionBoundaryEnabled(enable);
  SetAvoidSynchronousBlurOnDisabledAttributeChangeEnabled(enable);
  SetBackForwardCacheNotRestoredReasonsEnabled(enable);
  SetBackForwardCacheUpdateNotRestoredReasonsNameEnabled(enable);
  SetBackgroundClipTextDecorationEnabled(enable);
  SetBackgroundFetchEnabled(enable);
  SetBaseAppearanceInlineSizingEnabled(enable);
  SetBlinkGeometryMapperViewportFastPathEnabled(enable);
  SetBlobBytesEnabled(enable);
  SetBlockingFocusWithoutUserActivationEnabled(enable);
  SetBlockSelectPopupUnfocusedWindowEnabled(enable);
  SetBoundaryEventDispatchTracksNodeRemovalEnabled(enable);
  SetBufferedBytesConsumerLimitSizeEnabled(enable);
  SetCacheStyleAdjusterEnabled(enable);
  SetCameraAndMicrophoneElementsEnabled(enable);
  SetCanvasDrawElementEnabled(enable);
  SetCanvasFloatingPointEnabled(enable);
  SetCanvasTextDirectionReflectEnabled(enable);
  SetCanvasUsesArcPaintOpEnabled(enable);
  SetCapitalizeAfterSupplementaryCharacterFixEnabled(enable);
  SetCaretBlinkingEnabled(enable);
  SetCaretBrowsingSequentialFocusStartingPointEnabled(enable);
  SetCaretOutsideEditableAtomicInlineEnabled(enable);
  SetCheckableInputTypeLayoutInlineEnabled(enable);
  SetCheckCSPOnInlineScriptAttributeSetEnabled(enable);
  SetClampUnfocusedSelectionCacheEnabled(enable);
  SetCleanUpActivationBehaviorEnabled(enable);
  SetClearCrossOriginRelatedTargetEnabled(enable);
  SetClearCurrentTargetAfterDispatchEnabled(enable);
  SetClearDisplayLockPrePaintFlagsEnabled(enable);
  SetClearFocusWithinOnSubtreeRemovalEnabled(enable);
  SetClearTargetOnlyIfInShadowTreeEnabled(enable);
  SetClipboardEventTargetUsesContainerNodeEnabled(enable);
  SetClipboardPasteImageRespectBufferEnabled(enable);
  SetClipPathNestedRasterOptimizationEnabled(enable);
  SetCoalesceSelectionchangeEventEnabled(enable);
  SetColorInputAcceptsCSSColorsEnabled(enable);
  SetColorSpaceDisplayP3LinearEnabled(enable);
  SetColorSpacePredefinedLinearSpacesEnabled(enable);
  SetComposedPathReturnTargetBeingDispatchedEnabled(enable);
  SetCompositeClipPathAnimationEnabled(enable);
  SetConsistentFormControlPaintSnappingEnabled(enable);
  SetControlledFrameEnabled(enable);
  SetControlledFrameWebRequestSecurityInfoEnabled(enable);
  SetCookieStoreAPIMaxAgeEnabled(enable);
  SetCookieStoreAPIWhitespaceStrippingEnabled(enable);
  SetCpuPerformanceEnabled(enable);
  SetCrashReportingStorageAPIEnabled(enable);
  SetCreateInlineContentsAnonymousBlockEnabled(enable);
  SetCSPReportHashEnabled(enable);
  SetCSSActiveCaptionMapsToCanvasEnabled(enable);
  SetCSSAlphaColorFunctionEnabled(enable);
  SetCSSAlphaColorFunctionRequiresAlphaEnabled(enable);
  SetCSSAltCounterEnabled(enable);
  SetCSSAttributeValueCaseSensitiveNonHTMLEnabled(enable);
  SetCSSBackgroundClipBorderAreaEnabled(enable);
  SetCSSBorderShapeEnabled(enable);
  SetCSSCaretAnimationEnabled(enable);
  SetCSSCaretShapeEnabled(enable);
  SetCSSChUnitSpecCompliantFallbackEnabled(enable);
  SetCSSContainerStyleQueriesRangeEnabled(enable);
  SetCSSCounterStyleSymbolsFunctionEnabled(enable);
  SetCSSCustomHighlightUniversalSelectorEnabled(enable);
  SetCSSDynamicRangeLimitEnabled(enable);
  SetCSSEnumeratedCustomPropertiesEnabled(enable);
  SetCSSFlowStartAndEndEnabled(enable);
  SetCSSFlowStartAndEndSerializationEnabled(enable);
  SetCSSFontSizeAdjustEnabled(enable);
  SetCSSFunctionsEnabled(enable);
  SetCSSHexAlphaColorEnabled(enable);
  SetCSSImageFunctionEnabled(enable);
  SetCSSInRangeOutOfRangeReversedRangesEnabled(enable);
  SetCSSKeyframesRuleLengthEnabled(enable);
  SetCSSLightDarkImageEnabled(enable);
  SetCSSMarkerNestedPseudoElementEnabled(enable);
  SetCSSMediaElementPseudosEnabled(enable);
  SetCSSNestedPseudoElementsEnabled(enable);
  SetCSSPolygonRoundingEnabled(enable);
  SetCSSPositionVisibilityAnchorValidEnabled(enable);
  SetCSSProgressNotationEnabled(enable);
  SetCSSPseudoColumnEnabled(enable);
  SetCSSPseudoElementBackdropEnabled(enable);
  SetCSSPseudoElementInterfaceEnabled(enable);
  SetCSSPseudoElementViewTransitionsEnabled(enable);
  SetCSSPseudoScrollButtonsEnabled(enable);
  SetCSSPseudoScrollMarkersEnabled(enable);
  SetCSSRandomFunctionEnabled(enable);
  SetCSSResizeAutoEnabled(enable);
  SetCSSRevertRuleEnabled(enable);
  SetCSSRubyOverhangEnabled(enable);
  SetCSSSafePrintableInsetEnabled(enable);
  SetCSSScopeifiedParentPseudoClassEnabled(enable);
  SetCSSScrolledContainerQueriesEnabled(enable);
  SetCSSScrollInitialTargetEnabled(enable);
  SetCSSScrollMarkerGroupModesEnabled(enable);
  SetCSSScrollMarkerTargetBeforeAfterEnabled(enable);
  SetCSSScrollSnapChangeEventEnabled(enable);
  SetCSSScrollSnapChangingEventEnabled(enable);
  SetCSSScrollSnapEventsEnabled(enable);
  SetCSSScrollSnapTypePairEnabled(enable);
  SetCSSScrollTargetGroupEnabled(enable);
  SetCSSShapeOutsidePathAndShapeSupportEnabled(enable);
  SetCSSShapeOutsideRectAndXywhSupportEnabled(enable);
  SetCSSSupportsAtRuleFunctionEnabled(enable);
  SetCSSSupportsForImportRulesEnabled(enable);
  SetCSSSupportsNamedFeatureFunctionEnabled(enable);
  SetCSSTextDecorationInsetEnabled(enable);
  SetCSSTextDecorationSkipInkAllEnabled(enable);
  SetCssTextFitEnabled(enable);
  SetCSSURLRequestModifiersEnabled(enable);
  SetCSSUserValidAndUserInvalidForRadioEnabled(enable);
  SetCSSWindowDragEnabled(enable);
  SetCSSZoomAnimationEnabled(enable);
  SetCustomElementsDisableFormattingFixupsEnabled(enable);
  SetCustomScrollbarApplyMinimumThumbLengthEnabled(enable);
  SetDateTimeInputTypeEarlyAdvanceFixEnabled(enable);
  SetDeferLineBoxHitTestToBackgroundEnabled(enable);
  SetDelegatesFocusTextControlInputFixEnabled(enable);
  SetDeviceOrientationRequestPermissionEnabled(enable);
  SetDevicePostureEnabled(enable);
  SetDisableAnchorCenterOnAlignJustifyItemsEnabled(enable);
  SetDisableFormControlChangeEventDuringMutationEnabled(enable);
  SetDisconnectWebSocketOnBFCacheEnabled(enable);
  SetDispatchHiddenVisibilityTransitionsEnabled(enable);
  SetDispatchSelectionchangeEventPerElementEnabled(enable);
  SetDocumentOpenIframeUnloadEventsEnabled(enable);
  SetDocumentOpenSandboxInheritanceRemovalEnabled(enable);
  SetDocumentPatchingEnabled(enable);
  SetDocumentPolicyExpectNoLinkedResourcesEnabled(enable);
  SetDocumentPolicyIncludeJSCallStacksInCrashReportsEnabled(enable);
  SetDOMParserXmlScriptAlreadyStartedEnabled(enable);
  SetDragImageForLargeImagesEnabled(enable);
  SetDragThresholdRequiresMouseMovementEnabled(enable);
  SetEditContextBoundsUpdateSchedulesFrameEnabled(enable);
  SetEditContextCodePointDeletionEnabled(enable);
  SetEditContextSelectionUpdateBeforeTextUpdateEventEnabled(enable);
  SetElasticOverscrollBackgroundPaintLocationFixEnabled(enable);
  SetElasticOverscrollUseEventDeltaForAxisSelectionEnabled(enable);
  SetElementSpecificReadOnlyConstraintValidationEnabled(enable);
  SetEmbeddedContentCenterAlignBaselineEnabled(enable);
  SetEmojiZWJVerticalOrientationEnabled(enable);
  SetEnableXSLTForCAPAlertsEnabled(enable);
  SetEndpointInclusiveCommitStylesEnabled(enable);
  SetEnforceAnonymityExposureEnabled(enable);
  SetEventPseudoTargetPropertyEnabled(enable);
  SetEventPseudoTargetViewTransitionNameEnabled(enable);
  SetEventTimingInteractionCountEnabled(enable);
  SetEventTimingMatchingHTMLEnabled(enable);
  SetExposeCSSFontFeatureValuesRuleEnabled(enable);
  SetExtensionScriptTaggingEnabled(enable);
  SetExternalPopupMenuClickEventEnabled(enable);
  SetFastCompositionCharacterBoundsEnabled(enable);
  SetFastPlainTextRangeCreateRangeEnabled(enable);
  SetFedCmEnabled(enable);
  SetFedCmMultipleIdentityProvidersEnabled(enable);
  SetFedCmMultipleRequestsEnabled(enable);
  SetFencedFramesEnabled(enable);
  SetFencedFramesAPIChangesEnabled(enable);
  SetFetchBodyBytesEnabled(enable);
  SetFetchLaterAPIEnabled(enable);
  SetFetchUploadStreamingEnabled(enable);
  SetFilePickerEventsFixEnabled(enable);
  SetFileSystemEnabled(enable);
  SetFileSystemAccessLockingSchemeEnabled(enable);
  SetFileSystemAccessOriginPrivateEnabled(enable);
  SetFileSystemAccessRevokeReadOnRemoveEnabled(enable);
  SetFileSystemAccessWriteModeEnabled(enable);
  SetFilterContainerLevelStylesEnabled(enable);
  SetFindBufferCollapseSkippedSpaceEnabled(enable);
  SetFindBufferMatchAcrossIgnoredNodesEnabled(enable);
  SetFindBufferSkipIgnoredSubtreesEnabled(enable);
  SetFindFirstMisspellingEndWhenNonEditableEnabled(enable);
  SetFindIgnoreSuggestionFixEnabled(enable);
  SetFirstLetterParagraphOffsetsEnabled(enable);
  SetFirstLineAndLetterExcludeInputTextareaEnabled(enable);
  SetFixHTMLFormControlElementIsReadOnlyEnabled(enable);
  SetFixMapElementEmptyNameBugEnabled(enable);
  SetFixSelectionPaintRangeNullOptEnabled(enable);
  SetFixVisualRectRemoteViewportTransformEnabled(enable);
  SetFledgeBiddingAndAuctionServerAPIEnabled(enable);
  SetFledgeBiddingAndAuctionServerAPIMultiSellerEnabled(enable);
  SetFledgeCustomMaxAuctionAdComponentsEnabled(enable);
  SetFledgeDeprecatedRenderURLReplacementsEnabled(enable);
  SetFledgeDirectFromSellerSignalsHeaderAdSlotEnabled(enable);
  SetFledgeMultiBidEnabled(enable);
  SetFledgeRealTimeReportingEnabled(enable);
  SetFledgeSellerNonceEnabled(enable);
  SetFledgeTrustedSignalsKVv2SupportEnabled(enable);
  SetFlexWrapBalanceEnabled(enable);
  SetFocusgroupEnabled(enable);
  SetFocusRingRespectExplicitOutlineColorInDarkModeEnabled(enable);
  SetFontationsPrintingEnabled(enable);
  SetFontFeatureSettingsDescriptorEnabled(enable);
  SetFontFormatAvar2Enabled(enable);
  SetFontLanguageOverrideEnabled(enable);
  SetFontMatchAliasesAsLastResortEnabled(enable);
  SetFontPrewarmerShutdownFallbackEnabled(enable);
  SetFontStyleObliqueZeroDegreeAsNormalEnabled(enable);
  SetFontUniqueNameTypefaceCacheEnabled(enable);
  SetFontVariableItalicAxisEnabled(enable);
  SetFontVariationSettingsDescriptorEnabled(enable);
  SetForcedColorsEnabled(enable);
  SetForwardReasonToFetchBodyAbortEnabled(enable);
  SetFrameCaretSkipHiddenCheckEnabled(enable);
  SetGamepadWindowEventHandlersEnabled(enable);
  SetGenerateDragOverlayBeforeDragStartEnabled(enable);
  SetGenerateXSLTWarningBannerEnabled(enable);
  SetGeolocationElementEnabled(enable);
  SetGeometryMapperSingularTransformFixEnabled(enable);
  SetGetDisplayMediaAudioSelectionEnabled(enable);
  SetGetDisplayMediaWindowAudioCaptureEnabled(enable);
  SetGetElementsByNameOnlyHTMLElementsEnabled(enable);
  SetGetTargetRangesRetargetingEnabled(enable);
  SetGetUserMediaEchoCancellationModesEnabled(enable);
  SetGraphemeClusterBoundsCheckEnabled(enable);
  SetHandleShadowDOMInSubstringUtilEnabled(enable);
  SetHasUAVisualTransitionEnabled(enable);
  SetHideVideoControlsWhenUnneededEnabled(enable);
  SetHighlightsFromPointEnabled(enable);
  SetHitTestBorderRadiusForStackingContextEnabled(enable);
  SetHitTestContainerTransformStateForPreserve3dEnabled(enable);
  SetHitTestCulledInlineOfSelfPaintingChildEnabled(enable);
  SetHrefTranslateEnabled(enable);
  SetHTMLAdoptionAlgorithmNewStepsEnabled(enable);
  SetHTMLAreaElementDisplayNoneEnabled(enable);
  SetHTMLBodyMarginPixelLengthEnabled(enable);
  SetHTMLCommandElementRemovalEnabled(enable);
  SetHTMLLinkElementAttributeValueChangesEnabled(enable);
  SetHTMLParserIgnoreHeadInNoscriptEnabled(enable);
  SetHTMLParserTruncatedMarkupDeclarationEnabled(enable);
  SetHTMLPrintingArtifactAnnotationsEnabled(enable);
  SetHTMLProcessingInstructionEnabled(enable);
  SetHyphenVerticalOrientationFixEnabled(enable);
  SetIgnoreLetterSpacingInCursiveScriptsEnabled(enable);
  SetImageDataPixelFormatEnabled(enable);
  SetImageDocumentUseLayoutWidthEnabled(enable);
  SetImageSrcsetReselectionEnabled(enable);
  SetImageSrcsetReselectionForSrcCandidateEnabled(enable);
  SetInertElementNonEditableEnabled(enable);
  SetInheritUserModifyWithoutContenteditableEnabled(enable);
  SetInitialLetterBlockPositioningEnabled(enable);
  SetInlineBlockLineNavigationEnabled(enable);
  SetInlineCursorSkipNonIfcEnabled(enable);
  SetInputClientRectWithoutInlinePaddingEnabled(enable);
  SetInputDisabledHandlerFixEnabled(enable);
  SetInsertBlockquoteBeforeOuterBlockEnabled(enable);
  SetInstalledAppEnabled(enable);
  SetInstallOnDeviceSpeechRecognitionEnabled(enable);
  SetIntegrityPolicyScriptEnabled(enable);
  SetInterestEventsNonComposedEnabled(enable);
  SetIntersectionObserverCompositedAnimationsForceMainFramesEnabled(enable);
  SetInvisibleSVGAnimationThrottlingEnabled(enable);
  SetJavaScriptImportTextEnabled(enable);
  SetLabelInteractiveContentCheckBeforeHandlerEnabled(enable);
  SetLayoutCloneForScrollableOverflowChangeEnabled(enable);
  SetLayoutContainingBlockReturnsBoxEnabled(enable);
  SetLayoutOOFCollectInlinesFixEnabled(enable);
  SetLazyImageConformantLoadEventTimingEnabled(enable);
  SetLazyLoadVideoAndAudioEnabled(enable);
  SetLegacyAbstractRangeEnabled(enable);
  SetLightDismissFromClickEnabled(enable);
  SetLineBreakAfterSpaceBeforeOpenTagEnabled(enable);
  SetLineBreakBidiControlEnterEnabled(enable);
  SetLineBreakerClearShapeResultOnOverflowEnabled(enable);
  SetLineBreakerHanKerningEndEnabled(enable);
  SetLongAnimationFrameSourceCharPositionEnabled(enable);
  SetLongAnimationFrameStyleDurationEnabled(enable);
  SetLongPressHitTestInFrameEnabled(enable);
  SetLongPressReleasesActiveStateEnabled(enable);
  SetLongTaskFromLongAnimationFrameEnabled(enable);
  SetMacCharacterFallbackCacheEnabled(enable);
  SetMacDisableCtrlHomeEndEnabled(enable);
  SetMacFontWeightFromOS2Enabled(enable);
  SetManagedConfigurationEnabled(enable);
  SetMarginTrimEnabled(enable);
  SetMarkAncestorsOnDisplayLockUnlockEnabled(enable);
  SetMaskDeserializationTimeForCrossOriginMessagesEnabled(enable);
  SetMaskWaitForAllImagesEnabled(enable);
  SetMathMLOperatorRTLMirroringEnabled(enable);
  SetMeasureMemoryEnabled(enable);
  SetMediaPlaybackWhileNotVisiblePermissionPolicyEnabled(enable);
  SetMediaSessionEnabled(enable);
  SetMediaSessionChapterInformationEnabled(enable);
  SetMediaStreamTrackProcessorStatsEnabled(enable);
  SetMixedContentAutoupgradesUseIsMixedContentRestrictedInFrameEnabled(enable);
  SetModifyParagraphCrossEditingoundaryEnabled(enable);
  SetModuleMapDoNotCacheFailedFetchEnabled(enable);
  SetModulePreloadReferrerEnabled(enable);
  SetModulePreloadStyleJsonEnabled(enable);
  SetMoveEndingSelectionToListChildEnabled(enable);
  SetMoveParagraphsPreserveInlineStructureEnabled(enable);
  SetMulticolColumnWidthMaxContentClampEnabled(enable);
  SetNastaliqScriptEnabled(enable);
  SetNavigationSourcePseudoClassEnabled(enable);
  SetNavigationTimingRedirectTimingViaTAOEnabled(enable);
  SetNeutralKeyframeEasingComplianceEnabled(enable);
  SetNewHTMLSettingMethodsEnabled(enable);
  SetNodeIteratorRemovalFixEnabled(enable);
  SetNoExtendSelectionToUserSelectNoneOutOfFlowEnabled(enable);
  SetNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableEnabled(enable);
  SetNoNbspForInterElementSpaceOnCopyEnabled(enable);
  SetNonEmptyBlockquotesOnOutdentingEnabled(enable);
  SetNonEmptyVisibleTextSelectionForTextFragmentEnabled(enable);
  SetNonStandardAppearanceValueSliderVerticalEnabled(enable);
  SetNormalizeLineEndingsInInsertTextEnabled(enable);
  SetNotificationsEnabled(enable);
  SetNotifySelectionControllerOnUnchangedSelectionEnabled(enable);
  SetNumberInputFullWidthCharsEnabled(enable);
  SetOfflineAudioContextIncrementalRenderingEnabled(enable);
  SetOffscreenCanvasGetContextAttributesEnabled(enable);
  SetOffsetMappingReuseFullWidthSpaceFixEnabled(enable);
  SetOffsetPathTransformUpdateFixEnabled(enable);
  SetOnDeviceWebSpeechAvailableEnabled(enable);
  SetOnDeviceWebSpeechQualityEnabled(enable);
  SetOofLayoutRequiresSideEffectsEnabled(enable);
  SetOpaqueRangeEnabled(enable);
  SetOpenPopoverInvokerRestrictToSameTreeScopeEnabled(enable);
  SetOptionDisablednessCheckAncestorsEnabled(enable);
  SetOriginAPIEnabled(enable);
  SetOriginIsolationHeaderEnabled(enable);
  SetOutlineDrawAutoStyleZeroWidthEnabled(enable);
  SetOverlayGlobalRuleRemovalEnabled(enable);
  SetOverlayPropertyEnabled(enable);
  SetPagePopupCopyPasteEnabled(enable);
  SetPageSwapEventEnabled(enable);
  SetPaintCaretAfterInnerEditorPaintEnabled(enable);
  SetPaintHoldingForIframesEnabled(enable);
  SetPaymentLinkDetectionEnabled(enable);
  SetPaymentMethodChangeEventEnabled(enable);
  SetPaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorEnabled(enable);
  SetPeriodicBackgroundSyncEnabled(enable);
  SetPointerLockOnAndroidEnabled(enable);
  SetPointerRawUpdateOnlyInSecureContextEnabled(enable);
  SetPopoverHintNestedShowExceptionEnabled(enable);
  SetPopoverHintNewBehaviorEnabled(enable);
  SetPopupWidgetRequiresUserActivationEnabled(enable);
  SetPositionOutsideTabSpanCheckSiblingNodeEnabled(enable);
  SetPositionVisibilityIgnoreNonClipAncestorsEnabled(enable);
  SetPositionVisibilitySingularValuesEnabled(enable);
  SetPotentialPermissionsPolicyReportingEnabled(enable);
  SetPreloadLinkRelDataUrlsEnabled(enable);
  SetPreloadScannerImprovementsEnabled(enable);
  SetPrePaintBoxInvalidatorUsesFragmentsEnabled(enable);
  SetPrerender2Enabled(enable);
  SetPrerenderActivationByFormSubmissionEnabled(enable);
  SetPresentationEnabled(enable);
  SetPreserveHtmlEquivalentTagsInTypingStyleEnabled(enable);
  SetPreserveUnfocusedSelectionCacheEnabled(enable);
  SetPreventTextSelectionJumpEnabled(enable);
  SetPrivateStateTokensEnabled(enable);
  SetProfilerAPIEnabled(enable);
  SetProgrammaticScrollPromiseEnabled(enable);
  SetProgressEventInServiceWorkerEnabled(enable);
  SetPropagateOverscrollBehaviorFromRootEnabled(enable);
  SetPseudoElementsFocusableEnabled(enable);
  SetPseudoElementsHitTestableEnabled(enable);
  SetPushMessageDataBytesEnabled(enable);
  SetPushMessagingEnabled(enable);
  SetQuotaExceededErrorUpdateEnabled(enable);
  SetRadioButtonCircularBorderRadiusEnabled(enable);
  SetRangeBoundaryFastPathEnabled(enable);
  SetRasterInducingScrollEnabled(enable);
  SetRateLimitPointerLockRequestsEnabled(enable);
  SetReadableStreamBYOBReaderReadMinOptionEnabled(enable);
  SetReadClipboardDataOnClipboardItemGetTypeEnabled(enable);
  SetReadingFlowWithSlotsEnabled(enable);
  SetReadOnlyTextControlSelectionEnabled(enable);
  SetRecheckParentDuringNodeVectorInsertionEnabled(enable);
  SetReduceUserAgentMinorVersionEnabled(enable);
  SetReleasePaintHoldingWithoutContentfulPaintEnabled(enable);
  SetRemotePlaybackEnabled(enable);
  SetRemoveCharsetAutoDetectionForISO2022JPEnabled(enable);
  SetRemoveChildrenInReplaceChildrenEnabled(enable);
  SetRemoveCollapsedPlaceholderForContentEditableEnabled(enable);
  SetRemoveDanglingMarkupInTargetEnabled(enable);
  SetRemoveDataUrlInSvgUseEnabled(enable);
  SetRemoveNonAllowlistedCreateEventEnabled(enable);
  SetRemoveScrollNodeWorkaroundEnabled(enable);
  SetReplaceChildrenWithFragmentFastPathEnabled(enable);
  SetReportLayoutShiftRectsInCssPixelsEnabled(enable);
  SetRequestIsReloadNavigationEnabled(enable);
  SetRespectOverscrollBehaviorForScrollBubblingEnabled(enable);
  SetResponsiveIframesEnabled(enable);
  SetResponsiveIframesShrinkEnabled(enable);
  SetResponsiveIframesSingleAxisIcbEnabled(enable);
  SetRestrictOwnAudioEnabled(enable);
  SetRtcAlwaysNegotiateDataChannelsEnabled(enable);
  SetRTCEncodedFrameAudioLevelEnabled(enable);
  SetRTCEncodedFrameTimestampsEnabled(enable);
  SetRTCJitterBufferTargetEnabled(enable);
  SetRTCRtpEncodingParametersCodecEnabled(enable);
  SetRTCRtpScaleResolutionDownToEnabled(enable);
  SetRTCRtpScriptTransformEnabled(enable);
  SetRTCSvcScalabilityModeEnabled(enable);
  SetRubyTextDecorationSpacingEnabled(enable);
  SetRunMicrotaskBeforeXmlScriptEnabled(enable);
  SetRunSnapshotPostLayoutStateStepsEnabled(enable);
  SetSanitizeIDNEmailFormInputEnabled(enable);
  SetSanitizerAPIEnabled(enable);
  SetSanitizeWorkerErrorPropagationEnabled(enable);
  SetScopedViewTransitionSizeContainmentEnabled(enable);
  SetScoreLineBreakerAbortEnabled(enable);
  SetScriptBasedOnUnicodeBlockEnabled(enable);
  SetScriptedSpeechRecognitionEnabled(enable);
  SetScriptedSpeechSynthesisEnabled(enable);
  SetScrollAnchorSerializationUseParentForTextNodeEnabled(enable);
  SetScrollAxisLockEnabled(enable);
  SetScrollbarColorEnabled(enable);
  SetScrollbarGutterBugFixEnabled(enable);
  SetScrollbarWidthEnabled(enable);
  SetScrollIntoViewNearestEnabled(enable);
  SetScrollIntoViewNoInitialFocusNavigationStartingPointEnabled(enable);
  SetScrollIntoViewRootFrameViewportBugFixEnabled(enable);
  SetScrollTimelineNamedRangeScrollEnabled(enable);
  SetScrollTopLeftInteropEnabled(enable);
  SetScrollToTextFragmentDirectiveLimitEnabled(enable);
  SetScrollVisibilityHiddenScrollersEnabled(enable);
  SetSearchTextHighlightPseudoEnabled(enable);
  SetSecurePaymentConfirmationAvailabilityAPIEnabled(enable);
  SetSecurePaymentConfirmationCapabilitiesEnabled(enable);
  SetSecurePaymentConfirmationExtensionsDisallowForThirdPartiesEnabled(enable);
  SetSecurePaymentConfirmationOptOutEnabled(enable);
  SetSelectAnchorInViewportEnabled(enable);
  SetSelectedcontentSpec2Enabled(enable);
  SetSelectionCollapsedDirectionNoneEnabled(enable);
  SetSelectionEditingBoundarySlottedContentEnabled(enable);
  SetSelectionFocusAffinityEnabled(enable);
  SetSelectionHandleWithBottomClippedEnabled(enable);
  SetSelectionRemoveRangeNotFoundErrorEnabled(enable);
  SetSelectivePermissionsInterventionEnabled(enable);
  SetSelectLabelClickOpensPickerEnabled(enable);
  SetSelectPopupBackgroundEnabled(enable);
  SetSelectRemoveOverflowHiddenEnabled(enable);
  SetSendBeaconThrowForBlobWithNonSimpleTypeEnabled(enable);
  SetSendEarlyLastBeginMainFrameEnabled(enable);
  SetSendSlotChangeSignalAfterNodeInsertedEnabled(enable);
  SetSeparateDeferModuleScriptTasksEnabled(enable);
  SetSerialEnabled(enable);
  SetServiceWorkerCodeCacheEnabled(enable);
  SetServiceWorkerCodeCacheHashingEnabled(enable);
  SetServiceWorkerScriptEncodingEnabled(enable);
  SetServiceWorkerStaticRouterTimingInfoEnabled(enable);
  SetSetHTMLCanRunScriptsEnabled(enable);
  SetShadowRootReferenceTargetEnabled(enable);
  SetShadowRootSlotAssignmentEnabled(enable);
  SetSharedWorkerEnabled(enable);
  SetSharedWorkerExtendedLifetimeEnabled(enable);
  SetSideRelativeBackgroundPositionEnabled(enable);
  SetSingleAxisScrollContainersEnabled(enable);
  SetSkipAdEnabled(enable);
  SetSkipCompositingStaticBackdropFilterAnimationEnabled(enable);
  SetSkipEventCaptureEnabled(enable);
  SetSkipHtmlInterchangeInForeignContentEnabled(enable);
  SetSkipPaintInvalidationWhileStayingInvisibleEnabled(enable);
  SetSkipStaleUndoStepsInIdleSpellCheckEnabled(enable);
  SetSkipTickingStaticAnimationsEnabled(enable);
  SetSkipTouchEventFilterEnabled(enable);
  SetSkipUnselectableElementsInParagraphBoundaryEnabled(enable);
  SetSmallerViewportUnitsEnabled(enable);
  SetSortedLayoutShiftSourcesByImpactAreaEnabled(enable);
  SetSourceSpecificMulticastInDirectSocketsEnabled(enable);
  SetSpatNavUsesCursorInheritanceEnabled(enable);
  SetSplitTextNotCleanupDummySpansEnabled(enable);
  SetSrcsetSelectionMatchesImageSetEnabled(enable);
  SetStableBlinkFeaturesEnabled(enable);
  SetStackingContextIsNotStackedEnabled(enable);
  SetStaleImageNaturalSizeDuringRevalidationEnabled(enable);
  SetStaleIntersectionGeometryForThrottledFramesEnabled(enable);
  SetStandardizedBrowserZoomEnabled(enable);
  SetStickyUserActivationAcrossSameOriginNavigationEnabled(enable);
  SetStorageBucketsEnabled(enable);
  SetStyleResourceFetcherIdentityCheckEnabled(enable);
  SetSubAppsEnabled(enable);
  SetSubframeMouseCaptureOwnerEnabled(enable);
  SetSuppressFullscreenFromUnfocusedViewEnabled(enable);
  SetSuppressPointerStreamAfterDragEnabled(enable);
  SetSvgAnimateMotionDiscreteCalcModeEnabled(enable);
  SetSvgAvoidResettingFilterQualityForTiledPatternEnabled(enable);
  SetSvgEmptyAttributeStringParsingFixEnabled(enable);
  SetSvgEnableTextDecorationCssStylingEnabled(enable);
  SetSvgFallBackToContainerSizeEnabled(enable);
  SetSvgFeImageEXIFOrientationEnabled(enable);
  SetSvgFeImageSkipHiddenContainerViewportDependenceEnabled(enable);
  SetSvgFilterPaintsForHiddenContentEnabled(enable);
  SetSvgFilterUserSpaceViewportForSvgEnabled(enable);
  SetSvgIgnoreNegativeEllipseRadiiEnabled(enable);
  SetSvgImageAnimationResetEnabled(enable);
  SetSvgImageNonUniformScalingFixEnabled(enable);
  SetSvgIncrementalStyleEnabled(enable);
  SetSvgInstanceSyncOptimizationEnabled(enable);
  SetSvgLengthResolveUnparsedValueEnabled(enable);
  SetSvgScriptElementAsyncAttributeEnabled(enable);
  SetSvgScriptFragmentAlreadyStartedEnabled(enable);
  SetSvgStyleElementReflectTypeAndMediaEnabled(enable);
  SetSVGTextPathSideAttributeEnabled(enable);
  SetSvgTextPositioningGraphemeClustersEnabled(enable);
  SetSvgUseNestedResourceDocumentsEnabled(enable);
  SetSvgUseNestedResourceDocumentsDelayLoadEnabled(enable);
  SetSyncCrossDocumentAnimationTimingEnabled(enable);
  SetTabAlignmentWithFloatsEnabled(enable);
  SetTableCellBorderColorInheritEnabled(enable);
  SetTabSizeInRubyBaseEnabled(enable);
  SetTargetInShadowDeterminedBeforeListenerEnabled(enable);
  SetTargetRangesForBackwardDeletionUnitEnabled(enable);
  SetTemporalInputHostBlurEnabled(enable);
  SetTestFeatureStableEnabled(enable);
  SetTextAreaPlaceholderBreakAriaHiddenUpdateEnabled(enable);
  SetTextAreaResizerFixedSizeEnabled(enable);
  SetTextAutoSpaceIgnoreRubyAnnotationEnabled(enable);
  SetTextBoxTrimForNestedListEnabled(enable);
  SetTextBoxTrimOnInlineBoxEnabled(enable);
  SetTextBoxTrimOnInlineBoxTextDecorationEnabled(enable);
  SetTextEncodingDetectorTldHintEnabled(enable);
  SetTextFragmentIdentifiersEnabled(enable);
  SetTextIteratorExcludeAutofilledSelectFixEnabled(enable);
  SetTextMetricsBaselinesEnabled(enable);
  SetTextOverflowClipWithSelectionEnabled(enable);
  SetTextOverflowInTextareaEnabled(enable);
  SetTextOverflowStringEnabled(enable);
  SetTextScaleMetaTagEnabled(enable);
  SetTextSpacingTrimFallbackEnabled(enable);
  SetTextSpacingTrimFallbackChwsEnabled(enable);
  SetTextStreamMethodEnabled(enable);
  SetTimelineTriggerEnabled(enable);
  SetTimePickerHonorsStepEnabled(enable);
  SetTimerThrottlingForBackgroundTabsEnabled(enable);
  SetTopicsAPIEnabled(enable);
  SetTouchEventFeatureDetectionEnabled(enable);
  SetTrackAnimatedSourcesEnabled(enable);
  SetTransferableRTCDataChannelEnabled(enable);
  SetTreatMhtmlInitialDocumentLoadsAsCrossDocumentEnabled(enable);
  SetTrustedTypesCreateParserOptionsEnabled(enable);
  SetUnboundedElementEnabled(enable);
  SetUnprefixedSpeechRecognitionEnabled(enable);
  SetUnrestrictedUsbEnabled(enable);
  SetURLSearchParamsHasAndDeleteMultipleArgsEnabled(enable);
  SetUsePaintGeometryForIntersectionEnabled(enable);
  SetUsePositionForPointInFlexibleBoxWithSingleChildElementEnabled(enable);
  SetUsePositionIfIsVisuallyEquivalentCandidateEnabled(enable);
  SetUserActionPseudosStopAtTopLayerEnabled(enable);
  SetUserMediaElementEnabled(enable);
  SetUseShadowHostStyleCheckEditableEnabled(enable);
  SetUseUndoStepElementDispatchBeforeInputEnabled(enable);
  SetVideoFrameMetadataRtpTimestampEnabled(enable);
  SetViewportHeightClientHintHeaderEnabled(enable);
  SetViewportSegmentsEnabled(enable);
  SetViewTransitionPreventSvgFilterPaintEnabled(enable);
  SetViewTransitionSkipPseudoTreeForNavigationCaptureEnabled(enable);
  SetViewTransitionSkipZeroHeightControlsSnapEnabled(enable);
  SetVisualRectMappingFixForExpansionEnabled(enable);
  SetWakeLockEnabled(enable);
  SetWavyDecorationContinuousPhaseEnabled(enable);
  SetWebAppLaunchQueueEnabled(enable);
  SetWebAppScopeSystemAccentColorEnabled(enable);
  SetWebAudioConfigurableRenderQuantumEnabled(enable);
  SetWebAuthEnabled(enable);
  SetWebAutocorrectByDefaultEnabled(enable);
  SetWebBluetoothWorldIsolatedCacheEnabled(enable);
  SetWebCryptoPQCEnabled(enable);
  SetWebGLDrawingBufferStorageEnabled(enable);
  SetWebHIDEnabled(enable);
  SetWebHIDWorldIsolatedCacheEnabled(enable);
  SetWebIdentityDigitalCredentialsEnabled(enable);
  SetWebIdentityDigitalCredentialsCreationEnabled(enable);
  SetWebIDLBigIntUsesToBigIntEnabled(enable);
  SetWebOTPEnabled(enable);
  SetWebOTPAssertionFeaturePolicyEnabled(enable);
  SetWebSerialWorldIsolatedCacheEnabled(enable);
  SetWebSocketStreamEnabled(enable);
  SetWebTransportAnticipatedConcurrentIncomingStreamsEnabled(enable);
  SetWebTransportApplicationProtocolEnabled(enable);
  SetWebTransportCreateStreamsBeforeReadyEnabled(enable);
  SetWebTransportCustomCertificatesEnabled(enable);
  SetWebTransportDrainingEnabled(enable);
  SetWebTransportHeadersEnabled(enable);
  SetWebTransportReliabilityEnabled(enable);
  SetWebUSBEnabled(enable);
  SetWebUSBOnDedicatedWorkersEnabled(enable);
  SetWebViewEnvReorderFixEnabled(enable);
  SetWebVTTCueLayoutByPositionAlignmentEnabled(enable);
  SetWebVTTCueTightLineBoxEnabled(enable);
  SetWebXREnabled(enable);
  SetWebXREnabledFeaturesEnabled(enable);
  SetWebXRLayersEnabled(enable);
  SetWebXRPlaneDetectionEnabled(enable);
  SetWebXRVisibilityMaskEnabled(enable);
  SetWheelEventDeltaExternalPageScaleEnabled(enable);
  SetWheelEventMomentumEnabled(enable);
  SetWindowOpenAttributionSrcEnabled(enable);
  SetWordSkipSpacesPunctuationFixEnabled(enable);
  SetXMLNoExternalEntitiesEnabled(enable);
  SetXMLParserReplaceLoneSurrogatesEnabled(enable);

  // Platform-dependent features
#if BUILDFLAG(IS_ANDROID)
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetAriaNotifyEnabled(enable);
  SetBarcodeDetectorEnabled(enable);
  SetCompositedSelectionUpdateEnabled(enable);
  SetCompositionForegroundMarkersEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetContentIndexEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetDisplayCutoutAPIEnabled(enable);
  SetEyeDropperAPIEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetImplicitRootScrollerEnabled(enable);
  SetLanguageDetectionAPIEnabled(enable);
  SetLeftClickToHandleSuggestionEnabled(enable);
  SetMediaCaptureEnabled(enable);
  SetMediaControlsExpandGestureEnabled(enable);
  SetMediaControlsOverlayPlayButtonEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetOrientationEventEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetSpellCheckChunkingEnabled(enable);
  SetTextFragmentTapOpensContextMenuEnabled(enable);
  SetUpdateComplexSafaAreaConstraintsEnabled(enable);
  SetUseLowQualityInterpolationEnabled(enable);
  SetWebBluetoothEnabled(enable);
  SetWebNFCEnabled(enable);
#endif

#if BUILDFLAG(IS_WIN)
  SetAIPromptAPIEnabled(enable);
  SetAIPromptAPIMultimodalInputEnabled(enable);
  SetAISummarizationAPIEnabled(enable);
  SetAriaActionsEnabled(enable);
  SetAriaNotifyEnabled(enable);
  SetAudioOutputDevicesEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCapturedSurfaceResolutionEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetCompositedSelectionUpdateEnabled(enable);
  SetComputePressureEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetEyeDropperAPIEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFileSystemObserverEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetInstallElementEnabled(enable);
  SetLanguageDetectionAPIEnabled(enable);
  SetMediaCaptionSettingsButtonEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetPagePopupEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetTouchDragOnShortPressEnabled(enable);
  SetTranslationAPIEnabled(enable);
  SetWebAppInstallationEnabled(enable);
  SetWebAudioBypassOutputBufferingEnabled(enable);
  SetWebBluetoothEnabled(enable);
  SetWebSpeechRecognitionContextEnabled(enable);
  SetWebSpeechUnspokenPunctuationEnabled(enable);
#endif

#if BUILDFLAG(IS_CHROMEOS)
  SetAIPromptAPIEnabled(enable);
  SetAIPromptAPIMultimodalInputEnabled(enable);
  SetAISummarizationAPIEnabled(enable);
  SetAudioOutputDevicesEnabled(enable);
  SetBarcodeDetectorEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCapturedSurfaceResolutionEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetCompositedSelectionUpdateEnabled(enable);
  SetComputePressureEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetEyeDropperAPIEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFileSystemObserverEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetInstallElementEnabled(enable);
  SetLanguageDetectionAPIEnabled(enable);
  SetMediaCaptionSettingsButtonEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetPagePopupEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetSmartCardEnabled(enable);
  SetTranslationAPIEnabled(enable);
  SetUseBeginFramePresentationFeedbackEnabled(enable);
  SetWebAppInstallationEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAudioBypassOutputBufferingEnabled(enable);
  SetWebBluetoothEnabled(enable);
  SetWebPrintingEnabled(enable);
  SetWebSpeechUnspokenPunctuationEnabled(enable);
#endif

#if BUILDFLAG(IS_MAC)
  SetAIPromptAPIEnabled(enable);
  SetAIPromptAPIMultimodalInputEnabled(enable);
  SetAISummarizationAPIEnabled(enable);
  SetAllowSyntheticTimingForCanvasCaptureEnabled(enable);
  SetAriaActionsEnabled(enable);
  SetAriaNotifyEnabled(enable);
  SetAudioOutputDevicesEnabled(enable);
  SetBarcodeDetectorEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCapturedSurfaceResolutionEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetComputePressureEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetEyeDropperAPIEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFileSystemObserverEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetInstallElementEnabled(enable);
  SetLanguageDetectionAPIEnabled(enable);
  SetMediaCaptionSettingsButtonEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetPagePopupEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetTranslationAPIEnabled(enable);
  SetWebAppInstallationEnabled(enable);
  SetWebAudioBypassOutputBufferingEnabled(enable);
  SetWebBluetoothEnabled(enable);
  SetWebSpeechRecognitionContextEnabled(enable);
  SetWebSpeechUnspokenPunctuationEnabled(enable);
#endif

#if BUILDFLAG(IS_LINUX)
  SetAIPromptAPIEnabled(enable);
  SetAIPromptAPIMultimodalInputEnabled(enable);
  SetAISummarizationAPIEnabled(enable);
  SetAriaActionsEnabled(enable);
  SetAriaNotifyEnabled(enable);
  SetAudioOutputDevicesEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetCompositedSelectionUpdateEnabled(enable);
  SetComputePressureEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetEyeDropperAPIEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFileSystemObserverEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetInstallElementEnabled(enable);
  SetLanguageDetectionAPIEnabled(enable);
  SetMediaCaptionSettingsButtonEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetPagePopupEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetTranslationAPIEnabled(enable);
  SetWebAppInstallationEnabled(enable);
  SetWebAudioBypassOutputBufferingEnabled(enable);
  SetWebSpeechRecognitionContextEnabled(enable);
  SetWebSpeechUnspokenPunctuationEnabled(enable);
#endif

#if BUILDFLAG(IS_IOS)
  SetAudioOutputDevicesEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetComputePressureEnabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetWebBluetoothEnabled(enable);
  SetWebNFCEnabled(enable);
#endif

#if BUILDFLAG(IS_FUCHSIA)
  SetAudioOutputDevicesEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetCompositedSelectionUpdateEnabled(enable);
  SetComputePressureEnabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFileSystemObserverEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetPagePopupEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
#endif

  // Default values for platforms not specifically handled above
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX) && !BUILDFLAG(IS_IOS) && !BUILDFLAG(IS_FUCHSIA)
  SetAudioOutputDevicesEnabled(enable);
  SetCaptureControllerEnabled(enable);
  SetCapturedSurfaceControlEnabled(enable);
  SetCaptureHandleEnabled(enable);
  SetComputePressureEnabled(enable);
  SetDocumentPictureInPictureAPIEnabled(enable);
  SetDocumentPictureInPicturePreferInitialPlacementEnabled(enable);
  SetDocumentPictureInPictureUserActivationEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetFileHandlingEnabled(enable);
  SetFileSystemAccessLocalEnabled(enable);
  SetFileSystemObserverEnabled(enable);
  SetFontAccessEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetInstallElementEnabled(enable);
  SetNavigatorContentUtilsEnabled(enable);
  SetNotificationConstructorEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetPagePopupEnabled(enable);
  SetPartitionVisitedLinkDatabaseWithSelfLinksEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetWebAppInstallationEnabled(enable);
#endif
}

void RuntimeEnabledFeaturesBase::SetExperimentalFeaturesEnabled(bool enable) {
  SetAccessibilityImplicitActionsEnabled(enable);
  SetAccessibilityOSLevelBoldTextEnabled(enable);
  SetAccessibilitySerializationSizeMetricsEnabled(enable);
  SetAccessKeyLabelEnabled(enable);
  SetAddressSpaceEnabled(enable);
  SetAllowPreloadingWithCSPMetaTagEnabled(enable);
  SetAnimationRangeRejectRelativeLengthsEnabled(enable);
  SetAnnotationSpaceForMultiColEnabled(enable);
  SetAOMAriaRelationshipPropertiesAriaOwnsEnabled(enable);
  SetAppearanceBaseEnabled(enable);
  SetAppTitleEnabled(enable);
  SetAudioContextAsyncStateTransitionsEnabled(enable);
  SetAudioVideoTracksEnabled(enable);
  SetAudioWorkletSharedPortEnabled(enable);
  SetAutofillEventEnabled(enable);
  SetAutoPictureInPictureVideoHeuristicsEnabled(enable);
  SetBackForwardCacheExperimentHTTPHeaderEnabled(enable);
  SetBackForwardCacheRestorationPerformanceEntryEnabled(enable);
  SetBasicShapeCornerRadiusEnabled(enable);
  SetBrowserInitiatedAutomaticPictureInPictureEnabled(enable);
  SetCacheControlRFC7234ParsingEnabled(enable);
  SetCacheControlRFC7234ParsingMetricsEnabled(enable);
  SetCacheStorageCodeCacheHintEnabled(enable);
  SetCanvas2dCanvasFilterEnabled(enable);
  SetCanvas2dDeferredFlushEnabled(enable);
  SetCanvas2dLayersWithOptionsEnabled(enable);
  SetCanvasGlobalHDRHeadroomEnabled(enable);
  SetCanvasGradientCSSColor4Enabled(enable);
  SetCanvasHDREnabled(enable);
  SetCanvasTextMetricsPreciseBoundsEnabled(enable);
  SetCanvasToneMappingEnabled(enable);
  SetCapabilityDelegationDisplayCaptureRequestEnabled(enable);
  SetCapabilityDelegationPopupEnabled(enable);
  SetCDTNewCrossOriginHandlingEnabled(enable);
  SetCDTNewDestinationEnabled(enable);
  SetCDTNewReferrerAndReferrerPolicyHandlingEnabled(enable);
  SetColorSpaceRec2100LinearEnabled(enable);
  SetCompositorTimelineTriggerEnabled(enable);
  SetComputedAccessibilityInfoEnabled(enable);
  SetConcurrentNativePaintWorkletsEnabled(enable);
  SetConditionalTracingLoAFEnabled(enable);
  SetConnectionAllowlistEmbeddedEnforcementEnabled(enable);
  SetContainerTimingEnabled(enable);
  SetContextMenuEnabled(enable);
  SetCorrectTemplateFormParsingEnabled(enable);
  SetCSPHashesV1Enabled(enable);
  SetCSSAnimationIterationCompositeEnabled(enable);
  SetCSSBackgroundLayerCountIndependenceEnabled(enable);
  SetCSSBorderRadiusSideShorthandsEnabled(enable);
  SetCSSCaretColorWithOptionalSecondValueEnabled(enable);
  SetCSSColorTypedOMEnabled(enable);
  SetCSSContainerProgressNotationEnabled(enable);
  SetCSSCornersShorthandEnabled(enable);
  SetCSSCounterResetReversedEnabled(enable);
  SetCSSCrossFadeEnabled(enable);
  SetCSSFontFamilySerializationEnabled(enable);
  SetCSSGridLanesLayoutEnabled(enable);
  SetCSSInheritFunctionEnabled(enable);
  SetCSSLangExtendedRangesEnabled(enable);
  SetCSSLayoutAPIEnabled(enable);
  SetCSSLineClampEnabled(enable);
  SetCSSLineClampLineBreakingEllipsisEnabled(enable);
  SetCSSLinkParametersPropertyEnabled(enable);
  SetCSSListCounterAccountingEnabled(enable);
  SetCSSMediaProgressNotationEnabled(enable);
  SetCSSMixinsEnabled(enable);
  SetCSSOMGetComputedStylePseudoElementRequiresColonEnabled(enable);
  SetCSSPaintAPIArgumentsEnabled(enable);
  SetCSSPrivateEnabled(enable);
  SetCSSProgressNotationNoClampEnabled(enable);
  SetCSSPseudoElementScrollButtonEnabled(enable);
  SetCSSPseudoElementSelectorTextEnabled(enable);
  SetCSSPseudoHasSlottedEnabled(enable);
  SetCSSScopeImportEnabled(enable);
  SetCSSScrollSnapEventConstructorExposedEnabled(enable);
  SetCSSScrollTargetGroupAriaCurrentEnabled(enable);
  SetCSSStyleSheetInitBaseURLEnabled(enable);
  SetCSSTextAlignMatchParentEnabled(enable);
  SetCSSTextDecorationSkipSpacesEnabled(enable);
  SetCSSTextTransformFullSizeKanaEnabled(enable);
  SetCSSTextTransformFullWidthEnabled(enable);
  SetCSSTextTransformMultiKeywordEnabled(enable);
  SetCSSTimelineScopeAllEnabled(enable);
  SetCSSTimelineScopeGlobalEnabled(enable);
  SetCSSTreeScopedScrollTimelineEnabled(enable);
  SetCSSVideoDynamicRangeMediaQueriesEnabled(enable);
  SetCSSViewTransitionAutoNameEnabled(enable);
  SetCustomizableComboboxEnabled(enable);
  SetCustomizableSelectMultiplePopupEnabled(enable);
  SetCustomizableSelectNewUAStylesEnabled(enable);
  SetDeclarativeCSSModulesEnabled(enable);
  SetDeclarativeCSSModulesStyleTagEnabled(enable);
  SetDeclarativeFragmentEnabled(enable);
  SetDeclarativePerformanceObserverEnabled(enable);
  SetDeclarativeWebMCPEnabled(enable);
  SetDesktopCaptureDisableLocalEchoControlEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsOnMoveEnabled(enable);
  SetDeviceBoundSessionJsApiEnabled(enable);
  SetDialogCloseWhenOpenRemovedEnabled(enable);
  SetDialogNewFocusBehaviorEnabled(enable);
  SetDigitalCredentialsProtocolFilterEnabled(enable);
  SetDisableEllipsisWhenScrolledEnabled(enable);
  SetDispatchWorkerCSPViolationEventForModuleGraphFetchingEnabled(enable);
  SetDisplayContentsFocusableEnabled(enable);
  SetDocumentIsolationPolicyEnabled(enable);
  SetDocumentOpenOriginAliasRemovalEnabled(enable);
  SetDocumentPolicyDocumentDomainEnabled(enable);
  SetDocumentPolicyInDedicatedWorkerEnabled(enable);
  SetDocumentPolicyJSProfilingModeEnabled(enable);
  SetDocumentPolicyNegotiationEnabled(enable);
  SetDocumentPolicyNetworkEfficiencyGuardrailsEnabled(enable);
  SetDocumentPolicySyncXHREnabled(enable);
  SetElementInternalsBehaviorsEnabled(enable);
  SetEmailVerificationProtocolEnabled(enable);
  SetEntropyIgnoredForFirstVideoFrameLCPEnabled(enable);
  SetEventTimingTargetSelectorEnabled(enable);
  SetEventTriggerEnabled(enable);
  SetExperimentalContentSecurityPolicyFeaturesEnabled(enable);
  SetExperimentalJSProfilerMarkersEnabled(enable);
  SetExperimentalPoliciesEnabled(enable);
  SetExtendedTextMetricsEnabled(enable);
  SetFaceDetectorEnabled(enable);
  SetFedCmActiveModeMultipleIdentityProvidersEnabled(enable);
  SetFetchRetryEnabled(enable);
  SetFileSystemAccessAPIExperimentalEnabled(enable);
  SetFileSystemObserverUnobserveEnabled(enable);
  SetFilterableSelectEnabled(enable);
  SetFocusgroupV2Enabled(enable);
  SetFocusResetEventEnabled(enable);
  SetFractionalScrollOffsetsEnabled(enable);
  SetFreezeFramesOnVisibilityEnabled(enable);
  SetGamepadButtonTypesEnabled(enable);
  SetGamepadMultitouchEnabled(enable);
  SetGamepadRawInputChangeEventEnabled(enable);
  SetGeometryUtilsEnabled(enable);
  SetGeometryUtilsForCSSPseudoElementEnabled(enable);
  SetGetDisplayMediaRequiresUserActivationEnabled(enable);
  SetGlobalPrivacyControlApiEnabled(enable);
  SetHeadingOffsetEnabled(enable);
  SetHstsTopLevelNavigationsOnlyEnabled(enable);
  SetHTMLCommandForScrollCommandsEnabled(enable);
  SetHTMLElementScrollParentEnabled(enable);
  SetHTMLInterestForInterestButtonPseudoEnabled(enable);
  SetHTMLSwitchAttributeEnabled(enable);
  SetICUCapitalizationEnabled(enable);
  SetInlineScriptCacheHintEnabled(enable);
  SetInnerHTMLParserFastpathLogFailureEnabled(enable);
  SetInputInSelectEnabled(enable);
  SetInputTypeColorEnhancementsEnabled(enable);
  SetInvertedColorsEnabled(enable);
  SetJavaScriptCompileHintsPerFunctionMagicRuntimeEnabled(enable);
  SetKeyboardAccessibleTooltipEnabled(enable);
  SetLocalNetworkAccessWebSocketsTargetAddressSpaceEnabled(enable);
  SetLoginElementEnabled(enable);
  SetMediaCapabilitiesEncodingInfoEnabled(enable);
  SetMediaCaptureBackgroundBlurEnabled(enable);
  SetMediaCaptureCameraControlsEnabled(enable);
  SetMediaCaptureConfigurationChangeEnabled(enable);
  SetMediaCaptureVoiceIsolationEnabled(enable);
  SetMediaElementMutedDefaultStateEnabled(enable);
  SetMediaSourceExperimentalEnabled(enable);
  SetMediaSourceExtensionsForWebCodecsEnabled(enable);
  SetMemoryConsumerForNGShapeCacheEnabled(enable);
  SetMenuElementsEnabled(enable);
  SetNavigateEventDeferCrossDocumentCommitEnabled(enable);
  SetNavigationTypeAndPhaseEnabled(enable);
  SetNoSynchronousThrowForCrossOriginBlockedWorkerEnabled(enable);
  SetNotificationTriggersEnabled(enable);
  SetOriginPolicyEnabled(enable);
  SetOverscrollAreasEnabled(enable);
  SetPaintTimingContentImagePseudoElementsEnabled(enable);
  SetPaymentAppEnabled(enable);
  SetPaymentRequestEnabled(enable);
  SetPerformanceMarkCustomUserTimingFromSubframeEnabled(enable);
  SetPerformanceMarkFeatureUsageEnabled(enable);
  SetPerMethodCanMakePaymentQuotaEnabled(enable);
  SetPermissionsPolicyAPIEnabled(enable);
  SetPermissionsPolicyForSharedWorkersEnabled(enable);
  SetPermissionsRequestRevokeEnabled(enable);
  SetPreferredAudioOutputDevicesEnabled(enable);
  SetPrefersReducedDataEnabled(enable);
  SetPrefetchAndPrerenderActivationBeaconEnabled(enable);
  SetPrerenderUntilScriptEnabled(enable);
  SetPrivateNetworkAccessNullIpAddressEnabled(enable);
  SetProfilerAPIForDedicatedWorkerEnabled(enable);
  SetPseudoElementsHoverableEnabled(enable);
  SetPushMessagingSubscriptionChangeEnabled(enable);
  SetRelOpenerBcgDependencyHintEnabled(enable);
  SetReplacedNormalFlowStackingInlinePaintEnabled(enable);
  SetResourceTimingInitiatorEnabled(enable);
  SetRestrictGamepadAccessEnabled(enable);
  SetRouteMatchingEnabled(enable);
  SetRtcAudioJitterBufferMaxPacketsEnabled(enable);
  SetRTCDataChannelPriorityEnabled(enable);
  SetRTCEncodedAudioFrameConstructorEnabled(enable);
  SetRTCEncodedFrameSetMetadataEnabled(enable);
  SetRTCEncodedSourceEnabled(enable);
  SetRTCEncodedVideoFrameAdditionalMetadataEnabled(enable);
  SetRTCEncodedVideoFrameConstructorEnabled(enable);
  SetRTCLegacyCallbackBasedGetStatsEnabled(enable);
  SetRTCLegacyDiagnosticLoggingEnabled(enable);
  SetRtcRtpHeaderEncryptionPolicyEnabled(enable);
  SetRTCStatsRelativePacketArrivalDelayEnabled(enable);
  SetScreenDetailedHdrHeadroomEnabled(enable);
  SetScrollIntoViewAlignAutoEnabled(enable);
  SetScrollTimelineCurrentTimeEnabled(enable);
  SetSelectedcontentelementAttributeEnabled(enable);
  SetSelectedcontentMultipleEnabled(enable);
  SetSelectionAndFocusedVisiblePositionMatchEnabled(enable);
  SetSelectionSetBaseAndExtentNonNullNodeEnabled(enable);
  SetSensorExtraClassesEnabled(enable);
  SetSerializeInvalidSelectorsInForgivingSelectorListEnabled(enable);
  SetServiceWorkerClientLifecycleStateEnabled(enable);
  SetSetSequentialFocusStartingPointEnabled(enable);
  SetSignatureBasedInlineIntegrityEnabled(enable);
  SetSingleAxisScrollContainersForScrollSnapEnabled(enable);
  SetSkipCallbacksWhenDevToolsNotOpenEnabled(enable);
  SetSpeakerSelectionEnabled(enable);
  SetSpecCompliantXmlMimeTypesEnabled(enable);
  SetSpeculationMeasurementEnabled(enable);
  SetSpeculationRulesModerateViewportHeuristicsControlEnabled(enable);
  SetSpellCheckCustomDictionaryAPIEnabled(enable);
  SetSplitQualifiedNameOnFirstColonEnabled(enable);
  SetSrcsetTwoDimensionalSizesEnabled(enable);
  SetStorageBucketsDurabilityEnabled(enable);
  SetStorageBucketsLocksEnabled(enable);
  SetStrictMimeTypesForWorkersEnabled(enable);
  SetSvgCss3dTransformsEnabled(enable);
  SetSVGEmbeddedAsReplacedElementEnabled(enable);
  SetSvgHyperlinkElementUtilsEnabled(enable);
  SetSVGPathDataAPIEnabled(enable);
  SetSvgPathLengthCssPropertyEnabled(enable);
  SetSvgSizingWithPreserveAspectRatioNoneEnabled(enable);
  SetSvgSupportMediaFragmentsEnabled(enable);
  SetSynthesizedKeyboardEventsForAccessibilityActionsEnabled(enable);
  SetSyntheticMouseHoverOverInactivePageEnabled(enable);
  SetSystemWakeLockEnabled(enable);
  SetTextDetectorEnabled(enable);
  SetTextEmphasisPositionAutoEnabled(enable);
  SetTextFragmentAPIEnabled(enable);
  SetTimestampBasedCLSTrackingEnabled(enable);
  SetTimeZoneChangeEventEnabled(enable);
  SetTrackAnimatedSourcesForInheritedPropertiesEnabled(enable);
  SetTrustedTypesFromLiteralEnabled(enable);
  SetTrustedTypesUseCodeLikeEnabled(enable);
  SetTwoPhaseViewTransitionEnabled(enable);
  SetUnclosedFormControlIsInvalidEnabled(enable);
  SetURLPatternCompareComponentEnabled(enable);
  SetURLPatternGenerateEnabled(enable);
  SetUserDefinedEntryPointTimingEnabled(enable);
  SetVideoFrameMetadataBackgroundBlurEnabled(enable);
  SetWebAppScopeExtensionsEnabled(enable);
  SetWebAppTranslationsEnabled(enable);
  SetWebAssemblyCustomDescriptorsV2Enabled(enable);
  SetWebAssemblyJSPromiseIntegrationEnabled(enable);
  SetWebAuthenticationAmbientEnabled(enable);
  SetWebAuthenticationAttestationFormatsEnabled(enable);
  SetWebAuthenticationCmtgKeyEnabled(enable);
  SetWebBluetoothGetDevicesEnabled(enable);
  SetWebBluetoothScanningEnabled(enable);
  SetWebBluetoothWatchAdvertisementsEnabled(enable);
  SetWebCodecsVideoEncoderBuffersEnabled(enable);
  SetWebGLDeveloperExtensionsEnabled(enable);
  SetWebGLToneMappingEnabled(enable);
  SetWebGPUExperimentalFeaturesEnabled(enable);
  SetWebGPUExperimentalResourceTableEnabled(enable);
  SetWebGPUExternalImageHDRHeadroomEnabled(enable);
  SetWebGPUMapSyncOnWorkersEnabled(enable);
  SetWebGPUMultithreadDawnWireOnWorkersEnabled(enable);
  SetWebHapticsEnabled(enable);
  SetWebMCPEnabled(enable);
  SetWebMCPContinuationsEnabled(enable);
  SetWebMCPFormAssociatedCustomElementsEnabled(enable);
  SetWebPreferencesEnabled(enable);
  SetWebRtcSctpSnapEnabled(enable);
  SetWebSocketOptionBagEnabled(enable);
  SetWebSocketStreamStandardBinaryChunkTypeEnabled(enable);
  SetWebSpeechTimestampsEnabled(enable);
  SetWebTransportCongestionControlEnabled(enable);
  SetWebTransportDatagramsReadableTypeEnabled(enable);
  SetWebTransportDatagramsWritableEnabled(enable);
  SetWebTransportExportKeyingMaterialEnabled(enable);
  SetWebTransportReceiveStreamEnabled(enable);
  SetWebTransportSendGroupEnabled(enable);
  SetWebTransportStatsEnabled(enable);
  SetWebUIBundledCodeCacheAsyncFetchEnabled(enable);
  SetWebVTTLineAndPositionAlignmentEnabled(enable);
  SetWebVTTRegionsEnabled(enable);
  SetWebXRFrameRateEnabled(enable);
  SetWebXRFrontFacingEnabled(enable);
  SetWebXRGPUBindingEnabled(enable);
  SetWebXRHitTestEntityTypesEnabled(enable);
  SetWebXRImageTrackingEnabled(enable);
  SetWebXRLayersCommonEnabled(enable);
  SetWebXRMediaBindingEnabled(enable);
  SetWebXRMeshDetectionEnabled(enable);
  SetWebXRPoseMotionDataEnabled(enable);
  SetWebXRSpecParityEnabled(enable);
  SetXMLParsingRustEnabled(enable);
  SetXMLRustForNonXsltEnabled(enable);
  SetXMLViewerForIframesEnabled(enable);

  // Platform-dependent features
#if BUILDFLAG(IS_ANDROID)
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetElementCaptureEnabled(enable);
  SetGetDisplayMediaEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetRegionCaptureEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
#endif

#if BUILDFLAG(IS_WIN)
  SetAIDecisionModelAPIEnabled(enable);
  SetAIPromptAPIParamsEnabled(enable);
  SetAIPromptAPIToolUseEnabled(enable);
  SetAIProofreadingAPIEnabled(enable);
  SetAIRewriterAPIEnabled(enable);
  SetAISummarizationPerformancePreferenceEnabled(enable);
  SetAIWriterAPIEnabled(enable);
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
#endif

#if BUILDFLAG(IS_CHROMEOS)
  SetAIDecisionModelAPIEnabled(enable);
  SetAIPromptAPIParamsEnabled(enable);
  SetAIPromptAPIToolUseEnabled(enable);
  SetAIProofreadingAPIEnabled(enable);
  SetAIRewriterAPIEnabled(enable);
  SetAISummarizationPerformancePreferenceEnabled(enable);
  SetAIWriterAPIEnabled(enable);
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetFileSystemAccessGetCloudIdentifiersEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetSetShapeEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
  SetWebSpeechRecognitionContextEnabled(enable);
#endif

#if BUILDFLAG(IS_MAC)
  SetAIDecisionModelAPIEnabled(enable);
  SetAIPromptAPIParamsEnabled(enable);
  SetAIPromptAPIToolUseEnabled(enable);
  SetAIProofreadingAPIEnabled(enable);
  SetAIRewriterAPIEnabled(enable);
  SetAISummarizationPerformancePreferenceEnabled(enable);
  SetAIWriterAPIEnabled(enable);
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
#endif

#if BUILDFLAG(IS_LINUX)
  SetAIDecisionModelAPIEnabled(enable);
  SetAIPromptAPIParamsEnabled(enable);
  SetAIPromptAPIToolUseEnabled(enable);
  SetAIProofreadingAPIEnabled(enable);
  SetAIRewriterAPIEnabled(enable);
  SetAISummarizationPerformancePreferenceEnabled(enable);
  SetAIWriterAPIEnabled(enable);
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
  SetWebBluetoothEnabled(enable);
#endif

#if BUILDFLAG(IS_IOS)
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
#endif

#if BUILDFLAG(IS_FUCHSIA)
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
  SetWebBluetoothEnabled(enable);
#endif

  // Default values for platforms not specifically handled above
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX) && !BUILDFLAG(IS_IOS) && !BUILDFLAG(IS_FUCHSIA)
  SetApproximateGeolocationWebVisibleAPIEnabled(enable);
  SetContentIndexEnabled(enable);
  SetCSSAccentColorKeywordEnabled(enable);
  SetCSSSystemAccentColorEnabled(enable);
  SetDesktopPWAsAdditionalWindowingControlsEnabled(enable);
  SetDeviceAttributesEnabled(enable);
  SetHandwritingRecognitionEnabled(enable);
  SetMediaStreamTrackWebSpeechEnabled(enable);
  SetNetInfoDownlinkMaxEnabled(enable);
  SetRemotePlaybackBackendEnabled(enable);
  SetSerialPortConnectedEnabled(enable);
  SetWebAppTabStripEnabled(enable);
  SetWebAppTabStripCustomizationsEnabled(enable);
  SetWebAuthenticationCrossDeviceFallbackUrlEnabled(enable);
  SetWebBluetoothEnabled(enable);
#endif
}

void RuntimeEnabledFeaturesBase::SetTestFeaturesEnabled(bool enable) {
  SetAccessibilityCustomElementRoleNoneEnabled(enable);
  SetAccessibilityExposeDisplayNoneEnabled(enable);
  SetAdTaggingEnabled(enable);
  SetAIDecisionModelAPIForWorkersEnabled(enable);
  SetAIEmbeddingsAPIEnabled(enable);
  SetAIEmbeddingsAPIForWorkersEnabled(enable);
  SetAIPageContentCheckGeometryEnabled(enable);
  SetAutofillEnabled(enable);
  SetBoxDecorationBreakCloneLineBreakingEnabled(enable);
  SetCanvas2dMeshEnabled(enable);
  SetCoepReflectionEnabled(enable);
  SetConstructableStylesheetCacheEnabled(enable);
  SetCSSArgumentGrammarEnabled(enable);
  SetCSSAtRuleCounterStyleSpeakAsDescriptorEnabled(enable);
  SetCSSCaseSensitiveSelectorEnabled(enable);
  SetCSSCustomMediaEnabled(enable);
  SetCSSHangingPunctuationEnabled(enable);
  SetCSSIdentFunctionEnabled(enable);
  SetCSSImageAnimationEnabled(enable);
  SetCSSLineClampAsShorthandEnabled(enable);
  SetCssMaxContentSizingEnabled(enable);
  SetCSSPositionStickyStaticScrollPositionEnabled(enable);
  SetCSSRandomFunctionTypedOMEnabled(enable);
  SetCSSScrollSnapStopBeforeEnabled(enable);
  SetCSSTextSpacingEnabled(enable);
  SetCSSUserSelectContainEnabled(enable);
  SetDeclarativeSkeletonsEnabled(enable);
  SetDragAndDropDownloadURLListEnabled(enable);
  SetDragAndDropJSFileObjectsEnabled(enable);
  SetEditContextAssignmentAsPerSpecEnabled(enable);
  SetEditContextHandleTextOrSelectionUpdateDuringCompositionEnabled(enable);
  SetEditingUseDomPositionApiEnabled(enable);
  SetElementMatchContainerEnabled(enable);
  SetFedCmAutofillEnabled(enable);
  SetFedCmDelegationEnabled(enable);
  SetFedCmIdentityHandlerEnabled(enable);
  SetFedCmIdPRegistrationEnabled(enable);
  SetFedCmLightweightModeEnabled(enable);
  SetFledgeAuctionDealSupportEnabled(enable);
  SetFledgeClickinessEnabled(enable);
  SetFledgePrivateModelTrainingEnabled(enable);
  SetFledgeSellerScriptExecutionModeEnabled(enable);
  SetFledgeTrustedSignalsKVv1CreativeScanningEnabled(enable);
  SetFledgeTrustedSignalsKVv2ContextualDataEnabled(enable);
  SetGroupEffectEnabled(enable);
  SetHarfRustShapingEnabled(enable);
  SetHTMLAreaHreflangTypeEnabled(enable);
  SetHTMLCommandActionsV2Enabled(enable);
  SetHTMLParserYieldByUserTimingEnabled(enable);
  SetIncrementalFontTransferEnabled(enable);
  SetInlineContainingBlockSkipOpaqueEnabled(enable);
  SetLockedModeEnabled(enable);
  SetLongAnimationFrameSourceLineColumnEnabled(enable);
  SetLongAnimationFrameSourceLineColumnInterfaceEnabled(enable);
  SetLongAnimationFrameWorkerEnabled(enable);
  SetManualTextEnabled(enable);
  SetMathMLAnchorElementEnabled(enable);
  SetMediaCapabilitiesSpatialAudioEnabled(enable);
  SetMediaLatencyHintEnabled(enable);
  SetMediaStreamTrackTransferEnabled(enable);
  SetMessagePortCloseEventEnabled(enable);
  SetMiddleClickAutoscrollEnabled(enable);
  SetMojoJSEnabled(enable);
  SetMojoJSTestEnabled(enable);
  SetMonospaceGlyphCompactionEnabled(enable);
  SetNewAnimationCompositingCheckingEnabled(enable);
  SetNoFontAntialiasingEnabled(enable);
  SetNoIdleEncodingForWebTestsEnabled(enable);
  SetOmitBlurEventOnElementRemovalEnabled(enable);
  SetPrivateStateTokensAlwaysAllowIssuanceEnabled(enable);
  SetRemoveVisibleSelectionInDOMSelectionEnabled(enable);
  SetReplaceCompositionActualInsertedLengthEnabled(enable);
  SetReportFirstFrameTimeAsRenderTimeEnabled(enable);
  SetResourceTimingUseCORSForBodySizesEnabled(enable);
  SetRTCRtpTransportEnabled(enable);
  SetScrollPerformanceTimingEnabled(enable);
  SetSecurePaymentConfirmationEnabled(enable);
  SetSequentialFocusPrimitivesEnabled(enable);
  SetSequentialFocusPrimitivesShadowRootsEnabled(enable);
  SetSkipInitialForcedScrollbarEnabled(enable);
  SetSmartCardContextReleaseEnabled(enable);
  SetSvgInlineRootPixelSnappingScaleAdjustmentEnabled(enable);
  SetTableIsAutoFixedLayoutEnabled(enable);
  SetTextSpacingTrimFallback2Enabled(enable);
  SetUseOriginalDomOffsetsForOffsetMapEnabled(enable);
  SetVideoTrackGeneratorEnabled(enable);
  SetVideoTrackGeneratorInWindowEnabled(enable);
  SetViewTransitionLongCallbackTimeoutForTestingEnabled(enable);
  SetWebAuthAuthenticatorAttachmentEnabled(enable);
  SetWebMCPDeclarativeFileInputEnabled(enable);
  SetWebShareEnabled(enable);
  SetWindowOpenAlwaysOnTopEnabled(enable);
  SetWindowOpenSplitTabEnabled(enable);
  SetXMLSerializerConsistentDefaultNsDeclMatchingEnabled(enable);

  // Platform-dependent features
#if BUILDFLAG(IS_ANDROID)
  SetAriaNotifyV2Enabled(enable);
  SetFileHandlingEnabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetSmartZoomEnabled(enable);
#endif

#if BUILDFLAG(IS_WIN)
  SetAriaNotifyV2Enabled(enable);
  SetBarcodeDetectorEnabled(enable);
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetRootScrollbarFollowsBrowserThemeEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetSmartCardEnabled(enable);
  SetWebNFCEnabled(enable);
  SetWebPrintingEnabled(enable);
#endif

#if BUILDFLAG(IS_CHROMEOS)
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetWebNFCEnabled(enable);
#endif

#if BUILDFLAG(IS_MAC)
  SetAriaNotifyV2Enabled(enable);
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetNotificationContentImageEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetSmartCardEnabled(enable);
  SetWebNFCEnabled(enable);
  SetWebPrintingEnabled(enable);
#endif

#if BUILDFLAG(IS_LINUX)
  SetAriaNotifyV2Enabled(enable);
  SetBarcodeDetectorEnabled(enable);
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetRootScrollbarFollowsBrowserThemeEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetSmartCardEnabled(enable);
  SetWebNFCEnabled(enable);
  SetWebPrintingEnabled(enable);
#endif

#if BUILDFLAG(IS_IOS)
  SetBarcodeDetectorEnabled(enable);
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetInputMultipleFieldsUIEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetSmartCardEnabled(enable);
  SetWebPrintingEnabled(enable);
#endif

#if BUILDFLAG(IS_FUCHSIA)
  SetBarcodeDetectorEnabled(enable);
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetSmartCardEnabled(enable);
  SetWebNFCEnabled(enable);
  SetWebPrintingEnabled(enable);
#endif

  // Default values for platforms not specifically handled above
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX) && !BUILDFLAG(IS_IOS) && !BUILDFLAG(IS_FUCHSIA)
  SetBarcodeDetectorEnabled(enable);
  SetCapturedMouseEventsEnabled(enable);
  SetContactsManagerEnabled(enable);
  SetContactsManagerExtraPropertiesEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDigitalGoodsV2_1Enabled(enable);
  SetGetAllScreensMediaEnabled(enable);
  SetSelectAudioOutputEnabled(enable);
  SetSmartCardEnabled(enable);
  SetWebNFCEnabled(enable);
  SetWebPrintingEnabled(enable);
#endif
}


void RuntimeEnabledFeaturesBase::SetOriginTrialControlledFeaturesEnabled(bool enable) {
  SetAdInterestGroupAPIEnabled(enable);
  SetAIPromptAPIParamsEnabled(enable);
  SetAIProofreadingAPIEnabled(enable);
  SetAIRewriterAPIEnabled(enable);
  SetAIWriterAPIEnabled(enable);
  SetAppTitleEnabled(enable);
  SetAutofillEventEnabled(enable);
  SetBackForwardCacheExperimentHTTPHeaderEnabled(enable);
  SetBackForwardCacheNotRestoredReasonsEnabled(enable);
  SetBackgroundPageFreezeOptOutEnabled(enable);
  SetBlockingFocusWithoutUserActivationEnabled(enable);
  SetCacheStorageCodeCacheHintEnabled(enable);
  SetCanvas2dMeshEnabled(enable);
  SetCanvasDrawElementEnabled(enable);
  SetConnectionAllowlistEmbeddedEnforcementEnabled(enable);
  SetContainerTimingEnabled(enable);
  SetCoopRestrictPropertiesEnabled(enable);
  SetCpuPerformanceEnabled(enable);
  SetCrashReportingStorageAPIEnabled(enable);
  SetCSPHashesV1Enabled(enable);
  SetDeclarativeCSSModulesEnabled(enable);
  SetDeclarativePerformanceObserverEnabled(enable);
  SetDeclarativeWebMCPEnabled(enable);
  SetDeprecateUnloadOptOutEnabled(enable);
  SetDigitalGoodsEnabled(enable);
  SetDisableDifferentOriginSubframeDialogSuppressionEnabled(enable);
  SetDocumentIsolationPolicyEnabled(enable);
  SetDocumentPolicyNegotiationEnabled(enable);
  SetEmailVerificationProtocolEnabled(enable);
  SetExperimentalJSProfilerMarkersEnabled(enable);
  SetExtendedTextMetricsEnabled(enable);
  SetFedCmActiveModeMultipleIdentityProvidersEnabled(enable);
  SetFedCmMultipleIdentityProvidersEnabled(enable);
  SetFetchRetryEnabled(enable);
  SetFledgeBiddingAndAuctionServerAPIEnabled(enable);
  SetGamepadRawInputChangeEventEnabled(enable);
  SetHrefTranslateEnabled(enable);
  SetIncomingCallNotificationsEnabled(enable);
  SetJavaScriptCompileHintsPerFunctionMagicRuntimeEnabled(enable);
  SetLocalNetworkAccessForWebRTCOptOutEnabled(enable);
  SetMediaCaptureBackgroundBlurEnabled(enable);
  SetMediaCaptureConfigurationChangeEnabled(enable);
  SetMediaSourceExtensionsForWebCodecsEnabled(enable);
  SetNotificationTriggersEnabled(enable);
  SetOriginTrialsSampleAPIEnabled(enable);
  SetOriginTrialsSampleAPIBrowserReadWriteEnabled(enable);
  SetOriginTrialsSampleAPIDependentEnabled(enable);
  SetOriginTrialsSampleAPIDeprecationEnabled(enable);
  SetOriginTrialsSampleAPIExpiryGracePeriodEnabled(enable);
  SetOriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled(enable);
  SetOriginTrialsSampleAPIImpliedEnabled(enable);
  SetOriginTrialsSampleAPIInvalidOSEnabled(enable);
  SetOriginTrialsSampleAPINavigationEnabled(enable);
  SetOriginTrialsSampleAPIPersistentExpiryGracePeriodEnabled(enable);
  SetOriginTrialsSampleAPIPersistentFeatureEnabled(enable);
  SetOriginTrialsSampleAPIPersistentInvalidOSEnabled(enable);
  SetOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled(enable);
  SetOriginTrialsSampleAPIThirdPartyEnabled(enable);
  SetOverscrollAreasEnabled(enable);
  SetParakeetEnabled(enable);
  SetPerMethodCanMakePaymentQuotaEnabled(enable);
  SetPNaClEnabled(enable);
  SetPreferredAudioOutputDevicesEnabled(enable);
  SetPrefetchAndPrerenderActivationBeaconEnabled(enable);
  SetPrerender2CrossOriginIframesEnabled(enable);
  SetPrerenderActivationByFormSubmissionEnabled(enable);
  SetPrerenderUntilScriptEnabled(enable);
  SetRtcAudioJitterBufferMaxPacketsEnabled(enable);
  SetRTCDiagnosticLoggingEnabled(enable);
  SetRTCEncodedFrameSetMetadataEnabled(enable);
  SetRTCLegacyCallbackBasedGetStatsEnabled(enable);
  SetRTCLegacyDiagnosticLoggingEnabled(enable);
  SetRTCStatsRelativePacketArrivalDelayEnabled(enable);
  SetSecurePaymentConfirmationOptOutEnabled(enable);
  SetShadowRootAdoptedStyleSheetEnabled(enable);
  SetShadowRootReferenceTargetEnabled(enable);
  SetSharedWorkerExtendedLifetimeEnabled(enable);
  SetSpeculationMeasurementEnabled(enable);
  SetSpeculationRulesModerateViewportHeuristicsControlEnabled(enable);
  SetStandardizedBrowserZoomOptOutEnabled(enable);
  SetTestFeatureForBrowserProcessReadWriteAccessOriginTrialEnabled(enable);
  SetTextFragmentIdentifiersEnabled(enable);
  SetTouchEventFeatureDetectionEnabled(enable);
  SetUAImageReplacementAPIEnabled(enable);
  SetUnrestrictedSharedArrayBufferEnabled(enable);
  SetUserMediaElementLegacyEnabled(enable);
  SetWebAppScopeExtensionsEnabled(enable);
  SetWebAssemblyCustomDescriptorsV2Enabled(enable);
  SetWebAssemblyJSPromiseIntegrationEnabled(enable);
  SetWebAudioConfigurableRenderQuantumEnabled(enable);
  SetWebAuthenticationAttestationFormatsEnabled(enable);
  SetWebMCPEnabled(enable);
  SetWebRtcSctpSnapEnabled(enable);
  SetWebTransportCustomCertificatesEnabled(enable);
  SetWebXRImageTrackingEnabled(enable);
  SetWebXRPlaneDetectionEnabled(enable);
  SetXSLTEnabled(enable);
}

namespace {

// All feature names, sorted by name and concatenated into a single
// NUL-separated string pool. The lookup tables below hold offsets into this
// pool rather than `const char*`, which avoids a relocation per feature and
// shrinks each entry to two bytes.
constexpr char kFeatureNamePool[] =
    "AIDecisionModelAPI\0"
    "AIDecisionModelAPIForWorkers\0"
    "AIEmbeddingsAPI\0"
    "AIEmbeddingsAPIForWorkers\0"
    "AIPageContentAnchoredFixedOffscreenNonActionability\0"
    "AIPageContentAnchoredNonFixedOffscreenNonActionability\0"
    "AIPageContentBuildOnLoadForTesting\0"
    "AIPageContentCheckGeometry\0"
    "AIPageContentConvertNodeTextToUtf8\0"
    "AIPageContentElementCSSRedaction\0"
    "AIPageContentIncludeMathML\0"
    "AIPageContentIncludeSVGSubtree\0"
    "AIPageContentLabelExpandFallbackSources\0"
    "AIPageContentLabelRemoveRedundant\0"
    "AIPageContentLabelRemoveRedundantWholeWordMatching\0"
    "AIPageContentOuterBoxMapToAncestorSpace\0"
    "AIPageContentPaidContentAnnotation\0"
    "AIPageContentSkipUnclickableFixedOverlays\0"
    "AIPageContentTrackedElementsIframe\0"
    "AIPageContentTrackedElementsPassword\0"
    "AIPageContentVisualViewportClamp\0"
    "AIPromptAPI\0"
    "AIPromptAPIForWorkers\0"
    "AIPromptAPILegacyIdentifiers\0"
    "AIPromptAPILegacyParams\0"
    "AIPromptAPIMultimodalInput\0"
    "AIPromptAPIParams\0"
    "AIPromptAPIStructuredOutput\0"
    "AIPromptAPIToolUse\0"
    "AIProofreadingAPI\0"
    "AIRewriterAPI\0"
    "AIRewriterAPIForWorkers\0"
    "AISummarizationAPI\0"
    "AISummarizationAPIForWorkers\0"
    "AISummarizationPerformancePreference\0"
    "AIWriterAPI\0"
    "AIWriterAPIForWorkers\0"
    "AOMAriaRelationshipProperties\0"
    "AOMAriaRelationshipPropertiesAriaOwns\0"
    "AboutBlankPageRespectsDarkModeOnUserAction\0"
    "Accelerated2dCanvas\0"
    "AcceleratedSmallCanvases\0"
    "AccessKeyLabel\0"
    "AccessibilityCheckIfcInPreviousTextOnLine\0"
    "AccessibilityCustomElementRoleNone\0"
    "AccessibilityExposeDisplayNone\0"
    "AccessibilityImplicitActions\0"
    "AccessibilityMinRoleTabbable\0"
    "AccessibilityOSLevelBoldText\0"
    "AccessibilityProhibitedNames\0"
    "AccessibilitySerializationSizeMetrics\0"
    "AccessibilityUseAXPositionForDocumentMarkers\0"
    "AdInterestGroupAPI\0"
    "AdTagging\0"
    "AddressSpace\0"
    "AdjustEndOfNextParagraphIfMovedParagraphIsUpdated\0"
    "AlignZoomToCenter\0"
    "AllowContentInitiatedDataUrlNavigations\0"
    "AllowPreloadingWithCSPMetaTag\0"
    "AllowSvgUseToReferenceExternalDocumentRoot\0"
    "AllowSyntheticTimingForCanvasCapture\0"
    "AllowURNsInIframes\0"
    "AncestorOriginsStoredOnDocument\0"
    "AnchorPositionAdjustmentWithoutOverflow\0"
    "AndroidDownloadableFontsMatching\0"
    "AnimationEventAnimation\0"
    "AnimationProgressAPI\0"
    "AnimationRangeRejectRelativeLengths\0"
    "AnimationTrigger\0"
    "AnimationWorklet\0"
    "AnnotationSpaceForMultiCol\0"
    "AnnotationSpaceOnStart\0"
    "AnonymousIframe\0"
    "AppTitle\0"
    "AppearanceBase\0"
    "AppearanceDisplayAdjustmentForWidgetsOnly\0"
    "ApproximateGeolocationPermission\0"
    "ApproximateGeolocationPermissionAPI\0"
    "ApproximateGeolocationPermissionAccuracyMode\0"
    "ApproximateGeolocationWebVisibleAPI\0"
    "AriaActions\0"
    "AriaNotify\0"
    "AriaNotifyV2\0"
    "AriaRowColIndexText\0"
    "AttributionReporting\0"
    "AudioContextAsyncStateTransitions\0"
    "AudioContextPlaybackStats\0"
    "AudioContextSetSinkId\0"
    "AudioOutputDevices\0"
    "AudioVideoTracks\0"
    "AudioWorkletSharedPort\0"
    "AuthorSpecifiedLayoutScrollSnapBehavior\0"
    "AutoDarkMode\0"
    "AutoDarkModeSVGSizeThreshold\0"
    "AutoDarkModeSkipImages\0"
    "AutoPictureInPictureVideoHeuristics\0"
    "AutoSizeUsesScrollWidthForOverflow\0"
    "Autofill\0"
    "AutofillEvent\0"
    "AutofillPreviewGenericFontFamily\0"
    "AutofillPreviewIgnoreAuthorFont\0"
    "AutomationControlled\0"
    "AvoidEmbeddedContentViewLocation\0"
    "AvoidNonSelectableSelectionBoundary\0"
    "AvoidSynchronousBlurOnDisabledAttributeChange\0"
    "BackForwardCache\0"
    "BackForwardCacheExperimentHTTPHeader\0"
    "BackForwardCacheNotRestoredReasons\0"
    "BackForwardCacheRestorationPerformanceEntry\0"
    "BackForwardCacheUpdateNotRestoredReasonsName\0"
    "BackfaceVisibilityInterop\0"
    "BackgroundClipTextDecoration\0"
    "BackgroundFetch\0"
    "BackgroundPageFreezeOptOut\0"
    "BarcodeDetector\0"
    "BaseAppearanceInlineSizing\0"
    "BasicShapeCornerRadius\0"
    "BidiCaretAffinity\0"
    "BidiVisualOrderCaretMovement\0"
    "BlinkExtensionWebView\0"
    "BlinkExtensionWebViewMediaIntegrity\0"
    "BlinkGeometryMapperViewportFastPath\0"
    "BlinkLifecycleScriptForbidden\0"
    "BlinkRuntimeCallStats\0"
    "BlobBytes\0"
    "BlockSelectPopupUnfocusedWindow\0"
    "BlockingFocusWithoutUserActivation\0"
    "BoundaryEventDispatchTracksNodeRemoval\0"
    "BoxDecorationBreakCloneLineBreaking\0"
    "BraveGlobalPrivacyControl\0"
    "BraveIsInTorContext\0"
    "BrowserInitiatedAutomaticPictureInPicture\0"
    "BufferedBytesConsumerLimitSize\0"
    "BypassPepcSecurityForTesting\0"
    "CCTNewRFMPushBehavior\0"
    "CDTNewCrossOriginHandling\0"
    "CDTNewDestination\0"
    "CDTNewReferrerAndReferrerPolicyHandling\0"
    "CSPHashesV1\0"
    "CSPReportHash\0"
    "CSSAccentColorKeyword\0"
    "CSSActiveCaptionMapsToCanvas\0"
    "CSSAlphaColorFunction\0"
    "CSSAlphaColorFunctionRequiresAlpha\0"
    "CSSAltCounter\0"
    "CSSAnimationIterationComposite\0"
    "CSSArgumentGrammar\0"
    "CSSAtRuleCounterStyleImageSymbols\0"
    "CSSAtRuleCounterStyleSpeakAsDescriptor\0"
    "CSSAttributeValueCaseSensitiveNonHTML\0"
    "CSSBackgroundClipBorderArea\0"
    "CSSBackgroundLayerCountIndependence\0"
    "CSSBorderRadiusSideShorthands\0"
    "CSSBorderShape\0"
    "CSSCalcEarlyNaNAndInfFolding\0"
    "CSSCalcSimplificationAndSerialization\0"
    "CSSCaretAnimation\0"
    "CSSCaretColorWithOptionalSecondValue\0"
    "CSSCaretShape\0"
    "CSSCaseSensitiveSelector\0"
    "CSSChUnitSpecCompliantFallback\0"
    "CSSColorTypedOM\0"
    "CSSContainerProgressNotation\0"
    "CSSContainerStyleQueriesRange\0"
    "CSSCornersShorthand\0"
    "CSSCounterResetReversed\0"
    "CSSCounterStyleSymbolsFunction\0"
    "CSSCrossFade\0"
    "CSSCustomHighlightUniversalSelector\0"
    "CSSCustomMedia\0"
    "CSSDynamicRangeLimit\0"
    "CSSEnumeratedCustomProperties\0"
    "CSSFlowStartAndEnd\0"
    "CSSFlowStartAndEndSerialization\0"
    "CSSFontFamilySerialization\0"
    "CSSFontSizeAdjust\0"
    "CSSFunctions\0"
    "CSSGridLanesLayout\0"
    "CSSHangingPunctuation\0"
    "CSSHexAlphaColor\0"
    "CSSIdentFunction\0"
    "CSSImageAnimation\0"
    "CSSImageFunction\0"
    "CSSInRangeOutOfRangeReversedRanges\0"
    "CSSInheritFunction\0"
    "CSSKeyframesRuleLength\0"
    "CSSLangExtendedRanges\0"
    "CSSLayoutAPI\0"
    "CSSLightDarkImage\0"
    "CSSLineClamp\0"
    "CSSLineClampAsShorthand\0"
    "CSSLineClampLineBreakingEllipsis\0"
    "CSSLinkParametersProperty\0"
    "CSSListCounterAccounting\0"
    "CSSLogicalCombinationPseudo\0"
    "CSSMarkerNestedPseudoElement\0"
    "CSSMediaElementPseudos\0"
    "CSSMediaProgressNotation\0"
    "CSSMixins\0"
    "CSSNestedPseudoElements\0"
    "CSSOMGetComputedStylePseudoElementRequiresColon\0"
    "CSSPaintAPIArguments\0"
    "CSSParserIgnoreCharsetForURLs\0"
    "CSSPolygonRounding\0"
    "CSSPositionStickyStaticScrollPosition\0"
    "CSSPositionVisibilityAnchorValid\0"
    "CSSPrivate\0"
    "CSSProgressNotation\0"
    "CSSProgressNotationNoClamp\0"
    "CSSPseudoColumn\0"
    "CSSPseudoElementBackdrop\0"
    "CSSPseudoElementInterface\0"
    "CSSPseudoElementScrollButton\0"
    "CSSPseudoElementSelectorText\0"
    "CSSPseudoElementViewTransitions\0"
    "CSSPseudoHasSlotted\0"
    "CSSPseudoScrollButtons\0"
    "CSSPseudoScrollMarkers\0"
    "CSSRandomFunction\0"
    "CSSRandomFunctionTypedOM\0"
    "CSSResizeAuto\0"
    "CSSRevertRule\0"
    "CSSRubyOverhang\0"
    "CSSSafePrintableInset\0"
    "CSSScopeImport\0"
    "CSSScopeifiedParentPseudoClass\0"
    "CSSScrollInitialTarget\0"
    "CSSScrollMarkerGroupModes\0"
    "CSSScrollMarkerTargetBeforeAfter\0"
    "CSSScrollSnapChangeEvent\0"
    "CSSScrollSnapChangingEvent\0"
    "CSSScrollSnapEventConstructorExposed\0"
    "CSSScrollSnapEvents\0"
    "CSSScrollSnapStopBefore\0"
    "CSSScrollSnapTypePair\0"
    "CSSScrollTargetGroup\0"
    "CSSScrollTargetGroupAriaCurrent\0"
    "CSSScrolledContainerQueries\0"
    "CSSShapeOutsidePathAndShapeSupport\0"
    "CSSShapeOutsideRectAndXywhSupport\0"
    "CSSStyleSheetInitBaseURL\0"
    "CSSSupportsAtRuleFunction\0"
    "CSSSupportsForImportRules\0"
    "CSSSupportsNamedFeatureFunction\0"
    "CSSSystemAccentColor\0"
    "CSSTextAlignMatchParent\0"
    "CSSTextDecorationInset\0"
    "CSSTextDecorationSkipInkAll\0"
    "CSSTextDecorationSkipSpaces\0"
    "CSSTextSpacing\0"
    "CSSTextTransformFullSizeKana\0"
    "CSSTextTransformFullWidth\0"
    "CSSTextTransformMultiKeyword\0"
    "CSSTimelineScopeAll\0"
    "CSSTimelineScopeGlobal\0"
    "CSSTreeScopedScrollTimeline\0"
    "CSSURLRequestModifiers\0"
    "CSSUserSelectContain\0"
    "CSSUserValidAndUserInvalidForRadio\0"
    "CSSVideoDynamicRangeMediaQueries\0"
    "CSSViewTransitionAutoName\0"
    "CSSWindowDrag\0"
    "CSSZoomAnimation\0"
    "CacheControlRFC7234Parsing\0"
    "CacheControlRFC7234ParsingMetrics\0"
    "CacheStorageCodeCacheHint\0"
    "CacheStyleAdjuster\0"
    "CameraAndMicrophoneElements\0"
    "Canvas2dCanvasFilter\0"
    "Canvas2dDeferredFlush\0"
    "Canvas2dLayers\0"
    "Canvas2dLayersWithOptions\0"
    "Canvas2dMesh\0"
    "CanvasDrawElement\0"
    "CanvasFloatingPoint\0"
    "CanvasGlobalHDRHeadroom\0"
    "CanvasGradientCSSColor4\0"
    "CanvasHDR\0"
    "CanvasTextDirectionReflect\0"
    "CanvasTextMetricsPreciseBounds\0"
    "CanvasToneMapping\0"
    "CanvasUsesArcPaintOp\0"
    "CapabilityDelegationDigitalCredentials\0"
    "CapabilityDelegationDisplayCaptureRequest\0"
    "CapabilityDelegationPopup\0"
    "CapabilityElementIconOnlyMode\0"
    "CapitalizeAfterSupplementaryCharacterFix\0"
    "CaptureController\0"
    "CaptureHandle\0"
    "CapturedMouseEvents\0"
    "CapturedSurfaceControl\0"
    "CapturedSurfaceResolution\0"
    "CaretBlinking\0"
    "CaretBrowsingSequentialFocusStartingPoint\0"
    "CaretOutsideEditableAtomicInline\0"
    "CheckCSPOnInlineScriptAttributeSet\0"
    "CheckableInputTypeLayoutInline\0"
    "ClampUnfocusedSelectionCache\0"
    "CleanUpActivationBehavior\0"
    "ClearCrossOriginRelatedTarget\0"
    "ClearCurrentTargetAfterDispatch\0"
    "ClearDisplayLockPrePaintFlags\0"
    "ClearFocusWithinOnSubtreeRemoval\0"
    "ClearTargetOnlyIfInShadowTree\0"
    "ClipElementVisibleBoundsInLocalRoot\0"
    "ClipPathNestedRasterOptimization\0"
    "ClipboardEventTargetUsesContainerNode\0"
    "ClipboardOnExtensionServiceWorker\0"
    "ClipboardPasteImageRespectBuffer\0"
    "CoalesceSelectionchangeEvent\0"
    "CoepReflection\0"
    "ColorInputAcceptsCSSColors\0"
    "ColorSpaceDisplayP3Linear\0"
    "ColorSpacePredefinedLinearSpaces\0"
    "ColorSpaceRec2100Linear\0"
    "ComposedPathReturnTargetBeingDispatched\0"
    "CompositeClipPathAnimation\0"
    "CompositeHoverStyle\0"
    "CompositedSelectionUpdate\0"
    "CompositingDecisionAtAnimationPhaseBoundaries\0"
    "CompositionForegroundMarkers\0"
    "CompositorEventTrigger\0"
    "CompositorTimelineTrigger\0"
    "CompressionDictionaryTransport\0"
    "ComputePressure\0"
    "ComputedAccessibilityInfo\0"
    "ConcurrentNativePaintWorklets\0"
    "ConditionalTracingLoAF\0"
    "ConnectionAllowlistEmbeddedEnforcement\0"
    "ConsistentFormControlPaintSnapping\0"
    "ConstructableStylesheetCache\0"
    "ContactsManager\0"
    "ContactsManagerExtraProperties\0"
    "ContainerTiming\0"
    "ContentIndex\0"
    "ContextMenu\0"
    "ControlledFrame\0"
    "ControlledFrameWebRequestSecurityInfo\0"
    "CookieStoreAPIMaxAge\0"
    "CookieStoreAPIWhitespaceStripping\0"
    "CoopRestrictProperties\0"
    "CorrectTemplateFormParsing\0"
    "CorsRFC1918\0"
    "CpuPerformance\0"
    "CrashReportingStorageAPI\0"
    "CreateInlineContentsAnonymousBlock\0"
    "CrossOriginStorage\0"
    "CssMaxContentSizing\0"
    "CssTextFit\0"
    "CssTextFitReshaping\0"
    "CustomElementsDisableFormattingFixups\0"
    "CustomScrollbarApplyMinimumThumbLength\0"
    "CustomizableCombobox\0"
    "CustomizableSelectMultiplePopup\0"
    "CustomizableSelectNewUAStyles\0"
    "DOMParserXmlScriptAlreadyStarted\0"
    "Database\0"
    "DateTimeInputTypeEarlyAdvanceFix\0"
    "DeclarativeCSSModules\0"
    "DeclarativeCSSModulesStyleTag\0"
    "DeclarativeFragment\0"
    "DeclarativePerformanceObserver\0"
    "DeclarativeSkeletons\0"
    "DeclarativeWebMCP\0"
    "DeferLineBoxHitTestToBackground\0"
    "DelegatesFocusTextControlInputFix\0"
    "DeprecateUnloadOptOut\0"
    "DesktopCaptureDisableLocalEchoControl\0"
    "DesktopPWAsAdditionalWindowingControls\0"
    "DesktopPWAsAdditionalWindowingControlsOnMove\0"
    "DeviceAttributes\0"
    "DeviceBoundSessionJsApi\0"
    "DeviceOrientationRequestPermission\0"
    "DevicePosture\0"
    "DialogCloseWhenOpenRemoved\0"
    "DialogNewFocusBehavior\0"
    "DigitalCredentialsProtocolFilter\0"
    "DigitalGoods\0"
    "DigitalGoodsV2_1\0"
    "DirectSockets\0"
    "DirectSocketsInServiceWorkers\0"
    "DirectSocketsInSharedWorkers\0"
    "DisableAnchorCenterOnAlignJustifyItems\0"
    "DisableDifferentOriginSubframeDialogSuppression\0"
    "DisableEllipsisWhenScrolled\0"
    "DisableFormControlChangeEventDuringMutation\0"
    "DisconnectWebSocketOnBFCache\0"
    "DispatchHiddenVisibilityTransitions\0"
    "DispatchSelectionchangeEventPerElement\0"
    "DispatchWorkerCSPViolationEventForModuleGraphFetching\0"
    "DisplayContentsFocusable\0"
    "DisplayCutoutAPI\0"
    "DocumentCookie\0"
    "DocumentDomain\0"
    "DocumentIsolationPolicy\0"
    "DocumentOpenIframeUnloadEvents\0"
    "DocumentOpenOriginAliasRemoval\0"
    "DocumentOpenSandboxInheritanceRemoval\0"
    "DocumentPatching\0"
    "DocumentPictureInPictureAPI\0"
    "DocumentPictureInPicturePreferInitialPlacement\0"
    "DocumentPictureInPictureUserActivation\0"
    "DocumentPolicyDocumentDomain\0"
    "DocumentPolicyExpectNoLinkedResources\0"
    "DocumentPolicyInDedicatedWorker\0"
    "DocumentPolicyIncludeJSCallStacksInCrashReports\0"
    "DocumentPolicyJSProfilingMode\0"
    "DocumentPolicyNegotiation\0"
    "DocumentPolicyNetworkEfficiencyGuardrails\0"
    "DocumentPolicySyncXHR\0"
    "DocumentWrite\0"
    "DragAndDropDownloadURLList\0"
    "DragAndDropJSFileObjects\0"
    "DragImageForLargeImages\0"
    "DragThresholdRequiresMouseMovement\0"
    "DumpForAbsentKeyframeSnapshots\0"
    "EditContextAssignmentAsPerSpec\0"
    "EditContextBoundsUpdateSchedulesFrame\0"
    "EditContextCodePointDeletion\0"
    "EditContextHandleTextOrSelectionUpdateDuringComposition\0"
    "EditContextSelectionUpdateBeforeTextUpdateEvent\0"
    "EditingUseDomPositionApi\0"
    "ElasticOverscrollBackgroundPaintLocationFix\0"
    "ElasticOverscrollUseEventDeltaForAxisSelection\0"
    "ElementCapture\0"
    "ElementInternalsBehaviors\0"
    "ElementMatchContainer\0"
    "ElementSpecificReadOnlyConstraintValidation\0"
    "EmailVerificationProtocol\0"
    "EmbeddedContentCenterAlignBaseline\0"
    "EmojiZWJVerticalOrientation\0"
    "EnableXSLTForCAPAlerts\0"
    "EndpointInclusiveCommitStyles\0"
    "EnforceAnonymityExposure\0"
    "EntropyIgnoredForFirstVideoFrameLCP\0"
    "EventPseudoTargetProperty\0"
    "EventPseudoTargetViewTransitionName\0"
    "EventTimingInteractionCount\0"
    "EventTimingMatchingHTML\0"
    "EventTimingTargetSelector\0"
    "EventTrigger\0"
    "ExperimentalContentSecurityPolicyFeatures\0"
    "ExperimentalJSProfilerMarkers\0"
    "ExperimentalMachineLearningNeuralNetwork\0"
    "ExperimentalPolicies\0"
    "ExposeCSSFontFeatureValuesRule\0"
    "ExposeRenderTimeNonTaoDelayedImage\0"
    "ExtendedTextMetrics\0"
    "ExtensionScriptTagging\0"
    "ExtensionScriptTaggingTestingAPI\0"
    "ExternalPopupMenuClickEvent\0"
    "EyeDropperAPI\0"
    "FaceDetector\0"
    "FastCompositionCharacterBounds\0"
    "FastPlainTextRangeCreateRange\0"
    "FastPositionIterator\0"
    "FedCm\0"
    "FedCmActiveModeMultipleIdentityProviders\0"
    "FedCmAutofill\0"
    "FedCmDelegation\0"
    "FedCmIdPRegistration\0"
    "FedCmIdentityHandler\0"
    "FedCmLightweightMode\0"
    "FedCmMultipleIdentityProviders\0"
    "FedCmMultipleRequests\0"
    "FedCmNavigationInterception\0"
    "FencedFrames\0"
    "FencedFramesAPIChanges\0"
    "FencedFramesLocalUnpartitionedDataAccess\0"
    "FetchBodyBytes\0"
    "FetchLaterAPI\0"
    "FetchRetry\0"
    "FetchUploadStreaming\0"
    "FileHandling\0"
    "FilePickerEventsFix\0"
    "FileSystem\0"
    "FileSystemAccess\0"
    "FileSystemAccessAPIExperimental\0"
    "FileSystemAccessGetCloudIdentifiers\0"
    "FileSystemAccessLocal\0"
    "FileSystemAccessLockingScheme\0"
    "FileSystemAccessOriginPrivate\0"
    "FileSystemAccessRevokeReadOnRemove\0"
    "FileSystemAccessWriteMode\0"
    "FileSystemObserver\0"
    "FileSystemObserverUnobserve\0"
    "FilterContainerLevelStyles\0"
    "FilterableSelect\0"
    "FilteringPrimitives\0"
    "FindBufferCollapseSkippedSpace\0"
    "FindBufferMatchAcrossIgnoredNodes\0"
    "FindBufferSkipIgnoredSubtrees\0"
    "FindFirstMisspellingEndWhenNonEditable\0"
    "FindIgnoreSuggestionFix\0"
    "FirstLetterParagraphOffsets\0"
    "FirstLineAndLetterExcludeInputTextarea\0"
    "FirstLineTextMetrics\0"
    "FixHTMLFormControlElementIsReadOnly\0"
    "FixMapElementEmptyNameBug\0"
    "FixSelectionPaintRangeNullOpt\0"
    "FixVisualRectRemoteViewportTransform\0"
    "Fledge\0"
    "FledgeAuctionDealSupport\0"
    "FledgeBiddingAndAuctionServerAPI\0"
    "FledgeBiddingAndAuctionServerAPIMultiSeller\0"
    "FledgeClickiness\0"
    "FledgeCustomMaxAuctionAdComponents\0"
    "FledgeDeprecatedRenderURLReplacements\0"
    "FledgeDirectFromSellerSignalsHeaderAdSlot\0"
    "FledgeDirectFromSellerSignalsWebBundles\0"
    "FledgeMultiBid\0"
    "FledgePrivateModelTraining\0"
    "FledgeRealTimeReporting\0"
    "FledgeSellerNonce\0"
    "FledgeSellerScriptExecutionMode\0"
    "FledgeTrustedSignalsKVv1CreativeScanning\0"
    "FledgeTrustedSignalsKVv2ContextualData\0"
    "FledgeTrustedSignalsKVv2Support\0"
    "FlexWrapBalance\0"
    "FocusResetEvent\0"
    "FocusRingRespectExplicitOutlineColorInDarkMode\0"
    "Focusgroup\0"
    "FocusgroupV2\0"
    "FontAccess\0"
    "FontDataServiceForCSSLocalFonts\0"
    "FontFamilyPostscriptMatchingCTMigration\0"
    "FontFamilyStyleMatchingCTMigration\0"
    "FontFeatureSettingsDescriptor\0"
    "FontFormatAvar2\0"
    "FontLanguageOverride\0"
    "FontMatchAliasesAsLastResort\0"
    "FontPrewarmerShutdownFallback\0"
    "FontStyleObliqueZeroDegreeAsNormal\0"
    "FontUniqueNameTypefaceCache\0"
    "FontVariableItalicAxis\0"
    "FontVariationSettingsDescriptor\0"
    "FontationsPrinting\0"
    "ForceEagerMeasureMemory\0"
    "ForceReduceMotion\0"
    "ForcedColors\0"
    "ForwardReasonToFetchBodyAbort\0"
    "FractionalScrollOffsets\0"
    "FractionalScrollOffsetsForWebAPI\0"
    "FragmentedOofInCb\0"
    "FrameCaretSkipHiddenCheck\0"
    "FreezeFramesOnVisibility\0"
    "GamepadButtonTypes\0"
    "GamepadMultitouch\0"
    "GamepadRawInputChangeEvent\0"
    "GamepadWindowEventHandlers\0"
    "GenerateDragOverlayBeforeDragStart\0"
    "GenerateXSLTWarningBanner\0"
    "GeolocationElement\0"
    "GeometryMapperSingularTransformFix\0"
    "GeometryUtils\0"
    "GeometryUtilsForCSSPseudoElement\0"
    "GetAllScreensMedia\0"
    "GetDisplayMedia\0"
    "GetDisplayMediaAudioSelection\0"
    "GetDisplayMediaRequiresUserActivation\0"
    "GetDisplayMediaWindowAudioCapture\0"
    "GetElementsByNameOnlyHTMLElements\0"
    "GetTargetRangesRetargeting\0"
    "GetUserMediaEchoCancellationModes\0"
    "GlobalPrivacyControl\0"
    "GlobalPrivacyControlApi\0"
    "GlobalPrivacyControlForce\0"
    "GraphemeClusterBoundsCheck\0"
    "GroupEffect\0"
    "HTMLAdoptionAlgorithmNewSteps\0"
    "HTMLAreaElementDisplayNone\0"
    "HTMLAreaHreflangType\0"
    "HTMLBodyMarginPixelLength\0"
    "HTMLCommandActionsV2\0"
    "HTMLCommandElementRemoval\0"
    "HTMLCommandForScrollCommands\0"
    "HTMLElementScrollParent\0"
    "HTMLInterestForInterestButtonPseudo\0"
    "HTMLLinkElementAttributeValueChanges\0"
    "HTMLParserIgnoreHeadInNoscript\0"
    "HTMLParserTruncatedMarkupDeclaration\0"
    "HTMLParserYieldAndDelayOftenForTesting\0"
    "HTMLParserYieldByUserTiming\0"
    "HTMLPrintingArtifactAnnotations\0"
    "HTMLProcessingInstruction\0"
    "HTMLSwitchAttribute\0"
    "HandleShadowDOMInSubstringUtil\0"
    "HandwritingRecognition\0"
    "HarfRustShaping\0"
    "HasUAVisualTransition\0"
    "HeadingOffset\0"
    "HideVideoControlsWhenUnneeded\0"
    "HighlightsFromPoint\0"
    "HitTestBorderRadiusForStackingContext\0"
    "HitTestContainerTransformStateForPreserve3d\0"
    "HitTestCulledInlineOfSelfPaintingChild\0"
    "HrefTranslate\0"
    "HstsTopLevelNavigationsOnly\0"
    "HyphenVerticalOrientationFix\0"
    "ICUCapitalization\0"
    "IgnoreLetterSpacingInCursiveScripts\0"
    "ImageDataPixelFormat\0"
    "ImageDocumentUseLayoutWidth\0"
    "ImageSrcsetReselection\0"
    "ImageSrcsetReselectionForSrcCandidate\0"
    "ImplicitRootScroller\0"
    "IncomingCallNotifications\0"
    "IncrementalFontTransfer\0"
    "InertElementNonEditable\0"
    "InfiniteCullRect\0"
    "InheritUserModifyWithoutContenteditable\0"
    "InitialLetterBlockPositioning\0"
    "InlineBlockLineNavigation\0"
    "InlineContainingBlockSkipOpaque\0"
    "InlineCursorSkipNonIfc\0"
    "InlineScriptCacheHint\0"
    "InnerHTMLParserFastpathLogFailure\0"
    "InputClientRectWithoutInlinePadding\0"
    "InputDisabledHandlerFix\0"
    "InputInSelect\0"
    "InputMultipleFieldsUI\0"
    "InputMultipleFieldsUIWithPointerChecks\0"
    "InputTypeColorEnhancements\0"
    "InsertBlockquoteBeforeOuterBlock\0"
    "InstallElement\0"
    "InstallOnDeviceSpeechRecognition\0"
    "InstalledApp\0"
    "IntegrityPolicyScript\0"
    "InterestEventsNonComposed\0"
    "IntersectionObserverCompositedAnimationsForceMainFrames\0"
    "InvertedColors\0"
    "InvisibleSVGAnimationThrottling\0"
    "JavaScriptCompileHintsPerFunctionMagicRuntime\0"
    "JavaScriptImportText\0"
    "JavaScriptSourcePhaseImports\0"
    "KeyboardAccessibleTooltip\0"
    "LabelInteractiveContentCheckBeforeHandler\0"
    "LangAttributeAwareFormControlUI\0"
    "LanguageDetectionAPI\0"
    "LanguageDetectionAPIForWorkers\0"
    "LayoutCloneForScrollableOverflowChange\0"
    "LayoutContainingBlockReturnsBox\0"
    "LayoutIgnoreMarginsForSticky\0"
    "LayoutOOFCollectInlinesFix\0"
    "LazyImageConformantLoadEventTiming\0"
    "LazyLoadVideoAndAudio\0"
    "LazyParseInlineStyleSheets\0"
    "LeftClickToHandleSuggestion\0"
    "LegacyAbstractRange\0"
    "LightDismissFromClick\0"
    "LineBreakAfterSpaceBeforeOpenTag\0"
    "LineBreakBidiControlEnter\0"
    "LineBreakerClearShapeResultOnOverflow\0"
    "LineBreakerHanKerningEnd\0"
    "LocalNetworkAccessForWebRTCOptOut\0"
    "LocalNetworkAccessPermissionPolicy\0"
    "LocalNetworkAccessWebRTC\0"
    "LocalNetworkAccessWebSocketsTargetAddressSpace\0"
    "LockedMode\0"
    "LoginElement\0"
    "LongAnimationFrameSourceCharPosition\0"
    "LongAnimationFrameSourceLineColumn\0"
    "LongAnimationFrameSourceLineColumnInterface\0"
    "LongAnimationFrameStyleDuration\0"
    "LongAnimationFrameWorker\0"
    "LongPressHitTestInFrame\0"
    "LongPressLinkSelectText\0"
    "LongPressReleasesActiveState\0"
    "LongTaskFromLongAnimationFrame\0"
    "MacCharacterFallbackCache\0"
    "MacDisableCtrlHomeEnd\0"
    "MacFontWeightFromOS2\0"
    "MachineLearningNeuralNetwork\0"
    "ManagedConfiguration\0"
    "ManualText\0"
    "MarginTrim\0"
    "MarkAncestorsOnDisplayLockUnlock\0"
    "MaskDeserializationTimeForCrossOriginMessages\0"
    "MaskWaitForAllImages\0"
    "MathMLAnchorElement\0"
    "MathMLOperatorRTLMirroring\0"
    "MeasureMemory\0"
    "MediaCapabilitiesEncodingInfo\0"
    "MediaCapabilitiesSpatialAudio\0"
    "MediaCaptionSettingsButton\0"
    "MediaCapture\0"
    "MediaCaptureBackgroundBlur\0"
    "MediaCaptureCameraControls\0"
    "MediaCaptureConfigurationChange\0"
    "MediaCaptureElementPreview\0"
    "MediaCaptureVoiceIsolation\0"
    "MediaControlsExpandGesture\0"
    "MediaControlsOverlayPlayButton\0"
    "MediaElementMutedDefaultState\0"
    "MediaElementVolumeGreaterThanOne\0"
    "MediaEngagementBypassAutoplayPolicies\0"
    "MediaLatencyHint\0"
    "MediaPlaybackWhileNotVisiblePermissionPolicy\0"
    "MediaQueryNavigationControls\0"
    "MediaSession\0"
    "MediaSessionChapterInformation\0"
    "MediaSourceExperimental\0"
    "MediaSourceExtensionsForWebCodecs\0"
    "MediaStreamTrackProcessorStats\0"
    "MediaStreamTrackTransfer\0"
    "MediaStreamTrackWebSpeech\0"
    "MemoryConsumerForNGShapeCache\0"
    "MenuElements\0"
    "MessagePortCloseEvent\0"
    "MiddleClickAutoscroll\0"
    "MixedContentAutoupgradesUseIsMixedContentRestrictedInFrame\0"
    "MobileLayoutTheme\0"
    "ModifyParagraphCrossEditingoundary\0"
    "ModuleMapDoNotCacheFailedFetch\0"
    "ModulePreloadReferrer\0"
    "ModulePreloadStyleJson\0"
    "MojoJS\0"
    "MojoJSTest\0"
    "MonospaceGlyphCompaction\0"
    "MoveEndingSelectionToListChild\0"
    "MoveParagraphsPreserveInlineStructure\0"
    "MulticolColumnWidthMaxContentClamp\0"
    "NastaliqScript\0"
    "NavigateEventDeferCrossDocumentCommit\0"
    "NavigationEventTiming\0"
    "NavigationSourcePseudoClass\0"
    "NavigationTimingRedirectTimingViaTAO\0"
    "NavigationTypeAndPhase\0"
    "NavigatorContentUtils\0"
    "NetInfoConstantType\0"
    "NetInfoDownlinkMax\0"
    "NeutralKeyframeEasingCompliance\0"
    "NewAnimationCompositingChecking\0"
    "NewAnimationDispositionReporting\0"
    "NewHTMLSettingMethods\0"
    "NoExtendSelectionToUserSelectNoneOutOfFlow\0"
    "NoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditable\0"
    "NoFontAntialiasing\0"
    "NoIdleEncodingForWebTests\0"
    "NoNbspForInterElementSpaceOnCopy\0"
    "NoSynchronousThrowForCrossOriginBlockedWorker\0"
    "NodeIteratorRemovalFix\0"
    "NonEmptyBlockquotesOnOutdenting\0"
    "NonEmptyVisibleTextSelectionForTextFragment\0"
    "NonStandardAppearanceValueSliderVertical\0"
    "NormalizeLineEndingsInInsertText\0"
    "NotificationConstructor\0"
    "NotificationContentImage\0"
    "NotificationTriggers\0"
    "Notifications\0"
    "NotifySelectionControllerOnUnchangedSelection\0"
    "NumberInputFullWidthChars\0"
    "OfflineAudioContextIncrementalRendering\0"
    "OffscreenCanvasGetContextAttributes\0"
    "OffsetMappingReuseFullWidthSpaceFix\0"
    "OffsetPathTransformUpdateFix\0"
    "OmitBlurEventOnElementRemoval\0"
    "OmitSubframeDetachmentEventsOnRemoval\0"
    "OnDeviceWebSpeechAvailable\0"
    "OnDeviceWebSpeechQuality\0"
    "OofLayoutRequiresSideEffects\0"
    "OpaqueRange\0"
    "OpenPopoverInvokerRestrictToSameTreeScope\0"
    "OptionDisablednessCheckAncestors\0"
    "OrientationEvent\0"
    "OriginAPI\0"
    "OriginIsolationHeader\0"
    "OriginPolicy\0"
    "OriginTrialsSampleAPI\0"
    "OriginTrialsSampleAPIBrowserReadWrite\0"
    "OriginTrialsSampleAPIDependent\0"
    "OriginTrialsSampleAPIDeprecation\0"
    "OriginTrialsSampleAPIExpiryGracePeriod\0"
    "OriginTrialsSampleAPIExpiryGracePeriodThirdParty\0"
    "OriginTrialsSampleAPIImplied\0"
    "OriginTrialsSampleAPIInvalidOS\0"
    "OriginTrialsSampleAPINavigation\0"
    "OriginTrialsSampleAPIPersistentExpiryGracePeriod\0"
    "OriginTrialsSampleAPIPersistentFeature\0"
    "OriginTrialsSampleAPIPersistentInvalidOS\0"
    "OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature\0"
    "OriginTrialsSampleAPIThirdParty\0"
    "OutlineDrawAutoStyleZeroWidth\0"
    "OverlayGlobalRuleRemoval\0"
    "OverlayProperty\0"
    "OverscrollAreas\0"
    "PNaCl\0"
    "PagePopup\0"
    "PagePopupCopyPaste\0"
    "PageSwapEvent\0"
    "PaintCaretAfterInnerEditorPaint\0"
    "PaintHoldingForIframes\0"
    "PaintTimingContentImagePseudoElements\0"
    "PaintUnderInvalidationChecking\0"
    "Parakeet\0"
    "PartitionVisitedLinkDatabaseWithSelfLinks\0"
    "PasswordReveal\0"
    "PaymentApp\0"
    "PaymentHandlerStaticCustomSize\0"
    "PaymentLinkDetection\0"
    "PaymentMethodChangeEvent\0"
    "PaymentRequest\0"
    "PaymentRequestNonFullyActiveDocumentCheckInvalidStateError\0"
    "PerMethodCanMakePaymentQuota\0"
    "PerformanceManagerInstrumentation\0"
    "PerformanceMarkCustomUserTimingFromSubframe\0"
    "PerformanceMarkFeatureUsage\0"
    "PeriodicBackgroundSync\0"
    "PermissionsPolicyAPI\0"
    "PermissionsPolicyForSharedWorkers\0"
    "PermissionsRequestRevoke\0"
    "PersistentWidgetAPI\0"
    "PointerLockOnAndroid\0"
    "PointerRawUpdateOnlyInSecureContext\0"
    "PopoverHintNestedShowException\0"
    "PopoverHintNewBehavior\0"
    "PopupWidgetRequiresUserActivation\0"
    "PositionOutsideTabSpanCheckSiblingNode\0"
    "PositionVisibilityIgnoreNonClipAncestors\0"
    "PositionVisibilitySingularValues\0"
    "PotentialPermissionsPolicyReporting\0"
    "PrePaintBoxInvalidatorUsesFragments\0"
    "PreciseMemoryInfo\0"
    "PreferDefaultScrollbarStyles\0"
    "PreferNonCompositedScrolling\0"
    "PreferredAudioOutputDevices\0"
    "PrefersReducedData\0"
    "PrefetchAndPrerenderActivationBeacon\0"
    "PreloadLinkRelDataUrls\0"
    "PreloadScannerImprovements\0"
    "Prerender2\0"
    "Prerender2CrossOriginIframes\0"
    "PrerenderActivationByFormSubmission\0"
    "PrerenderUntilScript\0"
    "Presentation\0"
    "PreserveHtmlEquivalentTagsInTypingStyle\0"
    "PreserveUnfocusedSelectionCache\0"
    "PreventTextSelectionJump\0"
    "PrivateNetworkAccessNullIpAddress\0"
    "PrivateStateTokens\0"
    "PrivateStateTokensAlwaysAllowIssuance\0"
    "ProfilerAPI\0"
    "ProfilerAPIForDedicatedWorker\0"
    "ProgrammaticScrollPromise\0"
    "ProgressEventInServiceWorker\0"
    "PropagateOverscrollBehaviorFromRoot\0"
    "PseudoElementsFocusable\0"
    "PseudoElementsHitTestable\0"
    "PseudoElementsHoverable\0"
    "PushMessageDataBytes\0"
    "PushMessaging\0"
    "PushMessagingSubscriptionChange\0"
    "QuotaExceededErrorUpdate\0"
    "RTCConfigurationIceTransports\0"
    "RTCDataChannelPriority\0"
    "RTCDiagnosticLogging\0"
    "RTCEncodedAudioFrameConstructor\0"
    "RTCEncodedFrameAudioLevel\0"
    "RTCEncodedFrameSetMetadata\0"
    "RTCEncodedFrameTimestamps\0"
    "RTCEncodedSource\0"
    "RTCEncodedVideoFrameAdditionalMetadata\0"
    "RTCEncodedVideoFrameConstructor\0"
    "RTCJitterBufferTarget\0"
    "RTCLegacyCallbackBasedGetStats\0"
    "RTCLegacyDiagnosticLogging\0"
    "RTCRtpEncodingParametersCodec\0"
    "RTCRtpScaleResolutionDownTo\0"
    "RTCRtpScriptTransform\0"
    "RTCRtpTransport\0"
    "RTCStatsRelativePacketArrivalDelay\0"
    "RTCSvcScalabilityMode\0"
    "RadioButtonCircularBorderRadius\0"
    "RangeBoundaryFastPath\0"
    "RasterInducingScroll\0"
    "RateLimitPointerLockRequests\0"
    "ReadClipboardDataOnClipboardItemGetType\0"
    "ReadOnlyTextControlSelection\0"
    "ReadableStreamBYOBReaderReadMinOption\0"
    "ReadingFlowWithSlots\0"
    "RecheckParentDuringNodeVectorInsertion\0"
    "ReduceAcceptLanguage\0"
    "ReduceUserAgentMinorVersion\0"
    "RegionCapture\0"
    "RelOpenerBcgDependencyHint\0"
    "RelatedWebsitePartitionAPI\0"
    "ReleasePaintHoldingWithoutContentfulPaint\0"
    "RemotePlayback\0"
    "RemotePlaybackBackend\0"
    "RemoveCharsetAutoDetectionForISO2022JP\0"
    "RemoveChildrenInReplaceChildren\0"
    "RemoveCollapsedPlaceholderForContentEditable\0"
    "RemoveDanglingMarkupInTarget\0"
    "RemoveDataUrlInSvgUse\0"
    "RemoveNonAllowlistedCreateEvent\0"
    "RemoveScrollNodeWorkaround\0"
    "RemoveVisibleSelectionInDOMSelection\0"
    "RenderPriorityAttribute\0"
    "ReplaceChildrenWithFragmentFastPath\0"
    "ReplaceCompositionActualInsertedLength\0"
    "ReplacedNormalFlowStackingInlinePaint\0"
    "ReportFirstFrameTimeAsRenderTime\0"
    "ReportLayoutShiftRectsInCssPixels\0"
    "RequestIsReloadNavigation\0"
    "ResourceTimingInitiator\0"
    "ResourceTimingUseCORSForBodySizes\0"
    "RespectOverscrollBehaviorForScrollBubbling\0"
    "ResponsiveIframes\0"
    "ResponsiveIframesShrink\0"
    "ResponsiveIframesSingleAxisIcb\0"
    "RestrictGamepadAccess\0"
    "RestrictOwnAudio\0"
    "RootScrollbarFollowsBrowserTheme\0"
    "RouteMatching\0"
    "RtcAlwaysNegotiateDataChannels\0"
    "RtcAudioJitterBufferMaxPackets\0"
    "RtcRtpHeaderEncryptionPolicy\0"
    "RubyTextDecorationSpacing\0"
    "RunMicrotaskBeforeXmlScript\0"
    "RunSnapshotPostLayoutStateSteps\0"
    "SVGEmbeddedAsReplacedElement\0"
    "SVGPathDataAPI\0"
    "SVGTextPathSideAttribute\0"
    "SanitizeIDNEmailFormInput\0"
    "SanitizeWorkerErrorPropagation\0"
    "SanitizerAPI\0"
    "ScopedViewTransitionSizeContainment\0"
    "ScoreLineBreakerAbort\0"
    "ScreenDetailedHdrHeadroom\0"
    "ScriptBasedOnUnicodeBlock\0"
    "ScriptedSpeechRecognition\0"
    "ScriptedSpeechSynthesis\0"
    "ScrollAnchorSerializationUseParentForTextNode\0"
    "ScrollAxisLock\0"
    "ScrollIntoViewAlignAuto\0"
    "ScrollIntoViewNearest\0"
    "ScrollIntoViewNoInitialFocusNavigationStartingPoint\0"
    "ScrollIntoViewRootFrameViewportBugFix\0"
    "ScrollPerformanceTiming\0"
    "ScrollTimelineCurrentTime\0"
    "ScrollTimelineNamedRangeScroll\0"
    "ScrollToTextFragmentDirectiveLimit\0"
    "ScrollTopLeftInterop\0"
    "ScrollVisibilityHiddenScrollers\0"
    "ScrollbarColor\0"
    "ScrollbarGutterBugFix\0"
    "ScrollbarWidth\0"
    "SearchTextHighlightPseudo\0"
    "SecurePaymentConfirmation\0"
    "SecurePaymentConfirmationAvailabilityAPI\0"
    "SecurePaymentConfirmationCapabilities\0"
    "SecurePaymentConfirmationDebug\0"
    "SecurePaymentConfirmationExtensionsDisallowForThirdParties\0"
    "SecurePaymentConfirmationOptOut\0"
    "SelectAnchorInViewport\0"
    "SelectAudioOutput\0"
    "SelectLabelClickOpensPicker\0"
    "SelectPopupBackground\0"
    "SelectRemoveOverflowHidden\0"
    "SelectUsesFlatTree\0"
    "SelectedcontentMultiple\0"
    "SelectedcontentSpec2\0"
    "SelectedcontentelementAttribute\0"
    "SelectionAndFocusedVisiblePositionMatch\0"
    "SelectionCollapsedDirectionNone\0"
    "SelectionEditingBoundarySlottedContent\0"
    "SelectionFocusAffinity\0"
    "SelectionHandleWithBottomClipped\0"
    "SelectionRemoveRangeNotFoundError\0"
    "SelectionSetBaseAndExtentNonNullNode\0"
    "SelectivePermissionsIntervention\0"
    "SendBeaconThrowForBlobWithNonSimpleType\0"
    "SendEarlyLastBeginMainFrame\0"
    "SendSlotChangeSignalAfterNodeInserted\0"
    "SensorExtraClasses\0"
    "SeparateDeferModuleScriptTasks\0"
    "SequentialFocusPrimitives\0"
    "SequentialFocusPrimitivesShadowRoots\0"
    "Serial\0"
    "SerialPortConnected\0"
    "SerializeInvalidSelectorsInForgivingSelectorList\0"
    "SerializeViewTransitionStateInSPA\0"
    "ServiceWorkerBackgroundSyncInDedicatedWorker\0"
    "ServiceWorkerClientLifecycleState\0"
    "ServiceWorkerCodeCache\0"
    "ServiceWorkerCodeCacheHashing\0"
    "ServiceWorkerInDedicatedWorker\0"
    "ServiceWorkerScriptEncoding\0"
    "ServiceWorkerStaticRouterTimingInfo\0"
    "SetHTMLCanRunScripts\0"
    "SetSequentialFocusStartingPoint\0"
    "SetShape\0"
    "ShadowRootAdoptedStyleSheet\0"
    "ShadowRootNamespaceCheck\0"
    "ShadowRootReferenceTarget\0"
    "ShadowRootReferenceTargetAriaOwns\0"
    "ShadowRootSlotAssignment\0"
    "SharedArrayBuffer\0"
    "SharedArrayBufferUnrestrictedAccessAllowed\0"
    "SharedWorker\0"
    "SharedWorkerExtendedLifetime\0"
    "SideRelativeBackgroundPosition\0"
    "SignatureBasedInlineIntegrity\0"
    "SingleAxisScrollContainers\0"
    "SingleAxisScrollContainersForScrollSnap\0"
    "SkipAd\0"
    "SkipCallbacksWhenDevToolsNotOpen\0"
    "SkipCompositingStaticBackdropFilterAnimation\0"
    "SkipEventCapture\0"
    "SkipHtmlInterchangeInForeignContent\0"
    "SkipInitialForcedScrollbar\0"
    "SkipPaintInvalidationWhileStayingInvisible\0"
    "SkipStaleUndoStepsInIdleSpellCheck\0"
    "SkipTickingStaticAnimations\0"
    "SkipTouchEventFilter\0"
    "SkipUnselectableElementsInParagraphBoundary\0"
    "SmallerViewportUnits\0"
    "SmartCard\0"
    "SmartCardContextRelease\0"
    "SmartZoom\0"
    "SnapshotScrollTimelinesPostLayout\0"
    "SortedLayoutShiftSourcesByImpactArea\0"
    "SourceSpecificMulticastInDirectSockets\0"
    "SpatNavUsesCursorInheritance\0"
    "SpeakerSelection\0"
    "SpecCompliantXmlMimeTypes\0"
    "SpeculationMeasurement\0"
    "SpeculationRulesModerateViewportHeuristicsControl\0"
    "SpellCheckChunking\0"
    "SpellCheckCustomDictionaryAPI\0"
    "SplitQualifiedNameOnFirstColon\0"
    "SplitTextNotCleanupDummySpans\0"
    "SrcsetSelectionMatchesImageSet\0"
    "SrcsetTwoDimensionalSizes\0"
    "StableBlinkFeatures\0"
    "StackingContextIsNotStacked\0"
    "StaleImageNaturalSizeDuringRevalidation\0"
    "StaleIntersectionGeometryForThrottledFrames\0"
    "StandardizedBrowserZoom\0"
    "StandardizedBrowserZoomOptOut\0"
    "StickyUserActivationAcrossSameOriginNavigation\0"
    "StorageBuckets\0"
    "StorageBucketsDurability\0"
    "StorageBucketsLocks\0"
    "StrictMimeTypesForWorkers\0"
    "StyleResourceFetcherIdentityCheck\0"
    "StylusHandwriting\0"
    "SubApps\0"
    "SubframeMouseCaptureOwner\0"
    "SuppressFullscreenFromUnfocusedView\0"
    "SuppressPointerStreamAfterDrag\0"
    "SvgAnimateMotionDiscreteCalcMode\0"
    "SvgAvoidResettingFilterQualityForTiledPattern\0"
    "SvgCss3dTransforms\0"
    "SvgEmptyAttributeStringParsingFix\0"
    "SvgEnableTextDecorationCssStyling\0"
    "SvgFallBackToContainerSize\0"
    "SvgFeImageEXIFOrientation\0"
    "SvgFeImageSkipHiddenContainerViewportDependence\0"
    "SvgFilterPaintsForHiddenContent\0"
    "SvgFilterUserSpaceViewportForSvg\0"
    "SvgHyperlinkElementUtils\0"
    "SvgIgnoreNegativeEllipseRadii\0"
    "SvgImageAnimationReset\0"
    "SvgImageNonUniformScalingFix\0"
    "SvgIncrementalStyle\0"
    "SvgInlineRootPixelSnappingScaleAdjustment\0"
    "SvgInstanceSyncOptimization\0"
    "SvgLengthResolveUnparsedValue\0"
    "SvgNewZoom\0"
    "SvgPathLengthCssProperty\0"
    "SvgScriptElementAsyncAttribute\0"
    "SvgScriptFragmentAlreadyStarted\0"
    "SvgSizingWithPreserveAspectRatioNone\0"
    "SvgStyleElementReflectTypeAndMedia\0"
    "SvgSupportMediaFragments\0"
    "SvgTextPositioningGraphemeClusters\0"
    "SvgUseNestedResourceDocuments\0"
    "SvgUseNestedResourceDocumentsDelayLoad\0"
    "SyncCrossDocumentAnimationTiming\0"
    "SynthesizedKeyboardEventsForAccessibilityActions\0"
    "SyntheticMouseHoverOverInactivePage\0"
    "SystemWakeLock\0"
    "TabAlignmentWithFloats\0"
    "TabSizeInRubyBase\0"
    "TableCellBorderColorInherit\0"
    "TableIsAutoFixedLayout\0"
    "TargetInShadowDeterminedBeforeListener\0"
    "TargetRangesForBackwardDeletionUnit\0"
    "TemporalInputHostBlur\0"
    "TestBlinkFeatureDefault\0"
    "TestFeature\0"
    "TestFeatureCustomEnableCheck\0"
    "TestFeatureDependent\0"
    "TestFeatureForBrowserProcessReadWriteAccessOriginTrial\0"
    "TestFeatureImplied\0"
    "TestFeatureStable\0"
    "TextAreaPlaceholderBreakAriaHiddenUpdate\0"
    "TextAreaResizerFixedSize\0"
    "TextAutoSpaceIgnoreRubyAnnotation\0"
    "TextBoxTrimForNestedList\0"
    "TextBoxTrimOnInlineBox\0"
    "TextBoxTrimOnInlineBoxTextDecoration\0"
    "TextDetector\0"
    "TextEmphasisPositionAuto\0"
    "TextEncodingDetectorTldHint\0"
    "TextFragmentAPI\0"
    "TextFragmentIdentifiers\0"
    "TextFragmentTapOpensContextMenu\0"
    "TextIteratorExcludeAutofilledSelectFix\0"
    "TextMetricsBaselines\0"
    "TextOverflowClipWithSelection\0"
    "TextOverflowInTextarea\0"
    "TextOverflowString\0"
    "TextScaleMetaTag\0"
    "TextSpacingTrimFallback\0"
    "TextSpacingTrimFallback2\0"
    "TextSpacingTrimFallbackChws\0"
    "TextStreamMethod\0"
    "TimePickerHonorsStep\0"
    "TimeZoneChangeEvent\0"
    "TimelineTrigger\0"
    "TimerThrottlingForBackgroundTabs\0"
    "TimestampBasedCLSTracking\0"
    "TopicsAPI\0"
    "TouchDragAndContextMenu\0"
    "TouchDragAndDrop\0"
    "TouchDragOnShortPress\0"
    "TouchEventFeatureDetection\0"
    "TouchTextEditingRedesign\0"
    "TrackAnimatedSources\0"
    "TrackAnimatedSourcesForInheritedProperties\0"
    "TransferableRTCDataChannel\0"
    "TranslateService\0"
    "TranslationAPI\0"
    "TranslationAPIForWorkers\0"
    "TreatMhtmlInitialDocumentLoadsAsCrossDocument\0"
    "TrustedTypesCreateParserOptions\0"
    "TrustedTypesFromLiteral\0"
    "TrustedTypesUseCodeLike\0"
    "TwoPhaseViewTransition\0"
    "UAImageReplacementAPI\0"
    "URLPatternCompareComponent\0"
    "URLPatternGenerate\0"
    "URLSearchParamsHasAndDeleteMultipleArgs\0"
    "UnboundedElement\0"
    "UnclosedFormControlIsInvalid\0"
    "UnexposedTaskIds\0"
    "UnprefixedSpeechRecognition\0"
    "UnrestrictedMeasureUserAgentSpecificMemory\0"
    "UnrestrictedSharedArrayBuffer\0"
    "UnrestrictedUsb\0"
    "UnsafeEscapingUnboundedElementOnTheOpenWeb\0"
    "UnsafeUnboundedElementOnTheOpenWeb\0"
    "UpdateComplexSafaAreaConstraints\0"
    "UpdateSelectionOnNodeInsertion\0"
    "UseBeginFramePresentationFeedback\0"
    "UseLowQualityInterpolation\0"
    "UseOriginalDomOffsetsForOffsetMap\0"
    "UsePaintGeometryForIntersection\0"
    "UsePositionForPointInFlexibleBoxWithSingleChildElement\0"
    "UsePositionIfIsVisuallyEquivalentCandidate\0"
    "UseShadowHostStyleCheckEditable\0"
    "UseUndoStepElementDispatchBeforeInput\0"
    "UserActionPseudosStopAtTopLayer\0"
    "UserDefinedEntryPointTiming\0"
    "UserMediaElement\0"
    "UserMediaElementLegacy\0"
    "V8IdleTasks\0"
    "VariableSystemFontSupportOnWindows\0"
    "VideoAutoFullscreen\0"
    "VideoFrameMetadataBackgroundBlur\0"
    "VideoFrameMetadataRtpTimestamp\0"
    "VideoFullscreenOrientationLock\0"
    "VideoRotateToFullscreen\0"
    "VideoTrackGenerator\0"
    "VideoTrackGeneratorInWindow\0"
    "VideoTrackGeneratorInWorker\0"
    "ViewTransitionLongCallbackTimeoutForTesting\0"
    "ViewTransitionPreventSvgFilterPaint\0"
    "ViewTransitionSkipPseudoTreeForNavigationCapture\0"
    "ViewTransitionSkipZeroHeightControlsSnap\0"
    "ViewportHeightClientHintHeader\0"
    "ViewportSegments\0"
    "VisibilityCollapseColumn\0"
    "VisualRectMappingFixForExpansion\0"
    "WakeLock\0"
    "WarnOnContentVisibilityRenderAccess\0"
    "WavyDecorationContinuousPhase\0"
    "WebAppInstallation\0"
    "WebAppLaunchQueue\0"
    "WebAppScopeExtensions\0"
    "WebAppScopeSystemAccentColor\0"
    "WebAppTabStrip\0"
    "WebAppTabStripCustomizations\0"
    "WebAppTranslations\0"
    "WebAssemblyCustomDescriptorsV2\0"
    "WebAssemblyJSPromiseIntegration\0"
    "WebAudioBypassOutputBuffering\0"
    "WebAudioBypassOutputBufferingOptOut\0"
    "WebAudioConfigurableRenderQuantum\0"
    "WebAuth\0"
    "WebAuthAuthenticatorAttachment\0"
    "WebAuthenticationAmbient\0"
    "WebAuthenticationAttestationFormats\0"
    "WebAuthenticationCmtgKey\0"
    "WebAuthenticationCrossDeviceFallbackUrl\0"
    "WebAuthenticationRemoteClientDataJson\0"
    "WebAuthenticationRemoteDesktopSupport\0"
    "WebAutocorrectByDefault\0"
    "WebBluetooth\0"
    "WebBluetoothGetDevices\0"
    "WebBluetoothScanning\0"
    "WebBluetoothWatchAdvertisements\0"
    "WebBluetoothWorldIsolatedCache\0"
    "WebCodecsVideoEncoderBuffers\0"
    "WebCryptoPQC\0"
    "WebGLDeveloperExtensions\0"
    "WebGLDraftExtensions\0"
    "WebGLDrawingBufferStorage\0"
    "WebGLOnWebGPU\0"
    "WebGLToneMapping\0"
    "WebGPUDeveloperFeatures\0"
    "WebGPUExperimentalFeatures\0"
    "WebGPUExperimentalResourceTable\0"
    "WebGPUExternalImageHDRHeadroom\0"
    "WebGPUMapSyncOnWorkers\0"
    "WebGPUMultithreadDawnWireOnWorkers\0"
    "WebHID\0"
    "WebHIDOnServiceWorkers\0"
    "WebHIDWorldIsolatedCache\0"
    "WebHaptics\0"
    "WebIDLBigIntUsesToBigInt\0"
    "WebIdentityDigitalCredentials\0"
    "WebIdentityDigitalCredentialsCreation\0"
    "WebMCP\0"
    "WebMCPContinuations\0"
    "WebMCPDeclarativeFileInput\0"
    "WebMCPFormAssociatedCustomElements\0"
    "WebNFC\0"
    "WebOTP\0"
    "WebOTPAssertionFeaturePolicy\0"
    "WebPreferences\0"
    "WebPrinting\0"
    "WebRtcSctpSnap\0"
    "WebSerialWorldIsolatedCache\0"
    "WebShare\0"
    "WebSocketOptionBag\0"
    "WebSocketStream\0"
    "WebSocketStreamStandardBinaryChunkType\0"
    "WebSpeechRecognitionContext\0"
    "WebSpeechTimestamps\0"
    "WebSpeechUnspokenPunctuation\0"
    "WebTransportAnticipatedConcurrentIncomingStreams\0"
    "WebTransportApplicationProtocol\0"
    "WebTransportCongestionControl\0"
    "WebTransportCreateStreamsBeforeReady\0"
    "WebTransportCustomCertificates\0"
    "WebTransportDatagramsReadableType\0"
    "WebTransportDatagramsWritable\0"
    "WebTransportDraining\0"
    "WebTransportExportKeyingMaterial\0"
    "WebTransportHeaders\0"
    "WebTransportReceiveStream\0"
    "WebTransportReliability\0"
    "WebTransportSendGroup\0"
    "WebTransportStats\0"
    "WebUIBundledCodeCacheAsyncFetch\0"
    "WebUSB\0"
    "WebUSBOnDedicatedWorkers\0"
    "WebUSBOnServiceWorkers\0"
    "WebVTTCueLayoutByPositionAlignment\0"
    "WebVTTCueTightLineBox\0"
    "WebVTTLineAndPositionAlignment\0"
    "WebVTTRegions\0"
    "WebViewEnvReorderFix\0"
    "WebXR\0"
    "WebXREnabledFeatures\0"
    "WebXRFrameRate\0"
    "WebXRFrontFacing\0"
    "WebXRGPUBinding\0"
    "WebXRHitTestEntityTypes\0"
    "WebXRImageTracking\0"
    "WebXRLayers\0"
    "WebXRLayersCommon\0"
    "WebXRMediaBinding\0"
    "WebXRMeshDetection\0"
    "WebXRPlaneDetection\0"
    "WebXRPoseMotionData\0"
    "WebXRSpecParity\0"
    "WebXRVisibilityMask\0"
    "WheelEventDeltaExternalPageScale\0"
    "WheelEventMomentum\0"
    "WindowDefaultStatus\0"
    "WindowOpenAlwaysOnTop\0"
    "WindowOpenAttributionSrc\0"
    "WindowOpenSplitTab\0"
    "WordSkipSpacesPunctuationFix\0"
    "XMLNoExternalEntities\0"
    "XMLParserReplaceLoneSurrogates\0"
    "XMLParsingRust\0"
    "XMLRustForNonXslt\0"
    "XMLSerializerConsistentDefaultNsDeclMatching\0"
    "XMLViewerForIframes\0"
    "XSLT\0"
    "XSLTSpecialTrial\0"
    ;

static_assert(std::size(kFeatureNamePool) <=
              std::numeric_limits<uint16_t>::max());

std::string_view FeatureNameAt(uint16_t offset) {
  return std::string_view(kFeatureNamePool + offset);
}

}  // namespace

// static
std::optional<uint16_t> RuntimeEnabledFeaturesBase::FindFeatureFlagIndex(
    std::string_view name) {
  // Parallel arrays rather than an array-of-structs avoid per-entry padding.
  // Storing offsets into `kFeatureNamePool` and indices into `feature_states_`
  // rather than pointers or setter functions keeps the tables small and free of
  // relocations, and avoids referencing the setter functions so that they need
  // not exist after inlining.
  static constexpr uint16_t kFeatureNameOffsets[] = {
    0,
    19,
    48,
    64,
    90,
    142,
    197,
    232,
    259,
    294,
    327,
    354,
    385,
    425,
    459,
    510,
    550,
    585,
    627,
    662,
    699,
    732,
    744,
    766,
    795,
    819,
    846,
    864,
    892,
    911,
    929,
    943,
    967,
    986,
    1015,
    1052,
    1064,
    1086,
    1116,
    1154,
    1197,
    1217,
    1242,
    1257,
    1299,
    1334,
    1365,
    1394,
    1423,
    1452,
    1481,
    1519,
    1564,
    1583,
    1593,
    1606,
    1656,
    1674,
    1714,
    1744,
    1787,
    1824,
    1843,
    1875,
    1915,
    1948,
    1972,
    1993,
    2029,
    2046,
    2063,
    2090,
    2113,
    2129,
    2138,
    2153,
    2195,
    2228,
    2264,
    2309,
    2345,
    2357,
    2368,
    2381,
    2401,
    2422,
    2456,
    2482,
    2504,
    2523,
    2540,
    2563,
    2603,
    2616,
    2645,
    2668,
    2704,
    2739,
    2748,
    2762,
    2795,
    2827,
    2848,
    2881,
    2917,
    2963,
    2980,
    3017,
    3052,
    3096,
    3141,
    3167,
    3196,
    3212,
    3239,
    3255,
    3282,
    3305,
    3323,
    3352,
    3374,
    3410,
    3446,
    3476,
    3498,
    3508,
    3540,
    3575,
    3614,
    3650,
    3676,
    3696,
    3738,
    3769,
    3798,
    3820,
    3846,
    3864,
    3904,
    3916,
    3930,
    3952,
    3981,
    4003,
    4038,
    4052,
    4083,
    4102,
    4136,
    4175,
    4213,
    4241,
    4277,
    4307,
    4322,
    4351,
    4389,
    4407,
    4444,
    4458,
    4483,
    4514,
    4530,
    4559,
    4589,
    4609,
    4633,
    4664,
    4677,
    4713,
    4728,
    4749,
    4779,
    4798,
    4830,
    4857,
    4875,
    4888,
    4907,
    4929,
    4946,
    4963,
    4981,
    4998,
    5033,
    5052,
    5075,
    5097,
    5110,
    5128,
    5141,
    5165,
    5198,
    5224,
    5249,
    5277,
    5306,
    5329,
    5354,
    5364,
    5388,
    5436,
    5457,
    5487,
    5506,
    5544,
    5577,
    5588,
    5608,
    5635,
    5651,
    5676,
    5702,
    5731,
    5760,
    5792,
    5812,
    5835,
    5858,
    5876,
    5901,
    5915,
    5929,
    5945,
    5967,
    5982,
    6013,
    6036,
    6062,
    6095,
    6120,
    6147,
    6184,
    6204,
    6228,
    6250,
    6271,
    6303,
    6331,
    6366,
    6400,
    6425,
    6451,
    6477,
    6509,
    6530,
    6554,
    6577,
    6605,
    6633,
    6648,
    6677,
    6703,
    6732,
    6752,
    6775,
    6803,
    6826,
    6847,
    6882,
    6915,
    6941,
    6955,
    6972,
    6999,
    7033,
    7059,
    7078,
    7106,
    7127,
    7149,
    7164,
    7190,
    7203,
    7221,
    7241,
    7265,
    7289,
    7299,
    7326,
    7357,
    7375,
    7396,
    7435,
    7477,
    7503,
    7533,
    7574,
    7592,
    7606,
    7626,
    7649,
    7675,
    7689,
    7731,
    7764,
    7799,
    7830,
    7859,
    7885,
    7915,
    7947,
    7977,
    8010,
    8040,
    8076,
    8109,
    8147,
    8181,
    8214,
    8243,
    8258,
    8285,
    8311,
    8344,
    8368,
    8408,
    8435,
    8455,
    8481,
    8527,
    8556,
    8579,
    8605,
    8636,
    8652,
    8678,
    8708,
    8731,
    8770,
    8805,
    8834,
    8850,
    8881,
    8897,
    8910,
    8922,
    8938,
    8976,
    8997,
    9031,
    9054,
    9081,
    9093,
    9108,
    9133,
    9168,
    9187,
    9207,
    9218,
    9238,
    9276,
    9315,
    9336,
    9368,
    9398,
    9431,
    9440,
    9473,
    9495,
    9525,
    9545,
    9576,
    9597,
    9615,
    9647,
    9681,
    9703,
    9741,
    9780,
    9825,
    9842,
    9866,
    9901,
    9915,
    9942,
    9965,
    9998,
    10011,
    10028,
    10042,
    10072,
    10101,
    10140,
    10188,
    10216,
    10260,
    10289,
    10325,
    10364,
    10418,
    10443,
    10460,
    10475,
    10490,
    10514,
    10545,
    10576,
    10614,
    10631,
    10659,
    10706,
    10745,
    10774,
    10812,
    10844,
    10892,
    10922,
    10948,
    10990,
    11012,
    11026,
    11053,
    11078,
    11102,
    11137,
    11168,
    11199,
    11237,
    11266,
    11322,
    11370,
    11395,
    11439,
    11486,
    11501,
    11527,
    11549,
    11593,
    11619,
    11654,
    11682,
    11705,
    11735,
    11760,
    11796,
    11822,
    11858,
    11886,
    11910,
    11936,
    11949,
    11991,
    12021,
    12062,
    12083,
    12114,
    12149,
    12169,
    12192,
    12225,
    12253,
    12267,
    12280,
    12311,
    12341,
    12362,
    12368,
    12409,
    12423,
    12439,
    12460,
    12481,
    12502,
    12533,
    12555,
    12583,
    12596,
    12619,
    12660,
    12675,
    12689,
    12700,
    12721,
    12734,
    12754,
    12765,
    12782,
    12814,
    12850,
    12872,
    12902,
    12932,
    12967,
    12993,
    13012,
    13040,
    13067,
    13084,
    13104,
    13135,
    13169,
    13199,
    13238,
    13262,
    13290,
    13329,
    13350,
    13386,
    13412,
    13442,
    13479,
    13486,
    13511,
    13544,
    13588,
    13605,
    13640,
    13678,
    13720,
    13760,
    13775,
    13802,
    13826,
    13844,
    13876,
    13917,
    13956,
    13988,
    14004,
    14020,
    14067,
    14078,
    14091,
    14102,
    14134,
    14174,
    14209,
    14239,
    14255,
    14276,
    14305,
    14335,
    14370,
    14398,
    14421,
    14453,
    14472,
    14496,
    14514,
    14527,
    14557,
    14581,
    14614,
    14632,
    14658,
    14683,
    14702,
    14720,
    14747,
    14774,
    14809,
    14835,
    14854,
    14889,
    14903,
    14936,
    14955,
    14971,
    15001,
    15039,
    15073,
    15107,
    15134,
    15168,
    15189,
    15213,
    15239,
    15266,
    15278,
    15308,
    15335,
    15356,
    15382,
    15403,
    15429,
    15458,
    15482,
    15518,
    15555,
    15586,
    15623,
    15662,
    15690,
    15722,
    15748,
    15768,
    15799,
    15822,
    15838,
    15860,
    15874,
    15904,
    15924,
    15962,
    16006,
    16045,
    16059,
    16087,
    16116,
    16134,
    16170,
    16191,
    16219,
    16242,
    16280,
    16301,
    16327,
    16351,
    16375,
    16392,
    16432,
    16462,
    16488,
    16520,
    16543,
    16565,
    16599,
    16635,
    16659,
    16673,
    16695,
    16734,
    16761,
    16794,
    16809,
    16842,
    16855,
    16877,
    16903,
    16959,
    16974,
    17006,
    17052,
    17073,
    17102,
    17128,
    17170,
    17202,
    17223,
    17254,
    17293,
    17325,
    17354,
    17381,
    17416,
    17438,
    17465,
    17493,
    17513,
    17535,
    17568,
    17594,
    17632,
    17657,
    17691,
    17726,
    17751,
    17798,
    17809,
    17822,
    17859,
    17894,
    17938,
    17970,
    17995,
    18019,
    18043,
    18072,
    18103,
    18129,
    18151,
    18172,
    18201,
    18222,
    18233,
    18244,
    18277,
    18323,
    18344,
    18364,
    18391,
    18405,
    18435,
    18465,
    18492,
    18505,
    18532,
    18559,
    18591,
    18618,
    18645,
    18672,
    18703,
    18733,
    18766,
    18804,
    18821,
    18866,
    18895,
    18908,
    18939,
    18963,
    18997,
    19028,
    19053,
    19079,
    19109,
    19122,
    19144,
    19166,
    19225,
    19243,
    19278,
    19309,
    19331,
    19354,
    19361,
    19372,
    19397,
    19428,
    19466,
    19501,
    19516,
    19554,
    19576,
    19604,
    19641,
    19664,
    19686,
    19706,
    19725,
    19757,
    19789,
    19822,
    19844,
    19887,
    19944,
    19963,
    19989,
    20022,
    20068,
    20091,
    20123,
    20167,
    20208,
    20241,
    20265,
    20290,
    20311,
    20325,
    20371,
    20397,
    20437,
    20473,
    20509,
    20538,
    20568,
    20606,
    20633,
    20658,
    20687,
    20699,
    20741,
    20774,
    20791,
    20801,
    20823,
    20836,
    20858,
    20896,
    20927,
    20960,
    20999,
    21048,
    21077,
    21108,
    21140,
    21189,
    21228,
    21269,
    21329,
    21361,
    21391,
    21416,
    21432,
    21448,
    21454,
    21464,
    21483,
    21497,
    21529,
    21552,
    21590,
    21621,
    21630,
    21672,
    21687,
    21698,
    21729,
    21750,
    21775,
    21790,
    21849,
    21878,
    21912,
    21956,
    21984,
    22007,
    22028,
    22062,
    22087,
    22107,
    22128,
    22164,
    22195,
    22218,
    22252,
    22291,
    22332,
    22365,
    22401,
    22437,
    22455,
    22484,
    22513,
    22541,
    22560,
    22597,
    22620,
    22647,
    22658,
    22687,
    22723,
    22744,
    22757,
    22797,
    22829,
    22854,
    22888,
    22907,
    22945,
    22957,
    22987,
    23013,
    23042,
    23078,
    23102,
    23128,
    23152,
    23173,
    23187,
    23219,
    23244,
    23274,
    23297,
    23318,
    23350,
    23376,
    23403,
    23429,
    23446,
    23485,
    23517,
    23539,
    23570,
    23597,
    23627,
    23655,
    23677,
    23693,
    23728,
    23750,
    23782,
    23804,
    23825,
    23854,
    23894,
    23923,
    23961,
    23982,
    24021,
    24042,
    24070,
    24084,
    24111,
    24138,
    24180,
    24195,
    24217,
    24256,
    24288,
    24333,
    24362,
    24384,
    24416,
    24443,
    24480,
    24504,
    24540,
    24579,
    24617,
    24650,
    24684,
    24710,
    24734,
    24768,
    24811,
    24829,
    24853,
    24884,
    24906,
    24923,
    24956,
    24970,
    25001,
    25032,
    25061,
    25087,
    25115,
    25147,
    25176,
    25191,
    25216,
    25242,
    25273,
    25286,
    25322,
    25344,
    25370,
    25396,
    25422,
    25446,
    25492,
    25507,
    25531,
    25553,
    25605,
    25643,
    25667,
    25693,
    25724,
    25759,
    25780,
    25812,
    25827,
    25849,
    25864,
    25890,
    25916,
    25957,
    25995,
    26026,
    26085,
    26117,
    26140,
    26158,
    26186,
    26208,
    26235,
    26254,
    26278,
    26299,
    26331,
    26371,
    26403,
    26442,
    26465,
    26498,
    26532,
    26569,
    26602,
    26642,
    26670,
    26708,
    26727,
    26758,
    26784,
    26821,
    26828,
    26848,
    26897,
    26931,
    26976,
    27010,
    27033,
    27063,
    27094,
    27122,
    27158,
    27179,
    27211,
    27220,
    27248,
    27273,
    27299,
    27333,
    27358,
    27376,
    27419,
    27432,
    27461,
    27492,
    27522,
    27549,
    27589,
    27596,
    27629,
    27674,
    27691,
    27727,
    27754,
    27797,
    27832,
    27860,
    27881,
    27925,
    27946,
    27956,
    27980,
    27990,
    28024,
    28061,
    28100,
    28129,
    28146,
    28172,
    28195,
    28245,
    28264,
    28294,
    28325,
    28355,
    28386,
    28412,
    28432,
    28460,
    28500,
    28544,
    28568,
    28598,
    28645,
    28660,
    28685,
    28705,
    28731,
    28765,
    28783,
    28791,
    28817,
    28853,
    28884,
    28917,
    28963,
    28982,
    29016,
    29050,
    29077,
    29103,
    29151,
    29183,
    29216,
    29241,
    29271,
    29294,
    29323,
    29343,
    29385,
    29413,
    29443,
    29454,
    29479,
    29510,
    29542,
    29579,
    29614,
    29639,
    29674,
    29704,
    29743,
    29776,
    29825,
    29861,
    29876,
    29899,
    29917,
    29945,
    29968,
    30007,
    30043,
    30065,
    30089,
    30101,
    30130,
    30151,
    30206,
    30225,
    30243,
    30284,
    30309,
    30343,
    30368,
    30391,
    30428,
    30441,
    30466,
    30494,
    30510,
    30534,
    30566,
    30605,
    30626,
    30656,
    30679,
    30698,
    30715,
    30739,
    30764,
    30792,
    30809,
    30830,
    30850,
    30866,
    30899,
    30925,
    30935,
    30959,
    30976,
    30998,
    31025,
    31050,
    31071,
    31114,
    31141,
    31158,
    31173,
    31198,
    31244,
    31276,
    31300,
    31324,
    31347,
    31369,
    31396,
    31415,
    31455,
    31472,
    31501,
    31518,
    31546,
    31589,
    31619,
    31635,
    31678,
    31713,
    31746,
    31777,
    31811,
    31838,
    31872,
    31904,
    31959,
    32002,
    32034,
    32072,
    32104,
    32132,
    32149,
    32172,
    32184,
    32219,
    32239,
    32272,
    32303,
    32334,
    32358,
    32378,
    32406,
    32434,
    32478,
    32514,
    32563,
    32604,
    32635,
    32652,
    32677,
    32710,
    32719,
    32755,
    32785,
    32804,
    32822,
    32844,
    32873,
    32888,
    32917,
    32936,
    32967,
    32999,
    33029,
    33065,
    33099,
    33107,
    33138,
    33163,
    33199,
    33224,
    33264,
    33302,
    33340,
    33364,
    33377,
    33400,
    33421,
    33453,
    33484,
    33513,
    33526,
    33551,
    33572,
    33598,
    33612,
    33629,
    33653,
    33680,
    33712,
    33743,
    33766,
    33801,
    33808,
    33831,
    33856,
    33867,
    33892,
    33922,
    33960,
    33967,
    33987,
    34014,
    34049,
    34056,
    34063,
    34092,
    34107,
    34119,
    34134,
    34162,
    34171,
    34190,
    34206,
    34245,
    34273,
    34293,
    34322,
    34371,
    34403,
    34433,
    34470,
    34501,
    34535,
    34565,
    34586,
    34619,
    34639,
    34665,
    34689,
    34711,
    34729,
    34761,
    34768,
    34793,
    34816,
    34851,
    34873,
    34904,
    34918,
    34939,
    34945,
    34966,
    34981,
    34998,
    35014,
    35038,
    35057,
    35069,
    35087,
    35105,
    35124,
    35144,
    35164,
    35180,
    35200,
    35233,
    35252,
    35272,
    35294,
    35319,
    35338,
    35367,
    35389,
    35420,
    35435,
    35453,
    35498,
    35518,
    35523,
  };
  static constexpr uint16_t kFlagIndices[] = {
    kAIDecisionModelAPIFlagIndex,
    kAIDecisionModelAPIForWorkersFlagIndex,
    kAIEmbeddingsAPIFlagIndex,
    kAIEmbeddingsAPIForWorkersFlagIndex,
    kAIPageContentAnchoredFixedOffscreenNonActionabilityFlagIndex,
    kAIPageContentAnchoredNonFixedOffscreenNonActionabilityFlagIndex,
    kAIPageContentBuildOnLoadForTestingFlagIndex,
    kAIPageContentCheckGeometryFlagIndex,
    kAIPageContentConvertNodeTextToUtf8FlagIndex,
    kAIPageContentElementCSSRedactionFlagIndex,
    kAIPageContentIncludeMathMLFlagIndex,
    kAIPageContentIncludeSVGSubtreeFlagIndex,
    kAIPageContentLabelExpandFallbackSourcesFlagIndex,
    kAIPageContentLabelRemoveRedundantFlagIndex,
    kAIPageContentLabelRemoveRedundantWholeWordMatchingFlagIndex,
    kAIPageContentOuterBoxMapToAncestorSpaceFlagIndex,
    kAIPageContentPaidContentAnnotationFlagIndex,
    kAIPageContentSkipUnclickableFixedOverlaysFlagIndex,
    kAIPageContentTrackedElementsIframeFlagIndex,
    kAIPageContentTrackedElementsPasswordFlagIndex,
    kAIPageContentVisualViewportClampFlagIndex,
    kAIPromptAPIFlagIndex,
    kAIPromptAPIForWorkersFlagIndex,
    kAIPromptAPILegacyIdentifiersFlagIndex,
    kAIPromptAPILegacyParamsFlagIndex,
    kAIPromptAPIMultimodalInputFlagIndex,
    kAIPromptAPIParamsFlagIndex,
    kAIPromptAPIStructuredOutputFlagIndex,
    kAIPromptAPIToolUseFlagIndex,
    kAIProofreadingAPIFlagIndex,
    kAIRewriterAPIFlagIndex,
    kAIRewriterAPIForWorkersFlagIndex,
    kAISummarizationAPIFlagIndex,
    kAISummarizationAPIForWorkersFlagIndex,
    kAISummarizationPerformancePreferenceFlagIndex,
    kAIWriterAPIFlagIndex,
    kAIWriterAPIForWorkersFlagIndex,
    kAOMAriaRelationshipPropertiesFlagIndex,
    kAOMAriaRelationshipPropertiesAriaOwnsFlagIndex,
    kAboutBlankPageRespectsDarkModeOnUserActionFlagIndex,
    kAccelerated2dCanvasFlagIndex,
    kAcceleratedSmallCanvasesFlagIndex,
    kAccessKeyLabelFlagIndex,
    kAccessibilityCheckIfcInPreviousTextOnLineFlagIndex,
    kAccessibilityCustomElementRoleNoneFlagIndex,
    kAccessibilityExposeDisplayNoneFlagIndex,
    kAccessibilityImplicitActionsFlagIndex,
    kAccessibilityMinRoleTabbableFlagIndex,
    kAccessibilityOSLevelBoldTextFlagIndex,
    kAccessibilityProhibitedNamesFlagIndex,
    kAccessibilitySerializationSizeMetricsFlagIndex,
    kAccessibilityUseAXPositionForDocumentMarkersFlagIndex,
    kAdInterestGroupAPIFlagIndex,
    kAdTaggingFlagIndex,
    kAddressSpaceFlagIndex,
    kAdjustEndOfNextParagraphIfMovedParagraphIsUpdatedFlagIndex,
    kAlignZoomToCenterFlagIndex,
    kAllowContentInitiatedDataUrlNavigationsFlagIndex,
    kAllowPreloadingWithCSPMetaTagFlagIndex,
    kAllowSvgUseToReferenceExternalDocumentRootFlagIndex,
    kAllowSyntheticTimingForCanvasCaptureFlagIndex,
    kAllowURNsInIframesFlagIndex,
    kAncestorOriginsStoredOnDocumentFlagIndex,
    kAnchorPositionAdjustmentWithoutOverflowFlagIndex,
    kAndroidDownloadableFontsMatchingFlagIndex,
    kAnimationEventAnimationFlagIndex,
    kAnimationProgressAPIFlagIndex,
    kAnimationRangeRejectRelativeLengthsFlagIndex,
    kAnimationTriggerFlagIndex,
    kAnimationWorkletFlagIndex,
    kAnnotationSpaceForMultiColFlagIndex,
    kAnnotationSpaceOnStartFlagIndex,
    kAnonymousIframeFlagIndex,
    kAppTitleFlagIndex,
    kAppearanceBaseFlagIndex,
    kAppearanceDisplayAdjustmentForWidgetsOnlyFlagIndex,
    kApproximateGeolocationPermissionFlagIndex,
    kApproximateGeolocationPermissionAPIFlagIndex,
    kApproximateGeolocationPermissionAccuracyModeFlagIndex,
    kApproximateGeolocationWebVisibleAPIFlagIndex,
    kAriaActionsFlagIndex,
    kAriaNotifyFlagIndex,
    kAriaNotifyV2FlagIndex,
    kAriaRowColIndexTextFlagIndex,
    kAttributionReportingFlagIndex,
    kAudioContextAsyncStateTransitionsFlagIndex,
    kAudioContextPlaybackStatsFlagIndex,
    kAudioContextSetSinkIdFlagIndex,
    kAudioOutputDevicesFlagIndex,
    kAudioVideoTracksFlagIndex,
    kAudioWorkletSharedPortFlagIndex,
    kAuthorSpecifiedLayoutScrollSnapBehaviorFlagIndex,
    kAutoDarkModeFlagIndex,
    kAutoDarkModeSVGSizeThresholdFlagIndex,
    kAutoDarkModeSkipImagesFlagIndex,
    kAutoPictureInPictureVideoHeuristicsFlagIndex,
    kAutoSizeUsesScrollWidthForOverflowFlagIndex,
    kAutofillFlagIndex,
    kAutofillEventFlagIndex,
    kAutofillPreviewGenericFontFamilyFlagIndex,
    kAutofillPreviewIgnoreAuthorFontFlagIndex,
    kAutomationControlledFlagIndex,
    kAvoidEmbeddedContentViewLocationFlagIndex,
    kAvoidNonSelectableSelectionBoundaryFlagIndex,
    kAvoidSynchronousBlurOnDisabledAttributeChangeFlagIndex,
    kBackForwardCacheFlagIndex,
    kBackForwardCacheExperimentHTTPHeaderFlagIndex,
    kBackForwardCacheNotRestoredReasonsFlagIndex,
    kBackForwardCacheRestorationPerformanceEntryFlagIndex,
    kBackForwardCacheUpdateNotRestoredReasonsNameFlagIndex,
    kBackfaceVisibilityInteropFlagIndex,
    kBackgroundClipTextDecorationFlagIndex,
    kBackgroundFetchFlagIndex,
    kBackgroundPageFreezeOptOutFlagIndex,
    kBarcodeDetectorFlagIndex,
    kBaseAppearanceInlineSizingFlagIndex,
    kBasicShapeCornerRadiusFlagIndex,
    kBidiCaretAffinityFlagIndex,
    kBidiVisualOrderCaretMovementFlagIndex,
    kBlinkExtensionWebViewFlagIndex,
    kBlinkExtensionWebViewMediaIntegrityFlagIndex,
    kBlinkGeometryMapperViewportFastPathFlagIndex,
    kBlinkLifecycleScriptForbiddenFlagIndex,
    kBlinkRuntimeCallStatsFlagIndex,
    kBlobBytesFlagIndex,
    kBlockSelectPopupUnfocusedWindowFlagIndex,
    kBlockingFocusWithoutUserActivationFlagIndex,
    kBoundaryEventDispatchTracksNodeRemovalFlagIndex,
    kBoxDecorationBreakCloneLineBreakingFlagIndex,
    kBraveGlobalPrivacyControlFlagIndex,
    kBraveIsInTorContextFlagIndex,
    kBrowserInitiatedAutomaticPictureInPictureFlagIndex,
    kBufferedBytesConsumerLimitSizeFlagIndex,
    kBypassPepcSecurityForTestingFlagIndex,
    kCCTNewRFMPushBehaviorFlagIndex,
    kCDTNewCrossOriginHandlingFlagIndex,
    kCDTNewDestinationFlagIndex,
    kCDTNewReferrerAndReferrerPolicyHandlingFlagIndex,
    kCSPHashesV1FlagIndex,
    kCSPReportHashFlagIndex,
    kCSSAccentColorKeywordFlagIndex,
    kCSSActiveCaptionMapsToCanvasFlagIndex,
    kCSSAlphaColorFunctionFlagIndex,
    kCSSAlphaColorFunctionRequiresAlphaFlagIndex,
    kCSSAltCounterFlagIndex,
    kCSSAnimationIterationCompositeFlagIndex,
    kCSSArgumentGrammarFlagIndex,
    kCSSAtRuleCounterStyleImageSymbolsFlagIndex,
    kCSSAtRuleCounterStyleSpeakAsDescriptorFlagIndex,
    kCSSAttributeValueCaseSensitiveNonHTMLFlagIndex,
    kCSSBackgroundClipBorderAreaFlagIndex,
    kCSSBackgroundLayerCountIndependenceFlagIndex,
    kCSSBorderRadiusSideShorthandsFlagIndex,
    kCSSBorderShapeFlagIndex,
    kCSSCalcEarlyNaNAndInfFoldingFlagIndex,
    kCSSCalcSimplificationAndSerializationFlagIndex,
    kCSSCaretAnimationFlagIndex,
    kCSSCaretColorWithOptionalSecondValueFlagIndex,
    kCSSCaretShapeFlagIndex,
    kCSSCaseSensitiveSelectorFlagIndex,
    kCSSChUnitSpecCompliantFallbackFlagIndex,
    kCSSColorTypedOMFlagIndex,
    kCSSContainerProgressNotationFlagIndex,
    kCSSContainerStyleQueriesRangeFlagIndex,
    kCSSCornersShorthandFlagIndex,
    kCSSCounterResetReversedFlagIndex,
    kCSSCounterStyleSymbolsFunctionFlagIndex,
    kCSSCrossFadeFlagIndex,
    kCSSCustomHighlightUniversalSelectorFlagIndex,
    kCSSCustomMediaFlagIndex,
    kCSSDynamicRangeLimitFlagIndex,
    kCSSEnumeratedCustomPropertiesFlagIndex,
    kCSSFlowStartAndEndFlagIndex,
    kCSSFlowStartAndEndSerializationFlagIndex,
    kCSSFontFamilySerializationFlagIndex,
    kCSSFontSizeAdjustFlagIndex,
    kCSSFunctionsFlagIndex,
    kCSSGridLanesLayoutFlagIndex,
    kCSSHangingPunctuationFlagIndex,
    kCSSHexAlphaColorFlagIndex,
    kCSSIdentFunctionFlagIndex,
    kCSSImageAnimationFlagIndex,
    kCSSImageFunctionFlagIndex,
    kCSSInRangeOutOfRangeReversedRangesFlagIndex,
    kCSSInheritFunctionFlagIndex,
    kCSSKeyframesRuleLengthFlagIndex,
    kCSSLangExtendedRangesFlagIndex,
    kCSSLayoutAPIFlagIndex,
    kCSSLightDarkImageFlagIndex,
    kCSSLineClampFlagIndex,
    kCSSLineClampAsShorthandFlagIndex,
    kCSSLineClampLineBreakingEllipsisFlagIndex,
    kCSSLinkParametersPropertyFlagIndex,
    kCSSListCounterAccountingFlagIndex,
    kCSSLogicalCombinationPseudoFlagIndex,
    kCSSMarkerNestedPseudoElementFlagIndex,
    kCSSMediaElementPseudosFlagIndex,
    kCSSMediaProgressNotationFlagIndex,
    kCSSMixinsFlagIndex,
    kCSSNestedPseudoElementsFlagIndex,
    kCSSOMGetComputedStylePseudoElementRequiresColonFlagIndex,
    kCSSPaintAPIArgumentsFlagIndex,
    kCSSParserIgnoreCharsetForURLsFlagIndex,
    kCSSPolygonRoundingFlagIndex,
    kCSSPositionStickyStaticScrollPositionFlagIndex,
    kCSSPositionVisibilityAnchorValidFlagIndex,
    kCSSPrivateFlagIndex,
    kCSSProgressNotationFlagIndex,
    kCSSProgressNotationNoClampFlagIndex,
    kCSSPseudoColumnFlagIndex,
    kCSSPseudoElementBackdropFlagIndex,
    kCSSPseudoElementInterfaceFlagIndex,
    kCSSPseudoElementScrollButtonFlagIndex,
    kCSSPseudoElementSelectorTextFlagIndex,
    kCSSPseudoElementViewTransitionsFlagIndex,
    kCSSPseudoHasSlottedFlagIndex,
    kCSSPseudoScrollButtonsFlagIndex,
    kCSSPseudoScrollMarkersFlagIndex,
    kCSSRandomFunctionFlagIndex,
    kCSSRandomFunctionTypedOMFlagIndex,
    kCSSResizeAutoFlagIndex,
    kCSSRevertRuleFlagIndex,
    kCSSRubyOverhangFlagIndex,
    kCSSSafePrintableInsetFlagIndex,
    kCSSScopeImportFlagIndex,
    kCSSScopeifiedParentPseudoClassFlagIndex,
    kCSSScrollInitialTargetFlagIndex,
    kCSSScrollMarkerGroupModesFlagIndex,
    kCSSScrollMarkerTargetBeforeAfterFlagIndex,
    kCSSScrollSnapChangeEventFlagIndex,
    kCSSScrollSnapChangingEventFlagIndex,
    kCSSScrollSnapEventConstructorExposedFlagIndex,
    kCSSScrollSnapEventsFlagIndex,
    kCSSScrollSnapStopBeforeFlagIndex,
    kCSSScrollSnapTypePairFlagIndex,
    kCSSScrollTargetGroupFlagIndex,
    kCSSScrollTargetGroupAriaCurrentFlagIndex,
    kCSSScrolledContainerQueriesFlagIndex,
    kCSSShapeOutsidePathAndShapeSupportFlagIndex,
    kCSSShapeOutsideRectAndXywhSupportFlagIndex,
    kCSSStyleSheetInitBaseURLFlagIndex,
    kCSSSupportsAtRuleFunctionFlagIndex,
    kCSSSupportsForImportRulesFlagIndex,
    kCSSSupportsNamedFeatureFunctionFlagIndex,
    kCSSSystemAccentColorFlagIndex,
    kCSSTextAlignMatchParentFlagIndex,
    kCSSTextDecorationInsetFlagIndex,
    kCSSTextDecorationSkipInkAllFlagIndex,
    kCSSTextDecorationSkipSpacesFlagIndex,
    kCSSTextSpacingFlagIndex,
    kCSSTextTransformFullSizeKanaFlagIndex,
    kCSSTextTransformFullWidthFlagIndex,
    kCSSTextTransformMultiKeywordFlagIndex,
    kCSSTimelineScopeAllFlagIndex,
    kCSSTimelineScopeGlobalFlagIndex,
    kCSSTreeScopedScrollTimelineFlagIndex,
    kCSSURLRequestModifiersFlagIndex,
    kCSSUserSelectContainFlagIndex,
    kCSSUserValidAndUserInvalidForRadioFlagIndex,
    kCSSVideoDynamicRangeMediaQueriesFlagIndex,
    kCSSViewTransitionAutoNameFlagIndex,
    kCSSWindowDragFlagIndex,
    kCSSZoomAnimationFlagIndex,
    kCacheControlRFC7234ParsingFlagIndex,
    kCacheControlRFC7234ParsingMetricsFlagIndex,
    kCacheStorageCodeCacheHintFlagIndex,
    kCacheStyleAdjusterFlagIndex,
    kCameraAndMicrophoneElementsFlagIndex,
    kCanvas2dCanvasFilterFlagIndex,
    kCanvas2dDeferredFlushFlagIndex,
    kCanvas2dLayersFlagIndex,
    kCanvas2dLayersWithOptionsFlagIndex,
    kCanvas2dMeshFlagIndex,
    kCanvasDrawElementFlagIndex,
    kCanvasFloatingPointFlagIndex,
    kCanvasGlobalHDRHeadroomFlagIndex,
    kCanvasGradientCSSColor4FlagIndex,
    kCanvasHDRFlagIndex,
    kCanvasTextDirectionReflectFlagIndex,
    kCanvasTextMetricsPreciseBoundsFlagIndex,
    kCanvasToneMappingFlagIndex,
    kCanvasUsesArcPaintOpFlagIndex,
    kCapabilityDelegationDigitalCredentialsFlagIndex,
    kCapabilityDelegationDisplayCaptureRequestFlagIndex,
    kCapabilityDelegationPopupFlagIndex,
    kCapabilityElementIconOnlyModeFlagIndex,
    kCapitalizeAfterSupplementaryCharacterFixFlagIndex,
    kCaptureControllerFlagIndex,
    kCaptureHandleFlagIndex,
    kCapturedMouseEventsFlagIndex,
    kCapturedSurfaceControlFlagIndex,
    kCapturedSurfaceResolutionFlagIndex,
    kCaretBlinkingFlagIndex,
    kCaretBrowsingSequentialFocusStartingPointFlagIndex,
    kCaretOutsideEditableAtomicInlineFlagIndex,
    kCheckCSPOnInlineScriptAttributeSetFlagIndex,
    kCheckableInputTypeLayoutInlineFlagIndex,
    kClampUnfocusedSelectionCacheFlagIndex,
    kCleanUpActivationBehaviorFlagIndex,
    kClearCrossOriginRelatedTargetFlagIndex,
    kClearCurrentTargetAfterDispatchFlagIndex,
    kClearDisplayLockPrePaintFlagsFlagIndex,
    kClearFocusWithinOnSubtreeRemovalFlagIndex,
    kClearTargetOnlyIfInShadowTreeFlagIndex,
    kClipElementVisibleBoundsInLocalRootFlagIndex,
    kClipPathNestedRasterOptimizationFlagIndex,
    kClipboardEventTargetUsesContainerNodeFlagIndex,
    kClipboardOnExtensionServiceWorkerFlagIndex,
    kClipboardPasteImageRespectBufferFlagIndex,
    kCoalesceSelectionchangeEventFlagIndex,
    kCoepReflectionFlagIndex,
    kColorInputAcceptsCSSColorsFlagIndex,
    kColorSpaceDisplayP3LinearFlagIndex,
    kColorSpacePredefinedLinearSpacesFlagIndex,
    kColorSpaceRec2100LinearFlagIndex,
    kComposedPathReturnTargetBeingDispatchedFlagIndex,
    kCompositeClipPathAnimationFlagIndex,
    kCompositeHoverStyleFlagIndex,
    kCompositedSelectionUpdateFlagIndex,
    kCompositingDecisionAtAnimationPhaseBoundariesFlagIndex,
    kCompositionForegroundMarkersFlagIndex,
    kCompositorEventTriggerFlagIndex,
    kCompositorTimelineTriggerFlagIndex,
    kCompressionDictionaryTransportFlagIndex,
    kComputePressureFlagIndex,
    kComputedAccessibilityInfoFlagIndex,
    kConcurrentNativePaintWorkletsFlagIndex,
    kConditionalTracingLoAFFlagIndex,
    kConnectionAllowlistEmbeddedEnforcementFlagIndex,
    kConsistentFormControlPaintSnappingFlagIndex,
    kConstructableStylesheetCacheFlagIndex,
    kContactsManagerFlagIndex,
    kContactsManagerExtraPropertiesFlagIndex,
    kContainerTimingFlagIndex,
    kContentIndexFlagIndex,
    kContextMenuFlagIndex,
    kControlledFrameFlagIndex,
    kControlledFrameWebRequestSecurityInfoFlagIndex,
    kCookieStoreAPIMaxAgeFlagIndex,
    kCookieStoreAPIWhitespaceStrippingFlagIndex,
    kCoopRestrictPropertiesFlagIndex,
    kCorrectTemplateFormParsingFlagIndex,
    kCorsRFC1918FlagIndex,
    kCpuPerformanceFlagIndex,
    kCrashReportingStorageAPIFlagIndex,
    kCreateInlineContentsAnonymousBlockFlagIndex,
    kCrossOriginStorageFlagIndex,
    kCssMaxContentSizingFlagIndex,
    kCssTextFitFlagIndex,
    kCssTextFitReshapingFlagIndex,
    kCustomElementsDisableFormattingFixupsFlagIndex,
    kCustomScrollbarApplyMinimumThumbLengthFlagIndex,
    kCustomizableComboboxFlagIndex,
    kCustomizableSelectMultiplePopupFlagIndex,
    kCustomizableSelectNewUAStylesFlagIndex,
    kDOMParserXmlScriptAlreadyStartedFlagIndex,
    kDatabaseFlagIndex,
    kDateTimeInputTypeEarlyAdvanceFixFlagIndex,
    kDeclarativeCSSModulesFlagIndex,
    kDeclarativeCSSModulesStyleTagFlagIndex,
    kDeclarativeFragmentFlagIndex,
    kDeclarativePerformanceObserverFlagIndex,
    kDeclarativeSkeletonsFlagIndex,
    kDeclarativeWebMCPFlagIndex,
    kDeferLineBoxHitTestToBackgroundFlagIndex,
    kDelegatesFocusTextControlInputFixFlagIndex,
    kDeprecateUnloadOptOutFlagIndex,
    kDesktopCaptureDisableLocalEchoControlFlagIndex,
    kDesktopPWAsAdditionalWindowingControlsFlagIndex,
    kDesktopPWAsAdditionalWindowingControlsOnMoveFlagIndex,
    kDeviceAttributesFlagIndex,
    kDeviceBoundSessionJsApiFlagIndex,
    kDeviceOrientationRequestPermissionFlagIndex,
    kDevicePostureFlagIndex,
    kDialogCloseWhenOpenRemovedFlagIndex,
    kDialogNewFocusBehaviorFlagIndex,
    kDigitalCredentialsProtocolFilterFlagIndex,
    kDigitalGoodsFlagIndex,
    kDigitalGoodsV2_1FlagIndex,
    kDirectSocketsFlagIndex,
    kDirectSocketsInServiceWorkersFlagIndex,
    kDirectSocketsInSharedWorkersFlagIndex,
    kDisableAnchorCenterOnAlignJustifyItemsFlagIndex,
    kDisableDifferentOriginSubframeDialogSuppressionFlagIndex,
    kDisableEllipsisWhenScrolledFlagIndex,
    kDisableFormControlChangeEventDuringMutationFlagIndex,
    kDisconnectWebSocketOnBFCacheFlagIndex,
    kDispatchHiddenVisibilityTransitionsFlagIndex,
    kDispatchSelectionchangeEventPerElementFlagIndex,
    kDispatchWorkerCSPViolationEventForModuleGraphFetchingFlagIndex,
    kDisplayContentsFocusableFlagIndex,
    kDisplayCutoutAPIFlagIndex,
    kDocumentCookieFlagIndex,
    kDocumentDomainFlagIndex,
    kDocumentIsolationPolicyFlagIndex,
    kDocumentOpenIframeUnloadEventsFlagIndex,
    kDocumentOpenOriginAliasRemovalFlagIndex,
    kDocumentOpenSandboxInheritanceRemovalFlagIndex,
    kDocumentPatchingFlagIndex,
    kDocumentPictureInPictureAPIFlagIndex,
    kDocumentPictureInPicturePreferInitialPlacementFlagIndex,
    kDocumentPictureInPictureUserActivationFlagIndex,
    kDocumentPolicyDocumentDomainFlagIndex,
    kDocumentPolicyExpectNoLinkedResourcesFlagIndex,
    kDocumentPolicyInDedicatedWorkerFlagIndex,
    kDocumentPolicyIncludeJSCallStacksInCrashReportsFlagIndex,
    kDocumentPolicyJSProfilingModeFlagIndex,
    kDocumentPolicyNegotiationFlagIndex,
    kDocumentPolicyNetworkEfficiencyGuardrailsFlagIndex,
    kDocumentPolicySyncXHRFlagIndex,
    kDocumentWriteFlagIndex,
    kDragAndDropDownloadURLListFlagIndex,
    kDragAndDropJSFileObjectsFlagIndex,
    kDragImageForLargeImagesFlagIndex,
    kDragThresholdRequiresMouseMovementFlagIndex,
    kDumpForAbsentKeyframeSnapshotsFlagIndex,
    kEditContextAssignmentAsPerSpecFlagIndex,
    kEditContextBoundsUpdateSchedulesFrameFlagIndex,
    kEditContextCodePointDeletionFlagIndex,
    kEditContextHandleTextOrSelectionUpdateDuringCompositionFlagIndex,
    kEditContextSelectionUpdateBeforeTextUpdateEventFlagIndex,
    kEditingUseDomPositionApiFlagIndex,
    kElasticOverscrollBackgroundPaintLocationFixFlagIndex,
    kElasticOverscrollUseEventDeltaForAxisSelectionFlagIndex,
    kElementCaptureFlagIndex,
    kElementInternalsBehaviorsFlagIndex,
    kElementMatchContainerFlagIndex,
    kElementSpecificReadOnlyConstraintValidationFlagIndex,
    kEmailVerificationProtocolFlagIndex,
    kEmbeddedContentCenterAlignBaselineFlagIndex,
    kEmojiZWJVerticalOrientationFlagIndex,
    kEnableXSLTForCAPAlertsFlagIndex,
    kEndpointInclusiveCommitStylesFlagIndex,
    kEnforceAnonymityExposureFlagIndex,
    kEntropyIgnoredForFirstVideoFrameLCPFlagIndex,
    kEventPseudoTargetPropertyFlagIndex,
    kEventPseudoTargetViewTransitionNameFlagIndex,
    kEventTimingInteractionCountFlagIndex,
    kEventTimingMatchingHTMLFlagIndex,
    kEventTimingTargetSelectorFlagIndex,
    kEventTriggerFlagIndex,
    kExperimentalContentSecurityPolicyFeaturesFlagIndex,
    kExperimentalJSProfilerMarkersFlagIndex,
    kExperimentalMachineLearningNeuralNetworkFlagIndex,
    kExperimentalPoliciesFlagIndex,
    kExposeCSSFontFeatureValuesRuleFlagIndex,
    kExposeRenderTimeNonTaoDelayedImageFlagIndex,
    kExtendedTextMetricsFlagIndex,
    kExtensionScriptTaggingFlagIndex,
    kExtensionScriptTaggingTestingAPIFlagIndex,
    kExternalPopupMenuClickEventFlagIndex,
    kEyeDropperAPIFlagIndex,
    kFaceDetectorFlagIndex,
    kFastCompositionCharacterBoundsFlagIndex,
    kFastPlainTextRangeCreateRangeFlagIndex,
    kFastPositionIteratorFlagIndex,
    kFedCmFlagIndex,
    kFedCmActiveModeMultipleIdentityProvidersFlagIndex,
    kFedCmAutofillFlagIndex,
    kFedCmDelegationFlagIndex,
    kFedCmIdPRegistrationFlagIndex,
    kFedCmIdentityHandlerFlagIndex,
    kFedCmLightweightModeFlagIndex,
    kFedCmMultipleIdentityProvidersFlagIndex,
    kFedCmMultipleRequestsFlagIndex,
    kFedCmNavigationInterceptionFlagIndex,
    kFencedFramesFlagIndex,
    kFencedFramesAPIChangesFlagIndex,
    kFencedFramesLocalUnpartitionedDataAccessFlagIndex,
    kFetchBodyBytesFlagIndex,
    kFetchLaterAPIFlagIndex,
    kFetchRetryFlagIndex,
    kFetchUploadStreamingFlagIndex,
    kFileHandlingFlagIndex,
    kFilePickerEventsFixFlagIndex,
    kFileSystemFlagIndex,
    kFileSystemAccessFlagIndex,
    kFileSystemAccessAPIExperimentalFlagIndex,
    kFileSystemAccessGetCloudIdentifiersFlagIndex,
    kFileSystemAccessLocalFlagIndex,
    kFileSystemAccessLockingSchemeFlagIndex,
    kFileSystemAccessOriginPrivateFlagIndex,
    kFileSystemAccessRevokeReadOnRemoveFlagIndex,
    kFileSystemAccessWriteModeFlagIndex,
    kFileSystemObserverFlagIndex,
    kFileSystemObserverUnobserveFlagIndex,
    kFilterContainerLevelStylesFlagIndex,
    kFilterableSelectFlagIndex,
    kFilteringPrimitivesFlagIndex,
    kFindBufferCollapseSkippedSpaceFlagIndex,
    kFindBufferMatchAcrossIgnoredNodesFlagIndex,
    kFindBufferSkipIgnoredSubtreesFlagIndex,
    kFindFirstMisspellingEndWhenNonEditableFlagIndex,
    kFindIgnoreSuggestionFixFlagIndex,
    kFirstLetterParagraphOffsetsFlagIndex,
    kFirstLineAndLetterExcludeInputTextareaFlagIndex,
    kFirstLineTextMetricsFlagIndex,
    kFixHTMLFormControlElementIsReadOnlyFlagIndex,
    kFixMapElementEmptyNameBugFlagIndex,
    kFixSelectionPaintRangeNullOptFlagIndex,
    kFixVisualRectRemoteViewportTransformFlagIndex,
    kFledgeFlagIndex,
    kFledgeAuctionDealSupportFlagIndex,
    kFledgeBiddingAndAuctionServerAPIFlagIndex,
    kFledgeBiddingAndAuctionServerAPIMultiSellerFlagIndex,
    kFledgeClickinessFlagIndex,
    kFledgeCustomMaxAuctionAdComponentsFlagIndex,
    kFledgeDeprecatedRenderURLReplacementsFlagIndex,
    kFledgeDirectFromSellerSignalsHeaderAdSlotFlagIndex,
    kFledgeDirectFromSellerSignalsWebBundlesFlagIndex,
    kFledgeMultiBidFlagIndex,
    kFledgePrivateModelTrainingFlagIndex,
    kFledgeRealTimeReportingFlagIndex,
    kFledgeSellerNonceFlagIndex,
    kFledgeSellerScriptExecutionModeFlagIndex,
    kFledgeTrustedSignalsKVv1CreativeScanningFlagIndex,
    kFledgeTrustedSignalsKVv2ContextualDataFlagIndex,
    kFledgeTrustedSignalsKVv2SupportFlagIndex,
    kFlexWrapBalanceFlagIndex,
    kFocusResetEventFlagIndex,
    kFocusRingRespectExplicitOutlineColorInDarkModeFlagIndex,
    kFocusgroupFlagIndex,
    kFocusgroupV2FlagIndex,
    kFontAccessFlagIndex,
    kFontDataServiceForCSSLocalFontsFlagIndex,
    kFontFamilyPostscriptMatchingCTMigrationFlagIndex,
    kFontFamilyStyleMatchingCTMigrationFlagIndex,
    kFontFeatureSettingsDescriptorFlagIndex,
    kFontFormatAvar2FlagIndex,
    kFontLanguageOverrideFlagIndex,
    kFontMatchAliasesAsLastResortFlagIndex,
    kFontPrewarmerShutdownFallbackFlagIndex,
    kFontStyleObliqueZeroDegreeAsNormalFlagIndex,
    kFontUniqueNameTypefaceCacheFlagIndex,
    kFontVariableItalicAxisFlagIndex,
    kFontVariationSettingsDescriptorFlagIndex,
    kFontationsPrintingFlagIndex,
    kForceEagerMeasureMemoryFlagIndex,
    kForceReduceMotionFlagIndex,
    kForcedColorsFlagIndex,
    kForwardReasonToFetchBodyAbortFlagIndex,
    kFractionalScrollOffsetsFlagIndex,
    kFractionalScrollOffsetsForWebAPIFlagIndex,
    kFragmentedOofInCbFlagIndex,
    kFrameCaretSkipHiddenCheckFlagIndex,
    kFreezeFramesOnVisibilityFlagIndex,
    kGamepadButtonTypesFlagIndex,
    kGamepadMultitouchFlagIndex,
    kGamepadRawInputChangeEventFlagIndex,
    kGamepadWindowEventHandlersFlagIndex,
    kGenerateDragOverlayBeforeDragStartFlagIndex,
    kGenerateXSLTWarningBannerFlagIndex,
    kGeolocationElementFlagIndex,
    kGeometryMapperSingularTransformFixFlagIndex,
    kGeometryUtilsFlagIndex,
    kGeometryUtilsForCSSPseudoElementFlagIndex,
    kGetAllScreensMediaFlagIndex,
    kGetDisplayMediaFlagIndex,
    kGetDisplayMediaAudioSelectionFlagIndex,
    kGetDisplayMediaRequiresUserActivationFlagIndex,
    kGetDisplayMediaWindowAudioCaptureFlagIndex,
    kGetElementsByNameOnlyHTMLElementsFlagIndex,
    kGetTargetRangesRetargetingFlagIndex,
    kGetUserMediaEchoCancellationModesFlagIndex,
    kGlobalPrivacyControlFlagIndex,
    kGlobalPrivacyControlApiFlagIndex,
    kGlobalPrivacyControlForceFlagIndex,
    kGraphemeClusterBoundsCheckFlagIndex,
    kGroupEffectFlagIndex,
    kHTMLAdoptionAlgorithmNewStepsFlagIndex,
    kHTMLAreaElementDisplayNoneFlagIndex,
    kHTMLAreaHreflangTypeFlagIndex,
    kHTMLBodyMarginPixelLengthFlagIndex,
    kHTMLCommandActionsV2FlagIndex,
    kHTMLCommandElementRemovalFlagIndex,
    kHTMLCommandForScrollCommandsFlagIndex,
    kHTMLElementScrollParentFlagIndex,
    kHTMLInterestForInterestButtonPseudoFlagIndex,
    kHTMLLinkElementAttributeValueChangesFlagIndex,
    kHTMLParserIgnoreHeadInNoscriptFlagIndex,
    kHTMLParserTruncatedMarkupDeclarationFlagIndex,
    kHTMLParserYieldAndDelayOftenForTestingFlagIndex,
    kHTMLParserYieldByUserTimingFlagIndex,
    kHTMLPrintingArtifactAnnotationsFlagIndex,
    kHTMLProcessingInstructionFlagIndex,
    kHTMLSwitchAttributeFlagIndex,
    kHandleShadowDOMInSubstringUtilFlagIndex,
    kHandwritingRecognitionFlagIndex,
    kHarfRustShapingFlagIndex,
    kHasUAVisualTransitionFlagIndex,
    kHeadingOffsetFlagIndex,
    kHideVideoControlsWhenUnneededFlagIndex,
    kHighlightsFromPointFlagIndex,
    kHitTestBorderRadiusForStackingContextFlagIndex,
    kHitTestContainerTransformStateForPreserve3dFlagIndex,
    kHitTestCulledInlineOfSelfPaintingChildFlagIndex,
    kHrefTranslateFlagIndex,
    kHstsTopLevelNavigationsOnlyFlagIndex,
    kHyphenVerticalOrientationFixFlagIndex,
    kICUCapitalizationFlagIndex,
    kIgnoreLetterSpacingInCursiveScriptsFlagIndex,
    kImageDataPixelFormatFlagIndex,
    kImageDocumentUseLayoutWidthFlagIndex,
    kImageSrcsetReselectionFlagIndex,
    kImageSrcsetReselectionForSrcCandidateFlagIndex,
    kImplicitRootScrollerFlagIndex,
    kIncomingCallNotificationsFlagIndex,
    kIncrementalFontTransferFlagIndex,
    kInertElementNonEditableFlagIndex,
    kInfiniteCullRectFlagIndex,
    kInheritUserModifyWithoutContenteditableFlagIndex,
    kInitialLetterBlockPositioningFlagIndex,
    kInlineBlockLineNavigationFlagIndex,
    kInlineContainingBlockSkipOpaqueFlagIndex,
    kInlineCursorSkipNonIfcFlagIndex,
    kInlineScriptCacheHintFlagIndex,
    kInnerHTMLParserFastpathLogFailureFlagIndex,
    kInputClientRectWithoutInlinePaddingFlagIndex,
    kInputDisabledHandlerFixFlagIndex,
    kInputInSelectFlagIndex,
    kInputMultipleFieldsUIFlagIndex,
    kInputMultipleFieldsUIWithPointerChecksFlagIndex,
    kInputTypeColorEnhancementsFlagIndex,
    kInsertBlockquoteBeforeOuterBlockFlagIndex,
    kInstallElementFlagIndex,
    kInstallOnDeviceSpeechRecognitionFlagIndex,
    kInstalledAppFlagIndex,
    kIntegrityPolicyScriptFlagIndex,
    kInterestEventsNonComposedFlagIndex,
    kIntersectionObserverCompositedAnimationsForceMainFramesFlagIndex,
    kInvertedColorsFlagIndex,
    kInvisibleSVGAnimationThrottlingFlagIndex,
    kJavaScriptCompileHintsPerFunctionMagicRuntimeFlagIndex,
    kJavaScriptImportTextFlagIndex,
    kJavaScriptSourcePhaseImportsFlagIndex,
    kKeyboardAccessibleTooltipFlagIndex,
    kLabelInteractiveContentCheckBeforeHandlerFlagIndex,
    kLangAttributeAwareFormControlUIFlagIndex,
    kLanguageDetectionAPIFlagIndex,
    kLanguageDetectionAPIForWorkersFlagIndex,
    kLayoutCloneForScrollableOverflowChangeFlagIndex,
    kLayoutContainingBlockReturnsBoxFlagIndex,
    kLayoutIgnoreMarginsForStickyFlagIndex,
    kLayoutOOFCollectInlinesFixFlagIndex,
    kLazyImageConformantLoadEventTimingFlagIndex,
    kLazyLoadVideoAndAudioFlagIndex,
    kLazyParseInlineStyleSheetsFlagIndex,
    kLeftClickToHandleSuggestionFlagIndex,
    kLegacyAbstractRangeFlagIndex,
    kLightDismissFromClickFlagIndex,
    kLineBreakAfterSpaceBeforeOpenTagFlagIndex,
    kLineBreakBidiControlEnterFlagIndex,
    kLineBreakerClearShapeResultOnOverflowFlagIndex,
    kLineBreakerHanKerningEndFlagIndex,
    kLocalNetworkAccessForWebRTCOptOutFlagIndex,
    kLocalNetworkAccessPermissionPolicyFlagIndex,
    kLocalNetworkAccessWebRTCFlagIndex,
    kLocalNetworkAccessWebSocketsTargetAddressSpaceFlagIndex,
    kLockedModeFlagIndex,
    kLoginElementFlagIndex,
    kLongAnimationFrameSourceCharPositionFlagIndex,
    kLongAnimationFrameSourceLineColumnFlagIndex,
    kLongAnimationFrameSourceLineColumnInterfaceFlagIndex,
    kLongAnimationFrameStyleDurationFlagIndex,
    kLongAnimationFrameWorkerFlagIndex,
    kLongPressHitTestInFrameFlagIndex,
    kLongPressLinkSelectTextFlagIndex,
    kLongPressReleasesActiveStateFlagIndex,
    kLongTaskFromLongAnimationFrameFlagIndex,
    kMacCharacterFallbackCacheFlagIndex,
    kMacDisableCtrlHomeEndFlagIndex,
    kMacFontWeightFromOS2FlagIndex,
    kMachineLearningNeuralNetworkFlagIndex,
    kManagedConfigurationFlagIndex,
    kManualTextFlagIndex,
    kMarginTrimFlagIndex,
    kMarkAncestorsOnDisplayLockUnlockFlagIndex,
    kMaskDeserializationTimeForCrossOriginMessagesFlagIndex,
    kMaskWaitForAllImagesFlagIndex,
    kMathMLAnchorElementFlagIndex,
    kMathMLOperatorRTLMirroringFlagIndex,
    kMeasureMemoryFlagIndex,
    kMediaCapabilitiesEncodingInfoFlagIndex,
    kMediaCapabilitiesSpatialAudioFlagIndex,
    kMediaCaptionSettingsButtonFlagIndex,
    kMediaCaptureFlagIndex,
    kMediaCaptureBackgroundBlurFlagIndex,
    kMediaCaptureCameraControlsFlagIndex,
    kMediaCaptureConfigurationChangeFlagIndex,
    kMediaCaptureElementPreviewFlagIndex,
    kMediaCaptureVoiceIsolationFlagIndex,
    kMediaControlsExpandGestureFlagIndex,
    kMediaControlsOverlayPlayButtonFlagIndex,
    kMediaElementMutedDefaultStateFlagIndex,
    kMediaElementVolumeGreaterThanOneFlagIndex,
    kMediaEngagementBypassAutoplayPoliciesFlagIndex,
    kMediaLatencyHintFlagIndex,
    kMediaPlaybackWhileNotVisiblePermissionPolicyFlagIndex,
    kMediaQueryNavigationControlsFlagIndex,
    kMediaSessionFlagIndex,
    kMediaSessionChapterInformationFlagIndex,
    kMediaSourceExperimentalFlagIndex,
    kMediaSourceExtensionsForWebCodecsFlagIndex,
    kMediaStreamTrackProcessorStatsFlagIndex,
    kMediaStreamTrackTransferFlagIndex,
    kMediaStreamTrackWebSpeechFlagIndex,
    kMemoryConsumerForNGShapeCacheFlagIndex,
    kMenuElementsFlagIndex,
    kMessagePortCloseEventFlagIndex,
    kMiddleClickAutoscrollFlagIndex,
    kMixedContentAutoupgradesUseIsMixedContentRestrictedInFrameFlagIndex,
    kMobileLayoutThemeFlagIndex,
    kModifyParagraphCrossEditingoundaryFlagIndex,
    kModuleMapDoNotCacheFailedFetchFlagIndex,
    kModulePreloadReferrerFlagIndex,
    kModulePreloadStyleJsonFlagIndex,
    kMojoJSFlagIndex,
    kMojoJSTestFlagIndex,
    kMonospaceGlyphCompactionFlagIndex,
    kMoveEndingSelectionToListChildFlagIndex,
    kMoveParagraphsPreserveInlineStructureFlagIndex,
    kMulticolColumnWidthMaxContentClampFlagIndex,
    kNastaliqScriptFlagIndex,
    kNavigateEventDeferCrossDocumentCommitFlagIndex,
    kNavigationEventTimingFlagIndex,
    kNavigationSourcePseudoClassFlagIndex,
    kNavigationTimingRedirectTimingViaTAOFlagIndex,
    kNavigationTypeAndPhaseFlagIndex,
    kNavigatorContentUtilsFlagIndex,
    kNetInfoConstantTypeFlagIndex,
    kNetInfoDownlinkMaxFlagIndex,
    kNeutralKeyframeEasingComplianceFlagIndex,
    kNewAnimationCompositingCheckingFlagIndex,
    kNewAnimationDispositionReportingFlagIndex,
    kNewHTMLSettingMethodsFlagIndex,
    kNoExtendSelectionToUserSelectNoneOutOfFlowFlagIndex,
    kNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableFlagIndex,
    kNoFontAntialiasingFlagIndex,
    kNoIdleEncodingForWebTestsFlagIndex,
    kNoNbspForInterElementSpaceOnCopyFlagIndex,
    kNoSynchronousThrowForCrossOriginBlockedWorkerFlagIndex,
    kNodeIteratorRemovalFixFlagIndex,
    kNonEmptyBlockquotesOnOutdentingFlagIndex,
    kNonEmptyVisibleTextSelectionForTextFragmentFlagIndex,
    kNonStandardAppearanceValueSliderVerticalFlagIndex,
    kNormalizeLineEndingsInInsertTextFlagIndex,
    kNotificationConstructorFlagIndex,
    kNotificationContentImageFlagIndex,
    kNotificationTriggersFlagIndex,
    kNotificationsFlagIndex,
    kNotifySelectionControllerOnUnchangedSelectionFlagIndex,
    kNumberInputFullWidthCharsFlagIndex,
    kOfflineAudioContextIncrementalRenderingFlagIndex,
    kOffscreenCanvasGetContextAttributesFlagIndex,
    kOffsetMappingReuseFullWidthSpaceFixFlagIndex,
    kOffsetPathTransformUpdateFixFlagIndex,
    kOmitBlurEventOnElementRemovalFlagIndex,
    kOmitSubframeDetachmentEventsOnRemovalFlagIndex,
    kOnDeviceWebSpeechAvailableFlagIndex,
    kOnDeviceWebSpeechQualityFlagIndex,
    kOofLayoutRequiresSideEffectsFlagIndex,
    kOpaqueRangeFlagIndex,
    kOpenPopoverInvokerRestrictToSameTreeScopeFlagIndex,
    kOptionDisablednessCheckAncestorsFlagIndex,
    kOrientationEventFlagIndex,
    kOriginAPIFlagIndex,
    kOriginIsolationHeaderFlagIndex,
    kOriginPolicyFlagIndex,
    kOriginTrialsSampleAPIFlagIndex,
    kOriginTrialsSampleAPIBrowserReadWriteFlagIndex,
    kOriginTrialsSampleAPIDependentFlagIndex,
    kOriginTrialsSampleAPIDeprecationFlagIndex,
    kOriginTrialsSampleAPIExpiryGracePeriodFlagIndex,
    kOriginTrialsSampleAPIExpiryGracePeriodThirdPartyFlagIndex,
    kOriginTrialsSampleAPIImpliedFlagIndex,
    kOriginTrialsSampleAPIInvalidOSFlagIndex,
    kOriginTrialsSampleAPINavigationFlagIndex,
    kOriginTrialsSampleAPIPersistentExpiryGracePeriodFlagIndex,
    kOriginTrialsSampleAPIPersistentFeatureFlagIndex,
    kOriginTrialsSampleAPIPersistentInvalidOSFlagIndex,
    kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureFlagIndex,
    kOriginTrialsSampleAPIThirdPartyFlagIndex,
    kOutlineDrawAutoStyleZeroWidthFlagIndex,
    kOverlayGlobalRuleRemovalFlagIndex,
    kOverlayPropertyFlagIndex,
    kOverscrollAreasFlagIndex,
    kPNaClFlagIndex,
    kPagePopupFlagIndex,
    kPagePopupCopyPasteFlagIndex,
    kPageSwapEventFlagIndex,
    kPaintCaretAfterInnerEditorPaintFlagIndex,
    kPaintHoldingForIframesFlagIndex,
    kPaintTimingContentImagePseudoElementsFlagIndex,
    kPaintUnderInvalidationCheckingFlagIndex,
    kParakeetFlagIndex,
    kPartitionVisitedLinkDatabaseWithSelfLinksFlagIndex,
    kPasswordRevealFlagIndex,
    kPaymentAppFlagIndex,
    kPaymentHandlerStaticCustomSizeFlagIndex,
    kPaymentLinkDetectionFlagIndex,
    kPaymentMethodChangeEventFlagIndex,
    kPaymentRequestFlagIndex,
    kPaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorFlagIndex,
    kPerMethodCanMakePaymentQuotaFlagIndex,
    kPerformanceManagerInstrumentationFlagIndex,
    kPerformanceMarkCustomUserTimingFromSubframeFlagIndex,
    kPerformanceMarkFeatureUsageFlagIndex,
    kPeriodicBackgroundSyncFlagIndex,
    kPermissionsPolicyAPIFlagIndex,
    kPermissionsPolicyForSharedWorkersFlagIndex,
    kPermissionsRequestRevokeFlagIndex,
    kPersistentWidgetAPIFlagIndex,
    kPointerLockOnAndroidFlagIndex,
    kPointerRawUpdateOnlyInSecureContextFlagIndex,
    kPopoverHintNestedShowExceptionFlagIndex,
    kPopoverHintNewBehaviorFlagIndex,
    kPopupWidgetRequiresUserActivationFlagIndex,
    kPositionOutsideTabSpanCheckSiblingNodeFlagIndex,
    kPositionVisibilityIgnoreNonClipAncestorsFlagIndex,
    kPositionVisibilitySingularValuesFlagIndex,
    kPotentialPermissionsPolicyReportingFlagIndex,
    kPrePaintBoxInvalidatorUsesFragmentsFlagIndex,
    kPreciseMemoryInfoFlagIndex,
    kPreferDefaultScrollbarStylesFlagIndex,
    kPreferNonCompositedScrollingFlagIndex,
    kPreferredAudioOutputDevicesFlagIndex,
    kPrefersReducedDataFlagIndex,
    kPrefetchAndPrerenderActivationBeaconFlagIndex,
    kPreloadLinkRelDataUrlsFlagIndex,
    kPreloadScannerImprovementsFlagIndex,
    kPrerender2FlagIndex,
    kPrerender2CrossOriginIframesFlagIndex,
    kPrerenderActivationByFormSubmissionFlagIndex,
    kPrerenderUntilScriptFlagIndex,
    kPresentationFlagIndex,
    kPreserveHtmlEquivalentTagsInTypingStyleFlagIndex,
    kPreserveUnfocusedSelectionCacheFlagIndex,
    kPreventTextSelectionJumpFlagIndex,
    kPrivateNetworkAccessNullIpAddressFlagIndex,
    kPrivateStateTokensFlagIndex,
    kPrivateStateTokensAlwaysAllowIssuanceFlagIndex,
    kProfilerAPIFlagIndex,
    kProfilerAPIForDedicatedWorkerFlagIndex,
    kProgrammaticScrollPromiseFlagIndex,
    kProgressEventInServiceWorkerFlagIndex,
    kPropagateOverscrollBehaviorFromRootFlagIndex,
    kPseudoElementsFocusableFlagIndex,
    kPseudoElementsHitTestableFlagIndex,
    kPseudoElementsHoverableFlagIndex,
    kPushMessageDataBytesFlagIndex,
    kPushMessagingFlagIndex,
    kPushMessagingSubscriptionChangeFlagIndex,
    kQuotaExceededErrorUpdateFlagIndex,
    kRTCConfigurationIceTransportsFlagIndex,
    kRTCDataChannelPriorityFlagIndex,
    kRTCDiagnosticLoggingFlagIndex,
    kRTCEncodedAudioFrameConstructorFlagIndex,
    kRTCEncodedFrameAudioLevelFlagIndex,
    kRTCEncodedFrameSetMetadataFlagIndex,
    kRTCEncodedFrameTimestampsFlagIndex,
    kRTCEncodedSourceFlagIndex,
    kRTCEncodedVideoFrameAdditionalMetadataFlagIndex,
    kRTCEncodedVideoFrameConstructorFlagIndex,
    kRTCJitterBufferTargetFlagIndex,
    kRTCLegacyCallbackBasedGetStatsFlagIndex,
    kRTCLegacyDiagnosticLoggingFlagIndex,
    kRTCRtpEncodingParametersCodecFlagIndex,
    kRTCRtpScaleResolutionDownToFlagIndex,
    kRTCRtpScriptTransformFlagIndex,
    kRTCRtpTransportFlagIndex,
    kRTCStatsRelativePacketArrivalDelayFlagIndex,
    kRTCSvcScalabilityModeFlagIndex,
    kRadioButtonCircularBorderRadiusFlagIndex,
    kRangeBoundaryFastPathFlagIndex,
    kRasterInducingScrollFlagIndex,
    kRateLimitPointerLockRequestsFlagIndex,
    kReadClipboardDataOnClipboardItemGetTypeFlagIndex,
    kReadOnlyTextControlSelectionFlagIndex,
    kReadableStreamBYOBReaderReadMinOptionFlagIndex,
    kReadingFlowWithSlotsFlagIndex,
    kRecheckParentDuringNodeVectorInsertionFlagIndex,
    kReduceAcceptLanguageFlagIndex,
    kReduceUserAgentMinorVersionFlagIndex,
    kRegionCaptureFlagIndex,
    kRelOpenerBcgDependencyHintFlagIndex,
    kRelatedWebsitePartitionAPIFlagIndex,
    kReleasePaintHoldingWithoutContentfulPaintFlagIndex,
    kRemotePlaybackFlagIndex,
    kRemotePlaybackBackendFlagIndex,
    kRemoveCharsetAutoDetectionForISO2022JPFlagIndex,
    kRemoveChildrenInReplaceChildrenFlagIndex,
    kRemoveCollapsedPlaceholderForContentEditableFlagIndex,
    kRemoveDanglingMarkupInTargetFlagIndex,
    kRemoveDataUrlInSvgUseFlagIndex,
    kRemoveNonAllowlistedCreateEventFlagIndex,
    kRemoveScrollNodeWorkaroundFlagIndex,
    kRemoveVisibleSelectionInDOMSelectionFlagIndex,
    kRenderPriorityAttributeFlagIndex,
    kReplaceChildrenWithFragmentFastPathFlagIndex,
    kReplaceCompositionActualInsertedLengthFlagIndex,
    kReplacedNormalFlowStackingInlinePaintFlagIndex,
    kReportFirstFrameTimeAsRenderTimeFlagIndex,
    kReportLayoutShiftRectsInCssPixelsFlagIndex,
    kRequestIsReloadNavigationFlagIndex,
    kResourceTimingInitiatorFlagIndex,
    kResourceTimingUseCORSForBodySizesFlagIndex,
    kRespectOverscrollBehaviorForScrollBubblingFlagIndex,
    kResponsiveIframesFlagIndex,
    kResponsiveIframesShrinkFlagIndex,
    kResponsiveIframesSingleAxisIcbFlagIndex,
    kRestrictGamepadAccessFlagIndex,
    kRestrictOwnAudioFlagIndex,
    kRootScrollbarFollowsBrowserThemeFlagIndex,
    kRouteMatchingFlagIndex,
    kRtcAlwaysNegotiateDataChannelsFlagIndex,
    kRtcAudioJitterBufferMaxPacketsFlagIndex,
    kRtcRtpHeaderEncryptionPolicyFlagIndex,
    kRubyTextDecorationSpacingFlagIndex,
    kRunMicrotaskBeforeXmlScriptFlagIndex,
    kRunSnapshotPostLayoutStateStepsFlagIndex,
    kSVGEmbeddedAsReplacedElementFlagIndex,
    kSVGPathDataAPIFlagIndex,
    kSVGTextPathSideAttributeFlagIndex,
    kSanitizeIDNEmailFormInputFlagIndex,
    kSanitizeWorkerErrorPropagationFlagIndex,
    kSanitizerAPIFlagIndex,
    kScopedViewTransitionSizeContainmentFlagIndex,
    kScoreLineBreakerAbortFlagIndex,
    kScreenDetailedHdrHeadroomFlagIndex,
    kScriptBasedOnUnicodeBlockFlagIndex,
    kScriptedSpeechRecognitionFlagIndex,
    kScriptedSpeechSynthesisFlagIndex,
    kScrollAnchorSerializationUseParentForTextNodeFlagIndex,
    kScrollAxisLockFlagIndex,
    kScrollIntoViewAlignAutoFlagIndex,
    kScrollIntoViewNearestFlagIndex,
    kScrollIntoViewNoInitialFocusNavigationStartingPointFlagIndex,
    kScrollIntoViewRootFrameViewportBugFixFlagIndex,
    kScrollPerformanceTimingFlagIndex,
    kScrollTimelineCurrentTimeFlagIndex,
    kScrollTimelineNamedRangeScrollFlagIndex,
    kScrollToTextFragmentDirectiveLimitFlagIndex,
    kScrollTopLeftInteropFlagIndex,
    kScrollVisibilityHiddenScrollersFlagIndex,
    kScrollbarColorFlagIndex,
    kScrollbarGutterBugFixFlagIndex,
    kScrollbarWidthFlagIndex,
    kSearchTextHighlightPseudoFlagIndex,
    kSecurePaymentConfirmationFlagIndex,
    kSecurePaymentConfirmationAvailabilityAPIFlagIndex,
    kSecurePaymentConfirmationCapabilitiesFlagIndex,
    kSecurePaymentConfirmationDebugFlagIndex,
    kSecurePaymentConfirmationExtensionsDisallowForThirdPartiesFlagIndex,
    kSecurePaymentConfirmationOptOutFlagIndex,
    kSelectAnchorInViewportFlagIndex,
    kSelectAudioOutputFlagIndex,
    kSelectLabelClickOpensPickerFlagIndex,
    kSelectPopupBackgroundFlagIndex,
    kSelectRemoveOverflowHiddenFlagIndex,
    kSelectUsesFlatTreeFlagIndex,
    kSelectedcontentMultipleFlagIndex,
    kSelectedcontentSpec2FlagIndex,
    kSelectedcontentelementAttributeFlagIndex,
    kSelectionAndFocusedVisiblePositionMatchFlagIndex,
    kSelectionCollapsedDirectionNoneFlagIndex,
    kSelectionEditingBoundarySlottedContentFlagIndex,
    kSelectionFocusAffinityFlagIndex,
    kSelectionHandleWithBottomClippedFlagIndex,
    kSelectionRemoveRangeNotFoundErrorFlagIndex,
    kSelectionSetBaseAndExtentNonNullNodeFlagIndex,
    kSelectivePermissionsInterventionFlagIndex,
    kSendBeaconThrowForBlobWithNonSimpleTypeFlagIndex,
    kSendEarlyLastBeginMainFrameFlagIndex,
    kSendSlotChangeSignalAfterNodeInsertedFlagIndex,
    kSensorExtraClassesFlagIndex,
    kSeparateDeferModuleScriptTasksFlagIndex,
    kSequentialFocusPrimitivesFlagIndex,
    kSequentialFocusPrimitivesShadowRootsFlagIndex,
    kSerialFlagIndex,
    kSerialPortConnectedFlagIndex,
    kSerializeInvalidSelectorsInForgivingSelectorListFlagIndex,
    kSerializeViewTransitionStateInSPAFlagIndex,
    kServiceWorkerBackgroundSyncInDedicatedWorkerFlagIndex,
    kServiceWorkerClientLifecycleStateFlagIndex,
    kServiceWorkerCodeCacheFlagIndex,
    kServiceWorkerCodeCacheHashingFlagIndex,
    kServiceWorkerInDedicatedWorkerFlagIndex,
    kServiceWorkerScriptEncodingFlagIndex,
    kServiceWorkerStaticRouterTimingInfoFlagIndex,
    kSetHTMLCanRunScriptsFlagIndex,
    kSetSequentialFocusStartingPointFlagIndex,
    kSetShapeFlagIndex,
    kShadowRootAdoptedStyleSheetFlagIndex,
    kShadowRootNamespaceCheckFlagIndex,
    kShadowRootReferenceTargetFlagIndex,
    kShadowRootReferenceTargetAriaOwnsFlagIndex,
    kShadowRootSlotAssignmentFlagIndex,
    kSharedArrayBufferFlagIndex,
    kSharedArrayBufferUnrestrictedAccessAllowedFlagIndex,
    kSharedWorkerFlagIndex,
    kSharedWorkerExtendedLifetimeFlagIndex,
    kSideRelativeBackgroundPositionFlagIndex,
    kSignatureBasedInlineIntegrityFlagIndex,
    kSingleAxisScrollContainersFlagIndex,
    kSingleAxisScrollContainersForScrollSnapFlagIndex,
    kSkipAdFlagIndex,
    kSkipCallbacksWhenDevToolsNotOpenFlagIndex,
    kSkipCompositingStaticBackdropFilterAnimationFlagIndex,
    kSkipEventCaptureFlagIndex,
    kSkipHtmlInterchangeInForeignContentFlagIndex,
    kSkipInitialForcedScrollbarFlagIndex,
    kSkipPaintInvalidationWhileStayingInvisibleFlagIndex,
    kSkipStaleUndoStepsInIdleSpellCheckFlagIndex,
    kSkipTickingStaticAnimationsFlagIndex,
    kSkipTouchEventFilterFlagIndex,
    kSkipUnselectableElementsInParagraphBoundaryFlagIndex,
    kSmallerViewportUnitsFlagIndex,
    kSmartCardFlagIndex,
    kSmartCardContextReleaseFlagIndex,
    kSmartZoomFlagIndex,
    kSnapshotScrollTimelinesPostLayoutFlagIndex,
    kSortedLayoutShiftSourcesByImpactAreaFlagIndex,
    kSourceSpecificMulticastInDirectSocketsFlagIndex,
    kSpatNavUsesCursorInheritanceFlagIndex,
    kSpeakerSelectionFlagIndex,
    kSpecCompliantXmlMimeTypesFlagIndex,
    kSpeculationMeasurementFlagIndex,
    kSpeculationRulesModerateViewportHeuristicsControlFlagIndex,
    kSpellCheckChunkingFlagIndex,
    kSpellCheckCustomDictionaryAPIFlagIndex,
    kSplitQualifiedNameOnFirstColonFlagIndex,
    kSplitTextNotCleanupDummySpansFlagIndex,
    kSrcsetSelectionMatchesImageSetFlagIndex,
    kSrcsetTwoDimensionalSizesFlagIndex,
    kStableBlinkFeaturesFlagIndex,
    kStackingContextIsNotStackedFlagIndex,
    kStaleImageNaturalSizeDuringRevalidationFlagIndex,
    kStaleIntersectionGeometryForThrottledFramesFlagIndex,
    kStandardizedBrowserZoomFlagIndex,
    kStandardizedBrowserZoomOptOutFlagIndex,
    kStickyUserActivationAcrossSameOriginNavigationFlagIndex,
    kStorageBucketsFlagIndex,
    kStorageBucketsDurabilityFlagIndex,
    kStorageBucketsLocksFlagIndex,
    kStrictMimeTypesForWorkersFlagIndex,
    kStyleResourceFetcherIdentityCheckFlagIndex,
    kStylusHandwritingFlagIndex,
    kSubAppsFlagIndex,
    kSubframeMouseCaptureOwnerFlagIndex,
    kSuppressFullscreenFromUnfocusedViewFlagIndex,
    kSuppressPointerStreamAfterDragFlagIndex,
    kSvgAnimateMotionDiscreteCalcModeFlagIndex,
    kSvgAvoidResettingFilterQualityForTiledPatternFlagIndex,
    kSvgCss3dTransformsFlagIndex,
    kSvgEmptyAttributeStringParsingFixFlagIndex,
    kSvgEnableTextDecorationCssStylingFlagIndex,
    kSvgFallBackToContainerSizeFlagIndex,
    kSvgFeImageEXIFOrientationFlagIndex,
    kSvgFeImageSkipHiddenContainerViewportDependenceFlagIndex,
    kSvgFilterPaintsForHiddenContentFlagIndex,
    kSvgFilterUserSpaceViewportForSvgFlagIndex,
    kSvgHyperlinkElementUtilsFlagIndex,
    kSvgIgnoreNegativeEllipseRadiiFlagIndex,
    kSvgImageAnimationResetFlagIndex,
    kSvgImageNonUniformScalingFixFlagIndex,
    kSvgIncrementalStyleFlagIndex,
    kSvgInlineRootPixelSnappingScaleAdjustmentFlagIndex,
    kSvgInstanceSyncOptimizationFlagIndex,
    kSvgLengthResolveUnparsedValueFlagIndex,
    kSvgNewZoomFlagIndex,
    kSvgPathLengthCssPropertyFlagIndex,
    kSvgScriptElementAsyncAttributeFlagIndex,
    kSvgScriptFragmentAlreadyStartedFlagIndex,
    kSvgSizingWithPreserveAspectRatioNoneFlagIndex,
    kSvgStyleElementReflectTypeAndMediaFlagIndex,
    kSvgSupportMediaFragmentsFlagIndex,
    kSvgTextPositioningGraphemeClustersFlagIndex,
    kSvgUseNestedResourceDocumentsFlagIndex,
    kSvgUseNestedResourceDocumentsDelayLoadFlagIndex,
    kSyncCrossDocumentAnimationTimingFlagIndex,
    kSynthesizedKeyboardEventsForAccessibilityActionsFlagIndex,
    kSyntheticMouseHoverOverInactivePageFlagIndex,
    kSystemWakeLockFlagIndex,
    kTabAlignmentWithFloatsFlagIndex,
    kTabSizeInRubyBaseFlagIndex,
    kTableCellBorderColorInheritFlagIndex,
    kTableIsAutoFixedLayoutFlagIndex,
    kTargetInShadowDeterminedBeforeListenerFlagIndex,
    kTargetRangesForBackwardDeletionUnitFlagIndex,
    kTemporalInputHostBlurFlagIndex,
    kTestBlinkFeatureDefaultFlagIndex,
    kTestFeatureFlagIndex,
    kTestFeatureCustomEnableCheckFlagIndex,
    kTestFeatureDependentFlagIndex,
    kTestFeatureForBrowserProcessReadWriteAccessOriginTrialFlagIndex,
    kTestFeatureImpliedFlagIndex,
    kTestFeatureStableFlagIndex,
    kTextAreaPlaceholderBreakAriaHiddenUpdateFlagIndex,
    kTextAreaResizerFixedSizeFlagIndex,
    kTextAutoSpaceIgnoreRubyAnnotationFlagIndex,
    kTextBoxTrimForNestedListFlagIndex,
    kTextBoxTrimOnInlineBoxFlagIndex,
    kTextBoxTrimOnInlineBoxTextDecorationFlagIndex,
    kTextDetectorFlagIndex,
    kTextEmphasisPositionAutoFlagIndex,
    kTextEncodingDetectorTldHintFlagIndex,
    kTextFragmentAPIFlagIndex,
    kTextFragmentIdentifiersFlagIndex,
    kTextFragmentTapOpensContextMenuFlagIndex,
    kTextIteratorExcludeAutofilledSelectFixFlagIndex,
    kTextMetricsBaselinesFlagIndex,
    kTextOverflowClipWithSelectionFlagIndex,
    kTextOverflowInTextareaFlagIndex,
    kTextOverflowStringFlagIndex,
    kTextScaleMetaTagFlagIndex,
    kTextSpacingTrimFallbackFlagIndex,
    kTextSpacingTrimFallback2FlagIndex,
    kTextSpacingTrimFallbackChwsFlagIndex,
    kTextStreamMethodFlagIndex,
    kTimePickerHonorsStepFlagIndex,
    kTimeZoneChangeEventFlagIndex,
    kTimelineTriggerFlagIndex,
    kTimerThrottlingForBackgroundTabsFlagIndex,
    kTimestampBasedCLSTrackingFlagIndex,
    kTopicsAPIFlagIndex,
    kTouchDragAndContextMenuFlagIndex,
    kTouchDragAndDropFlagIndex,
    kTouchDragOnShortPressFlagIndex,
    kTouchEventFeatureDetectionFlagIndex,
    kTouchTextEditingRedesignFlagIndex,
    kTrackAnimatedSourcesFlagIndex,
    kTrackAnimatedSourcesForInheritedPropertiesFlagIndex,
    kTransferableRTCDataChannelFlagIndex,
    kTranslateServiceFlagIndex,
    kTranslationAPIFlagIndex,
    kTranslationAPIForWorkersFlagIndex,
    kTreatMhtmlInitialDocumentLoadsAsCrossDocumentFlagIndex,
    kTrustedTypesCreateParserOptionsFlagIndex,
    kTrustedTypesFromLiteralFlagIndex,
    kTrustedTypesUseCodeLikeFlagIndex,
    kTwoPhaseViewTransitionFlagIndex,
    kUAImageReplacementAPIFlagIndex,
    kURLPatternCompareComponentFlagIndex,
    kURLPatternGenerateFlagIndex,
    kURLSearchParamsHasAndDeleteMultipleArgsFlagIndex,
    kUnboundedElementFlagIndex,
    kUnclosedFormControlIsInvalidFlagIndex,
    kUnexposedTaskIdsFlagIndex,
    kUnprefixedSpeechRecognitionFlagIndex,
    kUnrestrictedMeasureUserAgentSpecificMemoryFlagIndex,
    kUnrestrictedSharedArrayBufferFlagIndex,
    kUnrestrictedUsbFlagIndex,
    kUnsafeEscapingUnboundedElementOnTheOpenWebFlagIndex,
    kUnsafeUnboundedElementOnTheOpenWebFlagIndex,
    kUpdateComplexSafaAreaConstraintsFlagIndex,
    kUpdateSelectionOnNodeInsertionFlagIndex,
    kUseBeginFramePresentationFeedbackFlagIndex,
    kUseLowQualityInterpolationFlagIndex,
    kUseOriginalDomOffsetsForOffsetMapFlagIndex,
    kUsePaintGeometryForIntersectionFlagIndex,
    kUsePositionForPointInFlexibleBoxWithSingleChildElementFlagIndex,
    kUsePositionIfIsVisuallyEquivalentCandidateFlagIndex,
    kUseShadowHostStyleCheckEditableFlagIndex,
    kUseUndoStepElementDispatchBeforeInputFlagIndex,
    kUserActionPseudosStopAtTopLayerFlagIndex,
    kUserDefinedEntryPointTimingFlagIndex,
    kUserMediaElementFlagIndex,
    kUserMediaElementLegacyFlagIndex,
    kV8IdleTasksFlagIndex,
    kVariableSystemFontSupportOnWindowsFlagIndex,
    kVideoAutoFullscreenFlagIndex,
    kVideoFrameMetadataBackgroundBlurFlagIndex,
    kVideoFrameMetadataRtpTimestampFlagIndex,
    kVideoFullscreenOrientationLockFlagIndex,
    kVideoRotateToFullscreenFlagIndex,
    kVideoTrackGeneratorFlagIndex,
    kVideoTrackGeneratorInWindowFlagIndex,
    kVideoTrackGeneratorInWorkerFlagIndex,
    kViewTransitionLongCallbackTimeoutForTestingFlagIndex,
    kViewTransitionPreventSvgFilterPaintFlagIndex,
    kViewTransitionSkipPseudoTreeForNavigationCaptureFlagIndex,
    kViewTransitionSkipZeroHeightControlsSnapFlagIndex,
    kViewportHeightClientHintHeaderFlagIndex,
    kViewportSegmentsFlagIndex,
    kVisibilityCollapseColumnFlagIndex,
    kVisualRectMappingFixForExpansionFlagIndex,
    kWakeLockFlagIndex,
    kWarnOnContentVisibilityRenderAccessFlagIndex,
    kWavyDecorationContinuousPhaseFlagIndex,
    kWebAppInstallationFlagIndex,
    kWebAppLaunchQueueFlagIndex,
    kWebAppScopeExtensionsFlagIndex,
    kWebAppScopeSystemAccentColorFlagIndex,
    kWebAppTabStripFlagIndex,
    kWebAppTabStripCustomizationsFlagIndex,
    kWebAppTranslationsFlagIndex,
    kWebAssemblyCustomDescriptorsV2FlagIndex,
    kWebAssemblyJSPromiseIntegrationFlagIndex,
    kWebAudioBypassOutputBufferingFlagIndex,
    kWebAudioBypassOutputBufferingOptOutFlagIndex,
    kWebAudioConfigurableRenderQuantumFlagIndex,
    kWebAuthFlagIndex,
    kWebAuthAuthenticatorAttachmentFlagIndex,
    kWebAuthenticationAmbientFlagIndex,
    kWebAuthenticationAttestationFormatsFlagIndex,
    kWebAuthenticationCmtgKeyFlagIndex,
    kWebAuthenticationCrossDeviceFallbackUrlFlagIndex,
    kWebAuthenticationRemoteClientDataJsonFlagIndex,
    kWebAuthenticationRemoteDesktopSupportFlagIndex,
    kWebAutocorrectByDefaultFlagIndex,
    kWebBluetoothFlagIndex,
    kWebBluetoothGetDevicesFlagIndex,
    kWebBluetoothScanningFlagIndex,
    kWebBluetoothWatchAdvertisementsFlagIndex,
    kWebBluetoothWorldIsolatedCacheFlagIndex,
    kWebCodecsVideoEncoderBuffersFlagIndex,
    kWebCryptoPQCFlagIndex,
    kWebGLDeveloperExtensionsFlagIndex,
    kWebGLDraftExtensionsFlagIndex,
    kWebGLDrawingBufferStorageFlagIndex,
    kWebGLOnWebGPUFlagIndex,
    kWebGLToneMappingFlagIndex,
    kWebGPUDeveloperFeaturesFlagIndex,
    kWebGPUExperimentalFeaturesFlagIndex,
    kWebGPUExperimentalResourceTableFlagIndex,
    kWebGPUExternalImageHDRHeadroomFlagIndex,
    kWebGPUMapSyncOnWorkersFlagIndex,
    kWebGPUMultithreadDawnWireOnWorkersFlagIndex,
    kWebHIDFlagIndex,
    kWebHIDOnServiceWorkersFlagIndex,
    kWebHIDWorldIsolatedCacheFlagIndex,
    kWebHapticsFlagIndex,
    kWebIDLBigIntUsesToBigIntFlagIndex,
    kWebIdentityDigitalCredentialsFlagIndex,
    kWebIdentityDigitalCredentialsCreationFlagIndex,
    kWebMCPFlagIndex,
    kWebMCPContinuationsFlagIndex,
    kWebMCPDeclarativeFileInputFlagIndex,
    kWebMCPFormAssociatedCustomElementsFlagIndex,
    kWebNFCFlagIndex,
    kWebOTPFlagIndex,
    kWebOTPAssertionFeaturePolicyFlagIndex,
    kWebPreferencesFlagIndex,
    kWebPrintingFlagIndex,
    kWebRtcSctpSnapFlagIndex,
    kWebSerialWorldIsolatedCacheFlagIndex,
    kWebShareFlagIndex,
    kWebSocketOptionBagFlagIndex,
    kWebSocketStreamFlagIndex,
    kWebSocketStreamStandardBinaryChunkTypeFlagIndex,
    kWebSpeechRecognitionContextFlagIndex,
    kWebSpeechTimestampsFlagIndex,
    kWebSpeechUnspokenPunctuationFlagIndex,
    kWebTransportAnticipatedConcurrentIncomingStreamsFlagIndex,
    kWebTransportApplicationProtocolFlagIndex,
    kWebTransportCongestionControlFlagIndex,
    kWebTransportCreateStreamsBeforeReadyFlagIndex,
    kWebTransportCustomCertificatesFlagIndex,
    kWebTransportDatagramsReadableTypeFlagIndex,
    kWebTransportDatagramsWritableFlagIndex,
    kWebTransportDrainingFlagIndex,
    kWebTransportExportKeyingMaterialFlagIndex,
    kWebTransportHeadersFlagIndex,
    kWebTransportReceiveStreamFlagIndex,
    kWebTransportReliabilityFlagIndex,
    kWebTransportSendGroupFlagIndex,
    kWebTransportStatsFlagIndex,
    kWebUIBundledCodeCacheAsyncFetchFlagIndex,
    kWebUSBFlagIndex,
    kWebUSBOnDedicatedWorkersFlagIndex,
    kWebUSBOnServiceWorkersFlagIndex,
    kWebVTTCueLayoutByPositionAlignmentFlagIndex,
    kWebVTTCueTightLineBoxFlagIndex,
    kWebVTTLineAndPositionAlignmentFlagIndex,
    kWebVTTRegionsFlagIndex,
    kWebViewEnvReorderFixFlagIndex,
    kWebXRFlagIndex,
    kWebXREnabledFeaturesFlagIndex,
    kWebXRFrameRateFlagIndex,
    kWebXRFrontFacingFlagIndex,
    kWebXRGPUBindingFlagIndex,
    kWebXRHitTestEntityTypesFlagIndex,
    kWebXRImageTrackingFlagIndex,
    kWebXRLayersFlagIndex,
    kWebXRLayersCommonFlagIndex,
    kWebXRMediaBindingFlagIndex,
    kWebXRMeshDetectionFlagIndex,
    kWebXRPlaneDetectionFlagIndex,
    kWebXRPoseMotionDataFlagIndex,
    kWebXRSpecParityFlagIndex,
    kWebXRVisibilityMaskFlagIndex,
    kWheelEventDeltaExternalPageScaleFlagIndex,
    kWheelEventMomentumFlagIndex,
    kWindowDefaultStatusFlagIndex,
    kWindowOpenAlwaysOnTopFlagIndex,
    kWindowOpenAttributionSrcFlagIndex,
    kWindowOpenSplitTabFlagIndex,
    kWordSkipSpacesPunctuationFixFlagIndex,
    kXMLNoExternalEntitiesFlagIndex,
    kXMLParserReplaceLoneSurrogatesFlagIndex,
    kXMLParsingRustFlagIndex,
    kXMLRustForNonXsltFlagIndex,
    kXMLSerializerConsistentDefaultNsDeclMatchingFlagIndex,
    kXMLViewerForIframesFlagIndex,
    kXSLTFlagIndex,
    kXSLTSpecialTrialFlagIndex,
  };
  static_assert(std::size(kFeatureNameOffsets) == std::size(kFlagIndices));

  auto it = std::lower_bound(std::begin(kFeatureNameOffsets), std::end(kFeatureNameOffsets), name, [](uint16_t offset, std::string_view name) {
    return FeatureNameAt(offset) < name;
  });

  if (it == std::end(kFeatureNameOffsets) || FeatureNameAt(*it) != name)
    return std::nullopt;
  return kFlagIndices[it - std::begin(kFeatureNameOffsets)];
}

void RuntimeEnabledFeaturesBase::SetFeatureEnabledFromString(
    std::string_view name, bool enable) {
  // Unlike `IsFeatureEnabledFromString()`, there is no special handling for
  // features with a `custom_enable_check`; callers must ensure they properly
  // coordinate configuration for a feature with a `custom_enable_check`.
  std::optional<uint16_t> flag_index = FindFeatureFlagIndex(name);
  if (flag_index.has_value())
    feature_states_[*flag_index] = enable;
  else
    DLOG(ERROR) << "RuntimeEnabledFeature not recognized: " << name;
}

bool RuntimeEnabledFeaturesBase::IsFeatureEnabledFromString(
    std::string_view name) {
  // Origin-trial controlled features cannot be answered without a context, so
  // rather than duplicating the lookup table without them, they are filtered
  // out of the result of the shared lookup. This table is sorted because the
  // `FlagIndex` enum is emitted in feature declaration order, of which this is
  // a subsequence.
  static constexpr uint16_t kFlagIndicesInOriginTrials[] = {
    kAdInterestGroupAPIFlagIndex,
    kAIPromptAPIParamsFlagIndex,
    kAIProofreadingAPIFlagIndex,
    kAIRewriterAPIFlagIndex,
    kAIWriterAPIFlagIndex,
    kAppTitleFlagIndex,
    kAutofillEventFlagIndex,
    kBackForwardCacheExperimentHTTPHeaderFlagIndex,
    kBackForwardCacheNotRestoredReasonsFlagIndex,
    kBackgroundPageFreezeOptOutFlagIndex,
    kBlockingFocusWithoutUserActivationFlagIndex,
    kCacheStorageCodeCacheHintFlagIndex,
    kCanvas2dMeshFlagIndex,
    kCanvasDrawElementFlagIndex,
    kConnectionAllowlistEmbeddedEnforcementFlagIndex,
    kContainerTimingFlagIndex,
    kCoopRestrictPropertiesFlagIndex,
    kCpuPerformanceFlagIndex,
    kCrashReportingStorageAPIFlagIndex,
    kCSPHashesV1FlagIndex,
    kDeclarativeCSSModulesFlagIndex,
    kDeclarativePerformanceObserverFlagIndex,
    kDeclarativeWebMCPFlagIndex,
    kDeprecateUnloadOptOutFlagIndex,
    kDigitalGoodsFlagIndex,
    kDisableDifferentOriginSubframeDialogSuppressionFlagIndex,
    kDocumentIsolationPolicyFlagIndex,
    kDocumentPolicyNegotiationFlagIndex,
    kEmailVerificationProtocolFlagIndex,
    kExperimentalJSProfilerMarkersFlagIndex,
    kExtendedTextMetricsFlagIndex,
    kFedCmActiveModeMultipleIdentityProvidersFlagIndex,
    kFedCmMultipleIdentityProvidersFlagIndex,
    kFetchRetryFlagIndex,
    kFledgeBiddingAndAuctionServerAPIFlagIndex,
    kGamepadRawInputChangeEventFlagIndex,
    kHrefTranslateFlagIndex,
    kIncomingCallNotificationsFlagIndex,
    kJavaScriptCompileHintsPerFunctionMagicRuntimeFlagIndex,
    kLocalNetworkAccessForWebRTCOptOutFlagIndex,
    kMediaCaptureBackgroundBlurFlagIndex,
    kMediaCaptureConfigurationChangeFlagIndex,
    kMediaSourceExtensionsForWebCodecsFlagIndex,
    kNotificationTriggersFlagIndex,
    kOriginTrialsSampleAPIFlagIndex,
    kOriginTrialsSampleAPIBrowserReadWriteFlagIndex,
    kOriginTrialsSampleAPIDependentFlagIndex,
    kOriginTrialsSampleAPIDeprecationFlagIndex,
    kOriginTrialsSampleAPIExpiryGracePeriodFlagIndex,
    kOriginTrialsSampleAPIExpiryGracePeriodThirdPartyFlagIndex,
    kOriginTrialsSampleAPIImpliedFlagIndex,
    kOriginTrialsSampleAPIInvalidOSFlagIndex,
    kOriginTrialsSampleAPINavigationFlagIndex,
    kOriginTrialsSampleAPIPersistentExpiryGracePeriodFlagIndex,
    kOriginTrialsSampleAPIPersistentFeatureFlagIndex,
    kOriginTrialsSampleAPIPersistentInvalidOSFlagIndex,
    kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureFlagIndex,
    kOriginTrialsSampleAPIThirdPartyFlagIndex,
    kOverscrollAreasFlagIndex,
    kParakeetFlagIndex,
    kPerMethodCanMakePaymentQuotaFlagIndex,
    kPNaClFlagIndex,
    kPreferredAudioOutputDevicesFlagIndex,
    kPrefetchAndPrerenderActivationBeaconFlagIndex,
    kPrerender2CrossOriginIframesFlagIndex,
    kPrerenderActivationByFormSubmissionFlagIndex,
    kPrerenderUntilScriptFlagIndex,
    kRtcAudioJitterBufferMaxPacketsFlagIndex,
    kRTCDiagnosticLoggingFlagIndex,
    kRTCEncodedFrameSetMetadataFlagIndex,
    kRTCLegacyCallbackBasedGetStatsFlagIndex,
    kRTCLegacyDiagnosticLoggingFlagIndex,
    kRTCStatsRelativePacketArrivalDelayFlagIndex,
    kSecurePaymentConfirmationOptOutFlagIndex,
    kShadowRootAdoptedStyleSheetFlagIndex,
    kShadowRootReferenceTargetFlagIndex,
    kSharedWorkerExtendedLifetimeFlagIndex,
    kSpeculationMeasurementFlagIndex,
    kSpeculationRulesModerateViewportHeuristicsControlFlagIndex,
    kStandardizedBrowserZoomOptOutFlagIndex,
    kTestFeatureForBrowserProcessReadWriteAccessOriginTrialFlagIndex,
    kTextFragmentIdentifiersFlagIndex,
    kTouchEventFeatureDetectionFlagIndex,
    kUAImageReplacementAPIFlagIndex,
    kUnrestrictedSharedArrayBufferFlagIndex,
    kUserMediaElementLegacyFlagIndex,
    kWebAppScopeExtensionsFlagIndex,
    kWebAssemblyCustomDescriptorsV2FlagIndex,
    kWebAssemblyJSPromiseIntegrationFlagIndex,
    kWebAudioConfigurableRenderQuantumFlagIndex,
    kWebAuthenticationAttestationFormatsFlagIndex,
    kWebMCPFlagIndex,
    kWebRtcSctpSnapFlagIndex,
    kWebTransportCustomCertificatesFlagIndex,
    kWebXRImageTrackingFlagIndex,
    kWebXRPlaneDetectionFlagIndex,
    kXSLTFlagIndex,
  };
  static_assert(std::ranges::is_sorted(kFlagIndicesInOriginTrials));

  std::optional<uint16_t> flag_index = FindFeatureFlagIndex(name);
  if (flag_index.has_value() &&
      !std::ranges::binary_search(kFlagIndicesInOriginTrials, *flag_index)) {
    // A feature that uses a `custom_enable_check` must call the generated
    // helpers rather than directly answering with `feature_states_`.
    switch (*flag_index) {
      case kMojoJSFlagIndex:
        return MojoJSEnabled();
      case kMojoJSTestFlagIndex:
        return MojoJSTestEnabled();
      case kTestFeatureCustomEnableCheckFlagIndex:
        return TestFeatureCustomEnableCheckEnabled();
      [[likely]] default:
        return feature_states_[*flag_index];
    }
  } else {
    // TODO(crbug.com/477806715): This will get hit for features controlled by origin trials.
    SCOPED_CRASH_KEY_STRING64("BlinkFeatureNotFound", "name", name);
    SCOPED_CRASH_KEY_BOOL("BlinkFeatureNotFound", "in_map", flag_index.has_value());
    base::debug::DumpWithoutCrashing();
    DCHECK(false) << " RuntimeEnabledFeature not recognized: " << name;
    return false;
  }
}

// static
void RuntimeEnabledFeaturesBase::UpdateStatusFromBaseFeatures() {
  // Parallel arrays rather than an array-of-structs avoid per-entry padding.
  // Storing indices into `feature_states_` rather than pointers or setter
  // functions keeps the tables small and free of relocations, and avoids
  // referencing the setter functions so that they need not exist after
  // inlining.
  static const base::Feature* const kBaseFeatures[] = {
    &blink::features::kAIDecisionModelAPI,
    &blink::features::kAIDecisionModelAPIForWorkers,
    &blink::features::kAIEmbeddingsAPI,
    &blink::features::kAIEmbeddingsAPIForWorkers,
    &blink::features::kAIPageContentAnchoredFixedOffscreenNonActionability,
    &blink::features::kAIPageContentAnchoredNonFixedOffscreenNonActionability,
    &blink::features::kAIPageContentBuildOnLoadForTesting,
    &blink::features::kAIPageContentCheckGeometry,
    &blink::features::kAIPageContentConvertNodeTextToUtf8,
    &blink::features::kAIPageContentElementCSSRedaction,
    &blink::features::kAIPageContentIncludeMathML,
    &blink::features::kAIPageContentIncludeSVGSubtree,
    &blink::features::kAIPageContentLabelExpandFallbackSources,
    &blink::features::kAIPageContentLabelRemoveRedundant,
    &blink::features::kAIPageContentLabelRemoveRedundantWholeWordMatching,
    &blink::features::kAIPageContentOuterBoxMapToAncestorSpace,
    &blink::features::kAIPageContentPaidContentAnnotation,
    &blink::features::kAIPageContentSkipUnclickableFixedOverlays,
    &blink::features::kAIPageContentTrackedElementsIframe,
    &blink::features::kAIPageContentTrackedElementsPassword,
    &blink::features::kAIPageContentVisualViewportClamp,
    &blink::features::kAIPromptAPI,
    &blink::features::kAIPromptAPIForWorkers,
    &blink::features::kAIPromptAPILegacyIdentifiers,
    &blink::features::kAIPromptAPILegacyParams,
    &blink::features::kAIPromptAPIMultimodalInput,
    &blink::features::kAIPromptAPIParams,
    &blink::features::kAIPromptAPIStructuredOutput,
    &blink::features::kAIPromptAPIToolUse,
    &blink::features::kAIProofreadingAPI,
    &blink::features::kAIRewriterAPI,
    &blink::features::kAIRewriterAPIForWorkers,
    &blink::features::kAISummarizationAPI,
    &blink::features::kAISummarizationAPIForWorkers,
    &blink::features::kAISummarizationPerformancePreference,
    &blink::features::kAIWriterAPI,
    &blink::features::kAIWriterAPIForWorkers,
    &blink::features::kAOMAriaRelationshipProperties,
    &blink::features::kAOMAriaRelationshipPropertiesAriaOwns,
    &blink::features::kAboutBlankPageRespectsDarkModeOnUserAction,
    &blink::features::kAccelerated2dCanvas,
    &blink::features::kAcceleratedSmallCanvases,
    &blink::features::kAccessKeyLabel,
    &blink::features::kAccessibilityCheckIfcInPreviousTextOnLine,
    &blink::features::kAccessibilityExposeDisplayNone,
    &blink::features::kAccessibilityImplicitActions,
    &blink::features::kAccessibilityMinRoleTabbable,
    &blink::features::kAccessibilityOSLevelBoldText,
    &blink::features::kAccessibilityProhibitedNames,
    &blink::features::kAccessibilitySerializationSizeMetrics,
    &blink::features::kAdInterestGroupAPI,
    &blink::features::kAddressSpace,
    &blink::features::kAdjustEndOfNextParagraphIfMovedParagraphIsUpdated,
    &blink::features::kAlignZoomToCenter,
    &blink::features::kAllowPreloadingWithCSPMetaTag,
    &blink::features::kAllowSvgUseToReferenceExternalDocumentRoot,
    &blink::features::kAncestorOriginsStoredOnDocument,
    &blink::features::kAnchorPositionAdjustmentWithoutOverflow,
    &blink::features::kAnimationEventAnimation,
    &blink::features::kAnimationProgressAPI,
    &blink::features::kAnimationRangeRejectRelativeLengths,
    &blink::features::kAnimationTrigger,
    &blink::features::kAnimationWorklet,
    &blink::features::kAnnotationSpaceForMultiCol,
    &blink::features::kAnnotationSpaceOnStart,
    &blink::features::kAnonymousIframe,
    &blink::features::kWebAppEnableAppTitle,
    &blink::features::kAppearanceBase,
    &blink::features::kAppearanceDisplayAdjustmentForWidgetsOnly,
    &blink::features::kApproximateGeolocationPermissionAPI,
    &blink::features::kApproximateGeolocationPermissionAccuracyMode,
    &blink::features::kApproximateGeolocationWebVisibleAPI,
    &blink::features::kAriaActions,
    &blink::features::kAriaNotify,
    &blink::features::kAriaNotifyV2,
    &blink::features::kAriaRowColIndexText,
    &blink::features::kAudioContextAsyncStateTransitions,
    &blink::features::kAudioContextPlaybackStats,
    &blink::features::kAudioContextSetSinkId,
    &blink::features::kAudioVideoTracks,
    &blink::features::kAudioWorkletSharedPort,
    &blink::features::kAuthorSpecifiedLayoutScrollSnapBehavior,
    &blink::features::kAutoDarkModeSVGSizeThreshold,
    &blink::features::kAutoPictureInPictureVideoHeuristics,
    &blink::features::kAutoSizeUsesScrollWidthForOverflow,
    &blink::features::kAutofillEvent,
    &blink::features::kAutofillPreviewGenericFontFamily,
    &blink::features::kAutofillPreviewIgnoreAuthorFont,
    &blink::features::kAvoidEmbeddedContentViewLocation,
    &blink::features::kAvoidNonSelectableSelectionBoundary,
    &blink::features::kAvoidSynchronousBlurOnDisabledAttributeChange,
    &blink::features::kBackForwardCacheSendNotRestoredReasons,
    &blink::features::kBackForwardCacheRestorationPerformanceEntry,
    &blink::features::kBackForwardCacheUpdateNotRestoredReasonsName,
    &blink::features::kBackfaceVisibilityInterop,
    &blink::features::kBackgroundClipTextDecoration,
    &blink::features::kBarcodeDetector,
    &blink::features::kBaseAppearanceInlineSizing,
    &blink::features::kBasicShapeCornerRadius,
    &blink::features::kBidiCaretAffinity,
    &blink::features::kBidiVisualOrderCaretMovement,
    &blink::features::kBlinkExtensionWebView,
    &blink::features::kBlinkExtensionWebViewMediaIntegrity,
    &blink::features::kBlinkGeometryMapperViewportFastPath,
    &blink::features::kBlinkLifecycleScriptForbidden,
    &blink::features::kBlinkRuntimeCallStats,
    &blink::features::kBlobBytes,
    &blink::features::kBlockSelectPopupUnfocusedWindow,
    &blink::features::kBlockingFocusWithoutUserActivation,
    &blink::features::kBoundaryEventDispatchTracksNodeRemoval,
    &blink::features::kBoxDecorationBreakCloneLineBreaking,
    &blink::features::kBrowserInitiatedAutomaticPictureInPicture,
    &blink::features::kBufferedBytesConsumerLimitSize,
    &blink::features::kBypassPepcSecurityForTesting,
    &blink::features::kCCTNewRFMPushBehavior,
    &blink::features::kCDTNewCrossOriginHandling,
    &blink::features::kCDTNewDestination,
    &blink::features::kCDTNewReferrerAndReferrerPolicyHandling,
    &blink::features::kCSPReportHash,
    &blink::features::kCSSAccentColorKeyword,
    &blink::features::kCSSActiveCaptionMapsToCanvas,
    &blink::features::kCSSAlphaColorFunction,
    &blink::features::kCSSAlphaColorFunctionRequiresAlpha,
    &blink::features::kCSSAltCounter,
    &blink::features::kCSSAnimationIterationComposite,
    &blink::features::kCSSArgumentGrammar,
    &blink::features::kCSSAtRuleCounterStyleImageSymbols,
    &blink::features::kCSSAtRuleCounterStyleSpeakAsDescriptor,
    &blink::features::kCSSAttributeValueCaseSensitiveNonHTML,
    &blink::features::kCSSBackgroundClipBorderArea,
    &blink::features::kCSSBackgroundLayerCountIndependence,
    &blink::features::kCSSBorderRadiusSideShorthands,
    &blink::features::kCSSBorderShape,
    &blink::features::kCSSCalcEarlyNaNAndInfFolding,
    &blink::features::kCSSCalcSimplificationAndSerialization,
    &blink::features::kCSSCaretAnimation,
    &blink::features::kCSSCaretColorWithOptionalSecondValue,
    &blink::features::kCSSCaretShape,
    &blink::features::kCSSCaseSensitiveSelector,
    &blink::features::kCSSChUnitSpecCompliantFallback,
    &blink::features::kCSSColorTypedOM,
    &blink::features::kCSSContainerProgressNotation,
    &blink::features::kCSSContainerStyleQueriesRange,
    &blink::features::kCSSCornersShorthand,
    &blink::features::kCSSCounterResetReversed,
    &blink::features::kCSSCounterStyleSymbolsFunction,
    &blink::features::kCSSCrossFade,
    &blink::features::kCSSCustomHighlightUniversalSelector,
    &blink::features::kCSSCustomMedia,
    &blink::features::kCSSDynamicRangeLimit,
    &blink::features::kCSSEnumeratedCustomProperties,
    &blink::features::kCSSFlowStartAndEnd,
    &blink::features::kCSSFlowStartAndEndSerialization,
    &blink::features::kCSSFontFamilySerialization,
    &blink::features::kCSSFontSizeAdjust,
    &blink::features::kCSSFunctions,
    &blink::features::kCSSGridLanesLayout,
    &blink::features::kCSSHangingPunctuation,
    &blink::features::kCSSHexAlphaColor,
    &blink::features::kCSSIdentFunction,
    &blink::features::kCSSImageAnimation,
    &blink::features::kCSSImageFunction,
    &blink::features::kCSSInRangeOutOfRangeReversedRanges,
    &blink::features::kCSSInheritFunction,
    &blink::features::kCSSKeyframesRuleLength,
    &blink::features::kCSSLangExtendedRanges,
    &blink::features::kCSSLayoutAPI,
    &blink::features::kCSSLightDarkImage,
    &blink::features::kCSSLineClamp,
    &blink::features::kCSSLineClampAsShorthand,
    &blink::features::kCSSLineClampLineBreakingEllipsis,
    &blink::features::kCSSLinkParametersProperty,
    &blink::features::kCSSListCounterAccounting,
    &blink::features::kCSSLogicalCombinationPseudo,
    &blink::features::kCSSMarkerNestedPseudoElement,
    &blink::features::kCSSMediaElementPseudos,
    &blink::features::kCSSMediaProgressNotation,
    &blink::features::kCSSMixins,
    &blink::features::kCSSNestedPseudoElements,
    &blink::features::kCSSOMGetComputedStylePseudoElementRequiresColon,
    &blink::features::kCSSPaintAPIArguments,
    &blink::features::kCSSParserIgnoreCharsetForURLs,
    &blink::features::kCSSPolygonRounding,
    &blink::features::kCSSPositionStickyStaticScrollPosition,
    &blink::features::kCSSPositionVisibilityAnchorValid,
    &blink::features::kCSSPrivate,
    &blink::features::kCSSProgressNotation,
    &blink::features::kCSSProgressNotationNoClamp,
    &blink::features::kCSSPseudoColumn,
    &blink::features::kCSSPseudoElementBackdrop,
    &blink::features::kCSSPseudoElementInterface,
    &blink::features::kCSSPseudoElementScrollButton,
    &blink::features::kCSSPseudoElementSelectorText,
    &blink::features::kCSSPseudoElementViewTransitions,
    &blink::features::kCSSPseudoHasSlotted,
    &blink::features::kCSSPseudoScrollButtons,
    &blink::features::kCSSPseudoScrollMarkers,
    &blink::features::kCSSRandomFunction,
    &blink::features::kCSSRandomFunctionTypedOM,
    &blink::features::kCSSResizeAuto,
    &blink::features::kCSSRevertRule,
    &blink::features::kCSSRubyOverhang,
    &blink::features::kCSSSafePrintableInset,
    &blink::features::kCSSScopeImport,
    &blink::features::kCSSScopeifiedParentPseudoClass,
    &blink::features::kCSSScrollInitialTarget,
    &blink::features::kCSSScrollMarkerGroupModes,
    &blink::features::kCSSScrollMarkerTargetBeforeAfter,
    &blink::features::kCSSScrollSnapChangeEvent,
    &blink::features::kCSSScrollSnapChangingEvent,
    &blink::features::kCSSScrollSnapEventConstructorExposed,
    &blink::features::kCSSScrollSnapEvents,
    &blink::features::kCSSScrollSnapStopBefore,
    &blink::features::kCSSScrollSnapTypePair,
    &blink::features::kCSSScrollTargetGroup,
    &blink::features::kCSSScrollTargetGroupAriaCurrent,
    &blink::features::kCSSScrolledContainerQueries,
    &blink::features::kCSSShapeOutsidePathAndShapeSupport,
    &blink::features::kCSSShapeOutsideRectAndXywhSupport,
    &blink::features::kCSSStyleSheetInitBaseURL,
    &blink::features::kCSSSupportsAtRuleFunction,
    &blink::features::kCSSSupportsForImportRules,
    &blink::features::kCSSSupportsNamedFeatureFunction,
    &blink::features::kCSSSystemAccentColor,
    &blink::features::kCSSTextAlignMatchParent,
    &blink::features::kCSSTextDecorationInset,
    &blink::features::kCSSTextDecorationSkipInkAll,
    &blink::features::kCSSTextDecorationSkipSpaces,
    &blink::features::kCSSTextSpacing,
    &blink::features::kCSSTextTransformFullSizeKana,
    &blink::features::kCSSTextTransformFullWidth,
    &blink::features::kCSSTextTransformMultiKeyword,
    &blink::features::kCSSTimelineScopeAll,
    &blink::features::kCSSTimelineScopeGlobal,
    &blink::features::kCSSTreeScopedScrollTimeline,
    &blink::features::kCSSURLRequestModifiers,
    &blink::features::kCSSUserSelectContain,
    &blink::features::kCSSUserValidAndUserInvalidForRadio,
    &blink::features::kCSSVideoDynamicRangeMediaQueries,
    &blink::features::kCSSViewTransitionAutoName,
    &blink::features::kCSSWindowDrag,
    &blink::features::kCSSZoomAnimation,
    &blink::features::kCacheControlRFC7234Parsing,
    &blink::features::kCacheControlRFC7234ParsingMetrics,
    &blink::features::kCacheStyleAdjuster,
    &blink::features::kCameraAndMicrophoneElements,
    &blink::features::kCanvas2dCanvasFilter,
    &blink::features::kCanvas2dDeferredFlush,
    &blink::features::kCanvas2dLayers,
    &blink::features::kCanvas2dLayersWithOptions,
    &blink::features::kCanvas2dMesh,
    &blink::features::kCanvasDrawElement,
    &blink::features::kCanvasFloatingPoint,
    &blink::features::kCanvasGlobalHDRHeadroom,
    &blink::features::kCanvasGradientCSSColor4,
    &blink::features::kCanvasHDR,
    &blink::features::kCanvasTextDirectionReflect,
    &blink::features::kCanvasTextMetricsPreciseBounds,
    &blink::features::kCanvasToneMapping,
    &blink::features::kCanvasUsesArcPaintOp,
    &blink::features::kCapabilityDelegationDigitalCredentials,
    &blink::features::kCapabilityDelegationDisplayCaptureRequest,
    &blink::features::kCapabilityDelegationPopup,
    &blink::features::kCapabilityElementIconOnlyMode,
    &blink::features::kCapitalizeAfterSupplementaryCharacterFix,
    &blink::features::kCaptureController,
    &blink::features::kCaptureHandle,
    &blink::features::kCapturedMouseEvents,
    &blink::features::kCapturedSurfaceControl,
    &blink::features::kCapturedSurfaceResolution,
    &blink::features::kCaretBlinking,
    &blink::features::kCaretBrowsingSequentialFocusStartingPoint,
    &blink::features::kCaretOutsideEditableAtomicInline,
    &blink::features::kCheckCSPOnInlineScriptAttributeSet,
    &blink::features::kCheckableInputTypeLayoutInline,
    &blink::features::kClampUnfocusedSelectionCache,
    &blink::features::kCleanUpActivationBehavior,
    &blink::features::kClearCrossOriginRelatedTarget,
    &blink::features::kClearCurrentTargetAfterDispatch,
    &blink::features::kClearDisplayLockPrePaintFlags,
    &blink::features::kClearFocusWithinOnSubtreeRemoval,
    &blink::features::kClearTargetOnlyIfInShadowTree,
    &blink::features::kClipElementVisibleBoundsInLocalRoot,
    &blink::features::kClipPathNestedRasterOptimization,
    &blink::features::kClipboardEventTargetUsesContainerNode,
    &blink::features::kClipboardPasteImageRespectBuffer,
    &blink::features::kCoalesceSelectionchangeEvent,
    &blink::features::kCoepReflection,
    &blink::features::kColorInputAcceptsCSSColors,
    &blink::features::kColorSpaceDisplayP3Linear,
    &blink::features::kColorSpacePredefinedLinearSpaces,
    &blink::features::kColorSpaceRec2100Linear,
    &blink::features::kComposedPathReturnTargetBeingDispatched,
    &blink::features::kCompositeClipPathAnimation,
    &blink::features::kCompositeHoverStyle,
    &blink::features::kCompositingDecisionAtAnimationPhaseBoundaries,
    &blink::features::kCompositionForegroundMarkers,
    &blink::features::kCompositorEventTrigger,
    &blink::features::kCompositorTimelineTrigger,
    &blink::features::kComputePressure,
    &blink::features::kComputedAccessibilityInfo,
    &blink::features::kConcurrentNativePaintWorklets,
    &blink::features::kConditionalTracingLoAF,
    &blink::features::kConnectionAllowlistEmbeddedEnforcement,
    &blink::features::kConsistentFormControlPaintSnapping,
    &blink::features::kConstructableStylesheetCache,
    &blink::features::kContactsManager,
    &blink::features::kContactsManagerExtraProperties,
    &blink::features::kContainerTiming,
    &blink::features::kContentIndex,
    &blink::features::kContextMenu,
    &blink::features::kControlledFrame,
    &blink::features::kControlledFrameWebRequestSecurityInfo,
    &blink::features::kCookieStoreAPIMaxAge,
    &blink::features::kCookieStoreAPIWhitespaceStripping,
    &blink::features::kCorrectTemplateFormParsing,
    &blink::features::kCorsRFC1918,
    &blink::features::kCpuPerformance,
    &blink::features::kCrashReportingStorageAPI,
    &blink::features::kCreateInlineContentsAnonymousBlock,
    &blink::features::kCrossOriginStorage,
    &blink::features::kCssMaxContentSizing,
    &blink::features::kCssTextFit,
    &blink::features::kCssTextFitReshaping,
    &blink::features::kCustomElementsDisableFormattingFixups,
    &blink::features::kCustomScrollbarApplyMinimumThumbLength,
    &blink::features::kCustomizableCombobox,
    &blink::features::kCustomizableSelectMultiplePopup,
    &blink::features::kCustomizableSelectNewUAStyles,
    &blink::features::kDOMParserXmlScriptAlreadyStarted,
    &blink::features::kDatabase,
    &blink::features::kDateTimeInputTypeEarlyAdvanceFix,
    &blink::features::kDeclarativeCSSModules,
    &blink::features::kDeclarativeCSSModulesStyleTag,
    &blink::features::kDeclarativeFragment,
    &blink::features::kDeclarativePerformanceObserver,
    &blink::features::kDeclarativeSkeletons,
    &blink::features::kDeclarativeWebMCP,
    &blink::features::kDeferLineBoxHitTestToBackground,
    &blink::features::kDelegatesFocusTextControlInputFix,
    &blink::features::kDeprecateUnloadOptOut,
    &blink::features::kDesktopCaptureDisableLocalEchoControl,
    &blink::features::kDesktopPWAsAdditionalWindowingControls,
    &blink::features::kDesktopPWAsAdditionalWindowingControlsOnMove,
    &blink::features::kDeviceAttributes,
    &blink::features::kDeviceOrientationRequestPermission,
    &blink::features::kDevicePosture,
    &blink::features::kDialogCloseWhenOpenRemoved,
    &blink::features::kDialogNewFocusBehavior,
    &blink::features::kDigitalCredentialsProtocolFilter,
    &blink::features::kDigitalGoodsV2_1,
    &blink::features::kDirectSockets,
    &blink::features::kDirectSocketsInServiceWorkers,
    &blink::features::kDirectSocketsInSharedWorkers,
    &blink::features::kDisableAnchorCenterOnAlignJustifyItems,
    &blink::features::kDisableEllipsisWhenScrolled,
    &blink::features::kDisableFormControlChangeEventDuringMutation,
    &blink::features::kDisconnectWebSocketOnBFCache,
    &blink::features::kDispatchHiddenVisibilityTransitions,
    &blink::features::kDispatchSelectionchangeEventPerElement,
    &blink::features::kDispatchWorkerCSPViolationEventForModuleGraphFetching,
    &blink::features::kDisplayContentsFocusable,
    &blink::features::kDocumentCookie,
    &blink::features::kDocumentDomain,
    &blink::features::kDocumentOpenIframeUnloadEvents,
    &blink::features::kDocumentOpenOriginAliasRemoval,
    &blink::features::kDocumentOpenSandboxInheritanceRemoval,
    &blink::features::kDocumentPatching,
    &blink::features::kDocumentPictureInPictureAPI,
    &blink::features::kDocumentPictureInPicturePreferInitialPlacement,
    &blink::features::kDocumentPictureInPictureUserActivation,
    &blink::features::kDocumentPolicyDocumentDomain,
    &blink::features::kDocumentPolicyExpectNoLinkedResources,
    &blink::features::kDocumentPolicyInDedicatedWorker,
    &blink::features::kDocumentPolicyIncludeJSCallStacksInCrashReports,
    &blink::features::kDocumentPolicyJSProfilingMode,
    &blink::features::kDocumentPolicyNetworkEfficiencyGuardrails,
    &blink::features::kDocumentPolicySyncXHR,
    &blink::features::kDocumentWrite,
    &blink::features::kDragAndDropDownloadURLList,
    &blink::features::kDragAndDropJSFileObjects,
    &blink::features::kDragImageForLargeImages,
    &blink::features::kDragThresholdRequiresMouseMovement,
    &blink::features::kDumpForAbsentKeyframeSnapshots,
    &blink::features::kEditContextAssignmentAsPerSpec,
    &blink::features::kEditContextBoundsUpdateSchedulesFrame,
    &blink::features::kEditContextCodePointDeletion,
    &blink::features::kEditContextHandleTextOrSelectionUpdateDuringComposition,
    &blink::features::kEditContextSelectionUpdateBeforeTextUpdateEvent,
    &blink::features::kEditingUseDomPositionApi,
    &blink::features::kElasticOverscrollBackgroundPaintLocationFix,
    &blink::features::kElasticOverscrollUseEventDeltaForAxisSelection,
    &blink::features::kElementCapture,
    &blink::features::kElementInternalsBehaviors,
    &blink::features::kElementMatchContainer,
    &blink::features::kElementSpecificReadOnlyConstraintValidation,
    &blink::features::kEmbeddedContentCenterAlignBaseline,
    &blink::features::kEmojiZWJVerticalOrientation,
    &blink::features::kEnableXSLTForCAPAlerts,
    &blink::features::kEndpointInclusiveCommitStyles,
    &blink::features::kEnforceAnonymityExposure,
    &blink::features::kEntropyIgnoredForFirstVideoFrameLCP,
    &blink::features::kEventPseudoTargetProperty,
    &blink::features::kEventPseudoTargetViewTransitionName,
    &blink::features::kEventTimingInteractionCount,
    &blink::features::kEventTimingMatchingHTML,
    &blink::features::kEventTimingTargetSelector,
    &blink::features::kEventTrigger,
    &blink::features::kExperimentalJSProfilerMarkers,
    &blink::features::kExperimentalPolicies,
    &blink::features::kExposeCSSFontFeatureValuesRule,
    &blink::features::kExposeRenderTimeNonTaoDelayedImage,
    &blink::features::kExtendedTextMetrics,
    &blink::features::kExtensionScriptTagging,
    &blink::features::kExtensionScriptTaggingTestingAPI,
    &blink::features::kExternalPopupMenuClickEvent,
    &blink::features::kFaceDetector,
    &blink::features::kFastCompositionCharacterBounds,
    &blink::features::kFastPlainTextRangeCreateRange,
    &blink::features::kFastPositionIterator,
    &blink::features::kFencedFramesRuntime,
    &blink::features::kFencedFramesAPIChanges,
    &blink::features::kFetchBodyBytes,
    &blink::features::kFetchLaterAPI,
    &blink::features::kFetchRetry,
    &blink::features::kFetchUploadStreaming,
    &blink::features::kFileHandlingAPI,
    &blink::features::kFilePickerEventsFix,
    &blink::features::kFileSystemAccess,
    &blink::features::kFileSystemAccessGetCloudIdentifiers,
    &blink::features::kFileSystemAccessLockingScheme,
    &blink::features::kFileSystemAccessOriginPrivate,
    &blink::features::kFileSystemAccessRevokeReadOnRemove,
    &blink::features::kFileSystemAccessWriteMode,
    &blink::features::kFileSystemObserver,
    &blink::features::kFileSystemObserverUnobserve,
    &blink::features::kFilterContainerLevelStyles,
    &blink::features::kFilterableSelect,
    &blink::features::kFilteringPrimitives,
    &blink::features::kFindBufferCollapseSkippedSpace,
    &blink::features::kFindBufferMatchAcrossIgnoredNodes,
    &blink::features::kFindBufferSkipIgnoredSubtrees,
    &blink::features::kFindFirstMisspellingEndWhenNonEditable,
    &blink::features::kFindIgnoreSuggestionFix,
    &blink::features::kFirstLetterParagraphOffsets,
    &blink::features::kFirstLineAndLetterExcludeInputTextarea,
    &blink::features::kFirstLineTextMetrics,
    &blink::features::kFixHTMLFormControlElementIsReadOnly,
    &blink::features::kFixMapElementEmptyNameBug,
    &blink::features::kFixSelectionPaintRangeNullOpt,
    &blink::features::kFixVisualRectRemoteViewportTransform,
    &blink::features::kFledge,
    &blink::features::kFledgeAuctionDealSupport,
    &blink::features::kFledgeBiddingAndAuctionServerAPIMultiSeller,
    &blink::features::kFledgeClickiness,
    &blink::features::kFledgeCustomMaxAuctionAdComponents,
    &blink::features::kFledgeDeprecatedRenderURLReplacements,
    &blink::features::kFledgeDirectFromSellerSignalsHeaderAdSlot,
    &blink::features::kFledgeDirectFromSellerSignalsWebBundles,
    &blink::features::kFledgeMultiBid,
    &blink::features::kFledgePrivateModelTraining,
    &blink::features::kFledgeRealTimeReporting,
    &blink::features::kFledgeSellerNonce,
    &blink::features::kFledgeSellerScriptExecutionMode,
    &blink::features::kFledgeTrustedSignalsKVv1CreativeScanning,
    &blink::features::kFledgeTrustedSignalsKVv2ContextualData,
    &blink::features::kFledgeTrustedSignalsKVv2Support,
    &blink::features::kFlexWrapBalance,
    &blink::features::kFocusResetEvent,
    &blink::features::kFocusRingRespectExplicitOutlineColorInDarkMode,
    &blink::features::kFocusgroup,
    &blink::features::kFocusgroupV2,
    &blink::features::kFontAccess,
    &blink::features::kFontFamilyPostscriptMatchingCTMigration,
    &blink::features::kFontFamilyStyleMatchingCTMigration,
    &blink::features::kFontFeatureSettingsDescriptor,
    &blink::features::kFontFormatAvar2,
    &blink::features::kFontLanguageOverride,
    &blink::features::kFontMatchAliasesAsLastResort,
    &blink::features::kFontPrewarmerShutdownFallback,
    &blink::features::kFontStyleObliqueZeroDegreeAsNormal,
    &blink::features::kFontUniqueNameTypefaceCache,
    &blink::features::kFontVariableItalicAxis,
    &blink::features::kFontVariationSettingsDescriptor,
    &blink::features::kFontationsPrinting,
    &blink::features::kForceEagerMeasureMemory,
    &blink::features::kForceReduceMotion,
    &blink::features::kForwardReasonToFetchBodyAbort,
    &blink::features::kFractionalScrollOffsets,
    &blink::features::kFractionalScrollOffsetsForWebAPI,
    &blink::features::kFragmentedOofInCb,
    &blink::features::kFrameCaretSkipHiddenCheck,
    &blink::features::kFreezeFramesOnVisibility,
    &blink::features::kGamepadButtonTypes,
    &blink::features::kGamepadMultitouch,
    &blink::features::kGamepadWindowEventHandlers,
    &blink::features::kGenerateDragOverlayBeforeDragStart,
    &blink::features::kGenerateXSLTWarningBanner,
    &blink::features::kGeolocationElement,
    &blink::features::kGeometryMapperSingularTransformFix,
    &blink::features::kGeometryUtils,
    &blink::features::kGeometryUtilsForCSSPseudoElement,
    &blink::features::kGetAllScreensMedia,
    &blink::features::kGetDisplayMediaAudioSelection,
    &blink::features::kGetDisplayMediaRequiresUserActivation,
    &blink::features::kGetDisplayMediaWindowAudioCapture,
    &blink::features::kGetElementsByNameOnlyHTMLElements,
    &blink::features::kGetTargetRangesRetargeting,
    &blink::features::kGetUserMediaEchoCancellationModes,
    &blink::features::kGlobalPrivacyControlApi,
    &blink::features::kGlobalPrivacyControlForce,
    &blink::features::kGraphemeClusterBoundsCheck,
    &blink::features::kGroupEffect,
    &blink::features::kHTMLAdoptionAlgorithmNewSteps,
    &blink::features::kHTMLAreaElementDisplayNone,
    &blink::features::kHTMLAreaHreflangType,
    &blink::features::kHTMLBodyMarginPixelLength,
    &blink::features::kHTMLCommandActionsV2,
    &blink::features::kHTMLCommandElementRemoval,
    &blink::features::kHTMLCommandForScrollCommands,
    &blink::features::kHTMLElementScrollParent,
    &blink::features::kHTMLInterestForInterestButtonPseudo,
    &blink::features::kHTMLLinkElementAttributeValueChanges,
    &blink::features::kHTMLParserIgnoreHeadInNoscript,
    &blink::features::kHTMLParserTruncatedMarkupDeclaration,
    &blink::features::kHTMLParserYieldAndDelayOftenForTesting,
    &blink::features::kHTMLParserYieldByUserTiming,
    &blink::features::kHTMLPrintingArtifactAnnotations,
    &blink::features::kHTMLProcessingInstruction,
    &blink::features::kHTMLSwitchAttribute,
    &blink::features::kHandleShadowDOMInSubstringUtil,
    &blink::features::kHandwritingRecognition,
    &blink::features::kHarfRustShaping,
    &blink::features::kHasUAVisualTransition,
    &blink::features::kHeadingOffset,
    &blink::features::kHideVideoControlsWhenUnneeded,
    &blink::features::kHighlightsFromPoint,
    &blink::features::kHitTestBorderRadiusForStackingContext,
    &blink::features::kHitTestContainerTransformStateForPreserve3d,
    &blink::features::kHitTestCulledInlineOfSelfPaintingChild,
    &blink::features::kHyphenVerticalOrientationFix,
    &blink::features::kICUCapitalization,
    &blink::features::kIgnoreLetterSpacingInCursiveScripts,
    &blink::features::kImageDataPixelFormat,
    &blink::features::kImageDocumentUseLayoutWidth,
    &blink::features::kImageSrcsetReselection,
    &blink::features::kImageSrcsetReselectionForSrcCandidate,
    &blink::features::kIncrementalFontTransfer,
    &blink::features::kInertElementNonEditable,
    &blink::features::kInfiniteCullRect,
    &blink::features::kInheritUserModifyWithoutContenteditable,
    &blink::features::kInitialLetterBlockPositioning,
    &blink::features::kInlineBlockLineNavigation,
    &blink::features::kInlineContainingBlockSkipOpaque,
    &blink::features::kInlineCursorSkipNonIfc,
    &blink::features::kInlineScriptCacheHint,
    &blink::features::kInnerHTMLParserFastpathLogFailure,
    &blink::features::kInputClientRectWithoutInlinePadding,
    &blink::features::kInputDisabledHandlerFix,
    &blink::features::kInputInSelect,
    &blink::features::kInputMultipleFieldsUI,
    &blink::features::kInputMultipleFieldsUIWithPointerChecks,
    &blink::features::kInputTypeColorEnhancements,
    &blink::features::kInsertBlockquoteBeforeOuterBlock,
    &blink::features::kInstallElement,
    &blink::features::kInstallOnDeviceSpeechRecognition,
    &blink::features::kInterestEventsNonComposed,
    &blink::features::kIntersectionObserverCompositedAnimationsForceMainFrames,
    &blink::features::kInvertedColors,
    &blink::features::kInvisibleSVGAnimationThrottling,
    &blink::features::kJavaScriptCompileHintsPerFunctionMagicRuntime,
    &blink::features::kJavaScriptImportText,
    &blink::features::kJavaScriptSourcePhaseImports,
    &blink::features::kLabelInteractiveContentCheckBeforeHandler,
    &blink::features::kLangAttributeAwareFormControlUI,
    &blink::features::kLanguageDetectionAPI,
    &blink::features::kLanguageDetectionAPIForWorkers,
    &blink::features::kLayoutCloneForScrollableOverflowChange,
    &blink::features::kLayoutContainingBlockReturnsBox,
    &blink::features::kLayoutIgnoreMarginsForSticky,
    &blink::features::kLayoutOOFCollectInlinesFix,
    &blink::features::kLazyImageConformantLoadEventTiming,
    &blink::features::kLazyLoadVideoAndAudio,
    &blink::features::kLazyParseInlineStyleSheets,
    &blink::features::kLeftClickToHandleSuggestion,
    &blink::features::kLightDismissFromClick,
    &blink::features::kLineBreakAfterSpaceBeforeOpenTag,
    &blink::features::kLineBreakBidiControlEnter,
    &blink::features::kLineBreakerClearShapeResultOnOverflow,
    &blink::features::kLineBreakerHanKerningEnd,
    &blink::features::kLocalNetworkAccessWebSocketsTargetAddressSpace,
    &blink::features::kLockedMode,
    &blink::features::kLongAnimationFrameSourceCharPosition,
    &blink::features::kLongAnimationFrameSourceLineColumn,
    &blink::features::kLongAnimationFrameSourceLineColumnInterface,
    &blink::features::kLongAnimationFrameStyleDuration,
    &blink::features::kLongAnimationFrameWorker,
    &blink::features::kLongPressHitTestInFrame,
    &blink::features::kLongPressLinkSelectText,
    &blink::features::kLongPressReleasesActiveState,
    &blink::features::kLongTaskFromLongAnimationFrame,
    &blink::features::kMacCharacterFallbackCache,
    &blink::features::kMacDisableCtrlHomeEnd,
    &blink::features::kMacFontWeightFromOS2,
    &blink::features::kManagedConfiguration,
    &blink::features::kMarginTrim,
    &blink::features::kMarkAncestorsOnDisplayLockUnlock,
    &blink::features::kMaskDeserializationTimeForCrossOriginMessages,
    &blink::features::kMaskWaitForAllImages,
    &blink::features::kMathMLAnchorElement,
    &blink::features::kMathMLOperatorRTLMirroring,
    &blink::features::kMeasureMemory,
    &blink::features::kMediaCapabilitiesEncodingInfo,
    &blink::features::kMediaCapabilitiesSpatialAudio,
    &blink::features::kMediaCaptionSettingsButton,
    &blink::features::kMediaCapture,
    &blink::features::kMediaCaptureCameraControls,
    &blink::features::kMediaCaptureElementPreview,
    &blink::features::kMediaCaptureVoiceIsolation,
    &blink::features::kMediaElementMutedDefaultState,
    &blink::features::kMediaElementVolumeGreaterThanOne,
    &blink::features::kMediaLatencyHint,
    &blink::features::kMediaPlaybackWhileNotVisiblePermissionPolicy,
    &blink::features::kMediaQueryNavigationControls,
    &blink::features::kMediaSessionChapterInformation,
    &blink::features::kMediaSourceExperimental,
    &blink::features::kMediaStreamTrackProcessorStats,
    &blink::features::kMediaStreamTrackWebSpeech,
    &blink::features::kMemoryConsumerForNGShapeCache,
    &blink::features::kMenuElements,
    &blink::features::kMessagePortCloseEvent,
    &blink::features::kMixedContentAutoupgradesUseIsMixedContentRestrictedInFrame,
    &blink::features::kMobileLayoutTheme,
    &blink::features::kModifyParagraphCrossEditingoundary,
    &blink::features::kModuleMapDoNotCacheFailedFetch,
    &blink::features::kModulePreloadReferrer,
    &blink::features::kModulePreloadStyleJson,
    &blink::features::kMojoJS,
    &blink::features::kMonospaceGlyphCompaction,
    &blink::features::kMoveEndingSelectionToListChild,
    &blink::features::kMoveParagraphsPreserveInlineStructure,
    &blink::features::kMulticolColumnWidthMaxContentClamp,
    &blink::features::kNastaliqScript,
    &blink::features::kNavigateEventDeferCrossDocumentCommit,
    &blink::features::kNavigationEventTiming,
    &blink::features::kNavigationSourcePseudoClass,
    &blink::features::kNavigationTimingRedirectTimingViaTAO,
    &blink::features::kNavigationTypeAndPhase,
    &blink::features::kNavigatorContentUtils,
    &blink::features::kNetInfoConstantType,
    &blink::features::kNeutralKeyframeEasingCompliance,
    &blink::features::kNewAnimationCompositingChecking,
    &blink::features::kNewAnimationDispositionReporting,
    &blink::features::kNewHTMLSettingMethods,
    &blink::features::kNoExtendSelectionToUserSelectNoneOutOfFlow,
    &blink::features::kNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditable,
    &blink::features::kNoFontAntialiasing,
    &blink::features::kNoIdleEncodingForWebTests,
    &blink::features::kNoNbspForInterElementSpaceOnCopy,
    &blink::features::kNoSynchronousThrowForCrossOriginBlockedWorker,
    &blink::features::kNodeIteratorRemovalFix,
    &blink::features::kNonEmptyBlockquotesOnOutdenting,
    &blink::features::kNonEmptyVisibleTextSelectionForTextFragment,
    &blink::features::kNonStandardAppearanceValueSliderVertical,
    &blink::features::kNormalizeLineEndingsInInsertText,
    &blink::features::kNotificationConstructor,
    &blink::features::kNotifySelectionControllerOnUnchangedSelection,
    &blink::features::kNumberInputFullWidthChars,
    &blink::features::kOfflineAudioContextIncrementalRendering,
    &blink::features::kOffscreenCanvasGetContextAttributes,
    &blink::features::kOffsetMappingReuseFullWidthSpaceFix,
    &blink::features::kOffsetPathTransformUpdateFix,
    &blink::features::kOmitBlurEventOnElementRemoval,
    &blink::features::kOmitSubframeDetachmentEventsOnRemoval,
    &blink::features::kOnDeviceWebSpeechAvailable,
    &blink::features::kOnDeviceWebSpeechQuality,
    &blink::features::kOofLayoutRequiresSideEffects,
    &blink::features::kOpaqueRange,
    &blink::features::kOpenPopoverInvokerRestrictToSameTreeScope,
    &blink::features::kOptionDisablednessCheckAncestors,
    &blink::features::kOrientationEvent,
    &blink::features::kOriginAPI,
    &blink::features::kOriginPolicy,
    &blink::features::kOutlineDrawAutoStyleZeroWidth,
    &blink::features::kOverlayGlobalRuleRemoval,
    &blink::features::kOverlayProperty,
    &blink::features::kOverscrollAreas,
    &blink::features::kPagePopup,
    &blink::features::kPagePopupCopyPaste,
    &blink::features::kPageSwapEvent,
    &blink::features::kPaintCaretAfterInnerEditorPaint,
    &blink::features::kPaintHoldingForIframes,
    &blink::features::kPaintTimingContentImagePseudoElements,
    &blink::features::kPaintUnderInvalidationChecking,
    &blink::features::kParakeet,
    &blink::features::kPartitionVisitedLinkDatabaseWithSelfLinks,
    &blink::features::kPasswordReveal,
    &blink::features::kPaymentHandlerStaticCustomSize,
    &blink::features::kPaymentLinkDetection,
    &blink::features::kPaymentMethodChangeEvent,
    &blink::features::kPaymentRequestNonFullyActiveDocumentCheckInvalidStateError,
    &blink::features::kPerformanceMarkCustomUserTimingFromSubframe,
    &blink::features::kPerformanceMarkFeatureUsage,
    &blink::features::kPermissionsPolicyAPI,
    &blink::features::kPermissionsPolicyForSharedWorkers,
    &blink::features::kPermissionsRequestRevoke,
    &blink::features::kPersistentWidgetAPI,
    &blink::features::kPointerLockOnAndroid,
    &blink::features::kPointerRawUpdateOnlyInSecureContext,
    &blink::features::kPopoverHintNestedShowException,
    &blink::features::kPopoverHintNewBehavior,
    &blink::features::kPopupWidgetRequiresUserActivation,
    &blink::features::kPositionOutsideTabSpanCheckSiblingNode,
    &blink::features::kPositionVisibilityIgnoreNonClipAncestors,
    &blink::features::kPositionVisibilitySingularValues,
    &blink::features::kPotentialPermissionsPolicyReporting,
    &blink::features::kPrePaintBoxInvalidatorUsesFragments,
    &blink::features::kPreferDefaultScrollbarStyles,
    &blink::features::kPreferNonCompositedScrolling,
    &blink::features::kPreferredAudioOutputDevices,
    &blink::features::kPrefersReducedData,
    &blink::features::kPreloadLinkRelDataUrls,
    &blink::features::kPreloadScannerImprovements,
    &blink::features::kPrerender2,
    &blink::features::kPrerender2CrossOriginIframes,
    &blink::features::kPrerenderActivationByFormSubmission,
    &blink::features::kPrerenderUntilScript,
    &blink::features::kPreserveHtmlEquivalentTagsInTypingStyle,
    &blink::features::kPreserveUnfocusedSelectionCache,
    &blink::features::kPreventTextSelectionJump,
    &blink::features::kProfilerAPI,
    &blink::features::kProfilerAPIForDedicatedWorker,
    &blink::features::kProgrammaticScrollPromise,
    &blink::features::kProgressEventInServiceWorker,
    &blink::features::kPropagateOverscrollBehaviorFromRoot,
    &blink::features::kPseudoElementsFocusable,
    &blink::features::kPseudoElementsHitTestable,
    &blink::features::kPseudoElementsHoverable,
    &blink::features::kQuotaExceededErrorUpdate,
    &blink::features::kRTCConfigurationIceTransports,
    &blink::features::kRTCDataChannelPriority,
    &blink::features::kRTCDiagnosticLogging,
    &blink::features::kRTCEncodedAudioFrameConstructor,
    &blink::features::kRTCEncodedFrameAudioLevel,
    &blink::features::kRTCEncodedFrameSetMetadata,
    &blink::features::kRTCEncodedFrameTimestamps,
    &blink::features::kRTCEncodedSource,
    &blink::features::kRTCEncodedVideoFrameAdditionalMetadata,
    &blink::features::kRTCEncodedVideoFrameConstructor,
    &blink::features::kRTCJitterBufferTarget,
    &blink::features::kRTCLegacyDiagnosticLogging,
    &blink::features::kRTCRtpEncodingParametersCodec,
    &blink::features::kRTCRtpScaleResolutionDownTo,
    &blink::features::kRTCRtpScriptTransform,
    &blink::features::kRTCRtpTransport,
    &blink::features::kRTCSvcScalabilityMode,
    &blink::features::kRadioButtonCircularBorderRadius,
    &blink::features::kRangeBoundaryFastPath,
    &blink::features::kRasterInducingScroll,
    &blink::features::kRateLimitPointerLockRequests,
    &blink::features::kReadClipboardDataOnClipboardItemGetType,
    &blink::features::kReadOnlyTextControlSelection,
    &blink::features::kReadableStreamBYOBReaderReadMinOption,
    &blink::features::kReadingFlowWithSlots,
    &blink::features::kRecheckParentDuringNodeVectorInsertion,
    &blink::features::kReduceUserAgentMinorVersion,
    &blink::features::kRegionCapture,
    &blink::features::kRelOpenerBcgDependencyHint,
    &blink::features::kReleasePaintHoldingWithoutContentfulPaint,
    &blink::features::kRemotePlaybackBackend,
    &blink::features::kRemoveCharsetAutoDetectionForISO2022JP,
    &blink::features::kRemoveChildrenInReplaceChildren,
    &blink::features::kRemoveCollapsedPlaceholderForContentEditable,
    &blink::features::kRemoveDanglingMarkupInTarget,
    &blink::features::kRemoveDataUrlInSvgUse,
    &blink::features::kRemoveNonAllowlistedCreateEvent,
    &blink::features::kRemoveScrollNodeWorkaround,
    &blink::features::kRemoveVisibleSelectionInDOMSelection,
    &blink::features::kRenderPriorityAttribute,
    &blink::features::kReplaceChildrenWithFragmentFastPath,
    &blink::features::kReplaceCompositionActualInsertedLength,
    &blink::features::kReplacedNormalFlowStackingInlinePaint,
    &blink::features::kReportFirstFrameTimeAsRenderTime,
    &blink::features::kReportLayoutShiftRectsInCssPixels,
    &blink::features::kRequestIsReloadNavigation,
    &blink::features::kResourceTimingInitiator,
    &blink::features::kResourceTimingUseCORSForBodySizes,
    &blink::features::kRespectOverscrollBehaviorForScrollBubbling,
    &blink::features::kResponsiveIframes,
    &blink::features::kResponsiveIframesShrink,
    &blink::features::kResponsiveIframesSingleAxisIcb,
    &blink::features::kRestrictOwnAudio,
    &blink::features::kRootScrollbarFollowsBrowserTheme,
    &blink::features::kRouteMatching,
    &blink::features::kRtcAlwaysNegotiateDataChannels,
    &blink::features::kRtcRtpHeaderEncryptionPolicy,
    &blink::features::kRubyTextDecorationSpacing,
    &blink::features::kRunMicrotaskBeforeXmlScript,
    &blink::features::kRunSnapshotPostLayoutStateSteps,
    &blink::features::kSVGEmbeddedAsReplacedElement,
    &blink::features::kSVGPathDataAPI,
    &blink::features::kSVGTextPathSideAttribute,
    &blink::features::kSanitizeIDNEmailFormInput,
    &blink::features::kSanitizeWorkerErrorPropagation,
    &blink::features::kSanitizerAPI,
    &blink::features::kScopedViewTransitionSizeContainment,
    &blink::features::kScoreLineBreakerAbort,
    &blink::features::kScreenDetailedHdrHeadroom,
    &blink::features::kScriptBasedOnUnicodeBlock,
    &blink::features::kScrollAnchorSerializationUseParentForTextNode,
    &blink::features::kScrollAxisLock,
    &blink::features::kScrollIntoViewAlignAuto,
    &blink::features::kScrollIntoViewNearest,
    &blink::features::kScrollIntoViewNoInitialFocusNavigationStartingPoint,
    &blink::features::kScrollIntoViewRootFrameViewportBugFix,
    &blink::features::kScrollPerformanceTiming,
    &blink::features::kScrollTimelineCurrentTime,
    &blink::features::kScrollTimelineNamedRangeScroll,
    &blink::features::kScrollToTextFragmentDirectiveLimit,
    &blink::features::kScrollTopLeftInterop,
    &blink::features::kScrollVisibilityHiddenScrollers,
    &blink::features::kScrollbarColor,
    &blink::features::kScrollbarGutterBugFix,
    &blink::features::kScrollbarWidth,
    &blink::features::kSearchTextHighlightPseudo,
    &blink::features::kSecurePaymentConfirmationAvailabilityAPI,
    &blink::features::kSecurePaymentConfirmationCapabilities,
    &blink::features::kSecurePaymentConfirmationExtensionsDisallowForThirdParties,
    &blink::features::kSelectAnchorInViewport,
    &blink::features::kSelectAudioOutput,
    &blink::features::kSelectLabelClickOpensPicker,
    &blink::features::kSelectPopupBackground,
    &blink::features::kSelectRemoveOverflowHidden,
    &blink::features::kSelectUsesFlatTree,
    &blink::features::kSelectedcontentMultiple,
    &blink::features::kSelectedcontentSpec2,
    &blink::features::kSelectedcontentelementAttribute,
    &blink::features::kSelectionAndFocusedVisiblePositionMatch,
    &blink::features::kSelectionCollapsedDirectionNone,
    &blink::features::kSelectionEditingBoundarySlottedContent,
    &blink::features::kSelectionFocusAffinity,
    &blink::features::kSelectionHandleWithBottomClipped,
    &blink::features::kSelectionRemoveRangeNotFoundError,
    &blink::features::kSelectionSetBaseAndExtentNonNullNode,
    &blink::features::kSelectivePermissionsIntervention,
    &blink::features::kSendEarlyLastBeginMainFrame,
    &blink::features::kSendSlotChangeSignalAfterNodeInserted,
    &blink::features::kSeparateDeferModuleScriptTasks,
    &blink::features::kSequentialFocusPrimitives,
    &blink::features::kSequentialFocusPrimitivesShadowRoots,
    &blink::features::kWebSerialAPI,
    &blink::features::kSerializeInvalidSelectorsInForgivingSelectorList,
    &blink::features::kSerializeViewTransitionStateInSPA,
    &blink::features::kServiceWorkerBackgroundSyncInDedicatedWorker,
    &blink::features::kServiceWorkerClientLifecycleState,
    &blink::features::kServiceWorkerCodeCache,
    &blink::features::kServiceWorkerCodeCacheHashing,
    &blink::features::kServiceWorkerInDedicatedWorker,
    &blink::features::kServiceWorkerScriptEncoding,
    &blink::features::kServiceWorkerStaticRouterTimingInfo,
    &blink::features::kSetHTMLCanRunScripts,
    &blink::features::kSetSequentialFocusStartingPoint,
    &blink::features::kSetShape,
    &blink::features::kShadowRootAdoptedStyleSheet,
    &blink::features::kShadowRootNamespaceCheck,
    &blink::features::kShadowRootReferenceTarget,
    &blink::features::kShadowRootReferenceTargetAriaOwns,
    &blink::features::kShadowRootSlotAssignment,
    &blink::features::kSharedWorker,
    &blink::features::kSharedWorkerExtendedLifetime,
    &blink::features::kSideRelativeBackgroundPosition,
    &blink::features::kSignatureBasedInlineIntegrity,
    &blink::features::kSingleAxisScrollContainers,
    &blink::features::kSingleAxisScrollContainersForScrollSnap,
    &blink::features::kSkipAd,
    &blink::features::kSkipCallbacksWhenDevToolsNotOpen,
    &blink::features::kSkipCompositingStaticBackdropFilterAnimation,
    &blink::features::kSkipEventCapture,
    &blink::features::kSkipHtmlInterchangeInForeignContent,
    &blink::features::kSkipInitialForcedScrollbar,
    &blink::features::kSkipPaintInvalidationWhileStayingInvisible,
    &blink::features::kSkipStaleUndoStepsInIdleSpellCheck,
    &blink::features::kSkipTickingStaticAnimations,
    &blink::features::kSkipTouchEventFilter,
    &blink::features::kSkipUnselectableElementsInParagraphBoundary,
    &blink::features::kSmallerViewportUnits,
    &blink::features::kSmartCard,
    &blink::features::kSmartCardContextRelease,
    &blink::features::kSnapshotScrollTimelinesPostLayout,
    &blink::features::kSortedLayoutShiftSourcesByImpactArea,
    &blink::features::kSourceSpecificMulticastInDirectSockets,
    &blink::features::kSpatNavUsesCursorInheritance,
    &blink::features::kSpeakerSelection,
    &blink::features::kSpecCompliantXmlMimeTypes,
    &blink::features::kSpeculationMeasurement,
    &blink::features::kSpeculationRulesModerateViewportHeuristicsControl,
    &blink::features::kSpellCheckChunking,
    &blink::features::kSpellCheckCustomDictionaryAPI,
    &blink::features::kSplitQualifiedNameOnFirstColon,
    &blink::features::kSplitTextNotCleanupDummySpans,
    &blink::features::kSrcsetSelectionMatchesImageSet,
    &blink::features::kSrcsetTwoDimensionalSizes,
    &blink::features::kStackingContextIsNotStacked,
    &blink::features::kStaleImageNaturalSizeDuringRevalidation,
    &blink::features::kStaleIntersectionGeometryForThrottledFrames,
    &blink::features::kStandardizedBrowserZoom,
    &blink::features::kStandardizedBrowserZoomOptOut,
    &blink::features::kStickyUserActivationAcrossSameOriginNavigation,
    &blink::features::kStorageBuckets,
    &blink::features::kStorageBucketsDurability,
    &blink::features::kStorageBucketsLocks,
    &blink::features::kStrictMimeTypesForWorkers,
    &blink::features::kStyleResourceFetcherIdentityCheck,
    &blink::features::kSubApps,
    &blink::features::kSubframeMouseCaptureOwner,
    &blink::features::kSuppressFullscreenFromUnfocusedView,
    &blink::features::kSuppressPointerStreamAfterDrag,
    &blink::features::kSvgAnimateMotionDiscreteCalcMode,
    &blink::features::kSvgAvoidResettingFilterQualityForTiledPattern,
    &blink::features::kSvgCss3dTransforms,
    &blink::features::kSvgEmptyAttributeStringParsingFix,
    &blink::features::kSvgEnableTextDecorationCssStyling,
    &blink::features::kSvgFallBackToContainerSize,
    &blink::features::kSvgFeImageEXIFOrientation,
    &blink::features::kSvgFeImageSkipHiddenContainerViewportDependence,
    &blink::features::kSvgFilterPaintsForHiddenContent,
    &blink::features::kSvgFilterUserSpaceViewportForSvg,
    &blink::features::kSvgHyperlinkElementUtils,
    &blink::features::kSvgIgnoreNegativeEllipseRadii,
    &blink::features::kSvgImageAnimationReset,
    &blink::features::kSvgImageNonUniformScalingFix,
    &blink::features::kSvgIncrementalStyle,
    &blink::features::kSvgInlineRootPixelSnappingScaleAdjustment,
    &blink::features::kSvgInstanceSyncOptimization,
    &blink::features::kSvgLengthResolveUnparsedValue,
    &blink::features::kSvgNewZoom,
    &blink::features::kSvgPathLengthCssProperty,
    &blink::features::kSvgScriptElementAsyncAttribute,
    &blink::features::kSvgScriptFragmentAlreadyStarted,
    &blink::features::kSvgSizingWithPreserveAspectRatioNone,
    &blink::features::kSvgStyleElementReflectTypeAndMedia,
    &blink::features::kSvgSupportMediaFragments,
    &blink::features::kSvgTextPositioningGraphemeClusters,
    &blink::features::kSvgUseNestedResourceDocuments,
    &blink::features::kSvgUseNestedResourceDocumentsDelayLoad,
    &blink::features::kSyncCrossDocumentAnimationTiming,
    &blink::features::kSynthesizedKeyboardEventsForAccessibilityActions,
    &blink::features::kSyntheticMouseHoverOverInactivePage,
    &blink::features::kSystemWakeLock,
    &blink::features::kTabAlignmentWithFloats,
    &blink::features::kTabSizeInRubyBase,
    &blink::features::kTableCellBorderColorInherit,
    &blink::features::kTableIsAutoFixedLayout,
    &blink::features::kTargetInShadowDeterminedBeforeListener,
    &blink::features::kTargetRangesForBackwardDeletionUnit,
    &blink::features::kTemporalInputHostBlur,
    &blink::features::kTestBlinkFeatureDefault,
    &blink::features::kTestFeatureStable,
    &blink::features::kTextAreaPlaceholderBreakAriaHiddenUpdate,
    &blink::features::kTextAreaResizerFixedSize,
    &blink::features::kTextAutoSpaceIgnoreRubyAnnotation,
    &blink::features::kTextBoxTrimForNestedList,
    &blink::features::kTextBoxTrimOnInlineBox,
    &blink::features::kTextBoxTrimOnInlineBoxTextDecoration,
    &blink::features::kTextDetector,
    &blink::features::kTextEmphasisPositionAuto,
    &blink::features::kTextEncodingDetectorTldHint,
    &blink::features::kTextFragmentAPI,
    &blink::features::kTextFragmentAnchor,
    &blink::features::kTextFragmentTapOpensContextMenu,
    &blink::features::kTextIteratorExcludeAutofilledSelectFix,
    &blink::features::kTextMetricsBaselines,
    &blink::features::kTextOverflowClipWithSelection,
    &blink::features::kTextOverflowInTextarea,
    &blink::features::kTextOverflowString,
    &blink::features::kTextScaleMetaTag,
    &blink::features::kTextSpacingTrimFallback,
    &blink::features::kTextSpacingTrimFallback2,
    &blink::features::kTextSpacingTrimFallbackChws,
    &blink::features::kTextStreamMethod,
    &blink::features::kTimePickerHonorsStep,
    &blink::features::kTimeZoneChangeEvent,
    &blink::features::kTimelineTrigger,
    &blink::features::kTimestampBasedCLSTracking,
    &blink::features::kTouchDragOnShortPress,
    &blink::features::kTrackAnimatedSources,
    &blink::features::kTrackAnimatedSourcesForInheritedProperties,
    &blink::features::kTransferableRTCDataChannel,
    &blink::features::kTranslateService,
    &blink::features::kTranslationAPI,
    &blink::features::kTranslationAPIForWorkers,
    &blink::features::kTreatMhtmlInitialDocumentLoadsAsCrossDocument,
    &blink::features::kTrustedTypesCreateParserOptions,
    &blink::features::kTrustedTypesUseCodeLike,
    &blink::features::kTwoPhaseViewTransition,
    &blink::features::kUAImageReplacementAPI,
    &blink::features::kURLPatternCompareComponent,
    &blink::features::kURLPatternGenerate,
    &blink::features::kURLSearchParamsHasAndDeleteMultipleArgs,
    &blink::features::kUnboundedElement,
    &blink::features::kUnclosedFormControlIsInvalid,
    &blink::features::kUnexposedTaskIds,
    &blink::features::kUnprefixedSpeechRecognition,
    &blink::features::kUnrestrictedMeasureUserAgentSpecificMemory,
    &blink::features::kUnrestrictedUsb,
    &blink::features::kUnsafeEscapingUnboundedElementOnTheOpenWeb,
    &blink::features::kUnsafeUnboundedElementOnTheOpenWeb,
    &blink::features::kUpdateComplexSafaAreaConstraints,
    &blink::features::kUpdateSelectionOnNodeInsertion,
    &blink::features::kUseBeginFramePresentationFeedback,
    &blink::features::kUseLowQualityInterpolation,
    &blink::features::kUseOriginalDomOffsetsForOffsetMap,
    &blink::features::kUsePaintGeometryForIntersection,
    &blink::features::kUsePositionForPointInFlexibleBoxWithSingleChildElement,
    &blink::features::kUsePositionIfIsVisuallyEquivalentCandidate,
    &blink::features::kUseShadowHostStyleCheckEditable,
    &blink::features::kUseUndoStepElementDispatchBeforeInput,
    &blink::features::kUserActionPseudosStopAtTopLayer,
    &blink::features::kUserDefinedEntryPointTiming,
    &blink::features::kUserMediaElement,
    &blink::features::kUserMediaElementLegacy,
    &blink::features::kVariableSystemFontSupportOnWindows,
    &blink::features::kVideoAutoFullscreen,
    &blink::features::kVideoFrameMetadataBackgroundBlur,
    &blink::features::kVideoFrameMetadataRtpTimestamp,
    &blink::features::kVideoFullscreenOrientationLock,
    &blink::features::kVideoRotateToFullscreen,
    &blink::features::kVideoTrackGenerator,
    &blink::features::kVideoTrackGeneratorInWindow,
    &blink::features::kVideoTrackGeneratorInWorker,
    &blink::features::kViewTransitionLongCallbackTimeoutForTesting,
    &blink::features::kViewTransitionPreventSvgFilterPaint,
    &blink::features::kViewTransitionSkipPseudoTreeForNavigationCapture,
    &blink::features::kViewTransitionSkipZeroHeightControlsSnap,
    &blink::features::kViewportHeightClientHintHeader,
    &blink::features::kViewportSegments,
    &blink::features::kVisibilityCollapseColumn,
    &blink::features::kVisualRectMappingFixForExpansion,
    &blink::features::kWakeLock,
    &blink::features::kWarnOnContentVisibilityRenderAccess,
    &blink::features::kWavyDecorationContinuousPhase,
    &blink::features::kWebAppInstallation,
    &blink::features::kWebAppLaunchQueue,
    &blink::features::kWebAppScopeSystemAccentColor,
    &blink::features::kDesktopPWAsTabStrip,
    &blink::features::kDesktopPWAsTabStripCustomizations,
    &blink::features::kWebAppEnableTranslations,
    &blink::features::kWebAudioBypassOutputBuffering,
    &blink::features::kWebAudioBypassOutputBufferingOptOut,
    &blink::features::kWebAudioConfigurableRenderQuantum,
    &blink::features::kWebAuth,
    &blink::features::kWebAuthAuthenticatorAttachment,
    &blink::features::kWebAuthenticationAttestationFormats,
    &blink::features::kWebAuthenticationCmtgKey,
    &blink::features::kWebAutocorrectByDefault,
    &blink::features::kWebBluetoothScanning,
    &blink::features::kWebBluetoothWorldIsolatedCache,
    &blink::features::kWebCodecsVideoEncoderBuffers,
    &blink::features::kWebCryptoPQC,
    &blink::features::kWebGLDrawingBufferStorage,
    &blink::features::kWebGLOnWebGPU,
    &blink::features::kWebGLToneMapping,
    &blink::features::kWebGPUExperimentalFeatures,
    &blink::features::kWebGPUExperimentalResourceTable,
    &blink::features::kWebGPUExternalImageHDRHeadroom,
    &blink::features::kWebGPUMapSyncOnWorkers,
    &blink::features::kWebGPUMultithreadDawnWireOnWorkers,
    &blink::features::kWebHID,
    &blink::features::kWebHIDWorldIsolatedCache,
    &blink::features::kWebHaptics,
    &blink::features::kWebIDLBigIntUsesToBigInt,
    &blink::features::kWebMCP,
    &blink::features::kWebMCPContinuations,
    &blink::features::kWebMCPDeclarativeFileInput,
    &blink::features::kWebMCPFormAssociatedCustomElements,
    &blink::features::kWebPreferences,
    &blink::features::kWebPrinting,
    &blink::features::kWebRtcSctpSnap,
    &blink::features::kWebShare,
    &blink::features::kWebSocketOptionBag,
    &blink::features::kWebSocketStream,
    &blink::features::kWebSocketStreamStandardBinaryChunkType,
    &blink::features::kWebSpeechRecognitionContext,
    &blink::features::kWebSpeechTimestamps,
    &blink::features::kWebSpeechUnspokenPunctuation,
    &blink::features::kWebTransportAnticipatedConcurrentIncomingStreams,
    &blink::features::kWebTransportCreateStreamsBeforeReady,
    &blink::features::kWebTransportDatagramsReadableType,
    &blink::features::kWebTransportDraining,
    &blink::features::kWebTransportExportKeyingMaterial,
    &blink::features::kWebUIBundledCodeCacheAsyncFetch,
    &blink::features::kWebUSBOnDedicatedWorkers,
    &blink::features::kWebVTTCueLayoutByPositionAlignment,
    &blink::features::kWebVTTCueTightLineBox,
    &blink::features::kWebVTTRegions,
    &blink::features::kWebViewEnvReorderFix,
    &blink::features::kWebXREnabledFeatures,
    &blink::features::kWebXRHitTestEntityTypes,
    &blink::features::kWebXRMediaBinding,
    &blink::features::kWebXRMeshDetection,
    &blink::features::kWebXRSpecParity,
    &blink::features::kWebXRVisibilityMask,
    &blink::features::kWheelEventDeltaExternalPageScale,
    &blink::features::kWheelEventMomentum,
    &blink::features::kWindowDefaultStatus,
    &blink::features::kWindowOpenAlwaysOnTop,
    &blink::features::kWindowOpenAttributionSrc,
    &blink::features::kWindowOpenSplitTab,
    &blink::features::kWordSkipSpacesPunctuationFix,
    &blink::features::kXMLNoExternalEntities,
    &blink::features::kXMLParserReplaceLoneSurrogates,
    &blink::features::kXMLParsingRust,
    &blink::features::kXMLRustForNonXslt,
    &blink::features::kXMLSerializerConsistentDefaultNsDeclMatching,
    &blink::features::kXMLViewerForIframes,
    &blink::features::kXSLT,
    &blink::features::kXSLTSpecialTrial,
  };
  static const uint16_t kFlagIndices[] = {
    kAIDecisionModelAPIFlagIndex,
    kAIDecisionModelAPIForWorkersFlagIndex,
    kAIEmbeddingsAPIFlagIndex,
    kAIEmbeddingsAPIForWorkersFlagIndex,
    kAIPageContentAnchoredFixedOffscreenNonActionabilityFlagIndex,
    kAIPageContentAnchoredNonFixedOffscreenNonActionabilityFlagIndex,
    kAIPageContentBuildOnLoadForTestingFlagIndex,
    kAIPageContentCheckGeometryFlagIndex,
    kAIPageContentConvertNodeTextToUtf8FlagIndex,
    kAIPageContentElementCSSRedactionFlagIndex,
    kAIPageContentIncludeMathMLFlagIndex,
    kAIPageContentIncludeSVGSubtreeFlagIndex,
    kAIPageContentLabelExpandFallbackSourcesFlagIndex,
    kAIPageContentLabelRemoveRedundantFlagIndex,
    kAIPageContentLabelRemoveRedundantWholeWordMatchingFlagIndex,
    kAIPageContentOuterBoxMapToAncestorSpaceFlagIndex,
    kAIPageContentPaidContentAnnotationFlagIndex,
    kAIPageContentSkipUnclickableFixedOverlaysFlagIndex,
    kAIPageContentTrackedElementsIframeFlagIndex,
    kAIPageContentTrackedElementsPasswordFlagIndex,
    kAIPageContentVisualViewportClampFlagIndex,
    kAIPromptAPIFlagIndex,
    kAIPromptAPIForWorkersFlagIndex,
    kAIPromptAPILegacyIdentifiersFlagIndex,
    kAIPromptAPILegacyParamsFlagIndex,
    kAIPromptAPIMultimodalInputFlagIndex,
    kAIPromptAPIParamsFlagIndex,
    kAIPromptAPIStructuredOutputFlagIndex,
    kAIPromptAPIToolUseFlagIndex,
    kAIProofreadingAPIFlagIndex,
    kAIRewriterAPIFlagIndex,
    kAIRewriterAPIForWorkersFlagIndex,
    kAISummarizationAPIFlagIndex,
    kAISummarizationAPIForWorkersFlagIndex,
    kAISummarizationPerformancePreferenceFlagIndex,
    kAIWriterAPIFlagIndex,
    kAIWriterAPIForWorkersFlagIndex,
    kAOMAriaRelationshipPropertiesFlagIndex,
    kAOMAriaRelationshipPropertiesAriaOwnsFlagIndex,
    kAboutBlankPageRespectsDarkModeOnUserActionFlagIndex,
    kAccelerated2dCanvasFlagIndex,
    kAcceleratedSmallCanvasesFlagIndex,
    kAccessKeyLabelFlagIndex,
    kAccessibilityCheckIfcInPreviousTextOnLineFlagIndex,
    kAccessibilityExposeDisplayNoneFlagIndex,
    kAccessibilityImplicitActionsFlagIndex,
    kAccessibilityMinRoleTabbableFlagIndex,
    kAccessibilityOSLevelBoldTextFlagIndex,
    kAccessibilityProhibitedNamesFlagIndex,
    kAccessibilitySerializationSizeMetricsFlagIndex,
    kAdInterestGroupAPIFlagIndex,
    kAddressSpaceFlagIndex,
    kAdjustEndOfNextParagraphIfMovedParagraphIsUpdatedFlagIndex,
    kAlignZoomToCenterFlagIndex,
    kAllowPreloadingWithCSPMetaTagFlagIndex,
    kAllowSvgUseToReferenceExternalDocumentRootFlagIndex,
    kAncestorOriginsStoredOnDocumentFlagIndex,
    kAnchorPositionAdjustmentWithoutOverflowFlagIndex,
    kAnimationEventAnimationFlagIndex,
    kAnimationProgressAPIFlagIndex,
    kAnimationRangeRejectRelativeLengthsFlagIndex,
    kAnimationTriggerFlagIndex,
    kAnimationWorkletFlagIndex,
    kAnnotationSpaceForMultiColFlagIndex,
    kAnnotationSpaceOnStartFlagIndex,
    kAnonymousIframeFlagIndex,
    kAppTitleFlagIndex,
    kAppearanceBaseFlagIndex,
    kAppearanceDisplayAdjustmentForWidgetsOnlyFlagIndex,
    kApproximateGeolocationPermissionAPIFlagIndex,
    kApproximateGeolocationPermissionAccuracyModeFlagIndex,
    kApproximateGeolocationWebVisibleAPIFlagIndex,
    kAriaActionsFlagIndex,
    kAriaNotifyFlagIndex,
    kAriaNotifyV2FlagIndex,
    kAriaRowColIndexTextFlagIndex,
    kAudioContextAsyncStateTransitionsFlagIndex,
    kAudioContextPlaybackStatsFlagIndex,
    kAudioContextSetSinkIdFlagIndex,
    kAudioVideoTracksFlagIndex,
    kAudioWorkletSharedPortFlagIndex,
    kAuthorSpecifiedLayoutScrollSnapBehaviorFlagIndex,
    kAutoDarkModeSVGSizeThresholdFlagIndex,
    kAutoPictureInPictureVideoHeuristicsFlagIndex,
    kAutoSizeUsesScrollWidthForOverflowFlagIndex,
    kAutofillEventFlagIndex,
    kAutofillPreviewGenericFontFamilyFlagIndex,
    kAutofillPreviewIgnoreAuthorFontFlagIndex,
    kAvoidEmbeddedContentViewLocationFlagIndex,
    kAvoidNonSelectableSelectionBoundaryFlagIndex,
    kAvoidSynchronousBlurOnDisabledAttributeChangeFlagIndex,
    kBackForwardCacheNotRestoredReasonsFlagIndex,
    kBackForwardCacheRestorationPerformanceEntryFlagIndex,
    kBackForwardCacheUpdateNotRestoredReasonsNameFlagIndex,
    kBackfaceVisibilityInteropFlagIndex,
    kBackgroundClipTextDecorationFlagIndex,
    kBarcodeDetectorFlagIndex,
    kBaseAppearanceInlineSizingFlagIndex,
    kBasicShapeCornerRadiusFlagIndex,
    kBidiCaretAffinityFlagIndex,
    kBidiVisualOrderCaretMovementFlagIndex,
    kBlinkExtensionWebViewFlagIndex,
    kBlinkExtensionWebViewMediaIntegrityFlagIndex,
    kBlinkGeometryMapperViewportFastPathFlagIndex,
    kBlinkLifecycleScriptForbiddenFlagIndex,
    kBlinkRuntimeCallStatsFlagIndex,
    kBlobBytesFlagIndex,
    kBlockSelectPopupUnfocusedWindowFlagIndex,
    kBlockingFocusWithoutUserActivationFlagIndex,
    kBoundaryEventDispatchTracksNodeRemovalFlagIndex,
    kBoxDecorationBreakCloneLineBreakingFlagIndex,
    kBrowserInitiatedAutomaticPictureInPictureFlagIndex,
    kBufferedBytesConsumerLimitSizeFlagIndex,
    kBypassPepcSecurityForTestingFlagIndex,
    kCCTNewRFMPushBehaviorFlagIndex,
    kCDTNewCrossOriginHandlingFlagIndex,
    kCDTNewDestinationFlagIndex,
    kCDTNewReferrerAndReferrerPolicyHandlingFlagIndex,
    kCSPReportHashFlagIndex,
    kCSSAccentColorKeywordFlagIndex,
    kCSSActiveCaptionMapsToCanvasFlagIndex,
    kCSSAlphaColorFunctionFlagIndex,
    kCSSAlphaColorFunctionRequiresAlphaFlagIndex,
    kCSSAltCounterFlagIndex,
    kCSSAnimationIterationCompositeFlagIndex,
    kCSSArgumentGrammarFlagIndex,
    kCSSAtRuleCounterStyleImageSymbolsFlagIndex,
    kCSSAtRuleCounterStyleSpeakAsDescriptorFlagIndex,
    kCSSAttributeValueCaseSensitiveNonHTMLFlagIndex,
    kCSSBackgroundClipBorderAreaFlagIndex,
    kCSSBackgroundLayerCountIndependenceFlagIndex,
    kCSSBorderRadiusSideShorthandsFlagIndex,
    kCSSBorderShapeFlagIndex,
    kCSSCalcEarlyNaNAndInfFoldingFlagIndex,
    kCSSCalcSimplificationAndSerializationFlagIndex,
    kCSSCaretAnimationFlagIndex,
    kCSSCaretColorWithOptionalSecondValueFlagIndex,
    kCSSCaretShapeFlagIndex,
    kCSSCaseSensitiveSelectorFlagIndex,
    kCSSChUnitSpecCompliantFallbackFlagIndex,
    kCSSColorTypedOMFlagIndex,
    kCSSContainerProgressNotationFlagIndex,
    kCSSContainerStyleQueriesRangeFlagIndex,
    kCSSCornersShorthandFlagIndex,
    kCSSCounterResetReversedFlagIndex,
    kCSSCounterStyleSymbolsFunctionFlagIndex,
    kCSSCrossFadeFlagIndex,
    kCSSCustomHighlightUniversalSelectorFlagIndex,
    kCSSCustomMediaFlagIndex,
    kCSSDynamicRangeLimitFlagIndex,
    kCSSEnumeratedCustomPropertiesFlagIndex,
    kCSSFlowStartAndEndFlagIndex,
    kCSSFlowStartAndEndSerializationFlagIndex,
    kCSSFontFamilySerializationFlagIndex,
    kCSSFontSizeAdjustFlagIndex,
    kCSSFunctionsFlagIndex,
    kCSSGridLanesLayoutFlagIndex,
    kCSSHangingPunctuationFlagIndex,
    kCSSHexAlphaColorFlagIndex,
    kCSSIdentFunctionFlagIndex,
    kCSSImageAnimationFlagIndex,
    kCSSImageFunctionFlagIndex,
    kCSSInRangeOutOfRangeReversedRangesFlagIndex,
    kCSSInheritFunctionFlagIndex,
    kCSSKeyframesRuleLengthFlagIndex,
    kCSSLangExtendedRangesFlagIndex,
    kCSSLayoutAPIFlagIndex,
    kCSSLightDarkImageFlagIndex,
    kCSSLineClampFlagIndex,
    kCSSLineClampAsShorthandFlagIndex,
    kCSSLineClampLineBreakingEllipsisFlagIndex,
    kCSSLinkParametersPropertyFlagIndex,
    kCSSListCounterAccountingFlagIndex,
    kCSSLogicalCombinationPseudoFlagIndex,
    kCSSMarkerNestedPseudoElementFlagIndex,
    kCSSMediaElementPseudosFlagIndex,
    kCSSMediaProgressNotationFlagIndex,
    kCSSMixinsFlagIndex,
    kCSSNestedPseudoElementsFlagIndex,
    kCSSOMGetComputedStylePseudoElementRequiresColonFlagIndex,
    kCSSPaintAPIArgumentsFlagIndex,
    kCSSParserIgnoreCharsetForURLsFlagIndex,
    kCSSPolygonRoundingFlagIndex,
    kCSSPositionStickyStaticScrollPositionFlagIndex,
    kCSSPositionVisibilityAnchorValidFlagIndex,
    kCSSPrivateFlagIndex,
    kCSSProgressNotationFlagIndex,
    kCSSProgressNotationNoClampFlagIndex,
    kCSSPseudoColumnFlagIndex,
    kCSSPseudoElementBackdropFlagIndex,
    kCSSPseudoElementInterfaceFlagIndex,
    kCSSPseudoElementScrollButtonFlagIndex,
    kCSSPseudoElementSelectorTextFlagIndex,
    kCSSPseudoElementViewTransitionsFlagIndex,
    kCSSPseudoHasSlottedFlagIndex,
    kCSSPseudoScrollButtonsFlagIndex,
    kCSSPseudoScrollMarkersFlagIndex,
    kCSSRandomFunctionFlagIndex,
    kCSSRandomFunctionTypedOMFlagIndex,
    kCSSResizeAutoFlagIndex,
    kCSSRevertRuleFlagIndex,
    kCSSRubyOverhangFlagIndex,
    kCSSSafePrintableInsetFlagIndex,
    kCSSScopeImportFlagIndex,
    kCSSScopeifiedParentPseudoClassFlagIndex,
    kCSSScrollInitialTargetFlagIndex,
    kCSSScrollMarkerGroupModesFlagIndex,
    kCSSScrollMarkerTargetBeforeAfterFlagIndex,
    kCSSScrollSnapChangeEventFlagIndex,
    kCSSScrollSnapChangingEventFlagIndex,
    kCSSScrollSnapEventConstructorExposedFlagIndex,
    kCSSScrollSnapEventsFlagIndex,
    kCSSScrollSnapStopBeforeFlagIndex,
    kCSSScrollSnapTypePairFlagIndex,
    kCSSScrollTargetGroupFlagIndex,
    kCSSScrollTargetGroupAriaCurrentFlagIndex,
    kCSSScrolledContainerQueriesFlagIndex,
    kCSSShapeOutsidePathAndShapeSupportFlagIndex,
    kCSSShapeOutsideRectAndXywhSupportFlagIndex,
    kCSSStyleSheetInitBaseURLFlagIndex,
    kCSSSupportsAtRuleFunctionFlagIndex,
    kCSSSupportsForImportRulesFlagIndex,
    kCSSSupportsNamedFeatureFunctionFlagIndex,
    kCSSSystemAccentColorFlagIndex,
    kCSSTextAlignMatchParentFlagIndex,
    kCSSTextDecorationInsetFlagIndex,
    kCSSTextDecorationSkipInkAllFlagIndex,
    kCSSTextDecorationSkipSpacesFlagIndex,
    kCSSTextSpacingFlagIndex,
    kCSSTextTransformFullSizeKanaFlagIndex,
    kCSSTextTransformFullWidthFlagIndex,
    kCSSTextTransformMultiKeywordFlagIndex,
    kCSSTimelineScopeAllFlagIndex,
    kCSSTimelineScopeGlobalFlagIndex,
    kCSSTreeScopedScrollTimelineFlagIndex,
    kCSSURLRequestModifiersFlagIndex,
    kCSSUserSelectContainFlagIndex,
    kCSSUserValidAndUserInvalidForRadioFlagIndex,
    kCSSVideoDynamicRangeMediaQueriesFlagIndex,
    kCSSViewTransitionAutoNameFlagIndex,
    kCSSWindowDragFlagIndex,
    kCSSZoomAnimationFlagIndex,
    kCacheControlRFC7234ParsingFlagIndex,
    kCacheControlRFC7234ParsingMetricsFlagIndex,
    kCacheStyleAdjusterFlagIndex,
    kCameraAndMicrophoneElementsFlagIndex,
    kCanvas2dCanvasFilterFlagIndex,
    kCanvas2dDeferredFlushFlagIndex,
    kCanvas2dLayersFlagIndex,
    kCanvas2dLayersWithOptionsFlagIndex,
    kCanvas2dMeshFlagIndex,
    kCanvasDrawElementFlagIndex,
    kCanvasFloatingPointFlagIndex,
    kCanvasGlobalHDRHeadroomFlagIndex,
    kCanvasGradientCSSColor4FlagIndex,
    kCanvasHDRFlagIndex,
    kCanvasTextDirectionReflectFlagIndex,
    kCanvasTextMetricsPreciseBoundsFlagIndex,
    kCanvasToneMappingFlagIndex,
    kCanvasUsesArcPaintOpFlagIndex,
    kCapabilityDelegationDigitalCredentialsFlagIndex,
    kCapabilityDelegationDisplayCaptureRequestFlagIndex,
    kCapabilityDelegationPopupFlagIndex,
    kCapabilityElementIconOnlyModeFlagIndex,
    kCapitalizeAfterSupplementaryCharacterFixFlagIndex,
    kCaptureControllerFlagIndex,
    kCaptureHandleFlagIndex,
    kCapturedMouseEventsFlagIndex,
    kCapturedSurfaceControlFlagIndex,
    kCapturedSurfaceResolutionFlagIndex,
    kCaretBlinkingFlagIndex,
    kCaretBrowsingSequentialFocusStartingPointFlagIndex,
    kCaretOutsideEditableAtomicInlineFlagIndex,
    kCheckCSPOnInlineScriptAttributeSetFlagIndex,
    kCheckableInputTypeLayoutInlineFlagIndex,
    kClampUnfocusedSelectionCacheFlagIndex,
    kCleanUpActivationBehaviorFlagIndex,
    kClearCrossOriginRelatedTargetFlagIndex,
    kClearCurrentTargetAfterDispatchFlagIndex,
    kClearDisplayLockPrePaintFlagsFlagIndex,
    kClearFocusWithinOnSubtreeRemovalFlagIndex,
    kClearTargetOnlyIfInShadowTreeFlagIndex,
    kClipElementVisibleBoundsInLocalRootFlagIndex,
    kClipPathNestedRasterOptimizationFlagIndex,
    kClipboardEventTargetUsesContainerNodeFlagIndex,
    kClipboardPasteImageRespectBufferFlagIndex,
    kCoalesceSelectionchangeEventFlagIndex,
    kCoepReflectionFlagIndex,
    kColorInputAcceptsCSSColorsFlagIndex,
    kColorSpaceDisplayP3LinearFlagIndex,
    kColorSpacePredefinedLinearSpacesFlagIndex,
    kColorSpaceRec2100LinearFlagIndex,
    kComposedPathReturnTargetBeingDispatchedFlagIndex,
    kCompositeClipPathAnimationFlagIndex,
    kCompositeHoverStyleFlagIndex,
    kCompositingDecisionAtAnimationPhaseBoundariesFlagIndex,
    kCompositionForegroundMarkersFlagIndex,
    kCompositorEventTriggerFlagIndex,
    kCompositorTimelineTriggerFlagIndex,
    kComputePressureFlagIndex,
    kComputedAccessibilityInfoFlagIndex,
    kConcurrentNativePaintWorkletsFlagIndex,
    kConditionalTracingLoAFFlagIndex,
    kConnectionAllowlistEmbeddedEnforcementFlagIndex,
    kConsistentFormControlPaintSnappingFlagIndex,
    kConstructableStylesheetCacheFlagIndex,
    kContactsManagerFlagIndex,
    kContactsManagerExtraPropertiesFlagIndex,
    kContainerTimingFlagIndex,
    kContentIndexFlagIndex,
    kContextMenuFlagIndex,
    kControlledFrameFlagIndex,
    kControlledFrameWebRequestSecurityInfoFlagIndex,
    kCookieStoreAPIMaxAgeFlagIndex,
    kCookieStoreAPIWhitespaceStrippingFlagIndex,
    kCorrectTemplateFormParsingFlagIndex,
    kCorsRFC1918FlagIndex,
    kCpuPerformanceFlagIndex,
    kCrashReportingStorageAPIFlagIndex,
    kCreateInlineContentsAnonymousBlockFlagIndex,
    kCrossOriginStorageFlagIndex,
    kCssMaxContentSizingFlagIndex,
    kCssTextFitFlagIndex,
    kCssTextFitReshapingFlagIndex,
    kCustomElementsDisableFormattingFixupsFlagIndex,
    kCustomScrollbarApplyMinimumThumbLengthFlagIndex,
    kCustomizableComboboxFlagIndex,
    kCustomizableSelectMultiplePopupFlagIndex,
    kCustomizableSelectNewUAStylesFlagIndex,
    kDOMParserXmlScriptAlreadyStartedFlagIndex,
    kDatabaseFlagIndex,
    kDateTimeInputTypeEarlyAdvanceFixFlagIndex,
    kDeclarativeCSSModulesFlagIndex,
    kDeclarativeCSSModulesStyleTagFlagIndex,
    kDeclarativeFragmentFlagIndex,
    kDeclarativePerformanceObserverFlagIndex,
    kDeclarativeSkeletonsFlagIndex,
    kDeclarativeWebMCPFlagIndex,
    kDeferLineBoxHitTestToBackgroundFlagIndex,
    kDelegatesFocusTextControlInputFixFlagIndex,
    kDeprecateUnloadOptOutFlagIndex,
    kDesktopCaptureDisableLocalEchoControlFlagIndex,
    kDesktopPWAsAdditionalWindowingControlsFlagIndex,
    kDesktopPWAsAdditionalWindowingControlsOnMoveFlagIndex,
    kDeviceAttributesFlagIndex,
    kDeviceOrientationRequestPermissionFlagIndex,
    kDevicePostureFlagIndex,
    kDialogCloseWhenOpenRemovedFlagIndex,
    kDialogNewFocusBehaviorFlagIndex,
    kDigitalCredentialsProtocolFilterFlagIndex,
    kDigitalGoodsV2_1FlagIndex,
    kDirectSocketsFlagIndex,
    kDirectSocketsInServiceWorkersFlagIndex,
    kDirectSocketsInSharedWorkersFlagIndex,
    kDisableAnchorCenterOnAlignJustifyItemsFlagIndex,
    kDisableEllipsisWhenScrolledFlagIndex,
    kDisableFormControlChangeEventDuringMutationFlagIndex,
    kDisconnectWebSocketOnBFCacheFlagIndex,
    kDispatchHiddenVisibilityTransitionsFlagIndex,
    kDispatchSelectionchangeEventPerElementFlagIndex,
    kDispatchWorkerCSPViolationEventForModuleGraphFetchingFlagIndex,
    kDisplayContentsFocusableFlagIndex,
    kDocumentCookieFlagIndex,
    kDocumentDomainFlagIndex,
    kDocumentOpenIframeUnloadEventsFlagIndex,
    kDocumentOpenOriginAliasRemovalFlagIndex,
    kDocumentOpenSandboxInheritanceRemovalFlagIndex,
    kDocumentPatchingFlagIndex,
    kDocumentPictureInPictureAPIFlagIndex,
    kDocumentPictureInPicturePreferInitialPlacementFlagIndex,
    kDocumentPictureInPictureUserActivationFlagIndex,
    kDocumentPolicyDocumentDomainFlagIndex,
    kDocumentPolicyExpectNoLinkedResourcesFlagIndex,
    kDocumentPolicyInDedicatedWorkerFlagIndex,
    kDocumentPolicyIncludeJSCallStacksInCrashReportsFlagIndex,
    kDocumentPolicyJSProfilingModeFlagIndex,
    kDocumentPolicyNetworkEfficiencyGuardrailsFlagIndex,
    kDocumentPolicySyncXHRFlagIndex,
    kDocumentWriteFlagIndex,
    kDragAndDropDownloadURLListFlagIndex,
    kDragAndDropJSFileObjectsFlagIndex,
    kDragImageForLargeImagesFlagIndex,
    kDragThresholdRequiresMouseMovementFlagIndex,
    kDumpForAbsentKeyframeSnapshotsFlagIndex,
    kEditContextAssignmentAsPerSpecFlagIndex,
    kEditContextBoundsUpdateSchedulesFrameFlagIndex,
    kEditContextCodePointDeletionFlagIndex,
    kEditContextHandleTextOrSelectionUpdateDuringCompositionFlagIndex,
    kEditContextSelectionUpdateBeforeTextUpdateEventFlagIndex,
    kEditingUseDomPositionApiFlagIndex,
    kElasticOverscrollBackgroundPaintLocationFixFlagIndex,
    kElasticOverscrollUseEventDeltaForAxisSelectionFlagIndex,
    kElementCaptureFlagIndex,
    kElementInternalsBehaviorsFlagIndex,
    kElementMatchContainerFlagIndex,
    kElementSpecificReadOnlyConstraintValidationFlagIndex,
    kEmbeddedContentCenterAlignBaselineFlagIndex,
    kEmojiZWJVerticalOrientationFlagIndex,
    kEnableXSLTForCAPAlertsFlagIndex,
    kEndpointInclusiveCommitStylesFlagIndex,
    kEnforceAnonymityExposureFlagIndex,
    kEntropyIgnoredForFirstVideoFrameLCPFlagIndex,
    kEventPseudoTargetPropertyFlagIndex,
    kEventPseudoTargetViewTransitionNameFlagIndex,
    kEventTimingInteractionCountFlagIndex,
    kEventTimingMatchingHTMLFlagIndex,
    kEventTimingTargetSelectorFlagIndex,
    kEventTriggerFlagIndex,
    kExperimentalJSProfilerMarkersFlagIndex,
    kExperimentalPoliciesFlagIndex,
    kExposeCSSFontFeatureValuesRuleFlagIndex,
    kExposeRenderTimeNonTaoDelayedImageFlagIndex,
    kExtendedTextMetricsFlagIndex,
    kExtensionScriptTaggingFlagIndex,
    kExtensionScriptTaggingTestingAPIFlagIndex,
    kExternalPopupMenuClickEventFlagIndex,
    kFaceDetectorFlagIndex,
    kFastCompositionCharacterBoundsFlagIndex,
    kFastPlainTextRangeCreateRangeFlagIndex,
    kFastPositionIteratorFlagIndex,
    kFencedFramesFlagIndex,
    kFencedFramesAPIChangesFlagIndex,
    kFetchBodyBytesFlagIndex,
    kFetchLaterAPIFlagIndex,
    kFetchRetryFlagIndex,
    kFetchUploadStreamingFlagIndex,
    kFileHandlingFlagIndex,
    kFilePickerEventsFixFlagIndex,
    kFileSystemAccessFlagIndex,
    kFileSystemAccessGetCloudIdentifiersFlagIndex,
    kFileSystemAccessLockingSchemeFlagIndex,
    kFileSystemAccessOriginPrivateFlagIndex,
    kFileSystemAccessRevokeReadOnRemoveFlagIndex,
    kFileSystemAccessWriteModeFlagIndex,
    kFileSystemObserverFlagIndex,
    kFileSystemObserverUnobserveFlagIndex,
    kFilterContainerLevelStylesFlagIndex,
    kFilterableSelectFlagIndex,
    kFilteringPrimitivesFlagIndex,
    kFindBufferCollapseSkippedSpaceFlagIndex,
    kFindBufferMatchAcrossIgnoredNodesFlagIndex,
    kFindBufferSkipIgnoredSubtreesFlagIndex,
    kFindFirstMisspellingEndWhenNonEditableFlagIndex,
    kFindIgnoreSuggestionFixFlagIndex,
    kFirstLetterParagraphOffsetsFlagIndex,
    kFirstLineAndLetterExcludeInputTextareaFlagIndex,
    kFirstLineTextMetricsFlagIndex,
    kFixHTMLFormControlElementIsReadOnlyFlagIndex,
    kFixMapElementEmptyNameBugFlagIndex,
    kFixSelectionPaintRangeNullOptFlagIndex,
    kFixVisualRectRemoteViewportTransformFlagIndex,
    kFledgeFlagIndex,
    kFledgeAuctionDealSupportFlagIndex,
    kFledgeBiddingAndAuctionServerAPIMultiSellerFlagIndex,
    kFledgeClickinessFlagIndex,
    kFledgeCustomMaxAuctionAdComponentsFlagIndex,
    kFledgeDeprecatedRenderURLReplacementsFlagIndex,
    kFledgeDirectFromSellerSignalsHeaderAdSlotFlagIndex,
    kFledgeDirectFromSellerSignalsWebBundlesFlagIndex,
    kFledgeMultiBidFlagIndex,
    kFledgePrivateModelTrainingFlagIndex,
    kFledgeRealTimeReportingFlagIndex,
    kFledgeSellerNonceFlagIndex,
    kFledgeSellerScriptExecutionModeFlagIndex,
    kFledgeTrustedSignalsKVv1CreativeScanningFlagIndex,
    kFledgeTrustedSignalsKVv2ContextualDataFlagIndex,
    kFledgeTrustedSignalsKVv2SupportFlagIndex,
    kFlexWrapBalanceFlagIndex,
    kFocusResetEventFlagIndex,
    kFocusRingRespectExplicitOutlineColorInDarkModeFlagIndex,
    kFocusgroupFlagIndex,
    kFocusgroupV2FlagIndex,
    kFontAccessFlagIndex,
    kFontFamilyPostscriptMatchingCTMigrationFlagIndex,
    kFontFamilyStyleMatchingCTMigrationFlagIndex,
    kFontFeatureSettingsDescriptorFlagIndex,
    kFontFormatAvar2FlagIndex,
    kFontLanguageOverrideFlagIndex,
    kFontMatchAliasesAsLastResortFlagIndex,
    kFontPrewarmerShutdownFallbackFlagIndex,
    kFontStyleObliqueZeroDegreeAsNormalFlagIndex,
    kFontUniqueNameTypefaceCacheFlagIndex,
    kFontVariableItalicAxisFlagIndex,
    kFontVariationSettingsDescriptorFlagIndex,
    kFontationsPrintingFlagIndex,
    kForceEagerMeasureMemoryFlagIndex,
    kForceReduceMotionFlagIndex,
    kForwardReasonToFetchBodyAbortFlagIndex,
    kFractionalScrollOffsetsFlagIndex,
    kFractionalScrollOffsetsForWebAPIFlagIndex,
    kFragmentedOofInCbFlagIndex,
    kFrameCaretSkipHiddenCheckFlagIndex,
    kFreezeFramesOnVisibilityFlagIndex,
    kGamepadButtonTypesFlagIndex,
    kGamepadMultitouchFlagIndex,
    kGamepadWindowEventHandlersFlagIndex,
    kGenerateDragOverlayBeforeDragStartFlagIndex,
    kGenerateXSLTWarningBannerFlagIndex,
    kGeolocationElementFlagIndex,
    kGeometryMapperSingularTransformFixFlagIndex,
    kGeometryUtilsFlagIndex,
    kGeometryUtilsForCSSPseudoElementFlagIndex,
    kGetAllScreensMediaFlagIndex,
    kGetDisplayMediaAudioSelectionFlagIndex,
    kGetDisplayMediaRequiresUserActivationFlagIndex,
    kGetDisplayMediaWindowAudioCaptureFlagIndex,
    kGetElementsByNameOnlyHTMLElementsFlagIndex,
    kGetTargetRangesRetargetingFlagIndex,
    kGetUserMediaEchoCancellationModesFlagIndex,
    kGlobalPrivacyControlApiFlagIndex,
    kGlobalPrivacyControlForceFlagIndex,
    kGraphemeClusterBoundsCheckFlagIndex,
    kGroupEffectFlagIndex,
    kHTMLAdoptionAlgorithmNewStepsFlagIndex,
    kHTMLAreaElementDisplayNoneFlagIndex,
    kHTMLAreaHreflangTypeFlagIndex,
    kHTMLBodyMarginPixelLengthFlagIndex,
    kHTMLCommandActionsV2FlagIndex,
    kHTMLCommandElementRemovalFlagIndex,
    kHTMLCommandForScrollCommandsFlagIndex,
    kHTMLElementScrollParentFlagIndex,
    kHTMLInterestForInterestButtonPseudoFlagIndex,
    kHTMLLinkElementAttributeValueChangesFlagIndex,
    kHTMLParserIgnoreHeadInNoscriptFlagIndex,
    kHTMLParserTruncatedMarkupDeclarationFlagIndex,
    kHTMLParserYieldAndDelayOftenForTestingFlagIndex,
    kHTMLParserYieldByUserTimingFlagIndex,
    kHTMLPrintingArtifactAnnotationsFlagIndex,
    kHTMLProcessingInstructionFlagIndex,
    kHTMLSwitchAttributeFlagIndex,
    kHandleShadowDOMInSubstringUtilFlagIndex,
    kHandwritingRecognitionFlagIndex,
    kHarfRustShapingFlagIndex,
    kHasUAVisualTransitionFlagIndex,
    kHeadingOffsetFlagIndex,
    kHideVideoControlsWhenUnneededFlagIndex,
    kHighlightsFromPointFlagIndex,
    kHitTestBorderRadiusForStackingContextFlagIndex,
    kHitTestContainerTransformStateForPreserve3dFlagIndex,
    kHitTestCulledInlineOfSelfPaintingChildFlagIndex,
    kHyphenVerticalOrientationFixFlagIndex,
    kICUCapitalizationFlagIndex,
    kIgnoreLetterSpacingInCursiveScriptsFlagIndex,
    kImageDataPixelFormatFlagIndex,
    kImageDocumentUseLayoutWidthFlagIndex,
    kImageSrcsetReselectionFlagIndex,
    kImageSrcsetReselectionForSrcCandidateFlagIndex,
    kIncrementalFontTransferFlagIndex,
    kInertElementNonEditableFlagIndex,
    kInfiniteCullRectFlagIndex,
    kInheritUserModifyWithoutContenteditableFlagIndex,
    kInitialLetterBlockPositioningFlagIndex,
    kInlineBlockLineNavigationFlagIndex,
    kInlineContainingBlockSkipOpaqueFlagIndex,
    kInlineCursorSkipNonIfcFlagIndex,
    kInlineScriptCacheHintFlagIndex,
    kInnerHTMLParserFastpathLogFailureFlagIndex,
    kInputClientRectWithoutInlinePaddingFlagIndex,
    kInputDisabledHandlerFixFlagIndex,
    kInputInSelectFlagIndex,
    kInputMultipleFieldsUIFlagIndex,
    kInputMultipleFieldsUIWithPointerChecksFlagIndex,
    kInputTypeColorEnhancementsFlagIndex,
    kInsertBlockquoteBeforeOuterBlockFlagIndex,
    kInstallElementFlagIndex,
    kInstallOnDeviceSpeechRecognitionFlagIndex,
    kInterestEventsNonComposedFlagIndex,
    kIntersectionObserverCompositedAnimationsForceMainFramesFlagIndex,
    kInvertedColorsFlagIndex,
    kInvisibleSVGAnimationThrottlingFlagIndex,
    kJavaScriptCompileHintsPerFunctionMagicRuntimeFlagIndex,
    kJavaScriptImportTextFlagIndex,
    kJavaScriptSourcePhaseImportsFlagIndex,
    kLabelInteractiveContentCheckBeforeHandlerFlagIndex,
    kLangAttributeAwareFormControlUIFlagIndex,
    kLanguageDetectionAPIFlagIndex,
    kLanguageDetectionAPIForWorkersFlagIndex,
    kLayoutCloneForScrollableOverflowChangeFlagIndex,
    kLayoutContainingBlockReturnsBoxFlagIndex,
    kLayoutIgnoreMarginsForStickyFlagIndex,
    kLayoutOOFCollectInlinesFixFlagIndex,
    kLazyImageConformantLoadEventTimingFlagIndex,
    kLazyLoadVideoAndAudioFlagIndex,
    kLazyParseInlineStyleSheetsFlagIndex,
    kLeftClickToHandleSuggestionFlagIndex,
    kLightDismissFromClickFlagIndex,
    kLineBreakAfterSpaceBeforeOpenTagFlagIndex,
    kLineBreakBidiControlEnterFlagIndex,
    kLineBreakerClearShapeResultOnOverflowFlagIndex,
    kLineBreakerHanKerningEndFlagIndex,
    kLocalNetworkAccessWebSocketsTargetAddressSpaceFlagIndex,
    kLockedModeFlagIndex,
    kLongAnimationFrameSourceCharPositionFlagIndex,
    kLongAnimationFrameSourceLineColumnFlagIndex,
    kLongAnimationFrameSourceLineColumnInterfaceFlagIndex,
    kLongAnimationFrameStyleDurationFlagIndex,
    kLongAnimationFrameWorkerFlagIndex,
    kLongPressHitTestInFrameFlagIndex,
    kLongPressLinkSelectTextFlagIndex,
    kLongPressReleasesActiveStateFlagIndex,
    kLongTaskFromLongAnimationFrameFlagIndex,
    kMacCharacterFallbackCacheFlagIndex,
    kMacDisableCtrlHomeEndFlagIndex,
    kMacFontWeightFromOS2FlagIndex,
    kManagedConfigurationFlagIndex,
    kMarginTrimFlagIndex,
    kMarkAncestorsOnDisplayLockUnlockFlagIndex,
    kMaskDeserializationTimeForCrossOriginMessagesFlagIndex,
    kMaskWaitForAllImagesFlagIndex,
    kMathMLAnchorElementFlagIndex,
    kMathMLOperatorRTLMirroringFlagIndex,
    kMeasureMemoryFlagIndex,
    kMediaCapabilitiesEncodingInfoFlagIndex,
    kMediaCapabilitiesSpatialAudioFlagIndex,
    kMediaCaptionSettingsButtonFlagIndex,
    kMediaCaptureFlagIndex,
    kMediaCaptureCameraControlsFlagIndex,
    kMediaCaptureElementPreviewFlagIndex,
    kMediaCaptureVoiceIsolationFlagIndex,
    kMediaElementMutedDefaultStateFlagIndex,
    kMediaElementVolumeGreaterThanOneFlagIndex,
    kMediaLatencyHintFlagIndex,
    kMediaPlaybackWhileNotVisiblePermissionPolicyFlagIndex,
    kMediaQueryNavigationControlsFlagIndex,
    kMediaSessionChapterInformationFlagIndex,
    kMediaSourceExperimentalFlagIndex,
    kMediaStreamTrackProcessorStatsFlagIndex,
    kMediaStreamTrackWebSpeechFlagIndex,
    kMemoryConsumerForNGShapeCacheFlagIndex,
    kMenuElementsFlagIndex,
    kMessagePortCloseEventFlagIndex,
    kMixedContentAutoupgradesUseIsMixedContentRestrictedInFrameFlagIndex,
    kMobileLayoutThemeFlagIndex,
    kModifyParagraphCrossEditingoundaryFlagIndex,
    kModuleMapDoNotCacheFailedFetchFlagIndex,
    kModulePreloadReferrerFlagIndex,
    kModulePreloadStyleJsonFlagIndex,
    kMojoJSFlagIndex,
    kMonospaceGlyphCompactionFlagIndex,
    kMoveEndingSelectionToListChildFlagIndex,
    kMoveParagraphsPreserveInlineStructureFlagIndex,
    kMulticolColumnWidthMaxContentClampFlagIndex,
    kNastaliqScriptFlagIndex,
    kNavigateEventDeferCrossDocumentCommitFlagIndex,
    kNavigationEventTimingFlagIndex,
    kNavigationSourcePseudoClassFlagIndex,
    kNavigationTimingRedirectTimingViaTAOFlagIndex,
    kNavigationTypeAndPhaseFlagIndex,
    kNavigatorContentUtilsFlagIndex,
    kNetInfoConstantTypeFlagIndex,
    kNeutralKeyframeEasingComplianceFlagIndex,
    kNewAnimationCompositingCheckingFlagIndex,
    kNewAnimationDispositionReportingFlagIndex,
    kNewHTMLSettingMethodsFlagIndex,
    kNoExtendSelectionToUserSelectNoneOutOfFlowFlagIndex,
    kNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableFlagIndex,
    kNoFontAntialiasingFlagIndex,
    kNoIdleEncodingForWebTestsFlagIndex,
    kNoNbspForInterElementSpaceOnCopyFlagIndex,
    kNoSynchronousThrowForCrossOriginBlockedWorkerFlagIndex,
    kNodeIteratorRemovalFixFlagIndex,
    kNonEmptyBlockquotesOnOutdentingFlagIndex,
    kNonEmptyVisibleTextSelectionForTextFragmentFlagIndex,
    kNonStandardAppearanceValueSliderVerticalFlagIndex,
    kNormalizeLineEndingsInInsertTextFlagIndex,
    kNotificationConstructorFlagIndex,
    kNotifySelectionControllerOnUnchangedSelectionFlagIndex,
    kNumberInputFullWidthCharsFlagIndex,
    kOfflineAudioContextIncrementalRenderingFlagIndex,
    kOffscreenCanvasGetContextAttributesFlagIndex,
    kOffsetMappingReuseFullWidthSpaceFixFlagIndex,
    kOffsetPathTransformUpdateFixFlagIndex,
    kOmitBlurEventOnElementRemovalFlagIndex,
    kOmitSubframeDetachmentEventsOnRemovalFlagIndex,
    kOnDeviceWebSpeechAvailableFlagIndex,
    kOnDeviceWebSpeechQualityFlagIndex,
    kOofLayoutRequiresSideEffectsFlagIndex,
    kOpaqueRangeFlagIndex,
    kOpenPopoverInvokerRestrictToSameTreeScopeFlagIndex,
    kOptionDisablednessCheckAncestorsFlagIndex,
    kOrientationEventFlagIndex,
    kOriginAPIFlagIndex,
    kOriginPolicyFlagIndex,
    kOutlineDrawAutoStyleZeroWidthFlagIndex,
    kOverlayGlobalRuleRemovalFlagIndex,
    kOverlayPropertyFlagIndex,
    kOverscrollAreasFlagIndex,
    kPagePopupFlagIndex,
    kPagePopupCopyPasteFlagIndex,
    kPageSwapEventFlagIndex,
    kPaintCaretAfterInnerEditorPaintFlagIndex,
    kPaintHoldingForIframesFlagIndex,
    kPaintTimingContentImagePseudoElementsFlagIndex,
    kPaintUnderInvalidationCheckingFlagIndex,
    kParakeetFlagIndex,
    kPartitionVisitedLinkDatabaseWithSelfLinksFlagIndex,
    kPasswordRevealFlagIndex,
    kPaymentHandlerStaticCustomSizeFlagIndex,
    kPaymentLinkDetectionFlagIndex,
    kPaymentMethodChangeEventFlagIndex,
    kPaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorFlagIndex,
    kPerformanceMarkCustomUserTimingFromSubframeFlagIndex,
    kPerformanceMarkFeatureUsageFlagIndex,
    kPermissionsPolicyAPIFlagIndex,
    kPermissionsPolicyForSharedWorkersFlagIndex,
    kPermissionsRequestRevokeFlagIndex,
    kPersistentWidgetAPIFlagIndex,
    kPointerLockOnAndroidFlagIndex,
    kPointerRawUpdateOnlyInSecureContextFlagIndex,
    kPopoverHintNestedShowExceptionFlagIndex,
    kPopoverHintNewBehaviorFlagIndex,
    kPopupWidgetRequiresUserActivationFlagIndex,
    kPositionOutsideTabSpanCheckSiblingNodeFlagIndex,
    kPositionVisibilityIgnoreNonClipAncestorsFlagIndex,
    kPositionVisibilitySingularValuesFlagIndex,
    kPotentialPermissionsPolicyReportingFlagIndex,
    kPrePaintBoxInvalidatorUsesFragmentsFlagIndex,
    kPreferDefaultScrollbarStylesFlagIndex,
    kPreferNonCompositedScrollingFlagIndex,
    kPreferredAudioOutputDevicesFlagIndex,
    kPrefersReducedDataFlagIndex,
    kPreloadLinkRelDataUrlsFlagIndex,
    kPreloadScannerImprovementsFlagIndex,
    kPrerender2FlagIndex,
    kPrerender2CrossOriginIframesFlagIndex,
    kPrerenderActivationByFormSubmissionFlagIndex,
    kPrerenderUntilScriptFlagIndex,
    kPreserveHtmlEquivalentTagsInTypingStyleFlagIndex,
    kPreserveUnfocusedSelectionCacheFlagIndex,
    kPreventTextSelectionJumpFlagIndex,
    kProfilerAPIFlagIndex,
    kProfilerAPIForDedicatedWorkerFlagIndex,
    kProgrammaticScrollPromiseFlagIndex,
    kProgressEventInServiceWorkerFlagIndex,
    kPropagateOverscrollBehaviorFromRootFlagIndex,
    kPseudoElementsFocusableFlagIndex,
    kPseudoElementsHitTestableFlagIndex,
    kPseudoElementsHoverableFlagIndex,
    kQuotaExceededErrorUpdateFlagIndex,
    kRTCConfigurationIceTransportsFlagIndex,
    kRTCDataChannelPriorityFlagIndex,
    kRTCDiagnosticLoggingFlagIndex,
    kRTCEncodedAudioFrameConstructorFlagIndex,
    kRTCEncodedFrameAudioLevelFlagIndex,
    kRTCEncodedFrameSetMetadataFlagIndex,
    kRTCEncodedFrameTimestampsFlagIndex,
    kRTCEncodedSourceFlagIndex,
    kRTCEncodedVideoFrameAdditionalMetadataFlagIndex,
    kRTCEncodedVideoFrameConstructorFlagIndex,
    kRTCJitterBufferTargetFlagIndex,
    kRTCLegacyDiagnosticLoggingFlagIndex,
    kRTCRtpEncodingParametersCodecFlagIndex,
    kRTCRtpScaleResolutionDownToFlagIndex,
    kRTCRtpScriptTransformFlagIndex,
    kRTCRtpTransportFlagIndex,
    kRTCSvcScalabilityModeFlagIndex,
    kRadioButtonCircularBorderRadiusFlagIndex,
    kRangeBoundaryFastPathFlagIndex,
    kRasterInducingScrollFlagIndex,
    kRateLimitPointerLockRequestsFlagIndex,
    kReadClipboardDataOnClipboardItemGetTypeFlagIndex,
    kReadOnlyTextControlSelectionFlagIndex,
    kReadableStreamBYOBReaderReadMinOptionFlagIndex,
    kReadingFlowWithSlotsFlagIndex,
    kRecheckParentDuringNodeVectorInsertionFlagIndex,
    kReduceUserAgentMinorVersionFlagIndex,
    kRegionCaptureFlagIndex,
    kRelOpenerBcgDependencyHintFlagIndex,
    kReleasePaintHoldingWithoutContentfulPaintFlagIndex,
    kRemotePlaybackBackendFlagIndex,
    kRemoveCharsetAutoDetectionForISO2022JPFlagIndex,
    kRemoveChildrenInReplaceChildrenFlagIndex,
    kRemoveCollapsedPlaceholderForContentEditableFlagIndex,
    kRemoveDanglingMarkupInTargetFlagIndex,
    kRemoveDataUrlInSvgUseFlagIndex,
    kRemoveNonAllowlistedCreateEventFlagIndex,
    kRemoveScrollNodeWorkaroundFlagIndex,
    kRemoveVisibleSelectionInDOMSelectionFlagIndex,
    kRenderPriorityAttributeFlagIndex,
    kReplaceChildrenWithFragmentFastPathFlagIndex,
    kReplaceCompositionActualInsertedLengthFlagIndex,
    kReplacedNormalFlowStackingInlinePaintFlagIndex,
    kReportFirstFrameTimeAsRenderTimeFlagIndex,
    kReportLayoutShiftRectsInCssPixelsFlagIndex,
    kRequestIsReloadNavigationFlagIndex,
    kResourceTimingInitiatorFlagIndex,
    kResourceTimingUseCORSForBodySizesFlagIndex,
    kRespectOverscrollBehaviorForScrollBubblingFlagIndex,
    kResponsiveIframesFlagIndex,
    kResponsiveIframesShrinkFlagIndex,
    kResponsiveIframesSingleAxisIcbFlagIndex,
    kRestrictOwnAudioFlagIndex,
    kRootScrollbarFollowsBrowserThemeFlagIndex,
    kRouteMatchingFlagIndex,
    kRtcAlwaysNegotiateDataChannelsFlagIndex,
    kRtcRtpHeaderEncryptionPolicyFlagIndex,
    kRubyTextDecorationSpacingFlagIndex,
    kRunMicrotaskBeforeXmlScriptFlagIndex,
    kRunSnapshotPostLayoutStateStepsFlagIndex,
    kSVGEmbeddedAsReplacedElementFlagIndex,
    kSVGPathDataAPIFlagIndex,
    kSVGTextPathSideAttributeFlagIndex,
    kSanitizeIDNEmailFormInputFlagIndex,
    kSanitizeWorkerErrorPropagationFlagIndex,
    kSanitizerAPIFlagIndex,
    kScopedViewTransitionSizeContainmentFlagIndex,
    kScoreLineBreakerAbortFlagIndex,
    kScreenDetailedHdrHeadroomFlagIndex,
    kScriptBasedOnUnicodeBlockFlagIndex,
    kScrollAnchorSerializationUseParentForTextNodeFlagIndex,
    kScrollAxisLockFlagIndex,
    kScrollIntoViewAlignAutoFlagIndex,
    kScrollIntoViewNearestFlagIndex,
    kScrollIntoViewNoInitialFocusNavigationStartingPointFlagIndex,
    kScrollIntoViewRootFrameViewportBugFixFlagIndex,
    kScrollPerformanceTimingFlagIndex,
    kScrollTimelineCurrentTimeFlagIndex,
    kScrollTimelineNamedRangeScrollFlagIndex,
    kScrollToTextFragmentDirectiveLimitFlagIndex,
    kScrollTopLeftInteropFlagIndex,
    kScrollVisibilityHiddenScrollersFlagIndex,
    kScrollbarColorFlagIndex,
    kScrollbarGutterBugFixFlagIndex,
    kScrollbarWidthFlagIndex,
    kSearchTextHighlightPseudoFlagIndex,
    kSecurePaymentConfirmationAvailabilityAPIFlagIndex,
    kSecurePaymentConfirmationCapabilitiesFlagIndex,
    kSecurePaymentConfirmationExtensionsDisallowForThirdPartiesFlagIndex,
    kSelectAnchorInViewportFlagIndex,
    kSelectAudioOutputFlagIndex,
    kSelectLabelClickOpensPickerFlagIndex,
    kSelectPopupBackgroundFlagIndex,
    kSelectRemoveOverflowHiddenFlagIndex,
    kSelectUsesFlatTreeFlagIndex,
    kSelectedcontentMultipleFlagIndex,
    kSelectedcontentSpec2FlagIndex,
    kSelectedcontentelementAttributeFlagIndex,
    kSelectionAndFocusedVisiblePositionMatchFlagIndex,
    kSelectionCollapsedDirectionNoneFlagIndex,
    kSelectionEditingBoundarySlottedContentFlagIndex,
    kSelectionFocusAffinityFlagIndex,
    kSelectionHandleWithBottomClippedFlagIndex,
    kSelectionRemoveRangeNotFoundErrorFlagIndex,
    kSelectionSetBaseAndExtentNonNullNodeFlagIndex,
    kSelectivePermissionsInterventionFlagIndex,
    kSendEarlyLastBeginMainFrameFlagIndex,
    kSendSlotChangeSignalAfterNodeInsertedFlagIndex,
    kSeparateDeferModuleScriptTasksFlagIndex,
    kSequentialFocusPrimitivesFlagIndex,
    kSequentialFocusPrimitivesShadowRootsFlagIndex,
    kSerialFlagIndex,
    kSerializeInvalidSelectorsInForgivingSelectorListFlagIndex,
    kSerializeViewTransitionStateInSPAFlagIndex,
    kServiceWorkerBackgroundSyncInDedicatedWorkerFlagIndex,
    kServiceWorkerClientLifecycleStateFlagIndex,
    kServiceWorkerCodeCacheFlagIndex,
    kServiceWorkerCodeCacheHashingFlagIndex,
    kServiceWorkerInDedicatedWorkerFlagIndex,
    kServiceWorkerScriptEncodingFlagIndex,
    kServiceWorkerStaticRouterTimingInfoFlagIndex,
    kSetHTMLCanRunScriptsFlagIndex,
    kSetSequentialFocusStartingPointFlagIndex,
    kSetShapeFlagIndex,
    kShadowRootAdoptedStyleSheetFlagIndex,
    kShadowRootNamespaceCheckFlagIndex,
    kShadowRootReferenceTargetFlagIndex,
    kShadowRootReferenceTargetAriaOwnsFlagIndex,
    kShadowRootSlotAssignmentFlagIndex,
    kSharedWorkerFlagIndex,
    kSharedWorkerExtendedLifetimeFlagIndex,
    kSideRelativeBackgroundPositionFlagIndex,
    kSignatureBasedInlineIntegrityFlagIndex,
    kSingleAxisScrollContainersFlagIndex,
    kSingleAxisScrollContainersForScrollSnapFlagIndex,
    kSkipAdFlagIndex,
    kSkipCallbacksWhenDevToolsNotOpenFlagIndex,
    kSkipCompositingStaticBackdropFilterAnimationFlagIndex,
    kSkipEventCaptureFlagIndex,
    kSkipHtmlInterchangeInForeignContentFlagIndex,
    kSkipInitialForcedScrollbarFlagIndex,
    kSkipPaintInvalidationWhileStayingInvisibleFlagIndex,
    kSkipStaleUndoStepsInIdleSpellCheckFlagIndex,
    kSkipTickingStaticAnimationsFlagIndex,
    kSkipTouchEventFilterFlagIndex,
    kSkipUnselectableElementsInParagraphBoundaryFlagIndex,
    kSmallerViewportUnitsFlagIndex,
    kSmartCardFlagIndex,
    kSmartCardContextReleaseFlagIndex,
    kSnapshotScrollTimelinesPostLayoutFlagIndex,
    kSortedLayoutShiftSourcesByImpactAreaFlagIndex,
    kSourceSpecificMulticastInDirectSocketsFlagIndex,
    kSpatNavUsesCursorInheritanceFlagIndex,
    kSpeakerSelectionFlagIndex,
    kSpecCompliantXmlMimeTypesFlagIndex,
    kSpeculationMeasurementFlagIndex,
    kSpeculationRulesModerateViewportHeuristicsControlFlagIndex,
    kSpellCheckChunkingFlagIndex,
    kSpellCheckCustomDictionaryAPIFlagIndex,
    kSplitQualifiedNameOnFirstColonFlagIndex,
    kSplitTextNotCleanupDummySpansFlagIndex,
    kSrcsetSelectionMatchesImageSetFlagIndex,
    kSrcsetTwoDimensionalSizesFlagIndex,
    kStackingContextIsNotStackedFlagIndex,
    kStaleImageNaturalSizeDuringRevalidationFlagIndex,
    kStaleIntersectionGeometryForThrottledFramesFlagIndex,
    kStandardizedBrowserZoomFlagIndex,
    kStandardizedBrowserZoomOptOutFlagIndex,
    kStickyUserActivationAcrossSameOriginNavigationFlagIndex,
    kStorageBucketsFlagIndex,
    kStorageBucketsDurabilityFlagIndex,
    kStorageBucketsLocksFlagIndex,
    kStrictMimeTypesForWorkersFlagIndex,
    kStyleResourceFetcherIdentityCheckFlagIndex,
    kSubAppsFlagIndex,
    kSubframeMouseCaptureOwnerFlagIndex,
    kSuppressFullscreenFromUnfocusedViewFlagIndex,
    kSuppressPointerStreamAfterDragFlagIndex,
    kSvgAnimateMotionDiscreteCalcModeFlagIndex,
    kSvgAvoidResettingFilterQualityForTiledPatternFlagIndex,
    kSvgCss3dTransformsFlagIndex,
    kSvgEmptyAttributeStringParsingFixFlagIndex,
    kSvgEnableTextDecorationCssStylingFlagIndex,
    kSvgFallBackToContainerSizeFlagIndex,
    kSvgFeImageEXIFOrientationFlagIndex,
    kSvgFeImageSkipHiddenContainerViewportDependenceFlagIndex,
    kSvgFilterPaintsForHiddenContentFlagIndex,
    kSvgFilterUserSpaceViewportForSvgFlagIndex,
    kSvgHyperlinkElementUtilsFlagIndex,
    kSvgIgnoreNegativeEllipseRadiiFlagIndex,
    kSvgImageAnimationResetFlagIndex,
    kSvgImageNonUniformScalingFixFlagIndex,
    kSvgIncrementalStyleFlagIndex,
    kSvgInlineRootPixelSnappingScaleAdjustmentFlagIndex,
    kSvgInstanceSyncOptimizationFlagIndex,
    kSvgLengthResolveUnparsedValueFlagIndex,
    kSvgNewZoomFlagIndex,
    kSvgPathLengthCssPropertyFlagIndex,
    kSvgScriptElementAsyncAttributeFlagIndex,
    kSvgScriptFragmentAlreadyStartedFlagIndex,
    kSvgSizingWithPreserveAspectRatioNoneFlagIndex,
    kSvgStyleElementReflectTypeAndMediaFlagIndex,
    kSvgSupportMediaFragmentsFlagIndex,
    kSvgTextPositioningGraphemeClustersFlagIndex,
    kSvgUseNestedResourceDocumentsFlagIndex,
    kSvgUseNestedResourceDocumentsDelayLoadFlagIndex,
    kSyncCrossDocumentAnimationTimingFlagIndex,
    kSynthesizedKeyboardEventsForAccessibilityActionsFlagIndex,
    kSyntheticMouseHoverOverInactivePageFlagIndex,
    kSystemWakeLockFlagIndex,
    kTabAlignmentWithFloatsFlagIndex,
    kTabSizeInRubyBaseFlagIndex,
    kTableCellBorderColorInheritFlagIndex,
    kTableIsAutoFixedLayoutFlagIndex,
    kTargetInShadowDeterminedBeforeListenerFlagIndex,
    kTargetRangesForBackwardDeletionUnitFlagIndex,
    kTemporalInputHostBlurFlagIndex,
    kTestBlinkFeatureDefaultFlagIndex,
    kTestFeatureStableFlagIndex,
    kTextAreaPlaceholderBreakAriaHiddenUpdateFlagIndex,
    kTextAreaResizerFixedSizeFlagIndex,
    kTextAutoSpaceIgnoreRubyAnnotationFlagIndex,
    kTextBoxTrimForNestedListFlagIndex,
    kTextBoxTrimOnInlineBoxFlagIndex,
    kTextBoxTrimOnInlineBoxTextDecorationFlagIndex,
    kTextDetectorFlagIndex,
    kTextEmphasisPositionAutoFlagIndex,
    kTextEncodingDetectorTldHintFlagIndex,
    kTextFragmentAPIFlagIndex,
    kTextFragmentIdentifiersFlagIndex,
    kTextFragmentTapOpensContextMenuFlagIndex,
    kTextIteratorExcludeAutofilledSelectFixFlagIndex,
    kTextMetricsBaselinesFlagIndex,
    kTextOverflowClipWithSelectionFlagIndex,
    kTextOverflowInTextareaFlagIndex,
    kTextOverflowStringFlagIndex,
    kTextScaleMetaTagFlagIndex,
    kTextSpacingTrimFallbackFlagIndex,
    kTextSpacingTrimFallback2FlagIndex,
    kTextSpacingTrimFallbackChwsFlagIndex,
    kTextStreamMethodFlagIndex,
    kTimePickerHonorsStepFlagIndex,
    kTimeZoneChangeEventFlagIndex,
    kTimelineTriggerFlagIndex,
    kTimestampBasedCLSTrackingFlagIndex,
    kTouchDragOnShortPressFlagIndex,
    kTrackAnimatedSourcesFlagIndex,
    kTrackAnimatedSourcesForInheritedPropertiesFlagIndex,
    kTransferableRTCDataChannelFlagIndex,
    kTranslateServiceFlagIndex,
    kTranslationAPIFlagIndex,
    kTranslationAPIForWorkersFlagIndex,
    kTreatMhtmlInitialDocumentLoadsAsCrossDocumentFlagIndex,
    kTrustedTypesCreateParserOptionsFlagIndex,
    kTrustedTypesUseCodeLikeFlagIndex,
    kTwoPhaseViewTransitionFlagIndex,
    kUAImageReplacementAPIFlagIndex,
    kURLPatternCompareComponentFlagIndex,
    kURLPatternGenerateFlagIndex,
    kURLSearchParamsHasAndDeleteMultipleArgsFlagIndex,
    kUnboundedElementFlagIndex,
    kUnclosedFormControlIsInvalidFlagIndex,
    kUnexposedTaskIdsFlagIndex,
    kUnprefixedSpeechRecognitionFlagIndex,
    kUnrestrictedMeasureUserAgentSpecificMemoryFlagIndex,
    kUnrestrictedUsbFlagIndex,
    kUnsafeEscapingUnboundedElementOnTheOpenWebFlagIndex,
    kUnsafeUnboundedElementOnTheOpenWebFlagIndex,
    kUpdateComplexSafaAreaConstraintsFlagIndex,
    kUpdateSelectionOnNodeInsertionFlagIndex,
    kUseBeginFramePresentationFeedbackFlagIndex,
    kUseLowQualityInterpolationFlagIndex,
    kUseOriginalDomOffsetsForOffsetMapFlagIndex,
    kUsePaintGeometryForIntersectionFlagIndex,
    kUsePositionForPointInFlexibleBoxWithSingleChildElementFlagIndex,
    kUsePositionIfIsVisuallyEquivalentCandidateFlagIndex,
    kUseShadowHostStyleCheckEditableFlagIndex,
    kUseUndoStepElementDispatchBeforeInputFlagIndex,
    kUserActionPseudosStopAtTopLayerFlagIndex,
    kUserDefinedEntryPointTimingFlagIndex,
    kUserMediaElementFlagIndex,
    kUserMediaElementLegacyFlagIndex,
    kVariableSystemFontSupportOnWindowsFlagIndex,
    kVideoAutoFullscreenFlagIndex,
    kVideoFrameMetadataBackgroundBlurFlagIndex,
    kVideoFrameMetadataRtpTimestampFlagIndex,
    kVideoFullscreenOrientationLockFlagIndex,
    kVideoRotateToFullscreenFlagIndex,
    kVideoTrackGeneratorFlagIndex,
    kVideoTrackGeneratorInWindowFlagIndex,
    kVideoTrackGeneratorInWorkerFlagIndex,
    kViewTransitionLongCallbackTimeoutForTestingFlagIndex,
    kViewTransitionPreventSvgFilterPaintFlagIndex,
    kViewTransitionSkipPseudoTreeForNavigationCaptureFlagIndex,
    kViewTransitionSkipZeroHeightControlsSnapFlagIndex,
    kViewportHeightClientHintHeaderFlagIndex,
    kViewportSegmentsFlagIndex,
    kVisibilityCollapseColumnFlagIndex,
    kVisualRectMappingFixForExpansionFlagIndex,
    kWakeLockFlagIndex,
    kWarnOnContentVisibilityRenderAccessFlagIndex,
    kWavyDecorationContinuousPhaseFlagIndex,
    kWebAppInstallationFlagIndex,
    kWebAppLaunchQueueFlagIndex,
    kWebAppScopeSystemAccentColorFlagIndex,
    kWebAppTabStripFlagIndex,
    kWebAppTabStripCustomizationsFlagIndex,
    kWebAppTranslationsFlagIndex,
    kWebAudioBypassOutputBufferingFlagIndex,
    kWebAudioBypassOutputBufferingOptOutFlagIndex,
    kWebAudioConfigurableRenderQuantumFlagIndex,
    kWebAuthFlagIndex,
    kWebAuthAuthenticatorAttachmentFlagIndex,
    kWebAuthenticationAttestationFormatsFlagIndex,
    kWebAuthenticationCmtgKeyFlagIndex,
    kWebAutocorrectByDefaultFlagIndex,
    kWebBluetoothScanningFlagIndex,
    kWebBluetoothWorldIsolatedCacheFlagIndex,
    kWebCodecsVideoEncoderBuffersFlagIndex,
    kWebCryptoPQCFlagIndex,
    kWebGLDrawingBufferStorageFlagIndex,
    kWebGLOnWebGPUFlagIndex,
    kWebGLToneMappingFlagIndex,
    kWebGPUExperimentalFeaturesFlagIndex,
    kWebGPUExperimentalResourceTableFlagIndex,
    kWebGPUExternalImageHDRHeadroomFlagIndex,
    kWebGPUMapSyncOnWorkersFlagIndex,
    kWebGPUMultithreadDawnWireOnWorkersFlagIndex,
    kWebHIDFlagIndex,
    kWebHIDWorldIsolatedCacheFlagIndex,
    kWebHapticsFlagIndex,
    kWebIDLBigIntUsesToBigIntFlagIndex,
    kWebMCPFlagIndex,
    kWebMCPContinuationsFlagIndex,
    kWebMCPDeclarativeFileInputFlagIndex,
    kWebMCPFormAssociatedCustomElementsFlagIndex,
    kWebPreferencesFlagIndex,
    kWebPrintingFlagIndex,
    kWebRtcSctpSnapFlagIndex,
    kWebShareFlagIndex,
    kWebSocketOptionBagFlagIndex,
    kWebSocketStreamFlagIndex,
    kWebSocketStreamStandardBinaryChunkTypeFlagIndex,
    kWebSpeechRecognitionContextFlagIndex,
    kWebSpeechTimestampsFlagIndex,
    kWebSpeechUnspokenPunctuationFlagIndex,
    kWebTransportAnticipatedConcurrentIncomingStreamsFlagIndex,
    kWebTransportCreateStreamsBeforeReadyFlagIndex,
    kWebTransportDatagramsReadableTypeFlagIndex,
    kWebTransportDrainingFlagIndex,
    kWebTransportExportKeyingMaterialFlagIndex,
    kWebUIBundledCodeCacheAsyncFetchFlagIndex,
    kWebUSBOnDedicatedWorkersFlagIndex,
    kWebVTTCueLayoutByPositionAlignmentFlagIndex,
    kWebVTTCueTightLineBoxFlagIndex,
    kWebVTTRegionsFlagIndex,
    kWebViewEnvReorderFixFlagIndex,
    kWebXREnabledFeaturesFlagIndex,
    kWebXRHitTestEntityTypesFlagIndex,
    kWebXRMediaBindingFlagIndex,
    kWebXRMeshDetectionFlagIndex,
    kWebXRSpecParityFlagIndex,
    kWebXRVisibilityMaskFlagIndex,
    kWheelEventDeltaExternalPageScaleFlagIndex,
    kWheelEventMomentumFlagIndex,
    kWindowDefaultStatusFlagIndex,
    kWindowOpenAlwaysOnTopFlagIndex,
    kWindowOpenAttributionSrcFlagIndex,
    kWindowOpenSplitTabFlagIndex,
    kWordSkipSpacesPunctuationFixFlagIndex,
    kXMLNoExternalEntitiesFlagIndex,
    kXMLParserReplaceLoneSurrogatesFlagIndex,
    kXMLParsingRustFlagIndex,
    kXMLRustForNonXsltFlagIndex,
    kXMLSerializerConsistentDefaultNsDeclMatchingFlagIndex,
    kXMLViewerForIframesFlagIndex,
    kXSLTFlagIndex,
    kXSLTSpecialTrialFlagIndex,
  };
  static const bool kCopyIfOverridden[] = {
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  };
  static_assert(std::size(kBaseFeatures) == std::size(kFlagIndices));
  static_assert(std::size(kBaseFeatures) == std::size(kCopyIfOverridden));
  for (size_t i = 0; i < std::size(kBaseFeatures); ++i) {
    const base::Feature& feature = *kBaseFeatures[i];
    const bool feature_enabled = base::FeatureList::IsEnabled(feature);
    const bool is_overridden =
        base::FeatureList::GetStateIfOverridden(feature).has_value();
    if (kCopyIfOverridden[i]) {
      if (is_overridden)
        feature_states_[kFlagIndices[i]] = feature_enabled;
    } else {
      if (feature_enabled || is_overridden)
        feature_states_[kFlagIndices[i]] = feature_enabled;
    }
  }
}

bool RuntimeEnabledFeaturesBase::DirectSocketsEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsDirectSocketsForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsDirectSocketsForceDisabled()) {
    return false;
  }

  return DirectSocketsEnabled();
}

bool RuntimeEnabledFeaturesBase::GetDisplayMediaWindowAudioCaptureEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsGetDisplayMediaWindowAudioCaptureForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsGetDisplayMediaWindowAudioCaptureForceDisabled()) {
    return false;
  }

  return GetDisplayMediaWindowAudioCaptureEnabled();
}

bool RuntimeEnabledFeaturesBase::SetShapeEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsSetShapeForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsSetShapeForceDisabled()) {
    return false;
  }

  return SetShapeEnabled();
}

bool RuntimeEnabledFeaturesBase::TestFeatureEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsTestFeatureForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsTestFeatureForceDisabled()) {
    return false;
  }

  return TestFeatureEnabled();
}



bool RuntimeEnabledFeaturesBase::AdInterestGroupAPIEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::FledgeEnabled(context))
    return true;
  if (RuntimeEnabledFeaturesBase::ParakeetEnabled(context))
    return true;
  if (feature_states_[kAdInterestGroupAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAdInterestGroupAPI);
}


bool RuntimeEnabledFeaturesBase::AIPromptAPIParamsEnabled(const FeatureContext* context) {
  if (feature_states_[kAIPromptAPIParamsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAIPromptAPIParams);
}


bool RuntimeEnabledFeaturesBase::AIProofreadingAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kAIProofreadingAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAIProofreadingAPI);
}


bool RuntimeEnabledFeaturesBase::AIRewriterAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kAIRewriterAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAIRewriterAPI);
}


bool RuntimeEnabledFeaturesBase::AIWriterAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kAIWriterAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAIWriterAPI);
}


bool RuntimeEnabledFeaturesBase::AppTitleEnabled(const FeatureContext* context) {
  if (feature_states_[kAppTitleFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAppTitle);
}


bool RuntimeEnabledFeaturesBase::AutofillEventEnabled(const FeatureContext* context) {
  if (feature_states_[kAutofillEventFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kAutofillEvent);
}


bool RuntimeEnabledFeaturesBase::BackForwardCacheExperimentHTTPHeaderEnabled(const FeatureContext* context) {
  if (feature_states_[kBackForwardCacheExperimentHTTPHeaderFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kBackForwardCacheExperimentHTTPHeader);
}


bool RuntimeEnabledFeaturesBase::BackForwardCacheNotRestoredReasonsEnabled(const FeatureContext* context) {
  if (feature_states_[kBackForwardCacheNotRestoredReasonsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kBackForwardCacheNotRestoredReasons);
}


bool RuntimeEnabledFeaturesBase::BackgroundPageFreezeOptOutEnabled(const FeatureContext* context) {
  if (feature_states_[kBackgroundPageFreezeOptOutFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kBackgroundPageFreezeOptOut);
}


bool RuntimeEnabledFeaturesBase::BlockingFocusWithoutUserActivationEnabled(const FeatureContext* context) {
  if (feature_states_[kBlockingFocusWithoutUserActivationFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kBlockingFocusWithoutUserActivation);
}


bool RuntimeEnabledFeaturesBase::CacheStorageCodeCacheHintEnabled(const FeatureContext* context) {
  if (feature_states_[kCacheStorageCodeCacheHintFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCacheStorageCodeCacheHint);
}


bool RuntimeEnabledFeaturesBase::Canvas2dMeshEnabled(const FeatureContext* context) {
  if (feature_states_[kCanvas2dMeshFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCanvas2dMesh);
}


bool RuntimeEnabledFeaturesBase::CanvasDrawElementEnabled(const FeatureContext* context) {
  if (feature_states_[kCanvasDrawElementFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCanvasDrawElement);
}


bool RuntimeEnabledFeaturesBase::ConnectionAllowlistEmbeddedEnforcementEnabled(const FeatureContext* context) {
  if (feature_states_[kConnectionAllowlistEmbeddedEnforcementFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kConnectionAllowlistEmbeddedEnforcement);
}


bool RuntimeEnabledFeaturesBase::ContainerTimingEnabled(const FeatureContext* context) {
  if (feature_states_[kContainerTimingFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kContainerTiming);
}


bool RuntimeEnabledFeaturesBase::CoopRestrictPropertiesEnabled(const FeatureContext* context) {
  if (feature_states_[kCoopRestrictPropertiesFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCoopRestrictProperties);
}


bool RuntimeEnabledFeaturesBase::CpuPerformanceEnabled(const FeatureContext* context) {
  if (feature_states_[kCpuPerformanceFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCpuPerformance);
}


bool RuntimeEnabledFeaturesBase::CrashReportingStorageAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kCrashReportingStorageAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCrashReportingStorageAPI);
}


bool RuntimeEnabledFeaturesBase::CSPHashesV1Enabled(const FeatureContext* context) {
  if (feature_states_[kCSPHashesV1FlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kCSPHashesV1);
}


bool RuntimeEnabledFeaturesBase::DeclarativeCSSModulesEnabled(const FeatureContext* context) {
  if (feature_states_[kDeclarativeCSSModulesFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDeclarativeCSSModules);
}


bool RuntimeEnabledFeaturesBase::DeclarativePerformanceObserverEnabled(const FeatureContext* context) {
  if (feature_states_[kDeclarativePerformanceObserverFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDeclarativePerformanceObserver);
}


bool RuntimeEnabledFeaturesBase::DeclarativeWebMCPEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::WebMCPDeclarativeFileInputEnabled(context))
    return true;
  if (RuntimeEnabledFeaturesBase::WebMCPFormAssociatedCustomElementsEnabled(context))
    return true;
  if (feature_states_[kDeclarativeWebMCPFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDeclarativeWebMCP);
}


bool RuntimeEnabledFeaturesBase::DeprecateUnloadOptOutEnabled(const FeatureContext* context) {
  if (feature_states_[kDeprecateUnloadOptOutFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDeprecateUnloadOptOut);
}


bool RuntimeEnabledFeaturesBase::DigitalGoodsEnabled(const FeatureContext* context) {
  if (feature_states_[kDigitalGoodsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDigitalGoods);
}


bool RuntimeEnabledFeaturesBase::DisableDifferentOriginSubframeDialogSuppressionEnabled(const FeatureContext* context) {
  if (feature_states_[kDisableDifferentOriginSubframeDialogSuppressionFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression);
}


bool RuntimeEnabledFeaturesBase::DocumentIsolationPolicyEnabled(const FeatureContext* context) {
  if (feature_states_[kDocumentIsolationPolicyFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDocumentIsolationPolicy);
}


bool RuntimeEnabledFeaturesBase::DocumentPolicyNegotiationEnabled(const FeatureContext* context) {
  if (feature_states_[kDocumentPolicyNegotiationFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kDocumentPolicyNegotiation);
}


bool RuntimeEnabledFeaturesBase::EmailVerificationProtocolEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsEmailVerificationProtocolForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsEmailVerificationProtocolForceDisabled()) {
    return false;
  }

  if (feature_states_[kEmailVerificationProtocolFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kEmailVerificationProtocol);
}


bool RuntimeEnabledFeaturesBase::ExperimentalJSProfilerMarkersEnabled(const FeatureContext* context) {
  if (feature_states_[kExperimentalJSProfilerMarkersFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kExperimentalJSProfilerMarkers);
}


bool RuntimeEnabledFeaturesBase::ExtendedTextMetricsEnabled(const FeatureContext* context) {
  if (feature_states_[kExtendedTextMetricsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kExtendedTextMetrics);
}


bool RuntimeEnabledFeaturesBase::FedCmActiveModeMultipleIdentityProvidersEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::FedCmMultipleIdentityProvidersEnabled(context))
    return false;
  if (feature_states_[kFedCmActiveModeMultipleIdentityProvidersFlagIndex])
    return true;
  // The feature does not have an origin trial name and its runtime flag
  // is not enabled.
  return false;
}


bool RuntimeEnabledFeaturesBase::FedCmMultipleIdentityProvidersEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::FedCmEnabled(context))
    return false;
  if (feature_states_[kFedCmMultipleIdentityProvidersFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kFedCmMultipleIdentityProviders);
}


bool RuntimeEnabledFeaturesBase::FetchRetryEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsFetchRetryForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsFetchRetryForceDisabled()) {
    return false;
  }

  if (feature_states_[kFetchRetryFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kFetchRetry);
}


bool RuntimeEnabledFeaturesBase::FledgeBiddingAndAuctionServerAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kFledgeBiddingAndAuctionServerAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kFledgeBiddingAndAuctionServerAPI);
}


bool RuntimeEnabledFeaturesBase::GamepadRawInputChangeEventEnabled(const FeatureContext* context) {
  if (feature_states_[kGamepadRawInputChangeEventFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kGamepadRawInputChangeEvent);
}


bool RuntimeEnabledFeaturesBase::HrefTranslateEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::TranslateServiceEnabled(context))
    return false;
  if (feature_states_[kHrefTranslateFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kHrefTranslate);
}


bool RuntimeEnabledFeaturesBase::IncomingCallNotificationsEnabled(const FeatureContext* context) {
  if (feature_states_[kIncomingCallNotificationsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kIncomingCallNotifications);
}


bool RuntimeEnabledFeaturesBase::JavaScriptCompileHintsPerFunctionMagicRuntimeEnabled(const FeatureContext* context) {
  if (feature_states_[kJavaScriptCompileHintsPerFunctionMagicRuntimeFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kJavaScriptCompileHintsPerFunctionMagicRuntime);
}


bool RuntimeEnabledFeaturesBase::LocalNetworkAccessForWebRTCOptOutEnabled(const FeatureContext* context) {
  if (feature_states_[kLocalNetworkAccessForWebRTCOptOutFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kLocalNetworkAccessForWebRTCOptOut);
}


bool RuntimeEnabledFeaturesBase::MediaCaptureBackgroundBlurEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::MediaCaptureCameraControlsEnabled(context))
    return true;
  if (feature_states_[kMediaCaptureBackgroundBlurFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kMediaCaptureBackgroundBlur);
}


bool RuntimeEnabledFeaturesBase::MediaCaptureConfigurationChangeEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::MediaCaptureBackgroundBlurEnabled(context))
    return true;
  if (feature_states_[kMediaCaptureConfigurationChangeFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kMediaCaptureConfigurationChange);
}


bool RuntimeEnabledFeaturesBase::MediaSourceExtensionsForWebCodecsEnabled(const FeatureContext* context) {
  if (feature_states_[kMediaSourceExtensionsForWebCodecsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kMediaSourceExtensionsForWebCodecs);
}


bool RuntimeEnabledFeaturesBase::NotificationTriggersEnabled(const FeatureContext* context) {
  if (feature_states_[kNotificationTriggersFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kNotificationTriggers);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPI);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIBrowserReadWriteEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsOriginTrialsSampleAPIBrowserReadWriteForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsOriginTrialsSampleAPIBrowserReadWriteForceDisabled()) {
    return false;
  }

  if (feature_states_[kOriginTrialsSampleAPIBrowserReadWriteFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIDependentEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIEnabled(context))
    return false;
  if (feature_states_[kOriginTrialsSampleAPIDependentFlagIndex])
    return true;
  // The feature does not have an origin trial name and its runtime flag
  // is not enabled.
  return false;
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIDeprecationEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIDeprecationFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIExpiryGracePeriodEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIExpiryGracePeriodFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriod);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIExpiryGracePeriodThirdPartyFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriodThirdParty);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIImpliedEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIEnabled(context))
    return true;
  if (RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIInvalidOSEnabled(context))
    return true;
  if (feature_states_[kOriginTrialsSampleAPIImpliedFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIImplied);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIInvalidOSEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIInvalidOSFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPINavigationEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPINavigationFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPINavigation);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIPersistentExpiryGracePeriodFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentExpiryGracePeriod);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIPersistentFeatureEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIPersistentFeatureFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentFeature);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIPersistentInvalidOSEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIPersistentInvalidOSFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentInvalidOS);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature);
}


bool RuntimeEnabledFeaturesBase::OriginTrialsSampleAPIThirdPartyEnabled(const FeatureContext* context) {
  if (feature_states_[kOriginTrialsSampleAPIThirdPartyFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIThirdParty);
}


bool RuntimeEnabledFeaturesBase::OverscrollAreasEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::CSSScrollSnapTypePairEnabled(context))
    return false;
  if (feature_states_[kOverscrollAreasFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kOverscrollAreas);
}


bool RuntimeEnabledFeaturesBase::ParakeetEnabled(const FeatureContext* context) {
  if (feature_states_[kParakeetFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kParakeet);
}


bool RuntimeEnabledFeaturesBase::PerMethodCanMakePaymentQuotaEnabled(const FeatureContext* context) {
  if (feature_states_[kPerMethodCanMakePaymentQuotaFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPerMethodCanMakePaymentQuota);
}


bool RuntimeEnabledFeaturesBase::PNaClEnabled(const FeatureContext* context) {
  if (feature_states_[kPNaClFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPNaCl);
}


bool RuntimeEnabledFeaturesBase::PreferredAudioOutputDevicesEnabled(const FeatureContext* context) {
  if (feature_states_[kPreferredAudioOutputDevicesFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPreferredAudioOutputDevices);
}


bool RuntimeEnabledFeaturesBase::PrefetchAndPrerenderActivationBeaconEnabled(const FeatureContext* context) {
  if (feature_states_[kPrefetchAndPrerenderActivationBeaconFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPrefetchAndPrerenderActivationBeacon);
}


bool RuntimeEnabledFeaturesBase::Prerender2CrossOriginIframesEnabled(const FeatureContext* context) {
  if (feature_states_[kPrerender2CrossOriginIframesFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPrerender2CrossOriginIframes);
}


bool RuntimeEnabledFeaturesBase::PrerenderActivationByFormSubmissionEnabled(const FeatureContext* context) {
  if (feature_states_[kPrerenderActivationByFormSubmissionFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPrerenderActivationByFormSubmission);
}


bool RuntimeEnabledFeaturesBase::PrerenderUntilScriptEnabled(const FeatureContext* context) {
  if (feature_states_[kPrerenderUntilScriptFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kPrerenderUntilScript);
}


bool RuntimeEnabledFeaturesBase::RtcAudioJitterBufferMaxPacketsEnabled(const FeatureContext* context) {
  if (feature_states_[kRtcAudioJitterBufferMaxPacketsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kRtcAudioJitterBufferMaxPackets);
}


bool RuntimeEnabledFeaturesBase::RTCDiagnosticLoggingEnabled(const FeatureContext* context) {
  if (feature_states_[kRTCDiagnosticLoggingFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kRTCDiagnosticLogging);
}


bool RuntimeEnabledFeaturesBase::RTCEncodedFrameSetMetadataEnabled(const FeatureContext* context) {
  if (feature_states_[kRTCEncodedFrameSetMetadataFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kRTCEncodedFrameSetMetadata);
}


bool RuntimeEnabledFeaturesBase::RTCLegacyCallbackBasedGetStatsEnabled(const FeatureContext* context) {
  if (feature_states_[kRTCLegacyCallbackBasedGetStatsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kRTCLegacyCallbackBasedGetStats);
}


bool RuntimeEnabledFeaturesBase::RTCLegacyDiagnosticLoggingEnabled(const FeatureContext* context) {
  if (feature_states_[kRTCLegacyDiagnosticLoggingFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kRTCLegacyDiagnosticLogging);
}


bool RuntimeEnabledFeaturesBase::RTCStatsRelativePacketArrivalDelayEnabled(const FeatureContext* context) {
  if (feature_states_[kRTCStatsRelativePacketArrivalDelayFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kRTCStatsRelativePacketArrivalDelay);
}


bool RuntimeEnabledFeaturesBase::SecurePaymentConfirmationOptOutEnabled(const FeatureContext* context) {
  if (feature_states_[kSecurePaymentConfirmationOptOutFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kSecurePaymentConfirmationOptOut);
}


bool RuntimeEnabledFeaturesBase::ShadowRootAdoptedStyleSheetEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::DeclarativeCSSModulesEnabled(context))
    return true;
  if (feature_states_[kShadowRootAdoptedStyleSheetFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kShadowRootAdoptedStyleSheet);
}


bool RuntimeEnabledFeaturesBase::ShadowRootReferenceTargetEnabled(const FeatureContext* context) {
  if (feature_states_[kShadowRootReferenceTargetFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kShadowRootReferenceTarget);
}


bool RuntimeEnabledFeaturesBase::SharedWorkerExtendedLifetimeEnabled(const FeatureContext* context) {
  if (feature_states_[kSharedWorkerExtendedLifetimeFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kSharedWorkerExtendedLifetime);
}


bool RuntimeEnabledFeaturesBase::SpeculationMeasurementEnabled(const FeatureContext* context) {
  if (feature_states_[kSpeculationMeasurementFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kSpeculationMeasurement);
}


bool RuntimeEnabledFeaturesBase::SpeculationRulesModerateViewportHeuristicsControlEnabled(const FeatureContext* context) {
  if (feature_states_[kSpeculationRulesModerateViewportHeuristicsControlFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kSpeculationRulesModerateViewportHeuristicsControl);
}


bool RuntimeEnabledFeaturesBase::StandardizedBrowserZoomOptOutEnabled(const FeatureContext* context) {
  if (feature_states_[kStandardizedBrowserZoomOptOutFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kStandardizedBrowserZoomOptOut);
}


bool RuntimeEnabledFeaturesBase::TestFeatureForBrowserProcessReadWriteAccessOriginTrialEnabled(const FeatureContext* context) {
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsTestFeatureForBrowserProcessReadWriteAccessOriginTrialForceEnabled()) {
    return true;
  }
  if(context && context->GetRuntimeFeatureStateOverrideContext()
                    ->IsTestFeatureForBrowserProcessReadWriteAccessOriginTrialForceDisabled()) {
    return false;
  }

  if (feature_states_[kTestFeatureForBrowserProcessReadWriteAccessOriginTrialFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial);
}


bool RuntimeEnabledFeaturesBase::TextFragmentIdentifiersEnabled(const FeatureContext* context) {
  if (feature_states_[kTextFragmentIdentifiersFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kTextFragmentIdentifiers);
}


bool RuntimeEnabledFeaturesBase::TouchEventFeatureDetectionEnabled(const FeatureContext* context) {
  if (feature_states_[kTouchEventFeatureDetectionFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kTouchEventFeatureDetection);
}


bool RuntimeEnabledFeaturesBase::UAImageReplacementAPIEnabled(const FeatureContext* context) {
  if (feature_states_[kUAImageReplacementAPIFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kUAImageReplacementAPI);
}


bool RuntimeEnabledFeaturesBase::UnrestrictedSharedArrayBufferEnabled(const FeatureContext* context) {
  if (feature_states_[kUnrestrictedSharedArrayBufferFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kUnrestrictedSharedArrayBuffer);
}


bool RuntimeEnabledFeaturesBase::UserMediaElementLegacyEnabled(const FeatureContext* context) {
  if (feature_states_[kUserMediaElementLegacyFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kUserMediaElementLegacy);
}


bool RuntimeEnabledFeaturesBase::WebAppScopeExtensionsEnabled(const FeatureContext* context) {
  if (feature_states_[kWebAppScopeExtensionsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebAppScopeExtensions);
}


bool RuntimeEnabledFeaturesBase::WebAssemblyCustomDescriptorsV2Enabled(const FeatureContext* context) {
  if (feature_states_[kWebAssemblyCustomDescriptorsV2FlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebAssemblyCustomDescriptorsV2);
}


bool RuntimeEnabledFeaturesBase::WebAssemblyJSPromiseIntegrationEnabled(const FeatureContext* context) {
  if (feature_states_[kWebAssemblyJSPromiseIntegrationFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebAssemblyJSPromiseIntegration);
}


bool RuntimeEnabledFeaturesBase::WebAudioConfigurableRenderQuantumEnabled(const FeatureContext* context) {
  if (feature_states_[kWebAudioConfigurableRenderQuantumFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebAudioConfigurableRenderQuantum);
}


bool RuntimeEnabledFeaturesBase::WebAuthenticationAttestationFormatsEnabled(const FeatureContext* context) {
  if (feature_states_[kWebAuthenticationAttestationFormatsFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebAuthenticationAttestationFormats);
}


bool RuntimeEnabledFeaturesBase::WebMCPEnabled(const FeatureContext* context) {
  if (RuntimeEnabledFeaturesBase::WebMCPContinuationsEnabled(context))
    return true;
  if (RuntimeEnabledFeaturesBase::WebMCPDeclarativeFileInputEnabled(context))
    return true;
  if (RuntimeEnabledFeaturesBase::WebMCPFormAssociatedCustomElementsEnabled(context))
    return true;
  if (feature_states_[kWebMCPFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebMCP);
}


bool RuntimeEnabledFeaturesBase::WebRtcSctpSnapEnabled(const FeatureContext* context) {
  if (feature_states_[kWebRtcSctpSnapFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebRtcSctpSnap);
}


bool RuntimeEnabledFeaturesBase::WebTransportCustomCertificatesEnabled(const FeatureContext* context) {
  if (feature_states_[kWebTransportCustomCertificatesFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebTransportCustomCertificates);
}


bool RuntimeEnabledFeaturesBase::WebXRImageTrackingEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::WebXREnabled(context))
    return false;
  if (feature_states_[kWebXRImageTrackingFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebXRImageTracking);
}


bool RuntimeEnabledFeaturesBase::WebXRPlaneDetectionEnabled(const FeatureContext* context) {
  if (!RuntimeEnabledFeaturesBase::WebXREnabled(context))
    return false;
  if (feature_states_[kWebXRPlaneDetectionFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kWebXRPlaneDetection);
}


bool RuntimeEnabledFeaturesBase::XSLTEnabled(const FeatureContext* context) {
  if (feature_states_[kXSLTFlagIndex])
    return true;
  return context && context->FeatureEnabled(mojom::blink::OriginTrialFeature::kXSLT);
}


// Platform-dependent entries resolve their initial value with a
// BUILDFLAG(...) ternary chain, falling back to the 'default' status.
bool RuntimeEnabledFeaturesBase::feature_states_[kFlagIndexCount] = {
  // kAboutBlankPageRespectsDarkModeOnUserActionFlagIndex
  true,
  // kAccelerated2dCanvasFlagIndex
  true,
  // kAcceleratedSmallCanvasesFlagIndex
  true,
  // kAccessibilityCheckIfcInPreviousTextOnLineFlagIndex
  true,
  // kAccessibilityCustomElementRoleNoneFlagIndex
  false,
  // kAccessibilityExposeDisplayNoneFlagIndex
  false,
  // kAccessibilityImplicitActionsFlagIndex
  false,
  // kAccessibilityMinRoleTabbableFlagIndex
  false,
  // kAccessibilityOSLevelBoldTextFlagIndex
  false,
  // kAccessibilityProhibitedNamesFlagIndex
  false,
  // kAccessibilitySerializationSizeMetricsFlagIndex
  false,
  // kAccessibilityUseAXPositionForDocumentMarkersFlagIndex
  false,
  // kAccessKeyLabelFlagIndex
  false,
  // kAddressSpaceFlagIndex
  false,
  // kAdInterestGroupAPIFlagIndex
  false,
  // kAdjustEndOfNextParagraphIfMovedParagraphIsUpdatedFlagIndex
  true,
  // kAdTaggingFlagIndex
  false,
  // kAIDecisionModelAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIDecisionModelAPIForWorkersFlagIndex
  false,
  // kAIEmbeddingsAPIFlagIndex
  false,
  // kAIEmbeddingsAPIForWorkersFlagIndex
  false,
  // kAIPageContentAnchoredFixedOffscreenNonActionabilityFlagIndex
  true,
  // kAIPageContentAnchoredNonFixedOffscreenNonActionabilityFlagIndex
  true,
  // kAIPageContentBuildOnLoadForTestingFlagIndex
  false,
  // kAIPageContentCheckGeometryFlagIndex
  false,
  // kAIPageContentConvertNodeTextToUtf8FlagIndex
  true,
  // kAIPageContentElementCSSRedactionFlagIndex
  true,
  // kAIPageContentIncludeMathMLFlagIndex
  true,
  // kAIPageContentIncludeSVGSubtreeFlagIndex
  true,
  // kAIPageContentLabelExpandFallbackSourcesFlagIndex
  true,
  // kAIPageContentLabelRemoveRedundantFlagIndex
  false,
  // kAIPageContentLabelRemoveRedundantWholeWordMatchingFlagIndex
  false,
  // kAIPageContentOuterBoxMapToAncestorSpaceFlagIndex
  true,
  // kAIPageContentPaidContentAnnotationFlagIndex
  true,
  // kAIPageContentSkipUnclickableFixedOverlaysFlagIndex
  true,
  // kAIPageContentTrackedElementsIframeFlagIndex
  true,
  // kAIPageContentTrackedElementsPasswordFlagIndex
  true,
  // kAIPageContentVisualViewportClampFlagIndex
  true,
  // kAIPromptAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIPromptAPIForWorkersFlagIndex
  false,
  // kAIPromptAPILegacyIdentifiersFlagIndex
  false,
  // kAIPromptAPILegacyParamsFlagIndex
  false,
  // kAIPromptAPIMultimodalInputFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIPromptAPIParamsFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIPromptAPIStructuredOutputFlagIndex
  true,
  // kAIPromptAPIToolUseFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIProofreadingAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIRewriterAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIRewriterAPIForWorkersFlagIndex
  false,
  // kAISummarizationAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAISummarizationAPIForWorkersFlagIndex
  false,
  // kAISummarizationPerformancePreferenceFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIWriterAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAIWriterAPIForWorkersFlagIndex
  false,
  // kAlignZoomToCenterFlagIndex
  true,
  // kAllowContentInitiatedDataUrlNavigationsFlagIndex
  false,
  // kAllowPreloadingWithCSPMetaTagFlagIndex
  false,
  // kAllowSvgUseToReferenceExternalDocumentRootFlagIndex
  true,
  // kAllowSyntheticTimingForCanvasCaptureFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAllowURNsInIframesFlagIndex
  false,
  // kAncestorOriginsStoredOnDocumentFlagIndex
  true,
  // kAnchorPositionAdjustmentWithoutOverflowFlagIndex
  true,
  // kAndroidDownloadableFontsMatchingFlagIndex
  false,
  // kAnimationEventAnimationFlagIndex
  true,
  // kAnimationProgressAPIFlagIndex
  true,
  // kAnimationRangeRejectRelativeLengthsFlagIndex
  false,
  // kAnimationTriggerFlagIndex
  true,
  // kAnimationWorkletFlagIndex
  false,
  // kAnnotationSpaceForMultiColFlagIndex
  false,
  // kAnnotationSpaceOnStartFlagIndex
  true,
  // kAnonymousIframeFlagIndex
  true,
  // kAOMAriaRelationshipPropertiesFlagIndex
  true,
  // kAOMAriaRelationshipPropertiesAriaOwnsFlagIndex
  false,
  // kAppearanceBaseFlagIndex
  false,
  // kAppearanceDisplayAdjustmentForWidgetsOnlyFlagIndex
  true,
  // kApproximateGeolocationPermissionFlagIndex
  false,
  // kApproximateGeolocationPermissionAccuracyModeFlagIndex
  false,
  // kApproximateGeolocationPermissionAPIFlagIndex
  false,
  // kApproximateGeolocationWebVisibleAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAppTitleFlagIndex
  false,
  // kAriaActionsFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAriaNotifyFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAriaNotifyV2FlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kAriaRowColIndexTextFlagIndex
  true,
  // kAttributionReportingFlagIndex
  true,
  // kAudioContextAsyncStateTransitionsFlagIndex
  false,
  // kAudioContextPlaybackStatsFlagIndex
  true,
  // kAudioContextSetSinkIdFlagIndex
  true,
  // kAudioOutputDevicesFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kAudioVideoTracksFlagIndex
  false,
  // kAudioWorkletSharedPortFlagIndex
  false,
  // kAuthorSpecifiedLayoutScrollSnapBehaviorFlagIndex
  true,
  // kAutoDarkModeFlagIndex
  false,
  // kAutoDarkModeSkipImagesFlagIndex
  false,
  // kAutoDarkModeSVGSizeThresholdFlagIndex
  true,
  // kAutofillFlagIndex
  false,
  // kAutofillEventFlagIndex
  false,
  // kAutofillPreviewGenericFontFamilyFlagIndex
  true,
  // kAutofillPreviewIgnoreAuthorFontFlagIndex
  true,
  // kAutomationControlledFlagIndex
  false,
  // kAutoPictureInPictureVideoHeuristicsFlagIndex
  false,
  // kAutoSizeUsesScrollWidthForOverflowFlagIndex
  true,
  // kAvoidEmbeddedContentViewLocationFlagIndex
  true,
  // kAvoidNonSelectableSelectionBoundaryFlagIndex
  true,
  // kAvoidSynchronousBlurOnDisabledAttributeChangeFlagIndex
  true,
  // kBackfaceVisibilityInteropFlagIndex
  false,
  // kBackForwardCacheFlagIndex
  false,
  // kBackForwardCacheExperimentHTTPHeaderFlagIndex
  false,
  // kBackForwardCacheNotRestoredReasonsFlagIndex
  true,
  // kBackForwardCacheRestorationPerformanceEntryFlagIndex
  false,
  // kBackForwardCacheUpdateNotRestoredReasonsNameFlagIndex
  true,
  // kBackgroundClipTextDecorationFlagIndex
  true,
  // kBackgroundFetchFlagIndex
  true,
  // kBackgroundPageFreezeOptOutFlagIndex
  false,
  // kBarcodeDetectorFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kBaseAppearanceInlineSizingFlagIndex
  true,
  // kBasicShapeCornerRadiusFlagIndex
  false,
  // kBidiCaretAffinityFlagIndex
  false,
  // kBidiVisualOrderCaretMovementFlagIndex
  false,
  // kBlinkExtensionWebViewFlagIndex
  false,
  // kBlinkExtensionWebViewMediaIntegrityFlagIndex
  false,
  // kBlinkGeometryMapperViewportFastPathFlagIndex
  true,
  // kBlinkLifecycleScriptForbiddenFlagIndex
  false,
  // kBlinkRuntimeCallStatsFlagIndex
  false,
  // kBlobBytesFlagIndex
  true,
  // kBlockingFocusWithoutUserActivationFlagIndex
  true,
  // kBlockSelectPopupUnfocusedWindowFlagIndex
  true,
  // kBoundaryEventDispatchTracksNodeRemovalFlagIndex
  true,
  // kBoxDecorationBreakCloneLineBreakingFlagIndex
  false,
  // kBrowserInitiatedAutomaticPictureInPictureFlagIndex
  false,
  // kBufferedBytesConsumerLimitSizeFlagIndex
  true,
  // kBypassPepcSecurityForTestingFlagIndex
  false,
  // kCacheControlRFC7234ParsingFlagIndex
  false,
  // kCacheControlRFC7234ParsingMetricsFlagIndex
  false,
  // kCacheStorageCodeCacheHintFlagIndex
  false,
  // kCacheStyleAdjusterFlagIndex
  true,
  // kCameraAndMicrophoneElementsFlagIndex
  true,
  // kCanvas2dCanvasFilterFlagIndex
  false,
  // kCanvas2dDeferredFlushFlagIndex
  false,
  // kCanvas2dLayersFlagIndex
  false,
  // kCanvas2dLayersWithOptionsFlagIndex
  false,
  // kCanvas2dMeshFlagIndex
  false,
  // kCanvasDrawElementFlagIndex
  true,
  // kCanvasFloatingPointFlagIndex
  true,
  // kCanvasGlobalHDRHeadroomFlagIndex
  false,
  // kCanvasGradientCSSColor4FlagIndex
  false,
  // kCanvasHDRFlagIndex
  false,
  // kCanvasTextDirectionReflectFlagIndex
  true,
  // kCanvasTextMetricsPreciseBoundsFlagIndex
  false,
  // kCanvasToneMappingFlagIndex
  false,
  // kCanvasUsesArcPaintOpFlagIndex
  true,
  // kCapabilityDelegationDigitalCredentialsFlagIndex
  false,
  // kCapabilityDelegationDisplayCaptureRequestFlagIndex
  false,
  // kCapabilityDelegationPopupFlagIndex
  false,
  // kCapabilityElementIconOnlyModeFlagIndex
  false,
  // kCapitalizeAfterSupplementaryCharacterFixFlagIndex
  true,
  // kCaptureControllerFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kCapturedMouseEventsFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kCapturedSurfaceControlFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kCapturedSurfaceResolutionFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kCaptureHandleFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kCaretBlinkingFlagIndex
  true,
  // kCaretBrowsingSequentialFocusStartingPointFlagIndex
  true,
  // kCaretOutsideEditableAtomicInlineFlagIndex
  true,
  // kCCTNewRFMPushBehaviorFlagIndex
  false,
  // kCDTNewCrossOriginHandlingFlagIndex
  false,
  // kCDTNewDestinationFlagIndex
  false,
  // kCDTNewReferrerAndReferrerPolicyHandlingFlagIndex
  false,
  // kCheckableInputTypeLayoutInlineFlagIndex
  true,
  // kCheckCSPOnInlineScriptAttributeSetFlagIndex
  true,
  // kClampUnfocusedSelectionCacheFlagIndex
  true,
  // kCleanUpActivationBehaviorFlagIndex
  true,
  // kClearCrossOriginRelatedTargetFlagIndex
  true,
  // kClearCurrentTargetAfterDispatchFlagIndex
  true,
  // kClearDisplayLockPrePaintFlagsFlagIndex
  true,
  // kClearFocusWithinOnSubtreeRemovalFlagIndex
  true,
  // kClearTargetOnlyIfInShadowTreeFlagIndex
  true,
  // kClipboardEventTargetUsesContainerNodeFlagIndex
  true,
  // kClipboardOnExtensionServiceWorkerFlagIndex
  false,
  // kClipboardPasteImageRespectBufferFlagIndex
  true,
  // kClipElementVisibleBoundsInLocalRootFlagIndex
  false,
  // kClipPathNestedRasterOptimizationFlagIndex
  true,
  // kCoalesceSelectionchangeEventFlagIndex
  true,
  // kCoepReflectionFlagIndex
  false,
  // kColorInputAcceptsCSSColorsFlagIndex
  true,
  // kColorSpaceDisplayP3LinearFlagIndex
  true,
  // kColorSpacePredefinedLinearSpacesFlagIndex
  true,
  // kColorSpaceRec2100LinearFlagIndex
  false,
  // kComposedPathReturnTargetBeingDispatchedFlagIndex
  true,
  // kCompositeClipPathAnimationFlagIndex
  true,
  // kCompositedSelectionUpdateFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  false,
  // kCompositeHoverStyleFlagIndex
  false,
  // kCompositingDecisionAtAnimationPhaseBoundariesFlagIndex
  false,
  // kCompositionForegroundMarkersFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kCompositorEventTriggerFlagIndex
  false,
  // kCompositorTimelineTriggerFlagIndex
  false,
  // kCompressionDictionaryTransportFlagIndex
  false,
  // kComputedAccessibilityInfoFlagIndex
  false,
  // kComputePressureFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kConcurrentNativePaintWorkletsFlagIndex
  false,
  // kConditionalTracingLoAFFlagIndex
  false,
  // kConnectionAllowlistEmbeddedEnforcementFlagIndex
  false,
  // kConsistentFormControlPaintSnappingFlagIndex
  true,
  // kConstructableStylesheetCacheFlagIndex
  false,
  // kContactsManagerFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kContactsManagerExtraPropertiesFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kContainerTimingFlagIndex
  false,
  // kContentIndexFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kContextMenuFlagIndex
  false,
  // kControlledFrameFlagIndex
  true,
  // kControlledFrameWebRequestSecurityInfoFlagIndex
  true,
  // kCookieStoreAPIMaxAgeFlagIndex
  true,
  // kCookieStoreAPIWhitespaceStrippingFlagIndex
  true,
  // kCoopRestrictPropertiesFlagIndex
  false,
  // kCorrectTemplateFormParsingFlagIndex
  false,
  // kCorsRFC1918FlagIndex
  false,
  // kCpuPerformanceFlagIndex
  true,
  // kCrashReportingStorageAPIFlagIndex
  true,
  // kCreateInlineContentsAnonymousBlockFlagIndex
  true,
  // kCrossOriginStorageFlagIndex
  false,
  // kCSPHashesV1FlagIndex
  false,
  // kCSPReportHashFlagIndex
  true,
  // kCSSAccentColorKeywordFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kCSSActiveCaptionMapsToCanvasFlagIndex
  true,
  // kCSSAlphaColorFunctionFlagIndex
  true,
  // kCSSAlphaColorFunctionRequiresAlphaFlagIndex
  true,
  // kCSSAltCounterFlagIndex
  true,
  // kCSSAnimationIterationCompositeFlagIndex
  false,
  // kCSSArgumentGrammarFlagIndex
  false,
  // kCSSAtRuleCounterStyleImageSymbolsFlagIndex
  false,
  // kCSSAtRuleCounterStyleSpeakAsDescriptorFlagIndex
  false,
  // kCSSAttributeValueCaseSensitiveNonHTMLFlagIndex
  true,
  // kCSSBackgroundClipBorderAreaFlagIndex
  true,
  // kCSSBackgroundLayerCountIndependenceFlagIndex
  false,
  // kCSSBorderRadiusSideShorthandsFlagIndex
  false,
  // kCSSBorderShapeFlagIndex
  true,
  // kCSSCalcEarlyNaNAndInfFoldingFlagIndex
  false,
  // kCSSCalcSimplificationAndSerializationFlagIndex
  false,
  // kCSSCaretAnimationFlagIndex
  true,
  // kCSSCaretColorWithOptionalSecondValueFlagIndex
  false,
  // kCSSCaretShapeFlagIndex
  true,
  // kCSSCaseSensitiveSelectorFlagIndex
  false,
  // kCSSChUnitSpecCompliantFallbackFlagIndex
  true,
  // kCSSColorTypedOMFlagIndex
  false,
  // kCSSContainerProgressNotationFlagIndex
  false,
  // kCSSContainerStyleQueriesRangeFlagIndex
  true,
  // kCSSCornersShorthandFlagIndex
  false,
  // kCSSCounterResetReversedFlagIndex
  false,
  // kCSSCounterStyleSymbolsFunctionFlagIndex
  true,
  // kCSSCrossFadeFlagIndex
  false,
  // kCSSCustomHighlightUniversalSelectorFlagIndex
  true,
  // kCSSCustomMediaFlagIndex
  false,
  // kCSSDynamicRangeLimitFlagIndex
  true,
  // kCSSEnumeratedCustomPropertiesFlagIndex
  true,
  // kCSSFlowStartAndEndFlagIndex
  true,
  // kCSSFlowStartAndEndSerializationFlagIndex
  true,
  // kCSSFontFamilySerializationFlagIndex
  false,
  // kCSSFontSizeAdjustFlagIndex
  true,
  // kCSSFunctionsFlagIndex
  true,
  // kCSSGridLanesLayoutFlagIndex
  false,
  // kCSSHangingPunctuationFlagIndex
  false,
  // kCSSHexAlphaColorFlagIndex
  true,
  // kCSSIdentFunctionFlagIndex
  false,
  // kCSSImageAnimationFlagIndex
  false,
  // kCSSImageFunctionFlagIndex
  true,
  // kCSSInheritFunctionFlagIndex
  false,
  // kCSSInRangeOutOfRangeReversedRangesFlagIndex
  true,
  // kCSSKeyframesRuleLengthFlagIndex
  true,
  // kCSSLangExtendedRangesFlagIndex
  false,
  // kCSSLayoutAPIFlagIndex
  false,
  // kCSSLightDarkImageFlagIndex
  true,
  // kCSSLineClampFlagIndex
  false,
  // kCSSLineClampAsShorthandFlagIndex
  false,
  // kCSSLineClampLineBreakingEllipsisFlagIndex
  false,
  // kCSSLinkParametersPropertyFlagIndex
  false,
  // kCSSListCounterAccountingFlagIndex
  false,
  // kCSSLogicalCombinationPseudoFlagIndex
  false,
  // kCSSMarkerNestedPseudoElementFlagIndex
  true,
  // kCssMaxContentSizingFlagIndex
  false,
  // kCSSMediaElementPseudosFlagIndex
  true,
  // kCSSMediaProgressNotationFlagIndex
  false,
  // kCSSMixinsFlagIndex
  false,
  // kCSSNestedPseudoElementsFlagIndex
  true,
  // kCSSOMGetComputedStylePseudoElementRequiresColonFlagIndex
  false,
  // kCSSPaintAPIArgumentsFlagIndex
  false,
  // kCSSParserIgnoreCharsetForURLsFlagIndex
  false,
  // kCSSPolygonRoundingFlagIndex
  true,
  // kCSSPositionStickyStaticScrollPositionFlagIndex
  false,
  // kCSSPositionVisibilityAnchorValidFlagIndex
  true,
  // kCSSPrivateFlagIndex
  false,
  // kCSSProgressNotationFlagIndex
  true,
  // kCSSProgressNotationNoClampFlagIndex
  false,
  // kCSSPseudoColumnFlagIndex
  true,
  // kCSSPseudoElementBackdropFlagIndex
  true,
  // kCSSPseudoElementInterfaceFlagIndex
  true,
  // kCSSPseudoElementScrollButtonFlagIndex
  false,
  // kCSSPseudoElementSelectorTextFlagIndex
  false,
  // kCSSPseudoElementViewTransitionsFlagIndex
  true,
  // kCSSPseudoHasSlottedFlagIndex
  false,
  // kCSSPseudoScrollButtonsFlagIndex
  true,
  // kCSSPseudoScrollMarkersFlagIndex
  true,
  // kCSSRandomFunctionFlagIndex
  true,
  // kCSSRandomFunctionTypedOMFlagIndex
  false,
  // kCSSResizeAutoFlagIndex
  true,
  // kCSSRevertRuleFlagIndex
  true,
  // kCSSRubyOverhangFlagIndex
  true,
  // kCSSSafePrintableInsetFlagIndex
  true,
  // kCSSScopeifiedParentPseudoClassFlagIndex
  true,
  // kCSSScopeImportFlagIndex
  false,
  // kCSSScrolledContainerQueriesFlagIndex
  true,
  // kCSSScrollInitialTargetFlagIndex
  true,
  // kCSSScrollMarkerGroupModesFlagIndex
  true,
  // kCSSScrollMarkerTargetBeforeAfterFlagIndex
  true,
  // kCSSScrollSnapChangeEventFlagIndex
  true,
  // kCSSScrollSnapChangingEventFlagIndex
  true,
  // kCSSScrollSnapEventConstructorExposedFlagIndex
  false,
  // kCSSScrollSnapEventsFlagIndex
  true,
  // kCSSScrollSnapStopBeforeFlagIndex
  false,
  // kCSSScrollSnapTypePairFlagIndex
  true,
  // kCSSScrollTargetGroupFlagIndex
  true,
  // kCSSScrollTargetGroupAriaCurrentFlagIndex
  false,
  // kCSSShapeOutsidePathAndShapeSupportFlagIndex
  true,
  // kCSSShapeOutsideRectAndXywhSupportFlagIndex
  true,
  // kCSSStyleSheetInitBaseURLFlagIndex
  false,
  // kCSSSupportsAtRuleFunctionFlagIndex
  true,
  // kCSSSupportsForImportRulesFlagIndex
  true,
  // kCSSSupportsNamedFeatureFunctionFlagIndex
  true,
  // kCSSSystemAccentColorFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kCSSTextAlignMatchParentFlagIndex
  false,
  // kCSSTextDecorationInsetFlagIndex
  true,
  // kCSSTextDecorationSkipInkAllFlagIndex
  true,
  // kCSSTextDecorationSkipSpacesFlagIndex
  false,
  // kCssTextFitFlagIndex
  true,
  // kCssTextFitReshapingFlagIndex
  false,
  // kCSSTextSpacingFlagIndex
  false,
  // kCSSTextTransformFullSizeKanaFlagIndex
  false,
  // kCSSTextTransformFullWidthFlagIndex
  false,
  // kCSSTextTransformMultiKeywordFlagIndex
  false,
  // kCSSTimelineScopeAllFlagIndex
  false,
  // kCSSTimelineScopeGlobalFlagIndex
  false,
  // kCSSTreeScopedScrollTimelineFlagIndex
  false,
  // kCSSURLRequestModifiersFlagIndex
  true,
  // kCSSUserSelectContainFlagIndex
  false,
  // kCSSUserValidAndUserInvalidForRadioFlagIndex
  true,
  // kCSSVideoDynamicRangeMediaQueriesFlagIndex
  false,
  // kCSSViewTransitionAutoNameFlagIndex
  false,
  // kCSSWindowDragFlagIndex
  true,
  // kCSSZoomAnimationFlagIndex
  true,
  // kCustomElementsDisableFormattingFixupsFlagIndex
  true,
  // kCustomizableComboboxFlagIndex
  false,
  // kCustomizableSelectMultiplePopupFlagIndex
  false,
  // kCustomizableSelectNewUAStylesFlagIndex
  false,
  // kCustomScrollbarApplyMinimumThumbLengthFlagIndex
  true,
  // kDatabaseFlagIndex
  false,
  // kDateTimeInputTypeEarlyAdvanceFixFlagIndex
  true,
  // kDeclarativeCSSModulesFlagIndex
  false,
  // kDeclarativeCSSModulesStyleTagFlagIndex
  false,
  // kDeclarativeFragmentFlagIndex
  false,
  // kDeclarativePerformanceObserverFlagIndex
  false,
  // kDeclarativeSkeletonsFlagIndex
  false,
  // kDeclarativeWebMCPFlagIndex
  false,
  // kDeferLineBoxHitTestToBackgroundFlagIndex
  true,
  // kDelegatesFocusTextControlInputFixFlagIndex
  true,
  // kDeprecateUnloadOptOutFlagIndex
  false,
  // kDesktopCaptureDisableLocalEchoControlFlagIndex
  false,
  // kDesktopPWAsAdditionalWindowingControlsFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kDesktopPWAsAdditionalWindowingControlsOnMoveFlagIndex
  false,
  // kDeviceAttributesFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kDeviceBoundSessionJsApiFlagIndex
  false,
  // kDeviceOrientationRequestPermissionFlagIndex
  true,
  // kDevicePostureFlagIndex
  true,
  // kDialogCloseWhenOpenRemovedFlagIndex
  false,
  // kDialogNewFocusBehaviorFlagIndex
  false,
  // kDigitalCredentialsProtocolFilterFlagIndex
  false,
  // kDigitalGoodsFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kDigitalGoodsV2_1FlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kDirectSocketsFlagIndex
  false,
  // kDirectSocketsInServiceWorkersFlagIndex
  false,
  // kDirectSocketsInSharedWorkersFlagIndex
  false,
  // kDisableAnchorCenterOnAlignJustifyItemsFlagIndex
  true,
  // kDisableDifferentOriginSubframeDialogSuppressionFlagIndex
  false,
  // kDisableEllipsisWhenScrolledFlagIndex
  false,
  // kDisableFormControlChangeEventDuringMutationFlagIndex
  true,
  // kDisconnectWebSocketOnBFCacheFlagIndex
  true,
  // kDispatchHiddenVisibilityTransitionsFlagIndex
  true,
  // kDispatchSelectionchangeEventPerElementFlagIndex
  true,
  // kDispatchWorkerCSPViolationEventForModuleGraphFetchingFlagIndex
  false,
  // kDisplayContentsFocusableFlagIndex
  false,
  // kDisplayCutoutAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kDocumentCookieFlagIndex
  false,
  // kDocumentDomainFlagIndex
  false,
  // kDocumentIsolationPolicyFlagIndex
  false,
  // kDocumentOpenIframeUnloadEventsFlagIndex
  true,
  // kDocumentOpenOriginAliasRemovalFlagIndex
  false,
  // kDocumentOpenSandboxInheritanceRemovalFlagIndex
  true,
  // kDocumentPatchingFlagIndex
  true,
  // kDocumentPictureInPictureAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kDocumentPictureInPicturePreferInitialPlacementFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kDocumentPictureInPictureUserActivationFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kDocumentPolicyDocumentDomainFlagIndex
  false,
  // kDocumentPolicyExpectNoLinkedResourcesFlagIndex
  true,
  // kDocumentPolicyIncludeJSCallStacksInCrashReportsFlagIndex
  true,
  // kDocumentPolicyInDedicatedWorkerFlagIndex
  false,
  // kDocumentPolicyJSProfilingModeFlagIndex
  false,
  // kDocumentPolicyNegotiationFlagIndex
  false,
  // kDocumentPolicyNetworkEfficiencyGuardrailsFlagIndex
  false,
  // kDocumentPolicySyncXHRFlagIndex
  false,
  // kDocumentWriteFlagIndex
  false,
  // kDOMParserXmlScriptAlreadyStartedFlagIndex
  true,
  // kDragAndDropDownloadURLListFlagIndex
  false,
  // kDragAndDropJSFileObjectsFlagIndex
  false,
  // kDragImageForLargeImagesFlagIndex
  true,
  // kDragThresholdRequiresMouseMovementFlagIndex
  true,
  // kDumpForAbsentKeyframeSnapshotsFlagIndex
  false,
  // kEditContextAssignmentAsPerSpecFlagIndex
  false,
  // kEditContextBoundsUpdateSchedulesFrameFlagIndex
  true,
  // kEditContextCodePointDeletionFlagIndex
  true,
  // kEditContextHandleTextOrSelectionUpdateDuringCompositionFlagIndex
  false,
  // kEditContextSelectionUpdateBeforeTextUpdateEventFlagIndex
  true,
  // kEditingUseDomPositionApiFlagIndex
  false,
  // kElasticOverscrollBackgroundPaintLocationFixFlagIndex
  true,
  // kElasticOverscrollUseEventDeltaForAxisSelectionFlagIndex
  true,
  // kElementCaptureFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kElementInternalsBehaviorsFlagIndex
  false,
  // kElementMatchContainerFlagIndex
  false,
  // kElementSpecificReadOnlyConstraintValidationFlagIndex
  true,
  // kEmailVerificationProtocolFlagIndex
  false,
  // kEmbeddedContentCenterAlignBaselineFlagIndex
  true,
  // kEmojiZWJVerticalOrientationFlagIndex
  true,
  // kEnableXSLTForCAPAlertsFlagIndex
  true,
  // kEndpointInclusiveCommitStylesFlagIndex
  true,
  // kEnforceAnonymityExposureFlagIndex
  true,
  // kEntropyIgnoredForFirstVideoFrameLCPFlagIndex
  false,
  // kEventPseudoTargetPropertyFlagIndex
  true,
  // kEventPseudoTargetViewTransitionNameFlagIndex
  true,
  // kEventTimingInteractionCountFlagIndex
  true,
  // kEventTimingMatchingHTMLFlagIndex
  true,
  // kEventTimingTargetSelectorFlagIndex
  false,
  // kEventTriggerFlagIndex
  false,
  // kExperimentalContentSecurityPolicyFeaturesFlagIndex
  false,
  // kExperimentalJSProfilerMarkersFlagIndex
  false,
  // kExperimentalMachineLearningNeuralNetworkFlagIndex
  false,
  // kExperimentalPoliciesFlagIndex
  false,
  // kExposeCSSFontFeatureValuesRuleFlagIndex
  true,
  // kExposeRenderTimeNonTaoDelayedImageFlagIndex
  false,
  // kExtendedTextMetricsFlagIndex
  false,
  // kExtensionScriptTaggingFlagIndex
  true,
  // kExtensionScriptTaggingTestingAPIFlagIndex
  false,
  // kExternalPopupMenuClickEventFlagIndex
  true,
  // kEyeDropperAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kFaceDetectorFlagIndex
  false,
  // kFastCompositionCharacterBoundsFlagIndex
  true,
  // kFastPlainTextRangeCreateRangeFlagIndex
  true,
  // kFastPositionIteratorFlagIndex
  false,
  // kFedCmFlagIndex
  true,
  // kFedCmActiveModeMultipleIdentityProvidersFlagIndex
  false,
  // kFedCmAutofillFlagIndex
  false,
  // kFedCmDelegationFlagIndex
  false,
  // kFedCmIdentityHandlerFlagIndex
  false,
  // kFedCmIdPRegistrationFlagIndex
  false,
  // kFedCmLightweightModeFlagIndex
  false,
  // kFedCmMultipleIdentityProvidersFlagIndex
  true,
  // kFedCmMultipleRequestsFlagIndex
  true,
  // kFedCmNavigationInterceptionFlagIndex
  false,
  // kFencedFramesFlagIndex
  true,
  // kFencedFramesAPIChangesFlagIndex
  true,
  // kFencedFramesLocalUnpartitionedDataAccessFlagIndex
  false,
  // kFetchBodyBytesFlagIndex
  true,
  // kFetchLaterAPIFlagIndex
  true,
  // kFetchRetryFlagIndex
  false,
  // kFetchUploadStreamingFlagIndex
  true,
  // kFileHandlingFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kFilePickerEventsFixFlagIndex
  true,
  // kFileSystemFlagIndex
  true,
  // kFileSystemAccessFlagIndex
  false,
  // kFileSystemAccessAPIExperimentalFlagIndex
  false,
  // kFileSystemAccessGetCloudIdentifiersFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kFileSystemAccessLocalFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kFileSystemAccessLockingSchemeFlagIndex
  true,
  // kFileSystemAccessOriginPrivateFlagIndex
  true,
  // kFileSystemAccessRevokeReadOnRemoveFlagIndex
  true,
  // kFileSystemAccessWriteModeFlagIndex
  true,
  // kFileSystemObserverFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kFileSystemObserverUnobserveFlagIndex
  false,
  // kFilterableSelectFlagIndex
  false,
  // kFilterContainerLevelStylesFlagIndex
  true,
  // kFilteringPrimitivesFlagIndex
  false,
  // kFindBufferCollapseSkippedSpaceFlagIndex
  true,
  // kFindBufferMatchAcrossIgnoredNodesFlagIndex
  true,
  // kFindBufferSkipIgnoredSubtreesFlagIndex
  true,
  // kFindFirstMisspellingEndWhenNonEditableFlagIndex
  true,
  // kFindIgnoreSuggestionFixFlagIndex
  true,
  // kFirstLetterParagraphOffsetsFlagIndex
  true,
  // kFirstLineAndLetterExcludeInputTextareaFlagIndex
  true,
  // kFirstLineTextMetricsFlagIndex
  false,
  // kFixHTMLFormControlElementIsReadOnlyFlagIndex
  true,
  // kFixMapElementEmptyNameBugFlagIndex
  true,
  // kFixSelectionPaintRangeNullOptFlagIndex
  true,
  // kFixVisualRectRemoteViewportTransformFlagIndex
  true,
  // kFledgeFlagIndex
  false,
  // kFledgeAuctionDealSupportFlagIndex
  false,
  // kFledgeBiddingAndAuctionServerAPIFlagIndex
  true,
  // kFledgeBiddingAndAuctionServerAPIMultiSellerFlagIndex
  true,
  // kFledgeClickinessFlagIndex
  false,
  // kFledgeCustomMaxAuctionAdComponentsFlagIndex
  true,
  // kFledgeDeprecatedRenderURLReplacementsFlagIndex
  true,
  // kFledgeDirectFromSellerSignalsHeaderAdSlotFlagIndex
  true,
  // kFledgeDirectFromSellerSignalsWebBundlesFlagIndex
  false,
  // kFledgeMultiBidFlagIndex
  true,
  // kFledgePrivateModelTrainingFlagIndex
  false,
  // kFledgeRealTimeReportingFlagIndex
  true,
  // kFledgeSellerNonceFlagIndex
  true,
  // kFledgeSellerScriptExecutionModeFlagIndex
  false,
  // kFledgeTrustedSignalsKVv1CreativeScanningFlagIndex
  false,
  // kFledgeTrustedSignalsKVv2ContextualDataFlagIndex
  false,
  // kFledgeTrustedSignalsKVv2SupportFlagIndex
  true,
  // kFlexWrapBalanceFlagIndex
  true,
  // kFocusgroupFlagIndex
  true,
  // kFocusgroupV2FlagIndex
  false,
  // kFocusResetEventFlagIndex
  false,
  // kFocusRingRespectExplicitOutlineColorInDarkModeFlagIndex
  true,
  // kFontAccessFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kFontationsPrintingFlagIndex
  true,
  // kFontDataServiceForCSSLocalFontsFlagIndex
  false,
  // kFontFamilyPostscriptMatchingCTMigrationFlagIndex
  false,
  // kFontFamilyStyleMatchingCTMigrationFlagIndex
  false,
  // kFontFeatureSettingsDescriptorFlagIndex
  true,
  // kFontFormatAvar2FlagIndex
  true,
  // kFontLanguageOverrideFlagIndex
  true,
  // kFontMatchAliasesAsLastResortFlagIndex
  true,
  // kFontPrewarmerShutdownFallbackFlagIndex
  true,
  // kFontStyleObliqueZeroDegreeAsNormalFlagIndex
  true,
  // kFontUniqueNameTypefaceCacheFlagIndex
  true,
  // kFontVariableItalicAxisFlagIndex
  true,
  // kFontVariationSettingsDescriptorFlagIndex
  true,
  // kForcedColorsFlagIndex
  true,
  // kForceEagerMeasureMemoryFlagIndex
  false,
  // kForceReduceMotionFlagIndex
  false,
  // kForwardReasonToFetchBodyAbortFlagIndex
  true,
  // kFractionalScrollOffsetsFlagIndex
  false,
  // kFractionalScrollOffsetsForWebAPIFlagIndex
  false,
  // kFragmentedOofInCbFlagIndex
  false,
  // kFrameCaretSkipHiddenCheckFlagIndex
  true,
  // kFreezeFramesOnVisibilityFlagIndex
  false,
  // kGamepadButtonTypesFlagIndex
  false,
  // kGamepadMultitouchFlagIndex
  false,
  // kGamepadRawInputChangeEventFlagIndex
  false,
  // kGamepadWindowEventHandlersFlagIndex
  true,
  // kGenerateDragOverlayBeforeDragStartFlagIndex
  true,
  // kGenerateXSLTWarningBannerFlagIndex
  true,
  // kGeolocationElementFlagIndex
  true,
  // kGeometryMapperSingularTransformFixFlagIndex
  true,
  // kGeometryUtilsFlagIndex
  false,
  // kGeometryUtilsForCSSPseudoElementFlagIndex
  false,
  // kGetAllScreensMediaFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kGetDisplayMediaFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kGetDisplayMediaAudioSelectionFlagIndex
  true,
  // kGetDisplayMediaRequiresUserActivationFlagIndex
  false,
  // kGetDisplayMediaWindowAudioCaptureFlagIndex
  true,
  // kGetElementsByNameOnlyHTMLElementsFlagIndex
  true,
  // kGetTargetRangesRetargetingFlagIndex
  true,
  // kGetUserMediaEchoCancellationModesFlagIndex
  true,
  // kGlobalPrivacyControlFlagIndex
  false,
  // kGlobalPrivacyControlApiFlagIndex
  false,
  // kGlobalPrivacyControlForceFlagIndex
  false,
  // kGraphemeClusterBoundsCheckFlagIndex
  true,
  // kGroupEffectFlagIndex
  false,
  // kHandleShadowDOMInSubstringUtilFlagIndex
  true,
  // kHandwritingRecognitionFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kHarfRustShapingFlagIndex
  false,
  // kHasUAVisualTransitionFlagIndex
  true,
  // kHeadingOffsetFlagIndex
  false,
  // kHideVideoControlsWhenUnneededFlagIndex
  true,
  // kHighlightsFromPointFlagIndex
  true,
  // kHitTestBorderRadiusForStackingContextFlagIndex
  true,
  // kHitTestContainerTransformStateForPreserve3dFlagIndex
  true,
  // kHitTestCulledInlineOfSelfPaintingChildFlagIndex
  true,
  // kHrefTranslateFlagIndex
  true,
  // kHstsTopLevelNavigationsOnlyFlagIndex
  false,
  // kHTMLAdoptionAlgorithmNewStepsFlagIndex
  true,
  // kHTMLAreaElementDisplayNoneFlagIndex
  true,
  // kHTMLAreaHreflangTypeFlagIndex
  false,
  // kHTMLBodyMarginPixelLengthFlagIndex
  true,
  // kHTMLCommandActionsV2FlagIndex
  false,
  // kHTMLCommandElementRemovalFlagIndex
  true,
  // kHTMLCommandForScrollCommandsFlagIndex
  false,
  // kHTMLElementScrollParentFlagIndex
  false,
  // kHTMLInterestForInterestButtonPseudoFlagIndex
  false,
  // kHTMLLinkElementAttributeValueChangesFlagIndex
  true,
  // kHTMLParserIgnoreHeadInNoscriptFlagIndex
  true,
  // kHTMLParserTruncatedMarkupDeclarationFlagIndex
  true,
  // kHTMLParserYieldAndDelayOftenForTestingFlagIndex
  false,
  // kHTMLParserYieldByUserTimingFlagIndex
  false,
  // kHTMLPrintingArtifactAnnotationsFlagIndex
  true,
  // kHTMLProcessingInstructionFlagIndex
  true,
  // kHTMLSwitchAttributeFlagIndex
  false,
  // kHyphenVerticalOrientationFixFlagIndex
  true,
  // kICUCapitalizationFlagIndex
  false,
  // kIgnoreLetterSpacingInCursiveScriptsFlagIndex
  true,
  // kImageDataPixelFormatFlagIndex
  true,
  // kImageDocumentUseLayoutWidthFlagIndex
  true,
  // kImageSrcsetReselectionFlagIndex
  true,
  // kImageSrcsetReselectionForSrcCandidateFlagIndex
  true,
  // kImplicitRootScrollerFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kIncomingCallNotificationsFlagIndex
  false,
  // kIncrementalFontTransferFlagIndex
  false,
  // kInertElementNonEditableFlagIndex
  true,
  // kInfiniteCullRectFlagIndex
  false,
  // kInheritUserModifyWithoutContenteditableFlagIndex
  true,
  // kInitialLetterBlockPositioningFlagIndex
  true,
  // kInlineBlockLineNavigationFlagIndex
  true,
  // kInlineContainingBlockSkipOpaqueFlagIndex
  false,
  // kInlineCursorSkipNonIfcFlagIndex
  true,
  // kInlineScriptCacheHintFlagIndex
  false,
  // kInnerHTMLParserFastpathLogFailureFlagIndex
  false,
  // kInputClientRectWithoutInlinePaddingFlagIndex
  true,
  // kInputDisabledHandlerFixFlagIndex
  true,
  // kInputInSelectFlagIndex
  false,
  // kInputMultipleFieldsUIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kInputMultipleFieldsUIWithPointerChecksFlagIndex
  false,
  // kInputTypeColorEnhancementsFlagIndex
  false,
  // kInsertBlockquoteBeforeOuterBlockFlagIndex
  true,
  // kInstalledAppFlagIndex
  true,
  // kInstallElementFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  true,
  // kInstallOnDeviceSpeechRecognitionFlagIndex
  true,
  // kIntegrityPolicyScriptFlagIndex
  true,
  // kInterestEventsNonComposedFlagIndex
  true,
  // kIntersectionObserverCompositedAnimationsForceMainFramesFlagIndex
  true,
  // kInvertedColorsFlagIndex
  false,
  // kInvisibleSVGAnimationThrottlingFlagIndex
  true,
  // kJavaScriptCompileHintsPerFunctionMagicRuntimeFlagIndex
  false,
  // kJavaScriptImportTextFlagIndex
  true,
  // kJavaScriptSourcePhaseImportsFlagIndex
  false,
  // kKeyboardAccessibleTooltipFlagIndex
  false,
  // kLabelInteractiveContentCheckBeforeHandlerFlagIndex
  true,
  // kLangAttributeAwareFormControlUIFlagIndex
  false,
  // kLanguageDetectionAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kLanguageDetectionAPIForWorkersFlagIndex
  false,
  // kLayoutCloneForScrollableOverflowChangeFlagIndex
  true,
  // kLayoutContainingBlockReturnsBoxFlagIndex
  true,
  // kLayoutIgnoreMarginsForStickyFlagIndex
  false,
  // kLayoutOOFCollectInlinesFixFlagIndex
  true,
  // kLazyImageConformantLoadEventTimingFlagIndex
  true,
  // kLazyLoadVideoAndAudioFlagIndex
  true,
  // kLazyParseInlineStyleSheetsFlagIndex
  false,
  // kLeftClickToHandleSuggestionFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kLegacyAbstractRangeFlagIndex
  true,
  // kLightDismissFromClickFlagIndex
  true,
  // kLineBreakAfterSpaceBeforeOpenTagFlagIndex
  true,
  // kLineBreakBidiControlEnterFlagIndex
  true,
  // kLineBreakerClearShapeResultOnOverflowFlagIndex
  true,
  // kLineBreakerHanKerningEndFlagIndex
  true,
  // kLocalNetworkAccessForWebRTCOptOutFlagIndex
  false,
  // kLocalNetworkAccessPermissionPolicyFlagIndex
  false,
  // kLocalNetworkAccessWebRTCFlagIndex
  false,
  // kLocalNetworkAccessWebSocketsTargetAddressSpaceFlagIndex
  false,
  // kLockedModeFlagIndex
  false,
  // kLoginElementFlagIndex
  false,
  // kLongAnimationFrameSourceCharPositionFlagIndex
  true,
  // kLongAnimationFrameSourceLineColumnFlagIndex
  false,
  // kLongAnimationFrameSourceLineColumnInterfaceFlagIndex
  false,
  // kLongAnimationFrameStyleDurationFlagIndex
  true,
  // kLongAnimationFrameWorkerFlagIndex
  false,
  // kLongPressHitTestInFrameFlagIndex
  true,
  // kLongPressLinkSelectTextFlagIndex
  false,
  // kLongPressReleasesActiveStateFlagIndex
  true,
  // kLongTaskFromLongAnimationFrameFlagIndex
  true,
  // kMacCharacterFallbackCacheFlagIndex
  true,
  // kMacDisableCtrlHomeEndFlagIndex
  true,
  // kMacFontWeightFromOS2FlagIndex
  true,
  // kMachineLearningNeuralNetworkFlagIndex
  false,
  // kManagedConfigurationFlagIndex
  true,
  // kManualTextFlagIndex
  false,
  // kMarginTrimFlagIndex
  true,
  // kMarkAncestorsOnDisplayLockUnlockFlagIndex
  true,
  // kMaskDeserializationTimeForCrossOriginMessagesFlagIndex
  true,
  // kMaskWaitForAllImagesFlagIndex
  true,
  // kMathMLAnchorElementFlagIndex
  false,
  // kMathMLOperatorRTLMirroringFlagIndex
  true,
  // kMeasureMemoryFlagIndex
  true,
  // kMediaCapabilitiesEncodingInfoFlagIndex
  false,
  // kMediaCapabilitiesSpatialAudioFlagIndex
  false,
  // kMediaCaptionSettingsButtonFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kMediaCaptureFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kMediaCaptureBackgroundBlurFlagIndex
  false,
  // kMediaCaptureCameraControlsFlagIndex
  false,
  // kMediaCaptureConfigurationChangeFlagIndex
  false,
  // kMediaCaptureElementPreviewFlagIndex
  false,
  // kMediaCaptureVoiceIsolationFlagIndex
  false,
  // kMediaControlsExpandGestureFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kMediaControlsOverlayPlayButtonFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kMediaElementMutedDefaultStateFlagIndex
  false,
  // kMediaElementVolumeGreaterThanOneFlagIndex
  false,
  // kMediaEngagementBypassAutoplayPoliciesFlagIndex
  false,
  // kMediaLatencyHintFlagIndex
  false,
  // kMediaPlaybackWhileNotVisiblePermissionPolicyFlagIndex
  true,
  // kMediaQueryNavigationControlsFlagIndex
  false,
  // kMediaSessionFlagIndex
  true,
  // kMediaSessionChapterInformationFlagIndex
  true,
  // kMediaSourceExperimentalFlagIndex
  false,
  // kMediaSourceExtensionsForWebCodecsFlagIndex
  false,
  // kMediaStreamTrackProcessorStatsFlagIndex
  true,
  // kMediaStreamTrackTransferFlagIndex
  false,
  // kMediaStreamTrackWebSpeechFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kMemoryConsumerForNGShapeCacheFlagIndex
  false,
  // kMenuElementsFlagIndex
  false,
  // kMessagePortCloseEventFlagIndex
  false,
  // kMiddleClickAutoscrollFlagIndex
  false,
  // kMixedContentAutoupgradesUseIsMixedContentRestrictedInFrameFlagIndex
  true,
  // kMobileLayoutThemeFlagIndex
  false,
  // kModifyParagraphCrossEditingoundaryFlagIndex
  true,
  // kModuleMapDoNotCacheFailedFetchFlagIndex
  true,
  // kModulePreloadReferrerFlagIndex
  true,
  // kModulePreloadStyleJsonFlagIndex
  true,
  // kMojoJSFlagIndex
  false,
  // kMojoJSTestFlagIndex
  false,
  // kMonospaceGlyphCompactionFlagIndex
  false,
  // kMoveEndingSelectionToListChildFlagIndex
  true,
  // kMoveParagraphsPreserveInlineStructureFlagIndex
  true,
  // kMulticolColumnWidthMaxContentClampFlagIndex
  true,
  // kNastaliqScriptFlagIndex
  true,
  // kNavigateEventDeferCrossDocumentCommitFlagIndex
  false,
  // kNavigationEventTimingFlagIndex
  false,
  // kNavigationSourcePseudoClassFlagIndex
  true,
  // kNavigationTimingRedirectTimingViaTAOFlagIndex
  true,
  // kNavigationTypeAndPhaseFlagIndex
  false,
  // kNavigatorContentUtilsFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kNetInfoConstantTypeFlagIndex
  false,
  // kNetInfoDownlinkMaxFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kNeutralKeyframeEasingComplianceFlagIndex
  true,
  // kNewAnimationCompositingCheckingFlagIndex
  false,
  // kNewAnimationDispositionReportingFlagIndex
  false,
  // kNewHTMLSettingMethodsFlagIndex
  true,
  // kNodeIteratorRemovalFixFlagIndex
  true,
  // kNoExtendSelectionToUserSelectNoneOutOfFlowFlagIndex
  true,
  // kNoExtendSelectionToUserSelectNoneOutOfFlowUnlessEditableFlagIndex
  true,
  // kNoFontAntialiasingFlagIndex
  false,
  // kNoIdleEncodingForWebTestsFlagIndex
  false,
  // kNoNbspForInterElementSpaceOnCopyFlagIndex
  true,
  // kNonEmptyBlockquotesOnOutdentingFlagIndex
  true,
  // kNonEmptyVisibleTextSelectionForTextFragmentFlagIndex
  true,
  // kNonStandardAppearanceValueSliderVerticalFlagIndex
  true,
  // kNormalizeLineEndingsInInsertTextFlagIndex
  true,
  // kNoSynchronousThrowForCrossOriginBlockedWorkerFlagIndex
  false,
  // kNotificationConstructorFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kNotificationContentImageFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kNotificationsFlagIndex
  true,
  // kNotificationTriggersFlagIndex
  false,
  // kNotifySelectionControllerOnUnchangedSelectionFlagIndex
  true,
  // kNumberInputFullWidthCharsFlagIndex
  true,
  // kOfflineAudioContextIncrementalRenderingFlagIndex
  true,
  // kOffscreenCanvasGetContextAttributesFlagIndex
  true,
  // kOffsetMappingReuseFullWidthSpaceFixFlagIndex
  true,
  // kOffsetPathTransformUpdateFixFlagIndex
  true,
  // kOmitBlurEventOnElementRemovalFlagIndex
  false,
  // kOmitSubframeDetachmentEventsOnRemovalFlagIndex
  false,
  // kOnDeviceWebSpeechAvailableFlagIndex
  true,
  // kOnDeviceWebSpeechQualityFlagIndex
  true,
  // kOofLayoutRequiresSideEffectsFlagIndex
  true,
  // kOpaqueRangeFlagIndex
  true,
  // kOpenPopoverInvokerRestrictToSameTreeScopeFlagIndex
  true,
  // kOptionDisablednessCheckAncestorsFlagIndex
  true,
  // kOrientationEventFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kOriginAPIFlagIndex
  true,
  // kOriginIsolationHeaderFlagIndex
  true,
  // kOriginPolicyFlagIndex
  false,
  // kOriginTrialsSampleAPIFlagIndex
  false,
  // kOriginTrialsSampleAPIBrowserReadWriteFlagIndex
  false,
  // kOriginTrialsSampleAPIDependentFlagIndex
  false,
  // kOriginTrialsSampleAPIDeprecationFlagIndex
  false,
  // kOriginTrialsSampleAPIExpiryGracePeriodFlagIndex
  false,
  // kOriginTrialsSampleAPIExpiryGracePeriodThirdPartyFlagIndex
  false,
  // kOriginTrialsSampleAPIImpliedFlagIndex
  false,
  // kOriginTrialsSampleAPIInvalidOSFlagIndex
  false,
  // kOriginTrialsSampleAPINavigationFlagIndex
  false,
  // kOriginTrialsSampleAPIPersistentExpiryGracePeriodFlagIndex
  false,
  // kOriginTrialsSampleAPIPersistentFeatureFlagIndex
  false,
  // kOriginTrialsSampleAPIPersistentInvalidOSFlagIndex
  false,
  // kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureFlagIndex
  false,
  // kOriginTrialsSampleAPIThirdPartyFlagIndex
  false,
  // kOutlineDrawAutoStyleZeroWidthFlagIndex
  true,
  // kOverlayGlobalRuleRemovalFlagIndex
  true,
  // kOverlayPropertyFlagIndex
  true,
  // kOverscrollAreasFlagIndex
  false,
  // kPagePopupFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kPagePopupCopyPasteFlagIndex
  true,
  // kPageSwapEventFlagIndex
  true,
  // kPaintCaretAfterInnerEditorPaintFlagIndex
  true,
  // kPaintHoldingForIframesFlagIndex
  true,
  // kPaintTimingContentImagePseudoElementsFlagIndex
  false,
  // kPaintUnderInvalidationCheckingFlagIndex
  false,
  // kParakeetFlagIndex
  false,
  // kPartitionVisitedLinkDatabaseWithSelfLinksFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kPasswordRevealFlagIndex
  false,
  // kPaymentAppFlagIndex
  false,
  // kPaymentHandlerStaticCustomSizeFlagIndex
  false,
  // kPaymentLinkDetectionFlagIndex
  true,
  // kPaymentMethodChangeEventFlagIndex
  true,
  // kPaymentRequestFlagIndex
  false,
  // kPaymentRequestNonFullyActiveDocumentCheckInvalidStateErrorFlagIndex
  true,
  // kPerformanceManagerInstrumentationFlagIndex
  false,
  // kPerformanceMarkCustomUserTimingFromSubframeFlagIndex
  false,
  // kPerformanceMarkFeatureUsageFlagIndex
  false,
  // kPeriodicBackgroundSyncFlagIndex
  true,
  // kPerMethodCanMakePaymentQuotaFlagIndex
  false,
  // kPermissionsPolicyAPIFlagIndex
  false,
  // kPermissionsPolicyForSharedWorkersFlagIndex
  false,
  // kPermissionsRequestRevokeFlagIndex
  false,
  // kPersistentWidgetAPIFlagIndex
  false,
  // kPNaClFlagIndex
  false,
  // kPointerLockOnAndroidFlagIndex
  true,
  // kPointerRawUpdateOnlyInSecureContextFlagIndex
  true,
  // kPopoverHintNestedShowExceptionFlagIndex
  true,
  // kPopoverHintNewBehaviorFlagIndex
  true,
  // kPopupWidgetRequiresUserActivationFlagIndex
  true,
  // kPositionOutsideTabSpanCheckSiblingNodeFlagIndex
  true,
  // kPositionVisibilityIgnoreNonClipAncestorsFlagIndex
  true,
  // kPositionVisibilitySingularValuesFlagIndex
  true,
  // kPotentialPermissionsPolicyReportingFlagIndex
  true,
  // kPreciseMemoryInfoFlagIndex
  false,
  // kPreferDefaultScrollbarStylesFlagIndex
  false,
  // kPreferNonCompositedScrollingFlagIndex
  false,
  // kPreferredAudioOutputDevicesFlagIndex
  false,
  // kPrefersReducedDataFlagIndex
  false,
  // kPrefetchAndPrerenderActivationBeaconFlagIndex
  false,
  // kPreloadLinkRelDataUrlsFlagIndex
  true,
  // kPreloadScannerImprovementsFlagIndex
  true,
  // kPrePaintBoxInvalidatorUsesFragmentsFlagIndex
  true,
  // kPrerender2FlagIndex
  true,
  // kPrerender2CrossOriginIframesFlagIndex
  false,
  // kPrerenderActivationByFormSubmissionFlagIndex
  true,
  // kPrerenderUntilScriptFlagIndex
  false,
  // kPresentationFlagIndex
  true,
  // kPreserveHtmlEquivalentTagsInTypingStyleFlagIndex
  true,
  // kPreserveUnfocusedSelectionCacheFlagIndex
  true,
  // kPreventTextSelectionJumpFlagIndex
  true,
  // kPrivateNetworkAccessNullIpAddressFlagIndex
  false,
  // kPrivateStateTokensFlagIndex
  true,
  // kPrivateStateTokensAlwaysAllowIssuanceFlagIndex
  false,
  // kProfilerAPIFlagIndex
  true,
  // kProfilerAPIForDedicatedWorkerFlagIndex
  false,
  // kProgrammaticScrollPromiseFlagIndex
  true,
  // kProgressEventInServiceWorkerFlagIndex
  true,
  // kPropagateOverscrollBehaviorFromRootFlagIndex
  true,
  // kPseudoElementsFocusableFlagIndex
  true,
  // kPseudoElementsHitTestableFlagIndex
  true,
  // kPseudoElementsHoverableFlagIndex
  false,
  // kPushMessageDataBytesFlagIndex
  true,
  // kPushMessagingFlagIndex
  true,
  // kPushMessagingSubscriptionChangeFlagIndex
  false,
  // kQuotaExceededErrorUpdateFlagIndex
  true,
  // kRadioButtonCircularBorderRadiusFlagIndex
  true,
  // kRangeBoundaryFastPathFlagIndex
  true,
  // kRasterInducingScrollFlagIndex
  true,
  // kRateLimitPointerLockRequestsFlagIndex
  true,
  // kReadableStreamBYOBReaderReadMinOptionFlagIndex
  true,
  // kReadClipboardDataOnClipboardItemGetTypeFlagIndex
  true,
  // kReadingFlowWithSlotsFlagIndex
  true,
  // kReadOnlyTextControlSelectionFlagIndex
  true,
  // kRecheckParentDuringNodeVectorInsertionFlagIndex
  true,
  // kReduceAcceptLanguageFlagIndex
  false,
  // kReduceUserAgentMinorVersionFlagIndex
  true,
  // kRegionCaptureFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kRelatedWebsitePartitionAPIFlagIndex
  false,
  // kReleasePaintHoldingWithoutContentfulPaintFlagIndex
  true,
  // kRelOpenerBcgDependencyHintFlagIndex
  false,
  // kRemotePlaybackFlagIndex
  true,
  // kRemotePlaybackBackendFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kRemoveCharsetAutoDetectionForISO2022JPFlagIndex
  true,
  // kRemoveChildrenInReplaceChildrenFlagIndex
  true,
  // kRemoveCollapsedPlaceholderForContentEditableFlagIndex
  true,
  // kRemoveDanglingMarkupInTargetFlagIndex
  true,
  // kRemoveDataUrlInSvgUseFlagIndex
  true,
  // kRemoveNonAllowlistedCreateEventFlagIndex
  true,
  // kRemoveScrollNodeWorkaroundFlagIndex
  true,
  // kRemoveVisibleSelectionInDOMSelectionFlagIndex
  false,
  // kRenderPriorityAttributeFlagIndex
  false,
  // kReplaceChildrenWithFragmentFastPathFlagIndex
  true,
  // kReplaceCompositionActualInsertedLengthFlagIndex
  false,
  // kReplacedNormalFlowStackingInlinePaintFlagIndex
  false,
  // kReportFirstFrameTimeAsRenderTimeFlagIndex
  false,
  // kReportLayoutShiftRectsInCssPixelsFlagIndex
  true,
  // kRequestIsReloadNavigationFlagIndex
  true,
  // kResourceTimingInitiatorFlagIndex
  false,
  // kResourceTimingUseCORSForBodySizesFlagIndex
  false,
  // kRespectOverscrollBehaviorForScrollBubblingFlagIndex
  true,
  // kResponsiveIframesFlagIndex
  true,
  // kResponsiveIframesShrinkFlagIndex
  true,
  // kResponsiveIframesSingleAxisIcbFlagIndex
  true,
  // kRestrictGamepadAccessFlagIndex
  false,
  // kRestrictOwnAudioFlagIndex
  true,
  // kRootScrollbarFollowsBrowserThemeFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kRouteMatchingFlagIndex
  false,
  // kRtcAlwaysNegotiateDataChannelsFlagIndex
  true,
  // kRtcAudioJitterBufferMaxPacketsFlagIndex
  false,
  // kRTCConfigurationIceTransportsFlagIndex
  false,
  // kRTCDataChannelPriorityFlagIndex
  false,
  // kRTCDiagnosticLoggingFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? true :
  true,
  // kRTCEncodedAudioFrameConstructorFlagIndex
  false,
  // kRTCEncodedFrameAudioLevelFlagIndex
  true,
  // kRTCEncodedFrameSetMetadataFlagIndex
  false,
  // kRTCEncodedFrameTimestampsFlagIndex
  true,
  // kRTCEncodedSourceFlagIndex
  false,
  // kRTCEncodedVideoFrameAdditionalMetadataFlagIndex
  false,
  // kRTCEncodedVideoFrameConstructorFlagIndex
  false,
  // kRTCJitterBufferTargetFlagIndex
  true,
  // kRTCLegacyCallbackBasedGetStatsFlagIndex
  false,
  // kRTCLegacyDiagnosticLoggingFlagIndex
  false,
  // kRTCRtpEncodingParametersCodecFlagIndex
  true,
  // kRtcRtpHeaderEncryptionPolicyFlagIndex
  false,
  // kRTCRtpScaleResolutionDownToFlagIndex
  true,
  // kRTCRtpScriptTransformFlagIndex
  true,
  // kRTCRtpTransportFlagIndex
  false,
  // kRTCStatsRelativePacketArrivalDelayFlagIndex
  false,
  // kRTCSvcScalabilityModeFlagIndex
  true,
  // kRubyTextDecorationSpacingFlagIndex
  true,
  // kRunMicrotaskBeforeXmlScriptFlagIndex
  true,
  // kRunSnapshotPostLayoutStateStepsFlagIndex
  true,
  // kSanitizeIDNEmailFormInputFlagIndex
  true,
  // kSanitizerAPIFlagIndex
  true,
  // kSanitizeWorkerErrorPropagationFlagIndex
  true,
  // kScopedViewTransitionSizeContainmentFlagIndex
  true,
  // kScoreLineBreakerAbortFlagIndex
  true,
  // kScreenDetailedHdrHeadroomFlagIndex
  false,
  // kScriptBasedOnUnicodeBlockFlagIndex
  true,
  // kScriptedSpeechRecognitionFlagIndex
  true,
  // kScriptedSpeechSynthesisFlagIndex
  true,
  // kScrollAnchorSerializationUseParentForTextNodeFlagIndex
  true,
  // kScrollAxisLockFlagIndex
  true,
  // kScrollbarColorFlagIndex
  true,
  // kScrollbarGutterBugFixFlagIndex
  true,
  // kScrollbarWidthFlagIndex
  true,
  // kScrollIntoViewAlignAutoFlagIndex
  false,
  // kScrollIntoViewNearestFlagIndex
  true,
  // kScrollIntoViewNoInitialFocusNavigationStartingPointFlagIndex
  true,
  // kScrollIntoViewRootFrameViewportBugFixFlagIndex
  true,
  // kScrollPerformanceTimingFlagIndex
  false,
  // kScrollTimelineCurrentTimeFlagIndex
  false,
  // kScrollTimelineNamedRangeScrollFlagIndex
  true,
  // kScrollTopLeftInteropFlagIndex
  true,
  // kScrollToTextFragmentDirectiveLimitFlagIndex
  true,
  // kScrollVisibilityHiddenScrollersFlagIndex
  true,
  // kSearchTextHighlightPseudoFlagIndex
  true,
  // kSecurePaymentConfirmationFlagIndex
  false,
  // kSecurePaymentConfirmationAvailabilityAPIFlagIndex
  true,
  // kSecurePaymentConfirmationCapabilitiesFlagIndex
  true,
  // kSecurePaymentConfirmationDebugFlagIndex
  false,
  // kSecurePaymentConfirmationExtensionsDisallowForThirdPartiesFlagIndex
  true,
  // kSecurePaymentConfirmationOptOutFlagIndex
  true,
  // kSelectAnchorInViewportFlagIndex
  true,
  // kSelectAudioOutputFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kSelectedcontentelementAttributeFlagIndex
  false,
  // kSelectedcontentMultipleFlagIndex
  false,
  // kSelectedcontentSpec2FlagIndex
  true,
  // kSelectionAndFocusedVisiblePositionMatchFlagIndex
  false,
  // kSelectionCollapsedDirectionNoneFlagIndex
  true,
  // kSelectionEditingBoundarySlottedContentFlagIndex
  true,
  // kSelectionFocusAffinityFlagIndex
  true,
  // kSelectionHandleWithBottomClippedFlagIndex
  true,
  // kSelectionRemoveRangeNotFoundErrorFlagIndex
  true,
  // kSelectionSetBaseAndExtentNonNullNodeFlagIndex
  false,
  // kSelectivePermissionsInterventionFlagIndex
  true,
  // kSelectLabelClickOpensPickerFlagIndex
  true,
  // kSelectPopupBackgroundFlagIndex
  true,
  // kSelectRemoveOverflowHiddenFlagIndex
  true,
  // kSelectUsesFlatTreeFlagIndex
  false,
  // kSendBeaconThrowForBlobWithNonSimpleTypeFlagIndex
  true,
  // kSendEarlyLastBeginMainFrameFlagIndex
  true,
  // kSendSlotChangeSignalAfterNodeInsertedFlagIndex
  true,
  // kSensorExtraClassesFlagIndex
  false,
  // kSeparateDeferModuleScriptTasksFlagIndex
  true,
  // kSequentialFocusPrimitivesFlagIndex
  false,
  // kSequentialFocusPrimitivesShadowRootsFlagIndex
  false,
  // kSerialFlagIndex
  true,
  // kSerializeInvalidSelectorsInForgivingSelectorListFlagIndex
  false,
  // kSerializeViewTransitionStateInSPAFlagIndex
  false,
  // kSerialPortConnectedFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kServiceWorkerBackgroundSyncInDedicatedWorkerFlagIndex
  false,
  // kServiceWorkerClientLifecycleStateFlagIndex
  false,
  // kServiceWorkerCodeCacheFlagIndex
  true,
  // kServiceWorkerCodeCacheHashingFlagIndex
  true,
  // kServiceWorkerInDedicatedWorkerFlagIndex
  false,
  // kServiceWorkerScriptEncodingFlagIndex
  true,
  // kServiceWorkerStaticRouterTimingInfoFlagIndex
  true,
  // kSetHTMLCanRunScriptsFlagIndex
  true,
  // kSetSequentialFocusStartingPointFlagIndex
  false,
  // kSetShapeFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kShadowRootAdoptedStyleSheetFlagIndex
  false,
  // kShadowRootNamespaceCheckFlagIndex
  false,
  // kShadowRootReferenceTargetFlagIndex
  true,
  // kShadowRootReferenceTargetAriaOwnsFlagIndex
  false,
  // kShadowRootSlotAssignmentFlagIndex
  true,
  // kSharedArrayBufferFlagIndex
  false,
  // kSharedArrayBufferUnrestrictedAccessAllowedFlagIndex
  false,
  // kSharedWorkerFlagIndex
  true,
  // kSharedWorkerExtendedLifetimeFlagIndex
  true,
  // kSideRelativeBackgroundPositionFlagIndex
  true,
  // kSignatureBasedInlineIntegrityFlagIndex
  false,
  // kSingleAxisScrollContainersFlagIndex
  true,
  // kSingleAxisScrollContainersForScrollSnapFlagIndex
  false,
  // kSkipAdFlagIndex
  true,
  // kSkipCallbacksWhenDevToolsNotOpenFlagIndex
  false,
  // kSkipCompositingStaticBackdropFilterAnimationFlagIndex
  true,
  // kSkipEventCaptureFlagIndex
  true,
  // kSkipHtmlInterchangeInForeignContentFlagIndex
  true,
  // kSkipInitialForcedScrollbarFlagIndex
  false,
  // kSkipPaintInvalidationWhileStayingInvisibleFlagIndex
  true,
  // kSkipStaleUndoStepsInIdleSpellCheckFlagIndex
  true,
  // kSkipTickingStaticAnimationsFlagIndex
  true,
  // kSkipTouchEventFilterFlagIndex
  true,
  // kSkipUnselectableElementsInParagraphBoundaryFlagIndex
  true,
  // kSmallerViewportUnitsFlagIndex
  true,
  // kSmartCardFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kSmartCardContextReleaseFlagIndex
  false,
  // kSmartZoomFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kSnapshotScrollTimelinesPostLayoutFlagIndex
  false,
  // kSortedLayoutShiftSourcesByImpactAreaFlagIndex
  true,
  // kSourceSpecificMulticastInDirectSocketsFlagIndex
  true,
  // kSpatNavUsesCursorInheritanceFlagIndex
  true,
  // kSpeakerSelectionFlagIndex
  false,
  // kSpecCompliantXmlMimeTypesFlagIndex
  false,
  // kSpeculationMeasurementFlagIndex
  false,
  // kSpeculationRulesModerateViewportHeuristicsControlFlagIndex
  false,
  // kSpellCheckChunkingFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kSpellCheckCustomDictionaryAPIFlagIndex
  false,
  // kSplitQualifiedNameOnFirstColonFlagIndex
  false,
  // kSplitTextNotCleanupDummySpansFlagIndex
  true,
  // kSrcsetSelectionMatchesImageSetFlagIndex
  true,
  // kSrcsetTwoDimensionalSizesFlagIndex
  false,
  // kStableBlinkFeaturesFlagIndex
  true,
  // kStackingContextIsNotStackedFlagIndex
  true,
  // kStaleImageNaturalSizeDuringRevalidationFlagIndex
  true,
  // kStaleIntersectionGeometryForThrottledFramesFlagIndex
  true,
  // kStandardizedBrowserZoomFlagIndex
  true,
  // kStandardizedBrowserZoomOptOutFlagIndex
  false,
  // kStickyUserActivationAcrossSameOriginNavigationFlagIndex
  true,
  // kStorageBucketsFlagIndex
  true,
  // kStorageBucketsDurabilityFlagIndex
  false,
  // kStorageBucketsLocksFlagIndex
  false,
  // kStrictMimeTypesForWorkersFlagIndex
  false,
  // kStyleResourceFetcherIdentityCheckFlagIndex
  true,
  // kStylusHandwritingFlagIndex
  false,
  // kSubAppsFlagIndex
  true,
  // kSubframeMouseCaptureOwnerFlagIndex
  true,
  // kSuppressFullscreenFromUnfocusedViewFlagIndex
  true,
  // kSuppressPointerStreamAfterDragFlagIndex
  true,
  // kSvgAnimateMotionDiscreteCalcModeFlagIndex
  true,
  // kSvgAvoidResettingFilterQualityForTiledPatternFlagIndex
  true,
  // kSvgCss3dTransformsFlagIndex
  false,
  // kSVGEmbeddedAsReplacedElementFlagIndex
  false,
  // kSvgEmptyAttributeStringParsingFixFlagIndex
  true,
  // kSvgEnableTextDecorationCssStylingFlagIndex
  true,
  // kSvgFallBackToContainerSizeFlagIndex
  true,
  // kSvgFeImageEXIFOrientationFlagIndex
  true,
  // kSvgFeImageSkipHiddenContainerViewportDependenceFlagIndex
  true,
  // kSvgFilterPaintsForHiddenContentFlagIndex
  true,
  // kSvgFilterUserSpaceViewportForSvgFlagIndex
  true,
  // kSvgHyperlinkElementUtilsFlagIndex
  false,
  // kSvgIgnoreNegativeEllipseRadiiFlagIndex
  true,
  // kSvgImageAnimationResetFlagIndex
  true,
  // kSvgImageNonUniformScalingFixFlagIndex
  true,
  // kSvgIncrementalStyleFlagIndex
  true,
  // kSvgInlineRootPixelSnappingScaleAdjustmentFlagIndex
  false,
  // kSvgInstanceSyncOptimizationFlagIndex
  true,
  // kSvgLengthResolveUnparsedValueFlagIndex
  true,
  // kSvgNewZoomFlagIndex
  false,
  // kSVGPathDataAPIFlagIndex
  false,
  // kSvgPathLengthCssPropertyFlagIndex
  false,
  // kSvgScriptElementAsyncAttributeFlagIndex
  true,
  // kSvgScriptFragmentAlreadyStartedFlagIndex
  true,
  // kSvgSizingWithPreserveAspectRatioNoneFlagIndex
  false,
  // kSvgStyleElementReflectTypeAndMediaFlagIndex
  true,
  // kSvgSupportMediaFragmentsFlagIndex
  false,
  // kSVGTextPathSideAttributeFlagIndex
  true,
  // kSvgTextPositioningGraphemeClustersFlagIndex
  true,
  // kSvgUseNestedResourceDocumentsFlagIndex
  true,
  // kSvgUseNestedResourceDocumentsDelayLoadFlagIndex
  true,
  // kSyncCrossDocumentAnimationTimingFlagIndex
  true,
  // kSynthesizedKeyboardEventsForAccessibilityActionsFlagIndex
  false,
  // kSyntheticMouseHoverOverInactivePageFlagIndex
  false,
  // kSystemWakeLockFlagIndex
  false,
  // kTabAlignmentWithFloatsFlagIndex
  true,
  // kTableCellBorderColorInheritFlagIndex
  true,
  // kTableIsAutoFixedLayoutFlagIndex
  false,
  // kTabSizeInRubyBaseFlagIndex
  true,
  // kTargetInShadowDeterminedBeforeListenerFlagIndex
  true,
  // kTargetRangesForBackwardDeletionUnitFlagIndex
  true,
  // kTemporalInputHostBlurFlagIndex
  true,
  // kTestBlinkFeatureDefaultFlagIndex
  false,
  // kTestFeatureFlagIndex
  false,
  // kTestFeatureCustomEnableCheckFlagIndex
  false,
  // kTestFeatureDependentFlagIndex
  false,
  // kTestFeatureForBrowserProcessReadWriteAccessOriginTrialFlagIndex
  false,
  // kTestFeatureImpliedFlagIndex
  false,
  // kTestFeatureStableFlagIndex
  true,
  // kTextAreaPlaceholderBreakAriaHiddenUpdateFlagIndex
  true,
  // kTextAreaResizerFixedSizeFlagIndex
  true,
  // kTextAutoSpaceIgnoreRubyAnnotationFlagIndex
  true,
  // kTextBoxTrimForNestedListFlagIndex
  true,
  // kTextBoxTrimOnInlineBoxFlagIndex
  true,
  // kTextBoxTrimOnInlineBoxTextDecorationFlagIndex
  true,
  // kTextDetectorFlagIndex
  false,
  // kTextEmphasisPositionAutoFlagIndex
  false,
  // kTextEncodingDetectorTldHintFlagIndex
  true,
  // kTextFragmentAPIFlagIndex
  false,
  // kTextFragmentIdentifiersFlagIndex
  true,
  // kTextFragmentTapOpensContextMenuFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kTextIteratorExcludeAutofilledSelectFixFlagIndex
  true,
  // kTextMetricsBaselinesFlagIndex
  true,
  // kTextOverflowClipWithSelectionFlagIndex
  true,
  // kTextOverflowInTextareaFlagIndex
  true,
  // kTextOverflowStringFlagIndex
  true,
  // kTextScaleMetaTagFlagIndex
  true,
  // kTextSpacingTrimFallbackFlagIndex
  true,
  // kTextSpacingTrimFallback2FlagIndex
  false,
  // kTextSpacingTrimFallbackChwsFlagIndex
  true,
  // kTextStreamMethodFlagIndex
  true,
  // kTimelineTriggerFlagIndex
  true,
  // kTimePickerHonorsStepFlagIndex
  true,
  // kTimerThrottlingForBackgroundTabsFlagIndex
  true,
  // kTimestampBasedCLSTrackingFlagIndex
  false,
  // kTimeZoneChangeEventFlagIndex
  false,
  // kTopicsAPIFlagIndex
  true,
  // kTouchDragAndContextMenuFlagIndex
  false,
  // kTouchDragAndDropFlagIndex
  false,
  // kTouchDragOnShortPressFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kTouchEventFeatureDetectionFlagIndex
  true,
  // kTouchTextEditingRedesignFlagIndex
  false,
  // kTrackAnimatedSourcesFlagIndex
  true,
  // kTrackAnimatedSourcesForInheritedPropertiesFlagIndex
  false,
  // kTransferableRTCDataChannelFlagIndex
  true,
  // kTranslateServiceFlagIndex
  false,
  // kTranslationAPIFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kTranslationAPIForWorkersFlagIndex
  false,
  // kTreatMhtmlInitialDocumentLoadsAsCrossDocumentFlagIndex
  true,
  // kTrustedTypesCreateParserOptionsFlagIndex
  true,
  // kTrustedTypesFromLiteralFlagIndex
  false,
  // kTrustedTypesUseCodeLikeFlagIndex
  false,
  // kTwoPhaseViewTransitionFlagIndex
  false,
  // kUAImageReplacementAPIFlagIndex
  false,
  // kUnboundedElementFlagIndex
  true,
  // kUnclosedFormControlIsInvalidFlagIndex
  false,
  // kUnexposedTaskIdsFlagIndex
  false,
  // kUnprefixedSpeechRecognitionFlagIndex
  true,
  // kUnrestrictedMeasureUserAgentSpecificMemoryFlagIndex
  false,
  // kUnrestrictedSharedArrayBufferFlagIndex
  false,
  // kUnrestrictedUsbFlagIndex
  true,
  // kUnsafeEscapingUnboundedElementOnTheOpenWebFlagIndex
  false,
  // kUnsafeUnboundedElementOnTheOpenWebFlagIndex
  false,
  // kUpdateComplexSafaAreaConstraintsFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kUpdateSelectionOnNodeInsertionFlagIndex
  false,
  // kURLPatternCompareComponentFlagIndex
  false,
  // kURLPatternGenerateFlagIndex
  false,
  // kURLSearchParamsHasAndDeleteMultipleArgsFlagIndex
  true,
  // kUseBeginFramePresentationFeedbackFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kUseLowQualityInterpolationFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kUseOriginalDomOffsetsForOffsetMapFlagIndex
  false,
  // kUsePaintGeometryForIntersectionFlagIndex
  true,
  // kUsePositionForPointInFlexibleBoxWithSingleChildElementFlagIndex
  true,
  // kUsePositionIfIsVisuallyEquivalentCandidateFlagIndex
  true,
  // kUserActionPseudosStopAtTopLayerFlagIndex
  true,
  // kUserDefinedEntryPointTimingFlagIndex
  false,
  // kUserMediaElementFlagIndex
  true,
  // kUserMediaElementLegacyFlagIndex
  false,
  // kUseShadowHostStyleCheckEditableFlagIndex
  true,
  // kUseUndoStepElementDispatchBeforeInputFlagIndex
  true,
  // kV8IdleTasksFlagIndex
  false,
  // kVariableSystemFontSupportOnWindowsFlagIndex
  false,
  // kVideoAutoFullscreenFlagIndex
  false,
  // kVideoFrameMetadataBackgroundBlurFlagIndex
  false,
  // kVideoFrameMetadataRtpTimestampFlagIndex
  true,
  // kVideoFullscreenOrientationLockFlagIndex
  false,
  // kVideoRotateToFullscreenFlagIndex
  false,
  // kVideoTrackGeneratorFlagIndex
  false,
  // kVideoTrackGeneratorInWindowFlagIndex
  false,
  // kVideoTrackGeneratorInWorkerFlagIndex
  false,
  // kViewportHeightClientHintHeaderFlagIndex
  true,
  // kViewportSegmentsFlagIndex
  true,
  // kViewTransitionLongCallbackTimeoutForTestingFlagIndex
  false,
  // kViewTransitionPreventSvgFilterPaintFlagIndex
  true,
  // kViewTransitionSkipPseudoTreeForNavigationCaptureFlagIndex
  true,
  // kViewTransitionSkipZeroHeightControlsSnapFlagIndex
  true,
  // kVisibilityCollapseColumnFlagIndex
  false,
  // kVisualRectMappingFixForExpansionFlagIndex
  true,
  // kWakeLockFlagIndex
  true,
  // kWarnOnContentVisibilityRenderAccessFlagIndex
  false,
  // kWavyDecorationContinuousPhaseFlagIndex
  true,
  // kWebAppInstallationFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  true,
  // kWebAppLaunchQueueFlagIndex
  true,
  // kWebAppScopeExtensionsFlagIndex
  false,
  // kWebAppScopeSystemAccentColorFlagIndex
  true,
  // kWebAppTabStripFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebAppTabStripCustomizationsFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebAppTranslationsFlagIndex
  false,
  // kWebAssemblyCustomDescriptorsV2FlagIndex
  false,
  // kWebAssemblyJSPromiseIntegrationFlagIndex
  false,
  // kWebAudioBypassOutputBufferingFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebAudioBypassOutputBufferingOptOutFlagIndex
  false,
  // kWebAudioConfigurableRenderQuantumFlagIndex
  true,
  // kWebAuthFlagIndex
  true,
  // kWebAuthAuthenticatorAttachmentFlagIndex
  false,
  // kWebAuthenticationAmbientFlagIndex
  false,
  // kWebAuthenticationAttestationFormatsFlagIndex
  false,
  // kWebAuthenticationCmtgKeyFlagIndex
  false,
  // kWebAuthenticationCrossDeviceFallbackUrlFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebAuthenticationRemoteClientDataJsonFlagIndex
  false,
  // kWebAuthenticationRemoteDesktopSupportFlagIndex
  false,
  // kWebAutocorrectByDefaultFlagIndex
  true,
  // kWebBluetoothFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebBluetoothGetDevicesFlagIndex
  false,
  // kWebBluetoothScanningFlagIndex
  false,
  // kWebBluetoothWatchAdvertisementsFlagIndex
  false,
  // kWebBluetoothWorldIsolatedCacheFlagIndex
  true,
  // kWebCodecsVideoEncoderBuffersFlagIndex
  false,
  // kWebCryptoPQCFlagIndex
  true,
  // kWebGLDeveloperExtensionsFlagIndex
  false,
  // kWebGLDraftExtensionsFlagIndex
  false,
  // kWebGLDrawingBufferStorageFlagIndex
  true,
  // kWebGLOnWebGPUFlagIndex
  false,
  // kWebGLToneMappingFlagIndex
  false,
  // kWebGPUDeveloperFeaturesFlagIndex
  false,
  // kWebGPUExperimentalFeaturesFlagIndex
  false,
  // kWebGPUExperimentalResourceTableFlagIndex
  false,
  // kWebGPUExternalImageHDRHeadroomFlagIndex
  false,
  // kWebGPUMapSyncOnWorkersFlagIndex
  false,
  // kWebGPUMultithreadDawnWireOnWorkersFlagIndex
  false,
  // kWebHapticsFlagIndex
  false,
  // kWebHIDFlagIndex
  true,
  // kWebHIDOnServiceWorkersFlagIndex
  false,
  // kWebHIDWorldIsolatedCacheFlagIndex
  true,
  // kWebIdentityDigitalCredentialsFlagIndex
  true,
  // kWebIdentityDigitalCredentialsCreationFlagIndex
  true,
  // kWebIDLBigIntUsesToBigIntFlagIndex
  true,
  // kWebMCPFlagIndex
  false,
  // kWebMCPContinuationsFlagIndex
  false,
  // kWebMCPDeclarativeFileInputFlagIndex
  false,
  // kWebMCPFormAssociatedCustomElementsFlagIndex
  false,
  // kWebNFCFlagIndex
  BUILDFLAG(IS_ANDROID) ? true :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? true :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebOTPFlagIndex
  true,
  // kWebOTPAssertionFeaturePolicyFlagIndex
  true,
  // kWebPreferencesFlagIndex
  false,
  // kWebPrintingFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? false :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? false :
  BUILDFLAG(IS_LINUX) ? false :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebRtcSctpSnapFlagIndex
  false,
  // kWebSerialWorldIsolatedCacheFlagIndex
  true,
  // kWebShareFlagIndex
  false,
  // kWebSocketOptionBagFlagIndex
  false,
  // kWebSocketStreamFlagIndex
  true,
  // kWebSocketStreamStandardBinaryChunkTypeFlagIndex
  false,
  // kWebSpeechRecognitionContextFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? false :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebSpeechTimestampsFlagIndex
  false,
  // kWebSpeechUnspokenPunctuationFlagIndex
  BUILDFLAG(IS_ANDROID) ? false :
  BUILDFLAG(IS_WIN) ? true :
  BUILDFLAG(IS_CHROMEOS) ? true :
  BUILDFLAG(IS_MAC) ? true :
  BUILDFLAG(IS_LINUX) ? true :
  BUILDFLAG(IS_IOS) ? false :
  BUILDFLAG(IS_FUCHSIA) ? false :
  false,
  // kWebTransportAnticipatedConcurrentIncomingStreamsFlagIndex
  true,
  // kWebTransportApplicationProtocolFlagIndex
  true,
  // kWebTransportCongestionControlFlagIndex
  false,
  // kWebTransportCreateStreamsBeforeReadyFlagIndex
  true,
  // kWebTransportCustomCertificatesFlagIndex
  true,
  // kWebTransportDatagramsReadableTypeFlagIndex
  false,
  // kWebTransportDatagramsWritableFlagIndex
  false,
  // kWebTransportDrainingFlagIndex
  true,
  // kWebTransportExportKeyingMaterialFlagIndex
  false,
  // kWebTransportHeadersFlagIndex
  true,
  // kWebTransportReceiveStreamFlagIndex
  false,
  // kWebTransportReliabilityFlagIndex
  true,
  // kWebTransportSendGroupFlagIndex
  false,
  // kWebTransportStatsFlagIndex
  false,
  // kWebUIBundledCodeCacheAsyncFetchFlagIndex
  false,
  // kWebUSBFlagIndex
  true,
  // kWebUSBOnDedicatedWorkersFlagIndex
  true,
  // kWebUSBOnServiceWorkersFlagIndex
  false,
  // kWebViewEnvReorderFixFlagIndex
  true,
  // kWebVTTCueLayoutByPositionAlignmentFlagIndex
  true,
  // kWebVTTCueTightLineBoxFlagIndex
  true,
  // kWebVTTLineAndPositionAlignmentFlagIndex
  false,
  // kWebVTTRegionsFlagIndex
  false,
  // kWebXRFlagIndex
  true,
  // kWebXREnabledFeaturesFlagIndex
  true,
  // kWebXRFrameRateFlagIndex
  false,
  // kWebXRFrontFacingFlagIndex
  false,
  // kWebXRGPUBindingFlagIndex
  false,
  // kWebXRHitTestEntityTypesFlagIndex
  false,
  // kWebXRImageTrackingFlagIndex
  false,
  // kWebXRLayersFlagIndex
  true,
  // kWebXRLayersCommonFlagIndex
  false,
  // kWebXRMediaBindingFlagIndex
  false,
  // kWebXRMeshDetectionFlagIndex
  false,
  // kWebXRPlaneDetectionFlagIndex
  true,
  // kWebXRPoseMotionDataFlagIndex
  false,
  // kWebXRSpecParityFlagIndex
  false,
  // kWebXRVisibilityMaskFlagIndex
  true,
  // kWheelEventDeltaExternalPageScaleFlagIndex
  true,
  // kWheelEventMomentumFlagIndex
  true,
  // kWindowDefaultStatusFlagIndex
  false,
  // kWindowOpenAlwaysOnTopFlagIndex
  false,
  // kWindowOpenAttributionSrcFlagIndex
  true,
  // kWindowOpenSplitTabFlagIndex
  false,
  // kWordSkipSpacesPunctuationFixFlagIndex
  true,
  // kXMLNoExternalEntitiesFlagIndex
  true,
  // kXMLParserReplaceLoneSurrogatesFlagIndex
  true,
  // kXMLParsingRustFlagIndex
  false,
  // kXMLRustForNonXsltFlagIndex
  false,
  // kXMLSerializerConsistentDefaultNsDeclMatchingFlagIndex
  false,
  // kXMLViewerForIframesFlagIndex
  false,
  // kXSLTFlagIndex
  false,
  // kXSLTSpecialTrialFlagIndex
  false,
  // kBraveIsInTorContextFlagIndex
  false,
  // kBraveGlobalPrivacyControlFlagIndex
  false,
};

} // namespace blink
