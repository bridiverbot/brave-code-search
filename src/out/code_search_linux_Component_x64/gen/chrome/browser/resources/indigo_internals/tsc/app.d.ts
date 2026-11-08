import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CombinedEligibility, IndigoPrompt } from './indigo_internals.mojom-webui.js';
import { LocalEligibility, OptimizationGuideStatus } from './indigo_internals.mojom-webui.js';
export declare class IndigoInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        localEligibility_: {
            type: NumberConstructor;
        };
        optimizationGuideStatus_: {
            type: NumberConstructor;
        };
        combinedEligibility_: {
            type: ObjectConstructor;
        };
        lastUpdated_: {
            type: StringConstructor;
        };
        loadedPrompts_: {
            type: ArrayConstructor;
        };
        currentPromptKey_: {
            type: StringConstructor;
        };
        overridePrompt_: {
            type: StringConstructor;
        };
        integrationEnabled_: {
            type: BooleanConstructor;
        };
        skillId_: {
            type: StringConstructor;
        };
        skillName_: {
            type: StringConstructor;
        };
    };
    protected accessor localEligibility_: LocalEligibility | null;
    protected accessor optimizationGuideStatus_: OptimizationGuideStatus | null;
    protected accessor combinedEligibility_: CombinedEligibility | null;
    protected accessor lastUpdated_: string;
    protected accessor loadedPrompts_: IndigoPrompt[];
    protected accessor currentPromptKey_: string;
    protected accessor overridePrompt_: string;
    protected accessor integrationEnabled_: boolean;
    protected accessor skillId_: string;
    protected accessor skillName_: string;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getValueClass_(value: boolean | undefined): string;
    protected getValueText_(value: boolean | undefined): string;
    protected getLocalEligibilityText_(): string;
    protected getLocalEligibilityClass_(): string;
    protected getOptimizationGuideStatusText_(): string;
    protected getOptimizationGuideStatusClass_(): string;
    protected getIntegrationStatusText_(): string;
    protected getIntegrationStatusClass_(): string;
    protected onFetchCombinedClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'indigo-internals-app': IndigoInternalsAppElement;
    }
}
