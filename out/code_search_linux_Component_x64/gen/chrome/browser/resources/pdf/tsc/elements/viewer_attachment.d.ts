import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Attachment } from '../constants.js';
export interface SaveAttachment {
    index: number;
}
declare global {
    interface HTMLElementEventMap {
        'save-attachment': CustomEvent<SaveAttachment>;
    }
}
export interface ViewerAttachmentElement {
    $: {
        title: HTMLElement;
        download: HTMLElement;
    };
}
export declare class ViewerAttachmentElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        attachment: {
            type: ObjectConstructor;
        };
        index: {
            type: NumberConstructor;
        };
        saveAllowed_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor attachment: Attachment;
    accessor index: number;
    protected accessor saveAllowed_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onDownloadClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-attachment': ViewerAttachmentElement;
    }
}
