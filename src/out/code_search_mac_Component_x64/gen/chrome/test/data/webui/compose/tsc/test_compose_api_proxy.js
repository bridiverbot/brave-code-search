// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ComposeUntrustedDialogCallbackRouter, StyleModifier, UserFeedback } from 'chrome-untrusted://compose/compose.mojom-webui.js';
import { ComposeStatus } from 'chrome-untrusted://compose/compose_enums.mojom-webui.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
function getDefaultComposeState() {
    return {
        webuiState: '',
        feedback: UserFeedback.kUserFeedbackUnspecified,
        hasPendingRequest: false,
        response: null,
    };
}
function getDefaultOpenMetadata() {
    return {
        freComplete: true,
        msbbState: true,
        composeState: getDefaultComposeState(),
        initialInput: '',
        textSelected: false,
        configurableParams: {
            minWordLimit: 2,
            maxWordLimit: 50,
            maxCharacterLimit: 100,
        },
    };
}
function getDefaultUndoRedoComposeState() {
    return {
        hasPendingRequest: false,
        response: {
            status: ComposeStatus.kOk,
            undoAvailable: true,
            redoAvailable: true,
            providedByUser: false,
            result: 'some result',
            onDeviceEvaluationUsed: false,
            triggeredFromModifier: false,
        },
        webuiState: JSON.stringify({
            input: 'some other input',
            selectedLength: StyleModifier.kUnset,
            selectedTone: StyleModifier.kUnset,
        }),
        feedback: UserFeedback.kUserFeedbackUnspecified,
    };
}
export class TestComposeApiProxy extends TestBrowserProxy {
    openMetadata_ = getDefaultOpenMetadata();
    router_ = new ComposeUntrustedDialogCallbackRouter();
    remote = this.router_.$.bindNewPipeAndPassRemote();
    undoResponse_ = null;
    responseBeforeError_ = null;
    redoResponse_ = null;
    constructor() {
        super([
            'acceptComposeResult',
            'logCancelEdit',
            'closeUi',
            'compose',
            'rewrite',
            'logEditInput',
            'openBugReportingLink',
            'openComposeLearnMorePage',
            'openEnterpriseComposeLearnMorePage',
            'openFeedbackSurveyLink',
            'openSignInPage',
            'requestInitialState',
            'saveWebuiState',
            'setUserFeedback',
            'showUi',
            'undo',
            'recoverFromErrorState',
            'editResult',
            'redo',
        ]);
    }
    acceptComposeResult() {
        this.methodCalled('acceptComposeResult');
        return Promise.resolve(true);
    }
    logCancelEdit() {
        this.methodCalled('logCancelEdit');
    }
    completeFirstRun() { }
    acknowledgeConsentDisclaimer() { }
    approveConsent() { }
    closeUi(reason) {
        this.methodCalled('closeUi', reason);
    }
    compose(input, mode, edited) {
        this.methodCalled('compose', { input, mode, edited });
    }
    rewrite(style) {
        this.methodCalled('rewrite', style);
    }
    logEditInput() {
        this.methodCalled('logEditInput');
    }
    undo() {
        this.methodCalled('undo');
        return Promise.resolve(this.undoResponse_);
    }
    recoverFromErrorState() {
        this.methodCalled('recoverFromErrorState');
        return Promise.resolve(this.responseBeforeError_);
    }
    editResult(result) {
        this.methodCalled('editResult', result);
        return Promise.resolve(false);
    }
    redo() {
        this.methodCalled('redo');
        return Promise.resolve(this.redoResponse_);
    }
    getRouter() {
        return this.router_;
    }
    openBugReportingLink() {
        this.methodCalled('openBugReportingLink');
    }
    openComposeLearnMorePage() {
        this.methodCalled('openComposeLearnMorePage');
    }
    openEnterpriseComposeLearnMorePage() {
        this.methodCalled('openEnterpriseComposeLearnMorePage');
    }
    openFeedbackSurveyLink() {
        this.methodCalled('openFeedbackSurveyLink');
    }
    openSignInPage() {
        this.methodCalled('openSignInPage');
    }
    openComposeSettings() { }
    requestInitialState() {
        this.methodCalled('requestInitialState');
        return Promise.resolve(this.openMetadata_);
    }
    saveWebuiState(state) {
        this.methodCalled('saveWebuiState', state);
    }
    setUserFeedback(feedback) {
        this.methodCalled('setUserFeedback', feedback);
    }
    setOpenMetadata(overrides, composeStateOverrides = {}) {
        this.openMetadata_ = Object.assign(getDefaultOpenMetadata(), overrides, {
            composeState: Object.assign(getDefaultComposeState(), composeStateOverrides),
        });
    }
    setUndoResponse(state) {
        this.undoResponse_ = state;
    }
    setUndoResponseWithUndoAndRedo(undoAvailable, redoAvailable) {
        this.undoResponse_ = Object.assign(getDefaultUndoRedoComposeState());
        this.undoResponse_.response.undoAvailable = undoAvailable;
        this.undoResponse_.response.redoAvailable = redoAvailable;
    }
    setResponseBeforeError(state) {
        this.responseBeforeError_ = state;
    }
    setRedoResponse(state) {
        this.redoResponse_ = state;
    }
    setRedoResponseWithUndoAndRedo(undoAvailable, redoAvailable) {
        this.redoResponse_ = Object.assign(getDefaultUndoRedoComposeState());
        this.redoResponse_.response.undoAvailable = undoAvailable;
        this.redoResponse_.response.redoAvailable = redoAvailable;
    }
    showUi() {
        this.methodCalled('showUi');
    }
}
