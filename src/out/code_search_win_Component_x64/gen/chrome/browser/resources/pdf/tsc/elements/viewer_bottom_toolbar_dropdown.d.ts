import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ViewerBottomToolbarDropdownElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        buttonTitle: {
            type: StringConstructor;
        };
        showDropdown_: {
            type: BooleanConstructor;
        };
    };
    accessor buttonTitle: string;
    protected accessor showDropdown_: boolean;
    private tracker_;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onDropdownClick_(): void;
    private toggleDropdown_;
    private handleFocusOut_;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-bottom-toolbar-dropdown': ViewerBottomToolbarDropdownElement;
    }
}
