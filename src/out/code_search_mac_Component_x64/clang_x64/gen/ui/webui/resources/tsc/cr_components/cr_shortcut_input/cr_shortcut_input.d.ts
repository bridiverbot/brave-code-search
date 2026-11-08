import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CrShortcutInputElement {
    $: {
        input: CrInputElement;
        edit: CrIconButtonElement;
        clear: CrIconButtonElement;
    };
}
declare const CrShortcutInputElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class CrShortcutInputElement extends CrShortcutInputElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shortcut: {
            type: StringConstructor;
        };
        inputAriaLabel: {
            type: StringConstructor;
        };
        editButtonAriaLabel: {
            type: StringConstructor;
        };
        clearButtonAriaLabel: {
            type: StringConstructor;
        };
        inputDisabled: {
            type: BooleanConstructor;
        };
        allowCtrlAltShortcuts: {
            type: BooleanConstructor;
        };
        error_: {
            type: NumberConstructor;
        };
        readonly_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor shortcut: string;
    accessor inputAriaLabel: string;
    accessor editButtonAriaLabel: string;
    accessor clearButtonAriaLabel: string;
    accessor inputDisabled: boolean;
    accessor allowCtrlAltShortcuts: boolean;
    protected accessor readonly_: boolean;
    private capturing_;
    private accessor error_;
    private pendingShortcut_;
    firstUpdated(): void;
    getBubbleAnchor(): CrIconButtonElement;
    private startCapture_;
    private endCapture_;
    private clearShortcut_;
    private onKeyDown_;
    private onKeyUp_;
    protected getErrorString_(): string;
    private handleKey_;
    private commitPending_;
    protected computePlaceholder_(): string;
    /**
     * @return The text to be displayed in the shortcut field.
     */
    protected computeText_(): string;
    protected getIsInvalid_(): boolean;
    protected onEditClick_(): void;
    protected onClearClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-shortcut-input': CrShortcutInputElement;
    }
}
export {};
