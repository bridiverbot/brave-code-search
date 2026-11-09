// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Web client side actor message handler.
import { assert } from '//resources/js/assert.js';
import { //
GmailOtpErrorReason as GmailOtpErrorReasonMojo, //
SelectAutofillSuggestionsDialogErrorReason as SelectAutofillSuggestionsDialogErrorReasonMojo, //
SelectCredentialDialogErrorReason as SelectCredentialDialogErrorReasonMojo, //
 } from '../../actor_webui.mojom-webui.js';
import { enumFromClient, enumToClient } from '../../enum_conversions.js';
import { ActorClientReceiver, ActorHandlerRemote } from '../../glic.mojom-webui.js';
import { //
ActorTaskPauseReason, //
ActorTaskState, //
ActorTaskStopReason, //
CreateTaskErrorReason, //
FeatureMode, //
PerformActionsErrorReason, //
 } from '../../glic_api/glic_api.js';
import { ObservableValue as ObservableValueImpl, Subject } from '../../observable.js';
import { rgbaImageToBlob } from '../client/image_utils.js';
import { //
bitmapN32ToRGBAImage, //
byteArrayFromClient, //
getArrayBufferFromBigBuffer, //
idFromClient, //
idToClient, //
optionalFromClient, //
optionalToClient, //
originToClient, //
tabContextOptionsFromClient, //
tabContextToClient, //
urlToClient, //
 } from '../conversions.js';
