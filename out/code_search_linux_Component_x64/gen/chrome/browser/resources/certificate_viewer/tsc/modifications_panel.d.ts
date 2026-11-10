import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '/strings.m.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const ModificationsPanelElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface ModificationsPanelElement {
    $: {
        addConstraintSection: HTMLElement;
        addConstraintInput: CrInputElement;
        addConstraintButton: CrButtonElement;
        constraintListSection: HTMLElement;
        constraintDeleteError: HTMLElement;
        trustStateSelect: HTMLSelectElement;
        trustStateSelectError: HTMLElement;
    };
}
export declare class ModificationsPanelElement extends ModificationsPanelElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        constraints: {
            type: ArrayConstructor;
        };
        trustStateValue: {
            type: StringConstructor;
        };
        isEditable: {
            type: BooleanConstructor;
        };
        editControlsEnabled: {
            type: BooleanConstructor;
        };
        addConstraintErrorMessage: {
            type: StringConstructor;
        };
        deleteConstraintErrorMessage: {
            type: StringConstructor;
        };
        trustStateErrorMessage: {
            type: StringConstructor;
        };
    };
    accessor constraints: string[];
    accessor trustStateValue: string;
    accessor isEditable: boolean;
    protected accessor editControlsEnabled: boolean;
    protected accessor addConstraintErrorMessage: string;
    protected accessor deleteConstraintErrorMessage: string;
    protected accessor trustStateErrorMessage: string;
    private clearErrorMessages;
    protected onDeleteConstraintClick_(e: Event): void;
    private onDeleteConstraintFinished_;
    protected onAddConstraintClick_(): void;
    private onAddConstraintFinished_;
    protected onTrustStateChange_(): void;
    private onTrustStateChangeFinished_;
    protected onConstraintKeypress_(event: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'modifications-panel': ModificationsPanelElement;
    }
}
export {};
