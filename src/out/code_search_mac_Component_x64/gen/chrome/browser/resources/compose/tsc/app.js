// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '/strings.m.js';
import './textarea.js';
import './result_text.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { getInstance as getAnnouncerInstance } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { CrFeedbackOption } from '//resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert, assertNotReachedCase } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { isMac } from '//resources/js/platform.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ComposeAppAnimator } from './animations/app_animator.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { CloseReason, InputMode, StyleModifier, UserFeedback } from './compose.mojom-webui.js';
import { ComposeApiProxyImpl } from './compose_api_proxy.js';
import { ComposeStatus } from './compose_enums.mojom-webui.js';
/**
 * Delay required for screen readers to read out consecutive messages while
 * focus is being moved between elements.
 */
export const TIMEOUT_MS = 700;
const ComposeAppElementBase = I18nMixinLit(CrLitElement);
// Enumerates trigger points of compose or regenerate calls.
// Used to mark where a compose call was made so focus
// can be restored to the respective element afterwards.
var TriggerElement;
(function (TriggerElement) {
    TriggerElement[TriggerElement["SUBMIT_INPUT"] = 0] = "SUBMIT_INPUT";
    TriggerElement[TriggerElement["MODIFIER"] = 1] = "MODIFIER";
    TriggerElement[TriggerElement["UNDO"] = 2] = "UNDO";
    TriggerElement[TriggerElement["REDO"] = 3] = "REDO";
})(TriggerElement || (TriggerElement = {}));
export class ComposeAppElement extends ComposeAppElementBase {
    static get is() {
        return 'compose-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            editedInput_: { type: String },
            enableAnimations: {
                type: Boolean,
                reflect: true,
            },
            enableUpfrontInputModes: { type: Boolean },
            feedbackState_: { type: Number },
            hasPartialOutput_: { type: Boolean },
            input_: { type: String },
            inputParams_: { type: Object },
            isEditingSubmittedInput_: {
                type: Boolean,
                reflect: true,
            },
            isEditingResultText_: {
                type: Boolean,
                reflect: true,
            },
            isEditSubmitEnabled_: { type: Boolean },
            isSubmitEnabled_: { type: Boolean },
            loading_: {
                type: Boolean,
                reflect: true,
            },
            loadingIndicatorShown_: {
                type: Boolean,
                reflect: true,
            },
            response_: { type: Object },
            partialResponse_: { type: Object },
            showInputModes_: {
                type: Boolean,
                reflect: true,
            },
            selectedInputMode_: { type: Number },
            selectedModifier_: { type: String },
            textSelected_: { type: Boolean },
            enterprise_: { type: Boolean },
            showMainAppDialog_: { type: Boolean },
            submitted_: {
                type: Boolean,
                reflect: true,
            },
            undoEnabled_: { type: Boolean },
            redoEnabled_: { type: Boolean },
            feedbackEnabled_: { type: Boolean },
            responseText_: { type: Object },
            showFirstRunDialog_: { type: Boolean },
            showMSBBDialog_: { type: Boolean },
            outputComplete_: { type: Boolean },
            hasOutput_: { type: Boolean },
            displayedText_: { type: String },
            modifierOptions_: { type: Array },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #editedInput__accessor_storage = '';
    get editedInput_() { return this.#editedInput__accessor_storage; }
    set editedInput_(value) { this.#editedInput__accessor_storage = value; }
    #enableAnimations_accessor_storage = loadTimeData.getBoolean('enableAnimations');
    get enableAnimations() { return this.#enableAnimations_accessor_storage; }
    set enableAnimations(value) { this.#enableAnimations_accessor_storage = value; }
    #enableUpfrontInputModes_accessor_storage = loadTimeData.getBoolean('enableUpfrontInputModes');
    get enableUpfrontInputModes() { return this.#enableUpfrontInputModes_accessor_storage; }
    set enableUpfrontInputModes(value) { this.#enableUpfrontInputModes_accessor_storage = value; }
    #feedbackState__accessor_storage = CrFeedbackOption.UNSPECIFIED;
    get feedbackState_() { return this.#feedbackState__accessor_storage; }
    set feedbackState_(value) { this.#feedbackState__accessor_storage = value; }
    #hasPartialOutput__accessor_storage = false;
    get hasPartialOutput_() { return this.#hasPartialOutput__accessor_storage; }
    set hasPartialOutput_(value) { this.#hasPartialOutput__accessor_storage = value; }
    #input__accessor_storage = '';
    get input_() { return this.#input__accessor_storage; }
    set input_(value) { this.#input__accessor_storage = value; }
    #inputParams__accessor_storage = {
        minWordLimit: 0,
        maxWordLimit: 0,
        maxCharacterLimit: 0,
    };
    get inputParams_() { return this.#inputParams__accessor_storage; }
    set inputParams_(value) { this.#inputParams__accessor_storage = value; }
    #isEditingSubmittedInput__accessor_storage = false;
    get isEditingSubmittedInput_() { return this.#isEditingSubmittedInput__accessor_storage; }
    set isEditingSubmittedInput_(value) { this.#isEditingSubmittedInput__accessor_storage = value; }
    #isEditingResultText__accessor_storage = false;
    get isEditingResultText_() { return this.#isEditingResultText__accessor_storage; }
    set isEditingResultText_(value) { this.#isEditingResultText__accessor_storage = value; }
    #isEditSubmitEnabled__accessor_storage = true;
    get isEditSubmitEnabled_() { return this.#isEditSubmitEnabled__accessor_storage; }
    set isEditSubmitEnabled_(value) { this.#isEditSubmitEnabled__accessor_storage = value; }
    #isSubmitEnabled__accessor_storage = true;
    get isSubmitEnabled_() { return this.#isSubmitEnabled__accessor_storage; }
    set isSubmitEnabled_(value) { this.#isSubmitEnabled__accessor_storage = value; }
    #loading__accessor_storage = false;
    get loading_() { return this.#loading__accessor_storage; }
    set loading_(value) { this.#loading__accessor_storage = value; }
    #loadingIndicatorShown__accessor_storage = false;
    get loadingIndicatorShown_() { return this.#loadingIndicatorShown__accessor_storage; }
    set loadingIndicatorShown_(value) { this.#loadingIndicatorShown__accessor_storage = value; }
    #response__accessor_storage = null;
    get response_() { return this.#response__accessor_storage; }
    set response_(value) { this.#response__accessor_storage = value; }
    #partialResponse__accessor_storage = undefined;
    get partialResponse_() { return this.#partialResponse__accessor_storage; }
    set partialResponse_(value) { this.#partialResponse__accessor_storage = value; }
    #showInputModes__accessor_storage = false;
    get showInputModes_() { return this.#showInputModes__accessor_storage; }
    set showInputModes_(value) { this.#showInputModes__accessor_storage = value; }
    #selectedInputMode__accessor_storage = InputMode.kUnset;
    get selectedInputMode_() { return this.#selectedInputMode__accessor_storage; }
    set selectedInputMode_(value) { this.#selectedInputMode__accessor_storage = value; }
    #selectedModifier__accessor_storage = '';
    get selectedModifier_() { return this.#selectedModifier__accessor_storage; }
    set selectedModifier_(value) { this.#selectedModifier__accessor_storage = value; }
    #textSelected__accessor_storage = false;
    get textSelected_() { return this.#textSelected__accessor_storage; }
    set textSelected_(value) { this.#textSelected__accessor_storage = value; }
    #enterprise__accessor_storage = loadTimeData.getBoolean('useEnterpriseWithoutLoggingPolicy');
    get enterprise_() { return this.#enterprise__accessor_storage; }
    set enterprise_(value) { this.#enterprise__accessor_storage = value; }
    #showMainAppDialog__accessor_storage = false;
    get showMainAppDialog_() { return this.#showMainAppDialog__accessor_storage; }
    set showMainAppDialog_(value) { this.#showMainAppDialog__accessor_storage = value; }
    #submitted__accessor_storage = false;
    get submitted_() { return this.#submitted__accessor_storage; }
    set submitted_(value) { this.#submitted__accessor_storage = value; }
    #undoEnabled__accessor_storage = false;
    get undoEnabled_() { return this.#undoEnabled__accessor_storage; }
    set undoEnabled_(value) { this.#undoEnabled__accessor_storage = value; }
    #redoEnabled__accessor_storage = false;
    get redoEnabled_() { return this.#redoEnabled__accessor_storage; }
    set redoEnabled_(value) { this.#redoEnabled__accessor_storage = value; }
    #feedbackEnabled__accessor_storage = true;
    get feedbackEnabled_() { return this.#feedbackEnabled__accessor_storage; }
    set feedbackEnabled_(value) { this.#feedbackEnabled__accessor_storage = value; }
    #showFirstRunDialog__accessor_storage = false;
    get showFirstRunDialog_() { return this.#showFirstRunDialog__accessor_storage; }
    set showFirstRunDialog_(value) { this.#showFirstRunDialog__accessor_storage = value; }
    #showMSBBDialog__accessor_storage = false;
    get showMSBBDialog_() { return this.#showMSBBDialog__accessor_storage; }
    set showMSBBDialog_(value) { this.#showMSBBDialog__accessor_storage = value; }
    #outputComplete__accessor_storage = true;
    get outputComplete_() { return this.#outputComplete__accessor_storage; }
    set outputComplete_(value) { this.#outputComplete__accessor_storage = value; }
    #hasOutput__accessor_storage = false;
    get hasOutput_() { return this.#hasOutput__accessor_storage; }
    set hasOutput_(value) { this.#hasOutput__accessor_storage = value; }
    #displayedText__accessor_storage = '';
    get displayedText_() { return this.#displayedText__accessor_storage; }
    set displayedText_(value) { this.#displayedText__accessor_storage = value; }
    #modifierOptions__accessor_storage = [
        {
            value: StyleModifier.kUnset,
            label: loadTimeData.getString('modifierMenuTitle'),
            isDefault: true,
        },
        {
            value: StyleModifier.kLonger,
            label: loadTimeData.getString('longerOption'),
        },
        {
            value: StyleModifier.kShorter,
            label: loadTimeData.getString('shorterOption'),
        },
        {
            value: StyleModifier.kFormal,
            label: loadTimeData.getString('formalToneOption'),
        },
        {
            value: StyleModifier.kCasual,
            label: loadTimeData.getString('casualToneOption'),
        },
        {
            value: StyleModifier.kRetry,
            label: loadTimeData.getString('retryOption'),
        },
    ];
    get modifierOptions_() { return this.#modifierOptions__accessor_storage; }
    set modifierOptions_(value) { this.#modifierOptions__accessor_storage = value; }
    #responseText__accessor_storage = { text: '', isPartial: false, streamingEnabled: false };
    get responseText_() { return this.#responseText__accessor_storage; }
    set responseText_(value) { this.#responseText__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    animator_;
    apiProxy_ = ComposeApiProxyImpl.getInstance();
    eventTracker_ = new EventTracker();
    pendingSave_ = false;
    router_ = this.apiProxy_.getRouter();
    shouldShowMSBBDialog_ = false;
    userHasModifiedState_ = false;
    lastTriggerElement_ = null;
    userResponseText_;
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        this.animator_ = new ComposeAppAnimator(this, loadTimeData.getBoolean('enableAnimations'));
        this.getInitialState_();
        // If upfront inputs are enabled, the default mode should be set to Polish.
        if (this.enableUpfrontInputModes) {
            this.selectedInputMode_ = InputMode.kPolish;
        }
        this.router_.responseReceived.addListener(response => {
            this.composeResponseReceived_(response);
        });
        this.router_.partialResponseReceived.addListener(partialResponse => {
            this.partialComposeResponseReceived_(partialResponse);
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(document, 'visibilitychange', () => {
            if (document.visibilityState !== 'visible') {
                // Ensure app state is saved when hiding the dialog.
                this.saveComposeAppState_();
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('editedInput_') &&
            (this.editedInput_ !== '' ||
                changedPrivateProperties.get('editedInput_') !== undefined)) {
            this.userHasModifiedState_ = true;
        }
        if (changedPrivateProperties.has('input_') &&
            (this.input_ !== '' ||
                changedPrivateProperties.get('input_') !== undefined)) {
            this.userHasModifiedState_ = true;
        }
        if (changedPrivateProperties.has('loading_') ||
            changedPrivateProperties.has('hasOutput_')) {
            this.loadingIndicatorShown_ = this.loading_ && !this.hasOutput_;
        }
        if (changedPrivateProperties.has('submitted_') ||
            changedProperties.has('enableUpfrontInputModes')) {
            this.showInputModes_ = !this.submitted_ && this.enableUpfrontInputModes;
        }
        if (changedPrivateProperties.has('response_') ||
            changedPrivateProperties.has('partialResponse_')) {
            this.responseText_ = this.getResponseText_();
        }
        if (changedPrivateProperties.has('input_') ||
            changedPrivateProperties.has('isEditingSubmittedInput_') ||
            changedPrivateProperties.has('editedInput_')) {
            this.pendingSave_ = true;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('editedInput_')) {
            this.onEditedInputChanged_();
        }
        if (changedPrivateProperties.has('input_')) {
            this.onInputChanged_();
        }
        if (changedPrivateProperties.has('isEditingSubmittedInput_')) {
            this.onIsEditingSubmittedInputChanged_();
        }
        if (changedPrivateProperties.has('input_') ||
            changedPrivateProperties.has('isEditingSubmittedInput_') ||
            changedPrivateProperties.has('editedInput_')) {
            this.pendingSave_ = false;
            this.saveComposeAppState_();
        }
        if (changedPrivateProperties.has('outputComplete_') ||
            changedPrivateProperties.has('response_')) {
            this.updateResultComplete_();
        }
    }
    getResponseText_() {
        if (this.userResponseText_ !== undefined) {
            return {
                text: this.userResponseText_,
                isPartial: false,
                streamingEnabled: false,
            };
        }
        else if (this.response_) {
            return {
                text: this.response_.status === ComposeStatus.kOk ?
                    this.response_.result.trim() :
                    '',
                isPartial: false,
                streamingEnabled: this.partialResponse_ !== undefined,
            };
        }
        else if (this.partialResponse_) {
            return {
                text: this.partialResponse_?.result.trim(),
                isPartial: true,
                streamingEnabled: true,
            };
        }
        else {
            return { text: '', isPartial: false, streamingEnabled: false };
        }
    }
    getInitialState_() {
        this.apiProxy_.requestInitialState().then(initialState => {
            this.inputParams_ = initialState.configurableParams;
            // The dialog can initially be in one of three view states. Completion of
            // the FRE causes the dialog to show the MSBB state if MSBB is not
            // enabled, and the main app state otherwise.
            this.showFirstRunDialog_ = !initialState.freComplete;
            this.showMSBBDialog_ =
                initialState.freComplete && !initialState.msbbState;
            this.shouldShowMSBBDialog_ = !initialState.msbbState;
            this.showMainAppDialog_ =
                initialState.freComplete && initialState.msbbState;
            if (initialState.initialInput) {
                this.input_ = initialState.initialInput;
            }
            this.textSelected_ = initialState.textSelected;
            this.partialResponse_ = undefined;
            const composeState = initialState.composeState;
            this.feedbackState_ = userFeedbackToFeedbackOption(composeState.feedback);
            this.loading_ = composeState.hasPendingRequest;
            this.submitted_ =
                composeState.hasPendingRequest || Boolean(composeState.response);
            if (!composeState.hasPendingRequest) {
                // If there is a pending request, the existing response is outdated.
                this.response_ = composeState.response;
                this.undoEnabled_ = Boolean(this.response_?.undoAvailable);
                this.redoEnabled_ = Boolean(this.response_?.redoAvailable);
                this.feedbackEnabled_ = !this.response_?.providedByUser;
            }
            if (composeState.webuiState) {
                const appState = JSON.parse(composeState.webuiState);
                this.input_ = appState.input;
                this.selectedInputMode_ = appState.inputMode;
                this.updateInputMode_();
                if (appState.isEditingSubmittedInput) {
                    this.isEditingSubmittedInput_ = appState.isEditingSubmittedInput;
                    this.editedInput_ = appState.editedInput;
                }
            }
            if (this.showFirstRunDialog_) {
                this.animator_.transitionToFirstRun();
            }
            else {
                this.animator_.transitionInDialog();
            }
            // Wait for one timeout to flush tasks, then wait for the next render.
            setTimeout(() => {
                requestAnimationFrame(() => this.apiProxy_.showUi());
            });
        });
    }
    onFirstRunOkButtonClick_() {
        this.apiProxy_.completeFirstRun();
        if (this.shouldShowMSBBDialog_) {
            this.showMSBBDialog_ = true;
        }
        else {
            this.showMainAppDialog_ = true;
            this.animator_.transitionToInput();
        }
        this.showFirstRunDialog_ = false;
    }
    onFirstRunBottomTextClick_(e) {
        e.preventDefault();
        // Embedded links do not work in WebUI so handle in the parent event
        // listener.
        if (e.target.tagName === 'A') {
            if (this.enterprise_) {
                this.apiProxy_.openEnterpriseComposeLearnMorePage();
            }
            else {
                this.apiProxy_.openComposeLearnMorePage();
            }
        }
    }
    onCancelEditClick_() {
        const fullBodyHeight = this.$.body.offsetHeight;
        const resultContainerHeight = this.$.resultContainer.offsetHeight;
        this.isEditingSubmittedInput_ = false;
        this.$.textarea.focusEditButton();
        this.animator_.transitionFromEditingToResult(resultContainerHeight);
        this.$.textarea.transitionToResult(fullBodyHeight);
        this.$.editTextarea.transitionToResult(fullBodyHeight);
        this.apiProxy_.logCancelEdit();
    }
    onCloseClick_(e) {
        switch (e.target.id) {
            case 'firstRunCloseButton':
                this.apiProxy_.closeUi(CloseReason.kFirstRunCloseButton);
                break;
            case 'closeButtonMSBB':
                this.apiProxy_.closeUi(CloseReason.kMSBBCloseButton);
                break;
            case 'closeButton':
                this.apiProxy_.closeUi(CloseReason.kCloseButton);
                break;
            default:
                break;
        }
    }
    onEditedInputChanged_() {
        if (!this.isEditSubmitEnabled_) {
            this.isEditSubmitEnabled_ = this.$.editTextarea.validate();
        }
    }
    onEditClick_() {
        const fullBodyHeight = this.$.body.offsetHeight;
        const resultContainerHeight = this.$.resultContainer.offsetHeight;
        this.editedInput_ = this.input_;
        this.isEditingSubmittedInput_ = true;
        this.animator_.transitionFromResultToEditing(resultContainerHeight);
        this.$.textarea.transitionToEditing(fullBodyHeight);
        this.$.editTextarea.transitionToEditing(fullBodyHeight);
        this.apiProxy_.logEditInput();
    }
    onIsEditingSubmittedInputChanged_() {
        if (this.isEditingSubmittedInput_) {
            // When switching to editing the submitted input, manually move focus
            // to the input.
            this.$.editTextarea.focusInput();
        }
    }
    onSubmitClick_() {
        this.isSubmitEnabled_ = this.$.textarea.validate();
        if (!this.isSubmitEnabled_) {
            this.$.textarea.focusInput();
            return;
        }
        this.$.textarea.scrollInputToTop();
        const bodyHeight = this.$.body.offsetHeight;
        const footerHeight = this.$.submitFooter.offsetHeight;
        this.submitted_ = true;
        this.animator_.transitionOutSubmitFooter(bodyHeight, footerHeight);
        this.$.textarea.transitionToReadonly();
        this.compose_();
        this.lastTriggerElement_ = TriggerElement.SUBMIT_INPUT;
    }
    onSubmitEditClick_() {
        this.isEditSubmitEnabled_ = this.$.editTextarea.validate();
        if (!this.isEditSubmitEnabled_) {
            this.$.editTextarea.focusInput();
            return;
        }
        const bodyHeight = this.$.bodyAndFooter.offsetHeight;
        const editTextareaHeight = this.$.editTextarea.offsetHeight;
        this.isEditingSubmittedInput_ = false;
        this.input_ = this.editedInput_;
        this.animator_.transitionFromEditingToLoading(bodyHeight);
        this.$.textarea.transitionToReadonly(editTextareaHeight);
        this.$.editTextarea.transitionToReadonly(editTextareaHeight);
        this.compose_(true);
        this.lastTriggerElement_ = TriggerElement.SUBMIT_INPUT;
    }
    onAcceptClick_() {
        this.apiProxy_.acceptComposeResult().then((success) => {
            if (success) {
                this.apiProxy_.closeUi(CloseReason.kInsertButton);
            }
        });
    }
    onInputChanged_() {
        if (!this.isSubmitEnabled_) {
            this.isSubmitEnabled_ = this.$.textarea.validate();
        }
    }
    onModifierChange_() {
        const selectedModifier = Number(this.$.modifierMenu.value);
        this.rewrite_(selectedModifier);
        this.lastTriggerElement_ = TriggerElement.MODIFIER;
        // Immediately clear the selection after triggering a rewrite. A selected
        // index of 0 corresponds to the default value, which is disabled and cannot
        // be selected in the dialog.
        this.$.modifierMenu.selectedIndex = 0;
    }
    onPolishChipClick_() {
        this.selectedInputMode_ = InputMode.kPolish;
        this.updateInputMode_();
    }
    onElaborateChipClick_() {
        this.selectedInputMode_ = InputMode.kElaborate;
        this.updateInputMode_();
    }
    onFormalizeChipClick_() {
        this.selectedInputMode_ = InputMode.kFormalize;
        this.updateInputMode_();
    }
    updateInputMode_() {
        this.userHasModifiedState_ = true;
        this.saveComposeAppState_();
    }
    onModifierMenuKeydown_(e) {
        // On Windows and Linux, ArrowDown and ArrowUp key events directly change
        // the menu selection, which fires the `select` on-change event without
        // showing what selection was made.
        // MacOS keyboard controls opens the dropdown menu on ArrowUp/Down and thus
        // does not need to override behaviour.
        if (isMac) {
            return;
        }
        // Override keyboard controls for ArrowUp/Down to open the `select` menu.
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.$.modifierMenu.showPicker();
        }
    }
    onFooterClick_(e) {
        if (e.target.tagName !== 'A') {
            // Do nothing if a link is not clicked.
            return;
        }
        e.preventDefault();
        // The "File a bug", "survey", and "sign in" links are embedded into the
        // string. Embedded links do not work in WebUI so handle each click in the
        // parent event listener.
        switch (e.target.id) {
            case 'bugLink':
                this.apiProxy_.openBugReportingLink();
                break;
            case 'surveyLink':
                this.apiProxy_.openFeedbackSurveyLink();
                break;
            case 'signInLink':
                this.apiProxy_.openSignInPage();
                break;
            case 'enterpriseLearnMore':
                this.apiProxy_.openEnterpriseComposeLearnMorePage();
                break;
            default:
                this.apiProxy_.openComposeLearnMorePage();
        }
    }
    onMsbbSettingsClick_(e) {
        e.preventDefault();
        // Instruct the browser to open the corresponding settings page.
        this.apiProxy_.openComposeSettings();
    }
    compose_(inputEdited = false) {
        assert(this.$.textarea.validate());
        assert(this.submitted_);
        // 
        // For VoiceOver, the screen reader on Mac, to read consecutive alerts the
        // contents must change between announcements. To satisfy this, new results
        // are announced by alternating between this "loading" message and the
        // "updated" message. This is also done to announce updates for the undo
        // and redo functions.
        this.screenReaderAnnounce_(this.i18n('resultLoadingA11yMessage'));
        // 
        this.$.body.scrollTop = 0;
        this.loading_ = true;
        this.animator_.transitionInLoading();
        this.userResponseText_ = undefined;
        this.response_ = null;
        this.partialResponse_ = undefined;
        this.feedbackEnabled_ = true;
        this.saveComposeAppState_(); // Ensure state is saved before compose call.
        this.apiProxy_.compose(this.input_, this.selectedInputMode_, inputEdited);
    }
    rewrite_(style) {
        assert(this.$.textarea.validate());
        assert(this.submitted_);
        // 
        this.screenReaderAnnounce_(this.i18n('resultLoadingA11yMessage'));
        // 
        const bodyHeight = this.$.body.offsetHeight;
        const resultHeight = this.$.resultContainer.offsetHeight;
        this.$.body.scrollTop = 0;
        this.loading_ = true;
        this.userResponseText_ = undefined;
        this.response_ = null;
        this.partialResponse_ = undefined;
        this.feedbackEnabled_ = true;
        this.saveComposeAppState_(); // Ensure state is saved before compose call.
        this.apiProxy_.rewrite(style);
        this.animator_.transitionFromResultToLoading(bodyHeight, resultHeight);
    }
    async updateResultComplete_() {
        if (!this.response_) {
            return;
        }
        if (this.response_.status === ComposeStatus.kOk) {
            // Don't process OK status until outputComplete_ is true.
            if (!this.outputComplete_) {
                return;
            }
        }
        this.userResponseText_ = undefined;
        const loadingHeight = this.$.loading.offsetHeight;
        this.loading_ = false;
        this.undoEnabled_ = this.response_.undoAvailable;
        await this.updateComplete;
        this.$.textarea.transitionToEditable();
        if (!this.partialResponse_) {
            if (this.response_.status === ComposeStatus.kOk) {
                this.animator_.transitionFromLoadingToCompleteResult(loadingHeight);
            }
        }
        else {
            if (this.outputComplete_ && this.response_.status === ComposeStatus.kOk) {
                this.animator_.transitionFromPartialToCompleteResult();
            }
        }
        switch (this.lastTriggerElement_) {
            case TriggerElement.SUBMIT_INPUT:
                this.$.textarea.focusEditButton();
                break;
            case TriggerElement.MODIFIER:
                this.$.modifierMenu.focus({ preventScroll: true });
                break;
            case TriggerElement.UNDO:
                this.$.undoButton.focus();
                break;
            case TriggerElement.REDO:
                this.$.redoButton.focus();
                break;
            case null:
                break;
            default:
                assertNotReachedCase(this.lastTriggerElement_);
        }
        this.screenReaderAnnounce_(this.i18n('resultUpdatedA11yMessage'), TIMEOUT_MS);
    }
    composeResponseReceived_(response) {
        this.feedbackState_ = CrFeedbackOption.UNSPECIFIED;
        this.response_ = response;
        this.redoEnabled_ = false;
        this.feedbackEnabled_ = true;
    }
    partialComposeResponseReceived_(partialResponse) {
        assert(!this.response_);
        this.feedbackState_ = CrFeedbackOption.UNSPECIFIED;
        this.partialResponse_ = partialResponse;
    }
    hideResults_() {
        return !this.hasOutput_ && this.feedbackEnabled_;
    }
    hasSuccessfulResponse_() {
        return this.response_?.status === ComposeStatus.kOk;
    }
    hasPartialResponse_() {
        return Boolean(this.partialResponse_);
    }
    hasPartialOrCompleteResponse_() {
        return Boolean(this.partialResponse_) || this.hasSuccessfulResponse_();
    }
    hasFailedResponse_() {
        if (!this.response_) {
            return false;
        }
        return this.response_.status !== ComposeStatus.kOk;
    }
    hasErrorWithLink_() {
        return this.hasUnsupportedLanguageResponse_() ||
            this.hasPermissionDeniedResponse_();
    }
    hasUnsupportedLanguageResponse_() {
        if (!this.response_) {
            return false;
        }
        return this.response_.status === ComposeStatus.kUnsupportedLanguage;
    }
    hasPermissionDeniedResponse_() {
        if (!this.response_) {
            return false;
        }
        return this.response_.status === ComposeStatus.kPermissionDenied;
    }
    onDeviceEvaluationUsed_() {
        return Boolean(this.response_?.onDeviceEvaluationUsed);
    }
    showOnDeviceDogfoodFooter_() {
        return Boolean(this.response_?.onDeviceEvaluationUsed) &&
            loadTimeData.getBoolean('enableOnDeviceDogfoodFooter');
    }
    acceptButtonText_() {
        return this.textSelected_ ? this.i18n('replaceButton') :
            this.i18n('insertButton');
    }
    failedResponseErrorText_() {
        switch (this.response_?.status) {
            case ComposeStatus.kFiltered:
                return this.i18n('errorFiltered');
            case ComposeStatus.kRequestThrottled:
                return this.i18n('errorRequestThrottled');
            case ComposeStatus.kOffline:
                return this.i18n('errorOffline');
            case ComposeStatus.kRequestTimeout:
                return this.i18n('errorTryAgainLater');
            case ComposeStatus.kClientError:
            case ComposeStatus.kMisconfiguration:
            case ComposeStatus.kServerError:
            case ComposeStatus.kInvalidRequest:
            case ComposeStatus.kRetryableError:
            case ComposeStatus.kNonRetryableError:
            case ComposeStatus.kDisabled:
            case ComposeStatus.kCancelled:
            case ComposeStatus.kNoResponse:
            default:
                return this.i18n('errorTryAgain');
        }
    }
    isBackFromErrorAvailable_() {
        // True when the current response is a filtering error and resulted from
        // applying a modifier.
        return (this.response_?.status === ComposeStatus.kFiltered &&
            this.response_?.triggeredFromModifier);
    }
    onResultEdit_(e) {
        this.userResponseText_ = e.detail;
        this.apiProxy_.editResult(this.userResponseText_).then(isEdited => {
            if (isEdited) {
                this.undoEnabled_ = true;
                this.redoEnabled_ = false;
                this.feedbackEnabled_ = false;
                this.feedbackState_ = CrFeedbackOption.UNSPECIFIED;
            }
        });
    }
    onSetResultFocus_(e) {
        this.isEditingResultText_ = e.detail;
    }
    saveComposeAppState_() {
        if (this.pendingSave_) {
            // Partway through an update cycle where this method will be called in
            // updated().
            return;
        }
        if (!this.userHasModifiedState_) {
            return;
        }
        const state = {
            input: this.input_,
            inputMode: this.selectedInputMode_,
        };
        if (this.isEditingSubmittedInput_) {
            state.isEditingSubmittedInput = this.isEditingSubmittedInput_;
            state.editedInput = this.editedInput_;
        }
        this.apiProxy_.saveWebuiState(JSON.stringify(state));
    }
    async onUndoClick_() {
        // 
        this.screenReaderAnnounce_(this.i18n('undoResultA11yMessage'));
        // 
        try {
            const state = await this.apiProxy_.undo();
            if (state == null) {
                // Attempted to undo when there are no compose states available to undo.
                // Ensure undo is disabled since it is not possible.
                this.undoEnabled_ = false;
                return;
            }
            this.updateWithNewState_(state);
            // Focus is moved from the undo button to the redo button if undo is
            // disabled in the new state. Otherwise, the undo button always keeps
            // focus.
            if (this.undoEnabled_) {
                this.lastTriggerElement_ = TriggerElement.UNDO;
            }
            else {
                this.lastTriggerElement_ = TriggerElement.REDO;
            }
        }
        catch (error) {
            // Error (e.g., disconnected mojo pipe) from a rejected Promise. Allow the
            // user to try again as there should be a valid state to restore.
            // TODO(b/301368162): Ask UX how to handle the edge case of multiple
            // fails.
        }
    }
    async onErrorGoBackButtonClick_() {
        try {
            const state = await this.apiProxy_.recoverFromErrorState();
            // This button should only be enabled following application of a modifier,
            // which ensures a previous state to revert to.
            assert(state);
            this.updateWithNewState_(state);
        }
        catch (error) {
            // Error (e.g., disconnected mojo pipe) from a rejected Promise. Allow the
            // user to try again as there should be a valid state to restore.
            // TODO(b/301368162): Ask UX how to handle the edge case of multiple
            // fails.
        }
    }
    async onRedoClick_() {
        // 
        this.screenReaderAnnounce_(this.i18n('redoResultA11yMessage'));
        // 
        try {
            const state = await this.apiProxy_.redo();
            if (state == null) {
                // Attempted to redo when there are no compose states available to redo.
                // Ensure redo is disabled since it is not possible.
                this.redoEnabled_ = false;
                return;
            }
            this.updateWithNewState_(state);
            // If redo is disabled, then give focus to the undo button by default.
            if (this.redoEnabled_) {
                this.lastTriggerElement_ = TriggerElement.REDO;
            }
            else {
                this.lastTriggerElement_ = TriggerElement.UNDO;
            }
        }
        catch (error) {
            // Error (e.g., disconnected mojo pipe) from a rejected Promise. Allow the
            // user to try again as there should be a valid state to restore.
            // TODO(b/301368162): Ask UX how to handle the edge case of multiple
            // fails.
        }
    }
    updateWithNewState_(state) {
        // Restore the dialog to the given state.
        this.feedbackEnabled_ = !(state.response?.providedByUser);
        this.userResponseText_ =
            this.feedbackEnabled_ ? undefined : state.response?.result;
        this.response_ = state.response;
        this.partialResponse_ = undefined;
        this.undoEnabled_ = Boolean(state.response?.undoAvailable);
        this.redoEnabled_ = Boolean(state.response?.redoAvailable);
        this.feedbackState_ = userFeedbackToFeedbackOption(state.feedback);
        if (state.webuiState) {
            const appState = JSON.parse(state.webuiState);
            this.input_ = appState.input;
        }
    }
    screenReaderAnnounce_(message, wait = 0) {
        setTimeout(() => {
            const announcer = getAnnouncerInstance();
            announcer.announce(message, wait);
        });
    }
    onFeedbackSelectedOptionChanged_(e) {
        this.feedbackState_ = e.detail.value;
        switch (e.detail.value) {
            case CrFeedbackOption.UNSPECIFIED:
                this.apiProxy_.setUserFeedback(UserFeedback.kUserFeedbackUnspecified);
                return;
            case CrFeedbackOption.THUMBS_UP:
                this.apiProxy_.setUserFeedback(UserFeedback.kUserFeedbackPositive);
                return;
            case CrFeedbackOption.THUMBS_DOWN:
                this.apiProxy_.setUserFeedback(UserFeedback.kUserFeedbackNegative);
                return;
            default:
                assertNotReachedCase(e.detail.value);
        }
    }
    onInputValueChanged_(e) {
        this.input_ = e.detail.value;
    }
    onEditedInputValueChanged_(e) {
        this.editedInput_ = e.detail.value;
    }
    onIsOutputCompleteChanged_(e) {
        this.outputComplete_ = e.detail.value;
    }
    onHasOutputChanged_(e) {
        this.hasOutput_ = e.detail.value;
    }
    onHasPartialOutputChanged_(e) {
        this.hasPartialOutput_ = e.detail.value;
    }
    isInputModeSelected_(mode) {
        return this.selectedInputMode_ === mode;
    }
    getChipIcon_(mode) {
        if (this.isInputModeSelected_(mode)) {
            return 'cr:check';
        }
        switch (mode) {
            case InputMode.kPolish:
                return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'compose:edit-fix-auto' :
                    'compose:polish-old');
            case InputMode.kElaborate:
                return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'compose:expand' :
                    'compose:elaborate-old');
            case InputMode.kFormalize:
                return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'compose:work' :
                    'compose:formalize-old');
            default:
                return '';
        }
    }
}
function userFeedbackToFeedbackOption(userFeedback) {
    switch (userFeedback) {
        case UserFeedback.kUserFeedbackUnspecified:
            return CrFeedbackOption.UNSPECIFIED;
        case UserFeedback.kUserFeedbackPositive:
            return CrFeedbackOption.THUMBS_UP;
        case UserFeedback.kUserFeedbackNegative:
            return CrFeedbackOption.THUMBS_DOWN;
        default:
            assertNotReachedCase(userFeedback);
    }
}
customElements.define(ComposeAppElement.is, ComposeAppElement);
