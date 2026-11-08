import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class ExtensionControlledIndicatorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensionCanBeDisabled: {
            type: BooleanConstructor;
        };
        extensionId: {
            type: StringConstructor;
        };
        extensionName: {
            type: StringConstructor;
        };
        extensionNameOnlyInLabel: {
            type: BooleanConstructor;
        };
    };
    accessor extensionCanBeDisabled: boolean;
    accessor extensionId: string;
    accessor extensionName: string;
    accessor extensionNameOnlyInLabel: boolean;
    protected getLabel_(): string;
    protected onManageClick_(): void;
    protected onDisableClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extension-controlled-indicator': ExtensionControlledIndicatorElement;
    }
}
