/**
 * @fileoverview The 'certificate-list' component shows a list of
 * certificates with a header, an expander, and optionally an "export all"
 * button.
 *
 * This component is used in the new Certificate Management UI in
 * ./certificate_manager.ts.
 */
import '/strings.m.js';
import './certificate_entry.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import type { CrCollapseElement } from '//resources/cr_elements/cr_collapse/cr_collapse.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CertificateSource } from './certificate_manager.mojom-webui.js';
import type { ActionResult, SummaryCertInfo } from './certificate_manager.mojom-webui.js';
declare const CertificateListElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface CertificateListElement {
    $: {
        certs: CrCollapseElement;
        exportCerts: HTMLElement;
        importCert: HTMLElement;
        importAndBindCert: HTMLElement;
        noCertsRow: HTMLElement;
        listHeader: HTMLElement;
        expandButton: HTMLElement;
    };
}
export declare class CertificateListElement extends CertificateListElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        certSource: {
            type: NumberConstructor;
        };
        headerText: {
            type: StringConstructor;
        };
        showImport: {
            type: BooleanConstructor;
        };
        showImportAndBind: {
            type: BooleanConstructor;
        };
        noCollapse: {
            type: BooleanConstructor;
        };
        hideExport: {
            type: BooleanConstructor;
        };
        hideIfEmpty: {
            type: BooleanConstructor;
        };
        hideHeader: {
            type: BooleanConstructor;
        };
        certMetadataEditable: {
            type: BooleanConstructor;
        };
        inSubpage: {
            type: BooleanConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
        certificates_: {
            type: ArrayConstructor;
        };
        hasCerts_: {
            type: BooleanConstructor;
        };
    };
    accessor certSource: CertificateSource;
    accessor headerText: string;
    accessor showImport: boolean;
    accessor showImportAndBind: boolean;
    accessor noCollapse: boolean;
    accessor hideExport: boolean;
    accessor hideIfEmpty: boolean;
    accessor hideHeader: boolean;
    accessor certMetadataEditable: boolean;
    accessor inSubpage: boolean;
    protected accessor expanded_: boolean;
    protected accessor certificates_: SummaryCertInfo[];
    protected accessor hasCerts_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private onRefreshRequested_;
    protected refreshCertificates_(): void;
    protected onExportCertsClick_(e: Event): void;
    protected onImportCertClick_(e: Event): void;
    protected onImportAndBindCertClick_(e: Event): void;
    private handleImportResult;
    protected onDeleteResult_(e: CustomEvent<ActionResult | null>): void;
    protected shouldHideEverything_(): boolean;
    protected hideCollapseButton_(): boolean;
    protected hideExportButton_(): boolean;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected getListHeaderAdditionalClass_(): string;
    protected getCertsClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-list': CertificateListElement;
    }
}
export {};
