import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../cr_input_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface CredentialNoteElement {
    $: {
        noteValue: HTMLElement;
        showMore: HTMLAnchorElement;
    };
}
declare const CredentialNoteElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class CredentialNoteElement extends CredentialNoteElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        note: StringConstructor;
        showNoteFully_: BooleanConstructor;
        alwaysExpanded: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    note: string;
    alwaysExpanded: boolean;
    private showNoteFully_;
    connectedCallback(): void;
    private getNoteValue_;
    private noteIsEmpty_;
    private isNoteFullyVisible_;
    private onshowMoreClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'credential-note': CredentialNoteElement;
    }
}
export {};
