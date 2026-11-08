import '/strings.m.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '../feature_showcase_step.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class FeatureShowcaseDefaultBrowserStepElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        buttonsDisabled: {
            type: BooleanConstructor;
        };
    };
    accessor buttonsDisabled: boolean;
    protected onConfirmButtonClick_(): void;
    protected onSkipButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'feature-showcase-default-browser-step': FeatureShowcaseDefaultBrowserStepElement;
    }
}
