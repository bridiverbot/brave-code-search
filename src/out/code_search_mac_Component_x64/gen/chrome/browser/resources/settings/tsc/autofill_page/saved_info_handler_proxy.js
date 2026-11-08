// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Type of HaTS survey, used to gauge user perception on a data management
 * surface.
 */
// LINT.IfChange(DataManagementSurvey)
export var DataManagementSurvey;
(function (DataManagementSurvey) {
    DataManagementSurvey[DataManagementSurvey["YOUR_SAVED_INFO"] = 0] = "YOUR_SAVED_INFO";
    DataManagementSurvey[DataManagementSurvey["PASSWORDS"] = 1] = "PASSWORDS";
    DataManagementSurvey[DataManagementSurvey["PAYMENTS"] = 2] = "PAYMENTS";
    DataManagementSurvey[DataManagementSurvey["CONTACT_INFO"] = 3] = "CONTACT_INFO";
    DataManagementSurvey[DataManagementSurvey["IDENTITY_DOCS"] = 4] = "IDENTITY_DOCS";
    DataManagementSurvey[DataManagementSurvey["TRAVEL"] = 5] = "TRAVEL";
})(DataManagementSurvey || (DataManagementSurvey = {}));
export class SavedInfoHandlerImpl {
    getPasswordCount() {
        return sendWithPromise('getPasswordCount');
    }
    getLoyaltyCardsCount() {
        return sendWithPromise('getLoyaltyCardsCount');
    }
    requestDataManagementSurvey(survey, isFromHomePage) {
        chrome.send('requestDataManagementSurvey', [
            survey,
            isFromHomePage,
        ]);
    }
    static getInstance() {
        return instance || (instance = new SavedInfoHandlerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
