import './feature_showcase_stepper.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class FeatureShowcaseStepElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'feature-showcase-step': FeatureShowcaseStepElement;
    }
}
