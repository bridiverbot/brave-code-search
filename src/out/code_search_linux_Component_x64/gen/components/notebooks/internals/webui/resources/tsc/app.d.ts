import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { FeatureFlagState, ProfileEligibility } from './notebooks_internals.mojom-webui.js';
export interface NotebooksInternalsAppElement {
    $: {
        eligibilityTable: HTMLTableElement;
        configTable: HTMLTableElement;
    };
}
export declare class NotebooksInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        featureFlags: {
            type: ObjectConstructor;
        };
        eligibility: {
            type: ObjectConstructor;
        };
    };
    accessor featureFlags: FeatureFlagState | null;
    accessor eligibility: ProfileEligibility | null;
    connectedCallback(): Promise<void>;
    private onEligibilityChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'notebooks-internals-app': NotebooksInternalsAppElement;
    }
}
