/**
 * @fileoverview The 'certificate-subpage' component is designed to show a
 * subpage. This subpage contains:
 *
 *   - header text
 *   - one or more lists of certs
 *   - a back button for navigating back to the previous page
 *
 * This component is used in the new Certificate Management UI in
 * ./certificate_manager.ts.
 */
import '/strings.m.js';
import './certificate_list.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CertificateSource } from './certificate_manager.mojom-webui.js';
import { Page } from './navigation.js';
export interface CertificateSubpageElement {
    $: {
        backButton: HTMLElement;
    };
}
export interface SubpageCertificateList {
    headerText: string;
    certSource: CertificateSource;
    certMetadataEditable?: boolean;
    hideExport?: boolean;
    showImport?: boolean;
    showImportAndBind?: boolean;
    hideIfEmpty?: boolean;
    hideHeader?: boolean;
}
declare const CertificateSubpageElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class CertificateSubpageElement extends CertificateSubpageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        subpageTitle: {
            type: StringConstructor;
        };
        subpageCertLists: {
            type: ArrayConstructor;
        };
        navigateBackTarget: {
            type: StringConstructor;
        };
    };
    accessor subpageTitle: string;
    accessor subpageCertLists: SubpageCertificateList[];
    accessor navigateBackTarget: Page;
    navigateBackSource: Page;
    setInitialFocus(): void;
    protected onBackButtonClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-subpage': CertificateSubpageElement;
    }
}
export {};
