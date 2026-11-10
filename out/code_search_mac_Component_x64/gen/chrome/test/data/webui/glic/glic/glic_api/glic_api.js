// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// API between the Chrome browser and the Glic web client.
//
// Follow some notes providing more context about the Glic API and guidelines on
// how the web client code should be constructed around it. Check the internal
// documentation at http://shortn/_xFTHEnFhDV for more details.
//
// - There may be multiple instances of the web client running at a time, all
//   sharing the same local web storage space. Whenever one is started or
//   restarted, the initialization steps will be repeated.
// - The defined functions and interfaces can be "evolved" to provide more
//   functionality and data, as needed, but must be kept backwards compatible.
// - Functions are documented with their known behavior. Exceptions and promise
//   failures should be documented only if they are expected.
// - As in TypeScript all `number`s are 64 bit floating points, we decided to
//   make all identifier values be of the `string` type (e.g. for a window or a
//   tab).
// - The browser provided tab and window IDs are based on the browser's
//   SessionID values, which are not stable between Chrome restarts, and should
//   not be saved to persisted storage for later reuse. See:
//   https://crsrc.org/c/components/sessions/core/session_id.h
// - URLs can be arbitrarily long but any URL sent or received through this API
//   will be silently made empty if exceeding the 2 MiB length limit imposed by
//   Mojo's URL implementation. See:
//   https://crsrc.org/c/url/mojom/url.mojom
// - Avoid doing exhaustive checks against enums defined by the API, as their
//   values may evolve over time.
/// BEGIN_GENERATED - DO NOT MODIFY BELOW
import * as generated from './glic_api_generated.js';
export var ActorTaskInterruptReason = generated.ActorTaskInterruptReason;
export var ActorTaskPauseReason = generated.ActorTaskPauseReason;
export var ActorTaskState = generated.ActorTaskState;
export var ActorTaskStopReason = generated.ActorTaskStopReason;
export var ActuationTarget = generated.ActuationTarget;
export var AdditionalContextSource = generated.AdditionalContextSource;
export var AuthTabPurpose = generated.AuthTabPurpose;
export var CancelActionsResult = generated.CancelActionsResult;
export var CaptureRegionErrorReason = generated.CaptureRegionErrorReason;
export var ClientCapabilities = generated.ClientCapabilities;
export var ClientErrorDialogType = generated.ClientErrorDialogType;
export var CloseAuthTabResult = generated.CloseAuthTabResult;
export var CloseSignInTabResult = generated.CloseSignInTabResult;
export var CreateTaskErrorReason = generated.CreateTaskErrorReason;
export var CredentialType = generated.CredentialType;
export var ExperimentalTriggeringUpdateType = generated.ExperimentalTriggeringUpdateType;
export var FeatureMode = generated.FeatureMode;
export var FileUploadPolicyState = generated.FileUploadPolicyState;
export var FormFactor = generated.FormFactor;
export var FreOverride = generated.FreOverride;
export var HostCapability = generated.HostCapability;
export var InvocationSource = generated.InvocationSource;
export var LightweightPageFeature = generated.LightweightPageFeature;
export var MetricUserInputReactionType = generated.MetricUserInputReactionType;
export var MicrophoneStatus = generated.MicrophoneStatus;
export var OpenAuthTabResult = generated.OpenAuthTabResult;
export var OpenSignInTabResult = generated.OpenSignInTabResult;
export var PanelStateKind = generated.PanelStateKind;
export var PerformActionsErrorReason = generated.PerformActionsErrorReason;
export var PinTrigger = generated.PinTrigger;
export var Platform = generated.Platform;
export var PromptType = generated.PromptType;
export var RegisterConversationErrorReason = generated.RegisterConversationErrorReason;
export var SbThreatType = generated.SbThreatType;
export var ScreenshotCompressionQuality = generated.ScreenshotCompressionQuality;
export var ScreenshotEncryptionScheme = generated.ScreenshotEncryptionScheme;
export var ScreenshotImageFormat = generated.ScreenshotImageFormat;
export var ScrollToErrorReason = generated.ScrollToErrorReason;
export var SettingsPageField = generated.SettingsPageField;
export var SkillSource = generated.SkillSource;
export var SkillsWebClientEvent = generated.SkillsWebClientEvent;
export var SwitchConversationErrorReason = generated.SwitchConversationErrorReason;
export var TaskDuration = generated.TaskDuration;
export var UnpinTrigger = generated.UnpinTrigger;
export var UserGrantedPermissionDuration = generated.UserGrantedPermissionDuration;
export var WebClientMode = generated.WebClientMode;
export var WebClientModel = generated.WebClientModel;
export var WebUseCounter = generated.WebUseCounter;
/// END_GENERATED - DO NOT MODIFY ABOVE
export * from './geic_api.js';
/**
 * Provides measurement-related functionality to the Glic web client.
 *
 * The typical sequence of events should be either:
 *  (onUserInputSubmitted -> (onResponseStarted ->
 *                            onResponseStopped)*
 *  )*
 * or
 *  onUserInputSubmitted -> onResponseStopped -> * (repeat)
 *
 * This is the core flow for metrics and the web client should do its best to
 * provide accurate and timely callbacks.
 *
 * The concepts of session and rating are less well defined. There are
 * intentionally no constraints on when or how often they are called.
 */
