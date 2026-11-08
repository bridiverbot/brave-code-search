// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var OpenSignInTabResult;
(function (OpenSignInTabResult) {
    OpenSignInTabResult[OpenSignInTabResult["UNKNOWN"] = 0] = "UNKNOWN";
    // The sign-in tab was opened (or an existing one reactivated).
    OpenSignInTabResult[OpenSignInTabResult["SUCCESS"] = 1] = "SUCCESS";
    // No sign-in URL was provided in options.
    OpenSignInTabResult[OpenSignInTabResult["ERROR_NO_URL"] = 2] = "ERROR_NO_URL";
    // The provided sign-in URL was disallowed.
    OpenSignInTabResult[OpenSignInTabResult["ERROR_DISALLOWED_URL"] = 3] = "ERROR_DISALLOWED_URL";
    // Failed to open the tab (e.g. off-the-record profile, no browser window).
    OpenSignInTabResult[OpenSignInTabResult["ERROR_FAILURE"] = 4] = "ERROR_FAILURE";
})(OpenSignInTabResult || (OpenSignInTabResult = {}));
export var CloseSignInTabResult;
(function (CloseSignInTabResult) {
    CloseSignInTabResult[CloseSignInTabResult["UNKNOWN"] = 0] = "UNKNOWN";
    // The sign-in tab was found and closed.
    CloseSignInTabResult[CloseSignInTabResult["SUCCESS"] = 1] = "SUCCESS";
    // A sign-in tab was previously opened, but had already been closed.
    CloseSignInTabResult[CloseSignInTabResult["ALREADY_CLOSED"] = 2] = "ALREADY_CLOSED";
    // No sign-in tab was open or tracked.
    CloseSignInTabResult[CloseSignInTabResult["NO_SIGN_IN_TAB"] = 3] = "NO_SIGN_IN_TAB";
})(CloseSignInTabResult || (CloseSignInTabResult = {}));
export var AuthTabPurpose;
(function (AuthTabPurpose) {
    // Unknown or unsupported purpose (e.g. sent by a newer web client). Always
    // rejected.
    AuthTabPurpose[AuthTabPurpose["UNKNOWN"] = 0] = "UNKNOWN";
    // GEiC sign-in. The URL must be on the GAIA or configured guest origin.
    AuthTabPurpose[AuthTabPurpose["SIGN_IN"] = 1] = "SIGN_IN";
    // 3P connector OAuth consent. The URL must be the GE OAuth redirector
    // (path `/oauth-redirect`) on the default GE redirector origin
    // (vertexaisearch.cloud.google.com) or the configured guest origin. The 3P
    // provider URL (`continue_uri`) is intentionally not validated.
    AuthTabPurpose[AuthTabPurpose["CONNECTOR_OAUTH"] = 2] = "CONNECTOR_OAUTH";
})(AuthTabPurpose || (AuthTabPurpose = {}));
export var OpenAuthTabResult;
(function (OpenAuthTabResult) {
    OpenAuthTabResult[OpenAuthTabResult["UNKNOWN"] = 0] = "UNKNOWN";
    // The auth tab was opened (or an existing one for the same purpose reused).
    OpenAuthTabResult[OpenAuthTabResult["SUCCESS"] = 1] = "SUCCESS";
    // No URL was provided in options.
    OpenAuthTabResult[OpenAuthTabResult["ERROR_NO_URL"] = 2] = "ERROR_NO_URL";
    // The provided URL was disallowed for the requested purpose.
    OpenAuthTabResult[OpenAuthTabResult["ERROR_DISALLOWED_URL"] = 3] = "ERROR_DISALLOWED_URL";
    // Failed to open the tab (e.g. off-the-record profile, no browser window).
    OpenAuthTabResult[OpenAuthTabResult["ERROR_FAILURE"] = 4] = "ERROR_FAILURE";
    // The requested purpose is unknown or unsupported.
    OpenAuthTabResult[OpenAuthTabResult["ERROR_INVALID_PURPOSE"] = 5] = "ERROR_INVALID_PURPOSE";
})(OpenAuthTabResult || (OpenAuthTabResult = {}));
export var CloseAuthTabResult;
(function (CloseAuthTabResult) {
    CloseAuthTabResult[CloseAuthTabResult["UNKNOWN"] = 0] = "UNKNOWN";
    // The active auth tab was found and closed, and focus was restored to the
    // originating tab.
    CloseAuthTabResult[CloseAuthTabResult["CLOSED_ACTIVE"] = 1] = "CLOSED_ACTIVE";
    // The auth tab was closed, but it was not the active tab when closed, so
    // focus was left undisturbed.
    CloseAuthTabResult[CloseAuthTabResult["CLOSED_INACTIVE"] = 2] = "CLOSED_INACTIVE";
    // An auth tab was previously opened for this purpose, but had already been
    // closed.
    CloseAuthTabResult[CloseAuthTabResult["ALREADY_CLOSED"] = 3] = "ALREADY_CLOSED";
    // No auth tab was open or tracked for this purpose.
    CloseAuthTabResult[CloseAuthTabResult["NO_AUTH_TAB"] = 4] = "NO_AUTH_TAB";
    // The requested purpose is unknown or unsupported.
    CloseAuthTabResult[CloseAuthTabResult["ERROR_INVALID_PURPOSE"] = 5] = "ERROR_INVALID_PURPOSE";
    // The tab opened for this purpose was navigated away from the flow by the
    // user (e.g. to an unrelated site), so it was left open and is no longer
    // tracked.
    CloseAuthTabResult[CloseAuthTabResult["NAVIGATED_AWAY"] = 6] = "NAVIGATED_AWAY";
})(CloseAuthTabResult || (CloseAuthTabResult = {}));
export var FileUploadPolicyState;
(function (FileUploadPolicyState) {
    FileUploadPolicyState[FileUploadPolicyState["ENABLED"] = 0] = "ENABLED";
    FileUploadPolicyState[FileUploadPolicyState["DISABLED"] = 1] = "DISABLED";
})(FileUploadPolicyState || (FileUploadPolicyState = {}));
// The type of user input reaction.
export var MetricUserInputReactionType;
(function (MetricUserInputReactionType) {
    // An unknown reaction type.
    MetricUserInputReactionType[MetricUserInputReactionType["UNKNOWN"] = 0] = "UNKNOWN";
    // A canned reaction which can be presented without communication with the
    // server.
    MetricUserInputReactionType[MetricUserInputReactionType["CANNED"] = 1] = "CANNED";
    // A reaction which requires some generic modeling to produce.
    MetricUserInputReactionType[MetricUserInputReactionType["MODEL"] = 2] = "MODEL";
})(MetricUserInputReactionType || (MetricUserInputReactionType = {}));
// Reason for failure while acting.
export var PerformActionsErrorReason;
(function (PerformActionsErrorReason) {
    PerformActionsErrorReason[PerformActionsErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    // The serialized actions proto failed to parse.
    PerformActionsErrorReason[PerformActionsErrorReason["INVALID_ACTION_PROTO"] = 1] = "INVALID_ACTION_PROTO";
})(PerformActionsErrorReason || (PerformActionsErrorReason = {}));
// Reason for failure when creating an actor task.
export var CreateTaskErrorReason;
(function (CreateTaskErrorReason) {
    CreateTaskErrorReason[CreateTaskErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    // The host does not support the actor task system.
    CreateTaskErrorReason[CreateTaskErrorReason["TASK_SYSTEM_UNAVAILABLE"] = 1] = "TASK_SYSTEM_UNAVAILABLE";
    // The host already has an existing task in progress. The client must stop it
    // before requesting a new task.
    CreateTaskErrorReason[CreateTaskErrorReason["EXISTING_ACTIVE_TASK"] = 2] = "EXISTING_ACTIVE_TASK";
    // The user's browser policy or account settings prevent creating actor tasks.
    CreateTaskErrorReason[CreateTaskErrorReason["BLOCKED_BY_POLICY"] = 3] = "BLOCKED_BY_POLICY";
    // CreateTask was called on a Glic instance which does not have a registered
    // conversation.
    CreateTaskErrorReason[CreateTaskErrorReason["CONVERSATION_NOT_REGISTERED"] = 4] = "CONVERSATION_NOT_REGISTERED";
})(CreateTaskErrorReason || (CreateTaskErrorReason = {}));
// The state of an actor task.
export var ActorTaskState;
(function (ActorTaskState) {
    ActorTaskState[ActorTaskState["UNKNOWN"] = 0] = "UNKNOWN";
    // The actor task is idle and waiting for the next action instruction.
    ActorTaskState[ActorTaskState["IDLE"] = 1] = "IDLE";
    // The actor task is performing an action.
    ActorTaskState[ActorTaskState["ACTING"] = 2] = "ACTING";
    // The actor task is paused and waiting to be resumed or stopped.
    ActorTaskState[ActorTaskState["PAUSED"] = 3] = "PAUSED";
    // The actor task is stopped and going away.
    ActorTaskState[ActorTaskState["STOPPED"] = 4] = "STOPPED";
})(ActorTaskState || (ActorTaskState = {}));
// The reason/source of why an actor task was paused.
export var ActorTaskPauseReason;
(function (ActorTaskPauseReason) {
    // Actor task was paused by the model.
    ActorTaskPauseReason[ActorTaskPauseReason["PAUSED_BY_MODEL"] = 0] = "PAUSED_BY_MODEL";
    // Actor task was puased by the user.
    ActorTaskPauseReason[ActorTaskPauseReason["PAUSED_BY_USER"] = 1] = "PAUSED_BY_USER";
})(ActorTaskPauseReason || (ActorTaskPauseReason = {}));
// The reason/source of why an actor task was stopped.
export var ActorTaskStopReason;
(function (ActorTaskStopReason) {
    // Actor task is complete.
    ActorTaskStopReason[ActorTaskStopReason["TASK_COMPLETE"] = 0] = "TASK_COMPLETE";
    // Actor task was stopped by the user.
    ActorTaskStopReason[ActorTaskStopReason["STOPPED_BY_USER"] = 1] = "STOPPED_BY_USER";
    // Actor task was stopped because the model reported a failure.
    ActorTaskStopReason[ActorTaskStopReason["MODEL_ERROR"] = 2] = "MODEL_ERROR";
    // Actor task was stopped by choosing a new conversation.
    ActorTaskStopReason[ActorTaskStopReason["USER_STARTED_NEW_CHAT"] = 3] = "USER_STARTED_NEW_CHAT";
    // Actor task was stopped by choosing a previous conversation.
    ActorTaskStopReason[ActorTaskStopReason["USER_LOADED_PREVIOUS_CHAT"] = 4] = "USER_LOADED_PREVIOUS_CHAT";
})(ActorTaskStopReason || (ActorTaskStopReason = {}));
// The reason/source of why an actor task was interrupted.
export var ActorTaskInterruptReason;
(function (ActorTaskInterruptReason) {
    // Actor task is interrupted for an unknown reason.
    ActorTaskInterruptReason[ActorTaskInterruptReason["UNKNOWN_REASON"] = 0] = "UNKNOWN_REASON";
    // Actor task is complete.
    ActorTaskInterruptReason[ActorTaskInterruptReason["TASK_COMPLETE"] = 1] = "TASK_COMPLETE";
    // Actor task was waiting for user input.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_USER_INPUT"] = 2] = "WAITING_USER_INPUT";
    // Actor task was waiting for user to provide clarifications on the current
    // task.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_USER_CLARIFICATION"] = 3] = "WAITING_USER_CLARIFICATION";
    // Actor task was waiting for user to confirm an action.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_USER_CONFIRMATION"] = 4] = "WAITING_USER_CONFIRMATION";
    // Actor task was waiting for user to take over.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_USER_TAKE_OVER"] = 5] = "WAITING_USER_TAKE_OVER";
    // Actor task was waiting for irrelevant user input.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_IRRELEVANT_USER_INPUT"] = 6] = "WAITING_IRRELEVANT_USER_INPUT";
    // Actor task was waiting for user to respond to unsafe counter-abuse verdict.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_UNSAFE_COUNTER_ABUSE_VERDICT"] = 7] = "WAITING_UNSAFE_COUNTER_ABUSE_VERDICT";
    // Actor task was waiting for user to consent on experimental triggering.
    ActorTaskInterruptReason[ActorTaskInterruptReason["WAITING_FOR_EXPERIMENTAL_TRIGGERING_CONSENT"] = 8] = "WAITING_FOR_EXPERIMENTAL_TRIGGERING_CONSENT";
})(ActorTaskInterruptReason || (ActorTaskInterruptReason = {}));
// Safe Browsing Threat Type.
export var SbThreatType;
(function (SbThreatType) {
    // Default value.
    SbThreatType[SbThreatType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SbThreatType[SbThreatType["SOCIAL_ENGINEERING"] = 1] = "SOCIAL_ENGINEERING";
    SbThreatType[SbThreatType["MALWARE"] = 2] = "MALWARE";
    SbThreatType[SbThreatType["UNWANTED_SOFTWARE"] = 3] = "UNWANTED_SOFTWARE";
})(SbThreatType || (SbThreatType = {}));
// Enum to specify the image format of the screenshot.
export var ScreenshotImageFormat;
(function (ScreenshotImageFormat) {
    // JPEG screenshot format. This is the default format.
    ScreenshotImageFormat[ScreenshotImageFormat["JPEG"] = 0] = "JPEG";
    // PNG screenshot format.
    ScreenshotImageFormat[ScreenshotImageFormat["PNG"] = 1] = "PNG";
    // WEBP screenshot format.
    ScreenshotImageFormat[ScreenshotImageFormat["WEBP"] = 2] = "WEBP";
})(ScreenshotImageFormat || (ScreenshotImageFormat = {}));
// Enum to specify the compression quality of the screenshot. Depending on
// screenshot format, the compression quality may not be respected or may mean
// something different.
export var ScreenshotCompressionQuality;
(function (ScreenshotCompressionQuality) {
    // No compression.
    ScreenshotCompressionQuality[ScreenshotCompressionQuality["NONE"] = 0] = "NONE";
    // Low compression quality.
    ScreenshotCompressionQuality[ScreenshotCompressionQuality["LOW"] = 1] = "LOW";
    // Medium compression quality.
    ScreenshotCompressionQuality[ScreenshotCompressionQuality["MEDIUM"] = 2] = "MEDIUM";
    // High compression quality.
    ScreenshotCompressionQuality[ScreenshotCompressionQuality["HIGH"] = 3] = "HIGH";
})(ScreenshotCompressionQuality || (ScreenshotCompressionQuality = {}));
// Reason why scrollTo() failed.
export var ScrollToErrorReason;
(function (ScrollToErrorReason) {
    // Invalid params were provided to scrollTo(), or the browser doesn't support
    // scrollTo() yet.
    ScrollToErrorReason[ScrollToErrorReason["NOT_SUPPORTED"] = 0] = "NOT_SUPPORTED";
    // scrollTo() was called again before this call finished processing.
    ScrollToErrorReason[ScrollToErrorReason["NEWER_SCROLL_TO_CALL"] = 1] = "NEWER_SCROLL_TO_CALL";
    // There is no tab currently in focus.
    ScrollToErrorReason[ScrollToErrorReason["NO_FOCUSED_TAB"] = 2] = "NO_FOCUSED_TAB";
    // The input selector did not match any content in the document or a given
    // range.
    ScrollToErrorReason[ScrollToErrorReason["NO_MATCH_FOUND"] = 3] = "NO_MATCH_FOUND";
    // The currently focused tab changed or navigated while processing the
    // scrollTo() call.
    ScrollToErrorReason[ScrollToErrorReason["FOCUSED_TAB_CHANGED_OR_NAVIGATED"] = 4] = "FOCUSED_TAB_CHANGED_OR_NAVIGATED";
    // The document_id or url provided doesn't match the active document in the
    // primary main frame of the currently focused tab. The document may have been
    // navigated away, may not currently be in focus, or may not be in a primary
    // main frame (we don't currently support iframes).
    ScrollToErrorReason[ScrollToErrorReason["NO_MATCHING_DOCUMENT"] = 5] = "NO_MATCHING_DOCUMENT";
    // The search range starting from DOMNodeId did not result in a valid range.
    ScrollToErrorReason[ScrollToErrorReason["SEARCH_RANGE_INVALID"] = 6] = "SEARCH_RANGE_INVALID";
    // Page context access is disabled.
    ScrollToErrorReason[ScrollToErrorReason["TAB_CONTEXT_PERMISSION_DISABLED"] = 7] = "TAB_CONTEXT_PERMISSION_DISABLED";
    // The web client requested to drop the highlight via
    // `dropScrollToHighlight()`.
    ScrollToErrorReason[ScrollToErrorReason["DROPPED_BY_WEB_CLIENT"] = 8] = "DROPPED_BY_WEB_CLIENT";
})(ScrollToErrorReason || (ScrollToErrorReason = {}));
// Enum to specify the source of the Skill.
export var SkillSource;
(function (SkillSource) {
    SkillSource[SkillSource["UNKNOWN"] = 0] = "UNKNOWN";
    // Skill created by Google.
    SkillSource[SkillSource["FIRST_PARTY"] = 1] = "FIRST_PARTY";
    // Skill created by an end-user.
    SkillSource[SkillSource["USER_CREATED"] = 2] = "USER_CREATED";
    // Skill derived from a first party skill.
    SkillSource[SkillSource["DERIVED_FROM_FIRST_PARTY"] = 3] = "DERIVED_FROM_FIRST_PARTY";
    // Skill sourced from the EnterprisePublishedSkills enterprise policy.
    SkillSource[SkillSource["ENTERPRISE"] = 4] = "ENTERPRISE";
    // Skill derived from an enterprise skill.
    SkillSource[SkillSource["DERIVED_FROM_ENTERPRISE"] = 5] = "DERIVED_FROM_ENTERPRISE";
})(SkillSource || (SkillSource = {}));
// Enum to specify the skills web client event for metrics recording.
// Includes both direct user interactions and WebClient state
// transitions to track feature funnels.
export var SkillsWebClientEvent;
(function (SkillsWebClientEvent) {
    // Default value for unknown or uninitialized actions.
    SkillsWebClientEvent[SkillsWebClientEvent["UNKNOWN"] = 0] = "UNKNOWN";
    // User invoked a first-party skill.
    SkillsWebClientEvent[SkillsWebClientEvent["USED_FIRST_PARTY_SKILL"] = 1] = "USED_FIRST_PARTY_SKILL";
    // User invoked a skill they created themselves.
    SkillsWebClientEvent[SkillsWebClientEvent["USED_USER_CREATED_SKILL"] = 2] = "USED_USER_CREATED_SKILL";
    // User invoked a skill that was remix/derived from a first-party skill.
    SkillsWebClientEvent[SkillsWebClientEvent["USED_DERIVED_FIRST_PARTY_SKILL"] = 3] = "USED_DERIVED_FIRST_PARTY_SKILL";
    // User typed '/' or triggered the skills menu.
    SkillsWebClientEvent[SkillsWebClientEvent["OPENED_MENU"] = 4] = "OPENED_MENU";
    // User clicked the 'Manage skills' button from the slash menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_MANAGE_FROM_MENU"] = 5] = "CLICKED_MANAGE_FROM_MENU";
    // User clicked the 'Add skill' button from the slash menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_ADD_FROM_MENU"] = 6] = "CLICKED_ADD_FROM_MENU";
    // User clicked the edit button on an existing skill preview.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_EDIT_FROM_MENU"] = 7] = "CLICKED_EDIT_FROM_MENU";
    // User clicked the generic '+' button on a 1P skill preview.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_ADD_ON1P_SKILL"] = 8] = "CLICKED_ADD_ON1P_SKILL";
    // User clicked the 'Save as Skill' chip that appears on hover.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_SAVE_AS_SKILL_HOVER_CHIP"] = 9] = "CLICKED_SAVE_AS_SKILL_HOVER_CHIP";
    // User clicked the 'Edit Skill' chip that appears on hover.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_EDIT_SKILL_HOVER_CHIP"] = 10] = "CLICKED_EDIT_SKILL_HOVER_CHIP";
    // User clicked the 'Browse skills' button from the plus menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_BROWSE_SKILL_FROM_PLUS_MENU"] = 11] = "CLICKED_BROWSE_SKILL_FROM_PLUS_MENU";
    // User clicked a skill from the plus menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_SKILL_FROM_PLUS_MENU"] = 12] = "CLICKED_SKILL_FROM_PLUS_MENU";
    // User clicked the 'Manage skills' button from the plus menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_MANAGE_SKILL_FROM_PLUS_MENU"] = 13] = "CLICKED_MANAGE_SKILL_FROM_PLUS_MENU";
    // User clicked the 'More' button from the slash menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_MORE_FROM_MENU"] = 14] = "CLICKED_MORE_FROM_MENU";
    // User clicked the 'Manage skills' button from the slash skills submenu.
    // Deprecated. Use kClickedManageFromMenu instead.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_MANAGE_SKILL_FROM_MENU"] = 15] = "CLICKED_MANAGE_SKILL_FROM_MENU";
    // User clicked a skill from the slash menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_SKILL_FROM_MENU"] = 16] = "CLICKED_SKILL_FROM_MENU";
    // User clicked the 'Browse skills' button from the slash menu.
    SkillsWebClientEvent[SkillsWebClientEvent["CLICKED_BROWSE_SKILLS_FROM_MENU"] = 17] = "CLICKED_BROWSE_SKILLS_FROM_MENU";
    // Skill Builder Step 1: User clicked the promo chip to start the flow.
    SkillsWebClientEvent[SkillsWebClientEvent["SKILL_BUILDER_CLICKED_PROMO_CHIP"] = 20] = "SKILL_BUILDER_CLICKED_PROMO_CHIP";
    // Skill Builder Step 2: A draft skill was successfully generated by the AI.
    SkillsWebClientEvent[SkillsWebClientEvent["SKILL_BUILDER_PROMPT_GENERATED"] = 21] = "SKILL_BUILDER_PROMPT_GENERATED";
    // Skill Builder Step 3: User clicked save on the generated draft.
    SkillsWebClientEvent[SkillsWebClientEvent["SKILL_BUILDER_CLICKED_SAVE_AS_SKILL"] = 22] = "SKILL_BUILDER_CLICKED_SAVE_AS_SKILL";
})(SkillsWebClientEvent || (SkillsWebClientEvent = {}));
// Describes what triggered the pin.
export var PinTrigger;
(function (PinTrigger) {
    // The pin occurred for unknown reasons. Specifies 'web client' to align with
    // `GlicPinTrigger` enum (which disambiguates from unknown triggers
    // originating elsewhere).
    PinTrigger[PinTrigger["WEB_CLIENT_UNKNOWN"] = 0] = "WEB_CLIENT_UNKNOWN";
    // The pin was triggered by the toggle UI for pin candidates.
    PinTrigger[PinTrigger["CANDIDATES_TOGGLE"] = 1] = "CANDIDATES_TOGGLE";
    // The pin was triggered by the inline '@' mention feature.
    PinTrigger[PinTrigger["AT_MENTION"] = 2] = "AT_MENTION";
    // The pin was triggered as part of actor/actuation behavior.
    PinTrigger[PinTrigger["ACTUATION"] = 3] = "ACTUATION";
})(PinTrigger || (PinTrigger = {}));
// Describes what triggered the unpin.
export var UnpinTrigger;
(function (UnpinTrigger) {
    // The unpin occurred for unknown reasons. Specifies 'web client' to align
    // with `GlicUnpinTrigger` enum (which disambiguates from unknown triggers
    // originating elsewhere).
    UnpinTrigger[UnpinTrigger["WEB_CLIENT_UNKNOWN"] = 0] = "WEB_CLIENT_UNKNOWN";
    // The unpin was triggered by the toggle UI for pin candidates.
    UnpinTrigger[UnpinTrigger["CANDIDATES_TOGGLE"] = 1] = "CANDIDATES_TOGGLE";
    // The unpin was triggered by a chip.
    UnpinTrigger[UnpinTrigger["CHIP"] = 2] = "CHIP";
    // The unpin was triggered as part of actor/actuation behavior.
    UnpinTrigger[UnpinTrigger["ACTUATION"] = 3] = "ACTUATION";
})(UnpinTrigger || (UnpinTrigger = {}));
// Result of CancelActions().
export var CancelActionsResult;
(function (CancelActionsResult) {
    // Do not manually use this value. Fail safe when an old client receives an
    // extended new enum.
    CancelActionsResult[CancelActionsResult["UNKNOWN"] = 0] = "UNKNOWN";
    // Actions were successfully cancelled.
    CancelActionsResult[CancelActionsResult["SUCCESS"] = 1] = "SUCCESS";
    // The task was not found.
    CancelActionsResult[CancelActionsResult["TASK_NOT_FOUND"] = 2] = "TASK_NOT_FOUND";
    // Could not cancel the actions for other reasons (e.g., the task is already
    // completed).
    CancelActionsResult[CancelActionsResult["FAILED"] = 3] = "FAILED";
})(CancelActionsResult || (CancelActionsResult = {}));
// Reason for failure when switching a conversation.
export var SwitchConversationErrorReason;
(function (SwitchConversationErrorReason) {
    SwitchConversationErrorReason[SwitchConversationErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
})(SwitchConversationErrorReason || (SwitchConversationErrorReason = {}));
// Reason for failure when registering a conversation.
export var RegisterConversationErrorReason;
(function (RegisterConversationErrorReason) {
    RegisterConversationErrorReason[RegisterConversationErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    // The instance already has a conversation ID.
    RegisterConversationErrorReason[RegisterConversationErrorReason["INSTANCE_ALREADY_HAS_CONVERSATION_ID"] = 1] = "INSTANCE_ALREADY_HAS_CONVERSATION_ID";
})(RegisterConversationErrorReason || (RegisterConversationErrorReason = {}));
// Web client's operation modes.
export var WebClientMode;
(function (WebClientMode) {
    // Text operation mode.
    WebClientMode[WebClientMode["TEXT"] = 0] = "TEXT";
    // Audio operation mode.
    WebClientMode[WebClientMode["AUDIO"] = 1] = "AUDIO";
})(WebClientMode || (WebClientMode = {}));
// Prompt submission type.
export var PromptType;
(function (PromptType) {
    // Default value when prompt type is unspecified or unknown.
    PromptType[PromptType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    // User typed text in the prompt input field.
    PromptType[PromptType["TYPED_TEXT"] = 1] = "TYPED_TEXT";
    // User selected a Zero State Suggestion (ZSS).
    PromptType[PromptType["ZERO_STATE_SUGGESTIONS"] = 2] = "ZERO_STATE_SUGGESTIONS";
    // Auto-submitted prompt (e.g. contextual cueing auto-submit).
    PromptType[PromptType["AUTO_PROMPT"] = 3] = "AUTO_PROMPT";
    // Audio input prompt.
    PromptType[PromptType["AUDIO"] = 4] = "AUDIO";
})(PromptType || (PromptType = {}));
// Microphone status.
export var MicrophoneStatus;
(function (MicrophoneStatus) {
    MicrophoneStatus[MicrophoneStatus["NOT_LISTENING"] = 0] = "NOT_LISTENING";
    MicrophoneStatus[MicrophoneStatus["LISTENING"] = 1] = "LISTENING";
    MicrophoneStatus[MicrophoneStatus["UNKNOWN"] = 2] = "UNKNOWN";
})(MicrophoneStatus || (MicrophoneStatus = {}));
// Web client's operation model.
export var WebClientModel;
(function (WebClientModel) {
    // Default model.
    WebClientModel[WebClientModel["DEFAULT"] = 0] = "DEFAULT";
    // Actor operation mode.
    WebClientModel[WebClientModel["ACTOR"] = 1] = "ACTOR";
})(WebClientModel || (WebClientModel = {}));
// Web client's user counter.
export var WebUseCounter;
(function (WebUseCounter) {
    // Default counter. Never used.
    WebUseCounter[WebUseCounter["DEFAULT"] = 0] = "DEFAULT";
    WebUseCounter[WebUseCounter["SUBMIT_PROMPT_WITH_AUTO_MODE"] = 1] = "SUBMIT_PROMPT_WITH_AUTO_MODE";
    WebUseCounter[WebUseCounter["TASK_INTERRUPTED_FOR_USER_CONFIRMATION"] = 2] = "TASK_INTERRUPTED_FOR_USER_CONFIRMATION";
    WebUseCounter[WebUseCounter["TASK_INTERRUPTED_FOR_USER_CLARIFICATION"] = 3] = "TASK_INTERRUPTED_FOR_USER_CLARIFICATION";
    WebUseCounter[WebUseCounter["SELECTION_TOGGLED_VIA_SHARED_MENU"] = 4] = "SELECTION_TOGGLED_VIA_SHARED_MENU";
    WebUseCounter[WebUseCounter["SELECTION_TOGGLED_VIA_HOT_KEY"] = 5] = "SELECTION_TOGGLED_VIA_HOT_KEY";
    WebUseCounter[WebUseCounter["SUBMIT_PROMPT_WITH_TEXT_SELECTION_CUE"] = 6] = "SUBMIT_PROMPT_WITH_TEXT_SELECTION_CUE";
})(WebUseCounter || (WebUseCounter = {}));
// Client error dialog types.
export var ClientErrorDialogType;
(function (ClientErrorDialogType) {
    ClientErrorDialogType[ClientErrorDialogType["UNKNOWN"] = 0] = "UNKNOWN";
    ClientErrorDialogType[ClientErrorDialogType["DISABLED_BY_ORGANIZATION"] = 1] = "DISABLED_BY_ORGANIZATION";
    ClientErrorDialogType[ClientErrorDialogType["GENERIC_AVAILABILITY"] = 2] = "GENERIC_AVAILABILITY";
    ClientErrorDialogType[ClientErrorDialogType["INELIGIBLE_ACCOUNT"] = 3] = "INELIGIBLE_ACCOUNT";
    ClientErrorDialogType[ClientErrorDialogType["SIGNOUT"] = 4] = "SIGNOUT";
    ClientErrorDialogType[ClientErrorDialogType["UNSUPPORTED_LOCATION"] = 5] = "UNSUPPORTED_LOCATION";
})(ClientErrorDialogType || (ClientErrorDialogType = {}));
export var AdditionalContextSource;
(function (AdditionalContextSource) {
    AdditionalContextSource[AdditionalContextSource["UNKNOWN"] = 2] = "UNKNOWN";
    AdditionalContextSource[AdditionalContextSource["SHARE_CONTEXT_MENU"] = 0] = "SHARE_CONTEXT_MENU";
    AdditionalContextSource[AdditionalContextSource["REGION_SELECTION"] = 1] = "REGION_SELECTION";
    AdditionalContextSource[AdditionalContextSource["TEXT_SELECTION"] = 3] = "TEXT_SELECTION";
    AdditionalContextSource[AdditionalContextSource["WEB_DRAG_DROP"] = 4] = "WEB_DRAG_DROP";
    AdditionalContextSource[AdditionalContextSource["EXPERIMENTAL_TRIGGERING"] = 5] = "EXPERIMENTAL_TRIGGERING";
})(AdditionalContextSource || (AdditionalContextSource = {}));
// Types of updates that may be relayed back by the web client.
export var ExperimentalTriggeringUpdateType;
(function (ExperimentalTriggeringUpdateType) {
    // An unknown, non-terminal update type.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["UNKNOWN"] = 0] = "UNKNOWN";
    // A log entry describing internal steps or "thought" process.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["WORKLOG"] = 1] = "WORKLOG";
    // The interaction was paused.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["PAUSED"] = 2] = "PAUSED";
    // A final status update or metadata about the completed task.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["TERMINAL_COMPLETION"] = 3] = "TERMINAL_COMPLETION";
    // The interaction was stopped or cancelled.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["TERMINAL_STOPPED"] = 4] = "TERMINAL_STOPPED";
    // The interaction failed.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["TERMINAL_FAILED"] = 5] = "TERMINAL_FAILED";
    // The interaction yielded to the user.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["YIELD_TO_USER"] = 6] = "YIELD_TO_USER";
    // The interaction has resumed after a pause or wait state.
    ExperimentalTriggeringUpdateType[ExperimentalTriggeringUpdateType["RESUMED"] = 7] = "RESUMED";
})(ExperimentalTriggeringUpdateType || (ExperimentalTriggeringUpdateType = {}));
// Lightweight page features detected on the page.
export var LightweightPageFeature;
(function (LightweightPageFeature) {
    LightweightPageFeature[LightweightPageFeature["UNKNOWN"] = 0] = "UNKNOWN";
    // The YouTube "Ask" button is visible.
    LightweightPageFeature[LightweightPageFeature["YT_ASK_BUTTON_PRESENT"] = 1] = "YT_ASK_BUTTON_PRESENT";
})(LightweightPageFeature || (LightweightPageFeature = {}));
// Reason for `captureRegion` error.
export var CaptureRegionErrorReason;
(function (CaptureRegionErrorReason) {
    CaptureRegionErrorReason[CaptureRegionErrorReason["UNKNOWN"] = 0] = "UNKNOWN";
    // There is no focused tab that can be used for region capture.
    CaptureRegionErrorReason[CaptureRegionErrorReason["NO_FOCUSABLE_TAB"] = 1] = "NO_FOCUSABLE_TAB";
})(CaptureRegionErrorReason || (CaptureRegionErrorReason = {}));
// Specifies the encryption scheme used for the screenshot data.
export var ScreenshotEncryptionScheme;
(function (ScreenshotEncryptionScheme) {
    // Unknown or unrecognized scheme across version boundaries.
    ScreenshotEncryptionScheme[ScreenshotEncryptionScheme["UNKNOWN"] = 0] = "UNKNOWN";
    // Unencrypted screenshot data.
    ScreenshotEncryptionScheme[ScreenshotEncryptionScheme["NONE"] = 1] = "NONE";
    // Encrypted according to RFC 8291 (Web Push message encryption), combining an
    // ephemeral ECDH P-256 public key share header with RFC 8188 record
    // encryption.
    ScreenshotEncryptionScheme[ScreenshotEncryptionScheme["RFC8291"] = 2] = "RFC8291";
})(ScreenshotEncryptionScheme || (ScreenshotEncryptionScheme = {}));
// Fields of interest from the Glic settings page.
export var SettingsPageField;
(function (SettingsPageField) {
    // The OS hotkey configuration field.
    SettingsPageField[SettingsPageField["OS_HOTKEY"] = 1] = "OS_HOTKEY";
    // The OS entrypoint enabling field.
    SettingsPageField[SettingsPageField["OS_ENTRYPOINT_TOGGLE"] = 2] = "OS_ENTRYPOINT_TOGGLE";
    // The location permission field.
    SettingsPageField[SettingsPageField["LOCATION_PERMISSION"] = 3] = "LOCATION_PERMISSION";
})(SettingsPageField || (SettingsPageField = {}));
// Describes the capability of the glic host.
export var HostCapability;
(function (HostCapability) {
    // Glic host supports scrollTo() with PDF documents.
    HostCapability[HostCapability["SCROLL_TO_PDF"] = 0] = "SCROLL_TO_PDF";
    // Glic host will reset panel size and location on open.
    HostCapability[HostCapability["RESET_SIZE_AND_LOCATION_ON_OPEN"] = 1] = "RESET_SIZE_AND_LOCATION_ON_OPEN";
    // The glic host's getModelQualityClientId() is enabled and can be called
    // safely.
    HostCapability[HostCapability["GET_MODEL_QUALITY_CLIENT_ID"] = 2] = "GET_MODEL_QUALITY_CLIENT_ID";
    // Glic is in multi-instance mode.
    HostCapability[HostCapability["MULTI_INSTANCE"] = 3] = "MULTI_INSTANCE";
    // Enables the experimental "Trust First" (Arm 1 - "Start Chat") onboarding
    // UI flow, bypassing the standard FRE flow.
    HostCapability[HostCapability["TRUST_FIRST_ONBOARDING_ARM1"] = 4] = "TRUST_FIRST_ONBOARDING_ARM1";
    // Enables the experimental "Trust First" (Arm 2 - "Welcome Screen")
    // onboarding UI flow, bypassing the standard FRE flow.
    HostCapability[HostCapability["TRUST_FIRST_ONBOARDING_ARM2"] = 5] = "TRUST_FIRST_ONBOARDING_ARM2";
    // Glic host supports sharing additional image context.
    HostCapability[HostCapability["SHARE_ADDITIONAL_IMAGE_CONTEXT"] = 6] = "SHARE_ADDITIONAL_IMAGE_CONTEXT";
    // Enables the PDF Zero State Web UI.
    HostCapability[HostCapability["PDF_ZERO_STATE"] = 7] = "PDF_ZERO_STATE";
    // Indicates that the host supports the invoke mechanism.
    HostCapability[HostCapability["INVOKE"] = 8] = "INVOKE";
    // Indicates that the host does not support Live Mode.
    HostCapability[HostCapability["NO_LIVE_MODE"] = 9] = "NO_LIVE_MODE";
    // Indicates that the host supports auto browse attempting login using Sign in
    // with Google.
    HostCapability[HostCapability["AUTO_LOGIN_SIGN_IN_WITH_GOOGLE"] = 10] = "AUTO_LOGIN_SIGN_IN_WITH_GOOGLE";
    // Indicates that the host supports sharing images via the invoke mechanism.
    HostCapability[HostCapability["SHARE_IMAGE_VIA_INVOKE"] = 11] = "SHARE_IMAGE_VIA_INVOKE";
    // Indicates that the host supports image drag and drop from the web
    HostCapability[HostCapability["IMG_WEB_DRAG_DROP"] = 12] = "IMG_WEB_DRAG_DROP";
    // Indicates that the host does not show the WebUi preloader.
    HostCapability[HostCapability["NO_WEB_UI_LOADER"] = 13] = "NO_WEB_UI_LOADER";
    // Indicates that the host enforces paste eligibility checks.
    HostCapability[HostCapability["ENFORCES_PASTE_ELIGIBILITY"] = 14] = "ENFORCES_PASTE_ELIGIBILITY";
    // Indicates that the host supports autofilling OTPs.
    HostCapability[HostCapability["ATTEMPT_OTP_FILLING"] = 15] = "ATTEMPT_OTP_FILLING";
    // Indicates that the host supports exposing Chrome-defined tools.
    HostCapability[HostCapability["CHROME_TOOLS"] = 16] = "CHROME_TOOLS";
    // Indicates that skills V2 are supported.
    HostCapability[HostCapability["SKILLS_V2"] = 17] = "SKILLS_V2";
    // Indicates that the host supports bytes extraction of embedded PDF rendered
    // in the Chrome PDF viewer.
    HostCapability[HostCapability["EMBEDDED_PDF_BYTES_EXTRACTION"] = 18] = "EMBEDDED_PDF_BYTES_EXTRACTION";
    // Indicates that the host operates in NoWebview mode.
    HostCapability[HostCapability["NO_WEBVIEW"] = 19] = "NO_WEBVIEW";
    // Indicates that the host supports Send Tab to Self APIs.
    HostCapability[HostCapability["SEND_TAB_TO_SELF"] = 20] = "SEND_TAB_TO_SELF";
})(HostCapability || (HostCapability = {}));
// Lists capabilities that the glic web client may support.
export var ClientCapabilities;
(function (ClientCapabilities) {
    // The glic web client does not use favicons in TabData, so they can
    // be omitted from TabData.
    ClientCapabilities[ClientCapabilities["IGNORES_TAB_DATA_FAVICONS"] = 0] = "IGNORES_TAB_DATA_FAVICONS";
})(ClientCapabilities || (ClientCapabilities = {}));
// Describes the duration of the actions in the task.  This is used by the actor
// to customize the task UI.
export var TaskDuration;
(function (TaskDuration) {
    // The task has actions that permit user observation and intervention in the
    // browser.
    TaskDuration[TaskDuration["DEFAULT"] = 1] = "DEFAULT";
    // The task has fast actions that do not permit observation and intervention.
    TaskDuration[TaskDuration["TRANSIENT"] = 2] = "TRANSIENT";
})(TaskDuration || (TaskDuration = {}));
// Describes how long the user grants the actor with the permission to actuate.
// Used when the actor is to actuate with sensitive data, such as entering
// payment information or login credentials.
export var UserGrantedPermissionDuration;
(function (UserGrantedPermissionDuration) {
    // The user only grants a one-time permission. The user will be asked again.
    // This is the default behavior.
    UserGrantedPermissionDuration[UserGrantedPermissionDuration["ONE_TIME"] = 0] = "ONE_TIME";
    // The user grants a permission to always allow the actor to actuate with
    // sensitive data. The persistence of this permission is defined differently
    // for different features.
    UserGrantedPermissionDuration[UserGrantedPermissionDuration["ALWAYS_ALLOW"] = 1] = "ALWAYS_ALLOW";
})(UserGrantedPermissionDuration || (UserGrantedPermissionDuration = {}));
// Describes the login method for the credential.
export var CredentialType;
(function (CredentialType) {
    // Used to fill in a username/password form.
    CredentialType[CredentialType["PASSWORD"] = 0] = "PASSWORD";
    // Used with an identity provider (e.g. Sign in with Google).
    CredentialType[CredentialType["FEDERATED"] = 1] = "FEDERATED";
})(CredentialType || (CredentialType = {}));
// Mode for specific feature behaviors.
export var FeatureMode;
(function (FeatureMode) {
    FeatureMode[FeatureMode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FeatureMode[FeatureMode["IMAGE_GENERATION"] = 1] = "IMAGE_GENERATION";
    FeatureMode[FeatureMode["ACTUATION"] = 2] = "ACTUATION";
    // Client feature mode to initiate actuation for Experimental Triggering.
    FeatureMode[FeatureMode["EXPERIMENTAL_TRIGGERING"] = 3] = "EXPERIMENTAL_TRIGGERING";
    // Client feature mode to initiate actuation for Universal Cart.
    FeatureMode[FeatureMode["UNIVERSAL_CART"] = 4] = "UNIVERSAL_CART";
    // Client feature mode for Promotion Page.
    FeatureMode[FeatureMode["PROMOTION_PAGE"] = 5] = "PROMOTION_PAGE";
    // Client feature mode to initiate actuation for Password Change.
    FeatureMode[FeatureMode["PASSWORD_CHANGE"] = 6] = "PASSWORD_CHANGE";
    // Client feature mode for Web Continuity.
    FeatureMode[FeatureMode["WEB_CONTINUITY"] = 7] = "WEB_CONTINUITY";
})(FeatureMode || (FeatureMode = {}));
// The panel can be in one of these three states.
export var PanelStateKind;
(function (PanelStateKind) {
    // The panel is hidden.
    PanelStateKind[PanelStateKind["HIDDEN"] = 0] = "HIDDEN";
    // The panel is a floating window, detached from any browser window.
    PanelStateKind[PanelStateKind["DETACHED"] = 1] = "DETACHED";
    // The panel is a side panel, attached to a browser window.
    PanelStateKind[PanelStateKind["ATTACHED"] = 2] = "ATTACHED";
})(PanelStateKind || (PanelStateKind = {}));
// The platform glic is running on.
export var Platform;
(function (Platform) {
    Platform[Platform["UNKNOWN"] = 0] = "UNKNOWN";
    Platform[Platform["MAC_OS"] = 1] = "MAC_OS";
    Platform[Platform["WINDOWS"] = 2] = "WINDOWS";
    Platform[Platform["LINUX"] = 3] = "LINUX";
    Platform[Platform["CHROME_OS"] = 4] = "CHROME_OS";
    Platform[Platform["ANDROID"] = 5] = "ANDROID";
})(Platform || (Platform = {}));
// The form factor of the device glic is running on.
export var FormFactor;
(function (FormFactor) {
    FormFactor[FormFactor["UNKNOWN"] = 0] = "UNKNOWN";
    FormFactor[FormFactor["DESKTOP"] = 1] = "DESKTOP";
    FormFactor[FormFactor["PHONE"] = 2] = "PHONE";
    FormFactor[FormFactor["TABLET"] = 3] = "TABLET";
})(FormFactor || (FormFactor = {}));
// Represents an override of the First Run Experience (FRE).
export var FreOverride;
(function (FreOverride) {
    FreOverride[FreOverride["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    // Deprecated: No longer used.
    // Variation that requires text input from the user to unlock full client.
    FreOverride[FreOverride["TRUST_FIRST_TEXT"] = 1] = "TRUST_FIRST_TEXT";
    // Variation that requires mouse click from the user to unlock full client.
    FreOverride[FreOverride["TRUST_FIRST_CLICK"] = 2] = "TRUST_FIRST_CLICK";
    // Variation that starts with full client unlocked and shows inline consent.
    FreOverride[FreOverride["TRUST_FIRST_INLINE"] = 3] = "TRUST_FIRST_INLINE";
})(FreOverride || (FreOverride = {}));
// Entry points that can trigger the opening of the panel.
export var InvocationSource;
(function (InvocationSource) {
    // Button in the OS.
    InvocationSource[InvocationSource["OS_BUTTON"] = 0] = "OS_BUTTON";
    // Menu from button in the OS.
    InvocationSource[InvocationSource["OS_BUTTON_MENU"] = 1] = "OS_BUTTON_MENU";
    // OS-level hotkey.
    InvocationSource[InvocationSource["OS_HOTKEY"] = 2] = "OS_HOTKEY";
    // Button in top-chrome.
    InvocationSource[InvocationSource["TOP_CHROME_BUTTON"] = 3] = "TOP_CHROME_BUTTON";
    // First run experience.
    InvocationSource[InvocationSource["FRE"] = 4] = "FRE";
    // From the profile picker.
    InvocationSource[InvocationSource["PROFILE_PICKER"] = 5] = "PROFILE_PICKER";
    // From tab strip nudge.
    InvocationSource[InvocationSource["NUDGE"] = 6] = "NUDGE";
    // From 3-dot menu.
    InvocationSource[InvocationSource["THREE_DOTS_MENU"] = 7] = "THREE_DOTS_MENU";
    // An unsupported/unknown source.
    InvocationSource[InvocationSource["UNSUPPORTED"] = 8] = "UNSUPPORTED";
    // From the What's New page.
    InvocationSource[InvocationSource["WHATS_NEW"] = 9] = "WHATS_NEW";
    // User clicked the sign-in button and signed in.
    InvocationSource[InvocationSource["AFTER_SIGN_IN"] = 10] = "AFTER_SIGN_IN";
    // User shared a tab via the tab context menu.
    InvocationSource[InvocationSource["SHARED_TAB"] = 11] = "SHARED_TAB";
    // From the actor task icon.
    InvocationSource[InvocationSource["ACTOR_TASK_ICON"] = 12] = "ACTOR_TASK_ICON";
    // User shared an image via the context menu.
    InvocationSource[InvocationSource["SHARED_IMAGE"] = 13] = "SHARED_IMAGE";
    // From the handoff button.
    InvocationSource[InvocationSource["HANDOFF_BUTTON"] = 14] = "HANDOFF_BUTTON";
    // From invoking skills.
    InvocationSource[InvocationSource["SKILLS"] = 15] = "SKILLS";
    // Automatically opened from contextual cueing.
    InvocationSource[InvocationSource["AUTO_OPENED_BY_CONTEXTUAL_CUE"] = 16] = "AUTO_OPENED_BY_CONTEXTUAL_CUE";
    // User clicked the summarize button in the PDF viewer.
    InvocationSource[InvocationSource["PDF_SUMMARIZE_BUTTON"] = 17] = "PDF_SUMMARIZE_BUTTON";
    // From a navigation capture.
    InvocationSource[InvocationSource["NAVIGATION_CAPTURE"] = 18] = "NAVIGATION_CAPTURE";
    // Automatically opened for a PDF.
    InvocationSource[InvocationSource["AUTO_OPENED_FOR_PDF"] = 19] = "AUTO_OPENED_FOR_PDF";
    // Selection hotkey.
    InvocationSource[InvocationSource["CAPTURE_REGION_HOTKEY"] = 20] = "CAPTURE_REGION_HOTKEY";
    // From the in-product-help (IPH) entrypoint.
    InvocationSource[InvocationSource["IPH"] = 21] = "IPH";
    // User clicked an anchored contextual cue chip.
    InvocationSource[InvocationSource["ANCHORED_CONTEXTUAL_CUE"] = 22] = "ANCHORED_CONTEXTUAL_CUE";
    // From the context menu.
    InvocationSource[InvocationSource["WEB_CONTENTS_CONTEXT_MENU"] = 23] = "WEB_CONTENTS_CONTEXT_MENU";
    // User clicked on text selection nudge.
    InvocationSource[InvocationSource["TEXT_SELECTION_NUDGE"] = 24] = "TEXT_SELECTION_NUDGE";
    // User clicked on text selection widget.
    InvocationSource[InvocationSource["TEXT_SELECTION_WIDGET"] = 25] = "TEXT_SELECTION_WIDGET";
    // Automatic summarization upon opening.
    // Deprecated.
    InvocationSource[InvocationSource["ZERO_STATE_AUTO_SUMMARIZE"] = 26] = "ZERO_STATE_AUTO_SUMMARIZE";
    // From the universal cart.
    InvocationSource[InvocationSource["UNIVERSAL_CART"] = 27] = "UNIVERSAL_CART";
    // Used exclusively for invocations originating from the
    // GlicExperimentalTriggeringMessageHandler.
    InvocationSource[InvocationSource["EXPERIMENTAL_TRIGGERING"] = 28] = "EXPERIMENTAL_TRIGGERING";
    // Actuation triggered by the password change feature.
    InvocationSource[InvocationSource["PASSWORD_CHANGE"] = 29] = "PASSWORD_CHANGE";
    // From an Autofill action.
    InvocationSource[InvocationSource["AUTOFILL"] = 30] = "AUTOFILL";
    // Button in the toolbar.
    InvocationSource[InvocationSource["TOOLBAR_BUTTON"] = 31] = "TOOLBAR_BUTTON";
    // User clicked on an Indigo page action.
    InvocationSource[InvocationSource["INDIGO_PAGE_ACTION"] = 32] = "INDIGO_PAGE_ACTION";
    // User dropped a file/image onto the GLIC panel.
    InvocationSource[InvocationSource["WEB_DRAG_DROP"] = 33] = "WEB_DRAG_DROP";
    // From the promotion page.
    InvocationSource[InvocationSource["PROMOTION_PAGE"] = 34] = "PROMOTION_PAGE";
    // Side panel remained open on a new tab.
    InvocationSource[InvocationSource["DAISY_CHAIN_ON_NEW_TAB"] = 35] = "DAISY_CHAIN_ON_NEW_TAB";
    // Side panel remained open on a follow-link.
    InvocationSource[InvocationSource["DAISY_CHAIN_ON_FOLLOW_LINK"] = 36] = "DAISY_CHAIN_ON_FOLLOW_LINK";
    // User switched conversation.
    InvocationSource[InvocationSource["CONVERSATION_SWITCH"] = 37] = "CONVERSATION_SWITCH";
    // User detached or attached the panel.
    InvocationSource[InvocationSource["DETACH_ATTACH_BUTTON"] = 38] = "DETACH_ATTACH_BUTTON";
    // Restarted from a restored tab.
    InvocationSource[InvocationSource["TAB_RESTORE"] = 39] = "TAB_RESTORE";
    // Implicitly focused or revealed, e.g., on tab switch or re-focus.
    InvocationSource[InvocationSource["RESHOW_INACTIVE"] = 40] = "RESHOW_INACTIVE";
    // From the tab context menu.
    InvocationSource[InvocationSource["TAB_CONTEXT_MENU"] = 41] = "TAB_CONTEXT_MENU";
    // From Web Continuity.
    InvocationSource[InvocationSource["WEB_CONTINUITY"] = 42] = "WEB_CONTINUITY";
    // From the history page chat linkout.
    InvocationSource[InvocationSource["HISTORY_PAGE_CHAT_LINKOUT"] = 43] = "HISTORY_PAGE_CHAT_LINKOUT";
    // From the Context Hub topics UI.
    InvocationSource[InvocationSource["CONTEXT_HUB_TOPICS"] = 44] = "CONTEXT_HUB_TOPICS";
    // From the Context Hub AutoTodos UI.
    InvocationSource[InvocationSource["CONTEXT_HUB_AUTO_TODOS"] = 45] = "CONTEXT_HUB_AUTO_TODOS";
    // User clicked "Ask Gemini" on a link in the context menu. Android only;
    // desktop has no link-specific item.
    InvocationSource[InvocationSource["WEB_CONTENTS_CONTEXT_MENU_LINK"] = 46] = "WEB_CONTENTS_CONTEXT_MENU_LINK";
    // User clicked "Ask Gemini" on the page in the context menu. On desktop,
    // also clicks that don't attach the selection.
    InvocationSource[InvocationSource["WEB_CONTENTS_CONTEXT_MENU_PAGE"] = 47] = "WEB_CONTENTS_CONTEXT_MENU_PAGE";
    // User clicked "Ask Gemini" on selected text, from the context menu on
    // desktop (when the selection is attached) or the text selection menu on
    // Android.
    InvocationSource[InvocationSource["WEB_CONTENTS_CONTEXT_MENU_TEXT_SELECTION"] = 48] = "WEB_CONTENTS_CONTEXT_MENU_TEXT_SELECTION";
    // Invoked by the actor GeminiPanelTool.
    InvocationSource[InvocationSource["ACTOR_TOOL"] = 49] = "ACTOR_TOOL";
})(InvocationSource || (InvocationSource = {}));
// Target for actuation.
export var ActuationTarget;
(function (ActuationTarget) {
    // Will default to the agent if the target is unknown.
    ActuationTarget[ActuationTarget["UNKNOWN"] = 0] = "UNKNOWN";
    // Agent infers the best location based on the prompt.
    ActuationTarget[ActuationTarget["AGENT_DECIDES"] = 1] = "AGENT_DECIDES";
    // Forces actuation on the initiating tab.
    ActuationTarget[ActuationTarget["CURRENT_TAB"] = 2] = "CURRENT_TAB";
    // Forces actuation in a new tab.
    ActuationTarget[ActuationTarget["NEW_TAB"] = 3] = "NEW_TAB";
    // Forces actuation on the target surface, if the surface is a valid tab.
    // Note: kTargetSurface can be different than kCurrentTab if the target
    // surface is not the foregrounded tab. This option has no effect if the
    // surface does not resolve to a valid tab.
    ActuationTarget[ActuationTarget["TARGET_SURFACE"] = 4] = "TARGET_SURFACE";
})(ActuationTarget || (ActuationTarget = {}));
