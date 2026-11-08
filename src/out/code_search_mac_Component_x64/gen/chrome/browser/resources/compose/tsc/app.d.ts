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
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrChipElement } from '//resources/cr_elements/cr_chip/cr_chip.js';
import type { CrFeedbackButtonsElement } from '//resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import { CrFeedbackOption } from '//resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ComposeResponse, ConfigurableParams, PartialComposeResponse } from './compose.mojom-webui.js';
import { InputMode, StyleModifier } from './compose.mojom-webui.js';
import type { ComposeResultTextElement, TextInput } from './result_text.js';
import type { ComposeTextareaElement } from './textarea.js';
export interface ComposeAppState {
    editedInput?: string;
    input: string;
    inputMode: InputMode;
    isEditingSubmittedInput?: boolean;
}
interface ModifierOption {
    value: StyleModifier;
    label: string;
    isDefault?: boolean;
}
export interface ComposeAppElement {
    $: {
        firstRunDialog: HTMLElement;
        firstRunFooter: HTMLElement;
        firstRunOkButton: CrButtonElement;
        freMsbbDialog: HTMLElement;
        appDialog: HTMLElement;
        body: HTMLElement;
        bodyAndFooter: HTMLElement;
        cancelEditButton: CrButtonElement;
        closeButton: HTMLElement;
        firstRunCloseButton: HTMLElement;
        closeButtonMSBB: HTMLElement;
        editTextarea: ComposeTextareaElement;
        errorFooter: HTMLElement;
        errorGoBackButton: CrButtonElement;
        acceptButton: CrButtonElement;
        loading: HTMLElement;
        undoButton: CrButtonElement;
        redoButton: CrButtonElement;
        resultContainer: HTMLElement;
        resultTextContainer: HTMLElement;
        resultFooter: HTMLElement;
        submitButton: CrButtonElement;
        submitEditButton: CrButtonElement;
        submitFooter: HTMLElement;
        onDeviceUsedFooter: HTMLElement;
        textarea: ComposeTextareaElement;
        modifierMenu: HTMLSelectElement;
        resultText: ComposeResultTextElement;
        feedbackButtons: CrFeedbackButtonsElement;
        polishChip: CrChipElement;
        elaborateChip: CrChipElement;
        formalizeChip: CrChipElement;
    };
}
/**
 * Delay required for screen readers to read out consecutive messages while
 * focus is being moved between elements.
 */
