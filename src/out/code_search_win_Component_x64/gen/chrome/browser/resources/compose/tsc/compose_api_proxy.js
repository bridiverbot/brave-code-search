// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ComposeClientUntrustedPageHandlerRemote, ComposeSessionUntrustedPageHandlerFactory, ComposeSessionUntrustedPageHandlerRemote, ComposeUntrustedDialogCallbackRouter } from './compose.mojom-webui.js';
export class ComposeApiProxyImpl {
    static instance = null;
    composeSessionPageHandler = new ComposeSessionUntrustedPageHandlerRemote();
    composeClientPageHandler = new ComposeClientUntrustedPageHandlerRemote();
    router = new ComposeUntrustedDialogCallbackRouter();
    constructor() {
        const factoryRemote = ComposeSessionUntrustedPageHandlerFactory.getRemote();
        factoryRemote.createComposeSessionUntrustedPageHandler(this.composeClientPageHandler.$.bindNewPipeAndPassReceiver(), this.composeSessionPageHandler.$.bindNewPipeAndPassReceiver(), this.router.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return ComposeApiProxyImpl.instance ||
            (ComposeApiProxyImpl.instance = new ComposeApiProxyImpl());
    }
    static setInstance(newInstance) {
        ComposeApiProxyImpl.instance = newInstance;
    }
    acceptComposeResult() {
        return this.composeSessionPageHandler.acceptComposeResult().then(res => res.success);
    }
    logCancelEdit() {
        this.composeSessionPageHandler.logCancelEdit();
    }
    completeFirstRun() {
        this.composeClientPageHandler.completeFirstRun();
    }
    closeUi(reason) {
        this.composeClientPageHandler.closeUI(reason);
    }
    openComposeSettings() {
        this.composeClientPageHandler.openComposeSettings();
    }
    compose(input, mode, edited) {
        this.composeSessionPageHandler.compose(input, mode, edited);
    }
    rewrite(style) {
        this.composeSessionPageHandler.rewrite(style);
    }
    logEditInput() {
        this.composeSessionPageHandler.logEditInput();
    }
    getRouter() {
        return this.router;
    }
    openBugReportingLink() {
        this.composeSessionPageHandler.openBugReportingLink();
    }
    openComposeLearnMorePage() {
        this.composeSessionPageHandler.openComposeLearnMorePage();
    }
    openEnterpriseComposeLearnMorePage() {
        this.composeSessionPageHandler.openEnterpriseComposeLearnMorePage();
    }
    openFeedbackSurveyLink() {
        this.composeSessionPageHandler.openFeedbackSurveyLink();
    }
    openSignInPage() {
        this.composeSessionPageHandler.openSignInPage();
    }
    requestInitialState() {
        return this.composeSessionPageHandler.requestInitialState().then(res => res.initialState);
    }
    saveWebuiState(state) {
        this.composeSessionPageHandler.saveWebUIState(state);
    }
    showUi() {
        this.composeClientPageHandler.showUI();
    }
    setUserFeedback(reason) {
        this.composeSessionPageHandler.setUserFeedback(reason);
    }
    undo() {
        return this.composeSessionPageHandler.undo().then(composeState => composeState.lastState);
    }
    recoverFromErrorState() {
        return this.composeSessionPageHandler.recoverFromErrorState().then(composeState => composeState.stateBeforeError);
    }
    editResult(newResult) {
        return this.composeSessionPageHandler.editResult(newResult).then(res => res.isEdited);
    }
    redo() {
        return this.composeSessionPageHandler.redo().then(composeState => composeState.nextState);
    }
}
