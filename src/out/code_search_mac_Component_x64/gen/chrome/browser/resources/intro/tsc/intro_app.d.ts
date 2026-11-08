import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './sign_in_promo.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface IntroAppElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
export declare class IntroAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    connectedCallback(): void;
    private setupViewManager_;
}
declare global {
    interface HTMLElementTagNameMap {
        'intro-app': IntroAppElement;
    }
}
