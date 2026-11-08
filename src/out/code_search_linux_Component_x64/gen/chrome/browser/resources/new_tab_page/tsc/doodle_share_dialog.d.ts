import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './doodle_icons.html.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface DoodleShareDialogElement {
    $: {
        dialog: CrDialogElement;
        copyButton: HTMLElement;
        doneButton: HTMLElement;
        emailButton: HTMLElement;
        title: HTMLElement;
        url: CrInputElement;
    };
}
/** Dialog that lets the user share the doodle. */
export declare class DoodleShareDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Title shown on the dialog. */
        title: {
            type: StringConstructor;
        };
        /** Share URL provided to the user. */
        url: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor title: string;
    accessor url: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    protected onFacebookClick_(): void;
    protected onTwitterClick_(): void;
    protected onEmailClick_(): void;
    protected onCopyClick_(): void;
    protected onCloseClick_(): void;
    private notifyShare_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-doodle-share-dialog': DoodleShareDialogElement;
    }
}
