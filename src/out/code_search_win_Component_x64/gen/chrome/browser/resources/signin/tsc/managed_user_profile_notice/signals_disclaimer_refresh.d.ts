import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SignalsDisclaimerRefreshElement {
    $: {
        avatar: HTMLImageElement;
        title: HTMLElement;
        subtitle: HTMLElement;
        learnMoreLink: HTMLElement;
    };
}
export declare class SignalsDisclaimerRefreshElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pictureUrl: {
            type: StringConstructor;
        };
    };
    accessor pictureUrl: string;
    firstUpdated(): void;
    protected onLearnMoreClick_(): void;
    protected onLearnMoreKeydown_(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'signals-disclaimer-refresh': SignalsDisclaimerRefreshElement;
    }
}
