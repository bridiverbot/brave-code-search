import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './print_preview_vars.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
export interface PrintPreviewLinkContainerElement {
    $: {
        systemDialogLink: HTMLElement;
        systemDialogThrobber: HTMLElement;
    };
}
export declare class PrintPreviewLinkContainerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        appKioskMode: {
            type: BooleanConstructor;
        };
        destination: {
            type: ObjectConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        shouldShowSystemDialogLink_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        systemDialogLinkDisabled_: {
            type: BooleanConstructor;
        };
        openingSystemDialog_: {
            type: BooleanConstructor;
        };
        openingInPreview_: {
            type: BooleanConstructor;
        };
    };
    accessor appKioskMode: boolean;
    accessor destination: Destination | null;
    accessor disabled: boolean;
    protected accessor shouldShowSystemDialogLink_: boolean;
    protected accessor systemDialogLinkDisabled_: boolean;
    protected accessor openingSystemDialog_: boolean;
    protected accessor openingInPreview_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * @return Whether the system dialog link should be visible.
     */
    private computeShouldShowSystemDialogLink_;
    /**
     * @return Whether the system dialog link should be disabled
     */
    private computeSystemDialogLinkDisabled_;
    protected onSystemDialogClick_(): Promise<void>;
    /** @return Whether the system dialog link is available. */
    systemDialogLinkAvailable(): boolean;
}
export type LinkContainerElement = PrintPreviewLinkContainerElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-link-container': PrintPreviewLinkContainerElement;
    }
}