export declare const TIMEOUT_MS: number;
declare const ComposeAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ComposeAppElement extends ComposeAppElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        editedInput_: {
            type: StringConstructor;
        };
        enableAnimations: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enableUpfrontInputModes: {
            type: BooleanConstructor;
        };
        feedbackState_: {
            type: NumberConstructor;
        };
        hasPartialOutput_: {
            type: BooleanConstructor;
        };
        input_: {
            type: StringConstructor;
        };
        inputParams_: {
            type: ObjectConstructor;
        };
        isEditingSubmittedInput_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isEditingResultText_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isEditSubmitEnabled_: {
            type: BooleanConstructor;
        };
        isSubmitEnabled_: {
            type: BooleanConstructor;
        };
        loading_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        loadingIndicatorShown_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        response_: {
            type: ObjectConstructor;
        };
        partialResponse_: {
            type: ObjectConstructor;
        };
        showInputModes_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectedInputMode_: {
            type: NumberConstructor;
        };
        selectedModifier_: {
            type: StringConstructor;
        };
        textSelected_: {
            type: BooleanConstructor;
        };
        enterprise_: {
            type: BooleanConstructor;
        };
        showMainAppDialog_: {
            type: BooleanConstructor;
        };
        submitted_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        undoEnabled_: {
            type: BooleanConstructor;
        };
        redoEnabled_: {
            type: BooleanConstructor;
        };
        feedbackEnabled_: {
            type: BooleanConstructor;
        };
        responseText_: {
            type: ObjectConstructor;
        };
        showFirstRunDialog_: {
            type: BooleanConstructor;
        };
        showMSBBDialog_: {
            type: BooleanConstructor;
        };
        outputComplete_: {
            type: BooleanConstructor;
        };
        hasOutput_: {
            type: BooleanConstructor;
        };
        displayedText_: {
            type: StringConstructor;
        };
        modifierOptions_: {
            type: ArrayConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor editedInput_: string;
    accessor enableAnimations: boolean;
    accessor enableUpfrontInputModes: boolean;
    protected accessor feedbackState_: CrFeedbackOption;
    protected accessor hasPartialOutput_: boolean;
    protected accessor input_: string;
    protected accessor inputParams_: ConfigurableParams;
    protected accessor isEditingSubmittedInput_: boolean;
    protected accessor isEditingResultText_: boolean;
    protected accessor isEditSubmitEnabled_: boolean;
    protected accessor isSubmitEnabled_: boolean;
    protected accessor loading_: boolean;
    protected accessor loadingIndicatorShown_: boolean;
    protected accessor response_: ComposeResponse | null;
    protected accessor partialResponse_: PartialComposeResponse | undefined;
    protected accessor showInputModes_: boolean;
    protected accessor selectedInputMode_: InputMode;
    protected accessor selectedModifier_: string;
    protected accessor textSelected_: boolean;
    protected accessor enterprise_: boolean;
    protected accessor showMainAppDialog_: boolean;
    protected accessor submitted_: boolean;
    protected accessor undoEnabled_: boolean;
    protected accessor redoEnabled_: boolean;
    protected accessor feedbackEnabled_: boolean;
    protected accessor showFirstRunDialog_: boolean;
    protected accessor showMSBBDialog_: boolean;
    protected accessor outputComplete_: boolean;
    protected accessor hasOutput_: boolean;
    protected accessor displayedText_: string;
    protected accessor modifierOptions_: ModifierOption[];
    protected accessor responseText_: TextInput;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private animator_;
    private apiProxy_;
    private eventTracker_;
    private pendingSave_;
    private router_;
    private shouldShowMSBBDialog_;
    private userHasModifiedState_;
    private lastTriggerElement_;
    private userResponseText_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private getResponseText_;
    private getInitialState_;
    protected onFirstRunOkButtonClick_(): void;
    protected onFirstRunBottomTextClick_(e: Event): void;
    protected onCancelEditClick_(): void;
    protected onCloseClick_(e: Event): void;
    private onEditedInputChanged_;
    protected onEditClick_(): void;
    private onIsEditingSubmittedInputChanged_;
    protected onSubmitClick_(): void;
    protected onSubmitEditClick_(): void;
    protected onAcceptClick_(): void;
    private onInputChanged_;
    protected onModifierChange_(): void;
    protected onPolishChipClick_(): void;
    protected onElaborateChipClick_(): void;
    protected onFormalizeChipClick_(): void;
    private updateInputMode_;
    protected onModifierMenuKeydown_(e: KeyboardEvent): void;
    protected onFooterClick_(e: Event): void;
    protected onMsbbSettingsClick_(e: Event): void;
    private compose_;
    private rewrite_;
    private updateResultComplete_;
    private composeResponseReceived_;
    private partialComposeResponseReceived_;
    protected hideResults_(): boolean;
    protected hasSuccessfulResponse_(): boolean;
    protected hasPartialResponse_(): boolean;
    protected hasPartialOrCompleteResponse_(): boolean;
    protected hasFailedResponse_(): boolean;
    protected hasErrorWithLink_(): boolean;
    protected hasUnsupportedLanguageResponse_(): boolean;
    protected hasPermissionDeniedResponse_(): boolean;
    protected onDeviceEvaluationUsed_(): boolean;
    protected showOnDeviceDogfoodFooter_(): boolean;
    protected acceptButtonText_(): string;
    protected failedResponseErrorText_(): string;
    protected isBackFromErrorAvailable_(): boolean;
    protected onResultEdit_(e: CustomEvent<string>): void;
    protected onSetResultFocus_(e: CustomEvent<boolean>): void;
    private saveComposeAppState_;
    protected onUndoClick_(): Promise<void>;
    protected onErrorGoBackButtonClick_(): Promise<void>;
    protected onRedoClick_(): Promise<void>;
    private updateWithNewState_;
    private screenReaderAnnounce_;
    protected onFeedbackSelectedOptionChanged_(e: CustomEvent<{
        value: CrFeedbackOption;
    }>): void;
    protected onInputValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onEditedInputValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onIsOutputCompleteChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onHasOutputChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onHasPartialOutputChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected isInputModeSelected_(mode: InputMode): boolean;
    protected getChipIcon_(mode: InputMode): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'compose-app': ComposeAppElement;
    }
}
export {};
