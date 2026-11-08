/**
 * @fileoverview The 'crs-section' component is the Chrome Root Store
 * section of the Certificate Management V2 UI.
 */
import './certificate_list.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CertificateListElement } from './certificate_list.js';
export interface CrsSectionElement {
    $: {
        crsCerts: CertificateListElement;
    };
}
export declare class CrsSectionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        crsLearnMoreUrl_: {
            type: StringConstructor;
        };
    };
    protected accessor crsLearnMoreUrl_: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'crs-section': CrsSectionElement;
    }
}