import { maybeWrapWithLogging } from '../mojo_logging.js';
import { ErrorWithReasonImpl } from '../request_types.js';
import { assertNever } from '../transport/messaging.js';
// Implements actor-specific methods on GlicBrowserHost.
export class GlicBrowserHostActor {
    actorHandler;
    actorClientReceiver;
    userConfirmationDialogRequestSubject = new Subject();
    selectCredentialDialogRequestSubject = new Subject();
    navigationConfirmationRequestSubject = new Subject();
    actorTaskState = new Map();
    selectAutofillSuggestionsDialogRequestSubject = new Subject();
    selectGmailOtpOptInRequestSubject = new Subject();
    selectGmailOtpConfirmationRequestSubject = new Subject();
    journalHost;
    actOnWebCapabilityValue = ObservableValueImpl.withNoValue();
    actorTaskListRowClickedSubject = new Subject();
    // TODO: Remove this from the API.
    actInFocusedTab = undefined;
    initialize(initialState, handler) {
        if (!initialState.enableActInFocusedTab || !handler) {
            this.selectUserConfirmationDialogRequestHandler = undefined;
            this.selectCredentialDialogRequestHandler = undefined;
            this.selectNavigationConfirmationRequestHandler = undefined;
            this.selectAutofillSuggestionsDialogRequestHandler = undefined;
            this.getContextForActorFromTab = undefined;
            this.createTask = undefined;
            this.performActions = undefined;
            this.cancelActions = undefined;
            this.stopActorTask = undefined;
            this.pauseActorTask = undefined;
            this.resumeActorTask = undefined;
            this.interruptActorTask = undefined;
            this.uninterruptActorTask = undefined;
            this.updateActorTaskStepProgress = undefined;
            this.getActorTaskState = undefined;
            this.createActorTab = undefined;
            this.getActOnWebCapability = undefined;
            this.actorTaskListRowClicked = undefined;
            this.getJournalHost = undefined;
            return;
        }
        this.actorHandler = maybeWrapWithLogging(new ActorHandlerRemote(), { prefix: 'ActorHandler' });
        this.actorClientReceiver = new ActorClientReceiver(this);
        handler.createActorHandler(this.actorHandler.$.bindNewPipeAndPassReceiver(), this.actorClientReceiver.$.bindNewPipeAndPassRemote());
        this.journalHost = new GlicBrowserHostJournalImpl(this.actorHandler);
        if (!initialState.enableGmailOtpOptIn) {
            this.selectGmailOtpOptInRequestHandler = undefined;
        }
        if (!initialState.enableGmailOtpConfirmation) {
            this.selectGmailOtpConfirmationRequestHandler = undefined;
        }
        if (!initialState.enableGetContextActor) {
            // MOJO_RUNTIME_FEATURE_GATED GetContextForActorFromTab
            this.getContextForActorFromTab = undefined;
        }
    }
    destroyActor() {
        if (this.actorHandler) {
            this.actorHandler.$.close();
            this.actorHandler = undefined;
        }
        if (this.actorClientReceiver) {
            this.actorClientReceiver.$.close();
            this.actorClientReceiver = undefined;
        }
    }
    setActorTaskState(taskId, state) {
        const stateObs = this.getActorTaskState?.(taskId);
        stateObs?.assignAndSignal(state);
        if (state === ActorTaskState.STOPPED) {
            this.actorTaskState.delete(taskId);
        }
    }
    selectUserConfirmationDialogRequestHandler() {
        return this.userConfirmationDialogRequestSubject;
    }
    selectCredentialDialogRequestHandler() {
        return this.selectCredentialDialogRequestSubject;
    }
    selectNavigationConfirmationRequestHandler() {
        return this.navigationConfirmationRequestSubject;
    }
    selectGmailOtpOptInRequestHandler() {
        return this.selectGmailOtpOptInRequestSubject;
    }
    selectGmailOtpConfirmationRequestHandler() {
        return this.selectGmailOtpConfirmationRequestSubject;
    }
    selectAutofillSuggestionsDialogRequestHandler() {
        return this.selectAutofillSuggestionsDialogRequestSubject;
    }
    autofillSuggestionDialogOnFormPresented(taskId, params) {
        this.actorHandler?.autofillSuggestionDialogOnFormPresented(taskId, params);
    }
    autofillSuggestionDialogOnFormPreviewChanged(taskId, params) {
        this.actorHandler?.autofillSuggestionDialogOnFormPreviewChanged(taskId, {
            formFillingRequestIndex: params.formFillingRequestIndex,
            response: params.response ?? null,
        });
    }
    autofillSuggestionDialogOnFormConfirmed(taskId, params) {
        this.actorHandler?.autofillSuggestionDialogOnFormConfirmed(taskId, params);
    }
    async getContextForActorFromTab(tabId, options) {
        assert(this.actorHandler);
        const { result: { errorReason, tabContext } } = await this.actorHandler.getContextForActorFromTab(idFromClient(tabId), tabContextOptionsFromClient(options));
        if (!tabContext) {
            throw new Error(`tabContext failed: ${errorReason}`);
        }
        return tabContextToClient(tabContext);
    }
    async createTask(taskOptions) {
        assert(this.actorHandler);
        try {
            return await this.actorHandler.createTask(taskOptionsToMojo(taskOptions));
        }
        catch (errorReason) {
            throw new ErrorWithReasonImpl('createTask', errorReason ??
                CreateTaskErrorReason.UNKNOWN);
        }
    }
    async performActions(actions) {
        assert(this.actorHandler);
        try {
            const resultProto = await this.actorHandler.performActions(byteArrayFromClient(actions));
            const buffer = getArrayBufferFromBigBuffer(resultProto.smuggled);
            if (!buffer) {
                throw PerformActionsErrorReason.UNKNOWN;
            }
            return buffer;
        }
        catch (errorReason) {
            throw new ErrorWithReasonImpl('performActions', errorReason ??
                PerformActionsErrorReason.UNKNOWN);
        }
    }
    async cancelActions(taskId) {
        assert(this.actorHandler);
        const cancelResult = await this.actorHandler.cancelActions(taskId);
        return enumToClient(cancelResult.result);
    }
    stopActorTask(taskId, stopReason) {
        this.actorHandler?.stopActorTask(taskId ?? 0, enumFromClient(stopReason ?? ActorTaskStopReason.TASK_COMPLETE));
    }
    pauseActorTask(taskId, pauseReason, tabId) {
        this.actorHandler?.pauseActorTask(taskId, enumFromClient(pauseReason ?? ActorTaskPauseReason.PAUSED_BY_MODEL), idFromClient(tabId));
    }
    async resumeActorTask(taskId, tabContextOptions) {
        assert(this.actorHandler);
        const { result: { getContextResult, actionResult, }, } = await this.actorHandler.resumeActorTask(taskId, tabContextOptionsFromClient(tabContextOptions));
        if (!getContextResult.tabContext || actionResult === null) {
            throw new Error(`resumeActorTask failed: ${getContextResult.errorReason}`);
        }
        return resumeActorTaskResultToClient(getContextResult.tabContext, actionResult);
    }
    interruptActorTask(taskId, interruptReason) {
        this.actorHandler?.interruptActorTask(taskId, enumFromClient(interruptReason));
    }
    uninterruptActorTask(taskId) {
        this.actorHandler?.uninterruptActorTask(taskId);
    }
    updateActorTaskStepProgress(taskId, stepProgress) {
        this.actorHandler?.updateActorTaskStepProgress(taskId, stepProgress);
    }
    getActorTaskState(taskId) {
        const stateObs = this.actorTaskState.get(taskId);
        if (stateObs) {
            return stateObs;
        }
        // TODO(mcnee): The client could pass an id that will never have
        // state updates (e.g. the task already finished and we cleared the old
        // observable in setActorTaskState). Consider removing these cases from the
        // map when all subscribers are removed.
        const newObs = ObservableValueImpl.withNoValue();
        this.actorTaskState.set(taskId, newObs);
        return newObs;
    }
    async createActorTab(taskId, options) {
        assert(this.actorHandler);
        const response = await this.actorHandler.createActorTab(taskId, {
            initiatorTabId: idFromClient(options.initiatorTabId),
            initiatorWindowId: idFromClient(options.initiatorWindowId),
            openInBackground: options.openInBackground === true,
        });
        const tabData = response.tabData;
        if (tabData) {
            return {
                tabId: idToClient(tabData.tabId),
                windowId: idToClient(tabData.windowId),
                url: urlToClient(tabData.url),
                title: optionalToClient(tabData.title),
            };
        }
        throw new Error('createActorTab: failed');
    }
    getActOnWebCapability() {
        return this.actOnWebCapabilityValue;
    }
    actorTaskListRowClicked() {
        return this.actorTaskListRowClickedSubject;
    }
    getJournalHost() {
        assert(this.journalHost);
        return this.journalHost;
    }
    // ActorClientInterface implementation:
    notifyActorTaskStateChanged(taskId, state) {
        this.setActorTaskState(taskId, enumToClient(state));
    }
    async requestToShowCredentialSelectionDialog(request) {
        return new Promise(resolve => {
            if (!this.selectCredentialDialogRequestSubject.hasActiveSubscription()) {
                window.console.warn('GlicWebClient: no subscriber for ' +
                    'selectCredentialDialogRequest()!');
                resolve({
                    response: {
                        taskId: request.taskId,
                        errorReason: SelectCredentialDialogErrorReasonMojo
                            .kDialogPromiseNoSubscriber,
                        permissionDuration: null,
                        selectedCredentialId: null,
                    },
                });
                return;
            }
            const iconsGetter = new Map();
            if (request.icons) {
                for (const [id, value] of Object.entries(request.icons)) {
                    let promise;
                    iconsGetter.set(id, () => {
                        if (!promise) {
                            const rgbaImage = bitmapN32ToRGBAImage(value);
                            promise = Promise.resolve(rgbaImage ? rgbaImageToBlob(rgbaImage) : new Blob());
                        }
                        return promise;
                    });
                }
            }
            const credentials = request.credentials.map(credential => {
                const getIcon = iconsGetter.get(credential.sourceSiteOrApp);
                const accountPicture = credential.accountPicture ?
                    bitmapN32ToRGBAImage(credential.accountPicture) :
                    undefined;
                const getAccountPicture = accountPicture ?
                    () => Promise.resolve(rgbaImageToBlob(accountPicture)) :
                    undefined;
                return {
                    id: credential.id,
                    username: credential.username,
                    sourceSiteOrApp: credential.sourceSiteOrApp,
                    requestOrigin: originToClient(credential.requestOrigin),
                    type: enumToClient(credential.type),
                    getIcon,
                    getAccountPicture,
                };
            });
            const requestWithCallback = {
                taskId: request.taskId,
                showDialog: request.showDialog,
                credentials,
                onDialogClosed: (result) => {
                    resolve({
                        response: {
                            taskId: request.taskId,
                            errorReason: null,
                            permissionDuration: optionalFromClient(result.response.permissionDuration),
                            selectedCredentialId: result.response.selectedCredentialId ?? null,
                        },
                    });
                },
            };
            this.selectCredentialDialogRequestSubject.next(requestWithCallback);
        });
    }
    requestToShowUserConfirmationDialog(request) {
        return new Promise(resolve => {
            if (!this.userConfirmationDialogRequestSubject.hasActiveSubscription()) {
                window.console.warn('GlicWebClient: no subscriber for ' +
                    'userConfirmationDialogRequest()!');
                resolve({
                    response: {
                        result: {
                            permissionGranted: false,
                        },
                    },
                });
                return;
            }
            const requestWithCallback = {
                navigationOrigin: request.payload.navigationOrigin ?
                    originToClient(request.payload.navigationOrigin) :
                    undefined,
                forBlocklistedOrigin: request.payload.forBlocklistedOrigin,
                onDialogClosed: (result) => {
                    resolve({
                        response: {
                            result: {
                                permissionGranted: result.response.permissionGranted,
                            },
                        },
                    });
                },
            };
            this.userConfirmationDialogRequestSubject.next(requestWithCallback);
        });
    }
    requestToConfirmNavigation(request) {
        return new Promise(resolve => {
            if (!this.navigationConfirmationRequestSubject.hasActiveSubscription()) {
                window.console.warn('GlicWebClient: no subscriber for ' +
                    'navigationConfirmationRequest()!');
                resolve({
                    response: {
                        result: {
                            permissionGranted: false,
                        },
                    },
                });
                return;
            }
            const requestWithCallback = {
                taskId: request.taskId,
                navigationOrigin: originToClient(request.navigationOrigin),
                onConfirmationDecision: (result) => {
                    resolve({
                        response: {
                            result: {
                                permissionGranted: result.response.permissionGranted ?? false,
                            },
                        },
                    });
                },
            };
            this.navigationConfirmationRequestSubject.next(requestWithCallback);
        });
    }
    requestToShowAutofillSuggestionsDialog(request) {
        return new Promise(resolve => {
            if (!this.selectAutofillSuggestionsDialogRequestSubject
                .hasActiveSubscription()) {
                resolve({
                    response: {
                        taskId: request.taskId,
                        result: {
                            errorReason: SelectAutofillSuggestionsDialogErrorReasonMojo
                                .kDialogPromiseNoSubscriber,
                        },
                    },
                });
                return;
            }
            const requestWithCallback = {
                formFillingRequests: request.formFillingRequests.map(formFillingRequest => ({
                    requestedData: Number(formFillingRequest.requestedData),
                    formattedRequestOrigin: formFillingRequest.formattedRequestOrigin ?? undefined,
                    sectionLabel: formFillingRequest.sectionLabel ?? undefined,
                    suggestions: formFillingRequest.suggestions.map(suggestion => {
                        const icon = suggestion.icon ?
                            bitmapN32ToRGBAImage(suggestion.icon) :
                            undefined;
                        const getIcon = icon ?
                            () => Promise.resolve(rgbaImageToBlob(icon)) :
                            undefined;
                        return {
                            id: suggestion.id,
                            title: suggestion.title,
                            details: suggestion.details,
                            getIcon,
                        };
                    }),
                })),
                onDialogClosed: (result) => {
                    resolve({
                        response: {
                            taskId: request.taskId,
                            result: {
                                selectedSuggestions: result.response.selectedSuggestions,
                            },
                        },
                    });
                },
                onFormPresented: (params) => {
                    this.autofillSuggestionDialogOnFormPresented(request.taskId, params);
                },
                onFormPreviewChanged: (params) => {
                    this.autofillSuggestionDialogOnFormPreviewChanged(request.taskId, params);
                },
                onFormConfirmed: (params) => {
                    this.autofillSuggestionDialogOnFormConfirmed(request.taskId, params);
                },
            };
            this.selectAutofillSuggestionsDialogRequestSubject.next(requestWithCallback);
        });
    }
    requestToShowGmailOtpOptInDialog(request) {
        return new Promise(resolve => {
            if (!this.selectGmailOtpOptInRequestSubject.hasActiveSubscription()) {
                window.console.warn('GlicWebClient: no subscriber for ' +
                    'selectGmailOtpOptInRequestHandler()!');
                resolve({
                    result: {
                        errorReason: GmailOtpErrorReasonMojo.kRequestPromiseNoSubscriber,
                    },
                });
                return;
            }
            const requestWithCallback = {
                taskId: request.taskId,
                onDialogClosed: (response) => {
                    resolve({
                        result: {
                            response: {
                                permissionGranted: response.permissionGranted,
                            },
                        },
                    });
                },
            };
            this.selectGmailOtpOptInRequestSubject.next(requestWithCallback);
        });
    }
    requestToShowGmailOtpConfirmationDialog(request) {
        return new Promise(resolve => {
            if (!this.selectGmailOtpConfirmationRequestSubject
                .hasActiveSubscription()) {
                window.console.warn('GlicWebClient: no subscriber for ' +
                    'selectGmailOtpConfirmationRequestHandler()!');
                resolve({
                    result: {
                        errorReason: GmailOtpErrorReasonMojo.kRequestPromiseNoSubscriber,
                    },
                });
                return;
            }
            const requestWithCallback = {
                taskId: request.taskId,
                verificationCode: request.verificationCode,
                onDialogClosed: (response) => {
                    resolve({
                        result: {
                            response: {
                                permissionGranted: response.permissionGranted,
                            },
                        },
                    });
                },
            };
            this.selectGmailOtpConfirmationRequestSubject.next(requestWithCallback);
        });
    }
}
export class GlicBrowserHostJournalImpl {
    actorHandler;
    constructor(actorHandler) {
        this.actorHandler = actorHandler;
    }
    beginAsyncEvent(asyncEventId, taskId, event, details) {
        this.actorHandler.logBeginAsyncEvent(BigInt(asyncEventId), taskId, event, details);
    }
    clear() {
        this.actorHandler.journalClear();
    }
    endAsyncEvent(asyncEventId, details) {
        this.actorHandler.logEndAsyncEvent(BigInt(asyncEventId), details);
    }
    instantEvent(taskId, event, details) {
        this.actorHandler.logInstantEvent(taskId, event, details);
    }
    async snapshot(clear) {
        const result = await this.actorHandler.journalSnapshot(clear);
        const journalArray = new Uint8Array(result.journal.data);
        return {
            data: journalArray.buffer,
        };
    }
    start(maxBytes, captureScreenshots) {
        this.actorHandler.journalStart(BigInt(maxBytes), captureScreenshots);
    }
    stop() {
        this.actorHandler.journalStop();
    }
    recordFeedback(positive, reason) {
        this.actorHandler.journalRecordFeedback(positive, reason);
    }
}
assertNever();
function taskOptionsToMojo(taskOptions) {
    if (taskOptions) {
        return {
            title: taskOptions.title ?? null,
            duration: enumFromClient(taskOptions.duration),
            featureMode: enumFromClient(taskOptions.featureMode ?? FeatureMode.UNSPECIFIED),
            actuationTabId: taskOptions.actuationTabId ?
                idFromClient(taskOptions.actuationTabId) :
                null,
        };
    }
    return null;
}
function resumeActorTaskResultToClient(tabContext, actionResult) {
    return {
        ...tabContextToClient(tabContext),
        actionResult,
    };
}
