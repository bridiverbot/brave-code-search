import '//resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.js';
import '//resources/cr_components/theme_color_picker/theme_color_picker.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '../feature_showcase_step.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class FeatureShowcaseThemesAndCustomizationStepElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        buttonsDisabled: {
            type: BooleanConstructor;
        };
    };
    accessor buttonsDisabled: boolean;
    connectedCallback(): void;
    protected onConfirmClick_(): void;
    protected onSkipClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'feature-showcase-themes-and-customization-step': FeatureShowcaseThemesAndCustomizationStepElement;
    }
}
