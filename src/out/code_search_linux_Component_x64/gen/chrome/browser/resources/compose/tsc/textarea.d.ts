import './icons.html.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ConfigurableParams } from './compose.mojom-webui.js';
export interface ComposeTextareaElement {
    $: {
        editButtonContainer: HTMLElement;
        editButton: HTMLElement;
        tooShortError: HTMLElement;
        tooLongError: HTMLElement;
        input: HTMLTextAreaElement;
        readonlyText: HTMLElement;
    };
}
export declare class ComposeTextareaElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        allowExitingReadonlyMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inputParams: {
            type: ObjectConstructor;
        };
        readonly: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        invalidInput_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        tooLong_: {
            type: BooleanConstructor;
        };
        tooShort_: {
            type: BooleanConstructor;
        };
        value: {
            type: StringConstructor;
            notify: boolean;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor allowExitingReadonlyMode: boolean;
    accessor inputParams: ConfigurableParams;
    accessor readonly: boolean;
    protected accessor invalidInput_: boolean;
    protected accessor tooLong_: boolean;
    protected accessor tooShort_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    accessor value: string;
    private animator_;
    private placeholderText_;
    constructor();
    firstUpdated(): void;
    focusInput(): void;
    focusEditButton(): void;
    protected onEditClick_(): void;
    scrollInputToTop(): void;
    protected shouldShowEditIcon_(): boolean;
    protected onInput_(): void;
    protected onTextAreaChange_(): void;
    transitionToEditable(): void;
    transitionToReadonly(fromHeight?: number): void;
    transitionToEditing(bodyHeight: number): void;
    transitionToResult(bodyHeight: number): void;
    validate(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'compose-textarea': ComposeTextareaElement;
    }
}
