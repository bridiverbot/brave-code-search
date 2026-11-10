import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Scope } from './event_history.js';
export declare class ScopeIconElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        scope: {
            type: StringConstructor;
        };
        icon: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
    };
    accessor scope: Scope | undefined;
    protected accessor icon: string | undefined;
    protected accessor label: string | undefined;
    willUpdate(changedProperties: PropertyValues<this>): void;
    computeIcon(): string;
    computeLabel(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'scope-icon': ScopeIconElement;
    }
}
