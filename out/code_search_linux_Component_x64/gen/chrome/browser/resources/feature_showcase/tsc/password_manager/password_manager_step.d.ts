import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../feature_showcase_step.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class FeatureShowcasePasswordManagerStepElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        buttonsDisabled: {
            type: BooleanConstructor;
        };
    };
    accessor buttonsDisabled: boolean;
    protected onConfirmClick_(): void;
    protected onSkipClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'feature-showcase-password-manager-step': FeatureShowcasePasswordManagerStepElement;
    }
}
