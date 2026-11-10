// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// These values must stay in sync with
// optimization_guide::prefs::FeatureOptInState in
// components/optimization_guide/core/feature_registry/feature_keys.h.
export var FeatureOptInState;
(function (FeatureOptInState) {
    FeatureOptInState[FeatureOptInState["NOT_INITIALIZED"] = 0] = "NOT_INITIALIZED";
    FeatureOptInState[FeatureOptInState["ENABLED"] = 1] = "ENABLED";
    FeatureOptInState[FeatureOptInState["DISABLED"] = 2] = "DISABLED";
})(FeatureOptInState || (FeatureOptInState = {}));
// LINT.IfChange(ModelExecutionEnterprisePolicyValue)
export var ModelExecutionEnterprisePolicyValue;
(function (ModelExecutionEnterprisePolicyValue) {
    ModelExecutionEnterprisePolicyValue[ModelExecutionEnterprisePolicyValue["ALLOW"] = 0] = "ALLOW";
    ModelExecutionEnterprisePolicyValue[ModelExecutionEnterprisePolicyValue["ALLOW_WITHOUT_LOGGING"] = 1] = "ALLOW_WITHOUT_LOGGING";
    ModelExecutionEnterprisePolicyValue[ModelExecutionEnterprisePolicyValue["DISABLE"] = 2] = "DISABLE";
})(ModelExecutionEnterprisePolicyValue || (ModelExecutionEnterprisePolicyValue = {}));
// LINT.ThenChange(/components/optimization_guide/core/feature_registry/enterprise_policy_registry.h:EnterprisePolicyValue)
export var ChromeSuggestionsSettingsValue;
(function (ChromeSuggestionsSettingsValue) {
    ChromeSuggestionsSettingsValue[ChromeSuggestionsSettingsValue["ENABLED"] = 0] = "ENABLED";
    ChromeSuggestionsSettingsValue[ChromeSuggestionsSettingsValue["DISABLED"] = 1] = "DISABLED";
})(ChromeSuggestionsSettingsValue || (ChromeSuggestionsSettingsValue = {}));
// Exporting pref names so that they can be referenced by tests.
export var SettingsAiPageFeaturePrefName;
(function (SettingsAiPageFeaturePrefName) {
    SettingsAiPageFeaturePrefName["HISTORY_SEARCH"] = "optimization_guide.history_search_setting_state";
    SettingsAiPageFeaturePrefName["COMPOSE"] = "optimization_guide.compose_setting_state";
    SettingsAiPageFeaturePrefName["AUTOFILL_AI"] = "autofill.autofill_ai.opt_in_status";
    SettingsAiPageFeaturePrefName["CONTEXTUAL_CUEING"] = "optimization_guide.contextual_cueing_setting_state";
})(SettingsAiPageFeaturePrefName || (SettingsAiPageFeaturePrefName = {}));
// Exporting enterprise pref names so that they can be referenced by tests.
export var AiEnterpriseFeaturePrefName;
(function (AiEnterpriseFeaturePrefName) {
    AiEnterpriseFeaturePrefName["HISTORY_SEARCH"] = "optimization_guide.model_execution.history_search_enterprise_policy_allowed";
    AiEnterpriseFeaturePrefName["COMPOSE"] = "optimization_guide.model_execution.compose_enterprise_policy_allowed";
    AiEnterpriseFeaturePrefName["AUTOFILL_AI"] = "optimization_guide.model_execution.autofill_prediction_improvements_enterprise_policy_allowed";
    AiEnterpriseFeaturePrefName["CONTEXTUAL_CUEING"] = "contextual_cueing.chrome_suggestions_settings";
})(AiEnterpriseFeaturePrefName || (AiEnterpriseFeaturePrefName = {}));
export var AiPageActions;
(function (AiPageActions) {
    AiPageActions["HISTORY_SEARCH_ENABLED"] = "Settings.AiPage.HistorySearch.Enabled";
    AiPageActions["HISTORY_SEARCH_DISABLED"] = "Settings.AiPage.HistorySearch.Disabled";
    AiPageActions["HISTORY_SEARCH_FEATURE_LINK_CLICKED"] = "Settings.AiPage.HistorySearch.FeatureLinkClicked";
    AiPageActions["HISTORY_SEARCH_LEARN_MORE_CLICKED"] = "Settings.AiPage.HistorySearch.LearnMoreClicked";
    AiPageActions["COMPOSE_LEARN_MORE_CLICKED"] = "Settings.AiPage.Compose.LearnMoreClicked";
    AiPageActions["COMPOSE_PROACTIVE_NUDGE_ENABLED"] = "Settings.AiPage.Compose.ProactiveNudgeEnabled";
    AiPageActions["COMPOSE_PROACTIVE_NUDGE_DISABLED"] = "Settings.AiPage.Compose.ProactiveNudgeDisabled";
    AiPageActions["GLIC_COLLAPSED_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicCollapsed.LearnMoreClicked";
    AiPageActions["GLIC_SHORTCUTS_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicShortcuts.LearnMoreClicked";
    AiPageActions["GLIC_SHORTCUTS_LAUNCHER_TOGGLE_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicShortcuts.LauncherToggleLearnMoreClicked";
    AiPageActions["GLIC_SHORTCUTS_LOCATION_TOGGLE_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicShortcuts.LocationToggleLearnMoreClicked";
    AiPageActions["GLIC_SHORTCUTS_TAB_ACCESS_TOGGLE_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicShortcuts.TabAccessToggleLearnMoreClicked";
    AiPageActions["GLIC_SHORTCUTS_DEFAULT_TAB_ACCESS_TOGGLE_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicShortcuts.DefaultTabAccessToggleLearnMoreClicked";
    AiPageActions["GLIC_SHORTCUTS_WEB_ACTUATION_TOGGLE_LEARN_MORE_CLICKED"] = "Settings.AiPage.GlicShortcuts.WebActuationToggleLearnMoreClicked";
    AiPageActions["AI_SUGGESTIONS_ENABLED"] = "Settings.AiPage.AiSuggestions.Enabled";
    AiPageActions["AI_SUGGESTIONS_DISABLED"] = "Settings.AiPage.AiSuggestions.Disabled";
    AiPageActions["AI_SUGGESTIONS_LEARN_MORE_CLICKED"] = "Settings.AiPage.AiSuggestions.LearnMoreClicked";
    AiPageActions["AI_SUGGESTIONS_SYNC_SETTINGS_CLICKED"] = "Settings.AiPage.AiSuggestions.SyncSettingsClicked";
})(AiPageActions || (AiPageActions = {}));
