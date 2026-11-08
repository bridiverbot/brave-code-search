import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ViewerErrorDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        reloadFn: {
            type: ObjectConstructor;
        };
    };
    accessor reloadFn: (() => void) | null | undefined;
    protected onReloadClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-error-dialog': ViewerErrorDialogElement;
    }
}
