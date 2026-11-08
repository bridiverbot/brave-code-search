import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '../shared_style.css.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordRecipientElement {
    $: {
        avatar: HTMLImageElement;
        name: HTMLElement;
        email: HTMLElement;
        checkbox: CrCheckboxElement;
    };
}
export declare class SharePasswordRecipientElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            value: boolean;
        };
        recipient: ObjectConstructor;
        selected: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
            notify: boolean;
        };
    };
    disabled: boolean;
    selected: boolean;
    recipient: chrome.passwordsPrivate.RecipientInfo;
    ready(): void;
    private onClick_;
    private onMouseOver_;
    private onMouseOut_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-recipient': SharePasswordRecipientElement;
    }
}
