// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { SuggestionsFromGeminiAction, SuggestionsFromGeminiEntryPoint, YourSavedInfoDataCategory, YourSavedInfoDataChip, YourSavedInfoRelatedService } from 'chrome://settings/settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestMetricsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'recordAction',
            'recordBooleanHistogram',
            'recordSettingsPageHistogram',
            'recordPrivacyGuideFlowLengthHistogram',
            'recordSafeBrowsingInteractionHistogram',
            'recordPrivacyGuideNextNavigationHistogram',
            'recordPrivacyGuideEntryExitHistogram',
            'recordPrivacyGuideSettingsStatesHistogram',
            'recordPrivacyGuideStepsEligibleAndReachedHistogram',
            'recordDeleteBrowsingDataAction',
            'recordClearBrowsingDataCancelled',
            'recordSafetyHubAbusiveNotificationPermissionRevocationInteractionsHistogram',
            'recordSafetyHubCardStateClicked',
            'recordSafetyHubDashboardAnyWarning',
            'recordSafetyHubEntryPointClicked',
            'recordSafetyHubEntryPointShown',
            'recordSafetyHubImpression',
            'recordSafetyHubInteraction',
            'recordSafetyHubModuleWarningImpression',
            'recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram',
            'recordSafetyHubUnusedSitePermissionsModuleListCountHistogram',
            // 
            'recordAiPageInteractions',
            'recordAiPageHistorySearchInteractions',
            'recordAiPageComposeInteractions',
            'recordAiPageSuggestionsInteractions',
            'recordSettingsSearchExitReason',
            'recordSettingsSearchResultDwellTime',
            'recordSettingsNavCategoryClicked',
            'recordSettingsSearchQueryEntered',
            'recordAutofillSettingsReferrer',
            'recordYourSavedInfoCategoryClick',
            'recordYourSavedInfoDataChipClick',
            'recordYourSavedInfoRelatedServiceClick',
            'recordSuggestionsFromGeminiEntryPointClick',
            'recordSuggestionsFromGeminiAction',
        ]);
    }
    recordSettingsSearchExitReason(reason) {
        this.methodCalled('recordSettingsSearchExitReason', reason);
    }
    recordSettingsSearchResultDwellTime(time) {
        this.methodCalled('recordSettingsSearchResultDwellTime', time);
    }
    recordSettingsNavCategoryClicked() {
        this.methodCalled('recordSettingsNavCategoryClicked');
    }
    recordSettingsSearchQueryEntered() {
        this.methodCalled('recordSettingsSearchQueryEntered');
    }
    recordAction(action) {
        this.methodCalled('recordAction', action);
    }
    recordBooleanHistogram(histogramName, visible) {
        this.methodCalled('recordBooleanHistogram', [histogramName, visible]);
    }
    recordAutofillSettingsReferrer(histogramName, referrer) {
        this.methodCalled('recordAutofillSettingsReferrer', [histogramName, referrer]);
    }
    recordSettingsPageHistogram(interaction) {
        this.methodCalled('recordSettingsPageHistogram', interaction);
    }
    recordSafeBrowsingInteractionHistogram(interaction) {
        this.methodCalled('recordSafeBrowsingInteractionHistogram', interaction);
    }
    recordPrivacyGuideNextNavigationHistogram(interaction) {
        this.methodCalled('recordPrivacyGuideNextNavigationHistogram', interaction);
    }
    recordPrivacyGuideEntryExitHistogram(interaction) {
        this.methodCalled('recordPrivacyGuideEntryExitHistogram', interaction);
    }
    recordPrivacyGuideSettingsStatesHistogram(state) {
        this.methodCalled('recordPrivacyGuideSettingsStatesHistogram', state);
    }
    recordPrivacyGuideFlowLengthHistogram(steps) {
        this.methodCalled('recordPrivacyGuideFlowLengthHistogram', steps);
    }
    recordPrivacyGuideStepsEligibleAndReachedHistogram(status) {
        this.methodCalled('recordPrivacyGuideStepsEligibleAndReachedHistogram', status);
    }
    recordDeleteBrowsingDataAction(action) {
        this.methodCalled('recordDeleteBrowsingDataAction', action);
    }
    recordClearBrowsingDataCancelled() {
        this.methodCalled('recordClearBrowsingDataCancelled');
    }
    recordSafetyHubAbusiveNotificationPermissionRevocationInteractionsHistogram(interaction) {
        this.methodCalled('recordSafetyHubAbusiveNotificationPermissionRevocationInteractionsHistogram', interaction);
    }
    recordSafetyHubCardStateClicked(histogramName, state) {
        this.methodCalled('recordSafetyHubCardStateClicked', [histogramName, state]);
    }
    recordSafetyHubDashboardAnyWarning(visible) {
        this.methodCalled('recordSafetyHubDashboardAnyWarning', visible);
    }
    recordSafetyHubEntryPointClicked(page) {
        this.methodCalled('recordSafetyHubEntryPointClicked', page);
    }
    recordSafetyHubEntryPointShown(page) {
        this.methodCalled('recordSafetyHubEntryPointShown', page);
    }
    recordSafetyHubImpression(surface) {
        this.methodCalled('recordSafetyHubImpression', surface);
    }
    recordSafetyHubInteraction(surface) {
        this.methodCalled('recordSafetyHubInteraction', surface);
    }
    recordSafetyHubModuleWarningImpression(module) {
        this.methodCalled('recordSafetyHubModuleWarningImpression', module);
    }
    recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(interaction) {
        this.methodCalled('recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram', interaction);
    }
    recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(suggestions) {
        this.methodCalled('recordSafetyHubUnusedSitePermissionsModuleListCountHistogram', suggestions);
    }
    // 
    recordAiPageInteractions(interaction) {
        this.methodCalled('recordAiPageInteractions', interaction);
    }
    recordAiPageHistorySearchInteractions(interaction) {
        this.methodCalled('recordAiPageHistorySearchInteractions', interaction);
    }
    recordAiPageComposeInteractions(interaction) {
        this.methodCalled('recordAiPageComposeInteractions', interaction);
    }
    recordAiPageSuggestionsInteractions(interaction) {
        this.methodCalled('recordAiPageSuggestionsInteractions', interaction);
    }
    recordYourSavedInfoCategoryClick(category) {
        this.methodCalled('recordYourSavedInfoCategoryClick', [category]);
        if (category !== YourSavedInfoDataCategory.COUNT) {
            this.recordAction(`Settings.YourSavedInfo.CategoryClick.${YourSavedInfoDataCategory[category]}`);
        }
    }
    recordYourSavedInfoDataChipClick(chip) {
        this.methodCalled('recordYourSavedInfoDataChipClick', [chip]);
        if (chip !== YourSavedInfoDataChip.COUNT) {
            this.recordAction(`Settings.YourSavedInfo.ChipClick.${YourSavedInfoDataChip[chip]}`);
        }
    }
    recordYourSavedInfoRelatedServiceClick(service) {
        this.methodCalled('recordYourSavedInfoRelatedServiceClick', [service]);
        if (service !== YourSavedInfoRelatedService.COUNT) {
            this.recordAction(`Settings.YourSavedInfo.RelatedServiceClick.${YourSavedInfoRelatedService[service]}`);
        }
    }
    recordSuggestionsFromGeminiEntryPointClick(entryPoint) {
        this.methodCalled('recordSuggestionsFromGeminiEntryPointClick', entryPoint);
        if (entryPoint !== SuggestionsFromGeminiEntryPoint.COUNT) {
            const actionMap = {
                [SuggestionsFromGeminiEntryPoint.YOUR_SAVED_INFO]: 'PersonalContext.Settings.EntryPoint.AutofillAndPasswordsSettings',
                [SuggestionsFromGeminiEntryPoint.TRAVEL]: 'PersonalContext.Settings.EntryPoint.TravelSettings',
                [SuggestionsFromGeminiEntryPoint.SHOPPING]: 'PersonalContext.Settings.EntryPoint.ShoppingSettings',
                [SuggestionsFromGeminiEntryPoint.IDENTITY_DOCS]: 'PersonalContext.Settings.EntryPoint.IdentityDocsSettings',
            };
            this.recordAction(actionMap[entryPoint]);
        }
    }
    recordSuggestionsFromGeminiAction(action) {
        this.methodCalled('recordSuggestionsFromGeminiAction', action);
        if (action !== SuggestionsFromGeminiAction.COUNT) {
            const actionMap = {
                [SuggestionsFromGeminiAction.MANAGE_CONNECTED_APPS_CLICK]: 'PersonalContext.Settings.ManageConnectedAppsClick',
                [SuggestionsFromGeminiAction.TOGGLE_ON]: 'PersonalContext.Settings.ToggledOn',
                [SuggestionsFromGeminiAction.TOGGLE_OFF]: 'PersonalContext.Settings.ToggledOff',
            };
            this.recordAction(actionMap[action]);
        }
    }
}