/**
 * Specifies whether a tool execution blocks the conversation or runs
 * asynchronously.
 */
export var ChromeToolBlockingBehavior;
(function (ChromeToolBlockingBehavior) {
    ChromeToolBlockingBehavior[ChromeToolBlockingBehavior["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ChromeToolBlockingBehavior[ChromeToolBlockingBehavior["BLOCKING"] = 1] = "BLOCKING";
    ChromeToolBlockingBehavior[ChromeToolBlockingBehavior["NON_BLOCKING"] = 2] = "NON_BLOCKING";
})(ChromeToolBlockingBehavior || (ChromeToolBlockingBehavior = {}));
/**
 * Reason for failure when executing a host tool.
 */
export var ExecuteToolErrorReason;
(function (ExecuteToolErrorReason) {
    ExecuteToolErrorReason[ExecuteToolErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    ExecuteToolErrorReason[ExecuteToolErrorReason["TOOL_NOT_FOUND"] = 1] = "TOOL_NOT_FOUND";
    ExecuteToolErrorReason[ExecuteToolErrorReason["INVALID_ARGUMENTS"] = 2] = "INVALID_ARGUMENTS";
    ExecuteToolErrorReason[ExecuteToolErrorReason["EXECUTION_FAILED"] = 3] = "EXECUTION_FAILED";
})(ExecuteToolErrorReason || (ExecuteToolErrorReason = {}));
/**
 * Specifies whether the tool result should be announced verbally over TTS or
 * handled silently.
 */
export var ChromeToolResponseScheduling;
(function (ChromeToolResponseScheduling) {
    /** Default scheduling behavior. */
    ChromeToolResponseScheduling[ChromeToolResponseScheduling["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * The tool result was handled (e.g. navigation performed) and does not need
     * verbal speech output or interruption.
     */
    ChromeToolResponseScheduling[ChromeToolResponseScheduling["SILENT"] = 1] = "SILENT";
    /**
     * The tool result requires immediate verbal notification and should interrupt
     * current speech synthesis output.
     */
    ChromeToolResponseScheduling[ChromeToolResponseScheduling["INTERRUPT"] = 2] = "INTERRUPT";
})(ChromeToolResponseScheduling || (ChromeToolResponseScheduling = {}));
export var ResponseStopCause;
(function (ResponseStopCause) {
    /** User cancelled response. */
    ResponseStopCause[ResponseStopCause["USER"] = 0] = "USER";
    /** System cancelled response for another reason. */
    ResponseStopCause[ResponseStopCause["OTHER"] = 1] = "OTHER";
})(ResponseStopCause || (ResponseStopCause = {}));
/** The default value of TabContextOptions.pdfSizeLimit. */
export const DEFAULT_PDF_SIZE_LIMIT = 64 * 1024 * 1024;
/** The default value of TabContextOptions.innerTextBytesLimit. */
export const DEFAULT_INNER_TEXT_BYTES_LIMIT = 20000;
/** Reason why the web client could not initialize. */
export var WebClientInitializeErrorReason;
(function (WebClientInitializeErrorReason) {
    /**
     * Unknown reason. The user can manually retry loading, which reloads the
     * entire webview.
     */
    WebClientInitializeErrorReason[WebClientInitializeErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    /** This list will be expanded later. */
})(WebClientInitializeErrorReason || (WebClientInitializeErrorReason = {}));
/** Reason for failure while acting in the focused tab. */
export var ActInFocusedTabErrorReason;
(function (ActInFocusedTabErrorReason) {
    ActInFocusedTabErrorReason[ActInFocusedTabErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    /** Context could not be gathered after acting. */
    ActInFocusedTabErrorReason[ActInFocusedTabErrorReason["GET_CONTEXT_FAILED"] = 1] = "GET_CONTEXT_FAILED";
    /** The action proto is invalid. */
    ActInFocusedTabErrorReason[ActInFocusedTabErrorReason["INVALID_ACTION_PROTO"] = 2] = "INVALID_ACTION_PROTO";
    /** Action target is not found. */
    ActInFocusedTabErrorReason[ActInFocusedTabErrorReason["TARGET_NOT_FOUND"] = 3] = "TARGET_NOT_FOUND";
    /** Failed to start a new task. */
    ActInFocusedTabErrorReason[ActInFocusedTabErrorReason["FAILED_TO_START_TASK"] = 4] = "FAILED_TO_START_TASK";
})(ActInFocusedTabErrorReason || (ActInFocusedTabErrorReason = {}));
import './glic_api_generated.js';
