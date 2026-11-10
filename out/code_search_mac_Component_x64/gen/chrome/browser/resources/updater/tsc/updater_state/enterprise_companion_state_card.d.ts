import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class EnterpriseCompanionStateCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        version: {
            type: StringConstructor;
        };
        installPath: {
            type: StringConstructor;
        };
    };
    accessor version: string | undefined;
    accessor installPath: string | undefined;
    protected onInstallPathClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'enterprise-companion-state-card': EnterpriseCompanionStateCardElement;
    }
}
